---
id: cf1391c1c11feddfaeb4bdef
title: Create Decimal Numbers with JavaScript
challengeType: 1
videoUrl: ''
localeTitle: 使用JavaScript创建十进制数
---

## Description
<section id="description">我们也可以在变量中存储十进制数。十进制数有时称为<dfn>浮点数</dfn>或<dfn>浮点数</dfn> 。 <strong>注意</strong> <br>并非所有实数都可以准确地以<dfn>浮点</dfn>表示。这可能导致舍入错误。 <a href="https://en.wikipedia.org/wiki/Floating_point#Accuracy_problems" target="_blank">细节在这里</a> 。 </section>

## Instructions
<section id="instructions">创建一个变量<code>myDecimal</code>并给它一个带小数部分的十进制值（例如<code>5.7</code> ）。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myDecimal</code>应该是一个数字。
    testString: 'assert(typeof myDecimal === "number", "<code>myDecimal</code> should be a number.");'
  - text: <code>myDecimal</code>应该有一个小数点
    testString: 'assert(myDecimal % 1 != 0, "<code>myDecimal</code> should have a decimal point"); '

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var ourDecimal = 5.7;

// Only change code below this line

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
</section>
