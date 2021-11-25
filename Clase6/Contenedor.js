const getData = require("./helpers/getData");
const writeData = require("./helpers/writeData");

class Contenedor {
    constructor(file){
        this.file = file
    }

    async save(product) {
        let dataFile = await getData(this.file)
        // console.log(dataFile.length);
        if (dataFile.length > 0) {
            let items = dataFile.length;
            product.id = dataFile[items - 1].id + 1;
            dataFile.push(product);
            writeData(this.file, dataFile);
            console.log("Producto guardado con éxito");
        } else {
            product.id = 1;
            const newProd = [{...product, id:product.id}]
            console.log("Primer producto guardado");
            // cheuqear si puede hacer push a algo que no existe
            writeData(this.file, newProd)
        }
    }
    
    async getById(id) {
        try {
            let dataFile = await getData(this.file)
            dataFile.find(item => item.id === id) !== undefined ? console.log(dataFile.filter(item => item.id === id)) : null    
        } catch (err) {
            console.log("Error al obtener el producto: ", err)
        }        
    }
    
    async getAll() {
        try{
            let dataFile = await getData(this.file)
            console.log(dataFile);
        }
        catch (err) {
            console.log("Error al obtener todos: ", err)
        }
    }
    
    async deleteId(id) {
        try{
            let dataFile = await getData(this.file)
            const newProducts = dataFile.filter(item => item.id !== id)
            // para sobreescribir el archivo
            await writeData(this.file, newProducts);
            console.log("Producto eliminado");
            }
        catch (err) {
            console.log("Error al elimiar el id: ", err);
        }
    }
    
    async deleteAll(file) {
        try {
            await writeData(this.file, '');
            console.log("Todos los productos borrados");
            return;
        } catch (err) {
            console.log("Error al elimiar todos: ", err)
        }
    }
}
module.exports = Contenedor;