---
id: 56533eb9ac21ba0edf2244b1
title: Compound Assignment With Augmented Multiplication
challengeType: 1
videoUrl: ''
localeTitle: Asignación compuesta con multiplicación aumentada
---

## Description
<section id="description"> El operador <code>*=</code> multiplica una variable por un número. <code>myVar = myVar * 5;</code> multiplicará <code>myVar</code> por <code>5</code> . Esto se puede reescribir como: <code>myVar *= 5;</code> </section>

## Instructions
<section id="instructions"> Convierta las asignaciones para <code>a</code> , <code>b</code> y <code>c</code> para usar el operador <code>*=</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>a</code> debe ser igual a <code>25</code>
    testString: 'assert(a === 25, "<code>a</code> should equal <code>25</code>");'
  - text: <code>b</code> debe ser igual a <code>36</code>
    testString: 'assert(b === 36, "<code>b</code> should equal <code>36</code>");'
  - text: <code>c</code> debería ser igual a <code>46</code>
    testString: 'assert(c === 46, "<code>c</code> should equal <code>46</code>");'
  - text: Debes usar el operador <code>*=</code> para cada variable
    testString: 'assert(code.match(/\*=/g).length === 3, "You should use the <code>*=</code> operator for each variable");'
  - text: No modifique el código sobre la línea.
    testString: 'assert(/var a = 5;/.test(code) && /var b = 12;/.test(code) && /var c = 4\.6;/.test(code), "Do not modify the code above the line");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var a = 5;
var b = 12;
var c = 4.6;

// Only modify code below this line

a = a * 5;
b = 3 * b;
c = c * 10;

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
