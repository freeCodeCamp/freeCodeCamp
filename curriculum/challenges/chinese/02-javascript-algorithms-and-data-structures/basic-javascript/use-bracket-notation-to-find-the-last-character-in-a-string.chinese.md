---
id: bd7123c9c451eddfaeb5bdef
title: Use Bracket Notation to Find the Last Character in a String
challengeType: 1
videoUrl: 'https://scrimba.com/c/cBZQGcv'
forumTopicId: 18342
localeTitle: 使用方括号查找字符串中的最后一个字符
---

## Description
<section id='description'>
要获取字符串的最后一个字符，可以用字符串的长度减 1 的索引值。
例如，在<code>var firstName = "Charles"</code>中，你可以这样操作<code>firstName[firstName.length - 1]</code>来得到字符串的最后的一个字符。
</section>

## Instructions
<section id='instructions'>
使用<dfn>方括号<dfn来取得<code>lastName</code>变量中的最后一个字符。
<strong>提示</strong><br>如果你遇到困难了，不妨看看在<code>lastLetterOfFirstName</code>变量上是怎么做的。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>lastLetterOfLastName</code>应该是"e"。
    testString: assert(lastLetterOfLastName === "e");
  - text: 你需要使用<code>.length</code>获取最后一个字符。
    testString: assert(code.match(/\.length/g).length === 2);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var firstName = "Ada";
var lastLetterOfFirstName = firstName[firstName.length - 1];

// Setup
var lastName = "Lovelace";

// Only change code below this line.
var lastLetterOfLastName = lastName;


```

</div>


### After Test
<div id='js-teardown'>

```js
(function(v){return v;})(lastLetterOfLastName);
```

</div>

</section>

## Solution
<section id='solution'>


```js
var firstName = "Ada";
var lastLetterOfFirstName = firstName[firstName.length - 1];

var lastName = "Lovelace";
var lastLetterOfLastName = lastName[lastName.length - 1];
```

</section>
