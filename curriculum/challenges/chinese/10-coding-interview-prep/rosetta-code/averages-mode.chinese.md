---
title: Averages-Mode
id: 594d8d0ab97724821379b1e6
challengeType: 5
videoUrl: ''
localeTitle: 平均值模式
---

## Description
<section id="description"><p>编写程序以查找集合的<a href="https://en.wikipedia.org/wiki/Mode (statistics)" title="wp：模式（统计）">模式</a>值。 </p><p>可以忽略集合为空的情况。必须小心处理模式不唯一的情况。 </p><p>如果不适合或不可能支持常规集合，请尽可能使用向量（数组）。如果不适合或不可能支持未指定的值类型，请使用整数。 </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>mode</code>是一种功能。
    testString: assert(typeof mode === 'function');
  - text: '<code>mode([1, 3, 6, 6, 6, 6, 7, 7, 12, 12, 17])</code>应该相等<code>[6]</code>'
    testString: assert.deepEqual(mode(arr1), [6]);
  - text: '<code>mode([1, 2, 4, 4, 1])</code>应该等于<code>[1, 4]</code> 。'
    testString: assert.deepEqual(mode(arr2).sort(), [1, 4]);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function mode (arr) {
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
