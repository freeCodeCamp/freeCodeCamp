---
id: 587d7b83367417b2b2512b37
title: Understanding the Differences between the freeCodeCamp and Browser Console
localeTitle: Comprender las diferencias entre freeCodeCamp y Browser Console
challengeType: 1
---

## Description
<section id='description'> 
Es posible que haya notado que algunos desafíos de JavaScript de freeCodeCamp incluyen su propia consola. Esta consola se comporta de forma un poco diferente a la consola del navegador que usó en el último desafío. 
El siguiente desafío pretende resaltar algunas de las diferencias entre la consola freeCodeCamp y la consola del navegador. 
Primero, la consola del navegador. Cuando cargue y ejecute un archivo JavaScript normal en su navegador, las declaraciones de <code>console.log()</code> imprimirán exactamente lo que usted les dice que impriman en la consola del navegador la cantidad exacta de veces que solicitó. En su editor de texto en el navegador, el proceso es ligeramente diferente y puede ser confuso al principio. 
valores pasados ​​a <code>console.log()</code> en el bloque del editor de texto ejecutan cada conjunto de pruebas, así como una vez más para cualquier llamada de función que tenga en su código. 
Esto se presta a un comportamiento interesante y puede hacer que se tropiece con usted al principio, porque un valor registrado que espera ver solo una vez puede imprimirse muchas más, dependiendo de la cantidad de pruebas y los valores que se pasan a esas pruebas. 
Si desea ver solo su salida única y no tiene que preocuparse por ejecutar los ciclos de prueba, puede usar <code>console.clear()</code> . 
</section>

## Instructions
<section id='instructions'> 
Use <code>console.log()</code> para imprimir las variables en el código donde se indica. 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Use <code>console.log()</code> para imprimir la variable <code>outputTwo</code> . En la consola del navegador, esto debería imprimir el valor de la variable dos veces.
    testString: 'assert(code.match(/console\.log\(outputTwo\)/g), "Use <code>console.log()</code> to print the <code>outputTwo</code> variable.  In your Browser Console this should print out the value of the variable two times.");'
  - text: Utilice <code>console.log()</code> para imprimir la variable <code>outputOne</code> .
    testString: 'assert(code.match(/console\.log\(outputOne\)/g), "Use <code>console.log()</code> to print the <code>outputOne</code> variable.");'
  - text: Use <code>console.clear()</code> para modificar su salida de modo que la variable <code>outputOne</code> solo <code>outputOne</code> una vez.
    testString: 'assert(code.match(/^(\s*console.clear\(\);?\s*)$/gm), "Use <code>console.clear()</code> to modify your output so that <code>outputOne</code> variable only outputs once.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Open your browser console
let outputTwo = "This will print to the browser console 2 times";
// Use console.log() to print the outputTwo variable


let outputOne = "Try to get this to log only once to the browser console";
// Use console.clear() in the next line to print the outputOne only once


// Use console.log() to print the outputOne variable


```

</div>



</section>

## Solution
<section id='solution'>


```js
let outputTwo = "This will print to the browser console 2 times"; console.log(outputTwo); let outputOne = "Try to get this to log only once to the browser console";
console.clear();
console.log(outputOne);
```

</section>
