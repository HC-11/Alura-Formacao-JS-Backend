const objetoPessoa = {
   nome: "João",
   idade: 25,
   email:"joao@firma.com",
   telefone: ["6193647813", "6133489617"],
};

objetoPessoa.enderecos = [{
   rua: "Brigadeiro Faria Lima ",
   numero: 1337,
   apartamento: true,
   complemento: "301"
},
];

objetoPessoa.enderecos.push({
   rua: "Rua da Consolação",
   numero: 8635,
   apartamento: false,
   complemento: "Ed. Gestalt, apt.09",
})

const listaApartamentos = objetoPessoa.enderecos.filter(
   (enderecos) => enderecos.apartamento === true
);

console.log(listaApartamentos)