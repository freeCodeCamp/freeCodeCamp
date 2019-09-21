---
id: 587d7b8c367417b2b2512b54
title: Use getters and setters to Control Access to an Object
challengeType: 1
forumTopicId: 301220
localeTitle: Использовать геттеры и сеттеры для контроля доступа к объекту
---

## Description
<section id='description'>
Вы можете получить значения от объекта и установить значение свойства внутри объекта. Они классически называются <dfn>геттерами</dfn> и <dfn>сеттерами</dfn> . Функции Getter предназначены для простого возврата (получения) значения частной переменной объекта пользователю без прямого доступа пользователя к частной переменной. Функции Setter предназначены для изменения (установки) значения частной переменной объекта на основе значения, переданного в функцию setter. Это изменение может включать вычисления или даже полностью перезаписать предыдущее значение. <blockquote> учебник { <br> конструктор (автор) { <br> this._author = author; <br> } <br> // getter <br> get writer () { <br> return this._author; <br> } <br> // setter <br> set writer (updatedAuthor) { <br> this._author = updatedAuthor; <br> } <br> } <br> const lol = new Book (&#39;anonymous&#39;); <br> console.log (lol.writer); // анонимный <br> lol.writer = &#39;wut&#39;; <br> console.log (lol.writer); // wut </blockquote> Обратите внимание на синтаксис, который мы используем, чтобы вызвать getter и setter - как будто они не являются даже функциями. Геттеры и сеттеры важны, потому что они скрывают внутренние детали реализации.
</section>

## Instructions
<section id='instructions'>
Используйте ключевое слово <code>class</code> для создания класса термостата. Конструктор принимает температуру Фаренгейта. Теперь создайте <code>getter</code> и <code>setter</code> в классе, чтобы получить температуру в масштабе Цельсия. Помните, что <code>C = 5/9 * (F - 32)</code> и <code>F = C * 9.0 / 5 + 32</code> , где F - значение температуры в шкале Фаренгейта, а C - значение той же температуры в шкале Цельсия. Примечание. Когда вы выполните это, вы будете отслеживать температуру внутри класса в одном масштабе - либо по Фаренгейту, либо по Цельсию. Это сила геттера или сеттера - вы создаете API для другого пользователя, который получит правильный результат, независимо от того, какой из них вы отслеживаете. Другими словами, вы абстрагируете детали реализации от потребителя.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Thermostat</code> should be a <code>class</code> with a defined <code>constructor</code> method.
    testString: assert(typeof Thermostat === 'function' && typeof Thermostat.constructor === 'function');
  - text: <code>class</code> keyword should be used.
    testString: assert(code.match(/class/g));
  - text: <code>Thermostat</code> should be able to be instantiated.
    testString: assert((() => {const t = new Thermostat(32);return typeof t === 'object' && t.temperature === 0;})());

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
/* Alter code below this line */

/* Alter code above this line */

const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C

```

</div>

</section>

## Solution
<section id='solution'>

```js
/* Alter code below this line */
class Thermostat {
  constructor(fahrenheit) {
    this._tempInCelsius = 5/9 * (fahrenheit - 32);
  }
  get temperature(){
    return this._tempInCelsius;
  }
  set temperature(newTemp){
    this._tempInCelsius = newTemp;
  }
}
/* Alter code above this line */

const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
```

</section>
