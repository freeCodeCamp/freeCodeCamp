---
id: 5c3dda8b4d8df89bea71600f
title: Check For Mixed Grouping of Characters
challengeType: 1
forumTopicId: 301339
localeTitle: 检查混合字符组
---

## Description
<section id='description'>
有时候我们想使用正则表达式里的括号 <code>()</code> 来检查字符组。
如果想在字符串找到 <code>Penguin</code> 或 <code>Pumpkin</code>，可以这个正则表达式：<code>/P(engu|umpk)in/g</code>。
然后使用 <code>test()</code> 方法检查 test 字符串里面是否包含字符组。

```js
let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/g;
testRegex.test(testStr);
// Returns true
```

</section>

## Instructions
<section id='instructions'>
完善正则表达式，使其以区分大小写的方式检查 <code>Franklin Roosevelt</code> 或 <code>Eleanor Roosevelt</code> 的名字，并且应该忽略 middle names。
然后完善代码，使创建的正则检查 <code>myString</code>，根据正则是否匹配返回 <code>true</code> 或 <code>false</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 正则 <code>myRegex</code> 测试 <code>Franklin D. Roosevelt</code> 应该返回 <code>true</code>。 
    testString: myRegex.lastIndex = 0; assert(myRegex.test('Franklin D. Roosevelt'));
  - text: 正则 <code>myRegex</code> 测试 <code>Eleanor Roosevelt</code> 应该返回 <code>true</code>。
    testString: myRegex.lastIndex = 0; assert(myRegex.test('Eleanor Roosevelt'));
  - text: 正则 <code>myRegex</code> 测试 <code>Franklin Rosevelt</code> 应该返回 <code>false</code>。
    testString: myRegex.lastIndex = 0; assert(!myRegex.test('Franklin Rosevelt'));
  - text: 应该使用 <code>.test()</code> 来测试正则。
    testString: assert(code.match(/myRegex.test\(\s*myString\s*\)/));
  - text: result 应该返回 <code>true</code>。
    testString: assert(result === true);
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let myString = "Eleanor Roosevelt";
let myRegex = /False/; // Change this line
let result = false; // Change this line
// After passing the challenge experiment with myString and see how the grouping works
```

</div>



</section>

## Solution
<section id='solution'>

```js
let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor).*Roosevelt/;
let result = myRegex.test(myString);
```

</section>
