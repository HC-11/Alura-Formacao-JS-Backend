function User(nome, email){
   this.nome = nome;
   this.email = email;

   this.exibirInfos = function(){
      return`${this.nome}, ${this.email}`
   }
}

const user = {
   init: function(nome, email){
      this.nome = nome;
      this.email = email;
   },

   exibirInfos: function(){
      return this.nome
   }
}

const novoUser = Object.create(user)
novoUser.init('Sandra', 'sandrasd@gmail.com')
console.log(novoUser.exibirInfos())

/*const novoUser = Object.create(user)
console.log(novoUser.exibirInfos('Sandra'))
console.log(user.isPrototypeOf(novoUser))

function Admin(role){
   User.call(this, 'Juliana', 'julianamoa@gmail.com')
   this.role = role || 'estudante'
}

Admin.prototype = Object.create(User.prototype)
const novoUser = new Admin('admin')
console.log(novoUser.exibirInfos())
console.log(novoUser.role)

const novoUser = new User('Juliana', 'Julianamoa@gmail.com')
console.log(novoUser.exibirInfos())*/