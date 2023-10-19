const livros = require ('./Aula1-2');
const troca = require('./Aula3-2');

function insertionSort(lista) {
   for (let atual = 0; atual < lista.length; atual++) {
     let analise = atual;
     while (analise > 0 && lista[analise].preco < lista[analise - 1].preco) {
       troca(lista, analise);
       analise--
     }
   }
   console.log(lista);
  }

insertionSort(livros);