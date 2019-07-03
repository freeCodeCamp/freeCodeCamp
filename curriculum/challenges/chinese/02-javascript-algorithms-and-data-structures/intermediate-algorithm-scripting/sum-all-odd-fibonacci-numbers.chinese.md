---
id: a5229172f011153519423690
title: Sum All Odd Fibonacci Numbers
challengeType: 5
isRequired: true
videoUrl: ''
localeTitle: Sum All Odd Fibonacci Numbers
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
  - text: <code>sumFibs(1)</code>应该返回一个数字。
    testString: assert(typeof sumFibs(1) === "number", '<code>sumFibs(1)</code>应该返回一个数字。');
  - text: <code>sumFibs(1000)</code>应该返回 1785。
    testString: assert(sumFibs(1000) === 1785, '<code>sumFibs(1000)</code>应该返回 1785。');
  - text: <code>sumFibs(4000000)</code>应该返回 4613732。
    testString: assert(sumFibs(4000000) === 4613732, '<code>sumFibs(4000000)</code>应该返回 4613732。');
  - text: <code>sumFibs(4)</code>应该返回 5。
    testString: assert(sumFibs(4) === 5, '<code>sumFibs(4)</code>应该返回 5。');
  - text: <code>sumFibs(75024)</code>应该返回 60696。
    testString: assert(sumFibs(75024) === 60696, '<code>sumFibs(75024)</code>应该返回 60696。');
  - text: <code>sumFibs(75025)</code>应该返回 135721。
    testString: assert(sumFibs(75025) === 135721, '<code>sumFibs(75025)</code>应该返回 135721。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

## Solution
<section id='solution'>

```js
function sumFibs(num) {
  var a = 1; 
  var b = 1;
  var s = 0;
  while (a <= num) {
    if (a % 2 !== 0) {   
      s += a; 
    }
    a = [b, b=b+a][0];
  }
  return s;
}
```

</section>
              