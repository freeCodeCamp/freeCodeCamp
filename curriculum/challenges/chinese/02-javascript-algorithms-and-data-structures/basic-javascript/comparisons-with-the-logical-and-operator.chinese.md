---
id: 56533eb9ac21ba0edf2244d8
title: Comparisons with the Logical And Operator
challengeType: 1
videoUrl: 'https://scrimba.com/c/cvbRVtr'
forumTopicId: 16799
localeTitle: 逻辑与运算符
---

## Description
<section id='description'>
有时你需要在一次判断中做多个操作。当且仅当运算符的左边和右边都是<code>true</code>，<dfn>逻辑与</dfn> 运算符（<code>&&</code>）才会返回<code>true</code>。
同样的效果可以通过 if 语句的嵌套来实现：

```js
if (num > 5) {
  if (num < 10) {
    return "Yes";
  }
}
return "No";
```

只有当<code>num</code>的值在 6 和 9 之间（包括 6 和 9）才会返回 "Yes"。相同的逻辑可被写为：

```js
if (num > 5 && num < 10) {
  return "Yes";
}
return "No";
```

</section>

## Instructions
<section id='instructions'>
请使用逻辑与运算符把两个 if 语句合并为一个 if 语句，如果<code>val</code>小于或等于<code>50</code>并且大于或等于<code>25</code>，返回<code>"Yes"</code>。否则，将返回<code>"No"</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你应该使用<code>&&</code>运算符一次。
    testString: assert(code.match(/&&/g).length === 1,);
  - text: 你应该只有一个<code>if</code>表达式。
    testString: assert(code.match(/if/g).length === 1);
  - text: <code>testLogicalAnd(0)</code>应该返回 "No"。
    testString: assert(testLogicalAnd(0) === "No");
  - text: <code>testLogicalAnd(24)</code>应该返回 "No"。
    testString: assert(testLogicalAnd(24) === "No");
  - text: <code>testLogicalAnd(25)</code>应该返回 "Yes"。
    testString: assert(testLogicalAnd(25) === "Yes");
  - text: <code>testLogicalAnd(30)</code>应该返回 "Yes"。
    testString: assert(testLogicalAnd(30) === "Yes");
  - text: <code>testLogicalAnd(50)</code>应该返回 "Yes"。
    testString: assert(testLogicalAnd(50) === "Yes");
  - text: <code>testLogicalAnd(51)</code>应该返回 "No"。
    testString: assert(testLogicalAnd(51) === "No");
  - text: <code>testLogicalAnd(75)</code>应该返回 "No"。
    testString: assert(testLogicalAnd(75) === "No");
  - text: <code>testLogicalAnd(80)</code>应该返回 "No"。
    testString: assert(testLogicalAnd(80) === "No");

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function testLogicalAnd(val) {
  // Only change code below this line

  if (val) {
    if (val) {
      return "Yes";
    }
  }

  // Only change code above this line
  return "No";
}

// Change this value to test
testLogicalAnd(10);
```

</div>



</section>

## Solution
<section id='solution'>


```js
function testLogicalAnd(val) {
  if (val >= 25 && val <= 50) {
    return "Yes";
  }
  return "No";
}
```

</section>
