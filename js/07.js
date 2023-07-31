//Unir 2 objetos
const producto = {
    nombre: "Cyberpunk2077",
    precio: 1200,
    disponibilidad: true
    }

const cliente = {
    nombre: "Cristian",
    premium:true
}

// const NuevoObjeto = Object.assign(producto, cliente) esta es una forma erronea de unir objetos
const NuevoObjeto2 = {
    producto: {...producto}, 
    cliente: {...cliente }
}
console.log(NuevoObjeto2)
