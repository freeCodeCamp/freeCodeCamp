---
id: 56533eb9ac21ba0edf2244d1
title: Comparison with the Strict Equality Operator
challengeType: 1

videoUrl: ''
localeTitle: Comparison with the Strict Equality Operator
---

## Description
<section id='description'>
严格相等运算符（<code>===</code>）是相对相等操作符（<code>==</code>）的另一种比较操作符。与相等操作符不同的是，它会同时比较元素的值和<code>数据类型</code>。
<strong>示例</strong>
<blockquote>3 === 3   // true<br>3 === '3' // false</blockquote>
<code>3</code>是一个<code>数字</code>类型的，而<code>'3'</code>是一个<code>字符串</code>类型的，所以 3 不全等于 '3'。
</section>

## Instructions
<section id='instructions'>
在<code>if</code>语句值使用严格相等运算符，这样当<code>val</code>严格等于7的时候，函数会返回"Equal"。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "<code>testStrict(10)</code>应该返回 'Not Equal'"
    testString: assert(testStrict(10) === "Not Equal", '<code>testStrict(10)</code>应该返回 "Not Equal"');
  - text: "<code>testStrict(7)</code>应该返回 'Equal'"
    testString: assert(testStrict(7) === "Equal", '<code>testStrict(7)</code>应该返回 "Equal"');
  - text: "<code>testStrict('7')</code>应该返回 'Not Equal'"
    testString: assert(testStrict("7") === "Not Equal", '<code>testStrict("7")</code>应该返回 "Not Equal"');
  - text: 你应该使用<code>===</code>运算符
    testString: assert(code.match(/(val\s*===\s*\d+)|(\d+\s*===\s*val)/g).length > 0, '你应该使用<code>===</code>运算符');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

## Solution
<section id='solution'>

```js
function testStrict(val) {
  if (val === 7) {
    return "Equal";
  }
  return "Not Equal";
}
```

</section>
              