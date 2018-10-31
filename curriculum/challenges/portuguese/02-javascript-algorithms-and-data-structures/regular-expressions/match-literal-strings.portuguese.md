---
id: 587d7db3367417b2b2512b8f
title: Match Literal Strings
challengeType: 1
videoUrl: ''
localeTitle: Combinar cordas literais
---

## Description
<section id="description"> No último desafio, você pesquisou a palavra <code>&quot;Hello&quot;</code> usando a expressão regular <code>/Hello/</code> . Essa regex procurou por uma correspondência literal da string <code>&quot;Hello&quot;</code> . Aqui está outro exemplo em busca de uma correspondência literal da string <code>&quot;Kevin&quot;</code> : <blockquote> deixe testStr = &quot;Olá, meu nome é Kevin.&quot;; <br> deixe testRegex = / Kevin /; <br> testRegex.test (testStr); <br> // Retorna true </blockquote> Qualquer outra forma de <code>&quot;Kevin&quot;</code> não será igual. Por exemplo, o regex <code>/Kevin/</code> não coincidirá com <code>&quot;kevin&quot;</code> ou <code>&quot;KEVIN&quot;</code> . <blockquote> vamos wrongRegex = / kevin /; <br> wrongRegex.test (testStr); <br> // Retorna falso </blockquote> Um desafio futuro mostrará como combinar esses outros formulários também. </section>

## Instructions
<section id="instructions"> Complete o regex <code>waldoRegex</code> para encontrar <code>&quot;Waldo&quot;</code> na string <code>waldoIsHiding</code> com uma correspondência literal. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu regex <code>waldoRegex</code> deve encontrar <code>&quot;Waldo&quot;</code>
    testString: 'assert(waldoRegex.test(waldoIsHiding), "Your regex <code>waldoRegex</code> should find <code>"Waldo"</code>");'
  - text: Seu regex <code>waldoRegex</code> não deve procurar por mais nada.
    testString: 'assert(!waldoRegex.test("Somewhere is hiding in this text."), "Your regex <code>waldoRegex</code> should not search for anything else.");'
  - text: Você deve executar uma correspondência literal de string com sua regex.
    testString: 'assert(!/\/.*\/i/.test(code), "You should perform a literal string match with your regex.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /search/; // Change this line
let result = waldoRegex.test(waldoIsHiding);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
