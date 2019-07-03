---
id: 56533eb9ac21ba0edf2244da
title: Introducing Else Statements
challengeType: 1

videoUrl: ''
localeTitle: Introducing Else Statements
---

## Description
<section id='description'>
当<code>if</code>语句的条件为真，大括号里的代码执行，那如果条件为假呢？正常情况下什么也不会发生。使用else语句，可以执行当条件为假时相应的代码。
<blockquote>if (num > 10) {<br>&nbsp;&nbsp;return "Bigger than 10";<br>} else {<br>&nbsp;&nbsp;return "10 or Less";<br>}</blockquote>
</section>

## Instructions
<section id='instructions'>
请把多个<code>if</code>语句合并为一个<code>if/else</code>语句。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你应该只有一个<code>if</code>表达式
    testString: assert(code.match(/if/g).length === 1, '你应该只有一个<code>if</code>表达式');
  - text: 你应该使用一个<code>else</code>表达式
    testString: assert(/else/g.test(code), '你应该使用一个<code>else</code>表达式');
  - text: "<code>testElse(4)</code>应该返回 '5 or Smaller'"
    testString: assert(testElse(4) === "5 or Smaller", '<code>testElse(4)</code>应该返回 "5 or Smaller"');
  - text: "<code>testElse(5)</code>应该返回 '5 or Smaller'"
    testString: assert(testElse(5) === "5 or Smaller", '<code>testElse(5)</code>应该返回 "5 or Smaller"');
  - text: "<code>testElse(6)</code>应该返回 'Bigger than 5'"
    testString: assert(testElse(6) === "Bigger than 5", '<code>testElse(6)</code>应该返回 "Bigger than 5"');
  - text: "<code>testElse(10)</code>应该返回 'Bigger than 5'"
    testString: assert(testElse(10) === "Bigger than 5", '<code>testElse(10)</code>应该返回 "Bigger than 5"');
  - text: 不要修改上面和下面的代码
    testString: assert(/var result = "";/.test(code) && /return result;/.test(code), '不要修改上面和下面的代码');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

## Solution
<section id='solution'>

```js
function testElse(val) {
  var result = "";
  if(val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }
  return result;
}
```

</section>
              