---
id: 587d7db6367417b2b2512b9b
title: Find Characters with Lazy Matching
challengeType: 1
videoUrl: ''
localeTitle: Encontrar caracteres com correspondência preguiçosa
---

## Descrição
<section id="description"> Em expressões regulares, uma correspondência <code>greedy</code> localiza a parte mais longa possível de uma string que se adequa ao padrão da expressão regular e o retorna como uma correspondência. A alternativa é chamada de correspondência <code>lazy</code> , a qual encontra a menor parte possível da string que satisfaz o padrão da expressão regular. Você pode aplicar a expressão regular <code>/t[az]*i/</code> à string <code>&quot;titanic&quot;</code> . Esta expressão regular é basicamente um padrão que começa com <code>t</code> , termina com <code>i</code> e tem algumas letras no meio. As expressões regulares são por padrão <code>greedy</code> , então a correspondência retornaria <code>[&quot;titani&quot;]</code> . A expressão regular encontra a maior sub-string possível para satisfazer o padrão. Entretanto, você pode usar o caractere <code>?</code> para alterar a expressão regular para a correspondência <code>lazy</code> . A palavra <code>&quot;titanic&quot;</code> combinada com a expressão regular ajustada  <code>/t[az]*?i/</code> retorna <code>[&quot;ti&quot;]</code> . </section>

## Instruções
<section id="instructions"> Corrija o regex <code>/&lt;.*&gt;/</code> para retornar a tag HTML <code>&lt;h1&gt;</code> e não o texto <code>&quot;&lt;h1&gt;Winter is coming&lt;/h1&gt;&quot;</code> . Lembre-se que o curinga <code>.</code> em uma expressão regular corresponde a qualquer caractere. </section>

## Testes
<section id='tests'>

```yml
tests:
  - text: A variável <code>result</code> deve ser uma matriz com <code>&lt;h1&gt;</code> nela
    testString: 'assert(result[0] == "<h1>", "A variável <code>result</code> deve ser uma matriz com <code>&lt;h1&gt;</code> nela");'

```

</section>

## Desafio
<section id='challengeSeed'>

<div id='js-seed'>

```js
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*>/; // Altere esta linha
let result = text.match(myRegex);

```

</div>



</section>

## Solução
<section id='solution'>

```js
// solution required
```
</section>
