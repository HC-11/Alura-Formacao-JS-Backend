const pessoa = {
   nome: "Ramon Dino", //Ramon Rocha Queiroz
   profissao: "Bodybuilder", 
};

console.log(pessoa.nome)
console.log(pessoa.telefone);

pessoa.telefone = "1196314785520";
console.log(pessoa.telefone);

pessoa.nome = "Ramon Rocha Queiroz";
console.log(pessoa.nome);

const outraPessoa = {
   nome: "Fernando Sardinha",
   profissao: "Treinador",
};

pessoa = outraPessoa;

console.log(pessoa);