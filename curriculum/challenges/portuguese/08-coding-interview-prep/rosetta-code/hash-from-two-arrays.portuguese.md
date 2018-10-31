---
title: Hash from two arrays
id: 595671d4d2cdc305f0d5b36f
challengeType: 5
videoUrl: ''
localeTitle: Hash de duas matrizes
---

## Description
<section id="description"> Tarefa: <p> Usando duas Matrizes de igual comprimento, crie um objeto Hash onde os elementos de uma matriz (as chaves) são vinculados aos elementos da outra (os valores) </p> Tarefa relacionada: <a href="http://rosettacode.org/wiki/Associative arrays/Creation" title="Matrizes Associativas / Criação">Matrizes Associativas / Criação</a> </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>arrToObj</code> é uma função.
    testString: 'assert(typeof arrToObj === "function", "<code>arrToObj</code> is a function.");'
  - text: '<code>arrToObj([1, 2, 3, 4, 5], [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;, &quot;d&quot;, &quot;e&quot;])</code> deve retornar <code>{ 1: &quot;a&quot;, 2: &quot;b&quot;, 3: &quot;c&quot;, 4: &quot;d&quot;, 5: &quot;e&quot; }</code>'
    testString: 'assert.deepEqual(arrToObj(...testCases[0]), res[0], "<code>arrToObj([1, 2, 3, 4, 5], ["a", "b", "c", "d", "e"])</code> should return <code>{ 1: "a", 2: "b", 3: "c", 4: "d", 5: "e" }</code>");'
  - text: '<code>arrToObj([1, 2, 3, 4, 5], [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;, &quot;d&quot;])</code> deve retornar <code>{ 1: &quot;a&quot;, 2: &quot;b&quot;, 3: &quot;c&quot;, 4: &quot;d&quot;, 5: undefined }</code>'
    testString: 'assert.deepEqual(arrToObj(...testCases[1]), res[1], "<code>arrToObj([1, 2, 3, 4, 5], ["a", "b", "c", "d"])</code> should return <code>{ 1: "a", 2: "b", 3: "c", 4: "d", 5: undefined }</code>");'
  - text: '<code>arrToObj([1, 2, 3], [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;, &quot;d&quot;, &quot;e&quot;])</code> deve retornar <code>{ 1: &quot;a&quot;, 2: &quot;b&quot;, 3: &quot;c&quot; }</code>'
    testString: 'assert.deepEqual(arrToObj(...testCases[2]), res[2], "<code>arrToObj([1, 2, 3], ["a", "b", "c", "d", "e"])</code> should return <code>{ 1: "a", 2: "b", 3: "c" }</code>");'
  - text: '<code>arrToObj([&quot;a&quot;, &quot;b&quot;, &quot;c&quot;, &quot;d&quot;, &quot;e&quot;], [1, 2, 3, 4, 5])</code> deve retornar <code>{ &quot;a&quot;: 1, &quot;b&quot;: 2, &quot;c&quot;: 3 , &quot;d&quot;: 4, &quot;e&quot;: 5 }</code>'
    testString: 'assert.deepEqual(arrToObj(...testCases[3]), res[3], "<code>arrToObj(["a", "b", "c", "d", "e"], [1, 2, 3, 4, 5])</code> should return <code>{ "a": 1, "b": 2, "c": 3 , "d": 4, "e": 5 }</code>");'
  - text: '<code>arrToObj([&quot;a&quot;, &quot;b&quot;, &quot;c&quot;, &quot;d&quot;, &quot;e&quot;], [1, 2, 3, 4])</code> deve retornar <code>{ &quot;a&quot;: 1, &quot;b&quot;: 2, &quot;c&quot;: 3 , &quot;d&quot;: 4, &quot;e&quot;: undefined }</code>'
    testString: 'assert.deepEqual(arrToObj(...testCases[4]), res[4], "<code>arrToObj(["a", "b", "c", "d", "e"], [1, 2, 3, 4])</code> should return <code>{ "a": 1, "b": 2, "c": 3 , "d": 4, "e": undefined }</code>");'
  - text: '<code>arrToObj([&quot;a&quot;, &quot;b&quot;, &quot;c&quot;], [1, 2, 3, 4, 5])</code> deve retornar <code>{ &quot;a&quot;: 1, &quot;b&quot;: 2, &quot;c&quot;: 3 }</code>'
    testString: 'assert.deepEqual(arrToObj(...testCases[5]), res[5], "<code>arrToObj(["a", "b", "c"], [1, 2, 3, 4, 5])</code> should return <code>{ "a": 1, "b": 2, "c": 3  }</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function arrToObj (keys, vals) {
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
