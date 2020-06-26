---
id: aa7697ea2477d1316795783b
title: Pig Latin
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: Jerga
---

## Description
<section id="description"> Traducir la cadena proporcionada a cerdo latino. <a href="http://en.wikipedia.org/wiki/Pig_Latin" target="_blank">Pig Latin</a> toma la primera consonante (o grupo de consonantes) de una palabra en inglés, la mueve al final de la palabra y los sufijos &quot;ay&quot;. Si una palabra comienza con una vocal, simplemente agrega &quot;camino&quot; al final. Las cadenas de entrada están garantizadas para ser palabras en inglés en minúsculas. Recuerda usar <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> si te atascas. Trate de emparejar el programa. Escribe tu propio código. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>translatePigLatin(&quot;california&quot;)</code> debe devolver &quot;aliforniacay&quot;.
    testString: 'assert.deepEqual(translatePigLatin("california"), "aliforniacay", "<code>translatePigLatin("california")</code> should return "aliforniacay".");'
  - text: <code>translatePigLatin(&quot;paragraphs&quot;)</code> debe devolver &quot;aragraphspay&quot;.
    testString: 'assert.deepEqual(translatePigLatin("paragraphs"), "aragraphspay", "<code>translatePigLatin("paragraphs")</code> should return "aragraphspay".");'
  - text: <code>translatePigLatin(&quot;glove&quot;)</code> debe devolver &quot;overglay&quot;.
    testString: 'assert.deepEqual(translatePigLatin("glove"), "oveglay", "<code>translatePigLatin("glove")</code> should return "oveglay".");'
  - text: <code>translatePigLatin(&quot;algorithm&quot;)</code> debe devolver &quot;algorithmway&quot;.
    testString: 'assert.deepEqual(translatePigLatin("algorithm"), "algorithmway", "<code>translatePigLatin("algorithm")</code> should return "algorithmway".");'
  - text: <code>translatePigLatin(&quot;eight&quot;)</code> debe devolver &quot;eightway&quot;.
    testString: 'assert.deepEqual(translatePigLatin("eight"), "eightway", "<code>translatePigLatin("eight")</code> should return "eightway".");'
  - text: Debe manejar las palabras donde la primera vocal viene al final de la palabra.
    testString: 'assert.deepEqual(translatePigLatin("schwartz"), "artzschway", "Should handle words where the first vowel comes in the end of the word.");'
  - text: Debe manejar palabras sin vocales.
    testString: 'assert.deepEqual(translatePigLatin("rhythm"), "rhythmay", "Should handle words without vowels.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function translatePigLatin(str) {
  return str;
}

translatePigLatin("consonant");

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
