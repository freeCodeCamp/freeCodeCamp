---
id: bd7123c9c452eddfaeb5bdef
title: Use Bracket Notation to Find the Nth-to-Last Character in a String
challengeType: 1
videoUrl: ''
localeTitle: Используйте условное обозначение скобки для поиска символа Nth-to-Last в строке
---

## Description
<section id="description"> Вы можете использовать тот же принцип, который мы использовали для извлечения последнего символа в строке, чтобы получить символ Nth-to-last. Например, вы можете получить значение третьей-последней буквы строки <code>var firstName = &quot;Charles&quot;</code> , используя <code>firstName[firstName.length - 3]</code> </section>

## Instructions
<section id="instructions"> Используйте <dfn>нотацию</dfn> в виде <dfn>скобок,</dfn> чтобы найти второй-последний символ в строке <code>lastName</code> . <strong>намек</strong> <br> Попробуйте просмотреть <code>thirdToLastLetterOfFirstName</code> переменной <code>thirdToLastLetterOfFirstName</code> если вы застряли. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>secondToLastLetterOfLastName</code> должен быть «c».
    testString: 'assert(secondToLastLetterOfLastName === "c", "<code>secondToLastLetterOfLastName</code> should be "c".");'
  - text: Вы должны использовать <code>.length</code> для получения второй последней буквы.
    testString: 'assert(code.match(/\.length/g).length === 2, "You have to use <code>.length</code> to get the second last letter.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var firstName = "Ada";
var thirdToLastLetterOfFirstName = firstName[firstName.length - 3];

// Setup
var lastName = "Lovelace";

// Only change code below this line
var secondToLastLetterOfLastName = lastName;

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
