---
id: bd7123c9c450eddfaeb5bdef
title: Use Bracket Notation to Find the Nth Character in a String
challengeType: 1
videoUrl: ''
localeTitle: Use a notação de suporte para localizar o caractere Nth em uma seqüência de caracteres
---

## Description
<section id="description"> Você também pode usar a <dfn>notação de colchetes</dfn> para obter o caractere em outras posições dentro de uma string. Lembre-se de que os computadores começam a contar a <code>0</code> , portanto, o primeiro caractere é, na verdade, o caractere zeroth. </section>

## Instructions
<section id="instructions"> Vamos tentar definir <code>thirdLetterOfLastName</code> para igualar a terceira letra da variável <code>lastName</code> usando a notação de colchetes. <strong>Sugestão</strong> <br> Tente observar a declaração da variável <code>secondLetterOfFirstName</code> se você ficar preso. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: A variável <code>thirdLetterOfLastName</code> deve ter o valor de <code>v</code> .
    testString: 'assert(thirdLetterOfLastName === "v", "The <code>thirdLetterOfLastName</code> variable should have the value of <code>v</code>.");'
  - text: Você deve usar a notação de colchetes.
    testString: 'assert(code.match(/thirdLetterOfLastName\s*?=\s*?lastName\[.*?\]/), "You should use bracket notation.");'

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
