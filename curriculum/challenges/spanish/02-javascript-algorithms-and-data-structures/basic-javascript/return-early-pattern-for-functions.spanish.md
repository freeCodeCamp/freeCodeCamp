---
id: 56533eb9ac21ba0edf2244c4
title: Return Early Pattern for Functions
localeTitle: Volver el patrón inicial para funciones
challengeType: 1
---

## Description
<section id='description'>
Cuando se alcanza una declaración de <code>return</code> , la ejecución de la función actual se detiene y el control vuelve a la ubicación de la llamada.
<strong>Ejemplo</strong>
<blockquote>function myFun() {<br>&nbsp;&nbsp;console.log("Hello");<br>&nbsp;&nbsp;return "World";<br>&nbsp;&nbsp;console.log("byebye")<br>}<br>myFun();</blockquote>
Lo anterior muestra &quot;Hola&quot; a la consola, devuelve &quot;Mundo&quot;, pero <code>&quot;byebye&quot;</code> nunca se <code>&quot;byebye&quot;</code> , porque la función sale de la instrucción de <code>return</code> .
</section>

## Instructions
<section id='instructions'>
Modifique la función <code>abTest</code> para que si <code>a</code> o <code>b</code> sean menores que <code>0</code> la función saldrá inmediatamente con un valor <code>undefined</code> .
<strong>Pista</strong> <br> Recuerde que <a href='http://www.freecodecamp.org/challenges/understanding-uninitialized-variables' target='_blank'><code>undefined</code> es una palabra clave</a> , no una cadena.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: ' <code>abTest(2,2)</code> debe devolver un número'
    testString: 'assert(typeof abTest(2,2) === "number" , "<code>abTest(2,2)</code> should return a number");'
  - text: ' <code>abTest(2,2)</code> debe devolver <code>8</code> '
    testString: 'assert(abTest(2,2) === 8 , "<code>abTest(2,2)</code> should return <code>8</code>");'
  - text: ' <code>abTest(-2,2)</code> debe devolver <code>undefined</code> '
    testString: 'assert(abTest(-2,2) === undefined , "<code>abTest(-2,2)</code> should return <code>undefined</code>");'
  - text: ' <code>abTest(2,-2)</code> debe devolver <code>undefined</code> '
    testString: 'assert(abTest(2,-2) === undefined , "<code>abTest(2,-2)</code> should return <code>undefined</code>");'
  - text: ' <code>abTest(2,8)</code> debe devolver <code>18</code> '
    testString: 'assert(abTest(2,8) === 18 , "<code>abTest(2,8)</code> should return <code>18</code>");'
  - text: ' <code>abTest(3,3)</code> debe devolver <code>12</code> '
    testString: 'assert(abTest(3,3) === 12 , "<code>abTest(3,3)</code> should return <code>12</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
function abTest(a, b) {
  // Only change code below this line



  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

// Change values below to test your code
abTest(2,2);
```

</div>



</section>

## Solution
<section id='solution'>


```js
function abTest(a, b) {
  if(a < 0 || b < 0) {
    return undefined;
  }
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
```

</section>
