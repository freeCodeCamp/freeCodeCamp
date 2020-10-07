---
id: bd7123c9c448eddfaeb5bdef
challengeType: 1
videoUrl: 'https://scrimba.com/c/cvmqEAd'
forumTopicId: 18182
title: 查找字符串的长度
---

## Description
<section id='description'>
你可以通过在字符串变量或字符串后面写上<code>.length</code>来获得字符串变量值的长度。
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
  - text: 不能改变 <code>// Setup</code> 部分声明的变量。
    testString: assert(code.match(/var lastNameLength = 0;/) && code.match(/var lastName = "Lovelace";/));   
  - text: <code>lastNameLength</code>应该等于 8。
    testString: assert(typeof lastNameLength !== 'undefined' && lastNameLength === 8); 
  - text: 你应该使用 <code>.length</code> 获取 <code>lastName</code> 的长度，像这样 <code>lastName.length</code>。
    testString: assert(code.match(/=\s*lastName\.length/g) && !code.match(/lastName\s*=\s*8/));

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
