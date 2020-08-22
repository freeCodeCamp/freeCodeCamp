---
id: 56533eb9ac21ba0edf2244ba
title: Understand String Immutability
challengeType: 1
videoUrl: 'https://scrimba.com/c/cWPVaUR'
forumTopicId: 18331
localeTitle: 了解字符串的不变性
---

## Description
<section id='description'>
在 JavaScript 中，<code>字符串</code>的值是 <dfn>不可变的</dfn>，这意味着一旦字符串被创建就不能被改变。
例如，下面的代码：

```js
var myStr = "Bob";
myStr[0] = "J";
```

是不会把变量<code>myStr</code>的值改变成 "Job" 的，因为变量<code>myStr</code>是不可变的。注意，这<em>并不</em>意味着<code>myStr</code>永远不能被改变，只是字符串字面量 <dfn>string literal</dfn> 的各个字符不能被改变。改变<code>myStr</code>中的唯一方法是重新给它赋一个值，例如：

```js
var myStr = "Bob";
myStr = "Job";
```

</section>

## Instructions
<section id='instructions'>
把<code>myStr</code>的值改为<code>Hello World</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: message:<code>myStr</code>的值应该是<code>Hello World</code>。
    testString: assert(myStr === "Hello World");
  - text: 不要修改注释上面的代码。
    testString: assert(/myStr = "Jello World"/.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
var myStr = "Jello World";

// Only change code below this line

myStr[0] = "H"; // Fix Me


```

</div>


### After Test
<div id='js-teardown'>

```js
(function(v){return "myStr = " + v;})(myStr);
```

</div>

</section>

## Solution
<section id='solution'>


```js
var myStr = "Jello World";
myStr = "Hello World";
```

</section>
