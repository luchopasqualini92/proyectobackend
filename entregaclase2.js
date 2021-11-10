class Usuario {
    constructor(nombre, apellido) {
        this.nombre = nombre
        this.apellido = apellido
        this.libros = []
        this.mascotas = []
    }

    getFullName() {
        console.log(`${this.nombre} ${this.apellido}`);
    }
    addMascota(pet) {
        this.mascotas.push(pet)
    }
    countMascotas() {
        console.log(this.mascotas.length); 
    }
    addBook(name, author) {
        this.libros.push({name, author})
    }
    getBookNames() {
        console.log(this.libros.map(libro => libro.name));
    }
}

const lucianopasqualini = new Usuario("Luciano", "Pasqualini");
lucianopasqualini.getFullName();
lucianopasqualini.addMascota('Elefante')
lucianopasqualini.addMascota('Perro')
lucianopasqualini.addMascota('Zorro')
lucianopasqualini.countMascotas();
lucianopasqualini.addBook("'El señor de las moscas", "'William Golding")
lucianopasqualini.addBook('Fundacion' , 'Isaac Asimov')
lucianopasqualini.getBookNames();