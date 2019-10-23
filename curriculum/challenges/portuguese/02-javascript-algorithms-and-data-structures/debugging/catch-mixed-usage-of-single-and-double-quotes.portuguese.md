---
id: 587d7b84367417b2b2512b37
title: Catch Mixed Usage of Single and Double Quotes
challengeType: 1
videoUrl: ''
localeTitle: Pegar Uso Misto de Citações Únicas e Duplas
---

## Description
<section id="description"> O JavaScript permite o uso de aspas simples (&quot;) e dupla (&quot; &quot;) para declarar uma string. Decidir qual usar geralmente se resume a preferência pessoal, com algumas exceções. Ter duas opções é ótimo quando uma string tem contrações ou outra pedaço de texto que está entre aspas. Só tome cuidado para não fechar a string muito cedo, o que causa um erro de sintaxe. Aqui estão alguns exemplos de citações de mixagem: <blockquote> // Estes estão corretos: <br> const grouchoContraction = &quot;Eu tive uma noite perfeitamente maravilhosa, mas não foi isso.&quot;; <br> const quoteInString = &quot;Groucho Marx uma vez disse: &#39;Cite-me dizendo que fui mal citado.&#39;&quot;; <br> // Isso está incorreto: <br> const uhOhGroucho = &#39;Eu tive uma noite perfeitamente maravilhosa, mas não foi isso&#39;; </blockquote> Claro, não há problema em usar apenas um estilo de citações. Você pode escapar as aspas dentro da string usando o caractere de escape barra invertida (\): <blockquote> // Corrigir o uso das mesmas citações: <br> const allSameQuotes = &#39;Eu tive uma noite perfeitamente maravilhosa, mas não foi isso&#39;; </blockquote></section>

## Instructions
<section id="instructions"> Corrija a string de forma que ela use aspas diferentes para o valor <code>href</code> ou escape das existentes. Mantenha as aspas duplas ao redor da string inteira. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Seu código deve corrigir as aspas em torno do valor de <code>href</code> &quot;#Home&quot; alterando ou escapando delas.'
    testString: 'assert(code.match(/<a href=\s*?("|\\")#Home\1\s*?>/g), "Your code should fix the quotes around the <code>href</code> value "#Home" by either changing or escaping them.");'
  - text: Seu código deve manter as aspas duplas ao redor da string inteira.
    testString: 'assert(code.match(/"<p>.*?<\/p>";/g), "Your code should keep the double quotes around the entire string.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let innerHtml = "<p>Click here to <a href="#Home">return home</a></p>";
console.log(innerHtml);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
