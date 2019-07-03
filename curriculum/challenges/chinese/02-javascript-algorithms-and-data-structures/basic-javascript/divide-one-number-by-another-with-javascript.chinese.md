---
id: cf1111c1c11feddfaeb6bdef
title: Divide One Number by Another with JavaScript
challengeType: 1

videoUrl: ''
localeTitle: Divide One Number by Another with JavaScript
---

## Description
<section id='description'>
我们可以在 JavaScript 中做除法运算。
JavaScript 中使用<code>/</code>符号做除法运算。

<strong>示例</strong>
<blockquote>myVar = 16 / 2; // 赋值为8</blockquote>

</section>

## Instructions
<section id='instructions'>
改变数值<code>0</code>来让变量<code>quotient</code>的值等于<code>2</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 要使<code>quotient</code>的值等于 2。
    testString: assert(quotient === 2, '要使<code>quotient</code>的值等于 2。');
  - text: 使用<code>/</code>运算符。
    testString: assert(/\d+\s*\/\s*\d+/.test(code), '使用<code>/</code>运算符。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>














### After Test

<div id='js-teardown'>

```js
(function(z){return 'quotient = '+z;})(quotient);
```

</div>

</section>

## Solution
<section id='solution'>

```js
var quotient = 66 / 33;
```

</section>
              