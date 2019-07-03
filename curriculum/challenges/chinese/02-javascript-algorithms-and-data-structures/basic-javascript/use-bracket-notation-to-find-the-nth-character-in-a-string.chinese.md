---
id: bd7123c9c450eddfaeb5bdef
title: Use Bracket Notation to Find the Nth Character in a String
challengeType: 1

videoUrl: ''
localeTitle: Use Bracket Notation to Find the Nth Character in a String
---

## Description
<section id='description'>
你也可以使用方括号来获得一个字符串中的其他位置的字符。
请记住，程序是从<code>0</code>开始计数，所以获取第一个字符实际上是[0]。
</section>

## Instructions
<section id='instructions'>
让我们使用方括号，把<code>lastName</code>变量的第三个字符赋值给<code>thirdLetterOfLastName</code>。
<strong>提示</strong><br>如果你遇到困难了，看看<code>secondLetterOfFirstName</code>变量是如何做的。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>thirdLetterOfLastName</code>的值应该是<code>v</code>
    testString: assert(thirdLetterOfLastName === 'v', '<code>thirdLetterOfLastName</code>的值应该是<code>v</code>');
  - text: 你应该使用方括号
    testString: assert(code.match(/thirdLetterOfLastName\s*?=\s*?lastName\[.*?\]/), '你应该使用方括号');

```

</section>

## Challenge Seed
<section id='challengeSeed'>














### After Test

<div id='js-teardown'>

```js
(function(v){return v;})(thirdLetterOfLastName);
```

</div>

</section>

## Solution
<section id='solution'>

```js
var lastName = "Lovelace";
var thirdLetterOfLastName = lastName[2];
```

</section>
              