---
id: 587d7db6367417b2b2512b9b
title: Find Characters with Lazy Matching
challengeType: 1
videoUrl: ''
localeTitle: Encontrar personagens com correspondência preguiçosa
---

## Description
<section id="description"> Em expressões regulares, uma correspondência <code>greedy</code> localiza a parte mais longa possível de uma sequência que se ajusta ao padrão de expressão regular e a retorna como uma correspondência. A alternativa é chamada de <code>lazy</code> match, que encontra a menor parte possível da string que satisfaz o padrão de expressão regular. Você pode aplicar o regex <code>/t[az]*i/</code> à string <code>&quot;titanic&quot;</code> . Este regex é basicamente um padrão que começa com <code>t</code> , termina com <code>i</code> e tem algumas letras no meio. Expressões regulares são por padrão <code>greedy</code> , então a correspondência retornaria <code>[&quot;titani&quot;]</code> . Ele encontra a maior sub-string possível para ajustar o padrão. No entanto, você pode usar o <code>?</code> personagem para alterá-lo para correspondência <code>lazy</code> . <code>&quot;titanic&quot;</code> combinou com o regex ajustado de <code>/t[az]*?i/</code> returns <code>[&quot;ti&quot;]</code> . </section>

## Instructions
<section id="instructions"> Corrija o regex <code>/&lt;.*&gt;/</code> para retornar a tag HTML <code>&lt;h1&gt;</code> e não o texto <code>&quot;&lt;h1&gt;Winter is coming&lt;/h1&gt;&quot;</code> . Lembre-se do curinga <code>.</code> em uma expressão regular corresponde a qualquer caractere. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: A variável de <code>result</code> deve ser uma matriz com <code>&lt;h1&gt;</code> nela
    testString: 'assert(result[0] == "<h1>", "The <code>result</code> variable should be an array with <code>&lt;h1&gt;</code> in it");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*>/; // Change this line
let result = text.match(myRegex);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
