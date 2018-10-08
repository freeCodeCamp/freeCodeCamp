---
id: 56533eb9ac21ba0edf2244b0
title: Compound Assignment With Augmented Subtraction
localeTitle: Asignación compuesta con resta aumentada
challengeType: 1
---

## Description
<section id='description'> 
Al igual que el operador <code>+=</code> , <code>-=</code> resta un número de una variable. 
<code>myVar = myVar - 5;</code> 
restará <code>5</code> de <code>myVar</code> . Esto se puede reescribir como: 
<code>myVar -= 5;</code> 
</section>

## Instructions
<section id='instructions'> 
Convierta las asignaciones para <code>a</code> , <code>b</code> y <code>c</code> para usar el operador <code>-=</code> . 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>a</code> debe ser igual a <code>5</code>
    testString: 'assert(a === 5, "<code>a</code> should equal <code>5</code>");'
  - text: <code>b</code> debería ser igual a <code>-6</code>
    testString: 'assert(b === -6, "<code>b</code> should equal <code>-6</code>");'
  - text: <code>c</code> debería ser igual a <code>2</code>
    testString: 'assert(c === 2, "<code>c</code> should equal <code>2</code>");'
  - text: Debe usar el operador <code>-=</code> para cada variable
    testString: 'assert(code.match(/-=/g).length === 3, "You should use the <code>-=</code> operator for each variable");'
  - text: No modifique el código sobre la línea.
    testString: 'assert(/var a = 11;/.test(code) && /var b = 9;/.test(code) && /var c = 3;/.test(code), "Do not modify the code above the line");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var a = 11;
var b = 9;
var c = 3;

// Only modify code below this line

a = a - 6;
b = b - 15;
c = c - 1;


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
var a = 11;
var b = 9;
var c = 3;

a -= 6;
b -= 15;
c -= 1;


```

</section>
