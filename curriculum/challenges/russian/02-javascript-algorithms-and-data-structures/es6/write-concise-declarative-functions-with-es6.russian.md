---
id: 587d7b8b367417b2b2512b50
title: Write Concise Declarative Functions with ES6
challengeType: 1
videoUrl: ''
localeTitle: Написание кратких декларативных функций с ES6
---

## Description
<section id="description"> При определении функций внутри объектов в ES5 мы должны использовать <code>function</code> ключевого слова следующим образом: <blockquote> const person = { <br> имя: «Тейлор», <br> sayHello: function () { <br> return `Hello! Меня зовут $ {this.name} .`; <br> } <br> }; </blockquote> С ES6 вы можете полностью удалить ключевое слово <code>function</code> и двоеточие при определении функций в объектах. Вот пример этого синтаксиса: <blockquote> const person = { <br> имя: «Тейлор», <br> скажи привет() { <br> return `Hello! Меня зовут $ {this.name} .`; <br> } <br> }; </blockquote></section>

## Instructions
<section id="instructions"> <code>setGear</code> функцию <code>setGear</code> внутри <code>bicycle</code> объекта, чтобы использовать сокращенный синтаксис, описанный выше. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Традиционное выражение функции не использовалось.
    testString: 'assert(!getUserInput("index").match(/function/),"Traditional <code>function</code> expression was not used.");'
  - text: <code>setGear</code> - это декларативная функция.
    testString: 'assert(typeof bicycle.setGear === "function" && getUserInput("index").match(/setGear\s*\(.+\)\s*\{/), "<code>setGear</code> is a declarative function.");'
  - text: <code>bicycle.setGear(48)</code> изменяет значение <code>gear</code> на 48.
    testString: 'assert((new bicycle.setGear(48)).gear === 48, "<code>bicycle.setGear(48)</code> changes the <code>gear</code> value to 48.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// change code below this line
const bicycle = {
  gear: 2,
  setGear: function(newGear) {
    "use strict";
    this.gear = newGear;
  }
};
// change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
