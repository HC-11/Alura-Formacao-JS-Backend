
const livros = require('./Aula1-2')

// let atual = 0;
//guardando o preco mais barato dos livros
let maisBarato = 0;

//percorrendo o array e comparando os precos
for  (let atual = 0; atual < livros.length; atual++){
   if ( livros[atual].preco < livros[maisBarato].preco){
      maisBarato = atual;
   }
}

console.log(`O livro mais barato custa: $${livros[maisBarato].preco}, título: ${livros[maisBarato].titulo}`);