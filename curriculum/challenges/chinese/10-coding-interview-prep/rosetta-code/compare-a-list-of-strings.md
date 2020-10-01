---
id: 596e457071c35c882915b3e4
challengeType: 5
videoUrl: ''
title: 比较字符串列表
---

## Description
<section id="description"><p>给定一个任意多个字符串的<a href="https://en.wikipedia.org/wiki/List_(abstract_data_type)" title="wp：List_（abstract_data_type）">列表</a> ，为以下每个条件实现一个函数： </p>测试它们是否都是词法上相等的测试，如果每个字符串在词法上小于它之后的字符串（即列表是否按严格的升序排列） </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>allEqual</code>是一个函数。
    testString: assert(typeof allEqual === 'function');
  - text: <code>azSorted</code>是一个函数。
    testString: assert(typeof azSorted === 'function');
  - text: <code>allEqual(["AA", "AA", "AA", "AA"])</code>返回true。
    testString: assert(allEqual(testCases[0]));
  - text: <code>azSorted(["AA", "AA", "AA", "AA"])</code>返回false。
    testString: assert(!azSorted(testCases[0]));
  - text: <code>allEqual(["AA", "ACB", "BB", "CC"])</code>返回false。
    testString: assert(!allEqual(testCases[1]));
  - text: <code>azSorted(["AA", "ACB", "BB", "CC"])</code>返回true。
    testString: assert(azSorted(testCases[1]));
  - text: <code>allEqual([])</code>返回true。
    testString: assert(allEqual(testCases[2]));
  - text: <code>azSorted([])</code>返回true。
    testString: assert(azSorted(testCases[2]));
  - text: <code>allEqual(["AA"])</code>返回true。
    testString: assert(allEqual(testCases[3]));
  - text: <code>azSorted(["AA"])</code>返回true。
    testString: assert(azSorted(testCases[3]));
  - text: <code>allEqual(["BB", "AA"])</code>返回false。
    testString: assert(!allEqual(testCases[4]));
  - text: <code>azSorted(["BB", "AA"])</code>返回false。
    testString: assert(!azSorted(testCases[4]));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function allEqual (arr) {
  // Good luck!
  return true;
}

function azSorted (arr) {
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

/section>
