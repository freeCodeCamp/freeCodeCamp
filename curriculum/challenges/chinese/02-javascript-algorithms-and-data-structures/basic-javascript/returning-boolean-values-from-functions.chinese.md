---
id: 5679ceb97cbaa8c51670a16b
title: Returning Boolean Values from Functions
challengeType: 1

videoUrl: ''
localeTitle: Returning Boolean Values from Functions
---

## Description
<section id='description'>
你应该还记得<a href="javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-equality-operator" target="_blank">相等运算符</a>这道挑战题。在那里我们提到，所有比较操作符都会返回 boolean：要么是<code>true</code>要么是<code>false</code>。
有时人们通过 if/else 语句来做比较然后返回<code>true</code>或<code>false</code>。
<blockquote>function isEqual(a,b) {<br>&nbsp;&nbsp;if (a === b) {<br>&nbsp;&nbsp;&nbsp;&nbsp;return true;<br>&nbsp;&nbsp;} else {<br>&nbsp;&nbsp;&nbsp;&nbsp;return false;<br>&nbsp;&nbsp;}<br>}</blockquote>
有一个更好的方法，因为<code>===</code>总是返回<code>true</code>或<code>false</code>，所以我们可以直接返回比较的结果：
<blockquote>function isEqual(a,b) {<br>&nbsp;&nbsp;return a === b;<br>}</blockquote>
</section>

## Instructions
<section id='instructions'>
移除<code>isLess</code>函数的<code>if/else</code>语句但不影响函数的功能。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>isLess(10,15)</code>应该返回 <code>true</code>
    testString: assert(isLess(10,15) === true, '<code>isLess(10,15)</code>应该返回 <code>true</code>');
  - text: <code>isLess(15,10)</code>应该返回 <code>false</code>
    testString: assert(isLess(15, 10) === false, '<code>isLess(15,10)</code>应该返回 <code>false</code>');
  - text: You should not use any <code>if</code> or <code>else</code> statements
    testString: assert(!/if|else/g.test(code), '不要使用<code>if</code>或<code>else</code>表达式');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

## Solution
<section id='solution'>

```js
function isLess(a, b) {
  return a < b;
}
```

</section>
              