---
title: Comma quibbling
id: 596e414344c3b2872167f0fe
challengeType: 5
videoUrl: ''
localeTitle: 'Vírgula, quibbling'
---

## Description
<section id="description"><p> Comma quibbling é uma tarefa originalmente definida por Eric Lippert em seu <a href="http://blogs.msdn.com/b/ericlippert/archive/2009/04/15/comma-quibbling.aspx" title="link: http://blogs.msdn.com/b/ericlippert/archive/2009/04/15/comma-quibbling.aspx">blog</a> . </p> Tarefa: <p> Escreva uma função para gerar uma saída de string que é a concatenação de palavras de entrada de uma lista / sequência onde: </p> Uma entrada sem palavras produz a sequência de saída de apenas os dois caracteres de chave &quot;{}&quot;. Uma entrada de apenas uma palavra, por exemplo, [&quot;ABC&quot;], produz a string de saída da palavra dentro das duas chaves, por exemplo, &quot;{ABC}&quot;. Uma entrada de duas palavras, por exemplo, [&quot;ABC&quot;, &quot;DEF&quot;], produz a string de saída das duas palavras dentro das duas chaves, com as palavras separadas pela string &quot;e&quot;, por exemplo, &quot;{ABC e DEF}&quot;. Uma entrada de três ou mais palavras, por exemplo, [&quot;ABC&quot;, &quot;DEF&quot;, &quot;G&quot;, &quot;H&quot;], produz a string de saída de todas menos a última palavra separada por &quot;,&quot; com a última palavra separada por &quot;e &quot;e tudo dentro de chaves; por exemplo, &quot;{ABC, DEF, G e H}&quot;. <p> Teste sua função com as seguintes séries de entradas mostrando sua saída aqui nesta página: </p> [] # (Sem palavras de entrada). [&quot;ABC&quot;] [&quot;ABC&quot;, &quot;DEF&quot;] [&quot;ABC&quot;, &quot;DEF&quot;, &quot;G&quot;, &quot;H&quot;] <p> Nota: Suponha que as palavras sejam sequências não vazias de caracteres maiúsculos para esta tarefa. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>quibble</code> é uma função.
    testString: 'assert(typeof quibble === "function", "<code>quibble</code> is a function.");'
  - text: '<code>quibble([&quot;ABC&quot;])</code> deve retornar uma string.'
    testString: 'assert(typeof quibble(["ABC"]) === "string", "<code>quibble(["ABC"])</code> should return a string.");'
  - text: '<code>quibble([])</code> deve retornar &quot;{}&quot;.'
    testString: 'assert.equal(quibble(testCases[0]), results[0], "<code>quibble([])</code> should return "{}".");'
  - text: '<code>quibble([&quot;ABC&quot;])</code> deve retornar &quot;{ABC}&quot;.'
    testString: 'assert.equal(quibble(testCases[1]), results[1], "<code>quibble(["ABC"])</code> should return "{ABC}".");'
  - text: '<code>quibble([&quot;ABC&quot;, &quot;DEF&quot;])</code> deve retornar &quot;{ABC e DEF}&quot;.'
    testString: 'assert.equal(quibble(testCases[2]), results[2], "<code>quibble(["ABC", "DEF"])</code> should return "{ABC and DEF}".");'
  - text: '<code>quibble([&quot;ABC&quot;, &quot;DEF&quot;, &quot;G&quot;, &quot;H&quot;])</code> deve retornar &quot;{ABC, DEF, G e H}&quot;.'
    testString: 'assert.equal(quibble(testCases[3]), results[3], "<code>quibble(["ABC", "DEF", "G", "H"])</code> should return "{ABC,DEF,G and H}".");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function quibble (words) {
  // Good luck!
  return true;
}

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
