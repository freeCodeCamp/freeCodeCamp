---
id: bd7123c9c444eddfaeb5bdef
title: Declare String Variables
challengeType: 1
videoUrl: 'https://scrimba.com/c/c2QvWU6'
forumTopicId: 17557
localeTitle: 声明字符串变量
---

## Description
<section id='description'>
之前我们写过这样的代码：
<code>var myName = "your name";</code>
<code>"your name"</code>被称作<dfn>字符串变量</dfn>。字符串是用单引号或双引号包裹起来的一连串的零个或多个字符。
</section>

## Instructions
<section id='instructions'>
创建两个新的<code>字符串变量</code>：<code>myFirstName</code>和<code>myLastName</code>，并用你的姓和名分别为它们赋值。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myFirstName</code>应该是一个字符串,并且至少包含一个字符。
    testString: assert((function(){if(typeof myFirstName !== "undefined" && typeof myFirstName === "string" && myFirstName.length > 0){return true;}else{return false;}})());
  - text: <code>myLastName</code>应该是一个字符串,并且至少包含一个字符。
    testString: assert((function(){if(typeof myLastName !== "undefined" && typeof myLastName === "string" && myLastName.length > 0){return true;}else{return false;}})());

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
if(typeof myFirstName !== "undefined" && typeof myLastName !== "undefined"){(function(){return myFirstName + ', ' + myLastName;})();}
```

</div>

</section>

## Solution
<section id='solution'>


```js
var myFirstName = "Alan";
var myLastName = "Turing";
```

</section>
