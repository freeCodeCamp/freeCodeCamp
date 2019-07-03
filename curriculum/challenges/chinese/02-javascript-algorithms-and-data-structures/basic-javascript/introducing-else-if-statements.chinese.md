---
id: 56533eb9ac21ba0edf2244db
title: Introducing Else If Statements
challengeType: 1

videoUrl: ''
localeTitle: Introducing Else If Statements
---

## Description
<section id='description'>
如果你有多个条件语句，你可以通过<code>else if</code>语句把<code>if</code>语句链起来。
<blockquote>if (num > 15) {<br>  return "Bigger than 15";<br>} else if (num < 5) {<br>  return "Smaller than 5";<br>} else {<br>  return "Between 5 and 15";<br>}</blockquote>
</section>

## Instructions
<section id='instructions'>
使用<code>else if</code>实现同样的效果。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你应该至少有两个<code>else</code>表达式
    testString: assert(code.match(/else/g).length > 1, '你应该至少有两个<code>else</code>表达式');
  - text: 你应该至少有两个<code>if</code>表达式
    testString: assert(code.match(/if/g).length > 1, '你应该至少有两个<code>if</code>表达式');
  - text: "<code>testElseIf(0)</code>应该返回 'Smaller than 5'"
    testString: assert(testElseIf(0) === "Smaller than 5", '<code>testElseIf(0)</code>应该返回 "Smaller than 5"');
  - text: "<code>testElseIf(5)</code>应该返回 'Between 5 and 10'"
    testString: assert(testElseIf(5) === "Between 5 and 10", '<code>testElseIf(5)</code>应该返回 "Between 5 and 10"');
  - text: "<code>testElseIf(7)</code>应该返回 'Between 5 and 10'"
    testString: assert(testElseIf(7) === "Between 5 and 10", '<code>testElseIf(7)</code>应该返回 "Between 5 and 10"');
  - text: "<code>testElseIf(10)</code>应该返回 'Between 5 and 10'"
    testString: assert(testElseIf(10) === "Between 5 and 10", '<code>testElseIf(10)</code>应该返回 "Between 5 and 10"');
  - text: "<code>testElseIf(12)</code>应该返回 'Greater than 10'"
    testString: assert(testElseIf(12) === "Greater than 10", '<code>testElseIf(12)</code>应该返回 "Greater than 10"');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

## Solution
<section id='solution'>

```js
function testElseIf(val) {
  if(val > 10) {
    return "Greater than 10";
  } else if(val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}
```

</section>
              