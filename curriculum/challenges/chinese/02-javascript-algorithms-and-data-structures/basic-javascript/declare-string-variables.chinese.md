---
id: bd7123c9c444eddfaeb5bdef
title: Declare String Variables
challengeType: 1
videoUrl: ''
localeTitle: 声明字符串变量
---

## Description
<section id="description">以前我们使用过代码<code>var myName = &quot;your name&quot;;</code> <code>&quot;your name&quot;</code>被称为<dfn>字符串</dfn> <dfn>文字</dfn> 。它是一个字符串，因为它是用单引号或双引号括起来的一系列零个或多个字符。 </section>

## Instructions
<section id="instructions">创建两个新的<code>string</code>变量： <code>myFirstName</code>和<code>myLastName</code>并分别为它们分配<code>myFirstName</code>和<code>myLastName</code>的值。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myFirstName</code>应该是一个至少包含一个字符的字符串。
    testString: 'assert((function(){if(typeof myFirstName !== "undefined" && typeof myFirstName === "string" && myFirstName.length > 0){return true;}else{return false;}})(), "<code>myFirstName</code> should be a string with at least one character in it.");'
  - text: <code>myLastName</code>应该是一个至少包含一个字符的字符串。
    testString: 'assert((function(){if(typeof myLastName !== "undefined" && typeof myLastName === "string" && myLastName.length > 0){return true;}else{return false;}})(), "<code>myLastName</code> should be a string with at least one character in it.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var firstName = "Alan";
var lastName = "Turing";

// Only change code below this line

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
