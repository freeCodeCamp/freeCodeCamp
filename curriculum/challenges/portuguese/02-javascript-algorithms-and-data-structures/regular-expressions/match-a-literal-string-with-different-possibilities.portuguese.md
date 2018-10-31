---
id: 587d7db4367417b2b2512b90
title: Match a Literal String with Different Possibilities
challengeType: 1
videoUrl: ''
localeTitle: Combine uma seqüência literal com diferentes possibilidades
---

## Description
<section id="description"> Usando regexes como <code>/coding/</code> , você pode procurar o padrão <code>&quot;coding&quot;</code> em outra string. Isso é poderoso para pesquisar strings únicas, mas é limitado a apenas um padrão. Você pode pesquisar vários padrões usando a <code>alternation</code> ou o operador <code>OR</code> : <code>|</code> . Este operador corresponde aos padrões antes ou depois dele. Por exemplo, se você quisesse combinar <code>&quot;yes&quot;</code> ou <code>&quot;no&quot;</code> , o regex desejado é <code>/yes|no/</code> . Você também pode pesquisar mais do que apenas dois padrões. Você pode fazer isso adicionando mais padrões com mais operadores <code>OR</code> separando-os, como <code>/yes|no|maybe/</code> . </section>

## Instructions
<section id="instructions"> Complete o regex <code>petRegex</code> para combinar com os pets <code>&quot;dog&quot;</code> , <code>&quot;cat&quot;</code> , <code>&quot;bird&quot;</code> ou <code>&quot;fish&quot;</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu regex <code>petRegex</code> deve retornar <code>true</code> para a string <code>&quot;John has a pet dog.&quot;</code>
    testString: 'assert(petRegex.test("John has a pet dog."), "Your regex <code>petRegex</code> should return <code>true</code> for the string <code>"John has a pet dog."</code>");'
  - text: Seu regex <code>petRegex</code> deve retornar <code>false</code> para a string <code>&quot;Emma has a pet rock.&quot;</code>
    testString: 'assert(!petRegex.test("Emma has a pet rock."), "Your regex <code>petRegex</code> should return <code>false</code> for the string <code>"Emma has a pet rock."</code>");'
  - text: Seu regex <code>petRegex</code> deve retornar <code>true</code> para a string <code>&quot;Emma has a pet bird.&quot;</code>
    testString: 'assert(petRegex.test("Emma has a pet bird."), "Your regex <code>petRegex</code> should return <code>true</code> for the string <code>"Emma has a pet bird."</code>");'
  - text: Seu regex <code>petRegex</code> deve retornar <code>true</code> para a string <code>&quot;Liz has a pet cat.&quot;</code>
    testString: 'assert(petRegex.test("Liz has a pet cat."), "Your regex <code>petRegex</code> should return <code>true</code> for the string <code>"Liz has a pet cat."</code>");'
  - text: Seu regex <code>petRegex</code> deve retornar <code>false</code> para a string <code>&quot;Kara has a pet dolphin.&quot;</code>
    testString: 'assert(!petRegex.test("Kara has a pet dolphin."), "Your regex <code>petRegex</code> should return <code>false</code> for the string <code>"Kara has a pet dolphin."</code>");'
  - text: Seu regex <code>petRegex</code> deve retornar <code>true</code> para a string <code>&quot;Alice has a pet fish.&quot;</code>
    testString: 'assert(petRegex.test("Alice has a pet fish."), "Your regex <code>petRegex</code> should return <code>true</code> for the string <code>"Alice has a pet fish."</code>");'
  - text: Seu regex <code>petRegex</code> deve retornar <code>false</code> para a string <code>&quot;Jimmy has a pet computer.&quot;</code>
    testString: 'assert(!petRegex.test("Jimmy has a pet computer."), "Your regex <code>petRegex</code> should return <code>false</code> for the string <code>"Jimmy has a pet computer."</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let petString = "James has a pet cat.";
let petRegex = /change/; // Change this line
let result = petRegex.test(petString);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
