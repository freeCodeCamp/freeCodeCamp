---
title: Equilibrium index
id: 5987fd532b954e0f21b5d3f6
challengeType: 5
---

## Description
<section id='description'>
<p>An equilibrium index of a sequence is an index into the sequence such that the sum of elements at lower indices is equal to the sum of elements at higher indices.</p>
<p>For example, in a sequence  <big>$A$</big>:</p><p>::::  <big>$A_0 = -7$</big></p>
<p>::::  <big>$A_1 =  1$</big></p>
<p>::::  <big>$A_2 =  5$</big></p>
<p>::::  <big>$A_3 =  2$</big></p>
<p>::::  <big>$A_4 = -4$</big></p>
<p>::::  <big>$A_5 =  3$</big></p>
<p>::::  <big>$A_6 =  0$</big></p><p>3  is an equilibrium index, because:</p><p>::::  <big>$A_0 + A_1 + A_2 = A_4 + A_5 + A_6$</big></p><p>6  is also an equilibrium index, because:</p><p>::::  <big>$A_0 + A_1 + A_2 + A_3 + A_4 + A_5 = 0$</big></p><p>(sum of zero elements is zero)</p><p>7  is not an equilibrium index, because it is not a valid index of sequence <big>$A$</big>.</p>
<p>Write a function that, given a sequence, returns its equilibrium indices (if any).</p><p>Assume that the sequence may be very long.</p>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>equilibrium</code> is a function.
    testString: assert(typeof equilibrium === 'function', '<code>equilibrium</code> is a function.');
  - text: <code>equilibrium([-7, 1, 5, 2, -4, 3, 0])</code> should return <code>[3,6]</code>.
    testString: assert.deepEqual(equilibrium(equilibriumTests[0]), ans[0], '<code>equilibrium([-7, 1, 5, 2, -4, 3, 0])</code> should return <code>[3,6]</code>.');
  - text: <code>equilibrium([2, 4, 6])</code> should return <code>[]</code>.
    testString: assert.deepEqual(equilibrium(equilibriumTests[1]), ans[1], '<code>equilibrium([2, 4, 6])</code> should return <code>[]</code>.');
  - text: <code>equilibrium([2, 9, 2])</code> should return <code>[1]</code>.
    testString: assert.deepEqual(equilibrium(equilibriumTests[2]), ans[2], '<code>equilibrium([2, 9, 2])</code> should return <code>[1]</code>.');
  - text: <code>equilibrium([1, -1, 1, -1, 1, -1, 1])</code> should return <code>[0,1,2,3,4,5,6]</code>.
    testString: assert.deepEqual(equilibrium(equilibriumTests[3]), ans[3], '<code>equilibrium([1, -1, 1, -1, 1, -1, 1])</code> should return <code>[0,1,2,3,4,5,6]</code>.');
  - text: <code>equilibrium([1])</code> should return <code>[0]</code>.
    testString: assert.deepEqual(equilibrium(equilibriumTests[4]), ans[4], '<code>equilibrium([1])</code> should return <code>[0]</code>.');
  - text: <code>equilibrium([])</code> should return <code>[]</code>.
    testString: assert.deepEqual(equilibrium(equilibriumTests[5]), ans[5], '<code>equilibrium([])</code> should return <code>[]</code>.');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function equilibrium (a) {
  // Good luck!
}
```

</div>


### After Test
<div id='js-teardown'>

```js
const equilibriumTests =
  [[-7, 1, 5, 2, -4, 3, 0], // 3, 6
  [2, 4, 6], // empty
  [2, 9, 2], // 1
  [1, -1, 1, -1, 1, -1, 1], // 0,1,2,3,4,5,6
  [1], // 0
  [] // empty
  ];
const ans = [[3, 6], [], [1], [0, 1, 2, 3, 4, 5, 6], [0], []];
```

</div>

</section>

## Solution
<section id='solution'>


```js
function equilibrium(a) {
  let N = a.length,
    i,
    l = [],
    r = [],
    e = [];
  for (l[0] = a[0], r[N - 1] = a[N - 1], i = 1; i < N; i++)
    { l[i] = l[i - 1] + a[i], r[N - i - 1] = r[N - i] + a[N - i - 1]; }
  for (i = 0; i < N; i++)
    { if (l[i] === r[i]) e.push(i); }
  return e;
}

```

</section>
