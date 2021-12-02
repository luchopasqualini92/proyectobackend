const express = require("express")
const { Router } = express;
const fs = require("fs");

const router = new Router()

router.get("/", (req, res) => {
    fs.readFile("./db/productos.txt", "utf-8", (err,data) => {
        res.send(JSON.parse(data))
    })
})

router.get("/:id" , (req, res) => {
    fs.readFile("./db/productos.txt", "utf-8", (err,data) => {
        let dataFile = JSON.parse(data)
        dataFile.filter(item => item.id == req.params.id) == "" ? res.send({message: "error: producto no encontrado"}) : res.send(dataFile.filter(item => item.id == req.params.id))
    })
});

router.post("/", (req, res) => {
    console.log(req.body);

    fs.readFile("./db/productos.txt", "utf-8", (err,data) => {
        let dataFile = JSON.parse(data)
        let items = dataFile.length;
        let id = dataFile[items - 1].id + 1;
        let newProd = {
                nombre: req.body.nombre,
                precio: req.body.precio,
                thumb: req.body.thumb,
                id: id
            }
        
        dataFile.push(newProd)
        fs.writeFile("./db/productos.txt", JSON.stringify(dataFile, null, 2), (err,data) =>{
            console.log("Producto guardado!");
        })
    })   
    res.send("Esto es un POST!")
});

router.put("/:id", (req, res) => {
    let { id } = req.params;
    console.log(id);
    fs.readFile("./db/productos.txt", "utf-8", (err,data) => {
        let dataFile = JSON.parse(data)
        let item = dataFile.filter(item => item.id == id);
        item = {
            nombre: req.body.nombre,
            precio: req.body.precio,
            thumb: req.body.thumb,
        }
        fs.writeFile("./db/productos.txt", JSON.stringify(dataFile, null, 2), (err,data) =>{
            console.log("Producto actualizado con éxito!");
        })
    })
    res.send({message: "Esto es un PUT"})
});

// //PUT
// app.put("/:id", (req,res) =>{
//   let index = arr.findIndex( x => {
//     return x.id == req.params.id
//   });
//   arr[index].name = req.body.name
//   arr[index].lastName = req.body.lastName

//   res.send({message: "Usuario actualizado!"})
// })

router.delete("/:id", (req, res) => {
    let { id } = req.params;
    console.log(typeof(id));
    fs.readFile("./db/productos.txt", "utf-8", (err,data) => {
        let dataFile = JSON.parse(data)
        let newArray = dataFile.filter(item => item.id !== parseInt(id));
        console.log(newArray);
        fs.writeFile("./db/productos.txt", JSON.stringify(newArray, null, 2), (err,data) =>{
            console.log("Producto eliminado!");
        })
    })
    res.send({message: `Se ha borrado el producto id: ${id}`})
})

module.exports = router;