---
id: bd7123c9c549eddfaeb5bdef
title: Use Bracket Notation to Find the First Character in a String
challengeType: 1
videoUrl: ''
localeTitle: 使用括号表示法查找字符串中的第一个字符
---

## Description
<section id="description"> <code>Bracket notation</code>是一种在字符串中的特定<code>index</code>处获取字符的方法。大多数现代编程语言，如JavaScript，都不像人类那样开始计算。它们从0开始。这称为<dfn>基于零的</dfn>索引。例如，单词“Charles”中索引0处的字符是“C”。因此，如果<code>var firstName = &quot;Charles&quot;</code> ，则可以使用<code>firstName[0]</code>获取字符串第一个字母的值。 </section>

## Instructions
<section id="instructions">使用<dfn>括号表示法</dfn>查找<code>lastName</code>变量中的第一个字符并将其分配给<code>firstLetterOfLastName</code> 。 <strong>暗示</strong> <br>如果卡住，请尝试查看<code>firstLetterOfFirstName</code>变量声明。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>firstLetterOfLastName</code>变量的值应为<code>L</code>
    testString: assert(firstLetterOfLastName === 'L');
  - text: 您应该使用括号表示法。
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
