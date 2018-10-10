---
title: ABC Problem
id: 594810f028c0303b75339acc
challengeType: 5
videoUrl: ''
localeTitle: Problema abc
---

## Description
<section id="description"><p> Se le entrega una colección de bloques ABC (por ejemplo, bloques del alfabeto infantil). Hay 20 bloques con dos letras en cada bloque. Un alfabeto completo está garantizado entre todos los lados de los bloques. La colección de muestras de bloques: </p><p> (BO) </p><p> (XK) </p><p> (DQ) </p><p> (CP) </p><p> (N / A) </p><p> (GT) </p><p> (RE) </p><p> (TG) </p><p> (QD) </p><p> (FS) </p><p> (JW) </p><p> (HU) </p><p> (VI) </p><p> (UN) </p><p> (TRANSMISIÓN EXTERIOR) </p><p> (ER) </p><p> (FS) </p><p> (LY) </p><p> (ORDENADOR PERSONAL) </p><p> (ZM) </p><p> Algunas reglas a tener en cuenta: </p> Una vez que se usa una letra en un bloque, ese bloque no se puede usar de nuevo. La función debe ser insensible a mayúsculas y minúsculas. <p> Implementar una función que toma una cadena (palabra) y determina si la palabra se puede deletrear con la colección de bloques dada. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>canMakeWord</code> es una función.
    testString: 'assert(typeof canMakeWord === "function", "<code>canMakeWord</code> is a function.");'
  - text: <code>canMakeWord</code> debería devolver un booleano.
    testString: 'assert(typeof canMakeWord("hi") === "boolean", "<code>canMakeWord</code> should return a boolean.");'
  - text: <code>canMakeWord(&quot;bark&quot;)</code> debe devolver verdadero.
    testString: 'assert(canMakeWord(words[0]), "<code>canMakeWord("bark")</code> should return true.");'
  - text: <code>canMakeWord(&quot;BooK&quot;)</code> debe devolver falso.
    testString: 'assert(!canMakeWord(words[1]), "<code>canMakeWord("BooK")</code> should return false.");'
  - text: <code>canMakeWord(&quot;TReAT&quot;)</code> debe devolver verdadero.
    testString: 'assert(canMakeWord(words[2]), "<code>canMakeWord("TReAT")</code> should return true.");'
  - text: <code>canMakeWord(&quot;COMMON&quot;)</code> debe devolver falso.
    testString: 'assert(!canMakeWord(words[3]), "<code>canMakeWord("COMMON")</code> should return false.");'
  - text: <code>canMakeWord(&quot;squAD&quot;)</code> debe devolver true.
    testString: 'assert(canMakeWord(words[4]), "<code>canMakeWord("squAD")</code> should return true.");'
  - text: <code>canMakeWord(&quot;conFUSE&quot;)</code> debe devolver verdadero.
    testString: 'assert(canMakeWord(words[5]), "<code>canMakeWord("conFUSE")</code> should return true.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function canMakeWord (word) {
  // Good luck!
}

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
