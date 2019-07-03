---
id: bd7123c9c448eddfaeb5bdef
title: Find the Length of a String
challengeType: 1

videoUrl: ''
localeTitle: Find the Length of a String
---

## Description
<section id='description'>
你可以通过在字符串变量或字符串后面写上<code>.length</code>来获得字符串变量<code>字符串</code>值的长度。
<code>"Alan Peter".length; // 10</code>
例如，我们创建了一个变量<code>var firstName = "Charles"</code>，我们就可以通过使用<code>firstName.length</code>来获得<code>"Charles"</code>字符串的长度。
</section>

## Instructions
<section id='instructions'>
使用<code>.length</code>属性来获得变量<code>lastName</code>的长度，并把它赋值给变量<code>lastNameLength</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>lastNameLength</code>应该等于 8
    testString: assert((function(){if(typeof lastNameLength !== "undefined" && typeof lastNameLength === "number" && lastNameLength === 8){return true;}else{return false;}})(), '<code>lastNameLength</code>应该等于 8');
  - text: 你应该使用<code>.length</code>获取<code>lastName</code>的长度, 像这样：<code>lastName.length</code>
    testString: assert((function(){if(code.match(/\.length/gi) && code.match(/\.length/gi).length >= 2 && code.match(/var lastNameLength \= 0;/gi) && code.match(/var lastNameLength \= 0;/gi).length >= 1){return true;}else{return false;}})(), '你应该使用<code>.length</code>获取<code>lastName</code>的长度, 像这样：<code>lastName.length</code>');

```

</section>

## Challenge Seed
<section id='challengeSeed'>














### After Test

<div id='js-teardown'>

```js
if(typeof lastNameLength !== "undefined"){(function(){return lastNameLength;})();}
```

</div>

</section>

## Solution
<section id='solution'>

```js
var firstNameLength = 0;
var firstName = "Ada";
firstNameLength = firstName.length;

var lastNameLength = 0;
var lastName = "Lovelace";
lastNameLength = lastName.length;
```

</section>
              