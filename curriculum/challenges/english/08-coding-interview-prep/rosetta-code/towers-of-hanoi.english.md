---
title: Towers of Hanoi
id: 5951ed8945deab770972ae56
challengeType: 5
isHidden: false
forumTopicId: 302341
---

## Description
<section id='description'>
Solve the <a href="https://en.wikipedia.org/wiki/Towers_of_Hanoi" title="wp: Towers_of_Hanoi" target="_blank">Towers of Hanoi</a> problem.</p>
Your solution should accept the number of discs as the first parameters, and three string used to identify each of the three stacks of discs, for example <code>towerOfHanoi(4, 'A', 'B', 'C')</code>. The function should return an array of arrays containing the list of moves, source -> destination.
For example, the array <code>[['A', 'C'], ['B', 'A']]</code> indicates that the 1st move was to move a disc from stack A to C, and the 2nd move was to move a disc from stack B to A.
</p>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>towerOfHanoi</code> should be a function.
    testString: assert(typeof towerOfHanoi === 'function');
  - text: <code>towerOfHanoi(3, ...)</code> should return 7 moves.
    testString: assert(res3.length === 7);
  - text: <code>towerOfHanoi(3, 'A', 'B', 'C')</code> should return <code>[['A','B'], ['A','C'], ['B','C'], ['A','B'], ['C','A'], ['C','B'], ['A','B']]</code>.
    testString: assert.deepEqual(towerOfHanoi(3, 'A', 'B', 'C'), res3Moves);
  - text: <code>towerOfHanoi(5, "X", "Y", "Z")</code> 10th move should be Y -> X.
    testString: assert.deepEqual(res5[9], ['Y', 'X']);
  - text: <code>towerOfHanoi(7, 'A', 'B', 'C')</code> first ten moves should be <code>[['A','B'], ['A','C'], ['B','C'], ['A','B'], ['C','A'], ['C','B'], ['A','B'], ['A','C'], ['B','C'], ['B','A']]</code>
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


### After Test
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
