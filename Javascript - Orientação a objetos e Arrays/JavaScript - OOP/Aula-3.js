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

function ligaCliente(telefoneComercial, telefoneResidencial){
   console.log(`Ligando para o ${telefoneComercial}`);
   console.log(`Ligando para o ${telefoneResidencial}`);
}

ligaCliente(...objetoPessoa.telefone);

const encomenda = {
   destinatario: objetoPessoa.nome,
   ...objetoPessoa.enderecos[0]
};

console.log(encomenda);