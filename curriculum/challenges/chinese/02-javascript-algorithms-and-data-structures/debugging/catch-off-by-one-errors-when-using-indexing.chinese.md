---
id: 587d7b86367417b2b2512b3b
title: Catch Off By One Errors When Using Indexing
challengeType: 1
videoUrl: ''
localeTitle: 使用索引时捕获一个错误
---

## Description
<section id="description">当您尝试定位字符串或数组的特定索引（切片或访问段）或循环索引时，会<code>Off by one errors</code> （有时称为OBOE）。 JavaScript索引从零开始，而不是一个，这意味着最后一个索引总是小于项目的长度。如果您尝试访问等于长度的索引，程序可能会抛出“索引超出范围”引用错误或打印<code>undefined</code> 。当您使用将索引范围作为参数的字符串或数组方法时，它有助于阅读文档并了解它们是否包含（指定索引处的项目是否是返回的一部分）。以下是一些错误的示例： <blockquote> let alphabet =“abcdefghijklmnopqrstuvwxyz”; <br>让len = alphabet.length; <br> for（let i = 0; i &lt;= len; i ++）{ <br> //最后循环一次太多次<br>的console.log（字母[I]）; <br> } <br> for（let j = 1; j &lt;len; j ++）{ <br> //循环一次太少次并错过索引0处的第一个字符<br>的console.log（字母[J]）; <br> } <br> for（let k = 0; k &lt;len; k ++）{ <br> // Goldilocks赞成 - 这是正确的<br>的console.log（字母表[K]）; <br> } </blockquote></section>

## Instructions
<section id="instructions">修复以下函数中的两个索引错误，以便将所有数字1到5打印到控制台。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的代码应该设置循环的初始条件，以便从第一个索引开始。
    testString: assert(code.match(/i\s*?=\s*?0\s*?;/g).length == 1);
  - text: 您的代码应该修复循环的初始条件，以便索引从0开始。
    testString: assert(!code.match(/i\s?=\s*?1\s*?;/g));
  - text: 您的代码应设置循环的终端条件，以便它停在最后一个索引处。
    testString: assert(code.match(/i\s*?<\s*?len\s*?;/g).length == 1);
  - text: 您的代码应该修复循环的终端条件，使其在长度之前停止在1。
    testString: assert(!code.match(/i\s*?<=\s*?len;/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function countToFive() {
  let firstFive = "12345";
  let len = firstFive.length;
  // Fix the line below
  for (let i = 1; i <= len; i++) {
  // Do not alter code below this line
    console.log(firstFive[i]);
  }
}

countToFive();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
