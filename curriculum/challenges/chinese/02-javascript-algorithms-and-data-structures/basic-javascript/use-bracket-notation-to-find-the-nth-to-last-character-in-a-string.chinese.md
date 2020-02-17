---
id: bd7123c9c452eddfaeb5bdef
title: Use Bracket Notation to Find the Nth-to-Last Character in a String
challengeType: 1
videoUrl: ''
localeTitle: 使用括号表示法查找字符串中的第N个到最后一个字符
---

## Description
<section id="description">您可以使用我们刚刚用于检索字符串中最后一个字符的相同原理来检索N到最后一个字符。例如，您可以使用<code>firstName[firstName.length - 3]</code>获取<code>var firstName = &quot;Charles&quot;</code>字符串的倒数第三个字母的值</section>

## Instructions
<section id="instructions">使用<dfn>括号表示法</dfn>查找<code>lastName</code>字符串中倒数第二个字符。 <strong>暗示</strong> <br>如果卡住，请尝试查看<code>thirdToLastLetterOfFirstName</code>变量声明。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>secondToLastLetterOfLastName</code>应为“c”。
    testString: assert(secondToLastLetterOfLastName === 'c');
  - text: 你必须使用<code>.length</code>来获得倒数第二个字母。
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
