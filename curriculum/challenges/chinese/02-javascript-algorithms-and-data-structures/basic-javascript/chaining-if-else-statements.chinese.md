---
id: 56533eb9ac21ba0edf2244dc
title: Chaining If Else Statements
challengeType: 1

videoUrl: ''
localeTitle: Chaining If Else Statements
---

## Description
<section id='description'>
<code>if/else</code>语句串联在一起可以实现复杂的逻辑，这是多个<code>if/else if</code>语句串联在一起的伪代码：
<blockquote>if (<em>条件 1</em>) {<br>&nbsp;&nbsp;<em>语句 1</em><br>} else if (<em>条件 2</em>) {<br>&nbsp;&nbsp;<em>语句 2</em><br>} else if (<em>条件 3</em>) {<br>&nbsp;&nbsp;<em>语句 3</em><br>. . .<br>} else {<br>&nbsp;&nbsp;<em>语句 N</em><br>}</blockquote>
</section>

## Instructions
<section id='instructions'>
把<code>if</code>/<code>else if</code>语句串联起来实现下面的逻辑：
<code>num &lt;   5</code>- return "Tiny"<br><code>num &lt;  10</code>- return "Small"<br><code>num &lt; 15</code>- return "Medium"<br><code>num &lt; 20</code>- return "Large"<br><code>num >= 20</code> - return "Huge"
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你应该有至少 4 个<code>else</code>表达式
    testString: assert(code.match(/else/g).length > 3, '你应该有至少 4 个<code>else</code>表达式');
  - text: 你应该有至少 4 个<code>if</code>表达式
    testString: assert(code.match(/if/g).length > 3, '你应该有至少 4 个<code>if</code>表达式');
  - text: 你应该有至少 1 个<code>return</code>表达式
    testString: assert(code.match(/return/g).length >= 1, '你应该有至少 1 个<code>return</code>表达式');
  - text: "<code>testSize(0)</code>应该返回 'Tiny'"
    testString: assert(testSize(0) === "Tiny", '<code>testSize(0)</code>应该返回 "Tiny"');
  - text: "<code>testSize(4)</code>应该返回 'Tiny'"
    testString: assert(testSize(4) === "Tiny", '<code>testSize(4)</code>应该返回 "Tiny"');
  - text: "<code>testSize(5)</code>应该返回 'Small'"
    testString: assert(testSize(5) === "Small", '<code>testSize(5)</code>应该返回 "Small"');
  - text: "<code>testSize(8)</code>应该返回 'Small'"
    testString: assert(testSize(8) === "Small", '<code>testSize(8)</code>应该返回 "Small"');
  - text: "<code>testSize(10)</code>应该返回 'Medium'"
    testString: assert(testSize(10) === "Medium", '<code>testSize(10)</code>应该返回 "Medium"');
  - text: "<code>testSize(14)</code>应该返回 'Medium'"
    testString: assert(testSize(14) === "Medium", '<code>testSize(14)</code>应该返回 "Medium"');
  - text: "<code>testSize(15)</code>应该返回 'Large'"
    testString: assert(testSize(15) === "Large", '<code>testSize(15)</code>应该返回 "Large"');
  - text: "<code>testSize(17)</code>应该返回 'Large'"
    testString: assert(testSize(17) === "Large", '<code>testSize(17)</code>应该返回 "Large"');
  - text: "<code>testSize(20)</code>应该返回 'Huge'"
    testString: assert(testSize(20) === "Huge", '<code>testSize(20)</code>应该返回 "Huge"');
  - text: "<code>testSize(25)</code>应该返回 'Huge'"
    testString: assert(testSize(25) === "Huge", '<code>testSize(25)</code>应该返回 "Huge"');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

## Solution
<section id='solution'>

```js
function testSize(num) {
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else {
    return "Huge";
  }
}
```

</section>
              