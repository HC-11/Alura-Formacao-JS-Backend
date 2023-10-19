const cliente = {
   nome: "Andre",
   idade: 32,
   cpf:"923184771-20",
   email: "andre@gmail.com",
};

console.log(`O cliente selecionado é: ${cliente.nome}, idade:${cliente.idade}, cpf: ${cliente.cpf}, email: ${cliente.email}.`);

console.log(`Os 3 primeiros dígitos do cpf são: ${cliente.cpf.substring(0, 3)}`)