---
id: a6e40f1041b06c996f7b2406
challengeType: 5
videoUrl: ''
title: Finders Keepers
---

## Description
<section id="description">创建一个查看数组（第一个参数）的函数，并返回数组中传递真值测试的第一个元素（第二个参数）。如果没有元素通过测试，则返回undefined。如果卡住，请记得使用<a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> 。尝试配对程序。编写自己的代码。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })</code>应该返回8。'
    testString: assert.strictEqual(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }), 8);
  - text: '<code>findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })</code>应返回undefined。'
    testString: assert.strictEqual(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }), undefined);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function findElement(arr, func) {
  let num = 0;
  return num;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
