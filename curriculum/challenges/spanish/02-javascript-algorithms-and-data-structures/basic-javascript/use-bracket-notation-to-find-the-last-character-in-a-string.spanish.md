---
id: bd7123c9c451eddfaeb5bdef
title: Use Bracket Notation to Find the Last Character in a String
challengeType: 1
videoUrl: ''
localeTitle: Use la notación de corchete para encontrar el último carácter en una cadena
---

## Description
<section id="description"> Para obtener la última letra de una cadena, puedes restar una de la longitud de la cadena. Por ejemplo, si <code>var firstName = &quot;Charles&quot;</code> , puede obtener el valor de la última letra de la cadena usando <code>firstName[firstName.length - 1]</code> . </section>

## Instructions
<section id="instructions"> Use la <dfn>notación de corchetes</dfn> para encontrar el último carácter en la variable <code>lastName</code> . <strong>Insinuación</strong> <br> Intenta mirar la declaración de la variable <code>lastLetterOfFirstName</code> si te quedas atascado. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>lastLetterOfLastName</code> debe ser &quot;e&quot;.
    testString: 'assert(lastLetterOfLastName === "e", "<code>lastLetterOfLastName</code> should be "e".");'
  - text: Tienes que usar <code>.length</code> para obtener la última letra.
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
