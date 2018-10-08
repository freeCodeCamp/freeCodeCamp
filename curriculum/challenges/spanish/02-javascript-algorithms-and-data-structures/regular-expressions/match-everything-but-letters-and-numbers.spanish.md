---
id: 587d7db8367417b2b2512ba0
title: Match Everything But Letters and Numbers
localeTitle: Unir todo, excepto letras y números
challengeType: 1
---

## Description
<section id='description'> 
Ha aprendido que puede usar un atajo para hacer coincidir los caracteres alfanuméricos <code>[A-Za-z0-9_]</code> usando <code>\w</code> . Un patrón natural que quizás desee buscar es el opuesto a los alfanuméricos. 
Puede buscar lo contrario de <code>\w</code> con <code>\W</code> Tenga en cuenta, el patrón opuesto utiliza una letra mayúscula. Este atajo es el mismo que <code>[^A-Za-z0-9_]</code> . 
<blockquote>let shortHand = /\W/;<br>let numbers = "42%";<br>let sentence = "Coding!";<br>numbers.match(shortHand); // Returns ["%"]<br>sentence.match(shortHand); // Returns ["!"]<br></blockquote> 
</section>

## Instructions
<section id='instructions'> 
Use la clase de caracteres abreviados <code>\W</code> para contar el número de caracteres no alfanuméricos en varias comillas y cadenas. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su expresión regular debe utilizar la bandera global.
    testString: 'assert(nonAlphabetRegex.global, "Your regex should use the global flag.");'
  - text: Su expresión regular debe encontrar 6 caracteres no alfanuméricos en <code clase = "notranslate"> "Los cinco asistentes de boxeo saltan rápidamente".
    testString: 'assert("The five boxing wizards jump quickly.".match(nonAlphabetRegex).length == 6, "Your regex should find 6 non-alphanumeric characters in <code>"The five boxing wizards jump quickly."</code>.");'
  - text: Tu expresión regular debe usar el carácter de taquigrafía.
    testString: 'assert(/\\W/.test(nonAlphabetRegex.source), "Your regex should use the shorthand character to match characters which are non-alphanumeric.");'
  - text: Su expresión regular debe encontrar 8 caracteres no alfanuméricos en <code class = "notranslate"> "Empaque mi caja con cinco docenas de jarras de licor". </code>
    testString: 'assert("Pack my box with five dozen liquor jugs.".match(nonAlphabetRegex).length == 8, "Your regex should find 8 non-alphanumeric characters in <code>"Pack my box with five dozen liquor jugs."</code>");'
  - text: Tu expresión regular debe encontrar 6 caracteres no alfanuméricos en <code class = "notranslate"> "¡Qué rápido y zumbido de zebras!" </code>
    testString: 'assert("How vexingly quick daft zebras jump!".match(nonAlphabetRegex).length == 6, "Your regex should find 6 non-alphanumeric characters in <code>"How vexingly quick daft zebras jump!"</code>");'
  - text: Su expresión regular debe encontrar 12 caracteres no alfanuméricos en <code clase = "notranslate"> "123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ." </code>
    testString: 'assert("123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.".match(nonAlphabetRegex).length == 12, "Your regex should find 12 non-alphanumeric characters in <code>"123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ."</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /change/; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
