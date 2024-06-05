
//Замыкания в js
//1.Функции возвращают новые функции
//2.Возвращаемые функции помнят контекст, где были созданы
// function createGreeting () {//инструкция
//     const message = 'Приветствую тебя,';
//     return function createName (name) {
//         console.log(message,name); // первый аргумент будет взят из замыкания, второй - взят из вызова  
//     }
// }
// const printName  = createGreeting(); //создай нам нечто, здесь будет сохраняться createName ()
// printName('имя'); // при вызове createName мы этот параметр передаем

// printName('Jonh');

// function createFn() {
//     let count = 0;
//     return function getCount () {
//         return count+= 2;
//     }
// }
// let countNumber = createFn();
// console.log(typeof(countNumber));
// countNumber();
// console.log(countNumber());
// console.log(countNumber());
// console.log(countNumber());

// function addByX (num) {
//     return function(added) {
//         return num + added;
//     }
// }

// const addByTwo = addByX(2);
// console.log(addByTwo(5));

// const addByFive = addByX(5);
// console.log(addByFive(6));

//Чтобы функцию можно было вызвать 1 раз

// function countNumbers () {
//     let num = 0;
//     return function(addNumber) {
//            return num = num + addNumber;
//     }
// }

// let addByX = countNumbers ();
// console.log(addByX(2)); //2
// console.log(addByX(5)); //7
// console.log(addByX(3)); //10

// Чтобы функция при любых количествах запроса возвращала только первый результат

// function once (fn) {
//     let hasBeenCalled = false;
//     let cashResult;
//     return function(arg) {
//         if (hasBeenCalled) return cashResult;

//         hasBeenCalled = true;
//         return cashResult = fn(arg);
//     }
// }

// let addByX = once(num => num+5);
// console.log(addByX(2)); //7
// console.log(addByX(5)); //7
// console.log(addByX(3)); //7


// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const evenOnly = nums.filter(function (n) {
//   const remainder = n % 2;

//   return remainder === 1
// })

// console.log(evenOnly);

// let cars = [
//     {name: 'BMV', year: '2002', make: 3},
//     {name: 'Lexus', year: '2019', make: 6},
//     {name: 'Bugatti', year: '2020', make: 2},
// ]

// function getCarByMake (make) {
//     return cars.filter(car=> car.make === make)
// }

// console.log(getCarByMake (2));

// function numberFunc (callback) {
//     const arr = [3, 5, 8, 40, 7];
//     let element = document.querySelector('#test');
//     callback(element, arr);
// }

// function numberShow (container, mass) {
//     container.innerHTML = mass.join('- ');
// }

// numberFunc(numberShow);

// let myStr = 'Привет, мир! Как твои дела?';
// function changeWords(str) {
//    let result = str.split(' ');
//    for (let item of result) {
//       item = 'ckjdj';
//    }
 
//   return result;
// }
// console.log(changeWords(myStr));

//Storing state - сохранение состояния
// function makePerson(name) {
// 	let firstName = name;

// 	return {
// 		setName : (newName) => (firstName = newName),
// 		getName : () => firstName,
//       },
// };

// const me = makePerson("Abc");
// console.log(me.getName());

// me.setName("ggfgf");
// console.log(me.getName());


// privatу methods ниже privateSetName недоступен напрямую потребителям, и он может получить доступ к частной переменной состояния _name через закрытие.
// function makePerson(name) {
// 	let firstName = name;

// 	function privateSetName(x) {
// 		firstName = x;
// 	}

// 	return {
// 		setName: (newName) => privateSetName(newName),
// 		getName: () => firstName,
// 	};
// }

// const me = makePerson("Abc");
// console.log(me.getName());

// me.setName("ggfgf");
// console.log(me.getName());

//1
// const obj = {
//    sum(a, b) {
//      return a + b;
//    },
//  };
 
//  console.log(obj.sum(10, 10)); // 👉️ 20
//  console.log(obj.sum(10, 20)); // 👉️ 30

//  //2
//  const object = {
//    sum: function (a, b) {
//      return a + b;
//    },
//  };
 
//  console.log(object.sum(10, 10)); // 👉️ 20
//  console.log(object.sum(10, 20)); // 👉️ 30


// console.log(varNumber); // undefined
// console.log(letNumber); // Doesn't log, as it throws a ReferenceError letNumber is not defined

// var varNumber = 1;
// let letNumber = 1;

//  2 примера, где b в TDZ
// 1
// let a = f(); // 1
// const b = 2;
// function f() { return b; } // 2, b is in the TDZ

// 2
// function createTDZ(a=b, b) {
// }

// createTDZ(undefined, 1); 

// function print() {
//     console.log(arguments);
//     console.log(arguments[0]);
//     console.log(arguments[1]);
//     console.log(arguments[2]);
//   }

//   print("hello", 400, false)
  
  // {
  //   '0': 'hello',
  //   '1': 400,
  //   '2': false
  // }

// примеры с объектом arguments (не для стрелочных f и не для кода старше 2015(ES6))
// 1. перебор аргументов

// function sum() {
//     let total = 0;
//     for (let i = 0; i < arguments.length; i++) {
//       total += arguments[i];
//     }
//     return total;
//   }
  
//   sum(4, 5, 6, 7);

// 2.передача аргументов другой функции
//   function greet(name) {
//     console.log("Hello, " + name + "!");
//   }
  
//   function greetAll() {
//     for(let i = 0; i < arguments.length; i++) {
//       greet(arguments[i]);
//     }
//   }
  
//   greetAll("Alice", "Bob", "Charlie");

// 3.передача аргументов в функцию

// function applyDiscount(price, discount) {
//     return price - (price * discount / 100);
//   }
  
//   let args = [100, 20];
//   applyDiscount.apply(null, args);

// примеры с rest синтаксисом(остаточные параметры)  (для всех f (и для стрелочных!!!)и для кода старше 2015(ES6))
// 1. перебор аргументов

// let sum = (...args) => {
//     let total = 0;
//     for(let i = 0; i < args.length; i++) {
//       total += args[i];
//     }
//     return total;
//   };
  
//   sum(1, 2, 3); // 6
//   sum(4, 5, 6, 7); // 22

  // 2.передача аргументов другой функции
//   let greet = (name) => {
//     console.log("Hello, " + name + "!");
//   }
  
//   let  greetAll = (...args) => {
//     for(let i = 0; i < args.length; i++) {
//       greet(args[i]);
//     }
//   }
  
//   greetAll("Alice", "Bob", "Charlie");

//   3. 
//   let print = (...args) => {
//     console.log(args);
//     console.log(args[0]);
//     console.log(args[1]);
//     console.log(args[2]);
//   }

//   print("hello", 400, false)
  
// globalThis.b = "MDN";
// console.log(typeof b); // "MDN" 
// // "MDN"
// console.log(typeof globalThis); 

// a = 37;
// console.log(globalThis.a); // 37

// setInterval - вызов функции регулярно, повтор через указанное кол-во времени
// setTimeout - вызов функции однократно через указанное кол-во времени

  // let input = document.querySelector('input'); 

  // input.addEventListener('click', function () {
    //  1. Oбычная функция. Анонимная f в setInterval теряет контекст, который есть у внешней и получается this = undefined
    // console.log(this);//<input value="10" aria-autocomplete="list">
    // setInterval(function () {console.log(this.value)}, 1000) // по клику будет undefined

    //  2. Oбычная функция. Чтобы исправить ситуацию, можно: записываем контекст внешней функции в переменную self.
    // let self = this; 
    // setInterval(function () {console.log(self.value)}, 1000)

      //  2. Стрелочная  функция. Берет контекст у своего родителя
      // setInterval(() => {console.log(this.value)}, 1000)
  // })




  // В нестрогом режиме при выполнении в браузере this при вызове функции будет равен window. Ниже - строгий режим
// так как аргумент this не задан, то он в обычных функциях undefined
  //   function one (a, ...args) {
  //     console.log('one', this, a, args)};
  //   const two = function (a) {
  //     console.log('two', this, a, arguments)};

  //     // в стрелочных функциях не может быть аргументов. Стрелочные не имеют собств this ? поэтому берут из окр среды, из глоб контекста(исх код, как модуль, соотв-нно будет undefined)
  //   const three = (a) => {
  //       console.log('three', this, a)};

  // one(1,2,3); //one undefined(в строгом, а для нестрогого window) 1 [2,3]
  // two(1,2,3);//two undefined(в строгом, а для нестрогого window) 1 {массивоподобный объект: 1,2,3}
  // three(1,2,3);//three undefined(в строгом, а для нестрогого window) 1 (контекст потерян )




// Если функция хранится в объекте — это метод этого объекта.
// obj.one();obj.two() obj.three()— это методs объекта obj. В этом случае значение this — этот объект.
  // const obj = {
  //   // в нормальных функциях this указывает на объект obj
  //   one: function(a, b, ...args) {
  //     console.log('one', this, a, b, args)},
  //   two (a, b) {
  //     console.log('two', this, arguments)},
  //   three: (a,b) => {
  //       console.log('three', this)},
  // }

  // obj.one(1,2,3); //one {объект в строгом и не строгом} 1 2 [3]
  // obj.two(1,2,3); //two {объект в строгом и не строгом} {массивоподобный объект 1 2 3}
  // obj.three(1,2,3);//three undefined (контекст теряется в строгом)(если нестрогий режим, то window)

//   const person = {
//     name: 'John',
//     sayName: () => {
//         console.log(`Hi! My name is ${this.name}`)
//     }
//  }
 
 
//  person.sayName();//Hi! My name is ошибка(потеря контекста в строгом режиме, в не строгом - пусто)

// Функция - объект. Сравниваются объекты по ссылкам
//конкретная ячейка(адрес) создается для этой updateLive функции
// let a = {
//   live:250,
//   updateLive(newLive){
//     this.live = newLive;
//   }
// }
// //и конкретная ячейка(адрес) создается для этой updateLive функции
// const b = {
//   live : 250,
//   updateLive(newLive){
//     this.live = newLive;
//   }
// }
// console.log(a.updateLive === b.updateLive);//false т.к адреса(ячейки) у них разные

// a.updateLive(400);
// console.log(a);

// console.log(this)

// const obj = {
//   name: "Object",
//   print: function() {
//     console.log(this)
//   },
// }

// obj.print()


