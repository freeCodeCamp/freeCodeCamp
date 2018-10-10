---
id: 56533eb9ac21ba0edf2244aa
title: Understanding Uninitialized Variables
challengeType: 1
videoUrl: ''
localeTitle: Noções básicas sobre variáveis ​​não inicializadas
---

## Description
<section id="description"> Quando variáveis ​​JavaScript são declaradas, elas possuem um valor inicial de <code>undefined</code> . Se você fizer uma operação matemática em uma variável <code>undefined</code> , seu resultado será <code>NaN</code> que significa <dfn>&quot;Não é um número&quot;</dfn> . Se você concatenar uma string com uma variável <code>undefined</code> , você receberá uma <dfn>string</dfn> literal de <code>&quot;undefined&quot;</code> . </section>

## Instructions
<section id="instructions"> Inicialize as três variáveis <code>a</code> , <code>b</code> e <code>c</code> com <code>5</code> , <code>10</code> e <code>&quot;I am a&quot;</code> respectivamente, para que elas não sejam <code>undefined</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>a</code> deve ser definido e avaliado para ter o valor de <code>6</code>
    testString: 'assert(typeof a === "number" && a === 6, "<code>a</code> should be defined and evaluated to have the value of <code>6</code>");'
  - text: <code>b</code> deve ser definido e avaliado para ter o valor de <code>15</code>
    testString: 'assert(typeof b === "number" && b === 15, "<code>b</code> should be defined and evaluated to have the value of <code>15</code>");'
  - text: <code>c</code> não deve conter <code>undefined</code> e deve ter um valor de &quot;I am a String!&quot;
    testString: 'assert(!/undefined/.test(c) && c === "I am a String!", "<code>c</code> should not contain <code>undefined</code> and should have a value of "I am a String!"");'
  - text: Não altere o código abaixo da linha
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
