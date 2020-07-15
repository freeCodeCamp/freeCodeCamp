---
id: 56533eb9ac21ba0edf2244d3
title: Comparison with the Strict Inequality Operator
challengeType: 1
videoUrl: 'https://scrimba.com/c/cKekkUy'
forumTopicId: 16791
localeTitle: 严格不等运算符
---

## Description
<section id='description'>
严格不相等运算符（<code>!==</code>）与全等运算符是相反的。这意味着严格不相等并返回<code>false</code>的地方，用严格相等运算符会返回<code>true</code>，<em>反之亦然</em>。严格不相等运算符不会转换值的数据类型。
<strong>示例</strong>

```js
3 !==  3   // false
3 !== '3'  // true
4 !==  3   // true
```

</section>

## Instructions
<section id='instructions'>
在<code>if</code>语句中，添加严格不相等运算符<code>!==</code>，这样如果<code>val</code>与<code>17</code>严格不相等的时候，函数会返回 "Not Equal"。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>testStrictNotEqual(17)</code>应该返回 "Equal"。
    testString: assert(testStrictNotEqual(17) === "Equal");
  - text: <code>testStrictNotEqual("17")</code>应该返回 "Not Equal"。
    testString: assert(testStrictNotEqual("17") === "Not Equal");
  - text: <code>testStrictNotEqual(12)</code>应该返回 "Not Equal"。
    testString: assert(testStrictNotEqual(12) === "Not Equal");
  - text: <code>testStrictNotEqual("bob")</code>应该返回 "Not Equal"。
    testString: assert(testStrictNotEqual("bob") === "Not Equal");
  - text: 应该使用 <code>!==</code> 运算符。
    testString: assert(code.match(/(val\s*!==\s*\d+)|(\d+\s*!==\s*val)/g).length > 0);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
function testStrictNotEqual(val) {
  if (val) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

// Change this value to test
testStrictNotEqual(10);
```

</div>



</section>

## Solution
<section id='solution'>


```js
function testStrictNotEqual(val) {
  if (val !== 17) {
    return "Not Equal";
  }
  return "Equal";
}
```

</section>
