const cliente = require("./clientes.json")

function ordenarClientes(lista, propriedade){
   const resultado = lista.sort((a, b) => {
      if(a[propriedade] < b[propriedade]){
         return -1;
      }
      if (a[propriedade] > b[propriedade]){
         return 1;
      }
      //else a = b
      return 0;
   });
   return resultado;
}
const ordenadoNomeAlfabetico = ordenarClientes(cliente, "nome");

console.log(ordenadoNomeAlfabetico);