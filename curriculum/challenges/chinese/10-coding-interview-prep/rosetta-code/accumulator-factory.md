---
title: Accumulator factory
id: 594810f028c0303b75339ace
challengeType: 5
videoUrl: ''
localeTitle: 蓄能器工厂
---

## Description
<section id="description"><p>创建一个带有单个（数字）参数的函数，并返回另一个作为累加器的函数。返回的累加器函数又接受一个数字参数，并返回到目前为止传递给该累加器的所有数值的总和（包括创建累加器时传递的初始值）。 </p><p>规则： </p><p>不要使用全局变量。 </p><p>暗示： </p><p>闭包可以保存外部状态。 </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>accumulator</code>是一个功能。
    testString: assert(typeof accumulator === 'function');
  - text: <code>accumulator(0)</code>应该返回一个函数。
    testString: assert(typeof accumulator(0) === 'function');
  - text: <code>accumulator(0)(2)</code>应该返回一个数字。
    testString: assert(typeof accumulator(0)(2) === 'number');
  - text: '传递值3，-4,1.5和5应返回5.5。'
    testString: assert(testFn(5) === 5.5);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function accumulator (sum) {
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
