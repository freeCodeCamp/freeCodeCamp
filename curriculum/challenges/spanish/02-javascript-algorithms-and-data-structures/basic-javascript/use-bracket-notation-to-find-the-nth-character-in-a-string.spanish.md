---
id: bd7123c9c450eddfaeb5bdef
title: Use Bracket Notation to Find the Nth Character in a String
challengeType: 1
videoUrl: ''
localeTitle: Usa la notación de corchete para encontrar el enésimo carácter de una cadena
---

## Description
<section id="description"> También puede usar la <dfn>notación de corchetes</dfn> para obtener el carácter en otras posiciones dentro de una cadena. Recuerde que las computadoras comienzan a contar en <code>0</code> , por lo que el primer carácter es en realidad el carácter cero. </section>

## Instructions
<section id="instructions"> Intentemos establecer <code>thirdLetterOfLastName</code> para que sea igual a la tercera letra de la variable <code>lastName</code> usando notación de corchete. <strong>Insinuación</strong> <br> Intenta mirar la declaración de la variable <code>secondLetterOfFirstName</code> si te quedas atascado. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: La variable <code>thirdLetterOfLastName</code> debe tener el valor de <code>v</code> .
    testString: 'assert(thirdLetterOfLastName === "v", "The <code>thirdLetterOfLastName</code> variable should have the value of <code>v</code>.");'
  - text: Usted debe utilizar la notación de soporte.
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
