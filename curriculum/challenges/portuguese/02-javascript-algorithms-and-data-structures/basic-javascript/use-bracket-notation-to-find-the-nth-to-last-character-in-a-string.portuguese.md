---
id: bd7123c9c452eddfaeb5bdef
title: Use Bracket Notation to Find the Nth-to-Last Character in a String
challengeType: 1
videoUrl: ''
localeTitle: Use a notação de suporte para localizar o caractere N-para-último em uma seqüência de caracteres
---

## Description
<section id="description"> Você pode usar o mesmo princípio que acabamos de usar para recuperar o último caractere em uma string para recuperar o caractere de enésima a última. Por exemplo, você pode obter o valor da terceira para a última letra da string <code>var firstName = &quot;Charles&quot;</code> usando <code>firstName[firstName.length - 3]</code> </section>

## Instructions
<section id="instructions"> Use a <dfn>notação de colchetes</dfn> para localizar o penúltimo caractere na string <code>lastName</code> . <strong>Sugestão</strong> <br> Tente observar a declaração da variável <code>thirdToLastLetterOfFirstName</code> se você ficar preso. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>secondToLastLetterOfLastName</code> deve ser &quot;c&quot;.
    testString: 'assert(secondToLastLetterOfLastName === "c", "<code>secondToLastLetterOfLastName</code> should be "c".");'
  - text: Você tem que usar o <code>.length</code> para obter a segunda última letra.
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
