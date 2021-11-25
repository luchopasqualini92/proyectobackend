const express = require("express");
const fs = require("fs");

const app = express();
const port = process.env.PORT || 8080 
function getRand(min, max) {
    return Math.floor(Math.random()*(max-min) + min)
}

app.get("/", (req,res) => {
    res.send(`<h1 style="color:blue">Bienvenidos al servidor express</h1>`)
})

app.get("/productos", (req,res) => {
    fs.readFile("./db/productos.txt", "utf-8", (err,data) => {
        res.send(JSON.parse(data))
    })
})

app.get("/productoRandom", (req,res) => {
    fs.readFile("./db/productos.txt", "utf-8", (err,data) => {
        let id = getRand(1, JSON.parse(data).length)
        let dataFile = JSON.parse(data)
        res.send(dataFile.filter(item => item.id === id))
    })
})

app.listen(port, () => {
    console.log("Server run on port " + port);
})