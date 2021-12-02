const express = require("express");
const app = express();
const port = process.env.PORT || 8080 
const productRoutes = require("./routes/productos")

app.use(express.json())
app.use(express.urlencoded({extended: false})) // para los datos que vienen del formulario.
app.use("/api/productos", productRoutes)

// ESTATICOS >> van dentro de la carpeta public
app.use("/", express.static(__dirname+"/public")) 


app.listen(port, () => {
console.log("Server run on port " + port);
});