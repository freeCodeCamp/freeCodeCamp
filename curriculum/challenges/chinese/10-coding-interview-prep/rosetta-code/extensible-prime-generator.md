---
id: 598ee8b91b410510ae82efef
challengeType: 5
videoUrl: ''
title: 可扩展的素发生器
---

## Description
<section id="description"><p>按顺序编写素数生成器，它将自动调整以适应任何合理高素数的生成。 </p>发电机应能：显示前<b>N个</b>黄金numbers.Show在range.Show的素数的素数在range.Show数<b><sup>第</sup> n <sup>个</sup></b>素数。 <p>该函数应该有两个参数。第一个将接收<b>n</b>或作为数组的范围。第二个将接收一个布尔值，它指定函数是否将素数作为数组或单个数字（范围中的素数或第<b>n <sup>个</sup></b>素数）返回。根据参数，函数应该返回一个数组。 </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>primeGenerator</code>是一个函数。
    testString: assert(typeof primeGenerator === 'function');
  - text: <code>primeGenerator</code>是一个函数。
    testString: assert.deepEqual(primeGenerator(20, true), [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71]);
  - text: <code>primeGenerator</code>是一个函数。
    testString: assert.deepEqual(primeGenerator([100, 150], true), [101, 103, 107, 109, 113, 127, 131, 137, 139, 149]);
  - text: <code>primeGenerator</code>是一个函数。
    testString: assert.equal(primeGenerator([7700, 8000], false), 30);
  - text: <code>primeGenerator</code>是一个函数。
    testString: assert.equal(primeGenerator(10000, false), 104729);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function primeGenerator (num, showPrimes) {
  // Good luck!
}

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
