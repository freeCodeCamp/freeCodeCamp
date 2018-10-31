---
id: bd7123c9c549eddfaeb5bdef
title: Use Bracket Notation to Find the First Character in a String
challengeType: 1
videoUrl: ''
localeTitle: Use a notação de suporte para localizar o primeiro caractere em uma seqüência de caracteres
---

## Description
<section id="description"> <code>Bracket notation</code> é uma maneira de obter um caractere em um <code>index</code> específico em uma cadeia de caracteres. A maioria das linguagens de programação modernas, como o JavaScript, não começa a contar como um ser humano. Eles começam em 0. Isso é chamado de indexação <dfn>baseada</dfn> em <dfn>zero</dfn> . Por exemplo, o caractere no índice 0 na palavra &quot;Charles&quot; é &quot;C&quot;. Então, se <code>var firstName = &quot;Charles&quot;</code> , você pode obter o valor da primeira letra da string usando <code>firstName[0]</code> . </section>

## Instructions
<section id="instructions"> Use a <dfn>notação de colchetes</dfn> para localizar o primeiro caractere na variável <code>lastName</code> e atribuí-lo a <code>firstLetterOfLastName</code> . <strong>Sugestão</strong> <br> Tente observar a declaração da variável <code>firstLetterOfFirstName</code> se você ficar preso. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: A variável <code>firstLetterOfLastName</code> deve ter o valor de <code>L</code>
    testString: 'assert(firstLetterOfLastName === "L", "The <code>firstLetterOfLastName</code> variable should have the value of <code>L</code>.");'
  - text: Você deve usar a notação de colchetes.
    testString: 'assert(code.match(/firstLetterOfLastName\s*?=\s*?lastName\[.*?\]/), "You should use bracket notation.");'

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
