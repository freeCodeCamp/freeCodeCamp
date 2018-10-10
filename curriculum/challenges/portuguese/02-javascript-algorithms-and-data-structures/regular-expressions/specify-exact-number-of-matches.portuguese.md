---
id: 587d7db9367417b2b2512ba7
title: Specify Exact Number of Matches
challengeType: 1
videoUrl: ''
localeTitle: Especifique o Número Exato de Correspondências
---

## Description
<section id="description"> Você pode especificar o número inferior e superior de padrões com <code>quantity specifiers</code> usando chaves. Às vezes você só quer um número específico de correspondências. Para especificar um certo número de padrões, basta ter esse número entre as chaves. Por exemplo, para corresponder apenas à palavra <code>&quot;hah&quot;</code> com a letra <code>a</code> <code>3</code> vezes, seu regex seria <code>/ha{3}h/</code> . <blockquote> deixe A4 = &quot;haaaah&quot;; <br> deixe A3 = &quot;haaah&quot;; <br> seja A100 = &quot;h&quot; + &quot;a&quot; .repetição (100) + &quot;h&quot;; <br> deixe multipleHA = / ha {3} h /; <br> multipleHA.test (A4); // Retorna falso <br> multipleHA.test (A3); // Retorna true <br> multipleHA.test (A100); // Retorna falso </blockquote></section>

## Instructions
<section id="instructions"> Altere o regex <code>timRegex</code> para coincidir com a palavra <code>&quot;Timber&quot;</code> somente quando tiver quatro letras <code>m</code> &#39;s. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu regex deve usar chaves.
    testString: 'assert(timRegex.source.match(/{.*?}/).length > 0, "Your regex should use curly brackets.");'
  - text: Seu regex não deve corresponder a <code>&quot;Timber&quot;</code>
    testString: 'assert(!timRegex.test("Timber"), "Your regex should not match <code>"Timber"</code>");'
  - text: Seu regex não deve corresponder a <code>&quot;Timmber&quot;</code>
    testString: 'assert(!timRegex.test("Timmber"), "Your regex should not match <code>"Timmber"</code>");'
  - text: Seu regex não deve corresponder a <code>&quot;Timmmber&quot;</code>
    testString: 'assert(!timRegex.test("Timmmber"), "Your regex should not match <code>"Timmmber"</code>");'
  - text: Seu regex deve corresponder a <code>&quot;Timmmmber&quot;</code>
    testString: 'assert(timRegex.test("Timmmmber"), "Your regex should match <code>"Timmmmber"</code>");'
  - text: 'Seu regex não deve corresponder a <code>&quot;Timber&quot;</code> com 30 <code>m</code> &#39;s nele.'
    testString: 'assert(!timRegex.test("Ti" + "m".repeat(30) + "ber"), "Your regex should not match <code>"Timber"</code> with 30 <code>m</code>\"s in it.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let timStr = "Timmmmber";
let timRegex = /change/; // Change this line
let result = timRegex.test(timStr);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
