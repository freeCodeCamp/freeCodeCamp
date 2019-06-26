---
id: 56533eb9ac21ba0edf2244aa
title: Understanding Uninitialized Variables
challengeType: 1
videoUrl: ''
localeTitle: 了解未初始化的变量
---

## Description
<section id="description">声明JavaScript变量时，它们的初始值为<code>undefined</code> 。如果对<code>undefined</code>变量进行数学运算，则结果将为<code>NaN</code> ，表示<dfn>“非数字”</dfn> 。如果将字符串与<code>undefined</code>变量连接起来，您将得到一个<code>&quot;undefined&quot;</code>的文字<dfn>字符串</dfn> 。 </section>

## Instructions
<section id="instructions">初始化三个变量<code>a</code> ， <code>b</code>和<code>c</code>与<code>5</code> ， <code>10</code> ，和<code>&quot;I am a&quot;</code>分别让他们不会<code>undefined</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 測試文本
    testString: assert(true);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Initialize these three variables
var a;
var b;
var c;

// Do not change code below this line

a = a + 1;
b = b + 5;
c = c + " String!";

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
