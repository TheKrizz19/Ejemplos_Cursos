//Manipulación de un objeto
const producto = {
    nombre: "Cyberpunk2077",
    precio: 1200,
    disponibilidad: true
    }
    Object.freeze(producto)//Permite que el objeto no sea modificable en cuanto a sus propiedades
    Object.seal(producto)//Permite modificar las propiedades existentes del objeto pero no permite añadir nuevas
    producto.nombre = "Resident Evil 2 REMAKE"
    producto.descripcion = "Usa el RTX para una experoencia íncreible"
    delete producto.disponibilidad
    console.log(producto.nombre)
    console.log(producto.descripcion)
    console.table(producto)
