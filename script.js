// Crie um objeto que receba ao menos três propriedades sobre você.
let aboutMe = {
  nome: "Marina",
  idade: 20,
  comidaFavorida: "Macarronada",
};
// alert(propsPessoa.nome);
// alert(propsPessoa.idade);
// alert(propsPessoa.comidaFavorita);


// Adicione uma nova propriedade sem alterar seu objeto inicial.
propsPessoa.musicaFavorita = "Crazy - Gnarls Barkley"  
// alert(propsPessoa.musicaFavorita);

// Remova uma propriedade desse objeto.
delete propsPessoa.comidaFavorita;"Macarronada"

//Mostre no console todas as propriedades desse objeto.
console.log(
  propsPessoa.musicaFavorita,
  propsPessoa.nome,
  propsPessoa.idade,
  propsPessoa.comidaFavorita,
);

// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.
const cadastro = [
  {
    nome: "Alicia",
    idade: 21,
    telefone: '+00 00000-0000',
      amigos: ['Fulano', 'Sicrano', 'Beltrano', 'Alano', 'Mengano']
    },
  
  {
    nome: "Betania",
    idade: 50,
    telefone: '+00 00000-0000',
      amigos: ['Fulano', 'Sicrano', 'Beltrano', 'Alano', 'Mengano']

    },

  {
    nome: "Carol",
    idade: 19,
    telefone: '+00 00000-0000',
      amigos:['Fulano', 'Sicrano', 'Beltrano', 'Alano', 'Mengano']
    },

  {
    nome: "Diego",
    idade: "21",
    telefone: '+00 00000-0000',
      amigos: ['Fulano', 'Sicrano', 'Beltrano', 'Alano', 'Mengano']

      },
  
    {
    nome: "Evellin",
    idade: "24",
    telefone: '+00 00000-0000',
      amigos: ['Fulano', 'Sicrano', 'Beltrano', 'Alano', 'Mengano']
  }
]
     
// Mostre no console o nome de um amigo de cada lista.

console.log(cadastro);
console.log(cadastro[0].amigos[4]);
console.log(cadastro[1].amigos[3]);
console.log(cadastro[2].amigos[2]);
console.log(cadastro[3].amigos[1]);
console.log(cadastro[3].amigos[0]);
