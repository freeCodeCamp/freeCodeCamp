---
id: aaa48de84e1ecc7c742e1124
title: Palindrome Checker
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: Verificador de palíndromo
---

## Description
<section id="description"> Retorna <code>true</code> se a string especificada for um palíndromo. Caso contrário, retorne <code>false</code> . Um <dfn>palíndromo</dfn> é uma palavra ou frase que é grafada da mesma maneira tanto para frente quanto para trás, ignorando pontuação, caixa e espaçamento. <strong>Nota</strong> <br> Você precisará remover <strong>todos os caracteres não alfanuméricos</strong> (pontuação, espaços e símbolos) e transformar tudo no mesmo caso (maiúsculas ou minúsculas) para verificar se há palíndromos. Nós vamos passar seqüências de caracteres com formatos variados, como <code>&quot;racecar&quot;</code> , <code>&quot;RaceCar&quot;</code> e <code>&quot;race CAR&quot;</code> entre outros. Também passaremos strings com símbolos especiais, como <code>&quot;2A3*3a2&quot;</code> , <code>&quot;2A3 3a2&quot;</code> e <code>&quot;2_A3*3#A2&quot;</code> . Lembre-se de usar <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> se você ficar preso. Escreva seu próprio código. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>palindrome(&quot;eye&quot;)</code> deve retornar um booleano.
    testString: 'assert(typeof palindrome("eye") === "boolean", "<code>palindrome("eye")</code> should return a boolean.");'
  - text: <code>palindrome(&quot;eye&quot;)</code> deve retornar verdadeiro.
    testString: 'assert(palindrome("eye") === true, "<code>palindrome("eye")</code> should return true.");'
  - text: <code>palindrome(&quot;_eye&quot;)</code> deve retornar true.
    testString: 'assert(palindrome("_eye") === true, "<code>palindrome("_eye")</code> should return true.");'
  - text: <code>palindrome(&quot;race car&quot;)</code> deve retornar true.
    testString: 'assert(palindrome("race car") === true, "<code>palindrome("race car")</code> should return true.");'
  - text: <code>palindrome(&quot;not a palindrome&quot;)</code> deve retornar falso.
    testString: 'assert(palindrome("not a palindrome") === false, "<code>palindrome("not a palindrome")</code> should return false.");'
  - text: '<code>palindrome(&quot;A man, a plan, a canal. Panama&quot;)</code> deve retornar verdadeiro.'
    testString: 'assert(palindrome("A man, a plan, a canal. Panama") === true, "<code>palindrome("A man, a plan, a canal. Panama")</code> should return true.");'
  - text: <code>palindrome(&quot;never odd or even&quot;)</code> deve retornar true.
    testString: 'assert(palindrome("never odd or even") === true, "<code>palindrome("never odd or even")</code> should return true.");'
  - text: <code>palindrome(&quot;nope&quot;)</code> deve retornar false.
    testString: 'assert(palindrome("nope") === false, "<code>palindrome("nope")</code> should return false.");'
  - text: <code>palindrome(&quot;almostomla&quot;)</code> deve retornar false.
    testString: 'assert(palindrome("almostomla") === false, "<code>palindrome("almostomla")</code> should return false.");'
  - text: '<code>palindrome(&quot;My age is 0, 0 si ega ym.&quot;)</code> deve retornar verdadeiro.'
    testString: 'assert(palindrome("My age is 0, 0 si ega ym.") === true, "<code>palindrome("My age is 0, 0 si ega ym.")</code> should return true.");'
  - text: <code>palindrome(&quot;1 eye for of 1 eye.&quot;)</code> deve retornar falso.
    testString: 'assert(palindrome("1 eye for of 1 eye.") === false, "<code>palindrome("1 eye for of 1 eye.")</code> should return false.");'
  - text: '<code>palindrome(&quot;0_0 (: /-\ :) 0-0&quot;)</code> deve retornar true.'
    testString: 'assert(palindrome("0_0 (: /-\ :) 0-0") === true, "<code>palindrome("0_0 (: /-\ :) 0-0")</code> should return true.");'
  - text: <code>palindrome(&quot;five|\_/|four&quot;)</code> deve retornar false.
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
