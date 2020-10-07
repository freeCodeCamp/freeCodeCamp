---
id: 5987fd532b954e0f21b5d3f6
challengeType: 5
videoUrl: ''
title: 均衡指数
---

## Description
<section id="description"><p>序列的平衡指数是序列的索引，使得较低指数处的元素之和等于较高指数处的元素之和。 </p><p>例如，在序列<big>$ A $中</big> ： </p><p> :::: <big>$ A_0 = -7 $</big> </p><p> :::: <big>$ A_1 = 1 $</big> </p><p> :::: <big>$ A_2 = 5 $</big> </p><p> :::: <big>$ A_3 = 2 $</big> </p><p> :::: <big>$ A_4 = -4 $</big> </p><p> :::: <big>$ A_5 = 3 $</big> </p><p> :::: <big>$ A_6 = 0 $</big> </p><p> 3是均衡指数，因为： </p><p> :::: <big>$ A_0 + A_1 + A_2 = A_4 + A_5 + A_6 $</big> </p><p> 6也是均衡指数，因为： </p><p> :::: <big>$ A_0 + A_1 + A_2 + A_3 + A_4 + A_5 = 0 $</big> </p><p> （零元素之和为零） </p><p> 7不是均衡指数，因为它不是序列<big>$ A $</big>的有效索引。 </p><p>编写一个函数，给定一个序列，返回其平衡指数（如果有的话）。 </p><p>假设序列可能很长。 </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>equilibrium</code>是一种功能。
    testString: assert(typeof equilibrium === 'function');
  - text: '<code>equilibrium([-7, 1, 5, 2, -4, 3, 0])</code> <code>[3,6]</code> <code>equilibrium([-7, 1, 5, 2, -4, 3, 0])</code>应该返回<code>[3,6]</code> 。'
    testString: assert.deepEqual(equilibrium(equilibriumTests[0]), ans[0]);
  - text: '<code>equilibrium([2, 4, 6])</code>应该返回<code>[]</code> 。'
    testString: assert.deepEqual(equilibrium(equilibriumTests[1]), ans[1]);
  - text: '<code>equilibrium([2, 9, 2])</code>应该返回<code>[1]</code> 。'
    testString: assert.deepEqual(equilibrium(equilibriumTests[2]), ans[2]);
  - text: '<code>equilibrium([1, -1, 1, -1, 1, -1, 1])</code>应该返回<code>[0,1,2,3,4,5,6]</code> 。'
    testString: assert.deepEqual(equilibrium(equilibriumTests[3]), ans[3]);
  - text: '<code>equilibrium([1])</code>应该返回<code>[0]</code> 。'
    testString: assert.deepEqual(equilibrium(equilibriumTests[4]), ans[4]);
  - text: '<code>equilibrium([])</code>应该返回<code>[]</code> 。'
    testString: assert.deepEqual(equilibrium(equilibriumTests[5]), ans[5]);

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

/section>
