---
id: 587d7b84367417b2b2512b37
title: Identificar uso misto de aspas simples e duplas
challengeType: 1
forumTopicId: 301188
dashedName: catch-mixed-usage-of-single-and-double-quotes
---

# --description--

JavaScript nos permite o uso de ambas as aspas simples (`'<code>) e duplas (<code>"<code>) para declarar uma string. Decidir qual delas usar geralmente é uma questão de preferência pessoal, com algumas exceções.</p>

<p spaces-before="0">Ter duas opções é ótimo quando uma string possui contrações ou outros pedaços de texto que estão entre aspas. Apenas tome cuidado para que você não feche uma string muito cedo, o que causa erro de sintaxe.</p>

<p spaces-before="0">Aqui estão alguns exemplos de mistura de aspas:</p>

<pre><code class="js">const grouchoContraction = "I've had a perfectly wonderful evening, but this wasn't it.";
const quoteInString = "Groucho Marx once said 'Quote me as saying I was mis-quoted.'";
const uhOhGroucho = 'I've had a perfectly wonderful evening, but this wasn't it.';
`</pre>

As duas primeiras estão corretas, mas a terceira não.

Claro, não há problema usar apenas um estilo de aspas. Você pode escapar as aspas dentro de uma string ao usar o caractere barra invertida (</code>\</code>):

```js
const allSameQuotes = 'I\'ve had a perfectly wonderful evening, but this wasn\'t it.';
```

# --instructions--

Corrija a string para que ou use aspas diferentes para o valor de `href` ou escape as aspas existentes. Mantenha as aspas duplas ao redor de toda a string.

# --hints--

Seu código deve corrigir as aspas em torno do valor de `href`: `#Home` ao mudar ou escapar elas.

```js
assert(code.match(/<a href=\s*?('|\\")#Home\1\s*?>/g));
```

Seu código deve manter as aspas duplas ao redor de toda a string.

```js
assert(code.match(/"<p>.*?<\/p>";/g));
```

# --seed--

## --seed-contents--

```js
let innerHtml = "<p>Click here to <a href="#Home">return home</a></p>";
console.log(innerHtml);
```

# --solutions--

```js
let innerHtml = "<p>Click here to <a href=\"#Home\">return home</a></p>";
console.log(innerHtml);
```
