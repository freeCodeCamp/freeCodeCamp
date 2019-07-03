---
id: 5690307fddb111c6084545d7
title: Logical Order in If Else Statements
challengeType: 1

videoUrl: ''
localeTitle: Logical Order in If Else Statements
---

## Description
<section id='description'>
<code>if</code>、<code>else if</code>语句中代码的执行顺序是很重要的。
在条件判断语句中，代码的执行顺序是从上到下，所以你需要考虑清楚先执行哪一句，后执行哪一句。
这有两个例子。
第一个例子：
<blockquote>function foo(x) {<br>&nbsp;&nbsp;if (x < 1) {<br>&nbsp;&nbsp;&nbsp;&nbsp;return "Less than one";<br>&nbsp;&nbsp;} else if (x < 2) {<br>&nbsp;&nbsp;&nbsp;&nbsp;return "Less than two";<br>&nbsp;&nbsp;} else {<br>&nbsp;&nbsp;&nbsp;&nbsp;return "Greater than or equal to two";<br>&nbsp;&nbsp;}<br>}</blockquote>
第二个例子更改了代码的执行顺序：
<blockquote>function bar(x) {<br>&nbsp;&nbsp;if (x < 2) {<br>&nbsp;&nbsp;&nbsp;&nbsp;return "Less than two";<br>&nbsp;&nbsp;} else if (x < 1) {<br>&nbsp;&nbsp;&nbsp;&nbsp;return "Less than one";<br>&nbsp;&nbsp;} else {<br>&nbsp;&nbsp;&nbsp;&nbsp;return "Greater than or equal to two";<br>&nbsp;&nbsp;}<br>}</blockquote>
这两个函数看起来几乎一模一样，我们传一个值进去看看它们有什么区别。
<blockquote>foo(0) // "Less than one"<br>bar(0) // "Less than two"</blockquote>
</section>

## Instructions
<section id='instructions'>
更改函数的逻辑顺序以便通过所有的测试用例。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "<code>orderMyLogic(4)</code>应该返回 'Less than 5'"
    testString: assert(orderMyLogic(4) === "Less than 5", '<code>orderMyLogic(4)</code>应该返回 "Less than 5"');
  - text: "<code>orderMyLogic(6)</code>应该返回 'Less than 10'"
    testString: assert(orderMyLogic(6) === "Less than 10", '<code>orderMyLogic(6)</code>应该返回 "Less than 10"');
  - text: "<code>orderMyLogic(11)</code>应该返回 'Greater than or equal to 10'"
    testString: assert(orderMyLogic(11) === "Greater than or equal to 10", '<code>orderMyLogic(11)</code>应该返回 "Greater than or equal to 10"');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

## Solution
<section id='solution'>

```js
function orderMyLogic(val) {
  if(val < 5) {
    return "Less than 5";            
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}
```

</section>
              