// BigInt

const numeroGrande= BigInt(4848458758749840849849849840)
console.log(typeof numeroGrande)
const numero =10;

console.log(numero + Number(numeroGrande))

//Symbol
const primerSymbol = Symbol(30)
const segundoSymbol =Symbol(30)
console.log(primerSymbol === segundoSymbol)
console.log(primerSymbol.valueOf())
console.log(segundoSymbol.valueOf())

