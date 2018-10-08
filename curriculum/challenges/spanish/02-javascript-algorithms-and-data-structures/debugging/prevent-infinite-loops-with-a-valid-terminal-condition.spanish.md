---
id: 587d7b86367417b2b2512b3d
title: Prevent Infinite Loops with a Valid Terminal Condition
localeTitle: Prevenga los bucles infinitos con una condición de terminal válida
challengeType: 1
---

## Description
<section id='description'> 
El tema final es el bucle infinito temido. Los bucles son excelentes herramientas cuando necesita que su programa ejecute un bloque de código un cierto número de veces o hasta que se cumpla una condición, pero necesitan una condición de terminal que termine el bucle. Es probable que los bucles infinitos congelen o bloqueen el navegador, y causen un caos general en la ejecución del programa, que nadie quiere. 
No fue un ejemplo de un bucle infinito en la introducción a esta sección - que no tenía condición terminal para salir de la <code>while</code> bucle interior <code>loopy()</code> . ¡NO llames a esta función! 
<blockquote>function loopy() {<br>&nbsp;&nbsp;while(true) {<br>&nbsp;&nbsp;&nbsp;&nbsp;console.log("Hello, world!");<br>&nbsp;&nbsp;}<br>}</blockquote> 
El trabajo del programador es asegurarse de que finalmente se alcance la condición del terminal, que le indica al programa cuándo salir del código de bucle. Un error es aumentar o disminuir una variable de contador en la dirección incorrecta de la condición del terminal. Otro es restablecer accidentalmente un contador o variable de índice dentro del código de bucle, en lugar de incrementarlo o disminuirlo. 
</section>

## Instructions
<section id='instructions'> 
El <code>myFunc()</code> función contiene un bucle infinito debido a que la condición terminal <code>i != 4</code> Nunca será evaluada como <code>false</code> (y romper el bucle) - <code>i</code> aumentará en 2 de cada pasada, y saltar a la derecha durante 4 desde <code>i</code> es impar para empezar. Corrija el operador de comparación en la condición de terminal para que el bucle solo se ejecute para <code>i</code> menor o igual a 4. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su código debe cambiar el operador de comparación en la condición del terminal (la parte media) del bucle <code>for</code> .
    testString: 'assert(code.match(/i\s*?<=\s*?4;/g).length == 1, "Your code should change the comparison operator in the terminal condition (the middle part) of the <code>for</code> loop.");'
  - text: Su código debe arreglar el operador de comparación en la condición terminal del bucle.
    testString: 'assert(!code.match(/i\s*?!=\s*?4;/g), "Your code should fix the comparison operator in the terminal condition of the loop.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function myFunc() {
  for (let i = 1; i != 4; i += 2) {
    console.log("Still going!");
  }
}
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