//Функция-конструктор  и оператор new. Любая функция, кроме стрелочной; имя функции с большой буквы; выполняется только с помощью оператора new
//1
// function User (name) {
//   this.any = name;
//   this.sayHi = function () {
//     alert('Меня зовут: ' + this.any);
//   }
// }

// let jack = new User ('Jack');

// jack.sayHi();

//2
// function Animals(name, numOfLegs) {
//   this.name = name;
//   this.numOfLegs =numOfLegs;
//   this.sayAnimal = function () {
//     console.log(`My name is ${this.name}. I have ${this.numOfLegs} legs!`)
//   }
// }

// let animalFirst = new Animals ('bird', 2);
// console.log(animalFirst);
// animalFirst.sayAnimal();

// let animalTwo = new Animals('cat', 4);
// console.log(animalTwo);
// animalTwo.sayAnimal();


// Классы
//1
// class User {
//   constructor(name) {
//     this.name = name;
//   }
//   sayHi() {
//     alert(this.name);
//   }
// }

// // Использование:
// let user = new User("Иван");
// console.log(user);
// user.sayHi();

// function checkAge(age) {
//   if (age >= 18) {
//     return true;
//   } else {
//     return confirm('Do you have permission from your parents?');
//   }
// }

// let age = prompt('How old are you?', 18);

// if(checkAge(age)) {
//   alert ("Доступ разрешен");
// } else {
//   alert ("Доступ запрещен")
// }

//  function showMovie(age) {
//   if ( !checkAge(age) ) {
//     return;
//   }

//   alert( "Showing you the movie" ); // (*)
//   // ...
// } 
// showMovie(age);


//проверка на простые числа(не 0,не 1, делится без остатка на 1 и на саму себя. Если делится без остатка и на другие, то уже не простое, н-р 4, 6 делятся еще на 2, а 6 на 2,3)
// function showPrimes(n) {

//   for (let i = 2; i < n; i++) {//не 0, не 1, 
//     if (!isPrime(i)) continue;//цикл не прерывается,
//       //а переходит к следующей итерации (если условие все ещё равно true)

//     console.log(i);  // a prime
//   }
// }

// function isPrime(x) {
//   for (let i = 2; i < x; i++) {делится  без остатка ТОЛЬКО на 1 и на саму себя 
//     if ( x % i == 0) return false; // если целый остаток от деления равен 0
//   }
//   return true;
// } showPrimes(80)

// //1
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Did parents allow you?');
//   }
// }

// //2
// function checkAge(age) {
//   return (age > 18) || confirm('Did parents allow you?')}
// checkAge(19);

// //3
// function checkAge(age) {
//   return age > 18 ? true : confirm('Did parents allow you?')}
// checkAge(11);

// function min (a,b) {
//   return (a<b) ? a : b;
// }

// function min (a,b) {
//   if (a<b) {
//     return a;
//   }
//   return b;
// }

//1
// function getPow () {
//   let number = prompt("Задайте число");
//   let power = prompt("Задайте степень");
//   if (!Number.isInteger(power) || power < 1 ) {
//     alert ("enter positive number");
//     return;
//   }
//   return Math.pow(number, power);
// }
// getPow ();

//2
// let n = prompt("Задайте число");
// let p = prompt("Задайте степень");

// function pow(n, p) {
//   let result = n;
//   for (let i = 1; i<p; i++) {
//     result *= n;
//   }
//   return result;
// }

// if (!Number.isInteger(p) || p < 1 ) {
//   alert("Введите целое положительное число")
// } else {
//   pow(n, p);
// }

//3
// let n = prompt("Задайте число");
// let p = prompt("Задайте степень");

// function pow(n, p) {
//   return n**p;
// }

// if (!Number.isInteger(p) || p < 1) {
//   alert("Введите целое положительное число")
// } else {
//   pow(n, p);
// }

// const obj = {
//   age: 36,
//   func () {
//     console.log(this.age);
//   }
// }
// obj.func();

// если вызов функции выполняется в форме obj.f(), то this ссылается на obj
// const obj1 = {age: 36}
// const obj2 = {age: 31}

// function getThis() {
//   return console.log(this.age);
// }

// obj1.getThis = getThis;
// obj2.getThis = getThis;

// obj1.getThis()
// obj2.getThis()


//Значение this всегда меняется в зависимости от того, как вызывается функция
// const obj1 = {
//   age: 36,
//   func () {
//     console.log(this);
//   }
// }
// const obj2 = {
//   age: 10,
// }

// obj2.func = obj1.func;
// obj1.func()
// obj2.func()

//В нестрогом режиме специальный процесс, называемый this подстановкой, гарантирует, что значение this всегда является объектом.
// 1Если функция вызывается с this значением, равным undefined или null, this она заменяется на globalThis
// 2Если функция вызывается с this значением, равным примитивному, this она заменяется объектом-оболочкой примитивного значения.В НЕСТРОГОМ режим
// function getThis() {
//   return this;
// }

// Number.prototype.getThis = getThis;
// console.log(typeof(1).getThis())//obj
// console.log(getThis() === globalThis)//true

// В СТРОГОМ  режиме это же самое будет
// function getThis() {
//   return this;
// }

// Number.prototype.getThis = getThis;
// console.log(typeof(1).getThis())//number
// console.log(getThis() === globalThis)//false
// console.log(getThis() === undefined)//true


// для не строгого режима
// let obj = {a: 'Custom'}
// var a = 'Global';

// function whatsThis() {
//   return this.a; // 'this' depends on how the function is called
// }

// console.log(whatsThis()); // не строгий -'Global'; строгий error - т.к. this - undefined
// obj.whatsThis = whatsThis;
// console.log(obj.whatsThis()); // 'Custom'; для не строгого и строгого одно и тоже
// console.log(obj);// для не строгого и строгого одно и тоже


//apply(), call() передает значение this в ТЕКУЩУЮ функцию так, если бы это был ПАРАМЕТР. НЕ созд новую функцию
// function putObject(n,d){
//   return this.a + this.b + n + d;
// }

// let obj = {a: 5, b: 7}

// console.log(putObject.call(obj, 11, 3));
// console.log(putObject.apply(obj, [1, 5]));


//bind() -создает новую функцию с тем же телом и областью действия, но значение this привязывается к 1 аргументу bind 
// function putObject(n,d){
//   return this.a + this.b + n + d;
// }

// let obj = {a: 5, b: 7}

// const newFunction = putObject.bind(obj, 1,3);
// console.log(newFunction());





// истинно, когда currentTarget и target являются одним и тем же объектом this === e.currentTarget//true   this === e.target// true
// const elements = document.getElementsByTagName("a");

// function blueElement () {
//   this.style.color = "blue";
// }

// for (const element of elements) {
//   element.addEventListener("click", blueElement, false)
// }


// привязка this к классу
// class Car {
//   constructor() {
//     this.sayBye = this.sayBye.bind(this);//привязка this к классу
//   }

//   sayHi() {
//     console.log(`Hello from ${this.name}`)
//   }

//   sayBye() {
//     console.log(`Bye from ${this.name}`)
//   }

//   get name() {
//     return 'Ferrari';
//   }
// }

// class Bird {
//   get name() {
//     return 'Businka';
//   }
// }

// const car = new Car();
// const bird = new Bird();

// console.log(car.sayHi());
// console.log(car.sayBye());

// bird.sayHi = car.sayHi;
// bird.sayBye = car.sayBye;
// console.log(bird.sayHi());
// console.log(bird.sayBye());

// function Object (animal, age) {
//   this.animal = animal;
//   this.age = age;
// }

// const objNum1 = new Object('bird', 35)
// const objNum2 = new Object('cat', 7)
// const objNum3 = new Object('cat', 9)
// console.log(objNum1);
// console.log(objNum1.animal);
// console.log(objNum2);
// console.log(objNum2.animal);
// console.log(objNum3);
// console.log(objNum3.animal);


// let obj =  {}
// function A() { return obj; }
// function B() { return obj; }

// let a = new A();
// let b = new B();

// alert( a == b ); // true

// конструктор
// let Foo = function (name) { this.myName = name;}
// let fff = new Foo('Mike');
// console.log(fff);


// Call
// function Animal (type, food) {
//   this.type = type;
//   this.food = food;
// }

// function setNumber(number) {
//   Animal.call(this, 'bird', 'insects');
//   this.number = number;
//   console.log('This is' + this)
// }

// function setPrice(price) {
//   Animal.call(this, 'bird', 'insects');
//   this.price = price;
//   console.log('This is' + this)
// }

// const animal1 = new setNumber(25);
// const animal2 = new setPrice(5000);
// console.log(animal1);
// console.log(animal2);


// В этом примере мы вызвали функцию mountEntity без аргумента thisObj. В таких случаях JavaScript ссылается на глобальный объект.

// const newObj = (obj) => {console.log(obj)}

// function Obj(){
//   this.newObj = newObj;
//   console.log(`New object is ${this.newObj} + ${this}`)
// }

// Obj.call();

// let newEntity = (obj) => {return 1};

// function mountEntity(entity){
// 	this.entity = entity();
// 	console.log(`Entity ${this.entity} is mounted on ${this.entity}`);
// }

// const mountEntity1 = new mountEntity(newEntity);

// function GetStatus (name, surname) {
//   this.name = name;
//   this.surname = surname;
// }

// function Person1 (age) {
//   GetStatus.call(this, 'julia', 'chernomorskaia');
//   this.age = age;
//   console.log(`my name is ${this.name}, my surname is ${this.surname}, my age is ${this.age}`);
// }
// const per1 = new Person1(18);
// console.log(per1);

// Apply 1. массив аргументов
// function  Place (place1, place2) {
//   this.place1 = place1;
//   this.place2 = place2;
// }

// function Map (place3) {
//   Place.apply(this, [1,2]);
//   this.place3 = place3;
//   console.log(`i love ${this.place1}, ${this.place2}, ${this.place3}`)
// }

// const map = new Map('Germany');
// console.log(map)

// Apply 2. новый массив
// function  Place (place1, place2) {
//   this.place1 = place1;
//   this.place2 = place2;
// }

// function Map (place3) {
//   Place.apply(this, new Array('Montenegro', 'Serbia'));
//   this.place3 = place3;
//   console.log(`i love ${this.place1}, ${this.place2}, ${this.place3}`)
// }

// const map = new Map('Germany');
// console.log(map)

// Apply 3. arguments -1 пример
// function  Place (place1, place2) {
//   this.place1 = place1;
//   this.place2 = place2;
// }

