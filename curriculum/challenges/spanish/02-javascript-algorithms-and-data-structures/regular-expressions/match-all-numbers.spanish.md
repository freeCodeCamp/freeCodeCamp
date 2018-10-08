---
id: 5d712346c441eddfaeb5bdef
title: Match All Numbers
localeTitle: Coincidir todos los números
challengeType: 1
---

## Description
<section id='description'> 
Ha aprendido atajos para patrones de cadena comunes como alfanuméricos. Otro patrón común es buscar solo dígitos o números. 
El atajo para buscar caracteres de dígitos es <code>\d</code> , con una minúscula <code>d</code> . Esto es igual a la clase de caracteres <code>[0-9]</code> , que busca un solo carácter de cualquier número entre cero y nueve. 
</section>

## Instructions
<section id='instructions'> 
Use la clase de caracteres abreviados <code>\d</code> para contar cuántos dígitos hay en los títulos de las películas. Los números escritos (&quot;seis&quot; en lugar de 6) no cuentan. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Tu expresión regular debe usar el atajo para coincidir con los dígitos.
    testString: 'assert(/\\d/.test(numRegex.source), "Your regex should use the shortcut character to match digit characters");'
  - text: Su expresión regular debe utilizar la bandera global.
    testString: 'assert(numRegex.global, "Your regex should use the global flag.");'
  - text: Su expresión regular debe encontrar 1 dígito en <code clase = "notranslate"> "9" </code>.
    testString: 'assert("9".match(numRegex).length == 1, "Your regex should find 1 digit in <code>"9"</code>.");'
  - text: Su expresión regular debe encontrar 2 dígitos en <code class = "notranslate"> "Catch 22" </code>.
    testString: 'assert("Catch 22".match(numRegex).length == 2, "Your regex should find 2 digits in <code>"Catch 22"</code>.");'
  - text: Su expresión regular debe encontrar 3 dígitos en <code class = "notranslate"> "101 Dalmatians" </code>.
    testString: 'assert("101 Dalmatians".match(numRegex).length == 3, "Your regex should find 3 digits in <code>"101 Dalmatians"</code>.");'
  - text: 'Su expresión regular no debe encontrar dígitos en <code class = "notranslate"> "One, Two, Three" </code>.'
    testString: 'assert("One, Two, Three".match(numRegex) == null, "Your regex should find no digits in <code>"One, Two, Three"</code>.");'
  - text: Su expresión regular debe encontrar 2 dígitos en <code clase = "notranslate"> "21 Jump Street" </code>.
    testString: 'assert("21 Jump Street".match(numRegex).length == 2, "Your regex should find 2 digits in <code>"21 Jump Street"</code>.");'
  - text: 'Su expresión regular debe encontrar 4 dígitos en <code class = "notranslate"> "2001: A Space Odyssey" </code>.'
    testString: 'assert("2001: A Space Odyssey".match(numRegex).length == 4, "Your regex should find 4 digits in <code>"2001: A Space Odyssey"</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let numString = "Your sandwich will be $5.00";
let numRegex = /change/; // Change this line
let result = numString.match(numRegex).length;
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
