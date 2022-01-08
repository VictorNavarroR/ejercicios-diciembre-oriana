//ejecicio 1
/* Crea una función que tome como parámetro un número. Si es un número entero (sindecimales) 
muestra por consola true. Si no, muestra por consola false. */
const isInt = number => {
  return Number.isInteger(number);
}

console.log(isInt(103));


//ejercicio 2
/*
Crea una función que tome como parámetros dos strings, puedes llamarlos a y b. Sia contiene b, añade b al principio de a. 
Si no, añade b al final. 
Por ejemplo:(“cheese”, “cake”) => output: “cheesecake”(“Java”, “script”) => output: “JavaScript”(“therefore I am”, “I think”) => output: “I think, therefore I am”
*/
const stringConcat = (a, b) => {
    const str1arr = [...a];
    const str2arr = [...b];
  
    const match = str1arr.some(elem => str2arr.includes(elem));
    if(match) {
        return b + a;
    }
    return a + b;
  }

console.log(stringConcat('cake', 'chees'));
console.log(stringConcat('Java', 'script'));
console.log(stringConcat('therefore I am', 'I think, '));


//ejercicio 3
/*
Crea una función que tome como parámetro un número y lo divida en dígitosindividuales 
dentro de un array. Tip: puedes usar el método split(); Por ejemplo: */
const numberToArray = number => {
  const newArr = Array.from(String(number))
   return newArr.map( elem => parseInt(elem) );
}

console.log(numberToArray(2585));

//ejercicio 4
/*
Crea una función que tome como parámetro un array. Si todos los elementos delarray son estrictamente iguales, 
muestra por consola true, de lo contrario muestrafalse. 
Por ejemplo:([true, true, true, true]) => output: true(['10',10,10,10]) => output: false
*/
const arrayTest = arr => {
  let testValue = arr.every( elem => elem === arr[0] );
  return testValue;
}

console.log(arrayTest([10,10,10,10]));


//ejercicio 5
/*
Dado un array de números, muestra por consola un array con dichos númerosordenados en forma descendente.
*/
const descNumbers = arr => {
  return arr.sort((a, b) => {
       if(a < b) {
         return -1
       };
       return 0;
  });
}

console.log(descNumbers([1,13,12,11,5,6,8,3]));


 //ejercicio 6
 /*
 Dado un array de strings, muestra por consola un array con sus valores ordenados alfabéticamente. 
 Por ejemplo:['b', 'c', 'd', 'a'] => output: ['a', 'b', 'c', 'd']
 */
 const alphabeticalOrd = arr => {
    return arr.sort();
 }
 
 console.log(alphabeticalOrd(['a','c','f','h','g','e','b','d']));

 //ejercicio 7
 /*
 Crea una función que tome como parámetro un array de strings y muestra porconsola el string más largo. 
 Por ejemplo:(['help', 'me']) => output: “help”
 */
const words = ['help','me'];
const returnLongestStr = arr => {
    const wordLength = arr.map( word => word.length);
    const longest = Math.max(...wordLength);
    const foundIndex = wordLength.indexOf(longest); 
    const foundElem = arr[foundIndex];
    
    console.log(foundElem);
  
}

returnLongestStr(words);

 //ejercicio 8
 /*
Crea una función que tome dos arrays de números como parámetros. 
Une ambosarrays, remueve valores duplicados (si hay alguno) y ordena los números en ordenascendente.
 */
const arrNumbers1 = [1,3,17,4,5,20];
const arrNumbers2 = [6,17,8,60,10,20];

const newCleanArr = (arr1, arr2) => {

  let newArr = [...arr1, ...arr2];
  
  let cleanArr = [];
  
  newArr.forEach( elem => {
      if(!cleanArr.includes(elem)) {
        cleanArr.push(elem);
      }
  });
  
  return cleanArr.sort((a,b) => a-b);
   
}

newCleanArr(arrNumbers1, arrNumbers2);

 //ejercicio 9
 /*
Crea una función que tome un objeto como parámetro. 
Remueve la propiedad “country” y su valor y muestra el resultado por consola.
 */
const myObj = { city: 'Sacramento', state: 'California', country: 'USA', continent: 'NorthAmerica' }

const removeCountry = (obj, property) => {
      if(obj.hasOwnProperty(property)) {
         delete obj[property];
      }
   return obj;
}

removeCountry(myObj, 'country');

 //ejercicio 10
 /*
Trabajando con el mismo array anterior, muestra por consola el valor de la propiedad
 */
console.log(myObj.city);

 //ejercicio 11
 /*
Algunas de las propiedades de los siguientes objetos son strings vacíos.Reemplazalos por el valor “null”, 
empleando para ello una función que tome comoparámetro dichos objetos. Muestra por consola el objeto resultante
 */
const obj1 = { a: 'a', b: 'b', c: '' };
const obj2 ={ a: '', b: 'b', c: ' ', d: 'd' };
const obj3 ={ a: 'a', b: 'b ', c: ' ', d: '' };

const emptyToNull = (obj) => {
     for(let elem in obj) {
       if(obj[elem] == 0) {
         obj[elem] = null;
       }
     }
    return obj;
}

emptyToNull(obj3);

 //ejercicio 12
 /*
Crea una función que tome como parámetros un array de objetos y un string. 
Agregaa cada uno de los objetos la propiedad “continent” que tome como valor el parámetrode string. 
Muestra por consola el nuevo array.
 */
const asiaCities = [
    { city: 'Tokyo', country: 'Japan' }, 
    { city: 'Bangkok', country: 'Thailand' }
  ];
  
  const europeCities = [
    { city: 'Stockholm', country: 'Sweden' }, 
    { city: 'Paris', country: 'France' }
  ];
  
  const addContinent = (cities, continent) => {
      for(let city of cities) {
         city.continent = continent
      }
      return cities;
  }  
  
  console.log(addContinent(asiaCities, 'Asia'));
  console.log(addContinent(europeCities, 'Europe'));


 //ejercicio 13
 /*

 */
function setBackground() {
    let p1 = document.body.children[1];
    let p2 = document.body.children[2];
    
    p1.style.background = 'green';
    p2.style.background = 'red';
} 

function createH1FromObj(obj)  {
        let h1 = document.createElement('h1');
        h1.innerText = `${obj.name} es un ${obj.type}`;

        document.body.appendChild(h1);
}

createH1FromObj({ name:"balto", type:"chihuaha"});
createH1FromObj({ name:"loli", type:"puddle"});