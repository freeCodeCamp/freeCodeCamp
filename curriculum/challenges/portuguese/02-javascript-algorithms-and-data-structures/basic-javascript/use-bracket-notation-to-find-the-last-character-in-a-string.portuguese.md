---
id: bd7123c9c451eddfaeb5bdef
title: Use Bracket Notation to Find the Last Character in a String
challengeType: 1
videoUrl: ''
localeTitle: Use a notação de suporte para localizar o último caractere em uma string
---

## Description
<section id="description"> Para obter a última letra de uma string, você pode subtrair uma da extensão da string. Por exemplo, se <code>var firstName = &quot;Charles&quot;</code> , você pode obter o valor da última letra da string usando <code>firstName[firstName.length - 1]</code> . </section>

## Instructions
<section id="instructions"> Use a <dfn>notação de colchetes</dfn> para encontrar o último caractere na variável <code>lastName</code> . <strong>Sugestão</strong> <br> Tente ver a declaração da variável <code>lastLetterOfFirstName</code> se você ficar preso. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>lastLetterOfLastName</code> deve ser &quot;e&quot;.
    testString: 'assert(lastLetterOfLastName === "e", "<code>lastLetterOfLastName</code> should be "e".");'
  - text: Você tem que usar o <code>.length</code> para obter a última letra.
    testString: 'assert(code.match(/\.length/g).length === 2, "You have to use <code>.length</code> to get the last letter.");'

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
