---
id: bd7123c9c448eddfaeb5bdef
title: Find the Length of a String
challengeType: 1
videoUrl: https://scrimba.com/c/cvmqEAd
forumTopicId: 18182
localeTitle: Найти длину строки
---

## Description
<section id='description'>
Вы можете найти длину значения <code>String</code> , написав <code>.length</code> после строковой переменной или строкового литерала. <code>&quot;Alan Peter&quot;.length; // 10</code> Например, если мы создали переменную <code>var firstName = &quot;Charles&quot;</code> , мы могли бы узнать, как долго строка <code>&quot;Charles&quot;</code> используется с использованием свойства <code>firstName.length</code> .
</section>

## Instructions
<section id='instructions'>
Используйте свойство <code>.length</code> чтобы подсчитать количество символов в переменной <code>lastName</code> и назначить его <code>lastNameLength</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You should not change the variable declarations in the <code>// Setup</code> section.
    testString: assert(code.match(/var lastNameLength = 0;/) && code.match(/var lastName = "Lovelace";/));
  - text: <code>lastNameLength</code> should be equal to eight.
    testString: assert(typeof lastNameLength !== 'undefined' && lastNameLength === 8);
  - text: 'You should be getting the length of <code>lastName</code> by using <code>.length</code> like this: <code>lastName.length</code>.'
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
