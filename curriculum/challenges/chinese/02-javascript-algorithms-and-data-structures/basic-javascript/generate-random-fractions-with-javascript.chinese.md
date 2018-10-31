---
id: cf1111c1c11feddfaeb9bdef
title: Generate Random Fractions with JavaScript
challengeType: 1
videoUrl: ''
localeTitle: 使用JavaScript生成随机分数
---

## Description
<section id="description">随机数对于创建随机行为很有用。 JavaScript有一个<code>Math.random()</code>函数，它生成一个介于<code>0</code> （含）和不高达<code>1</code> （独占）之间的随机十进制数。因此<code>Math.random()</code>可以返回<code>0</code>但永远不会返回<code>1</code> <strong>Note</strong> <br> <a href="storing-values-with-the-assignment-operator" target="_blank">与使用Equal运算符存储值</a>一样，所有函数调用将在<code>return</code>执行之前解析，因此我们可以<code>return</code> <code>Math.random()</code>函数的值。 </section>

## Instructions
<section id="instructions">更改<code>randomFraction</code>以返回随机数而不是返回<code>0</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>randomFraction</code>应该返回一个随机数。
    testString: 'assert(typeof randomFraction() === "number", "<code>randomFraction</code> should return a random number.");'
  - text: <code>randomFraction</code>返回的<code>randomFraction</code>应该是小数。
    testString: 'assert((randomFraction()+""). match(/\./g), "The number returned by <code>randomFraction</code> should be a decimal.");'
  - text: 您应该使用<code>Math.random</code>来生成随机十进制数。
    testString: 'assert(code.match(/Math\.random/g).length >= 0, "You should be using <code>Math.random</code> to generate the random decimal number.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function randomFraction() {

  // Only change code below this line.

  return 0;

  // Only change code above this line.
}

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
