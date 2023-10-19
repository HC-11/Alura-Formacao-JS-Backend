const cliente = {
   nome: "João",
   idade: 25,
   email:"joao@firma.com",
   telefone: ["6193647813", "6133489617"],
   saldo: 200,
   efetuaPagamento: function(valor){
      if (valor > this.saldo){
         console.log("Saldo insuficiente")
      }else{
      this.saldo -= valor;
      console.log(`Compra realizada com sucesso. Novo saldo: ${this.saldo}`)
     }
   } 
};

cliente.efetuaPagamento(25)