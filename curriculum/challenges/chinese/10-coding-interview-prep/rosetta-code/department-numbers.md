---
title: Department Numbers
id: 59f40b17e79dbf1ab720ed7a
challengeType: 5
videoUrl: ''
localeTitle: 部门编号
---

## Description
<section id="description"><p>有一个高度组织化的城市决定为每个部门分配一个号码： </p>警察局环卫部门消防部门<p>每个部门的数字可以在1到7之间（含）。 </p><p>这三个部门编号应该是唯一的（彼此不同），并且必须加起来为12。 </p><p>警察局长不喜欢奇怪的号码，并希望他的部门有一个偶数。 </p>任务： <p>编写一个输出所有有效组合的程序： </p><p> [2,3,7] </p><p> [2,4,6] </p><p> [2,6,4] </p><p> [2,7,3] </p><p> [4,1,7] </p><p> [4,2,6] </p><p> [4,3,5] </p><p> [4,5,3] </p><p> [4,6,2] </p><p> [4,7,1] </p><p> [6,1,5] </p><p> [6,2,4] </p><p> [6,4,2] </p><p> [6,5,1] </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>combinations</code>应该是一个功能。
    testString: assert(typeof combinations === 'function');
  - text: '<code>combinations([1, 2, 3], 6)</code>应该返回一个数组。'
    testString: assert(Array.isArray(combinations([1, 2, 3], 6)));
  - text: '<code>combinations([1, 2, 3, 4, 5, 6, 7], 12)</code>应返回长度为14的数组。'
    testString: assert(combinations(nums, total).length === len);
  - text: '<code>combinations([1, 2, 3, 4, 5, 6, 7], 12)</code>应返回所有有效组合。'
    testString: assert.deepEqual(combinations(nums, total), result);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function combinations (possibleNumbers, total) {
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
