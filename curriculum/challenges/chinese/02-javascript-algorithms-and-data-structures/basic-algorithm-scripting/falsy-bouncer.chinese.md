---
id: adf08ec01beb4f99fc7a68f2
title: Falsy Bouncer
challengeType: 5
isRequired: true
videoUrl: ''
localeTitle: Falsy Bouncer
---

## Description
<section id='description'>
将摄氏度转换为华氏度的算法为：摄氏度 × <code>9/5 + 32</code>
输入参数 <code>celsius</code> 代表一个摄氏温度值。请你根据上述转换公式，将已定义好的 <code>fahrenheit</code> 变量赋值为对应的华氏温度的值。
你不需要顾虑 function 和 return 语句，它们会在之后的挑战中予以介绍。现在，你只需要使用你已学过的运算符。
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "<code>bouncer([7, 'ate', '', false, 9])</code> 应该返回 <code>[7, 'ate', 9]</code>。"
    testString: assert.deepEqual(bouncer([7, "ate", "", false, 9]), [7, "ate", 9], '<code>bouncer([7, "ate", "", false, 9])</code> 应该返回 <code>[7, "ate", 9]</code>。');
  - text: "<code>bouncer(['a', 'b', 'c'])</code> 应该返回 <code>['a', 'b', 'c']</code>。"
    testString: assert.deepEqual(bouncer(["a", "b", "c"]), ["a", "b", "c"], '<code>bouncer(["a", "b", "c"])</code> 应该返回 <code>["a", "b", "c"]</code>。');
  - text: "<code>bouncer([false, null, 0, NaN, undefined, ''])</code> 应该返回 <code>[]</code>。"
    testString: assert.deepEqual(bouncer([false, null, 0, NaN, undefined, ""]), [], '<code>bouncer([false, null, 0, NaN, undefined, ""])</code> 应该返回 <code>[]</code>。');
  - text: <code>bouncer([1, null, NaN, 2, undefined])</code> 应该返回 <code>[1, 2]</code>。
    testString: assert.deepEqual(bouncer([1, null, NaN, 2, undefined]), [1, 2], '<code>bouncer([1, null, NaN, 2, undefined])</code> 应该返回 <code>[1, 2]</code>。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

## Solution
<section id='solution'>

```js
function bouncer(arr) {
  return arr.filter(e => e);
}

bouncer([7, "ate", "", false, 9]);

```

</section>
              