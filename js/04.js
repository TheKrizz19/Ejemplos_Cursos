//Objeto básico
const producto = {
nombre: "Cyberpunk2077",
precio: 1200,
disponibilidad: true
}



//Destructuring
const {nombre, precio, disponibilidad} = producto
console.log(producto.nombre)
console.log(producto.precio)
console.log(producto.disponibilidad)

//Object Literal Enhancement

const autenticado = true
const usuario = "Cristian"

const NuevoObjeto = {
    autenticado,
    usuario
}
console.log(NuevoObjeto)