// let args = ['Monaco', 'Kongo', 'Belgium'];

// function Map (place3) {
//   Place.apply(this, args);
//   this.place3 = place3;
//   console.log(`i love ${this.place1}, ${this.place2}, ${this.place3}`)
// }

// const map = new Map('Germany');
// console.log(map)

// Apply 3. arguments -2 пример

// const obj = {
//   numbers: [1,2,3,4,5,6,7,8]
// }

// console.log(obj.numbers)

// function getSumNum () {
//   const args = Array.from(arguments);// создаем массив. т.к arguments - это массивоподобный объект и у него нет свойств массива
//   console.log(args);
//   this.x = args.reduce((sum, current) =>{return sum + current},0)
//   console.log(`this.x = ${this.x}`)
// }

// function showResult () {
//   getSumNum.apply(obj, obj.numbers)
// }
// showResult ();

// class Name {
//   constructor(name) {
//     this.name = name;
//     this.state = {
//       counter: 'gsdd',
//     };
//   }
//   presentYourself() {
//     return `My name is ${this.name},`
//   }
//   handleCode() {
//     console.log("HANDLE CODE THIS = ", this.state);
//   }
// }

// class App extends Name {
//   constructor(name) {
//     super(name);
//     this.props = {count: 876969769};
//   }
//   showName () {
//     console.log(this.presentYourself() +  ' count: ' + this.props.count + ' ' + this.state.counter);
//   }
// }
// const ааа = new App('Ann');
// ааа.showName()


// если метод передается отдельно от объекта, то this теряется. 
// let user = {
//   firstName: "Вася",
//   sayHi() {
//     alert(`Привет, ${this.firstName}!`);
//   }
// };

// setTimeout(user.sayHi, 1000); // Привет, undefined!

// Есть 2 способа  исправить
// Bind
// let user = {
//   firstName: "Вася",
//   sayHi(){
//     alert(`Привет, ${this.firstName}!`);
//   }
// };
// let sayHi = user.sayHi.bind(user)// берем метод user.sayHi и привязываем его к user

// setTimeout(sayHi, 1000); // Привет, undefined!

//предать в функции
// Самый простой вариант решения – это обернуть вызов в анонимную функцию, создав замыкание: Но есть уязвимость-если до 1с перезаписать user, то в settimeout вылезет другое имя/значение
// let user = {
//   firstName: "Вася",
//   sayHi(){
//     alert(`Привет, ${this.firstName}!`);
//   }
// };
// const peter = function(){
//   user.sayHi()//объект user достаётся из замыкания, а затем вызывается его метод sayHi
// }
// setTimeout(peter()//объект user достаётся из замыкания, а затем вызывается его метод sayHi
// , 1000); // Привет, undefined!

// let user = {
//   firstName: "Вася",
//   sayHi(){
//     alert(`Привет, ${this.firstName}!`);
//   }
// };
// setTimeout(()=>{
//   user.sayHi()}//объект user достаётся из замыкания, а затем вызывается его метод sayHi
// , 1000); // Привет, undefined!\

// function x (){
//   console.log('The loop is done')
// }

// for(let i =1; i<6; i++) {
//   setTimeout(()=>{console.log(i)}, 1000)
// } 

// setTimeout(x, 1001)

// function x (){
//   console.log('The loop is done')
// }

// for(let i =1; i<6; i++) {
//   setTimeout(()=>{console.log(i);
//   if (i===5) {
//     x();
//   }
// }, 1000)


// chain и прототипы функций
// function WorkingHours(){
//   this.name = '';
//   this.status ='';
// }
// WorkingHours.prototype.close = function(){;
//   this.status= 'close';
//   return this;
// }
// WorkingHours.prototype.open = function(){
//   this.status='open';
//   return this;
// }
// WorkingHours.prototype.setParam = function(name){
//   this.name = name;
//   return this;
// }
// WorkingHours.prototype.print = function(){
//   console.log(`The ${this.name} is ${this.status}`)
// }
// let work = new WorkingHours();
// work.setParam('Saint-Petersburg State University').close().print();

// function WorkingHours(){
//   getGlobalFunc();
//   this.hours='';
//   this.name='';
//   this.print='';
// }
// function getGlobalFunc(){
//   console.log('Hello, user!');
// }
// WorkingHours.prototype.setParamHours = function(hours){
//   this.hours= hours;
//   return this;
// }
// WorkingHours.prototype.setParamName = function(name){
//   this.name= name;
//   return this;
// }
// WorkingHours.prototype.printAll = function(){
//   console.log(`The ${this.name} is ${this.hours}`)
// }
// let xxx = new WorkingHours();
// xxx.setParamHours('close').setParamName('Saint-Petersburg State University').printAll();

// function WorkingHours(){
//   getGlobalFunc();//ищет функцию, объявленную в глобальной области видимости
//   this.setParamHours;//this относится к экземпляру WorkingHours в данном случае
//   this.setParamName;// наследуют свойства от прототипов
//   this.printAll;
// }
// function getGlobalFunc(){
//   console.log('Hello, user!');
// }
// WorkingHours.prototype.setParamHours = function(hours){
//   this.hours= hours;
//   return this;
// }
// WorkingHours.prototype.setParamName = function(name){
//   this.name= name;
//   return this;
// }
// WorkingHours.prototype.printAll = function(){
//   console.log(`The ${this.name} is ${this.hours}`)
// }
// let xxx = new WorkingHours();
// xxx.setParamHours('close').setParamName('Saint-Petersburg State University').printAll();

// function past(x){
//   return x;
// }

// function decorateCache(func){
//   let cache = new Map();
//   console.log(cache);

//   return function(x){

//   if(cache.has(x)){
//     return cache.get(x);
//   }

//   let result = func(x);
//   cache.set(x, result);
//   return result;
//   }
  
// }
// console.log((decorateCache(past))(1));
// console.log((decorateCache(past))(1));

// function past(x, y){
//   let arr = [x, y]
//   return arr;
// }

// function decorateCache(func){
//   let cache = new Map();

//   return function(x,y){

//   if(cache.has(y)){
//     return cache.get(y);
//   }

//   let result = func(x,y);
//   // console.log(result);
//   console.log(cache.set(result[0],result[1])); 
//   cache.forEach((value, key)=>{console.log(`${key}:${value}`)})
//   return result;
//   }
  
// }
// console.log((decorateCache(past))(1,3));
// console.log((decorateCache(past))(1,3));


// Декоративное кеширование не подходит для работы с объектными методами(ощибка будет в строке со * - не увидит this.someMethod)

//решение - привязка slow к объекту с помощью bind 

// let worker = {
//   someMethod() {
//     return 1;
//   },

//   slow(x) {
//     // scary CPU-heavy task here
//     return x * this.someMethod(); // (*)
//   }
// };
// let xxx =worker.slow.bind(worker);

// // same code as before
// function cachingDecorator(func) {
//   let cache = new Map();
//   return function(x) {
//     if (cache.has(x)) {
//       return cache.get(x);
//     }
//     let result = func(x); // (**)
//     cache.set(x, result);
//     cache.forEach((value, key)=>{console.log(`${key}:${value}`)})
//     return result;
//   };
// }

// console.log(xxx(1) ); // the original method works

// worker.xxx = cachingDecorator(xxx); // now make it caching

// console.log(worker.xxx(1));

// решение с помощью call
// let worker = {
//   someMethod() {
//     return 1;
//   },

//   slow(x) {
//     // scary CPU-heavy task here
//     return x * this.someMethod(); // (*)
//   }
// };

// // same code as before
// function cachingDecorator(func) {
//   let cache = new Map();
//   return function(x) {
//     if (cache.has(x)) {
//       return cache.get(x);
//     }
//     let result = func.call(this, x); // (**)
//     cache.set(x, result);
//     cache.forEach((value, key)=>{console.log(`${key}:${value}`)})//1:1
//     return result;
//   };
// }

// worker.slow = cachingDecorator(worker.slow);

// console.log(worker.slow(1) ); //1
// console.log(worker.slow(1));//1

// let worker = {
//   slow(min, max) {
//     return min + max;
//   }
// };

// function cachingDecorator(func, hash) {
//   let cache = new Map();
//   return function() {
//     let key = hash(arguments); // вызываем hash(arguments), а объект arguments является одновременно итерационным и похожим на массив, но не реальным массивом.
//     console.log(key);// (*)
//     if (cache.has(key)) {
//       return cache.get(key);
//     }

//     let result = func.apply(this, arguments); // (**)

//     cache.set(key, result);
//     return result;
//   };
// }

// function hash(args) {
//   return [].join.call(args);//т.к объект arguments является одновременно итерационным и похожим на массив, но не реальным массивом, то берем (заимствуем) метод join из обычного массива ([].join) и используем [].join.call для запуска его в контексте аргументов. 
//   }


// worker.slow = cachingDecorator(worker.slow, hash);

// console.log( worker.slow(3, 5) ); // works
// console.log( "Again " + worker.slow(3, 5) ); // same (cached)


// setTimeout

// const print = (message) =>{console.log(message)}
// setTimeout(print, 5000, "Hello") //"hello" через 5 секунд

// const print = (message) =>{console.log(message)}
// setTimeout(print("My name is"), 5000) //"hello" через 5 секунд

// function sayHi(phrase, who) {
//   alert( phrase + ', ' + who );
// }

// setTimeout(sayHi( "Hello", "John"), 1000,); // Hello, John
// function sayHi() {
//   console.log('Hello');
// }

// let timerId = setTimeout(sayHi, 1000);
// console.log(timerId);
// clearTimeout(timerId);

// let timerId = setTimeout(() => alert("never happens"), 1000);
// console.log(timerId); // timer identifier

// clearTimeout(timerId);
// console.log(timerId); //

// удалит сразу
// let timerId = setInterval(() => console.log('tick'), 2000);
// clearInterval(timerId); console.log('stop');

// // удалит через 5 секунд
// let timerId = setInterval(() => console.log('tick'), 2000);
// setTimeout(()=>{clearInterval(timerId); console.log('stop');},5000)

// repeat with the interval of 2 seconds
// let timerId = setInterval(() => alert('tick'), 2000);
// setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);

// let timerId = setTimeout(function tick() {
//   alert('tick');
//   timerId = setTimeout(tick, 2000); // (*)
// }, 2000);

// let items =[1,2,3]

// function getItems () {
//   return items =[3,2,1]// переопределяем ссылку 
// }
// console.log(items)//[1,2,3]
// console.log(getItems());//[3,2,1]
// console.log(items)//[3,2,1]


