---
title: S-Expressions
id: 59667989bf71cf555dd5d2ff
challengeType: 5
videoUrl: ''
localeTitle: Expressões S
---

## Description
<section id="description"><p> <a href="https://en.wikipedia.org/wiki/S-Expression" title="wp: expressão S">Expressões S</a> são uma maneira conveniente de analisar e armazenar dados. </p> Tarefa: <p> Escreva um leitor / analisador simples para S-Expressions que lida com strings, inteiros e flutuantes entre aspas e sem aspas. </p><p> A função deve ler uma única S-Expression aninhada de uma string e retorná-la como uma matriz (aninhada). </p><p> As novas linhas e outros espaços em branco podem ser ignorados, a menos que estejam contidos em uma cadeia de caracteres entre aspas. </p><p> “ <tt>()</tt> ” Strings entre aspas não são interpretadas, mas tratadas como parte da string. </p><p> Manipular citações com escape dentro de uma string é opcional; assim, “ <tt>(foo bar)</tt> ” talvez tratada como uma string “ <tt>foo” bar</tt> ”, ou como um erro. </p><p> Para isso, o leitor não precisa reconhecer “ <tt>\</tt> ” para escapar, mas deve, além disso, reconhecer números se a linguagem tiver tipos de dados apropriados. </p><p> Observe que, com a exceção de “ <tt>()”</tt> ”(“ <tt>\</tt> ”se houver suporte a escape) e espaço em branco, não há caracteres especiais, e qualquer outra coisa é permitida sem aspas. </p><p> O leitor deve poder ler a seguinte entrada </p><p></p><pre> ((dados &quot;dados cotados&quot; 123 4.5)
    (dados (! @ # (4.5) &quot;(mais&quot; &quot;dados)&quot;)))
</pre><p></p><p> e transformá-lo em uma estrutura de dados nativa. (veja as implementações de <a href="http://rosettacode.org/wiki/#Pike" title="#Pique">Pike</a> , <a href="http://rosettacode.org/wiki/#Python" title="#Python">Python</a> e <a href="http://rosettacode.org/wiki/#Ruby" title="#Rubi">Ruby</a> para exemplos de estruturas de dados nativas.) </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>parseSexpr</code> é uma função.
    testString: 'assert(typeof parseSexpr === "function", "<code>parseSexpr</code> is a function.");'
  - text: '<code>parseSexpr(&quot;(data1 data2 data3)&quot;)</code> deve retornar [&quot;data1&quot;, &quot;data2&quot;, &quot;data3&quot;] &quot;)'
    testString: 'assert.deepEqual(parseSexpr(simpleSExpr), simpleSolution, "<code>parseSexpr("(data1 data2 data3)")</code> should return ["data1", "data2", "data3"]");'
  - text: '<code>parseSexpr(&#39;(data1 data2 data3)&#39;)</code> deve retornar um array com 3 elementos &quot;)'
    testString: 'assert.deepEqual(parseSexpr(basicSExpr), basicSolution, "<code>parseSexpr("(data1 data2 data3)")</code> should return an array with 3 elements");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function parseSexpr(str) {
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
