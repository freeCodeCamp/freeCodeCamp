---
title: ABC Problem
id: 594810f028c0303b75339acc
challengeType: 5
videoUrl: ''
localeTitle: Problema ABC
---

## Description
<section id="description"><p> Você recebe uma coleção de blocos ABC (por exemplo, blocos alfabéticos de infância). Existem 20 blocos com duas letras em cada bloco. Um alfabeto completo é garantido entre todos os lados dos blocos. A coleção de amostras de blocos: </p><p> (BO) </p><p> (XK) </p><p> (DQ) </p><p> (CP) </p><p> (N / D) </p><p> (GT) </p><p> (RÉ) </p><p> (TG) </p><p> (QD) </p><p> (FS) </p><p> (JW) </p><p> (HU) </p><p> (VI) </p><p> (A) </p><p> (OB) </p><p> (ER) </p><p> (FS) </p><p> (LY) </p><p> (PC) </p><p> (ZM) </p><p> Algumas regras para ter em mente: </p> Quando uma letra em um bloco é usada, esse bloco não pode ser usado novamente. A função deve ser insensível a maiúsculas e minúsculas. <p> Implemente uma função que use uma string (palavra) e determine se a palavra pode ser escrita com a coleção de blocos especificada. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>canMakeWord</code> é uma função.
    testString: 'assert(typeof canMakeWord === "function", "<code>canMakeWord</code> is a function.");'
  - text: <code>canMakeWord</code> deve retornar um booleano.
    testString: 'assert(typeof canMakeWord("hi") === "boolean", "<code>canMakeWord</code> should return a boolean.");'
  - text: <code>canMakeWord(&quot;bark&quot;)</code> deve retornar true.
    testString: 'assert(canMakeWord(words[0]), "<code>canMakeWord("bark")</code> should return true.");'
  - text: <code>canMakeWord(&quot;BooK&quot;)</code> deve retornar false.
    testString: 'assert(!canMakeWord(words[1]), "<code>canMakeWord("BooK")</code> should return false.");'
  - text: <code>canMakeWord(&quot;TReAT&quot;)</code> deve retornar true.
    testString: 'assert(canMakeWord(words[2]), "<code>canMakeWord("TReAT")</code> should return true.");'
  - text: <code>canMakeWord(&quot;COMMON&quot;)</code> deve retornar false.
    testString: 'assert(!canMakeWord(words[3]), "<code>canMakeWord("COMMON")</code> should return false.");'
  - text: <code>canMakeWord(&quot;squAD&quot;)</code> deve retornar true.
    testString: 'assert(canMakeWord(words[4]), "<code>canMakeWord("squAD")</code> should return true.");'
  - text: <code>canMakeWord(&quot;conFUSE&quot;)</code> deve retornar true.
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