// //  var loki; всплывает сюда и следующая строка не выполняется
// if ((loki in window) === false) {// сейчас в window нет property loki
//   var loki = 1; //loki=1; не выполняется
// }
// console.log(loki)// undefined из-за всплытия



// function как объект
// function logPrice(price){
//   console.log(price);
// }

// function currencize(logger, currency){
//   function currencized(price){
//     return logger(currency + price)
//   }
//   currencized.currency = currency;// функция как объект записывает свойство
//   return currencized;
// }

// const lll = currencize(logPrice, '$');
// lll(56);


// // тоже самое, что и выше
// function logPrice(price){
//   console.log(price);
// }

// function currencize(logger){
//   function currencized(price, currency){
//     return logger(currency + price)
//   }
//   return currencized;
// }

// const lll = currencize(logPrice, );
// lll(56, '$');
// console.log(typeof(lll));


// const y = new Boolean(true);
// y;//{true} объект

// function cookPie (type, radius, slice) {
//   console.log(type, radius, slice)
// }

// функция в массиве
// var ingredients = 'soup';
// const pieFlow =[ingredients, cookPie];
// pieFlow[1]('lemon', 42, true);

// функция в объекте(метод объекта)
// const obj = {
//  type:'lemon',
//  cook: cookPie,
// }

// const obj1 = {
//   type:'bread',
//   cookPie,
//  }
 
// console.log(obj.cook('lemon', 42, true));
// console.log(obj1.cookPie('butter', 15, false));

// // функция декоратор getCallCounter принимает др функцию cookPie, как параметр,и возвращает др функцию
// function getCallCounter (func) {
//   func.callCounter = 0// добавляем в функцию ключ и значение
// //обертка над нашей изначальной функцией? аргументы пробрасываем через ... args
//    return function (...args) {
//     func.callCounter +=1;
//     return func(...args);
//   }
// }

// let ggg = getCallCounter(cookPie);
// ggg('butter', 15, false);

// console.log(cookPie.callCounter);//1
// ggg('butter', 15, false);

// console.log(cookPie.callCounter);//2
// ggg('butter', 15, false);

// console.log(cookPie.callCounter);//3

// function cookPie (type, radius, slice) {
//   console.log(type, radius, slice)
// }



// function cookPie () {
//   console.log(this.type)
// }
// const lemonPie = {type:'lemon'};
// const chocoPie = {type:'choco'};

// lemonPie.cookPie = cookPie;
// chocoPie.cookPie = cookPie;

// console.log(lemonPie);//{type: 'lemon', cookPie: ƒ}
// console.log(lemonPie.cookPie());
// console.log(chocoPie.cookPie());


// console.log(new  cookPie());



// const number = [5, 11, 39, -4, 0, 104]
// console.log(Math.max.call(this,...number))//берем спред оператор и размазываем массив 
// console.log(Math.max.apply(this, number))//объект Math с методом max. this мы не меняем, а передаем объект Math
// console.log(Math.max(...number))

// const pie =[
//   {ttt: 'a', radius: 1},
//   {ttt: 'b', radius: 2},
//   {ttt: 'c', radius: 4}
// ]

// pie
//   .filter(pie=>  pie.radius>2)//{ttt: 'c', radius: 4} создает новый массив на основе старого
//   .map(pie=>({ttt: pie.ttt, crashed: true}));//{ttt: 'c', crashed: true}

// // самовызывающаяся функция; замыкание
// const changePie = (
//   function(){
//     let radius = 0;
//     // let type='lemon';

//     return {
//       inc: ()=> radius += 1,
//       dec: ()=> radius -=1,
//       rad: ()=>radius
//     }
//   }
// )()
// console.log(changePie)//{inc: ƒ, dec: ƒ, rad: ƒ}
// console.log(changePie.inc())//1
// console.log(changePie.inc())//2
// console.log(changePie.inc())//3
// console.log(changePie.dec())//2
// console.log(changePie.rad())//2

// const changePie  = {
//   type: 'c',
//   radius: 6,
//   inc() {
//     this.radius +=1;
//     return this;
//   },
//   dec() {
//     this.radius -=1;
//     return this;
//   },
//   rad() {
//     return this.radius;
//   }
// }
// changePie.inc().inc().inc().dec().dec().rad()





// замыкание в цикле
// function printI (index){
//   console.log(index)
// }
// так как это глобальный scope ? поэтому сначала  цикл доходит до 5 , а потом отрабатывает settimeout
// for(var i=0; i<5; i++){
//   console.log(i);
//   setTimeout(()=> printI(i), i)
// } // выведет сначала1377(1,2,3,4,5), а потом 1378(5 раз по 5)

//  let создает блочный scope, поэтому 5 settimeout ов с разными и отправляется ожидать вывода
// for(let  i=0; i<5; i++){
//   console.log(i);
//   setTimeout(()=> printI(i), i)
// } // выведет сначала1377(1,2,3,4,5), а потом 1378(1,2,3,4,5)

// //обернуть стрел функ в (), самовызыв функ
// for(var i=0; i<5; i++){
//   console.log(i);
//   setTimeout(((ind)=> printI(ind))(i), i)
// } // выведет параллельно сначала1377(0,1,2,3,4,) а потом 1378(0,1,2,3,4)


// //  let создает блочный scope, поэтому 5 settimeout ов с разными и отправляется ожидать вывода
// for(var i=0; i<5; i++){
//   let ind=i;
//   console.log(ind);
//   setTimeout(()=> printI(ind), ind)
// } // выведет сначала1377(0,1,2,3,4,), а потом 1378(0,1,2,3,4,)


// без переопределения функции


// //переопределение функции
// function getRadius() {
//   let radius = 0;
//   getRadius = function (){
//     return radius +=2; 
//   }
//   getRadius();
// }
// // три разом
// getRadius();
// getRadius();
// getRadius();//6
// // еще один
// getRadius();//8

// // декоратор
// function cookPie(type, radius, or) {
//   console.log(type, radius, or)
// }

// function decorator(func){
//   return function (...args) {
//     console.log(args)
//     return func(...args)
//   }
// }

// const fff = decorator(cookPie); //можно подменить на cookPie
// fff('apricot', 25, true)


// // декоратор spy - считает сколько было вызовов и какие аргументы передавались
// function cookPie(type, radius, or) {
//   console.log(type, radius, or)
// }

// function decoratorSpy(func){
//    function spyCount(...args) {
//     spyCount.countVisits += 1;
//     spyCount.args.push(args);
//     return func(...args);
//   }
//   spyCount.countVisits =0;
//   spyCount.args =[];
//   return spyCount;
// }

// const fff = decoratorSpy(cookPie); //можно подменить на cookPie
// fff('apricot', 25, true);
// fff('lemon', 18, false);
// console.log(fff.countVisits, fff.args)

// // декоратор мемоизация
// function cookPie(type, radius, or) {
//   console.log(type, radius, or);
//   return type;
// }

// function memoize(func){
//   return function(...args) {
//     const key = JSON.stringify(args);
//     func.memory = func.memory || {}

//     if(func.memory[key]){
//       return func.memory[key]
//     }

//     return func.memory[key] = func(...args);
//   }
// }

// const fff = memoize(cookPie); //можно подменить на cookPie
// console.log(fff('apricot', 25, true));
// console.log(fff('lemon', 18, false));
// console.log(fff('apricot', 25, true));

// Каррирование – это трансформация функций таким образом, чтобы они принимали аргументы не как f(a, b, c), а как f(a)(b)(c).
// Каррирование не вызывает функцию. Оно просто трансформирует её.



// Каррирование
// function curry(func) {
//   return function(a) {//обертка function(a) вызывается как sum(4), аргумент сохраняется в лексическом окружении и возвращается новая обёртка function(b).
//     return function(b) {
//       if(c) {
//         return function(c){
//           return func(a,b, с)//Далее уже эта обёртка вызывается с аргументом 6 и передаёт вызов к оригинальной функции sum.
//         }
//       }
//         return func(a,b)
//       }
//     }
//   }
// function sum(a,b) {
//   return a+b
// }
// const ddd = curry(sum);
// ddd(4)(6)(7)

// //1526 копирование данных 1526
// let message = 123;
// let hello;
// hello=message;
// console.log(hello);


// // 1533 let и var можно объявлять без значения
// let tomato;//undefined
// var potato;//undefined
// const peach;//error


// // 1539 ключи и значения в объектах и массивах const меняются. Сами ссылки-нет
// // 1
// const fruits =['apple', 'peach'];
// fruits[1]='grape';
// fruits[2]='pear';
// console.log(fruits);//[ 'apple', 'grape', 'pear' ]
// fruits.push('animal');//добавляет указанные элементы в конец массива и возвращает новую длину массива.
// console.log(fruits);//[ 'apple', 'grape', 'pear', 'animal' ]
// fruits.pop('animal');//удаляет последний элем из массива и возвращает его значение
// console.log(fruits);//[ 'apple', 'grape', 'pear' ]
// //2
// const fruits = 
//   {
//     fruit1: 'apple',
//     fruit2:  'peach',
//   };
//   console.log(fruits);
//   fruits.fruit1='grape';
//   fruits.fruit3='pear';

//   console.log(fruits);
//   fruits = null;// error -перезаписать ссылку на объект нельзя



// //1564 let, const - нельзя повторно объявлять перем с тем же именем в одной и той же обл вид. Но можно повторно объявлять перем с тем же именем в разных обл вид, например, родит и дочерней;
// //var - можно повторно объявлять перем с тем же именем в одной и той же обл вид. и в разных обл вид, например, родит и дочерней;
// 1
// var x = 'tea';
// (function xxx (){
//   var x = 'apple';
//   console.log(x);
//   var x= 'pear';
//   console.log(x);
// })()
// console.log(x)
// // 2
// let x = 'tea';
// (function xxx (){
//   let x = 'apple';
//   console.log(x);
//   // var x= 'pear';//error +нельзя смешивать операторы , используя одно и то же имя и одну и ту же обл вид; (let x='pear' было бы тоже ошибкой,т.к нельзя повторно объявлять перем с тем же именем в одной и той же обл вид)
//   // console.log(x);
// })()
// console.log(x)

// Динамическое типизирование- переменные не привязаны ни к одному типу. В переменной может быть строка, а через некоторое время число;

