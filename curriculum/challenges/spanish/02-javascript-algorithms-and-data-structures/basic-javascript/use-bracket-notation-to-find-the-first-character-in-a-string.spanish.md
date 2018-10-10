---
id: bd7123c9c549eddfaeb5bdef
title: Use Bracket Notation to Find the First Character in a String
challengeType: 1
videoUrl: ''
localeTitle: Usa la notación de corchete para encontrar el primer personaje en una cadena
---

## Description
<section id="description"> <code>Bracket notation</code> es una forma de obtener un carácter en un <code>index</code> específico dentro de una cadena. La mayoría de los lenguajes de programación modernos, como JavaScript, no comienzan a contar en 1 como hacen los humanos. Comienzan en 0. Esto se conoce como indexación <dfn>basada en cero</dfn> . Por ejemplo, el carácter en el índice 0 en la palabra &quot;Charles&quot; es &quot;C&quot;. Entonces, si <code>var firstName = &quot;Charles&quot;</code> , puede obtener el valor de la primera letra de la cadena usando <code>firstName[0]</code> . </section>

## Instructions
<section id="instructions"> Utilice la <dfn>notación de corchetes</dfn> para encontrar el primer carácter en la variable <code>lastName</code> y asignarlo a <code>firstLetterOfLastName</code> . <strong>Insinuación</strong> <br> Intenta mirar la declaración de la variable <code>firstLetterOfFirstName</code> si te quedas atascado. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: La variable <code>firstLetterOfLastName</code> debe tener el valor de <code>L</code>
    testString: 'assert(firstLetterOfLastName === "L", "The <code>firstLetterOfLastName</code> variable should have the value of <code>L</code>.");'
  - text: Usted debe utilizar la notación de soporte.
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
