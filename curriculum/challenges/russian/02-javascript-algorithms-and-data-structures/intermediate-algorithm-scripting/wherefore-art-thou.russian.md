---
id: a8e512fbe388ac2f9198f0fa
title: Wherefore art thou
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: 'Итак, ты'
---

## Description
<section id="description"> Создайте функцию, которая просматривает массив объектов (первый аргумент) и возвращает массив всех объектов, имеющих соответствующие пары имени и значения (второй аргумент). Каждая пара имен и значений исходного объекта должна присутствовать в объекте из коллекции, если она должна быть включена в возвращаемый массив. Например, если первым аргументом является <code>[{ first: &quot;Romeo&quot;, last: &quot;Montague&quot; }, { first: &quot;Mercutio&quot;, last: null }, { first: &quot;Tybalt&quot;, last: &quot;Capulet&quot; }]</code> , и второй аргумент <code>{ last: &quot;Capulet&quot; }</code> , то вы должны вернуть третий объект из массива (первый аргумент), потому что он содержит имя и его значение, которое было передано как второй аргумент. Не забудьте использовать <a href="http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514" target="_blank">Read-Search-Ask,</a> если вы застряли. Напишите свой собственный код. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>whatIsInAName([{ first: &quot;Romeo&quot;, last: &quot;Montague&quot; }, { first: &quot;Mercutio&quot;, last: null }, { first: &quot;Tybalt&quot;, last: &quot;Capulet&quot; }], { last: &quot;Capulet&quot; })</code> должен возвращать <code>[{ first: &quot;Tybalt&quot;, last: &quot;Capulet&quot; }]</code> .'
    testString: 'assert.deepEqual(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }), [{ first: "Tybalt", last: "Capulet" }], "<code>whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })</code> should return <code>[{ first: "Tybalt", last: "Capulet" }]</code>.");'
  - text: '<code>whatIsInAName([{ &quot;apple&quot;: 1 }, { &quot;apple&quot;: 1 }, { &quot;apple&quot;: 1, &quot;bat&quot;: 2 }], { &quot;apple&quot;: 1 })</code> должен возвращать <code>[{ &quot;apple&quot;: 1 }, { &quot;apple&quot;: 1 }, { &quot;apple&quot;: 1, &quot;bat&quot;: 2 }]</code> .'
    testString: 'assert.deepEqual(whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }), [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], "<code>whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 })</code> should return <code>[{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }]</code>.");'
  - text: '<code>whatIsInAName([{ &quot;apple&quot;: 1, &quot;bat&quot;: 2 }, { &quot;bat&quot;: 2 }, { &quot;apple&quot;: 1, &quot;bat&quot;: 2, &quot;cookie&quot;: 2 }], { &quot;apple&quot;: 1, &quot;bat&quot;: 2 })</code> должен возвращать <code>[{ &quot;apple&quot;: 1, &quot;bat&quot;: 2 }, { &quot;apple&quot;: 1, &quot;bat&quot;: 2, &quot;cookie&quot;: 2 }]</code> .'
    testString: 'assert.deepEqual(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }), [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], "<code>whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })</code> should return <code>[{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]</code>.");'
  - text: '<code>whatIsInAName([{ &quot;apple&quot;: 1, &quot;bat&quot;: 2 }, { &quot;apple&quot;: 1 }, { &quot;apple&quot;: 1, &quot;bat&quot;: 2, &quot;cookie&quot;: 2 }], { &quot;apple&quot;: 1, &quot;cookie&quot;: 2 })</code> должен возвратить <code>[{ &quot;apple&quot;: 1, &quot;bat&quot;: 2, &quot;cookie&quot;: 2 }]</code> .'
    testString: 'assert.deepEqual(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }), [{ "apple": 1, "bat": 2, "cookie": 2 }], "<code>whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 })</code> should return <code>[{ "apple": 1, "bat": 2, "cookie": 2 }]</code>.");'
  - text: '<code>whatIsInAName([{ &quot;apple&quot;: 1, &quot;bat&quot;: 2 }, { &quot;apple&quot;: 1 }, { &quot;apple&quot;: 1, &quot;bat&quot;: 2, &quot;cookie&quot;: 2 }, { &quot;bat&quot;:2 }], { &quot;apple&quot;: 1, &quot;bat&quot;: 2 })</code> должен вернуть <code>[{ &quot;apple&quot;: 1, &quot;bat&quot;: 2 }, { &quot;apple&quot;: 1, &quot;bat&quot;: 2, &quot;cookie&quot;:2 }]</code> .'
    testString: 'assert.deepEqual(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, {"bat":2}], { "apple": 1, "bat": 2 }), [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }], "<code>whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 })</code> should return <code>[{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }]</code>.");'
  - text: '<code>whatIsInAName([{&quot;a&quot;: 1, &quot;b&quot;: 2, &quot;c&quot;: 3}], {&quot;a&quot;: 1, &quot;b&quot;: 9999, &quot;c&quot;: 3})</code> должен возвращать <code>[]</code>'
    testString: 'assert.deepEqual(whatIsInAName([{ "a": 1, "b": 2, "c": 3 }], { "a": 1, "b": 9999, "c": 3 }), [], "<code>whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3})</code> should return <code>[]</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line


  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
