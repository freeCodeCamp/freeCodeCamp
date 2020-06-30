---
id: aa7697ea2477d1316795783b
title: Pig Latin
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: Porco Latino
---

## Description
<section id="description"> Traduza a string fornecida para pig latin. <a href="http://en.wikipedia.org/wiki/Pig_Latin" target="_blank">Pig Latin</a> pega a primeira consoante (ou consoante cluster) de uma palavra inglesa, move-a para o final da palavra e sufixa um &quot;ay&quot;. Se uma palavra começa com uma vogal, você apenas adiciona &quot;caminho&quot; ao final. As strings de entrada são garantidas como palavras inglesas em todas as letras minúsculas. Lembre-se de usar <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> se você ficar preso. Tente emparelhar o programa. Escreva seu próprio código. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>translatePigLatin(&quot;california&quot;)</code> deve retornar &quot;aliforniacay&quot;.
    testString: 'assert.deepEqual(translatePigLatin("california"), "aliforniacay", "<code>translatePigLatin("california")</code> should return "aliforniacay".");'
  - text: <code>translatePigLatin(&quot;paragraphs&quot;)</code> deve retornar &quot;aragraphspay&quot;.
    testString: 'assert.deepEqual(translatePigLatin("paragraphs"), "aragraphspay", "<code>translatePigLatin("paragraphs")</code> should return "aragraphspay".");'
  - text: <code>translatePigLatin(&quot;glove&quot;)</code> deve retornar &quot;oveglay&quot;.
    testString: 'assert.deepEqual(translatePigLatin("glove"), "oveglay", "<code>translatePigLatin("glove")</code> should return "oveglay".");'
  - text: <code>translatePigLatin(&quot;algorithm&quot;)</code> deve retornar &quot;algorithmway&quot;.
    testString: 'assert.deepEqual(translatePigLatin("algorithm"), "algorithmway", "<code>translatePigLatin("algorithm")</code> should return "algorithmway".");'
  - text: <code>translatePigLatin(&quot;eight&quot;)</code> deve retornar &quot;eightway&quot;.
    testString: 'assert.deepEqual(translatePigLatin("eight"), "eightway", "<code>translatePigLatin("eight")</code> should return "eightway".");'
  - text: Deve lidar com palavras em que a primeira vogal aparece no final da palavra.
    testString: 'assert.deepEqual(translatePigLatin("schwartz"), "artzschway", "Should handle words where the first vowel comes in the end of the word.");'
  - text: Deve lidar com palavras sem vogais.
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