// camelCase(все случаи кроме: PascalCase(классы и конструкторы,перечисления(перечисления перем, объединенных общей тематикой(объект))) и CONSTANT_CASE(настоящие константы, типа pi или EARTH_RADIUS))


// //Number(целые числа, числа с плавающей точкой, +-Infinity, NaN)
// console.log(NaN**0)// 1 Это исключение, при любых других операциях с NaN будет NaN. NaN при попытке совершить запрещенную операцию
// console.log('fff'*'fff');//NaN
// console.log(0/0);//NaN
// console.log(typeof NaN);//number
// NaN не равно ничему, в т ч самому себе
// //BigInt(сверхбольшие числа, целые числа произвольной длины.Создается добавлением n к концу целого числа)
// console.log(typeof 1234567891234567891234556789122333n)// 'bigint'
// // String
// console.log('Строка раз, \n Строка два')// \n - символ переноса строки
// console.log('\"Строка раз, \n Строка два\"')// \" - двойные кавычки в начале строки'
// // Boolean
// const greater = 4>2;
// console.log(greater)
// // Null -определенное значение отсутствия объекта, намеренное значение отсутствия объекта
// console.log(undefined===null)// 'false'
// console.log(undefined==null)// 'true'
// undefined - неопределенность, ненамеренное значение отсутствия объекта,
// console.log(typeof undefined)// 'undefined'
// //typeof null// 'object'

// комменты
/*комменты 
комменты 
комменты 
*/
// <!-- gggg --> комменты в html


// //1619 координаты курсора
// document.addEventListener('click',(e)=>{
//   console.log(`координаты курсора:${e.clientX},${e.clientY}`)
// })

// //alert() сообщение + OK
// alert('How are you?');
// // prompt() сообщение + поле для ввода + кнопки OK(true) и ОТМЕНА(false). В переменную surname возвращается true или false
// const surname = prompt('Пожалуйста, представьтесь!');
// if (surname) {
//   document.querySelector('#welcome').innerHTML = `<b>${surname}</b>, добро пожаловать!`
// } else {
//   document.querySelector('#welcome').innerHTML = `<b>Гость</b>, добро пожаловать!`
// }
// // confirm() сообщение + кнопки OK(true) и ОТМЕНА(false) В переменную xxx возвращается true или false
// const xxx = confirm('Вам нравится JS?')
// if(xxx) {
//   document.querySelector('#welcome').textContent = 'ДА'
// } else {
//   document.querySelector('#welcome').textContent = 'НЕТ'
// }
// let num=123456;
// console.log(num.toString(36));//2n9c
// console.log(123456.toString(36));

// console.log( 0.1 + 0.2);//0.30000000000000004
// alert( 0.1 + 0.2 == 0.3 )// false
// console.log(isFinite(''));//пустая строка -0
// console.log(isFinite('hg'));//ошибка числового знач
// console.log(Number('100'))//NaN 
// console.log(parseInt('22,5'))//22
// console.log(parseInt('22.5'))//22
// console.log(Number('22,5'))//NaN
// console.log(Number('22.5'))//22.5
// console.log('2'>11)


//Switch
// function isEven(number) {
//   let result;
//   switch(number) {
//     case 0: 
//       result ='четные';
//       break;
//     case 1: 
//       result='ytчетные'; 
//       break;
//     case 2: 
//       result ='разные';
//       break;
//     default:  result='fhhfh';
//   }
//   return result;
// }

// function isEven(number) {
//   let result;
//   switch(number) {
//     case 0:
//     case 1:
//     case 2:
//       return result ='четные';
//     case 3:
//     case 4:
//     case 5: 
//       return result='ytчетные'; 
//     case 6: 
//     case 7:
//     case 8:
//       return result ='разные';
//     default:  return result='fhhfh';
//   }
// }

// isEven(11);
// function printWarning (callback) {
//   callback('внимание')
// }

//   if (isIE()) {//Функция IsIE() возвращает значение true, если браузером является Internet Explorer, и значение false в противном случае.
//     printWarning(alert);
//   } else {
//     printWarning(console.log)
//   }

// console.log('My \n'.length)
// console.log('hello'.at(-1));
// console.log('hello'['hello'.length -1]);

// for (let letter of 'hello') {
//   console.log(letter)
// }

// let str='Hi'; str='h'+str[1]; console.log(str)

// console.log('widget'.indexOf('e'))
// console.log('widget with id'.indexOf('th'))

// console.log('widget'.includes('n'))
// console.log('widget with id'.includes('th'))

// console.log(' widget'.startsWith('w'))
// console.log('widget with id'.endsWith('id'))

// console.log('widget'.slice(-3))
// console.log('widget'.substring(3))
// console.log('c'.codePointAt(0))

// let str = 'widget with id';
// for (let i=0; i<=str.length; i++) {
// console.log(str.codePointAt(i))
// }

// console.log('widget with id'.codePointAt(0))
// console.log('widget'.localeCompare('widget'))

// let num = 5;
// console.log(typeof num);
// let ggg = String(5);
// console.log(ggg);
// console.log(typeof ggg);
// console.log('widget with id'.replace('id', 'ID'))//wIDget with id
// console.log('widget with id'.replaceAll('id', 'ID'))//wIDget with ID

// const a ="widget ";
// const b = "with id";
// console.log(a.concat(' ',b));

// console.log(Number.isInteger(4))
// let nick = 'cat';
// function nickName (nick) {
//   console.log(`hfpyjt ${nick}`)//hfpyjt ppp
// }
// nickName ('ppp')
// let a ='widget with id'.replaceAll(' ', '').split('').join('')
// console.log(typeof a);
// console.log(a);


// //чтобы прибавлялся pad сначала строки
// const myPadStart=(string,length,pad)=>{
//   const actualPad = length - string.length;//из итоговой длины вычитаем длину текущей строки
//   if(actualPad<=0){
//     return string;
//   }
//   // return pad.slice(0,actualPad%pad.length) + ' ' + pad.repeat(actualPad/pad.length)+ string;
//   return string+ ' ' + pad.repeat(actualPad/pad.length)+ pad.slice(0,actualPad%pad.length);
// }
// console.log(myPadStart('widget with id',29,'array '))



// выбирает буквы из строкового массива  по значениям в цифровом массиве по порядку
// let symbols = ['a','d','h','u','e','b','g','a','d','h','u','e','b','g','a','d','h','u','e','b','g'];
// let n =[4,1,7,2,11,9];
// let empty = '';
// for(let i=0; i<=n.length-1;i++){
//   empty=empty+symbols[n[i]];
// }
// console.log(empty);//edaheh


// // замена переменной
// let n =[4,1,7,2,11,9];
// n[3] = 69;
// console.log(n)

// // поменять местами 0 и 1
// let n =[4,1,7,2,11,9];
// let swap = n[0];
// n[0] =n[1];
// n[1] =swap;
// console.log(n)


// // // минимальное число
// let n =[4,1,7,2,11,9];
// let minValue =n[0];
// for (let i=1; i<=n.length-1;i++){
//   if(n[i]<minValue){
//     minValue = n[i];
//     console.log(minValue)
//   }
// }
// console.log(minValue)

// // сортировка по возрастанию
// let n =[4,0,7,2,11,9];
// for (let i=0; i<=n.length-2;i++){
//   let minValue =n[i];
//   for (let j=i+1; j<=n.length-1;j++){
//   if(n[j]<minValue){
//     minValue = n[j];
//     let swap =n[i];
//     n[i] = minValue;
//     n[j] =swap;
//   }
// }
// console.log(minValue);
// }
// console.log(n);//[ 0, 2, 4, 7, 9, 11 ]

// // поиск медианы
// let n =[1,2,3,4,5,6];
// let mediana;
// if (n.length%2 !== 0) {
//   let medianaIndex = (n.length -1)/2 ;
//   mediana = n[medianaIndex]
//   console.log(mediana);
// } else {
//   let leftmediana = n.length/2 -1;
//   let rightmediana = n.length/2 ;
//   mediana=(n[rightmediana]+n[leftmediana])/2;
//   console.log(mediana);
// }

// console.log(n);//[ 0, 2, 4, 7, 9, 11 ]

// // сортировка от максимального до мин
// let a =[120, 140, 160, 201, 180, 2, 0, 505, 300]
// for(let i=0; i<=a.length-2;i++){
//   let maxValue=a[i];
//   for(let j=i+1; j<=a.length-1;j++){
//     if(a[j]>maxValue) {
//       maxValue=a[j];
//       let swap = a[i];
//       a[i] = maxValue;
//       a[j] = swap;
//     }
//   }
// }
// console.log(a)

// let calculateMiles = function(distance, isBuisnessClass) {
//   let persent = 0.18;
//   if(isBuisnessClass == true){
//     persent +=0.04
//   }
//   if(distance>3500){
//     persent +=0.15
//   }
//   return Math.floor((persent*distance)*100)/100;
// }

// console.log(calculateMiles(3600, true));//0.18+0.04+0.15
// console.log(calculateMiles(3600, false));//0.18+0.04

// // геттеры
// let cat = {
//   name:'Keks',
//   age: 21,
//   getGreeting(){
//     return `hello,my name is ${cat.name}, my age is ${cat.age}`
//   } 
// }
// console.log(cat.getGreeting())

// console.log(typeof(function(){}));

// // Деструктуризация объекта
// const obj = {
//   nik: 'Yukka',
//   age: 25,
//   whoAmI: 'cat'
// }
// const {whoAmI, nik, sex='female'} = obj;
// let {age} = obj;
// const STATE_AGE = 25;
// age = age*STATE_AGE;
// console.log(`My nik is ${nik}. I am a ${whoAmI}. I'm ${age}. ${sex}`)

// // Деструктуризация массива
// const [first, , third, ] = ['my','name','is','keks'];
// console.log(second, third);
// console.log(first, third)
// const [, second, ,forth] = ['my','name','is','keks'];
// console.log(second, forth);//name keks

// // Деструктуризация строк
// const [first, second, ,forth] = 'my name is keks';
// console.log(second, forth);//y n
// console.log(first, second)

// // join 
// console.log(['my','name','is','keks'].join(''));
// console.log(['my'].join('!'));
// console.log([undefined,undefined].join());

// // slice
// const x =['my','name','is','keks'];
// console.log(x);
// const y = x.slice();
// console.log(y);
// console.log(x==y);//так как  2 разных массива, 2 разные ячейки памяти

// forEach
// const x =['my','name','is','keks'];
// const y = [];

