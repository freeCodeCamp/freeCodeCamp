---
title: Towers of Hanoi
id: 5951ed8945deab770972ae56
challengeType: 5
forumTopicId: 302341
localeTitle: Башни Ханоя
---

## Description
<section id='description'>
Задача: <p> Решите проблему <a href="https://en.wikipedia.org/wiki/Towers_of_Hanoi" title="wp: Towers_of_Hanoi">Башни Ханоя</a> . </p><p> Ваше решение должно принять количество дисков в качестве первых параметров и три строки, используемые для идентификации каждого из трех стеков дисков, например <code>towerOfHanoi(4, &#39;A&#39;, &#39;B&#39;, &#39;C&#39;)</code> . Функция должна возвращать массив массивов, содержащий список ходов, source -&gt; destination. Например, массив <code>[[&#39;A&#39;, &#39;C&#39;], [&#39;B&#39;, &#39;A&#39;]]</code> указывает, что 1-й ход состоял в том, чтобы переместить диск из стека A в C, а второй шаг состоял в том, чтобы переместить диск из стека B в A. </p>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>towerOfHanoi</code> is a function.
    testString: assert(typeof towerOfHanoi === 'function');
  - text: <code>towerOfHanoi(3, ...)</code> should return 7 moves.
    testString: assert(res3.length === 7);
  - text: <code>towerOfHanoi(3, 'A', 'B', 'C')</code> should return <code>[['A','B'], ['A','C'], ['B','C'], ['A','B'], ['C','A'], ['C','B'], ['A','B']]</code>.
    testString: assert.deepEqual(towerOfHanoi(3, 'A', 'B', 'C'), res3Moves);
  - text: <code>towerOfHanoi(5, "X", "Y", "Z")</code> 10th move should be Y -> X.
    testString: assert.deepEqual(res5[9], ['Y', 'X']);
  - text: <code>towerOfHanoi(7, 'A', 'B', 'C')</code> first ten moves are <code>[['A','B'], ['A','C'], ['B','C'], ['A','B'], ['C','A'], ['C','B'], ['A','B'], ['A','C'], ['B','C'], ['B','A']]</code>
    testString: assert.deepEqual(towerOfHanoi(7, 'A', 'B', 'C').slice(0, 10), res7First10Moves);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function towerOfHanoi(n, a, b, c) {
  // Good luck!
  return [[]];
}

```

</div>

### After Tests
<div id='js-teardown'>

```js
const res3 = towerOfHanoi(3, 'A', 'B', 'C');
const res3Moves = [['A', 'B'], ['A', 'C'], ['B', 'C'], ['A', 'B'], ['C', 'A'], ['C', 'B'], ['A', 'B']];
const res5 = towerOfHanoi(5, 'X', 'Y', 'Z');
const res7First10Moves = [['A', 'B'], ['A', 'C'], ['B', 'C'], ['A', 'B'], ['C', 'A'], ['C', 'B'], ['A', 'B'], ['A', 'C'], ['B', 'C'], ['B', 'A']];

```

</div>

</section>

## Solution
<section id='solution'>

```js
function towerOfHanoi(n, a, b, c) {
  const res = [];
  towerOfHanoiHelper(n, a, c, b, res);
  return res;
}

function towerOfHanoiHelper(n, a, b, c, res) {
  if (n > 0) {
    towerOfHanoiHelper(n - 1, a, c, b, res);
    res.push([a, c]);
    towerOfHanoiHelper(n - 1, b, a, c, res);
  }
}
```

</section>
