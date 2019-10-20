---
id: 587d7db7367417b2b2512b9f
title: Match All Letters and Numbers
challengeType: 1
videoUrl: ''
localeTitle: Unir todas las letras y números
---

## Description
<section id="description"> Usando clases de caracteres, pudiste buscar todas las letras del alfabeto con <code>[az]</code> . Este tipo de clase de caracteres es lo suficientemente común como para que haya un atajo, aunque también incluye algunos caracteres adicionales. La clase de caracteres más cercana en JavaScript para que coincida con el alfabeto es <code>\w</code> . Este atajo es igual a <code>[A-Za-z0-9_]</code> . Esta clase de caracteres coincide con mayúsculas y minúsculas más números. Tenga en cuenta que esta clase de caracteres también incluye el carácter de subrayado ( <code>_</code> ). <blockquote> sea ​​longHand = / [A-Za-z0-9 _] + /; <br> deja shortHand = / \ w + /; <br> dejar números = &quot;42&quot;; <br> deja varNames = &quot;important_var&quot;; <br> longHand.test (números); // Devuelve true <br> shortHand.test (números); // Devuelve true <br> longHand.test (varNames); // Devuelve true <br> shortHand.test (varNames); // Devuelve true </blockquote> Estas clases de caracteres de acceso directo también se conocen como <code>shorthand character classes</code> . </section>

## Instructions
<section id="instructions"> Use la clase de caracteres abreviados <code>\w</code> para contar el número de caracteres alfanuméricos en varias comillas y cadenas. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su expresión regular debe utilizar la bandera global.
    testString: 'assert(alphabetRegexV2.global, "Your regex should use the global flag.");'
  - text: Tu expresión regular debe usar el carácter abreviado
    testString: 'assert(/\\w/.test(alphabetRegexV2.source), "Your regex should use the shorthand character <code>\w</code> to match all characters which are alphanumeric.");'
  - text: Su expresión regular debe encontrar 31 caracteres alfanuméricos en <code>&quot;The five boxing wizards jump quickly.&quot;</code>
    testString: 'assert("The five boxing wizards jump quickly.".match(alphabetRegexV2).length === 31, "Your regex should find 31 alphanumeric characters in <code>"The five boxing wizards jump quickly."</code>");'
  - text: Su expresión regular debe encontrar 32 caracteres alfanuméricos en <code>&quot;Pack my box with five dozen liquor jugs.&quot;</code>
    testString: 'assert("Pack my box with five dozen liquor jugs.".match(alphabetRegexV2).length === 32, "Your regex should find 32 alphanumeric characters in <code>"Pack my box with five dozen liquor jugs."</code>");'
  - text: Tu expresión regular debe encontrar 30 caracteres alfanuméricos en <code>&quot;How vexingly quick daft zebras jump!&quot;</code>
    testString: 'assert("How vexingly quick daft zebras jump!".match(alphabetRegexV2).length === 30, "Your regex should find 30 alphanumeric characters in <code>"How vexingly quick daft zebras jump!"</code>");'
  - text: Su expresión regular debe encontrar 36 caracteres alfanuméricos en <code>&quot;123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.&quot;</code>
    testString: 'assert("123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.".match(alphabetRegexV2).length === 36, "Your regex should find 36 alphanumeric characters in <code>"123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ."</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /change/; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
