---
title: Towers of Hanoi
id: 5951ed8945deab770972ae56
challengeType: 5
videoUrl: ''
localeTitle: Башни Ханоя
---

## Description
<section id="description"> Задача: <p> Решите проблему <a href="https://en.wikipedia.org/wiki/Towers_of_Hanoi" title="wp: Towers_of_Hanoi">Башни Ханоя</a> . </p><p> Ваше решение должно принять количество дисков в качестве первых параметров и три строки, используемые для идентификации каждого из трех стеков дисков, например <code>towerOfHanoi(4, &#39;A&#39;, &#39;B&#39;, &#39;C&#39;)</code> . Функция должна возвращать массив массивов, содержащий список ходов, source -&gt; destination. Например, массив <code>[[&#39;A&#39;, &#39;C&#39;], [&#39;B&#39;, &#39;A&#39;]]</code> указывает, что 1-й ход состоял в том, чтобы переместить диск из стека A в C, а второй шаг состоял в том, чтобы переместить диск из стека B в A. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>towerOfHanoi</code> - это функция.
    testString: 'assert(typeof towerOfHanoi === "function", "<code>towerOfHanoi</code> is a function.");'
  - text: '<code>towerOfHanoi(3, ...)</code> должен возвращать 7 ходов.'
    testString: 'assert(res3.length === 7, "<code>towerOfHanoi(3, ...)</code> should return 7 moves.");'
  - text: '<code>towerOfHanoi(3, &quot;A&quot;, &quot;B&quot;, &quot;C&quot;)</code> должны возвращать [[«A», «B»], [«A», «C»], [«B», «C»], [ &quot;А&quot;, &quot;В&quot;], [ &quot;С&quot;, &quot;А&quot;], [ &quot;С&quot;, &quot;В&quot;], [ &quot;А&quot;, &quot;Б&quot;]]. &quot;)'
    testString: 'assert.deepEqual(towerOfHanoi(3, "A", "B", "C"), res3Moves, "<code>towerOfHanoi(3, "A", "B", "C")</code> should return [["A","B"],["A","C"],["B","C"],["A","B"],["C","A"],["C","B"],["A","B"]].");'
  - text: '<code>towerOfHanoi(5, &quot;X&quot;, &quot;Y&quot;, &quot;Z&quot;)</code> 10-й ход должен быть Y -&gt; X.'
    testString: 'assert.deepEqual(res5[9], ["Y", "X"], "<code>towerOfHanoi(5, "X", "Y", "Z")</code> 10th move should be Y -> X.");'
  - text: '<code>towerOfHanoi(7, &quot;A&quot;, &quot;B&quot;, &quot;C&quot;)</code> первые десять ходов - [[«А», «В»], [«А», «С»], [«В», «С»] , [ &quot;А&quot;, &quot;В&quot;], [ &quot;С&quot;, &quot;А&quot;], [ &quot;С&quot;, &quot;В&quot;], [ &quot;А&quot;, &quot;В&quot;], [ &quot;А&quot;, &quot;С&quot;] , [ &quot;В&quot;, &quot;С&quot;], [ &quot;В&quot;, &quot;А&quot;]] &quot;.)'
    testString: 'assert.deepEqual(towerOfHanoi(7, "A", "B", "C").slice(0, 10), res7First10Moves, "<code>towerOfHanoi(7, "A", "B", "C")</code> first ten moves are [["A","B"],["A","C"],["B","C"],["A","B"],["C","A"],["C","B"],["A","B"],["A","C"],["B","C"],["B","A"]].");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function towerOfHanoi (n, a, b, c) {
  // Good luck!
  return [[]];
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
