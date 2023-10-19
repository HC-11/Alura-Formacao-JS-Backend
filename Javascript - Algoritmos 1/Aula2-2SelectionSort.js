//Importando o array json com o nome livros
const livros = require('./Aula1-2');
//Importando a funcao que seleciona o menor valor
const menorValor = require('./Aula2-1');

livros.forEach((_, indice) => {
   let menor = menorValor(livros, indice)
  
   let livroAtual = livros[indice];
   let livroMenorPreco = livros[menor];
  
   livros[indice] = livroMenorPreco
   livros[menor] = livroAtual 
  })

console.log(livros)