---
id: 56533eb9ac21ba0edf2244aa
title: Understanding Uninitialized Variables
challengeType: 1
videoUrl: ''
localeTitle: Понимание неинициализированных переменных
---

## Description
<section id="description"> Когда объявляются переменные JavaScript, они имеют начальное значение <code>undefined</code> . Если вы выполняете математическую операцию с <code>undefined</code> переменной, ваш результат будет <code>NaN</code> что означает <dfn>«Not a Number»</dfn> . Если вы конкатенируете строку с <code>undefined</code> переменной, вы получите буквенную <dfn>строку</dfn> <code>&quot;undefined&quot;</code> . </section>

## Instructions
<section id="instructions"> Инициализируйте три переменные <code>a</code> , <code>b</code> и <code>c</code> с <code>5</code> , <code>10</code> и <code>&quot;I am a&quot;</code> соответственно, чтобы они не были <code>undefined</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>a</code> следует определить и оценить, чтобы иметь значение <code>6</code>'
    testString: 'assert(typeof a === "number" && a === 6, "<code>a</code> should be defined and evaluated to have the value of <code>6</code>");'
  - text: '<code>b</code> следует определить и оценить, чтобы иметь значение <code>15</code>'
    testString: 'assert(typeof b === "number" && b === 15, "<code>b</code> should be defined and evaluated to have the value of <code>15</code>");'
  - text: <code>c</code> не должен содержать <code>undefined</code> и должен иметь значение «Я - String!».
    testString: 'assert(!/undefined/.test(c) && c === "I am a String!", "<code>c</code> should not contain <code>undefined</code> and should have a value of "I am a String!"");'
  - text: Не меняйте код под строкой
    testString: 'assert(/a = a \+ 1;/.test(code) && /b = b \+ 5;/.test(code) && /c = c \+ " String!";/.test(code), "Do not change code below the line");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Initialize these three variables
var a;
var b;
var c;

// Do not change code below this line

a = a + 1;
b = b + 5;
c = c + " String!";

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
