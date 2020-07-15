---
id: 56533eb9ac21ba0edf2244d0
title: Comparison with the Equality Operator
challengeType: 1
videoUrl: 'https://scrimba.com/c/cKyVMAL'
forumTopicId: 16784
localeTitle: 相等运算符
---

## Description
<section id='description'>
在 JavaScript 中，有很多<dfn>相互比较的操作</dfn>。所有这些操作符都返回一个<code>true</code>或<code>false</code>值。
最基本的运算符是相等运算符：<code>==</code>。相等运算符比较两个值，如果它们是同等，返回<code>true</code>，如果它们不等，返回<code>false</code>。值得注意的是相等运算符不同于赋值运算符（<code>=</code>），赋值运算符是把等号右边的值赋给左边的变量。

```js
function equalityTest(myVal) {
  if (myVal == 10) {
     return "Equal";
  }
  return "Not Equal";
}
```

如果<code>myVal</code>等于<code>10</code>，相等运算符会返回<code>true</code>，因此大括号里面的代码会被执行，函数将返回<code>"Equal"</code>。否则，函数返回<code>"Not Equal"</code>。
在 JavaScript 中，为了让两个不同的<code>数据类型</code>（例如<code>数字</code>和<code>字符串</code>）的值可以作比较，它必须把一种类型转换为另一种类型。然而一旦这样做，它可以像下面这样来比较：

```js
1   ==  1   // true
1   ==  2   // false
1   == '1'  // true
"3" ==  3   // true
```

</section>

## Instructions
<section id='instructions'>
把<code>相等运算符</code>添加到指定的行，这样当<code>val</code>的值为<code>12</code>的时候，函数会返回"Equal"。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>testEqual(10)</code>应该返回 "Not Equal"。
    testString: assert(testEqual(10) === "Not Equal");
  - text: <code>testEqual(12)</code>应该返回 "Equal"。
    testString: assert(testEqual(12) === "Equal");
  - text: <code>testEqual("12")</code>应该返回 "Equal"。
    testString: assert(testEqual("12") === "Equal");
  - text: 你应该使用<code>==</code>运算符。
    testString: assert(code.match(/==/g) && !code.match(/===/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
function testEqual(val) {
  if (val) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testEqual(10);
```

</div>



</section>

## Solution
<section id='solution'>


```js
function testEqual(val) {
  if (val == 12) {
    return "Equal";
  }
  return "Not Equal";
}
```

</section>
