---
id: bd7123c9c452eddfaeb5bdef
title: Use Bracket Notation to Find the Nth-to-Last Character in a String
challengeType: 1
videoUrl: 'https://scrimba.com/c/cw4vkh9'
forumTopicId: 18344
localeTitle: 使用方括号查找字符串中的第N个字符到最后一个字符
---

## Description
<section id='description'>
我们既可以获取字符串的最后一个字符，也可以用获取字符串的倒数第N个字符。
例如，你可以这样<code>firstName[firstName.length - 3]</code>操作来获得<code>var firstName = "Charles"</code>字符串中的倒数第三个字符。
</section>

## Instructions
<section id='instructions'>
使用<dfn>方括号</dfn>来获得<code>lastName</code>字符串中的倒数第二个字符。
<strong>提示</strong><br>如果你遇到困难了，不妨看看<code>thirdToLastLetterOfFirstName</code>变量是如何做到的。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>secondToLastLetterOfLastName</code>应该是"c"。
    testString: assert(secondToLastLetterOfLastName === 'c');
  - text: 你需要使用<code>.length</code>获取倒数第二个字符。
    testString: assert(code.match(/\.length/g).length === 2);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var firstName = "Ada";
var thirdToLastLetterOfFirstName = firstName[firstName.length - 3];

// Setup
var lastName = "Lovelace";

// Only change code below this line
var secondToLastLetterOfLastName = lastName;


```

</div>


### After Test
<div id='js-teardown'>

```js
(function(v){return v;})(secondToLastLetterOfLastName);
```

</div>

</section>

## Solution
<section id='solution'>


```js
var firstName = "Ada";
var thirdToLastLetterOfFirstName = firstName[firstName.length - 3];

var lastName = "Lovelace";
var secondToLastLetterOfLastName = lastName[lastName.length - 2];
```

</section>