// for (let i=0; i<=x.length-1;i++){
//  y.push(x[i])
// }

// x.forEach(item =>{
//   y.push(item);
// })

// console.log(y)

// const films = [
//   {
//     id:0,
//     title: 'die hard'
//   },
//   {
//     id:1,
//     title: 'terminator'
//   },
// ]
// const newFilms = [];

// films.forEach(item =>{
//   newFilms.push(item.title)
// })

// films.forEach((film, index) =>{
//   newFilms[index] = film.title;
// })
// console.log(newFilms);

// const newTitle = films.map((film) =>{
//   return film.title;
// })
// console.log(newTitle)


// for ... in перебирает все КЛЮЧИ объекта
// const films = {
//     title1: 'die',
//     title2: 'die hard',
//     title3: 'die hard2',
//     "задачи на сегодня": 3,
//     "просроченные": 5876,
//     "выполненные": 44,
//   }

//   for (let film in films) {
//     if (films.hasOwnProperty(film)) {
//     console.log(film);
//     }
//   }

// let animal = {
//   eats: true
// };

// let rabbit = {
//   jumps: true,
//   __proto__: animal
// };

// for (let key in rabbit) {
//   if(rabbit.hasOwnProperty(key)){
//   console.log( key + " = " + rabbit[key] ); 
//   }// jumps = true, eats = true
// }

// Object.keys возвращает массив ключей
// const films = {
//     title1: 'die',
//     title2: 'die hard',
//     title3: 'die hard2',
//     "задачи на сегодня": 3,
//     "просроченные": 5876,
//     "выполненные": 44,
//   }

  // console.log(Object.keys(films))// [
  // //   'title1',
  // //   'title2',
  // //   'title3',
  // //   'задачи на сегодня',
  // //   'просроченные',
  // //   'выполненные'
  // // ]

  // console.log(Object.keys(films).join(','))// title1,title2,title3,задачи на сегодня,просроченные,выполненные

  // console.log(Object.values(films).join(','))//die,die hard,die hard2,3,5876,44
  // console.log(Object.entries(films).join(','))
// console.log(Object.entries(films).map((film)=>{return film[0] + ' - ' +film[1]}).join(', '))

// const films2 = {
//   title4: 'diety',
//   title5: 'die dgdhdghard',
//   title6: 'die cghdghdghhard2',
// }

// const xxx = {}

// console.log(Object.assign(xxx, films, films2))





// const members = [['Саша', 'Игорь'],['Лидия', 'Сергей']];

// members.forEach(()=>{//не передали сюда параметр
//   members.forEach((member)=>{
//     console.log(member);
//   })
// })


// members.forEach((members)=>{..лучше изменить members в параметрах и на след строке
//   members.forEach((member)=>{
//     console.log(member);
//   })
// })// Саша Игорь Лидия Сергей

// members.forEach((groups1)=>{
//   groups1.forEach((groups2)=>{
//     console.log(groups2);
//   })
// })// Саша Игорь Лидия Сергей


  // members.forEach((member)=>{
  //   console.log(member);
  // })//[ 'Саша', 'Игорь' ] [ 'Лидия', 'Сергей' ]

  // // замыкание
  // function xxx(){
  //   let a =0
  //   return function yyy(){
  //     a+=1;
  //     return a;
  //   }
  // }

  // const b = xxx();
  // console.log(b());
  // console.log(b());
  // console.log(b());

  // генератор случ чисел
  // const random = (min,max) =>{
  //   return Math.floor(Math.random()*(max-min+1))+min
  // }
  // console.log(random(20,50))


  // function random(min, max){
  //   const lower =Math.trunc(Math.min(Math.abs(min),Math.abs(max)))
  //   // console.log(lower);
  //   const upper =Math.trunc(Math.max(Math.abs(min),Math.abs(max)))
  //   // console.log(upper);
  //   return Math.trunc(Math.random()*(upper-lower+1))+lower;
  // }

// console.log(random(88.9, -11.6));

// function createRandomId(min, max){
//   let massUnique =[];//пустой массив
//   return function (){
//     if(massUnique.length>=(max-min+1)) {
//       console.error('Перебраны все числа диапазона')
//       return null
//     }
//     let currentValue = random(min, max); //произвольное значение
//     console.log(currentValue);
//       while(massUnique.includes(currentValue)) {//пока массив содержит currentValue
//       currentValue = random(min, max);// создай другое currentValue
//       console.log(currentValue);
//     }
//     massUnique.push(currentValue);// запиши его в массив
//     console.log(massUnique)
//     return currentValue;
//   }
// }
// const x = createRandomId(1, 3);
// x();
// x();
// x();
// x();

// function random(min,max){
//   const lower = Math.trunc(Math.min(Math.abs(min),Math.abs(max)))
//   const upper = Math.trunc(Math.max(Math.abs(min),Math.abs(max)))
//   return Math.trunc(Math.random()*(upper-lower+1)+lower)
// }


// function getRandomId(min,max){
//   let massNumber =[];
//   return function () {
//     if(massNumber.length>=max-min+1){
//       console.error('Числа закончились');
//       return massNumber;
//     }
//     let currentValue =  random(min,max);
//     while(massNumber.includes(currentValue)) {
//       currentValue =  random(min,max);
//     }
//     massNumber.push(currentValue);
//     return currentValue;
//   }
// }

// const x =getRandomId(1,3)
// console.log(x());
// console.log(x());
// console.log(x());
// console.log(x());



//c замыканием можно создать разные счетчики
// function x(){
//   let n = 0;
//   return function y(){
//     n+=1;
//     return n
//   }
// }
// let xx = x();
// console.log(xx());
// console.log(xx());
// console.log(xx());


// //только 1 счетчик
// let x = 0;
// function y(){
//   x+=1;
//   return x;
// }

// console.log(y());
// console.log(y());
// console.log(y());

// const first = {title1: 'die', 25:'раз',[Symbol('раз два три')]: 30}
// const third = {
// ...first,
// "выполненные": 44,
// 1: 25,
// }
// console.log(third)// {1:25, 25:'раз', title1: 'die', 'выполненные': 44,[Symbol('раз два три')]: 30 }


// function x(...param) {
//   console.log(param);
// }
// x(1,4,6,8,90);

// function x(a, b, с, d, e) {
//   console.log(a*b*e);
// }

// const num =[5,4,6,8,90]
// x(...num);

// const m = [1,2,3,4,5]
// const xx = [...m, 6,7,8]
// console.log(xx);


// const obj = {nik: 'Yukka', age: 25, whoAmI: 'cat',title1: 'die', 25:'раз',[Symbol('раз два три')]:44, "выполненные": 44,
// 1: 25,};
// console.log(Object.keys(obj));
// console.log(Reflect.ownKeys(obj));

// function hello({nik}) {console.log(nik)} hello(obj)


// // мемоизация
// const memo = (cb) => {//передается incr
//   const  map = new Map();//созд коллекцию map(ключ-значение). Ключ абсол любое знач
//   return (key)=>{//внутренняя функция в нее передаем  ключ
//     if(!map.has(key)) {// если у нас нет ключа, то 
//       map.set(key, cb(key));//записываем в коллекцию ключ и значение cb(key)
//     }
//     return map.get(key); //если есть ключ, то  возвращаем значение по ключу
//     }
//   }
// function incr(key) {
//   console.log('печать')
//   return key+=1;
// };
// const n = memo(incr);
// console.log(n(5));//печать
//                   //6
// console.log(n(5));//6

// console.log('widget with id'.codePointAt(0))


// [1,2,3,4].forEach((value,index,array)=>{console.log(array)})

// // перебор детей и вывод в консоль
// const html = document.documentElement;
// for(let i =0; i<html.children.length; i++) {
//   const child = html.children[i]
//   console.log(child.tagName.toLowerCase());
//   for(let j =0; j<child.children.length; j++) {
//     const innerChild = child.children[j]
//     console.log('  |---'+innerChild.tagName.toLowerCase())
//   }
// }

// const ready = document.querySelector('div');
// console.log(ready)

let makeElement = function(tagName, className, text, picture, alt) {//универсальная f для добавления элементов
  let element = document.createElement(tagName);
  element.classList.add(className);
  if(text){
    element.textContent = text;
  }
  // if(picture&&true){
  //   element.src = picture;
  //   element.alt = alt;
  // }
  return element;
}
// const cardList = document.querySelector('.products');//список ul
// const listItem = makeElement('li', 'product');//делаем li
// cardList.appendChild(listItem);//добавляем li в ul
// listItem.style.listStyleType = 'none';
// const title = makeElement('h1', 'title', 'Заголовок h1')//делаем h1
// listItem.appendChild(title);//добавляем  h1  в li
// const pic = makeElement('img', 'picture', false, './13-20220105_153354-800x600.gif', 'обнимашки')//делаем img
// listItem.appendChild(pic);//добавляем  img  в li
// pic.style.width = '400px';
// pic.style.height = '200px';

// const cardData=[
//   { texts:'hff',
//     imgUrl: './a.gif',
//     imgAlt: 'за',
//     price: 30,
//     inStock: true,
//     isHit: true,
//     special:25
//   },
//   {
//   texts:'hhh',
//   imgUrl: './a.gif',
//   imgAlt: 'rd',
//   price: 45,
//   inStock: true,
//   isHit: false,
//   special:25
// }]
// let renderCard = function(good) {
//   const listItem = makeElement('li', 'product');
//   const title = makeElement('h2', 'description', good.texts);
//   listItem.appendChild(title);
//   const picture = makeElement('img', 'image');
//   picture.src=good.imgUrl;
//   picture.alt=good.imgAlt;
//   listItem.appendChild(picture);
//   const price = makeElement('p', 'price', good.price + ' P/кг');
//   listItem.appendChild(price);
//   let availabilityClass = 'available';
//   if(!good.inStock){
//     availabilityClass = 'unavailable'
//   }
//   listItem.classList.add(availabilityClass);
//   if(good.isHit){
//   listItem.classList.add('good-hit');
//   const special = makeElement('p', 'special', good.special +' P/кг');
//   listItem.appendChild(special);
//   }
//   return listItem;
// }
// const ul=document.querySelector('.products');
// for(let i=0; i<cardData.length;i++){
//   let z = renderCard(cardData[i])
//   ul.appendChild(z)
// }



