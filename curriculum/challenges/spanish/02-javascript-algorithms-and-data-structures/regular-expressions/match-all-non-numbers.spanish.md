---
id: 587d7db8367417b2b2512ba1
title: Match All Non-Numbers
localeTitle: Coincidir con todos los no números
challengeType: 1
---

## Description
<section id='description'>
El último desafío mostró cómo buscar dígitos usando el método abreviado <code>\d</code> con una minúscula <code>d</code> . También puede buscar no dígitos usando un atajo similar que use una <code>D</code> mayúscula en su lugar.
El atajo para buscar caracteres sin dígitos es <code>\D</code> Esto es igual a la clase de caracteres <code>[^0-9]</code> , que busca un solo carácter que no sea un número entre cero y nueve.
</section>

## Instructions
<section id='instructions'>
Use la clase de caracteres abreviados para no dígitos <code>\D</code> para contar cuántos no dígitos hay en los títulos de las películas.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su expresión regular debe usar el carácter de acceso directo para hacer coincidir los caracteres que no son dígitos
    testString: 'assert(/\\D/.test(noNumRegex.source), "Your regex should use the shortcut character to match non-digit characters");'
  - text: Su expresión regular debe utilizar la bandera global.
    testString: 'assert(noNumRegex.global, "Your regex should use the global flag.");'
  - text: Su expresión regular no debe encontrar dígitos que no sean dígitos en <code class = "notranslate"> "9" </code>.
    testString: 'assert("9".match(noNumRegex) == null, "Your regex should find no non-digits in <code>"9"</code>.");'
  - text: Su expresión regular debe encontrar 6 no dígitos en <code class = "notranslate"> "Catch 22" </code>.
    testString: 'assert("Catch 22".match(noNumRegex).length == 6, "Your regex should find 6 non-digits in <code>"Catch 22"</code>.");'
  - text: Su expresión regular debe encontrar 11 no dígitos en <code class = "notranslate"> "101 Dalmatians" </code>.
    testString: 'assert("101 Dalmatians".match(noNumRegex).length == 11, "Your regex should find 11 non-digits in <code>"101 Dalmatians"</code>.");'
  - text: 'Su expresión regular debe encontrar 15 no dígitos en <código clase = "notranslate"> "Uno, dos, tres" </code>.'
    testString: 'assert("One, Two, Three".match(noNumRegex).length == 15, "Your regex should find 15 non-digits in <code>"One, Two, Three"</code>.");'
  - text: Su expresión regular debe encontrar 12 no dígitos en <code class = "notranslate"> "21 Jump Street" </code>.
    testString: 'assert("21 Jump Street".match(noNumRegex).length == 12, "Your regex should find 12 non-digits in <code>"21 Jump Street"</code>.");'
  - text: 'Su expresión regular debe encontrar 17 dígitos que no sean dígitos en <code class =" notranslate ">" 2001: A Space Odyssey "</code>. '
    testString: 'assert("2001: A Space Odyssey".match(noNumRegex).length == 17, "Your regex should find 17 non-digits in <code>"2001: A Space Odyssey"</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let numString = "Your sandwich will be $5.00";
let noNumRegex = /change/; // Change this line
let result = numString.match(noNumRegex).length;
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
