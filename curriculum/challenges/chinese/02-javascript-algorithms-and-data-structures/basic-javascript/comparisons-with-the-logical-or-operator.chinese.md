---
id: 56533eb9ac21ba0edf2244d9
title: Comparisons with the Logical Or Operator
challengeType: 1

videoUrl: ''
localeTitle: Comparisons with the Logical Or Operator
---

## Description
<section id='description'>
只要<dfn>逻辑或</dfn>运算符<code>||</code>两边任何一个为<code>true</code>，那么它就返回<code>true</code>；否则返回<code>false</code>。
<dfn>逻辑或</dfn>运算符由两个管道符号（|）组成。这个按键位于退格键和回车键之间。
下面这样的语句你应该很熟悉：
<blockquote>if (num > 10) {<br>&nbsp;&nbsp;return "No";<br>}<br>if (num < 5) {<br>&nbsp;&nbsp;return "No";<br>}<br>return "Yes";</blockquote>
只有当<code>num</code>大于等于 5 或小于等于 10 时，函数返回"Yes"。相同的逻辑可以简写成：
<blockquote>if (num > 10 || num < 5) {<br>&nbsp;&nbsp;return "No";<br>}<br>return "Yes";</blockquote>
</section>

## Instructions
<section id='instructions'>
请使用逻辑或运算符把两个 if 语句合并为一个 if 语句，如果<code>val</code>不在 10 和 20 之间(包括 10 和 20)，返回<code>"Outside"</code>。反之，返回<code>"Inside"</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你应该使用一次<code>||</code>操作符
    testString: assert(code.match(/\|\|/g).length === 1, '你应该使用一次<code>||</code>操作符');
  - text: 你应该只有一个<code>if</code>表达式
    testString: assert(code.match(/if/g).length === 1, '你应该只有一个<code>if</code>表达式');
  - text: "<code>testLogicalOr(0)</code>应该返回 'Outside'"
    testString: assert(testLogicalOr(0) === "Outside", '<code>testLogicalOr(0)</code>应该返回 "Outside"');
  - text: "<code>testLogicalOr(9)</code>应该返回 'Outside'"
    testString: assert(testLogicalOr(9) === "Outside", '<code>testLogicalOr(9)</code>应该返回 "Outside"');
  - text: "<code>testLogicalOr(10)</code>应该返回 'Inside'"
    testString: assert(testLogicalOr(10) === "Inside", '<code>testLogicalOr(10)</code>应该返回 "Inside"');
  - text: "<code>testLogicalOr(15)</code>应该返回 'Inside'"
    testString: assert(testLogicalOr(15) === "Inside", '<code>testLogicalOr(15)</code>应该返回 "Inside"');
  - text: "<code>testLogicalOr(19)</code>应该返回 'Inside'"
    testString: assert(testLogicalOr(19) === "Inside", '<code>testLogicalOr(19)</code>应该返回 "Inside"');
  - text: "<code>testLogicalOr(20)</code>应该返回 'Inside'"
    testString: assert(testLogicalOr(20) === "Inside", '<code>testLogicalOr(20)</code>应该返回 "Inside"');
  - text: "<code>testLogicalOr(21)</code>应该返回 'Outside'"
    testString: assert(testLogicalOr(21) === "Outside", '<code>testLogicalOr(21)</code>应该返回 "Outside"');
  - text: "<code>testLogicalOr(25)</code>应该返回 'Outside'"
    testString: assert(testLogicalOr(25) === "Outside", '<code>testLogicalOr(25)</code>应该返回 "Outside"');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















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
              