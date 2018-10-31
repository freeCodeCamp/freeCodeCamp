---
title: Equilibrium index
id: 5987fd532b954e0f21b5d3f6
challengeType: 5
videoUrl: ''
localeTitle: Равновесный индекс
---

## Description
<section id="description"><p> Равновесный индекс последовательности является индексом в такой последовательности, что сумма элементов при более низких индексах равна сумме элементов с более высокими индексами. </p><p> Например, в последовательности <big>$ A $</big> : </p><p> :::: <big>$ A_0 = -7 $</big> </p><p> :::: <big>$ A_1 = 1 $</big> </p><p> :::: <big>$ A_2 = 5 $</big> </p><p> :::: <big>$ A_3 = 2 $</big> </p><p> :::: <big>$ A_4 = -4 $</big> </p><p> :::: <big>$ A_5 = 3 $</big> </p><p> :::: <big>$ A_6 = 0 $</big> </p><p> 3 - показатель равновесия, поскольку: </p><p> :::: <big>$ A_0 + A_1 + A_2 = A_4 + A_5 + A_6 $</big> </p><p> 6 также является показателем равновесия, поскольку: </p><p> :::: <big>$ A_0 + A_1 + A_2 + A_3 + A_4 + A_5 = 0 $</big> </p><p> (сумма нулевых элементов равна нулю) </p><p> 7 не является индексом равновесия, поскольку он не является допустимым индексом последовательности <big>$ A $</big> . </p><p> Напишите функцию, которая, учитывая последовательность, возвращает свои равновесные индексы (если они есть). </p><p> Предположим, что последовательность может быть очень длинной. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>equilibrium</code> является функцией.
    testString: 'assert(typeof equilibrium === "function", "<code>equilibrium</code> is a function.");'
  - text: '<code>equilibrium([-7, 1, 5, 2, -4, 3, 0])</code> должно вернуться <code>[3,6]</code> .'
    testString: 'assert.deepEqual(equilibrium(tests[0]), ans[0], "<code>equilibrium([-7, 1, 5, 2, -4, 3, 0])</code> should return <code>[3,6]</code>.");'
  - text: '<code>equilibrium([2, 4, 6])</code> должно возвращаться <code>[]</code> .'
    testString: 'assert.deepEqual(equilibrium(tests[1]), ans[1], "<code>equilibrium([2, 4, 6])</code> should return <code>[]</code>.");'
  - text: '<code>equilibrium([2, 9, 2])</code> должно возвращаться <code>[1]</code> .'
    testString: 'assert.deepEqual(equilibrium(tests[2]), ans[2], "<code>equilibrium([2, 9, 2])</code> should return <code>[1]</code>.");'
  - text: '<code>equilibrium([1, -1, 1, -1, 1, -1, 1])</code> должно возвращать <code>[0,1,2,3,4,5,6]</code> .'
    testString: 'assert.deepEqual(equilibrium(tests[3]), ans[3], "<code>equilibrium([1, -1, 1, -1, 1, -1, 1])</code> should return <code>[0,1,2,3,4,5,6]</code>.");'
  - text: '<code>equilibrium([1])</code> должно возвращаться <code>[0]</code> .'
    testString: 'assert.deepEqual(equilibrium(tests[4]), ans[4], "<code>equilibrium([1])</code> should return <code>[0]</code>.");'
  - text: '<code>equilibrium([])</code> должно возвращаться <code>[]</code> .'
    testString: 'assert.deepEqual(equilibrium(tests[5]), ans[5], "<code>equilibrium([])</code> should return <code>[]</code>.");'

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
