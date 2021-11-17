const Contenedor = require("./entrega");

let prod1 = {"nombre": "Kilometro 24.7", "precio": "150", "thumb": "https://www.comprasparaguai.com.br/media/fotos/produtos/thumbs/big/070eadd3a319b9cd7d5842a53dad3d7a86624585.jpg"}
let prod2 = {"nombre": "Kuné", "precio": "200",  "thumb": "https://gobar.vteximg.com.br/arquivos/ids/157555-1000-1000/patagonia-kune-lata-473--2-.jpg?v=637235178939530000"}
let prod3 = {"nombre": "Riberão Lager", "precio": "310", "thumb": "https://www.ambev.com.br/conteudo/uploads/2019/11/colorado-ribeirao_600ml.png"}
let prod4 = {"nombre": "Ithaca", "precio": "250", "thumb": "https://www.ambev.com.br/conteudo/uploads/2019/03/colorado-ithaca_600ml.png"}

const app = async () => {
    const Products1 = new Contenedor("./productos.txt");

    await Products1.save(prod3)
    // await Products1.getById(3)
    // await Products1.getAll()
    // await Products1.deleteId(5)
    // await Products1.getAll()
    // await Products1.deleteAll()
}

app();