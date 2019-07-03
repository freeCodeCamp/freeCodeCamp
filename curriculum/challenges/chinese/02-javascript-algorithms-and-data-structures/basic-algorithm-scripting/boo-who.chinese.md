---
id: a77dbc43c33f39daa4429b4f
title: Boo who
challengeType: 5
isRequired: true
videoUrl: ''
localeTitle: Boo who
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
  - text: <code>booWho(true)</code> 应该返回 true。
    testString: assert.strictEqual(booWho(true), true, '<code>booWho(true)</code> 应该返回 true。');
  - text: <code>booWho(false)</code> 应该返回 true。
    testString: assert.strictEqual(booWho(false), true, '<code>booWho(false)</code> 应该返回 true。');
  - text: <code>booWho([1, 2, 3])</code> 应该返回 false。
    testString: assert.strictEqual(booWho([1, 2, 3]), false, '<code>booWho([1, 2, 3])</code> 应该返回 false。');
  - text: <code>booWho([].slice)</code> 应该返回 false。
    testString: assert.strictEqual(booWho([].slice), false, '<code>booWho([].slice)</code> 应该返回 false。');
  - text: '<code>booWho({ "a": 1 })</code> 应该返回 false。'
    testString: 'assert.strictEqual(booWho({ "a": 1 }), false, "<code>booWho({ "a": 1 })</code> 应该返回 false。");'
  - text: <code>booWho(1)</code> 应该返回 false。
    testString: assert.strictEqual(booWho(1), false, '<code>booWho(1)</code> 应该返回 false。');
  - text: <code>booWho(NaN)</code> 应该返回 false。
    testString: assert.strictEqual(booWho(NaN), false, '<code>booWho(NaN)</code> 应该返回 false。');
  - text: "<code>booWho('a')</code> 应该返回 false。"
    testString: assert.strictEqual(booWho("a"), false, '<code>booWho("a")</code> 应该返回 false。');
  - text: "<code>booWho('true')</code> 应该返回 false。"
    testString: assert.strictEqual(booWho("true"), false, '<code>booWho("true")</code> 应该返回 false。');
  - text: "<code>booWho('false')</code> 应该返回 false。"
    testString: assert.strictEqual(booWho("false"), false, '<code>booWho("false")</code> 应该返回 false。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

## Solution
<section id='solution'>

```js
function booWho(bool) {
  return typeof bool === "boolean";
}

booWho(null);
```

</section>
              