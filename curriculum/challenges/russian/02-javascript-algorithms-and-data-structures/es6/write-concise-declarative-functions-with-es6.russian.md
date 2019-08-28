---
id: 587d7b8b367417b2b2512b50
title: Write Concise Declarative Functions with ES6
challengeType: 1
forumTopicId: 301224
localeTitle: Написание кратких декларативных функций с ES6
---

## Description
<section id='description'>
При определении функций внутри объектов в ES5 мы должны использовать <code>function</code> ключевого слова следующим образом: <blockquote> const person = { <br> имя: «Тейлор», <br> sayHello: function () { <br> return `Hello! Меня зовут $ {this.name} .`; <br> } <br> }; </blockquote> С ES6 вы можете полностью удалить ключевое слово <code>function</code> и двоеточие при определении функций в объектах. Вот пример этого синтаксиса: <blockquote> const person = { <br> имя: «Тейлор», <br> скажи привет() { <br> return `Hello! Меня зовут $ {this.name} .`; <br> } <br> }; </blockquote>
</section>

## Instructions
<section id='instructions'>
<code>setGear</code> функцию <code>setGear</code> внутри <code>bicycle</code> объекта, чтобы использовать сокращенный синтаксис, описанный выше.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Traditional function expression should not be used.
    testString: getUserInput => assert(!removeJSComments(code).match(/function/));
  - text: <code>setGear</code> should be a declarative function.
    testString: assert(typeof bicycle.setGear === 'function' && code.match(/setGear\s*\(.+\)\s*\{/));
  - text: <code>bicycle.setGear(48)</code> should change the <code>gear</code> value to 48.
    testString: assert((new bicycle.setGear(48)).gear === 48);

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
    this.gear = newGear;
  }
};
// change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);

```

</div>

### After Tests
<div id='js-teardown'>

```js
const removeJSComments = str => str.replace(/\/\*[\s\S]*?\*\/|\/\/.*$/gm, '');

```

</div>

</section>

## Solution
<section id='solution'>

```js
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};
bicycle.setGear(3);
```

</section>
