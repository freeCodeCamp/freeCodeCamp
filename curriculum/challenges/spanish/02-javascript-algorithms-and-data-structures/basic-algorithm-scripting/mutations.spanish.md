---
id: af2170cad53daa0770fabdea
title: Mutations
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: Mutaciones
---

## Description
<section id="description"> Devuelva verdadero si la cadena en el primer elemento de la matriz contiene todas las letras de la cadena en el segundo elemento de la matriz. Por ejemplo, <code>[&quot;hello&quot;, &quot;Hello&quot;]</code> , debería devolver verdadero porque todas las letras en la segunda cadena están presentes en la primera, sin distinción de mayúsculas y minúsculas. Los argumentos <code>[&quot;hello&quot;, &quot;hey&quot;]</code> deben devolver falso porque la cadena &quot;hola&quot; no contiene una &quot;y&quot;. Por último, <code>[&quot;Alien&quot;, &quot;line&quot;]</code> , debe devolver verdadero porque todas las letras en &quot;line&quot; están presentes en &quot;Alien&quot;. Recuerda usar <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> si te atascas. Escribe tu propio código. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>mutation([&quot;hello&quot;, &quot;hey&quot;])</code> debe devolver falso.'
    testString: 'assert(mutation(["hello", "hey"]) === false, "<code>mutation(["hello", "hey"])</code> should return false.");'
  - text: '<code>mutation([&quot;hello&quot;, &quot;Hello&quot;])</code> debe devolver verdadero.'
    testString: 'assert(mutation(["hello", "Hello"]) === true, "<code>mutation(["hello", "Hello"])</code> should return true.");'
  - text: '<code>mutation([&quot;zyxwvutsrqponmlkjihgfedcba&quot;, &quot;qrstu&quot;])</code> debe devolver verdadero.'
    testString: 'assert(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) === true, "<code>mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])</code> should return true.");'
  - text: '<code>mutation([&quot;Mary&quot;, &quot;Army&quot;])</code> debe devolver la verdad.'
    testString: 'assert(mutation(["Mary", "Army"]) === true, "<code>mutation(["Mary", "Army"])</code> should return true.");'
  - text: '<code>mutation([&quot;Mary&quot;, &quot;Aarmy&quot;])</code> debe devolver la verdad.'
    testString: 'assert(mutation(["Mary", "Aarmy"]) === true, "<code>mutation(["Mary", "Aarmy"])</code> should return true.");'
  - text: '<code>mutation([&quot;Alien&quot;, &quot;line&quot;])</code> debe devolver true.'
    testString: 'assert(mutation(["Alien", "line"]) === true, "<code>mutation(["Alien", "line"])</code> should return true.");'
  - text: '<code>mutation([&quot;floor&quot;, &quot;for&quot;])</code> debe devolver verdadero.'
    testString: 'assert(mutation(["floor", "for"]) === true, "<code>mutation(["floor", "for"])</code> should return true.");'
  - text: '<code>mutation([&quot;hello&quot;, &quot;neo&quot;])</code> debe devolver falso.'
    testString: 'assert(mutation(["hello", "neo"]) === false, "<code>mutation(["hello", "neo"])</code> should return false.");'
  - text: '<code>mutation([&quot;voodoo&quot;, &quot;no&quot;])</code> debe devolver falso.'
    testString: 'assert(mutation(["voodoo", "no"]) === false, "<code>mutation(["voodoo", "no"])</code> should return false.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function mutation(arr) {
  return arr;
}

mutation(["hello", "hey"]);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
