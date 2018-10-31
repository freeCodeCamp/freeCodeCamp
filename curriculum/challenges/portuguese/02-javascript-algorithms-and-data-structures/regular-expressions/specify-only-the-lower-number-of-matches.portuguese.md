---
id: 587d7db9367417b2b2512ba6
title: Specify Only the Lower Number of Matches
challengeType: 1
videoUrl: ''
localeTitle: Especifique apenas o menor número de correspondências
---

## Description
<section id="description"> Você pode especificar o número inferior e superior de padrões com <code>quantity specifiers</code> usando chaves. Às vezes você só quer especificar o menor número de padrões sem limite superior. Para especificar apenas o menor número de padrões, mantenha o primeiro número seguido por uma vírgula. Por exemplo, para corresponder apenas à string <code>&quot;hah&quot;</code> com a letra <code>a</code> aparecer pelo menos <code>3</code> vezes, seu regex seria <code>/ha{3,}h/</code> . <blockquote> deixe A4 = &quot;haaaah&quot;; <br> seja A2 = &quot;haah&quot;; <br> seja A100 = &quot;h&quot; + &quot;a&quot; .repetição (100) + &quot;h&quot;; <br> vamos multipleA = / ha {3,} h /; <br> multipleA.test (A4); // Retorna true <br> multipleA.test (A2); // Retorna falso <br> multipleA.test (A100); // Retorna true </blockquote></section>

## Instructions
<section id="instructions"> Altere o regex <code>haRegex</code> para coincidir com a palavra <code>&quot;Hazzah&quot;</code> apenas quando tiver quatro ou mais letras <code>z</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu regex deve usar chaves.
    testString: 'assert(haRegex.source.match(/{.*?}/).length > 0, "Your regex should use curly brackets.");'
  - text: Seu regex não deve corresponder a <code>&quot;Hazzah&quot;</code>
    testString: 'assert(!haRegex.test("Hazzah"), "Your regex should not match <code>"Hazzah"</code>");'
  - text: Seu regex não deve corresponder a <code>&quot;Hazzzah&quot;</code>
    testString: 'assert(!haRegex.test("Hazzzah"), "Your regex should not match <code>"Hazzzah"</code>");'
  - text: Seu regex deve coincidir com <code>&quot;Hazzzzah&quot;</code>
    testString: 'assert(haRegex.test("Hazzzzah"), "Your regex should match <code>"Hazzzzah"</code>");'
  - text: Seu regex deve coincidir com <code>&quot;Hazzzzzah&quot;</code>
    testString: 'assert(haRegex.test("Hazzzzzah"), "Your regex should match <code>"Hazzzzzah"</code>");'
  - text: Seu regex deve coincidir com <code>&quot;Hazzzzzzah&quot;</code>
    testString: 'assert(haRegex.test("Hazzzzzzah"), "Your regex should match <code>"Hazzzzzzah"</code>");'
  - text: 'Seu regex deve combinar <code>&quot;Hazzah&quot;</code> com 30 <code>z</code> \ &#39;s nele.'
    testString: 'assert(haRegex.test("Ha" + "z".repeat(30) + "ah"), "Your regex should match <code>"Hazzah"</code> with 30 <code>z</code>\"s in it.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let haStr = "Hazzzzah";
let haRegex = /change/; // Change this line
let result = haRegex.test(haStr);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
