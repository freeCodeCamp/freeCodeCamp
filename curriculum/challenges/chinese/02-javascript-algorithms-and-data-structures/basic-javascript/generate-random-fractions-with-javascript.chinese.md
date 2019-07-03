---
id: cf1111c1c11feddfaeb9bdef
title: Generate Random Fractions with JavaScript
challengeType: 1

videoUrl: ''
localeTitle: Generate Random Fractions with JavaScript
---

## Description
<section id='description'>
随机数非常适合用来创建随机行为。
<code>Math.random()</code>用来生成一个在<code>0</code>（包括 0）到<code>1</code>不包括 1）之间的随机小数，因此<code>Math.random()</code>可能返回 0 但绝不会返回 1。
<strong>提示</strong><br>这一节讲过<a href='storing-values-with-the-assignment-operator' target='_blank'>Storing Values with the Equal Operator</a>，所有函数调用将在<code>return</code>执行之前解析，因此我们可以返回<code>Math.random()</code>函数的值。
</section>

## Instructions
<section id='instructions'>
更改<code>randomFraction</code>使其返回一个随机数而不是<code>0</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>randomFraction</code>应该返回一个随机数
    testString: assert(typeof randomFraction() === "number", '<code>randomFraction</code>应该返回一个随机数');
  - text: <code>randomFraction</code>应该返回一个小数
    testString: assert((randomFraction()+''). match(/\./g), '<code>randomFraction</code>应该返回一个小数');
  - text: 需要使用<code>Math.random</code>生成随机的小数
    testString: assert(code.match(/Math\.random/g).length >= 0, '需要使用<code>Math.random</code>生成随机的小数');

```

</section>

## Challenge Seed
<section id='challengeSeed'>














### After Test

<div id='js-teardown'>

```js
(function(){return randomFraction();})();
```

</div>

</section>

## Solution
<section id='solution'>

```js
function randomFraction() {
  return Math.random();
}
```

</section>
              