---
id: a97fd23d9b809dac9921074f
title: Arguments Optional
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: 参数可选
---

## Description
<section id="description">创建一个将两个参数相加的函数。如果只提供了一个参数，则返回一个需要一个参数并返回总和的函数。例如， <code>addTogether(2, 3)</code>应返回<code>5</code> ， <code>addTogether(2)</code>应返回一个函数。使用单个参数调用此返回函数将返回总和： <code>var sumTwoAnd = addTogether(2);</code> <code>sumTwoAnd(3)</code>返回<code>5</code> 。如果任一参数不是有效数字，则返回undefined。如果卡住，请记得使用<a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> 。尝试配对程序。编写自己的代码。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>addTogether(2, 3)</code>应该返回5。'
    testString: assert.deepEqual(addTogether(2, 3), 5);
  - text: <code>addTogether(2)(3)</code>应该返回5。
    testString: assert.deepEqual(addTogether(2)(3), 5);
  - text: '<code>addTogether(&quot;http://bit.ly/IqT6zt&quot;)</code>应返回undefined。'
    testString: assert.isUndefined(addTogether("http://bit.ly/IqT6zt"));
  - text: '<code>addTogether(2, &quot;3&quot;)</code>应返回undefined。'
    testString: assert.isUndefined(addTogether(2, "3"));
  - text: '<code>addTogether(2)([3])</code>应返回undefined。'
    testString: assert.isUndefined(addTogether(2)([3]));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function addTogether() {
  return false;
}

addTogether(2,3);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
