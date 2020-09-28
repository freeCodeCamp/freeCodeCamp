---
id: bd7123c9c450eddfaeb5bdef
title: Use Bracket Notation to Find the Nth Character in a String
challengeType: 1
videoUrl: https://scrimba.com/c/cWPVJua
forumTopicId: 18343
localeTitle: Использовать обозначения скобок для поиска N-го символа в строке
---

## Description
<section id='description'>
Вы также можете использовать <dfn>нотацию</dfn> в виде <dfn>скобок,</dfn> чтобы получить символ в других позициях внутри строки. Помните, что компьютеры начинают отсчет в <code>0</code> , поэтому первый символ на самом деле является нулевым символом.
</section>

## Instructions
<section id='instructions'>
Попробуем установить для параметра <code>thirdLetterOfLastName</code> равную третью букву переменной <code>lastName</code> используя нотацию в виде скобок. <strong>намек</strong> <br> Попробуйте взглянуть на <code>secondLetterOfFirstName</code> переменной <code>secondLetterOfFirstName</code> если вы застряли.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>thirdLetterOfLastName</code> variable should have the value of <code>v</code>.
    testString: assert(thirdLetterOfLastName === 'v');
  - text: You should use bracket notation.
    testString: assert(code.match(/thirdLetterOfLastName\s*?=\s*?lastName\[.*?\]/));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var firstName = "Ada";
var secondLetterOfFirstName = firstName[1];

// Setup
var lastName = "Lovelace";

// Only change code below this line.
var thirdLetterOfLastName = lastName;

```

</div>

### After Tests
<div id='js-teardown'>

```js
(function(v){return v;})(thirdLetterOfLastName);

```

</div>

</section>

## Solution
<section id='solution'>

```js
var lastName = "Lovelace";
var thirdLetterOfLastName = lastName[2];
```

</section>
