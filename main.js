/* Currying: transforma uma função com múltiplos argumentos em uma série de execuções de funções
   as vantagens de utilizar o currying consiste em tornar funções reutilizáveis e componíveis

   Lazy evaluation (conceito de atrasar um trecho de código até que seja de fato necessário executá-lo)
   no caso dessa função estamos atrasando até que se receba o valor */

function composicao(...funcoes) {
  return function (valor) {
    return funcoes.reduce((acc, fn) => {
      return fn(acc)
    }, valor)
  }
}

function gritar(texto) {
  return texto.toUpperCase()
}

function enfatizar(texto) {
  return `${texto}!!!!!`
}

function separar(texto) {
  return texto.split('').join(' ')
}

const exagerado = composicao(gritar, enfatizar, separar)
const quaseExagerado = composicao(gritar, enfatizar)

console.log(exagerado('Cuidado onde pisa'))
console.log(quaseExagerado('Cuidado'))

