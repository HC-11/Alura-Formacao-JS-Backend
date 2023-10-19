const user = {
   nome: "Juliana",
   email: "jul14n4@gmail.com",
   nascimento: "1983/02/16",
   role: "estudante",
   ativo: true,
   exibirInfos: function(){
      console.log(this.nome, this.email)
   }
}

const admin = {
   nome: "Sandra",
   email: "sandra@gmail.com",
   role: "admin",
   criarCurso(){
      console.log('Curso criado com sucesso')
   }
}

Object.setPrototypeOf(admin, user)

admin.criarCurso()
admin.exibirInfos()