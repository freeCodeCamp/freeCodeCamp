---
id: 56533eb9ac21ba0edf2244b8
title: Concatenating Strings with the Plus Equals Operator
challengeType: 1
videoUrl: 'https://scrimba.com/c/cbQmmC4'
forumTopicId: 16803
localeTitle: 用 += 运算符连接字符串
---

## Description
<section id='description'>
我们还可以使用<code>+=</code>运算符来<dfn>concatenate</dfn>（拼接）字符串到现有字符串的结尾。对于那些被分割成几段的长的字符串来说，这一操作是非常有用的。
<strong>提示</strong><br>注意空格。拼接操作不会在两个字符串之间添加空格，所以如果想要加上空格的话，你需要自己在字符串里面添加。
</section>

## Instructions
<section id='instructions'>
通过使用<code>+=</code>操作符来连接这两个字符串：<br><code>"This is the first sentence. "</code>和<code>"This is the second sentence."</code>并赋给变量<code>myStr</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myStr</code>的值应该是<code>This is the first sentence. This is the second sentence.</code>。
    testString: assert(myStr === "This is the first sentence. This is the second sentence.");
  - text: 使用<code>+=</code>操作符创建<code>myStr</code>变量。
    testString: assert(code.match(/\w\s*\+=\s*["']/g).length > 1 && code.match(/\w\s*\=\s*["']/g).length > 1);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourStr = "I come first. ";
ourStr += "I come second.";

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
var ourStr = "I come first. ";
ourStr += "I come second.";

var myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";
```

</section>
