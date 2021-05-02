const upperName = name => {
     name.toUpperCase();
  };
  (p1, p2) => {
    return p1 * p2;
  }
  fahrenheit => {
    return (5 / 9) * (fahrenheit - 32);
  }
event => {
    const [clientX, clientY] = [event.clientX, event.clientY];
    console.log(clientX, clientY);
  }

//A partir do objeto abaixo, instancie apenas uma variável que receba ​first utilizando destructuring
const obj = { first: 'Jane', last: 'Doe' };
let {first: n} = obj;


//A partir do objeto abaixo, instancie uma variavel que receba ​name​ e outra para colors
const company = {
    name: 'ACME Corp',
    address: 'Nowhere st',
    products: {
      shirts: {
        colors: ['red', 'green', 'blue'],
      },
      socks: {
        colors: ['cyan', 'magenta', 'yellow'],
      },
    },
  };
let {name: n} = company;
let { products: {shirts:{colors} , socks:{colors}} = company};

//Rest & Spread
//Utilizando um operador clone o objeto c​lothes
const clothes = {
    pants: { colors: ['black', 'blue'] },
    shirts: { colors: ['white', 'red'] },
    socks: { colors: ['beige', 'gray'] },
  };

let obj2 = {...clothes};

//Novamente utilizando um operador, clone o objeto c​ lothes​ acima e adicione a este clone um objeto ​shoes​ com propriedade​ colors: ['yellow', 'purple'] ​de modo que fique igual aos objetos p​ ants, shirts ​e​ socks
const shoes ={
    colors: ['yellow', 'purple']
}
let obj3 = {...clothes, ...shoes};

//Arrays e seus métodos
//A partir da variável abaixo e utilizando um método de array, retorne a raiz quadrada de todos os valores do array original em um novo array
var numbers = [4, 9, 16, 25];
var quadrados = numbers.map(function(item){
    return Math.pow(item, 2); //retorna o item original elevado ao quadrado
 });
 console.log(quadrados);

 //A partir da variável abaixo e utilizando um método de array, multiplique todos os valores do array por 10. Utilize arrow function.
var numbers = [65, 44, 12, 4];
numbers=>{
    return double = numbers.map(v => v * 10);   
}

//A partir da variável abaixo retorne um array com valores de ​age​ (idade) maiores ou iguais a 18 com arrow function e filter
var ages = [32, 33, 16, 40];
function checkAge(age) {
    return age >=18;
}
ages =>{
    ages.filter(checkAge);
}

//A partir do objeto abaixo, retorne somente os nomes dos objetos do tipo cachorro (​type: dog)​ com filter
data = [
    {
      name: 'Butters',
      age: 3,
      type: 'dog',
    },
    {
      name: 'Lizzy',
      age: 6,
      type: 'dog',
    },
  
    {
      name: 'Red',
      age: 1,
      type: 'cat',
    },
    {
      name: 'Joey',
      age: 3,
      type: 'dog',
    },
  ];
  let dogs = data.filter((animal) => {
    return animal.type === 'dog';
  });
  //Por fim, ainda utilizando o array acima, retorne a soma da idade de todos os cachorros (​type: dog)​
  var calcAge = dogs.reduce((sum, animal) => {
    return sum + animal.age;
  }, 0);
  console.log(calcAge);

  //Parte B - Hora do Jogo!
//Passe a expressão abaixo para Arrow Function e então use destructuring para pegar ​colors
var getShirtsColorsAmount = company => {
 let {...colors} = company;
};

//A partir do objeto abaixo, desestruture e utilize ​spread operator​ para instaciar uma variável que tenha apenas os dados de roupas que não são calças, ou seja, somente ​shirts e​ ​ socks
const clothes = {
  pants: { colors: ['black', 'blue'] },
  shirts: { colors: ['white', 'red'] },
  socks: { colors: ['beige', 'gray'] },
};
let {shirts, socks} = clothes;

//Utilizando os dois arrays abaixo, desestruture cada array com spread para clonar todos itens menos o primeiro
const arr = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 =[...newArray, ...newArray2];

function removePrimeiroItem (array){
  let newArray = array.splice(1,-1);
  return newArray;
}
let newArray = removePrimeiroItem(arr);
let newArray2 = removePrimeiroItem(arr2);

//A partir do objeto abaixo, retorne um array onde cada item é o nome completo de cada pessoa no array. Utilize arrow function.
var persons = [
  { firstname: 'Malcom', lastname: 'Reynolds' },
  { firstname: 'Kaylee', lastname: 'Frye' },
  { firstname: 'Jayne', lastname: 'Cobb' },
];
function retorna (value){
  return {...value.firstname,...value.lastname};
}
var nomes = persons.filter(retorna);
nomes.forEach(nomeCompleto => { 
  console.log(nomeCompleto);
})