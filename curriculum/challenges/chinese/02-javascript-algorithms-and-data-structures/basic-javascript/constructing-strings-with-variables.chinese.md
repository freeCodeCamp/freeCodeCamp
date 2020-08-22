---
id: 56533eb9ac21ba0edf2244b9
title: Constructing Strings with Variables
challengeType: 1
videoUrl: 'https://scrimba.com/c/cqk8rf4'
forumTopicId: 16805
localeTitle: 用变量构造字符串
---

## Description
<section id='description'>
有时候你需要创建一个类似<a href="https://en.wikipedia.org/wiki/Mad_Libs" target="_blank">Mad Libs</a>(填词游戏）风格的字符串。通过使用连接运算符<code> + </code>，你可以插入一个或多个变量来组成一个字符串。
</section>

## Instructions
<section id='instructions'>
把你的名字赋值给变量<code>myName</code>，然后把变量<code>myName</code>插入到字符串<code>"My name is "</code>和<code>" and I am well!"</code>之间，并把连接后的结果赋值给变量<code>myStr</code>。 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myName</code>至少要包含三个字符。
    testString: assert(typeof myName !== 'undefined' && myName.length > 2);
  - text: 使用两个<code>+</code>操作符创建包含<code>myName</code>的<code>myStr</code>变量。
    testString: assert(code.match(/["']\s*\+\s*myName\s*\+\s*["']/g).length > 0);

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
(function(){
  var output = [];
  if(typeof myName === 'string') {
    output.push('myName = "' + myName + '"');
  } else {
    output.push('myName is not a string');
  }
  if(typeof myStr === 'string') {
    output.push('myStr = "' + myStr + '"');
  } else {
    output.push('myStr is not a string');
  }
  return output.join('\n');
})();
```

</div>

</section>

## Solution
<section id='solution'>


```js
var myName = "Bob";
var myStr = "My name is " + myName + " and I am well!";
```

</section>
