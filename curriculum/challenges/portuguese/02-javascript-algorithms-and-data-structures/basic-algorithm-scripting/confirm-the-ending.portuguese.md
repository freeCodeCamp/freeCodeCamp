---
id: acda2fb1324d9b0fa741e6b5
title: Confirm the Ending
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: Confirme o final
---

## Description
<section id="description"> Verifique se uma string (primeiro argumento, <code>str</code> ) termina com a string alvo (segundo argumento, <code>target</code> ). Esse desafio <em>pode</em> ser resolvido com o método <code>.endsWith()</code> , que foi introduzido no ES2015. Mas, para o propósito deste desafio, gostaríamos que você usasse um dos métodos de substring do JavaScript. Lembre-se de usar <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> se você ficar preso. Escreva seu próprio código. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>confirmEnding(&quot;Bastian&quot;, &quot;n&quot;)</code> deve retornar true.'
    testString: 'assert(confirmEnding("Bastian", "n") === true, "<code>confirmEnding("Bastian", "n")</code> should return true.");'
  - text: '<code>confirmEnding(&quot;Congratulation&quot;, &quot;on&quot;)</code> deve retornar true.'
    testString: 'assert(confirmEnding("Congratulation", "on") === true, "<code>confirmEnding("Congratulation", "on")</code> should return true.");'
  - text: '<code>confirmEnding(&quot;Connor&quot;, &quot;n&quot;)</code> deve retornar false.'
    testString: 'assert(confirmEnding("Connor", "n") === false, "<code>confirmEnding("Connor", "n")</code> should return false.");'
  - text: '<code>confirmEnding(&quot;Walking on water and developing software from a specification are easy if both are frozen&quot;, &quot;specification&quot;)</code> deve retornar falso.'
    testString: 'assert(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") === false, "<code>confirmEnding("Walking on water and developing software from a specification are easy if both are frozen"&#44; "specification"&#41;</code> should return false.");'
  - text: '<code>confirmEnding(&quot;He has to give me a new name&quot;, &quot;name&quot;)</code> deve retornar true.'
    testString: 'assert(confirmEnding("He has to give me a new name", "name") === true, "<code>confirmEnding("He has to give me a new name", "name")</code> should return true.");'
  - text: '<code>confirmEnding(&quot;Open sesame&quot;, &quot;same&quot;)</code> deve retornar true.'
    testString: 'assert(confirmEnding("Open sesame", "same") === true, "<code>confirmEnding("Open sesame", "same")</code> should return true.");'
  - text: '<code>confirmEnding(&quot;Open sesame&quot;, &quot;pen&quot;)</code> deve retornar false.'
    testString: 'assert(confirmEnding("Open sesame", "pen") === false, "<code>confirmEnding("Open sesame", "pen")</code> should return false.");'
  - text: '<code>confirmEnding(&quot;Open sesame&quot;, &quot;game&quot;)</code> deve retornar false.'
    testString: 'assert(confirmEnding("Open sesame", "game") === false, "<code>confirmEnding("Open sesame", "game")</code> should return false.");'
  - text: '<code>confirmEnding(&quot;If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing&quot;, &quot;mountain&quot;)</code> deve retornar falso.'
    testString: 'assert(confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain") === false, "<code>confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain")</code> should return false.");'
  - text: '<code>confirmEnding(&quot;Abstraction&quot;, &quot;action&quot;)</code> deve retornar true.'
    testString: 'assert(confirmEnding("Abstraction", "action") === true, "<code>confirmEnding("Abstraction", "action")</code> should return true.");'
  - text: Não use o método <code>.endsWith()</code> para resolver o desafio.
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

## Solution
<section id='solution'>

```js
// solution required
```
</section>
