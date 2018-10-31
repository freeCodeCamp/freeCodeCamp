---
id: 56533eb9ac21ba0edf2244a8
title: Storing Values with the Assignment Operator
challengeType: 1
videoUrl: ''
localeTitle: Сохранение значений с помощью оператора присваивания
---

## Description
<section id="description"> В JavaScript вы можете сохранить значение в переменной с оператором <dfn>присваивания</dfn> . <code>myVariable = 5;</code> Это присваивает значение <code>Number</code> <code>5</code> <code>myVariable</code> . Назначение всегда идет справа налево. Все, что находится справа от оператора <code>=</code> разрешается до того, как значение присваивается переменной слева от оператора. <blockquote> myVar = 5; <br> myNum = myVar; </blockquote> Это присваивает <code>5</code> <code>myVar</code> а затем снова разрешает <code>myVar</code> на <code>5</code> и присваивает его <code>myNum</code> . </section>

## Instructions
<section id="instructions"> Назначьте значение <code>7</code> переменной <code>a</code> . Назначают содержимое переменной <code>a</code> <code>b</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Не меняйте код над строкой
    testString: 'assert(/var a;/.test(code) && /var b = 2;/.test(code), "Do not change code above the line");'
  - text: <code>a</code> должно иметь значение 7
    testString: 'assert(typeof a === "number" && a === 7, "<code>a</code> should have a value of 7");'
  - text: <code>b</code> должно иметь значение 7
    testString: 'assert(typeof b === "number" && b === 7, "<code>b</code> should have a value of 7");'
  - text: <code>a</code> должен быть назначен <code>b</code> с <code>=</code>
    testString: 'assert(/b\s*=\s*a\s*;/g.test(code), "<code>a</code> should be assigned to <code>b</code> with <code>=</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
var a;
var b = 2;

// Only change code below this line

```

</div>

### Before Test
<div id='js-setup'>

```js
if (typeof a != 'undefined') {
  a = undefined;
}
if (typeof b != 'undefined') {
  b = undefined;
}

```

</div>

### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
