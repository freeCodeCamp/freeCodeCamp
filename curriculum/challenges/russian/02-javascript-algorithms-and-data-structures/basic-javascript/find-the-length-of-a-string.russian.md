---
id: bd7123c9c448eddfaeb5bdef
title: Find the Length of a String
challengeType: 1
videoUrl: ''
localeTitle: Найти длину строки
---

## Description
<section id="description"> Вы можете найти длину значения <code>String</code> , написав <code>.length</code> после строковой переменной или строкового литерала. <code>&quot;Alan Peter&quot;.length; // 10</code> Например, если мы создали переменную <code>var firstName = &quot;Charles&quot;</code> , мы могли бы узнать, как долго строка <code>&quot;Charles&quot;</code> используется с использованием свойства <code>firstName.length</code> . </section>

## Instructions
<section id="instructions"> Используйте свойство <code>.length</code> чтобы подсчитать количество символов в переменной <code>lastName</code> и назначить его <code>lastNameLength</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>lastNameLength</code> должно быть равно восьми.
    testString: 'assert((function(){if(typeof lastNameLength !== "undefined" && typeof lastNameLength === "number" && lastNameLength === 8){return true;}else{return false;}})(), "<code>lastNameLength</code> should be equal to eight.");'
  - text: 'Вы должны получить длину <code>lastName</code> , используя <code>.length</code> как это: <code>lastName.length</code> .'
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
