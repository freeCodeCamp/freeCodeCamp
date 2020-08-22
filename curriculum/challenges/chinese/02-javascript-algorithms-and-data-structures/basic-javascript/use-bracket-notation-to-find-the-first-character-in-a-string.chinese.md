---
id: bd7123c9c549eddfaeb5bdef
title: Use Bracket Notation to Find the First Character in a String
challengeType: 1
videoUrl: 'https://scrimba.com/c/ca8JwhW'
forumTopicId: 18341
localeTitle: 使用方括号查找字符串中的第一个字符
---

## Description
<section id='description'>
方括号表示法是一种在字符串中的特定<code>index</code>（索引）处获取字符的方法。
大多数现代编程语言，如JavaScript，不同于人类从 1 开始计数。它们是从 0 开始计数，这被称为 <dfn>基于零</dfn> 的索引。
例如, 在单词 "Charles" 中索引 0 上的字符为 "C"，所以在<code>var firstName = "Charles"</code>中，你可以使用<code>firstName[0]</code>来获得第一个位置上的字符。
</section>

## Instructions
<section id='instructions'>
使用方括号获取变量<code>lastName</code>中的第一个字符，并赋给变量<code>firstLetterOfLastName</code>。
<strong>提示</strong><br>如果你遇到困难了，不妨看看变量<code>firstLetterOfFirstName</code>是如何赋值的。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>firstLetterOfLastName</code>的值应该是<code>L</code>。
    testString: assert(firstLetterOfLastName === 'L');
  - text: 你应该使用中括号。
    testString: assert(code.match(/firstLetterOfLastName\s*?=\s*?lastName\[.*?\]/));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var firstLetterOfFirstName = "";
var firstName = "Ada";

firstLetterOfFirstName = firstName[0];

// Setup
var firstLetterOfLastName = "";
var lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName;


```

</div>


### After Test
<div id='js-teardown'>

```js
(function(v){return v;})(firstLetterOfLastName);
```

</div>

</section>

## Solution
<section id='solution'>


```js
var firstLetterOfLastName = "";
var lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0];
```

</section>
