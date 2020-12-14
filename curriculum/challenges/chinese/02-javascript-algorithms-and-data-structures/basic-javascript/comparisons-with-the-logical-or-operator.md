---
id: 56533eb9ac21ba0edf2244d9
challengeType: 1
videoUrl: 'https://scrimba.com/c/cEPrGTN'
forumTopicId: 16800
title: 逻辑或运算符
---

## Description
<section id='description'>
只要<dfn>逻辑或</dfn>运算符<code>||</code>两边任何一个为<code>true</code>，那么它就返回<code>true</code>；否则返回<code>false</code>。
<dfn>逻辑或</dfn>运算符由两个管道符号（|）组成。这个按键位于退格键和回车键之间。
下面这样的语句你应该很熟悉：

```js
if (num > 10) {
  return "No";
}
if (num < 5) {
  return "No";
}
return "Yes";
```

只有当<code>num</code>大于等于 5 或小于等于 10 时，函数返回"Yes"。相同的逻辑可以简写成：

```js
if (num > 10 || num < 5) {
  return "No";
}
return "Yes";
```

</section>

## Instructions
<section id='instructions'>
请使用逻辑或运算符把两个 if 语句合并为一个 if 语句，如果<code>val</code>不在 10 和 20 之间(包括 10 和 20)，返回<code>"Outside"</code>。反之，返回<code>"Inside"</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你应该使用一次<code>||</code>操作符。
    testString: assert(code.match(/\|\|/g).length === 1);
  - text: 你应该只有一个<code>if</code>表达式。
    testString: assert(code.match(/if/g).length === 1);
  - text: <code>testLogicalOr(0)</code>应该返回 "Outside"。
    testString: assert(testLogicalOr(0) === "Outside");
  - text: <code>testLogicalOr(9)</code>应该返回 "Outside"。
    testString: assert(testLogicalOr(9) === "Outside");
  - text: <code>testLogicalOr(10)</code>应该返回 "Inside"。
    testString: assert(testLogicalOr(10) === "Inside");
  - text: <code>testLogicalOr(15)</code>应该返回 "Inside"。
    testString: assert(testLogicalOr(15) === "Inside");
  - text: <code>testLogicalOr(19)</code>应该返回 "Inside"。
    testString: assert(testLogicalOr(19) === "Inside");
  - text: <code>testLogicalOr(20)</code>应该返回 "Inside"。
    testString: assert(testLogicalOr(20) === "Inside");
  - text: <code>testLogicalOr(21)</code>应该返回 "Outside"。
    testString: assert(testLogicalOr(21) === "Outside");
  - text: <code>testLogicalOr(25)</code>应该返回 "Outside"。
    testString: assert(testLogicalOr(25) === "Outside");

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function testLogicalOr(val) {
  // Only change code below this line

  if (val) {
    return "Outside";
  }

  if (val) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

// Change this value to test
testLogicalOr(15);
```

</div>



</section>

## Solution
<section id='solution'>


```js
function testLogicalOr(val) {
  if (val < 10 || val > 20) {
    return "Outside";
  }
  return "Inside";
}
```

</section>
