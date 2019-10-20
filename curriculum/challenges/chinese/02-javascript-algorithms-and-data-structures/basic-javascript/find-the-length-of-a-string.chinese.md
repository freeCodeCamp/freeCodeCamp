---
id: bd7123c9c448eddfaeb5bdef
title: Find the Length of a String
challengeType: 1
videoUrl: ''
localeTitle: 找到字符串的长度
---

## Description
<section id="description">您可以通过在字符串变量或字符串文字后面写<code>.length</code>来查找<code>String</code>值的长度。 <code>&quot;Alan Peter&quot;.length; // 10</code>例如，如果我们创建了一个变量<code>var firstName = &quot;Charles&quot;</code> ，我们可以通过使用<code>firstName.length</code>属性找出字符串<code>&quot;Charles&quot;</code>长度。 </section>

## Instructions
<section id="instructions">使用<code>.length</code>属性计算<code>lastName</code>变量中的字符数，并将其分配给<code>lastNameLength</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>lastNameLength</code>应该等于8。
    testString: 'assert((function(){if(typeof lastNameLength !== "undefined" && typeof lastNameLength === "number" && lastNameLength === 8){return true;}else{return false;}})(), "<code>lastNameLength</code> should be equal to eight.");'
  - text: 您应该使用<code>.length</code>来获取<code>lastName</code>的长度，如下所示： <code>lastName.length</code> 。
    testString: 'assert((function(){if(code.match(/\.length/gi) && code.match(/\.length/gi).length >= 2 && code.match(/var lastNameLength \= 0;/gi) && code.match(/var lastNameLength \= 0;/gi).length >= 1){return true;}else{return false;}})(), "You should be getting the length of <code>lastName</code> by using <code>.length</code> like this: <code>lastName.length</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var firstNameLength = 0;
var firstName = "Ada";

firstNameLength = firstName.length;

// Setup
var lastNameLength = 0;
var lastName = "Lovelace";

// Only change code below this line.

lastNameLength = lastName;

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
