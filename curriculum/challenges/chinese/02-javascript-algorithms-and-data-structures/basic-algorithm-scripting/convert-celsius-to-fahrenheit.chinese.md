---
id: 56533eb9ac21ba0edf2244b3
title: Convert Celsius to Fahrenheit
challengeType: 1
isRequired: true
videoUrl: ''
localeTitle: 将摄氏温度转换为华氏温度
---

## Description
<section id="description">从摄氏温度转换为华氏温度的算法是以摄氏度乘以<code>9/5</code>的温度加上<code>32</code> 。您将获得一个可变<code>celsius</code>表示摄氏温度。使用已定义的变量<code>fahrenheit</code>温度，并将其指定为相当于给定摄氏温度的华氏温度。使用上面提到的算法帮助将摄氏温度转换为华氏温度。不要过多担心函数和返回语句，因为它们将在未来的挑战中涵盖。目前，只使用您已经学过的运算符。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>convertToF(0)</code>应该返回一个数字
    testString: 'assert(typeof convertToF(0) === "number", "<code>convertToF(0)</code> should return a number");'
  - text: <code>convertToF(-30)</code>应该返回值<code>-22</code>
    testString: 'assert(convertToF(-30) === -22, "<code>convertToF(-30)</code> should return a value of <code>-22</code>");'
  - text: <code>convertToF(-10)</code>应该返回值<code>14</code>
    testString: 'assert(convertToF(-10) === 14, "<code>convertToF(-10)</code> should return a value of <code>14</code>");'
  - text: <code>convertToF(0)</code>应返回值<code>32</code>
    testString: 'assert(convertToF(0) === 32, "<code>convertToF(0)</code> should return a value of <code>32</code>");'
  - text: <code>convertToF(20)</code>应返回值<code>68</code>
    testString: 'assert(convertToF(20) === 68, "<code>convertToF(20)</code> should return a value of <code>68</code>");'
  - text: <code>convertToF(30)</code>应返回值<code>86</code>
    testString: 'assert(convertToF(30) === 86, "<code>convertToF(30)</code> should return a value of <code>86</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function convertToF(celsius) {
  let fahrenheit;
  return fahrenheit;
}

convertToF(30);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