// const ete = function getString() {
//   console.log('Привет');
//   return 2;
// }
// console.log(ete)
// console.log(ete())
// console.log(function getString() {
//   console.log('Привет');
//   return 2;
// }())

  // window.addEventListener('keydown', function(evt){
  //   if(evt.key==='c'){
  //     console.log('уууууу')
  //   }
  // })

  // window.addEventListener('keydown', function(evt){
  //   if(evt.code==='KeyZ'){
  //     console.log('раз-два-три')
  //   }
  // })

  // window.addEventListener('keydown', function(evt){
  //   if(evt.code==='NumpadDivide'){
  //     console.log('абв')
  //   }
  // })

  // window.addEventListener('keydown', function(evt){
  //   if(evt.code==='F1'){
  //     console.log('вовополррл')
  //   }
  // })

  // const items = document.querySelectorAll('li');
  // const array = Array.prototype.slice.call(items);
  // console.log(array);
  // const array2 = array.filter((element)=>{return element.dataset.food2})
  // console.log(array2[0].innerHTML);

  // const items = document.querySelectorAll('li');
  // console.log(items[0].dataset.food)//1541
  // console.log(typeof(items[0].dataset.food))//string

//   const dataAttrs = document.querySelectorAll('li');
//   console.log(dataAttrs);
//   let second = [];
  
//   let xxx = function(){
//     for (let i = 0; i < dataAttrs.length-1; i++) {
//     const dataAttr = Array.from(dataAttrs[i].attributes);
//     console.log(dataAttr[i]);
//      let y = dataAttr.filter(attr => attr.name.startsWith('data-'))
//     .reduce((xxx, attr) => {
//       xxx[attr.name] = attr.value;
//       return xxx;
//     }, {});
//     console.log(y);
//     second.push(y);
//   }
//   console.log(second);
  
// }
// xxx();

//   const dataAttrs = document.querySelectorAll('li');//коллекция 
//   console.log(dataAttrs);
//   let second = [];//пустой массив
  
//   let xxx = function(){
//     dataAttrs.forEach(element=>{//перебираем элементы коллекции
//     const dataAttr = Array.from(element.attributes);//создает массив из дата-атрибутов
//     console.log(dataAttr);
//      let y = dataAttr.filter(attr => attr.name.startsWith('data-'))//если имя атрибута начин с data
//     .reduce((xxx, attr) => {//объедини в новый объект xxx
//       xxx[attr.name] = attr.value;//attr.name:attr.value
//       return xxx;
//     }, {});
//     second.push(y);//добавь объект,полученный из элемента коллекции, в новый массив
//   })

// }
// xxx();
// console.log(second);
// console.log(second[1]['data-food2']); //получаем значение по ключу в массиве объектов. Так как в ключе "-", то скобочная нотация

//  const itemsZ = document.getElementById('elementId2');
//  itemsZ.dataset.ttt = "khfgkugkug";
//  itemsZ.dataset.ttt = "yuuu";//задать значение атрибуту
//  itemsZ.dataset.tttYlff = "yuuu";//задать значение атрибуту
// console.log(itemsZ.getAttribute('data-food2'));//получить значение атрибута

// let mass = ['a','s','d','f','g','h','j',,'j']

// for (let point of mass) {
//   if(typeof(point)=== 'string') {
//   console.log(point);
//   }
// }

// let jass = 'affggh gghgh lhh';

// for (let point of jass) {
//   console.log(point);
// }

// тултип
const displayTooltip = (e) => {
  const trigger = e.target;
  const tooltip = trigger.querySelector("[role=tooltip]");
  

  const { x, y, width, height } = trigger.getBoundingClientRect();
  tooltip.style.left = `${Math.floor(x + width / 2)}px`;
  tooltip.style.top = `${Math.floor(y + height)}px`;
  tooltip.classList.add("active");
};

const hideTooltip = (e) => {
  const tooltip = e.target.querySelector("[role=tooltip]");
  tooltip.classList.remove("active");
};

const tooltips = document.querySelectorAll("[data-tooltip]");
tooltips.forEach((trigger) => {
  let tooltip = document.createElement("div");

  tooltip.setAttribute("role", "tooltip");
  tooltip.setAttribute("inert", true);
  tooltip.textContent = trigger.dataset.tooltip;

  trigger.appendChild(tooltip);
  trigger.addEventListener("mouseenter", displayTooltip);
  trigger.addEventListener("mouseleave", hideTooltip);
});

// var a = document.getElementById('test1');

// a.addEventListener('input', function(){
//   document.getElementById('test2').innerHTML ='Здесь мы набираем:' + a.value
// })

// let a = document.getElementById('test1');

// a.addEventListener('change', function(){
//   document.getElementById('test2').innerHTML ='Здесь мы набираем:' + a.value
// })



// let textarea = document.getElementById('test3');
// let textareaButton = document.querySelector('.textarea-button');
// let charCounter = document.querySelector('.char-counter');
// textarea .addEventListener('input', function(){
//   charCounter.innerHTML =  textarea.value.length;
//   if(textarea.value.length>=300){
//     textareaButton.disabled = true;
//   } else {
//     textareaButton.disabled = false;
//   }
// })

//создание коммента
let commentForm = document.querySelector('.form');//тег form
let commentField = document.getElementById('test3');//textarea
let commentList = document.querySelector('.products');//ul, куда будут добавляться li-шки 
let charCounter = document.querySelector('.char-counter');//счетчик 
let textareaButton = document.querySelector('.textarea-button');//кнопка отправки формы

if(commentField.value.length == 0){
  textareaButton.disabled = true;
} else {
  textareaButton.disabled = false;
}
//счетчик событий submit/нажимаем кнопку отправки, если соответствует , то создается новый коммент
commentForm.addEventListener('submit', function(evt){
evt.preventDefault();// если убрать, то данные отправятся на сервер, а не будут в виде комментариев добавляться
let newComment =document.createElement('li');
newComment.classList.add('new-comment');
newComment.textContent = commentField.value;
commentField.value ='';
commentList.append(newComment);
charCounter.textContent=0;
const data = [...document.querySelectorAll(`input[name='someCheckbox']:checked`)]
console.log(data);
})

//счетчик событий input/счетчик кол-ва символов в поле/валидность
commentField.addEventListener('input', function(){
  charCounter.innerHTML =  commentField.value.length;
  if(commentField.value.length<5 || commentField.value.length>300){
    textareaButton.disabled = true;
  } else {
    textareaButton.disabled = false;
  }
})

// const age= [16,20,30,4,50]
// console.log(age.includes(20))//true

// const age= [16,20,30,4,50]
// console.log(age.some((value)=>value<2))


  // //это привязка к разметке, селектор всегда будет возвращать 1 поле ввода, даже при смене на 2 поле
  // const showInputValue1 = document.querySelector(`input[name='someCheckbox'][checked]`).value;
  // console.log(showInputValue1);
  // //используем псевдоклассы, чтобы было найдено поле выбранное в данный момент
  // const showInputValue2 = document.querySelector(`input[name='someCheckbox']:checked`).value;
  // console.log(showInputValue2);

  // не удалится элемент из dom; статичная коллекция
  // const collection1 = document.querySelectorAll('.product');
  // console.log(collection1);
  // console.log(collection1[0].remove());
  // console.log(collection1[0]);

  // //удалится элемент из dom; живая коллекция
  // const col = document.querySelector('.products');
  // const collection2 = col.children;
  // console.log(collection2[2].remove())
  // console.log(collection2[2]);

  // const docFragment = document.querySelector('#template').content;//нашли document-fragment
  // const text = docFragment.querySelector('.p-template');//нашли ту строку , которую надо заполнить
  // text.textContent = " Вместе весело шагать";// вставляем текст
  // const main = document.querySelector("main")//нашли место, куда вставляем
  // main.appendChild(docFragment)//вставляем


  const container = document.querySelector('.pool')
  const poolTemplate = document.querySelector('#pool-template').content;//нашли document-fragment
  const elementPool = poolTemplate.querySelector('.div-pool');//нашли ту строку, которую надо заполнить
  for(let i=0; i<=10; i++) {
    let z = elementPool.cloneNode(true);//клонируем elementpool со всеми внутренностями
    z.children[0].textContent= i;//в ребенка elementpool вставляем текст
    container.appendChild(z);// присоединяем в цикле клонированную форму
  }
  //слайдер
  const forward = document.querySelector('.forward')
  const back = document.querySelector('.back')
  forward.addEventListener('click', function(){
    container.append(container.children[0])//первый в конец(слайдер такой)
    container.children[0].style.backgroundColor = 'red';
    container.children[container.children.length-1].style.backgroundColor = 'white';
  })
  back.addEventListener('click', function(){
    container.prepend(container.children[container.children.length-1])//последний в начало
  })

  //слайдер посредством 
  const products = document.querySelector('.products');
  //живая коллекция
  // const liveProducts = products.children;
  // liveProducts[0].remove();//один удалили
  // console.log(liveProducts)//2
//неживая коллекция
  // const liveProducts = products.querySelectorAll('.product');
  // liveProducts[0].remove();//один удалили
  // console.log(liveProducts)//3 без изменений
  const pForward = document.querySelector('.p-forward')
  const pBack = document.querySelector('.p-back')
  pForward.addEventListener('click', function(){
    products.append(products.children[0])//первый в конец(слайдер такой)
  })
  pBack.addEventListener('click', function(){
    products.prepend(products.children[products.children.length-1])//последний в начало
  })

  products.addEventListener('click', (evt)=>{
    if(evt.target.nodeName === 'LI') {
      if(!evt.target.classList.contains('block')) {
        evt.target.classList.add('block');
      } else {
        evt.target.classList.remove('block');
    }
  }})

  //ресайз textarea
const textarea = document.querySelector('#test3');
textarea.addEventListener('keydown', resize);

function resize() {
  let el = this;
  setTimeout(function() {
    el.style.cssText = 'height:auto; padding:0';
    el.style.cssText = 'height:' + el.scrollHeight + 'px';
  }, 1);
}

// const x={
//   a:1,
//   b:2
// };
// console.dir(x)

const pools = document.querySelectorAll('.pools');
const nextPool = document.querySelector('.next-pool');
const backPool = document.querySelector('.back-pool');
let elements1 = pools[0].children;

// добавить все сразу
// nextPool.addEventListener('click', function(){
//   while(elements1.length) {
//     pools[1].append(elements1[0])
//   }})

