---
id: acda2fb1324d9b0fa741e6b5
title: Confirm the Ending
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: Confirmar la terminación
---

## Descripción
<section id="description"> Compruebe si una cadena (primer argumento, <code>str</code> ) termina con la cadena de destino dada (segundo argumento, <code>target</code> ). Este desafío <em>se</em> se puede resolver con el método <code>.endsWith()</code> , que se introdujo en ES2015. Pero para el propósito de este desafío, nos gustaría que utilices uno de los métodos de subcadena de JavaScript. Recuerda usar la técnica de <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Leer-Buscar-Preguntar</a> si te atascas. Escribe tu propio código. </section>

## Instrucciones
<section id="instructions">
</section>

## Pruebas
<section id='tests'>

```yml
tests:
  - text: '<code>confirmEnding(&quot;Bastian&quot;, &quot;n&quot;)</code> debe devolver verdadero.'
    testString: 'assert(confirmEnding("Bastian", "n") === true, "<code>confirmEnding("Bastian", "n")</code> should return true.");'
  - text: '<code>confirmEnding(&quot;Congratulation&quot;, &quot;on&quot;)</code> debe devolver verdadero.'
    testString: 'assert(confirmEnding("Congratulation", "on") === true, "<code>confirmEnding("Congratulation", "on")</code> should return true.");'
  - text: '<code>confirmEnding(&quot;Connor&quot;, &quot;n&quot;)</code> debe devolver falso.'
    testString: 'assert(confirmEnding("Connor", "n") === false, "<code>confirmEnding("Connor", "n")</code> should return false.");'
  - text: '<code>confirmEnding(&quot;Walking on water and developing software from a specification are easy if both are frozen&quot;, &quot;specification&quot;)</code> debe devolver falso.'
    testString: 'assert(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") === false, "<code>confirmEnding("Walking on water and developing software from a specification are easy if both are frozen"&#44; "specification"&#41;</code> should return false.");'
  - text: '<code>confirmEnding(&quot;He has to give me a new name&quot;, &quot;name&quot;)</code> debe devolver verdadero.'
    testString: 'assert(confirmEnding("He has to give me a new name", "name") === true, "<code>confirmEnding("He has to give me a new name", "name")</code> should return true.");'
  - text: '<code>confirmEnding(&quot;Open sesame&quot;, &quot;same&quot;)</code> debe devolver true.'
    testString: 'assert(confirmEnding("Open sesame", "same") === true, "<code>confirmEnding("Open sesame", "same")</code> should return true.");'
  - text: '<code>confirmEnding(&quot;Open sesame&quot;, &quot;pen&quot;)</code> debe devolver falso.'
    testString: 'assert(confirmEnding("Open sesame", "pen") === false, "<code>confirmEnding("Open sesame", "pen")</code> should return false.");'
  - text: '<code>confirmEnding(&quot;Open sesame&quot;, &quot;game&quot;)</code> debe devolver falso.'
    testString: 'assert(confirmEnding("Open sesame", "game") === false, "<code>confirmEnding("Open sesame", "game")</code> should return false.");'
  - text: '<code>confirmEnding(&quot;If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing&quot;, &quot;mountain&quot;)</code> debería devolver el valor falso.'
    testString: 'assert(confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain") === false, "<code>confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain")</code> should return false.");'
  - text: '<code>confirmEnding(&quot;Abstraction&quot;, &quot;action&quot;)</code> debe devolver verdadero.'
    testString: 'assert(confirmEnding("Abstraction", "action") === true, "<code>confirmEnding("Abstraction", "action")</code> should return true.");'
  - text: No use el método <code>.endsWith()</code> para resolver el desafío.
    testString: 'assert(!(/\.endsWith\(.*?\)\s*?;?/.test(code)) && !(/\["endsWith"\]/.test(code)), "Do not use the built-in method <code>.endsWith()</code> to solve the challenge.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  return str;
}

confirmEnding("Bastian", "n");

```

</div>



</section>

## Solución
<section id='solution'>

```js
// solution required
```
</section>
