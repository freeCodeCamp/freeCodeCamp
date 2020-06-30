---
id: aaa48de84e1ecc7c742e1124
title: Palindrome Checker
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: Comprobador de palíndromo
---

## Description
<section id="description"> Devuelve <code>true</code> si la cadena dada es un palíndromo. De lo contrario, devuelve <code>false</code> . Un <dfn>palíndromo</dfn> es una palabra u oración que se escribe de la misma manera tanto hacia adelante como hacia atrás, ignorando la puntuación, el caso y el espaciado. <strong>Nota</strong> <br> Deberá eliminar <strong>todos los caracteres no alfanuméricos</strong> (puntuación, espacios y símbolos) y convertir todo en el mismo caso (mayúsculas o minúsculas) para comprobar si hay palíndromos. Pasaremos cadenas con distintos formatos, como <code>&quot;racecar&quot;</code> , <code>&quot;RaceCar&quot;</code> y <code>&quot;race CAR&quot;</code> entre otros. También pasaremos cadenas con símbolos especiales, como <code>&quot;2A3*3a2&quot;</code> , <code>&quot;2A3 3a2&quot;</code> y <code>&quot;2_A3*3#A2&quot;</code> . Recuerda usar <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> si te atascas. Escribe tu propio código. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>palindrome(&quot;eye&quot;)</code> debe devolver un valor booleano.
    testString: 'assert(typeof palindrome("eye") === "boolean", "<code>palindrome("eye")</code> should return a boolean.");'
  - text: <code>palindrome(&quot;eye&quot;)</code> debe devolver verdadero.
    testString: 'assert(palindrome("eye") === true, "<code>palindrome("eye")</code> should return true.");'
  - text: <code>palindrome(&quot;_eye&quot;)</code> debe devolver verdadero.
    testString: 'assert(palindrome("_eye") === true, "<code>palindrome("_eye")</code> should return true.");'
  - text: <code>palindrome(&quot;race car&quot;)</code> debe devolver verdadero.
    testString: 'assert(palindrome("race car") === true, "<code>palindrome("race car")</code> should return true.");'
  - text: <code>palindrome(&quot;not a palindrome&quot;)</code> debe devolver falso.
    testString: 'assert(palindrome("not a palindrome") === false, "<code>palindrome("not a palindrome")</code> should return false.");'
  - text: '<code>palindrome(&quot;A man, a plan, a canal. Panama&quot;)</code> debería devolver la verdad.'
    testString: 'assert(palindrome("A man, a plan, a canal. Panama") === true, "<code>palindrome("A man, a plan, a canal. Panama")</code> should return true.");'
  - text: <code>palindrome(&quot;never odd or even&quot;)</code> debe devolver verdadero.
    testString: 'assert(palindrome("never odd or even") === true, "<code>palindrome("never odd or even")</code> should return true.");'
  - text: <code>palindrome(&quot;nope&quot;)</code> debe devolver falso.
    testString: 'assert(palindrome("nope") === false, "<code>palindrome("nope")</code> should return false.");'
  - text: <code>palindrome(&quot;almostomla&quot;)</code> debe devolver falso.
    testString: 'assert(palindrome("almostomla") === false, "<code>palindrome("almostomla")</code> should return false.");'
  - text: '<code>palindrome(&quot;My age is 0, 0 si ega ym.&quot;)</code> debe devolver verdadero.'
    testString: 'assert(palindrome("My age is 0, 0 si ega ym.") === true, "<code>palindrome("My age is 0, 0 si ega ym.")</code> should return true.");'
  - text: <code>palindrome(&quot;1 eye for of 1 eye.&quot;)</code> debe devolver falso.
    testString: 'assert(palindrome("1 eye for of 1 eye.") === false, "<code>palindrome("1 eye for of 1 eye.")</code> should return false.");'
  - text: '<code>palindrome(&quot;0_0 (: /-\ :) 0-0&quot;)</code> debe devolver verdadero.'
    testString: 'assert(palindrome("0_0 (: /-\ :) 0-0") === true, "<code>palindrome("0_0 (: /-\ :) 0-0")</code> should return true.");'
  - text: <code>palindrome(&quot;five|\_/|four&quot;)</code> debe devolver falso.
    testString: 'assert(palindrome("five|\_/|four") === false, "<code>palindrome("five|\_/|four")</code> should return false.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function palindrome(str) {
  // Good luck!
  return true;
}



palindrome("eye");

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
