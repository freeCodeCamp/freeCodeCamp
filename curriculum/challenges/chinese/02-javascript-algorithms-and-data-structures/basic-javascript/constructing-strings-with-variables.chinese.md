---
id: 56533eb9ac21ba0edf2244b9
title: Constructing Strings with Variables
challengeType: 1
videoUrl: ''
localeTitle: 用变量构造字符串
---

## Description
<section id="description">有时您需要构建一个字符串， <a href="https://en.wikipedia.org/wiki/Mad_Libs" target="_blank">Mad Libs</a>样式。通过使用连接运算符（ <code>+</code> ），您可以将一个或多个变量插入到正在构建的字符串中。 </section>

## Instructions
<section id="instructions">将<code>myName</code>设置为等于您的名字的字符串，并在字符串<code>&quot;My name is &quot;</code>和<code>&quot; and I am well!&quot;</code>之间用<code>myName</code>构建<code>myStr</code> <code>&quot; and I am well!&quot;</code> </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myName</code>应设置为至少3个字符长的字符串
    testString: 'assert(typeof myName !== "undefined" && myName.length > 2, "<code>myName</code> should be set to a string at least 3 characters long");'
  - text: 使用两个<code>+</code>运算符在其中构建<code>myStr</code> with <code>myName</code>
    testString: 'assert(code.match(/[""]\s*\+\s*myName\s*\+\s*[""]/g).length > 0, "Use two <code>+</code> operators to build <code>myStr</code> with <code>myName</code> inside it");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourName = "freeCodeCamp";
var ourStr = "Hello, our name is " + ourName + ", how are you?";

// Only change code below this line
var myName;
var myStr;

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
