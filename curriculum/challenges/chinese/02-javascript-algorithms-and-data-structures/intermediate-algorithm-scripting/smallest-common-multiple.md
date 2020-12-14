---
id: ae9defd7acaf69703ab432ea
challengeType: 5
forumTopicId: 16075
title: 最小公倍数
---

## Description
<section id='description'>
在这道题目中，我们需要写一个函数，它接收一个包含两个数字的数组参数<code>arr</code>，它的返回值为这两个数字范围内所有数字（包含这两个数字）的最小公倍数。
注意，较小数不一定总是出现在数组的第一个元素。
比如，传入<code>[1, 3]</code>，那么函数的返回结果应为 1、2、3 的最小公倍数，即为 6。
如果你遇到了问题，请点击<a href='https://forum.freecodecamp.one/t/topic/157' target='_blank'>帮助</a>。
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>smallestCommons([1, 5])</code>应该返回一个数字。
    testString: assert.deepEqual(typeof smallestCommons([1, 5]), 'number');
  - text: <code>smallestCommons([1, 5])</code>应该返回 60。
    testString: assert.deepEqual(smallestCommons([1, 5]), 60);
  - text: <code>smallestCommons([5, 1])</code>应该返回 60。
    testString: assert.deepEqual(smallestCommons([5, 1]), 60);
  - text: <code>smallestCommons([2, 10])</code>应该返回 2520。.
    testString: assert.deepEqual(smallestCommons([2, 10]), 2520);
  - text: <code>smallestCommons([1, 13])</code>应该返回 360360。
    testString: assert.deepEqual(smallestCommons([1, 13]), 360360);
  - text: <code>smallestCommons([23, 18])</code>应该返回 6056820。
    testString: assert.deepEqual(smallestCommons([23, 18]), 6056820);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function smallestCommons(arr) {
  return arr;
}


smallestCommons([1,5]);
```

</div>



</section>

## Solution
<section id='solution'>


```js
function gcd(a, b) {
    while (b !== 0) {
        a = [b, b = a % b][0];
    }
    return a;
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function smallestCommons(arr) {
  arr.sort(function(a,b) {return a-b;});
  var rng = [];
  for (var i = arr[0]; i <= arr[1]; i++) {
    rng.push(i);
  }
  return rng.reduce(lcm);
}
```

</section>
