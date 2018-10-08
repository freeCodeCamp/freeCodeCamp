---
id: 587d7db7367417b2b2512b9d
title: Match Beginning String Patterns
localeTitle: Emparejar patrones de cuerdas que comienzan
challengeType: 1
---

## Description
<section id='description'> 
Los desafíos anteriores mostraron que las expresiones regulares se pueden usar para buscar una serie de coincidencias. También se utilizan para buscar patrones en posiciones específicas en cadenas. 
En un desafío anterior, <code>caret</code> carácter de <code>caret</code> ( <code>^</code> ) dentro de un <code>character set</code> para crear un <code>negated character set</code> en la forma <code>[^thingsThatWillNotBeMatched]</code> . Fuera de un <code>character set</code> , el <code>caret</code> se utiliza para buscar patrones al principio de las cadenas. 
<blockquote>let firstString = "Ricky is first and can be found.";<br>let firstRegex = /^Ricky/;<br>firstRegex.test(firstString);<br>// Returns true<br>let notFirst = "You can't find Ricky now.";<br>firstRegex.test(notFirst);<br>// Returns false</blockquote> 
</section>

## Instructions
<section id='instructions'> 
Use el carácter de <code>caret</code> en una expresión regular para encontrar <code>&quot;Cal&quot;</code> solo al principio de la cadena <code>rickyAndCal</code> . 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su expresión regular debe buscar <code>&quot;Cal&quot;</code> con una letra mayúscula.
    testString: 'assert(calRegex.source == "^Cal", "Your regex should search for <code>"Cal"</code> with a capital letter.");'
  - text: Su expresión regular no debe usar ninguna bandera.
    testString: 'assert(calRegex.flags == "", "Your regex should not use any flags.");'
  - text: Tu expresión regular debe coincidir con <code>&quot;Cal&quot;</code> al principio de la cadena.
    testString: 'assert(calRegex.test("Cal and Ricky both like racing."), "Your regex should match <code>"Cal"</code> at the beginning of the string.");'
  - text: Su expresión regular no debe coincidir con <code>&quot;Cal&quot;</code> en medio de una cadena.
    testString: 'assert(!calRegex.test("Ricky and Cal both like racing."), "Your regex should not match <code>"Cal"</code> in the middle of a string.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /change/; // Change this line
let result = calRegex.test(rickyAndCal);
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
