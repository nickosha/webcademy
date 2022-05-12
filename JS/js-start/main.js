// console.log("Hello, world!");

// Объявление переменных

// var lessonTopic = "Учим JavaScript";
// console.log(lessonTopic);

// Переменные ES6+

// let userName = "Джон";
// console.log(userName);

// const birthYear = 1990;
// console.log(birthYear);


// ***Типы данных***

// Строки
// const userName = "Джон";

// Числа
// const birthYear = 1990;

// Логические true и false
// const isMarried = true;


// *** Сложение переменных***

// let x= 10;
// let y = 5;

// let result = x + y;
// console.log(result);

// console.log(x + y);

// ***Соединение строк***

// let greeting = "Привет, ";
// let userName = "Петр!";

// console.log(greeting + userName);

// let userName = "Виталий";
// let greeting = `Привет, ${userName}! Как дела?`;
// console.log(greeting);


// ***Условия***

// if ( /* условие */ ) {
//   /* код который будет выполненесли условие выше верно */
// } else {
//   /* код который будет выполненесли условие выше НЕ верно */
// }


// let x = 1;
// let y = 5;
// if (x > y) {
//   console.log("X > Y");
// } else if (x === y) {
//   console.log("X равен Y");
// } else {
//   console.log("X меньше Y");
// }


// *** Switch Case ***

// const marc = 5;

// switch (marc) {
//   case 1:
//     console.log('Вы плохо подготовились, Вам 1!');    
//     break;
//   case 2:
//     console.log('Неудовлетворительно');
//     break;
//   case 3:
//     console.log('Можно было и лучше');
//     break;
//   case 4:
//     console.log('Хорошо, постарался!');
//     break;
//   case 5:
//     console.log('Молодец, отлично!');
//     break;
//   default:
//     console.log('Такой оценки не существует');
//     break;
// }


// *** Массивы ***

// const fruit1 = 'Яблоко';
// const fruit2 = 'Груша';
// const fruit3 = 'Слива';
// const fruit4 = 'Апельсин';

// const fruits = ['Яблоко', 'Груша', 'Слива', 'Апельсин'];
// console.log(fruits);

// console.log(fruits[1]);
// console.log(fruits[0]);
// console.log(fruits[2]);

// const arrayExample = ['Яблоко', 50, true, 'Груша', false, 200];
// console.log(arrayExample);

// console.log(arrayExample[4]);


// *** Цикл for
// console.log('start');

// for (let i = 0; i < 10; i++) {
  //   console.log(`i = ${i}`);
// }

// console.log('finish');


// *** Обход массива с for

// const fruits = ['Яблоко', 'Груша', 'Слива', 'Апельсин'];

// for (let index = 0; index < fruits.length; index++) {
  //   console.log(fruits[index]);
  // }
  
  
// *** Обход массива с помощью .forEach()
  
// const fruits = ['Яблоко', 'Груша', 'Слива', 'Апельсин'];

// fruits.forEach(function (value, index) {
//   console.log(`Элемент ${value} имеет индекс ${index}`);
// });

// fruits.forEach(function (value) {
//   console.log(`Элемент ${value}`);
// });


// *** Фунуции ***

// let greeting1 = 'Алексей';
// let greeting2 = 'Юрий';
// let greeting3 = 'Петр';

// const greeting = function (userName) {
//   console.log(`Привет, ${userName}! Как дела?`);
// }

// greeting(greeting1);
// greeting(greeting2);
// greeting(greeting3);


// function calculateSum(x, y) {
//   let result = x + y;
//   return result;
// }

// let answer = calculateSum(5, 10)
// console.log(answer);


// let res = calculateSum(calculateSum(10, 20), calculateSum(30, 40))

// console.log(calculateSum(calculateSum(10, 20), calculateSum(30, 40)));


// *** Функции function Declaration

// calculateSum(20, 15)

// function calculateSum(x, y) {
//   let result = x + y;
//   console.log(result);
//   return result;
// }

// *** Функции function Expression

// let calculateSum = function calculateSum(x, y) {
//   let result = x + y;
//   console.log(result);
//   return result;
// }

// Вызов только после объявления

// calculateSum(30, 40)



// *** Объекты ***


// const petrName = 'Petr';
// const petrAge = 28;
// const petrSpeciality = 'web-designer';
// const petrCity = 'Moscow';

// function sayHi(name, age, spec, city) {
//   console.log(`Привет, меня зовут ${name}, мне ${age}. Я ${spec} из города ${city}`);
// }

// sayHi(petrName, petrAge, petrSpeciality, petrCity)

// const petr = {
//   name: 'Petr',
//   age: 28,
//   speciality: 'html coder',
//   city: 'Moscow'
// }

// console.log(petr);
// console.log(petr.age);
// sayHi(petr.name, petr.age, petr.speciality, petr.city)


// const petr = {
//   name: 'Petr',
//   age: 28,
//   speciality: 'html coder',
//   city: 'Moscow',
//   sayHi: function () {
//     console.log(`Привет, меня зовут ${this.name}, мне ${this.age}. Я ${this.speciality} из города ${this.city}`);
//   }
// }
// petr.sayHi()


// *** Функция Конструктор - создание объектов


// function Person(name, age, spec, city) {
//   this.name = name;
//   this.age = age;
//   this.spec = spec;
//   this.city = city ;

//   this.sayHi = function () {
//      console.log(`Привет, меня зовут ${this.name}, мне ${this.age}. Я ${this.spec} из города ${this.city}`);
//   }
// }

// const petr = new Person('Petr', 28, 'html coder', 'Kerch');
// console.log(petr);

// const mary = new Person('Мария', 25, 'блогер', 'Минск');
// mary.sayHi();


// *** Классы ES6


class Person {
  constructor (name, age, speciality, city) {
    this.name = name;
    this.age = age;
    this.spec = speciality;
    this.city = city ;
  }

  sayHi () {
     console.log(`Привет, меня зовут ${this.name}, мне ${this.age}. Я ${this.spec} из города ${this.city}`);
  }
}

const petr = new Person('Petr', 28, 'html coder', 'Kerch');
console.log(petr);
petr.sayHi();

const mary = new Person('Мария', 25, 'блогер', 'Минск');
mary.sayHi();
