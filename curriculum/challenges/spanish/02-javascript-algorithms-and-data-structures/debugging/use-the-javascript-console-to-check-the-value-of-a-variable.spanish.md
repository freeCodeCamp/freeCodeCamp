---
id: 587d7b83367417b2b2512b33
title: Use the JavaScript Console to Check the Value of a Variable
localeTitle: Use la consola de JavaScript para verificar el valor de una variable
challengeType: 1
---

## Description
<section id='description'> 
Tanto Chrome como Firefox tienen excelentes consolas de JavaScript, también conocidas como DevTools, para depurar su JavaScript. 
Puede encontrar Herramientas de desarrollador en el menú de Chrome o la Consola web en el menú de FireFox. Si está utilizando un navegador diferente o un teléfono móvil, le recomendamos que cambie a la computadora de escritorio Firefox o Chrome. 
El método <code>console.log()</code> , que &quot;imprime&quot; la salida de lo que está entre sus paréntesis en la consola, probablemente sea la herramienta de depuración más útil. Colocarlo en puntos estratégicos en su código puede mostrarle los valores intermedios de las variables. Es una buena práctica tener una idea de lo que debería ser la salida antes de ver qué es. Tener puntos de control para ver el estado de sus cálculos a lo largo de su código ayudará a reducir dónde está el problema. 
Aquí hay un ejemplo para imprimir &#39;¡Hola mundo!&#39; a la consola: 
<code>console.log(&#39;Hello world!&#39;);</code> 
</section>

## Instructions
<section id='instructions'> 
Use el método <code>console.log()</code> para imprimir el valor de la variable <code>a</code> donde se indica en el código. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su código debe usar <code>console.log()</code> para verificar el valor de la variable <code>a</code> .
    testString: 'assert(code.match(/console\.log\(a\)/g), "Your code should use <code>console.log()</code> to check the value of the variable <code>a</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let a = 5;
let b = 1;
a++;
// Add your code below this line


let sumAB = a + b;
console.log(sumAB);
```

</div>



</section>

## Solution
<section id='solution'>


```js
var a = 5; console.log(a);
```

</section>
