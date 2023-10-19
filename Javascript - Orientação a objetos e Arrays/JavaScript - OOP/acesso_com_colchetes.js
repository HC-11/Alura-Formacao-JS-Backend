const cliente = {
   nome: "Andre",
   idade: 32,
   cpf:"923184771-20",
   email: "andre@gmail.com",
};

console.log(`O cliente selecionado é: ${cliente["nome"]}, idade:${cliente["idade"]}, cpf: ${cliente["cpf"]}, email: ${cliente["email"]}.`);

const chaves = ["nome", "idade", "cpf", "email", "altura"];

chaves.forEach((chaves)=> {
   console.log(`A chave ${chaves} tem valor ${cliente[chaves]}`)
})