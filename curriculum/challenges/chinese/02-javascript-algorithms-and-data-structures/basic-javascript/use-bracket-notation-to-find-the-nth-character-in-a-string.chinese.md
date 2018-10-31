---
id: bd7123c9c450eddfaeb5bdef
title: Use Bracket Notation to Find the Nth Character in a String
challengeType: 1
videoUrl: ''
localeTitle: 使用括号表示法查找字符串中的第N个字符
---

## Description
<section id="description">您还可以使用<dfn>括号表示法</dfn>来获取字符串中其他位置的字符。请记住，计算机从<code>0</code>开始计数，因此第一个字符实际上是第0个字符。 </section>

## Instructions
<section id="instructions">让我们尝试使用括号表示法将<code>thirdLetterOfLastName</code>设置为等于<code>lastName</code>变量的第三个字母。 <strong>暗示</strong> <br>如果卡住，请尝试查看<code>secondLetterOfFirstName</code>变量声明。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>thirdLetterOfLastName</code>变量的值应为<code>v</code> 。
    testString: 'assert(thirdLetterOfLastName === "v", "The <code>thirdLetterOfLastName</code> variable should have the value of <code>v</code>.");'
  - text: 您应该使用括号表示法。
    testString: 'assert(code.match(/thirdLetterOfLastName\s*?=\s*?lastName\[.*?\]/), "You should use bracket notation.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var firstName = "Ada";
var secondLetterOfFirstName = firstName[1];

// Setup
var lastName = "Lovelace";

// Only change code below this line.
var thirdLetterOfLastName = lastName;

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
