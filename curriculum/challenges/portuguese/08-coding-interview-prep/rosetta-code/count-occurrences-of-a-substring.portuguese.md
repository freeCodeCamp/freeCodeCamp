---
title: Count occurrences of a substring
id: 596fda99c69f779975a1b67d
challengeType: 5
videoUrl: ''
localeTitle: Contar ocorrências de uma substring
---

## Description
<section id="description"> Tarefa: <p> Crie uma função ou mostre uma função interna para contar o número de ocorrências não sobrepostas de uma substring dentro de uma string. </p><p> A função deve levar dois argumentos: </p> o primeiro argumento sendo a string a ser pesquisada, e o segundo, uma substring a ser pesquisada. <p> Deve retornar uma contagem inteira. </p><p> A correspondência deve render o maior número de correspondências não sobrepostas. </p><p> Em geral, isso significa essencialmente correspondência da esquerda para a direita ou da direita para a esquerda. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>countSubstring</code> é uma função.
    testString: 'assert(typeof countSubstring === "function", "<code>countSubstring</code> is a function.");'
  - text: '<code>countSubstring(&quot;the three truths&quot;, &quot;th&quot;)</code> deve retornar <code>3</code> .'
    testString: 'assert.equal(countSubstring(testCases[0], searchString[0]), results[0], "<code>countSubstring("the three truths", "th")</code> should return <code>3</code>.");'
  - text: '<code>countSubstring(&quot;ababababab&quot;, &quot;abab&quot;)</code> deve retornar <code>2</code> .'
    testString: 'assert.equal(countSubstring(testCases[1], searchString[1]), results[1], "<code>countSubstring("ababababab", "abab")</code> should return <code>2</code>.");'
  - text: '<code>countSubstring(&quot;abaabba*bbaba*bbab&quot;, &quot;a*b&quot;)</code> deve retornar <code>2</code> .'
    testString: 'assert.equal(countSubstring(testCases[2], searchString[2]), results[2], "<code>countSubstring("abaabba*bbaba*bbab", "a*b")</code> should return <code>2</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function countSubstring (str, subStr) {
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
