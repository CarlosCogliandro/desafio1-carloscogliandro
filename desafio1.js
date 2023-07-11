class Usuario{
    constructor(nombre, apellido, libros = [], mascotas = []){
        this.nombre = nombre.toUpperCase();
        this.apellido = apellido.toUpperCase();
        this.libros = libros;
        this.mascotas = mascotas;
    };

    getFullName(){
        console.log(`El nombre completo es ${this.nombre} ${this.apellido}`)
    };

    addMascota(animal){
        this.mascotas.push(animal);
        console.log(`${this.nombre} tiene un ${this.mascotas}`)
    };

    countMascotas(){
        console.log(`${this.nombre} tiene ${this.mascotas.length} mascota/s`)
    };

    addBook(titulo, autor){
        this.libros.push({nombre: titulo, autor: autor});
        console.log(`Has agregado ${this.libros.length} libros al array`)
    };

    getBookNames(){
        const titulo = this.libros.map(libro => libro.nombre)
        return titulo;
    };

    getMascotas(){
        const masc = this.mascotas.map(mascotas => mascotas)
        return masc;
    }
};


const usuario1 = new Usuario('Juan', 'perez', [], []);

const usuario2 = new Usuario ('Susana', 'Morales', [], []);


console.log(usuario1.getFullName());
console.log(usuario2.getFullName());

console.log(usuario1.addMascota('Gato'));
console.log(usuario2.addMascota('Perro'));
console.log(usuario2.addMascota('Loro'));
console.log(usuario1.addMascota('Oveja'));

console.log(usuario1.countMascotas());
console.log(usuario2.countMascotas());

console.log(usuario1.addBook('El Señor de los Anillos', 'Maria Elena Walsh'));
console.log(usuario1.addBook('Padre Rico, Padre Pobre', 'Maria Marta Serralima'));

console.log(usuario2.addBook('Harry Potter: La desolacion de Smaug', 'Roberto Pettinato'));
console.log(usuario2.addBook('El Alquimista', 'Locomotora Castro'));

console.log(usuario1.getBookNames());
console.log(usuario2.getBookNames());

console.log(usuario1.getMascotas());
console.log(usuario2.getMascotas());