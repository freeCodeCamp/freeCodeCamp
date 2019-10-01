---
id: bd7123c9c549eddfaeb5bdef
title: Use Bracket Notation to Find the First Character in a String
challengeType: 1
videoUrl: https://scrimba.com/c/ca8JwhW
forumTopicId: 18341
localeTitle: Используйте условное обозначение скобки для поиска первого символа в строке
---

## Description
<section id='description'>
<code>Bracket notation</code> - это способ получить символ с определенным <code>index</code> внутри строки. Большинство современных языков программирования, например JavaScript, не начинаются с 1, как люди. Они начинаются с 0. Это называется индексацией на <dfn>основе нуля</dfn> . Например, символ с индексом 0 в слове «Чарльз» - «С». Поэтому, если <code>var firstName = &quot;Charles&quot;</code> , вы можете получить значение первой буквы строки, используя <code>firstName[0]</code> .
</section>

## Instructions
<section id='instructions'>
Используйте <dfn>условное обозначение</dfn> в <dfn>скобках,</dfn> чтобы найти первый символ в переменной <code>lastName</code> и назначить его <code>firstLetterOfLastName</code> . <strong>намек</strong> <br> Попробуйте взглянуть на объявление <code>firstLetterOfFirstName</code> если вы застряли.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>firstLetterOfLastName</code> variable should have the value of <code>L</code>.
    testString: assert(firstLetterOfLastName === 'L');
  - text: You should use bracket notation.
    testString: assert(code.match(/firstLetterOfLastName\s*?=\s*?lastName\[.*?\]/));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var firstLetterOfFirstName = "";
var firstName = "Ada";

firstLetterOfFirstName = firstName[0];

// Setup
var firstLetterOfLastName = "";
var lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName;

```

</div>

### After Tests
<div id='js-teardown'>

```js
(function(v){return v;})(firstLetterOfLastName);

```

</div>

</section>

## Solution
<section id='solution'>

```js
var firstLetterOfLastName = "";
var lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0];
```

</section>
