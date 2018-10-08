---
id: bd7123c9c452eddfaeb5bdef
title: Use Bracket Notation to Find the Nth-to-Last Character in a String
localeTitle: Use la notación de corchete para encontrar el carácter Nth-to-Last en una cadena
challengeType: 1
---

## Description
<section id='description'> 
Puede usar el mismo principio que acabamos de usar para recuperar el último carácter de una cadena para recuperar el enésimo al último carácter. 
Por ejemplo, puede obtener el valor de la tercera a la última letra de la cadena <code>var firstName = &quot;Charles&quot;</code> usando <code>firstName[firstName.length - 3]</code> 
</section>

## Instructions
<section id='instructions'> 
Use la <dfn>notación de corchetes</dfn> para encontrar el segundo hasta el último carácter en la cadena <code>lastName</code> . 
<strong>Pista</strong> <br> Intenta mirar la declaración de la variable <code>thirdToLastLetterOfFirstName</code> si te quedas atascado. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>secondToLastLetterOfLastName</code> debe ser &quot;c&quot;.
    testString: 'assert(secondToLastLetterOfLastName === "c", "<code>secondToLastLetterOfLastName</code> should be "c".");'
  - text: Tienes que usar <code>.length</code> para obtener la segunda última letra.
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
var firstName = "Ada";
var thirdToLastLetterOfFirstName = firstName[firstName.length - 3];

var lastName = "Lovelace";
var secondToLastLetterOfLastName = lastName[lastName.length - 2];
```

</section>
