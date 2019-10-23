---
id: 587d7db9367417b2b2512ba5
title: Specify Upper and Lower Number of Matches
challengeType: 1
videoUrl: ''
localeTitle: Especifique o Número Superior e Inferior de Correspondências
---

## Description
<section id="description"> Lembre-se de usar o sinal de mais <code>+</code> para procurar um ou mais caracteres e o asterisco <code>*</code> para procurar zero ou mais caracteres. Estes são convenientes, mas às vezes você quer combinar um certo intervalo de padrões. Você pode especificar o número inferior e superior de padrões com <code>quantity specifiers</code> . Os especificadores de quantidade são usados ​​com chaves ( <code>{</code> e <code>}</code> ). Você coloca dois números entre as chaves - para o número inferior e superior de padrões. Por exemplo, para corresponder apenas a letra <code>a</code> aparecer entre <code>3</code> e <code>5</code> vezes na seqüência de <code>&quot;ah&quot;</code> , o seu regex seria <code>/a{3,5}h/</code> . <blockquote> deixe A4 = &quot;aaaah&quot;; <br> deixe A2 = &quot;aah&quot;; <br> vamos multipleA = / a {3,5} h /; <br> multipleA.test (A4); // Retorna true <br> multipleA.test (A2); // Retorna falso </blockquote></section>

## Instructions
<section id="instructions"> Altere o regex <code>ohRegex</code> para corresponder apenas de <code>3</code> a <code>6</code> letras <code>h</code> na palavra <code>&quot;Oh no&quot;</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu regex deve usar chaves.
    testString: 'assert(ohRegex.source.match(/{.*?}/).length > 0, "Your regex should use curly brackets.");'
  - text: Seu regex não deve corresponder a <code>&quot;Ohh no&quot;</code>
    testString: 'assert(!ohRegex.test("Ohh no"), "Your regex should not match <code>"Ohh no"</code>");'
  - text: Seu regex deve combinar <code>&quot;Ohhh no&quot;</code>
    testString: 'assert(ohRegex.test("Ohhh no"), "Your regex should match <code>"Ohhh no"</code>");'
  - text: Seu regex deve combinar <code>&quot;Ohhhh no&quot;</code>
    testString: 'assert(ohRegex.test("Ohhhh no"), "Your regex should match <code>"Ohhhh no"</code>");'
  - text: Seu regex deve combinar <code>&quot;Ohhhhh no&quot;</code>
    testString: 'assert(ohRegex.test("Ohhhhh no"), "Your regex should match <code>"Ohhhhh no"</code>");'
  - text: Seu regex deve combinar <code>&quot;Ohhhhhh no&quot;</code>
    testString: 'assert(ohRegex.test("Ohhhhhh no"), "Your regex should match <code>"Ohhhhhh no"</code>");'
  - text: Seu regex não deve corresponder a <code>&quot;Ohhhhhhh no&quot;</code>
    testString: 'assert(!ohRegex.test("Ohhhhhhh no"), "Your regex should not match <code>"Ohhhhhhh no"</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let ohStr = "Ohhh no";
let ohRegex = /change/; // Change this line
let result = ohRegex.test(ohStr);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
