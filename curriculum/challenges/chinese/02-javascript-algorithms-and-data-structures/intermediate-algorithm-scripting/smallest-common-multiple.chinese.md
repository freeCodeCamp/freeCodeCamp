---
id: ae9defd7acaf69703ab432ea
title: Smallest Common Multiple
challengeType: 5
isRequired: true
videoUrl: ''
localeTitle: Smallest Common Multiple
---

## Description
<section id='description'>
给出一个含有两个数字的数组，我们需要写一个函数，让它返回这两个数字间所有数字（包含这两个数字）的总和。
注意，较小数不一定总是出现在数组的第一个元素。
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
    testString: assert.deepEqual(typeof smallestCommons([1, 5]), 'number', '<code>smallestCommons([1, 5])</code>应该返回一个数字。');
  - text: <code>smallestCommons([1, 5])</code>应该返回 60。
    testString: assert.deepEqual(smallestCommons([1, 5]), 60, '<code>smallestCommons([1, 5])</code>应该返回 60。');
  - text: <code>smallestCommons([5, 1])</code>应该返回 60。
    testString: assert.deepEqual(smallestCommons([5, 1]), 60, '<code>smallestCommons([5, 1])</code>应该返回 60。');
  - text: <code>smallestCommons([2, 10])</code>应该返回 2520。.
    testString: assert.deepEqual(smallestCommons([2, 10]), 2520, '<code>smallestCommons([2, 10])</code>应该返回 2520。');
  - text: <code>smallestCommons([1, 13])</code>应该返回 360360。
    testString: assert.deepEqual(smallestCommons([1, 13]), 360360, '<code>smallestCommons([1, 13])</code>应该返回 360360。');
  - text: <code>smallestCommons([23, 18])</code>应该返回 6056820。
    testString: assert.deepEqual(smallestCommons([23, 18]), 6056820, '<code>smallestCommons([23, 18])</code>应该返回 6056820。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















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
              