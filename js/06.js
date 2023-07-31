//Destructuring de 2 o más objetos
const producto = {
    nombre: "Cyberpunk2077",
    precio: 1200,
    disponibilidad: true
    }

    const cliente = {
        nombre: "Cristian",
        premium:true
    }

const {nombre, precio, disponibilidad } = producto
const {nombre: nombreCliente, premium } = cliente
console.log(nombre)
console.log(nombreCliente)