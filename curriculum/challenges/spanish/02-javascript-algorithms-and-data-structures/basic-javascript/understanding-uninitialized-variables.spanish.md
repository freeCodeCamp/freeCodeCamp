---
id: 56533eb9ac21ba0edf2244aa
title: Understanding Uninitialized Variables
localeTitle: Entendiendo las variables sin inicializar
challengeType: 1
---

## Description
<section id='description'> 
Cuando se declaran las variables de JavaScript, tienen un valor inicial de <code>undefined</code> . Si realiza una operación matemática en una variable <code>undefined</code> , su resultado será <code>NaN</code> que significa <dfn>&quot;No es un número&quot;</dfn> . Si concatena una cadena con una variable <code>undefined</code> , obtendrá una <dfn>cadena</dfn> literal de <code>&quot;undefined&quot;</code> . 
</section>

## Instructions
<section id='instructions'> 
Inicialice las tres variables <code>a</code> , <code>b</code> y <code>c</code> con <code>5</code> , <code>10</code> y <code>&quot;I am a&quot;</code> respectivamente para que no queden <code>undefined</code> . 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>a</code> debe definirse y evaluarse para tener el valor de <code>6</code>
    testString: 'assert(typeof a === "number" && a === 6, "<code>a</code> should be defined and evaluated to have the value of <code>6</code>");'
  - text: <code>b</code> debe definirse y evaluarse para que tenga el valor de <code>15</code>
    testString: 'assert(typeof b === "number" && b === 15, "<code>b</code> should be defined and evaluated to have the value of <code>15</code>");'
  - text: <code>c</code> no debe contener <code>undefined</code> y debe tener el valor &quot;I am a String!&quot;
    testString: 'assert(!/undefined/.test(c) && c === "I am a String!", "<code>c</code> should not contain <code>undefined</code> and should have a value of "I am a String!"");'
  - text: No cambie el código debajo de la línea
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
var a = 5;
var b = 10;
var c = "I am a";
a = a + 1;
b = b + 5;
c = c + " String!";
```

</section>
