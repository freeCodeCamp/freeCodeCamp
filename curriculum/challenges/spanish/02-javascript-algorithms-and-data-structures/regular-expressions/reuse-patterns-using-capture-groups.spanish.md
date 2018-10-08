---
id: 587d7dbb367417b2b2512baa
title: Reuse Patterns Using Capture Groups
localeTitle: Reutilizar patrones usando grupos de captura
challengeType: 1
---

## Description
<section id='description'> 
Algunos patrones que busca ocurrirán varias veces en una cadena. Es un desperdicio repetir manualmente la expresión regular. Hay una mejor manera de especificar cuándo tiene varias subcadenas de repetición en su cadena. 
Puede buscar subcadenas repetidas usando <code>capture groups</code> . Los paréntesis, <code>(</code> y <code>)</code> , se utilizan para encontrar subcadenas repetidas. Pones la expresión regular del patrón que se repetirá entre paréntesis. 
Para especificar dónde aparecerá esa cadena de repetición, use una barra diagonal inversa ( <code>\</code> ) y luego un número. Este número comienza en 1 y aumenta con cada grupo de captura adicional que use. Un ejemplo sería <code>\1</code> para que coincida con el primer grupo. 
El siguiente ejemplo coincide con cualquier palabra que aparezca dos veces separadas por un espacio: 
<blockquote>let repeatStr = "regex regex";<br>let repeatRegex = /(\w+)\s\1/;<br>repeatRegex.test(repeatStr); // Returns true<br>repeatStr.match(repeatRegex); // Returns ["regex regex", "regex"]</blockquote> 
uso del método <code>.match()</code> en una cadena devolverá una matriz con la cadena que coincide, junto con su grupo de captura. 
</section>

## Instructions
<section id='instructions'> 
Use los <code>capture groups</code> en <code>reRegex</code> para hacer coincidir los números que se repiten solo tres veces en una cadena, cada uno separado por un espacio. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su expresión regular debe usar la clase de caracteres abreviados para los dígitos.
    testString: 'assert(reRegex.source.match(/\\d/), "Your regex should use the shorthand character class for digits.");'
  - text: Su expresión regular debe reutilizar el grupo de captura dos veces.
    testString: 'assert(reRegex.source.match(/\\\d/g).length === 2, "Your regex should reuse the capture group twice.");'
  - text: Su expresión regular debe tener dos espacios que separan los tres números.
    testString: 'assert(reRegex.source.match(/\\s/g).length === 2, "Your regex should have two spaces separating the three numbers.");'
  - text: Su expresión regular debe coincidir con <code class = "notranslate"> "42 42 42" </code>.
    testString: 'assert(reRegex.test("42 42 42"), "Your regex should match <code>"42 42 42"</code>.");'
  - text: Su expresión regular debe coincidir con <code class = "notranslate"> "100 100 100" </code>.
    testString: 'assert(reRegex.test("100 100 100"), "Your regex should match <code>"100 100 100"</code>.");'
  - text: Su expresión regular no debe coincidir con <code clase = "notranslate"> "42 42 42 42" </code>.
    testString: 'assert.equal(("42 42 42 42").match(reRegex.source), null, "Your regex should not match <code>"42 42 42 42"</code>.");'
  - text: Su expresión regular no debe coincidir con <code clase = "notranslate"> "42 42" </code>.
    testString: 'assert.equal(("42 42").match(reRegex.source), null, "Your regex should not match <code>"42 42"</code>.");'
  - text: Su expresión regular no debe coincidir con <code clase = "notranslate"> "101 102 103" </code>.
    testString: 'assert(!reRegex.test("101 102 103"), "Your regex should not match <code>"101 102 103"</code>.");'
  - text: Su expresión regular no debe coincidir con <code clase = "notranslate"> "1 2 3" </code>.
    testString: 'assert(!reRegex.test("1 2 3"), "Your regex should not match <code>"1 2 3"</code>.");'
  - text: Su expresión regular debe coincidir con <code class = "notranslate"> "10 10 10" </code>.
    testString: 'assert(reRegex.test("10 10 10"), "Your regex should match <code>"10 10 10"</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let repeatNum = "42 42 42";
let reRegex = /change/; // Change this line
let result = reRegex.test(repeatNum);
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
