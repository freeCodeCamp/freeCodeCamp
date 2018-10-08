---
id: 587d7b8e367417b2b2512b5f
title: Pass Arguments to Avoid External Dependence in a Function
localeTitle: Pasar argumentos para evitar la dependencia externa en una función
challengeType: 1
---

## Description
<section id='description'> 
El último desafío fue un paso más cerca de los principios de programación funcional, pero todavía falta algo. 
No alteramos el valor de la variable global, pero el <code>incrementer</code> la función no funcionaría sin que la variable global <code>fixedValue</code> estuviera allí. 
Otro principio de la programación funcional es siempre declarar explícitamente sus dependencias. Esto significa que si una función depende de que una variable u objeto esté presente, entonces pase esa variable u objeto directamente a la función como un argumento. 
Hay varias buenas consecuencias de este principio. La función es más fácil de probar, usted sabe exactamente qué entrada toma, y ​​no dependerá de nada más en su programa. 
Esto le puede dar más confianza cuando modifica, elimina o agrega un nuevo código. Sabría lo que puede o no puede cambiar y puede ver dónde están las posibles trampas. 
Finalmente, la función siempre produciría la misma salida para el mismo conjunto de entradas, sin importar qué parte del código la ejecute. 
</section>

## Instructions
<section id='instructions'> 
Actualicemos la función <code>incrementer</code> para declarar claramente sus dependencias. 
Escriba la función <code>incrementer</code> para que tome un argumento y luego aumente el valor en uno. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su <code>incrementer</code> funciones no debe cambiar el valor de <code>fixedValue</code> .
    testString: 'assert(fixedValue === 4, "Your function <code>incrementer</code> should not change the value of <code>fixedValue</code>.");'
  - text: Su función <code>incrementer</code> debe tomar un parámetro.
    testString: 'assert(code.match(/function\s+?incrementer\s*?\(.+?\)/g), "Your <code>incrementer</code> function should take a parameter.");'
  - text: Su función <code>incrementer</code> debe devolver un valor que sea mayor que el valor de valor <code>fixedValue</code> .
    testString: 'assert(newValue === 5, "Your <code>incrementer</code> function should return a value that is one larger than the <code>fixedValue</code> value.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// the global variable
var fixedValue = 4;

// Add your code below this line
function incrementer () {


  // Add your code above this line
}

var newValue = incrementer(fixedValue); // Should equal 5
console.log(fixedValue); // Should print 4
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
