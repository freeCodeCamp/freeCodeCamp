---
id: 56533eb9ac21ba0edf2244af
title: Compound Assignment With Augmented Addition
challengeType: 1
videoUrl: ''
localeTitle: Asignación compuesta con adición aumentada
---

## Description
<section id="description"> En programación, es común usar asignaciones para modificar el contenido de una variable. Recuerde que todo a la derecha del signo igual se evalúa primero, por lo que podemos decir: <code>myVar = myVar + 5;</code> para agregar <code>5</code> a <code>myVar</code> . Dado que este es un patrón tan común, hay operadores que realizan tanto una operación matemática como una asignación en un solo paso. Uno de tales operadores es el operador <code>+=</code> . <blockquote> var myVar = 1; <br> myVar + = 5; <br> console.log (myVar); // Devoluciones 6 </blockquote></section>

## Instructions
<section id="instructions"> Convierta las asignaciones para <code>a</code> , <code>b</code> y <code>c</code> para usar el operador <code>+=</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>a</code> debe ser igual a <code>15</code>
    testString: 'assert(a === 15, "<code>a</code> should equal <code>15</code>");'
  - text: <code>b</code> debe ser igual a <code>26</code>
    testString: 'assert(b === 26, "<code>b</code> should equal <code>26</code>");'
  - text: <code>c</code> debería ser igual a <code>19</code>
    testString: 'assert(c === 19, "<code>c</code> should equal <code>19</code>");'
  - text: Debes usar el operador <code>+=</code> para cada variable
    testString: 'assert(code.match(/\+=/g).length === 3, "You should use the <code>+=</code> operator for each variable");'
  - text: No modifique el código sobre la línea.
    testString: 'assert(/var a = 3;/.test(code) && /var b = 17;/.test(code) && /var c = 12;/.test(code), "Do not modify the code above the line");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var a = 3;
var b = 17;
var c = 12;

// Only modify code below this line

a = a + 12;
b = 9 + b;
c = c + 7;

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
