numero = prompt('Digite um número: ')

console.log(`Tabuada do ${numero}:`)

const tabuada = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let indiceNumero in tabuada){

  const resultado = numero * indiceNumero

  if (resultado != 0) console.log(resultado)

}
   