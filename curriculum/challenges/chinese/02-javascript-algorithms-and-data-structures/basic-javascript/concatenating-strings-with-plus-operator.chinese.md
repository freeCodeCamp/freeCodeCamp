---
id: 56533eb9ac21ba0edf2244b7
title: Concatenating Strings with Plus Operator
challengeType: 1
videoUrl: 'https://scrimba.com/c/cNpM8AN'
forumTopicId: 16802
localeTitle: 用加号运算符连接字符串
---

## Description
<section id='description'>
在 JavaScript 中，当对一个<code>String</code>类型的值使用<code>+</code>操作符的时候，它被称作 <dfn>拼接操作符</dfn>。你可以通过<dfn>拼接</dfn>其他字符串来创建一个新的字符串。
<strong>示例</strong>

```js
'My name is Alan,' + ' I concatenate.'
```

<strong>提示</strong><br>注意空格。拼接操作不会在两个字符串之间添加空格，所以想加上空格的话，你需要自己在字符串里面添加。
</section>

## Instructions
<section id='instructions'>
使用<code>+</code>操作符，把字符串<code>"This is the start. "</code>和<code>"This is the end."</code>连接起来并赋值给变量<code>myStr</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myStr</code>的值应该是<code>This is the start. This is the end.</code>。
    testString: assert(myStr === "This is the start. This is the end.");
  - text: 使用<code>+</code>操作符构建<code>myStr</code>。
    testString: assert(code.match(/(["']).*(["'])\s*\+\s*(["']).*(["'])/g).length > 1);
  - text: <code>myStr</code>应该被<code>var</code>关键字声明。
    testString: assert(/var\s+myStr/.test(code));
  - text: 确保有给<code>myStr</code>赋值。
    testString: assert(/myStr\s*=/.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourStr = "I come first. " + "I come second.";

// Only change code below this line

var myStr;


```

</div>


### After Test
<div id='js-teardown'>

```js
(function(){
  if(typeof myStr === 'string') {
    return 'myStr = "' + myStr + '"';
  } else {
    return 'myStr is not a string';
  }
})();
```

</div>

</section>

## Solution
<section id='solution'>


```js
var ourStr = "I come first. " + "I come second.";
var myStr = "This is the start. " + "This is the end.";
```

</section>
