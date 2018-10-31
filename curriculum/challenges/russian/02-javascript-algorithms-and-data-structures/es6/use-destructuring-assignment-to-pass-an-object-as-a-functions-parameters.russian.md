---
id: 587d7b8a367417b2b2512b4d
title: Use Destructuring Assignment to Pass an Object as a Function's Parameters
challengeType: 1
videoUrl: ''
localeTitle: Назначение Destructuring для передачи объекта в качестве параметра функции
---

## Description
<section id="description"> В некоторых случаях вы можете разрушить объект в самом аргументе функции. Рассмотрим следующий код: <blockquote> const profileUpdate = (profileData) =&gt; { <br> const {name, age, nationality, location} = profileData; <br> // делаем что-то с этими переменными <br> } </blockquote> Это эффективно разрушает объект, отправленный в функцию. Это также можно сделать на месте: <blockquote> const profileUpdate = ({имя, возраст, национальность, местоположение}) =&gt; { <br> / * что-то делать с этими полями * / <br> } </blockquote> Это устраняет некоторые дополнительные строки и делает наш код удобным. Это имеет дополнительное преимущество: не нужно манипулировать целым объектом в функции; только нужные поля копируются внутри функции. </section>

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert(typeof stats === "object", "<code>stats</code> should be an <code>object</code>.");'
  - text: ''
    testString: 'assert(half(stats) === 28.015, "<code>half(stats)</code> should be <code>28.015</code>");'
  - text: ''
    testString: 'getUserInput => assert(getUserInput("index").match(/\(\s*\{\s*\w+\s*,\s*\w+\s*\}\s*\)/g), "Destructuring was used.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = (function() {
  "use strict"; // do not change this line

  // change code below this line
  return function half(stats) {
    // use function argument destructuring
    return (stats.max + stats.min) / 2.0;
  };
  // change code above this line

})();
console.log(stats); // should be object
console.log(half(stats)); // should be 28.015

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
