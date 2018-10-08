---
id: 587d7db4367417b2b2512b90
title: Match a Literal String with Different Possibilities
localeTitle: Unir una cadena literal con diferentes posibilidades
challengeType: 1
---

## Description
<section id='description'> 
Usando expresiones regulares como <code>/coding/</code> , puede buscar el patrón <code>&quot;coding&quot;</code> en otra cadena. 
Esto es poderoso para buscar cadenas simples, pero está limitado a un solo patrón. Puede buscar múltiples patrones utilizando la <code>alternation</code> u operador <code>OR</code> : <code>|</code> . 
Este operador hace coincidir los patrones antes o después de él. Por ejemplo, si desea hacer coincidir <code>&quot;yes&quot;</code> o <code>&quot;no&quot;</code> , la expresión regular que desea es <code>/yes|no/</code> . 
También puede buscar más de dos patrones. Puede hacer esto agregando más patrones con más operadores <code>OR</code> que los separan, como <code>/yes|no|maybe/</code> . 
</section>

## Instructions
<section id='instructions'> 
Complete el regex <code>petRegex</code> para que coincida con las mascotas <code>&quot;dog&quot;</code> , <code>&quot;cat&quot;</code> , <code>&quot;bird&quot;</code> o <code>&quot;fish&quot;</code> . 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su regex <code>petRegex</code> debe devolver <code>true</code> para la cadena <code>&quot;John has a pet dog.&quot;</code>
    testString: 'assert(petRegex.test("John has a pet dog."), "Your regex <code>petRegex</code> should return <code>true</code> for the string <code>"John has a pet dog."</code>");'
  - text: Su regex <code>petRegex</code> debe devolver <code>false</code> para la cadena <code>&quot;Emma has a pet rock.&quot;</code>
    testString: 'assert(!petRegex.test("Emma has a pet rock."), "Your regex <code>petRegex</code> should return <code>false</code> for the string <code>"Emma has a pet rock."</code>");'
  - text: Tu regex <code>petRegex</code> debe devolver <code>true</code> para la cadena <code>&quot;Emma has a pet bird.&quot;</code>
    testString: 'assert(petRegex.test("Emma has a pet bird."), "Your regex <code>petRegex</code> should return <code>true</code> for the string <code>"Emma has a pet bird."</code>");'
  - text: Tu regex <code>petRegex</code> debe devolver <code>true</code> para la cadena <code>&quot;Liz has a pet cat.&quot;</code>
    testString: 'assert(petRegex.test("Liz has a pet cat."), "Your regex <code>petRegex</code> should return <code>true</code> for the string <code>"Liz has a pet cat."</code>");'
  - text: Su regex <code>petRegex</code> debe devolver <code>false</code> para la cadena <code>&quot;Kara has a pet dolphin.&quot;</code>
    testString: 'assert(!petRegex.test("Kara has a pet dolphin."), "Your regex <code>petRegex</code> should return <code>false</code> for the string <code>"Kara has a pet dolphin."</code>");'
  - text: Su regex <code>petRegex</code> debe devolver <code>true</code> para la cadena <code>&quot;Alice has a pet fish.&quot;</code>
    testString: 'assert(petRegex.test("Alice has a pet fish."), "Your regex <code>petRegex</code> should return <code>true</code> for the string <code>"Alice has a pet fish."</code>");'
  - text: Su regex <code>petRegex</code> debe devolver <code>false</code> para la cadena <code>&quot;Jimmy has a pet computer.&quot;</code>
    testString: 'assert(!petRegex.test("Jimmy has a pet computer."), "Your regex <code>petRegex</code> should return <code>false</code> for the string <code>"Jimmy has a pet computer."</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let petString = "James has a pet cat.";
let petRegex = /change/; // Change this line
let result = petRegex.test(petString);
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
