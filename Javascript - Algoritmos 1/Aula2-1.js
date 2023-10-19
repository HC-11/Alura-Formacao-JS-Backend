
const livros = require('./Aula1-2')
function menorValor(arrayProdutos, posicaoInicial){
   // let atual = 0;
//guardando o preco mais barato dos livros
let maisBarato = posicaoInicial;

//percorrendo o array e comparando os precos
for  (let atual = posicaoInicial; atual < arrayProdutos.length; atual++){
   if ( arrayProdutos[atual].preco < arrayProdutos[maisBarato].preco){
      maisBarato = atual;
      }
   }
   return maisBarato;
}
module.exports = menorValor;
