---
id: bd7123c9c451eddfaeb5bdef
title: Use Bracket Notation to Find the Last Character in a String
challengeType: 1
videoUrl: ''
localeTitle: 使用括号表示法查找字符串中的最后一个字符
---

## Description
<section id="description">为了获得字符串的最后一个字母，您可以从字符串的长度中减去一个字母。例如，如果<code>var firstName = &quot;Charles&quot;</code> ，则可以使用<code>firstName[firstName.length - 1]</code>获取字符串最后一个字母的值。 </section>

## Instructions
<section id="instructions">使用<dfn>括号表示法</dfn>查找<code>lastName</code>变量中的最后一个字符。 <strong>暗示</strong> <br>如果卡住了，请尝试查看<code>lastLetterOfFirstName</code>变量声明。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>lastLetterOfLastName</code>应为“e”。
    testString: 'assert(lastLetterOfLastName === "e", "<code>lastLetterOfLastName</code> should be "e".");'
  - text: 你必须使用<code>.length</code>来获取最后一个字母。
    testString: 'assert(code.match(/\.length/g).length === 2, "You have to use <code>.length</code> to get the last letter.");'

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
