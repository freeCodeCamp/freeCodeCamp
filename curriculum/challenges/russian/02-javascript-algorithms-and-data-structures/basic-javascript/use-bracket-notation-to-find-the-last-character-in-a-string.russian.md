---
id: bd7123c9c451eddfaeb5bdef
title: Use Bracket Notation to Find the Last Character in a String
challengeType: 1
videoUrl: https://scrimba.com/c/cBZQGcv
forumTopicId: 18342
localeTitle: Использовать обозначение скобки для поиска последнего символа в строке
---

## Description
<section id='description'>
Чтобы получить последнюю букву строки, вы можете вычесть ее из длины строки. Например, если <code>var firstName = &quot;Charles&quot;</code> , вы можете получить значение последней буквы строки, используя <code>firstName[firstName.length - 1]</code> .
</section>

## Instructions
<section id='instructions'>
Используйте <dfn>нотацию</dfn> в виде <dfn>скобок,</dfn> чтобы найти последний символ в переменной <code>lastName</code> . <strong>намек</strong> <br> Попробуйте просмотреть <code>lastLetterOfFirstName</code> переменной <code>lastLetterOfFirstName</code> если вы застряли.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>lastLetterOfLastName</code> should be "e".
    testString: assert(lastLetterOfLastName === "e");
  - text: You have to use <code>.length</code> to get the last letter.
    testString: assert(code.match(/\.length/g).length === 2);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var firstName = "Ada";
var lastLetterOfFirstName = firstName[firstName.length - 1];

// Setup
var lastName = "Lovelace";

// Only change code below this line.
var lastLetterOfLastName = lastName;

```

</div>

### After Tests
<div id='js-teardown'>

```js
(function(v){return v;})(lastLetterOfLastName);

```

</div>

</section>

## Solution
<section id='solution'>

```js
var firstName = "Ada";
var lastLetterOfFirstName = firstName[firstName.length - 1];

var lastName = "Lovelace";
var lastLetterOfLastName = lastName[lastName.length - 1];
```

</section>
