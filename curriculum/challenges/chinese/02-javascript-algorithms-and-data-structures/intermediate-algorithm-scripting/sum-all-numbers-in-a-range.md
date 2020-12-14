---
id: a3566b1109230028080c9345
challengeType: 5
forumTopicId: 16083
title: 范围内的数字求和
---

## Description
<section id='description'>
给出一个含有两个数字的数组，我们需要写一个函数，让它返回这两个数字间所有数字（包含这两个数字）的总和。

例如，<code>sumAll([4,1])</code> 应该返回 <code>10</code>，因为从 1 到 4 （包含 1、4）的所有数字的和是 <code>10</code>。

如果你遇到了问题，请点击<a href='https://forum.freecodecamp.one/t/topic/157' target='_blank'>帮助</a>。

</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>sumAll([1, 4])</code>应该返回一个数字。
    testString: assert(typeof sumAll([1, 4]) === 'number');
  - text: <code>sumAll([1, 4])</code>应该返回 10。
    testString: assert.deepEqual(sumAll([1, 4]), 10);
  - text: <code>sumAll([4, 1])</code>应该返回 10。
    testString: assert.deepEqual(sumAll([4, 1]), 10);
  - text: <code>sumAll([5, 10])</code>应该返回 45。
    testString: assert.deepEqual(sumAll([5, 10]), 45);
  - text: <code>sumAll([10, 5])</code>应该返回 45。
    testString: assert.deepEqual(sumAll([10, 5]), 45);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function sumAll(arr) {
  return 1;
}

sumAll([1, 4]);
```

</div>



</section>

## Solution
<section id='solution'>


```js
function sumAll(arr) {
  var sum = 0;
  arr.sort(function(a,b) {return a-b;});
  for (var i = arr[0]; i <= arr[1]; i++) {
    sum += i;
  }
  return sum;
}
```
</section>