// добавить по одной цифре
nextPool.addEventListener('click', function(){
  if (elements1.length) {
      pools[1].append(elements1[0])
       if (elements1.length && elements1[0] !== undefined) {
        nextPool.disabled = false;
        backPool.disabled = false;
      }
       else {
        nextPool.disabled = true;
      }
  }
})

//удалить все
let elements2 = pools[1].children;
backPool.addEventListener('click', function(){
  //1 способ
  // pools[1].remove();//удаляет все в том числе и родителя  из разметки
  //2 способ
  // while (elements2.length) {
    // pools[1].removeChild(elements2[0]);//работает 
    // elements2[0].parentNode.removeChild(elements2[0]);//работает
  // }
  //3 способ 
  for (let i = elements2.length-1; i>=0; i--){
    pools[1].removeChild(elements2[elements2.length-1]);
    // elements2[elements2.length-1].parentNode.removeChild(elements2[elements2.length-1])
  }
  console.log(elements1[0])
  }
)
console.log(elements2)
console.log(elements1)
// backPool.addEventListener('click', function(){
//   if (elements2[0] !== undefined) {
//   nextPool.disabled = false;
//   backPool.disabled = false;
//   pools[0].prepend(elements2[elements2.length-1])
// }
//   else {
//     backPool.disabled = true;
//   }
// })
let newHeader = document.createElement('h2');
newHeader.innerText = "Новый заголовок";
pools[0].insertBefore(newHeader,null);//вставит в контейнере ul в самом конце всех li, так как есть null 

pools[0].replaceChild(elements1[0],elements1[3])

let x = [1,2,3,4,5]
let y = x[2];
let v = x[0];
x[0] = y;
x[2] = v;
console.log(x)

if(pools[0].contains(elements1[3])) {
  elements1[3].style.color = "red";
}

// document.querySelector('#welcome').innerHTML = "так делать не круто"
// document.querySelector('#welcome').innerHTML = '<a href="#" >так делать не круто</a>'
// document.body.innerHTML=document.body.innerHTML+'<a href="#" >так делать не круто</a>'
// document.body.innerHTML=document.body.innerHTML+'<button type ="submit" class="button">начать игру</button>'
// document.querySelector('.button').style.margin = '50px'

// document.body.insertAdjacentHTML("afterbegin",'<button type ="submit" class="button">начать игру</button>')

// const cont = document.querySelector('#welcome');
// const fr = document.createDocumentFragment();
// for(let i=0; i<6; i++) {
//   const el = document.createElement('p');
//   el.textContent=i+1;
//   el.classList.add('hhh');
//   fr.appendChild(el)
// }
// cont.appendChild(fr)

// let cont = document.querySelector('#welcome');
// let template = document.querySelector('#template').content;
// let elem = template.querySelector('div');
// let fragment = document.createDocumentFragment();
// for (let i=0; i<6; i++) {
//   let z= elem.cloneNode(true);
//   z.textContent = i;
//   z.classList.add('myClass')
//   fragment.appendChild(z)
// }
// cont.appendChild(fragment)

let searchable =[
  'Elastic',
  'PHP',
  'Java',
  'JS',
  'Coding something',
  'About CSS',
  'How to coding',
  'Some other item',
  'C++',
  'Concat'
]
const searchInput = document.getElementById('search');
const searchWrapper = document.querySelector('.wrapper');
const resultsWrapper = document.querySelector('.results');


searchInput.addEventListener('keyup', (e)=>{
  let results=[];
  let inputs = searchInput.value;
  if(inputs.length) {
    results = searchable.filter((item)=>{return item.toLowerCase().includes(inputs.toLowerCase())}).slice(0,5);
  }
  renderResults(results)
})

function renderResults(results){
  if(!results.length) {
    return searchWrapper.classList.remove('show')
  }
  let content = results.map((item)=>{
    return `<li><a href=''>${item}</a></li>`
  }).join('');
  searchWrapper.classList.add('show');
  resultsWrapper.innerHTML = `<ul>${content}</ul>`;
}

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      searchField();
  }})

  document.addEventListener('click', (evt)=>{
    if (!searchWrapper.contains(evt.target)) {
      searchField();
      }
    });

  function searchField() {
    searchInput.value='';
    searchWrapper.classList.remove('show')
}



  const dayscount = document.getElementById('dayscount');
  const daysoutput = document.getElementById('daysoutput');
  const form = document.querySelector('.form');
  daysoutput.value=dayscount.value;
  form.addEventListener('input', ()=>{daysoutput.value=dayscount.value;
  })


  //
  // const elements = document.querySelectorAll('[name]')//находит все элем с атрибутом name
  // if(window.localStorage){
  //   for (let element of elements) {
  //     setPreSavedValue(element);
  //     element.addEventListener('keyup', saveValueToStorage)
  //   }
  // }

  // function saveValueToStorage({target: {value,name}}) {
  //   localStorage.setItem(name,value);
  // }

  // function setPreSavedValue(element) {
  //   const savedValue =  localStorage.getItem(element.name);
  //   if(savedValue){
  //     element.value=savedValue;
  //   }
  // }

  // if(window.localStorage){
  //   const elements = document.querySelectorAll('[name]')//находит все элем с атрибутом name
  //   for (let element of elements) {
  //     const savedValue =  localStorage.getItem(element.name);
  //   if(savedValue){
  //     element.value=savedValue;
  //   }
  //     element.addEventListener('keyup', ({target: {value,name}})=>{localStorage.setItem(name,value);})
  //   }}

   if(window.localStorage){
    const elements = document.querySelectorAll('textarea[name]')//находит все элем с атрибутом name
    for (let element of elements) {
      let name = element.getAttribute('name');
      element.value =localStorage.getItem(name);//получаем сохраненное в localStorage значение 
      element.addEventListener('keyup', ()=>{localStorage.setItem(name, element.value)})// сохраняем
    }
  }

  const modalCont = document.querySelector('.modal-container');
  const modal = document.querySelector('.modal-content');
  const closeBtn = document.querySelector('.modal-close-button');
  const btnClick = document.querySelector('.button-click');

  modalCont.addEventListener('click', (evt)=>{
    console.log(evt.target);
    if (!modal.contains(evt.target)) {
      closeModal();
      }
    });

  btnClick.addEventListener('click', (evt)=>{
    evt.preventDefault();//чтобы не было перехода по ссылке!, но далее добавлялись классы
    modalCont.classList.remove('modal-container-close');
    document.body.classList.add('no-scroll');
  })

  closeBtn.addEventListener('click', (evt)=>{
    evt.preventDefault();
    closeModal();
  })

  document.addEventListener('keydown', (evt)=>{
    if(evt.key === 'Escape') {
      closeModal();
    }
  });

  function closeModal(){
    modalCont.classList.add('modal-container-close'); 
    document.body.classList.remove('no-scroll');
  }


  // document.addEventListener('scroll', (evt)=>{
  //   console.log(evt.cancelable);
  //   evt.preventDefault()
  // })

  const para = document.querySelector('.para');
  const but = document.querySelector('.but');

  but.addEventListener('click', (evt)=>{
    console.log('обработчик контекстного меню');
    evt.preventDefault();
})
  para.addEventListener('mousedown', (evt)=>{
    if(evt.target.classList.contains('but')) {
      console.log('обработчик параграфа')}
  })

  const selectedCategoryContainer = document.querySelector('#selected-category')
  const fieldsetCatalog = document.querySelector('.ppppp')
  function onFilterChange(evt) {
    if(evt.target.matches('input[type="radio"]')) {
      selectedCategoryContainer.textContent =  evt.target.value;
      if (evt.target.closest('.discount-100')){
        selectedCategoryContainer.classList.add('special');
      } else {
        selectedCategoryContainer.classList.remove('special');
      }
    }
  }
  fieldsetCatalog.addEventListener('change', onFilterChange);

// window.addEventListener('load', ()=>{
//   console.log('Загрузка страницы')
// })

// para.dataset.rest = "xxx"


// const regexp = /Script/
// console.log(regexp.test('JavaScript'))

  // let lowerCaseTags;
  // const hasUniqueTags = ()=>{
  //   lowerCaseTags = ["A","a","C","b"].map((tag)=>{ return tag.toLowerCase()})
  //     return lowerCaseTags === new Set(lowerCaseTags);
  // }
  // console.log(hasUniqueTags())//Set(3) {'a', 'c', 'b'}


// let zz;
//   const temp = {};
//   const m = ["A","n","a","C","b"].map((point)=>{return point.toLowerCase()});
//   console.log(m)
//    zz = m.every((tag)=>{
//     if(temp[tag]) {
//       return false;
//     }
//     temp[tag] = true;
//     return true;
//   })
//   console.log(zz)//false, то есть во временном массиве есть повторяющееся свойство
//   console.log(temp)//a: true; n:true !! До первого повтора; на индексе 2 выходим из функции

  const VALID_SYMBOLS =/[abc]/;//допустимы только буквы а, б, с
  const tags = ["a", "b", "c","d"]
  const n = tags.every((tag) => VALID_SYMBOLS.test(tag));

  console.log(n);

  const sel= document.getElementById('sel');

  sel.addEventListener('input', ()=>{
    but.style.backgroundColor = sel.value;
  })

  const inpSize = document.querySelector('.size-letter');
  const paragraf = document.querySelector('.color');
  const pixels = document.querySelector('.pixels');

  inpSize.addEventListener('input', ()=>{
    pixels.textContent = inpSize.value;
    paragraf.style.fontSize = inpSize.value+'px';
    paragraf.style.lineHeight = inpSize.value+'px';
    pixels.style.fontSize = inpSize.value+'px';
  })

  const password = document.querySelector('.password');
  const showParol = document.querySelector('.svg1');
  const closeParol = document.querySelector('.svg2');
  showParol.addEventListener("click", ()=>{
    if(closeParol.classList.contains('hidden')) {
      closeParol.classList.remove('hidden');
      showParol.classList.add('hidden');
      password.type="text";
      
    } 
  })
  closeParol.addEventListener("click", ()=>{
    if(showParol.classList.contains('hidden')) {
      showParol.classList.remove('hidden');
      closeParol.classList.add('hidden');
      password.type="password";
    }
  })

  if(window.localStorage){
    const passElements = document.querySelectorAll('input[type]')//находит все элем с атрибутом type
    for (let element of passElements) {
      let name = element.getAttribute('name');
      element.value =localStorage.getItem(name);//получаем сохраненное в localStorage значение 
      element.addEventListener('keyup', ()=>{localStorage.setItem(name, element.value)})// сохраняем
    }
  }

