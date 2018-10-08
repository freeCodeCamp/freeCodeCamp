---
id: 587d7db7367417b2b2512b9c
title: Find One or More Criminals in a Hunt
localeTitle: Encuentra uno o más criminales en una cacería
challengeType: 1
---

## Description
<section id='description'> 
Tiempo para pausar y probar sus nuevas habilidades de escritura de expresiones regulares. Un grupo de criminales escapó de la cárcel y se escapó, pero no sabes cuántos. Sin embargo, sí sabes que permanecen juntos cuando están cerca de otras personas. Eres responsable de encontrar a todos los criminales a la vez. 
Aquí hay un ejemplo para revisar cómo hacer esto: 
La expresión regular <code>/z+/</code> coincide con la letra <code>z</code> cuando aparece una o más veces seguidas. Encontraría coincidencias en todas las cadenas siguientes: 
<blockquote>"z"<br>"zzzzzz"<br>"ABCzzzz"<br>"zzzzABC"<br>"abczzzzzzzzzzzzzzzzzzzzzabc"</blockquote> 
Pero no encuentra coincidencias en las siguientes cadenas ya que no hay caracteres de la letra <code>z</code> : 
<blockquote>""<br>"ABC"<br>"abcabc"</blockquote> 
</section>

## Instructions
<section id='instructions'> 
Escriba una expresión regular <code>greedy</code> que encuentre uno o más delincuentes dentro de un grupo de otras personas. Un criminal está representado por la letra mayúscula <code>C</code> 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su expresión regular debe coincidir con <code>one</code> criminal (&quot; <code>C</code> &quot;) en <code>&quot;C&quot;</code>
    testString: 'assert("C".match(reCriminals) && "C".match(reCriminals)[0] == "C", "Your regex should match <code>one</code> criminal ("<code>C</code>") in <code>"C"</code>");'
  - text: Su expresión regular debe coincidir con <code>two</code> delincuentes (&quot; <code>CC</code> &quot;) en <code>&quot;CC&quot;</code>
    testString: 'assert("CC".match(reCriminals) && "CC".match(reCriminals)[0] == "CC", "Your regex should match <code>two</code> criminals ("<code>CC</code>") in <code>"CC"</code>");'
  - text: Su expresión regular debe coincidir con <code>three</code> delincuentes (&quot; <code>CCC</code> &quot;) en <code>&quot;P1P5P4CCCP2P6P3&quot;</code>
    testString: 'assert("P1P5P4CCCP2P6P3".match(reCriminals) && "P1P5P4CCCP2P6P3".match(reCriminals)[0] == "CCC", "Your regex should match <code>three</code> criminals ("<code>CCC</code>") in <code>"P1P5P4CCCP2P6P3"</code>");'
  - text: Su expresión regular debe coincidir con <code>five</code> delincuentes (&quot; <code>CCCCC</code> &quot;) en <code>&quot;P6P2P7P4P5CCCCCP3P1&quot;</code>
    testString: 'assert("P6P2P7P4P5CCCCCP3P1".match(reCriminals) && "P6P2P7P4P5CCCCCP3P1".match(reCriminals)[0] == "CCCCC", "Your regex should match <code>five</code> criminals ("<code>CCCCC</code>") in <code>"P6P2P7P4P5CCCCCP3P1"</code>");'
  - text: Tu expresión regular no debe coincidir con ningún criminal en <code>&quot;&quot;</code>
    testString: 'assert(!reCriminals.test(""), "Your regex should not match any criminals in <code>""</code>");'
  - text: Su expresión regular no debe coincidir con ningún criminal en <code>&quot;P1P2P3&quot;</code>
    testString: 'assert(!reCriminals.test("P1P2P3"), "Your regex should not match any criminals in <code>"P1P2P3"</code>");'
  - text: Su expresión regular debe coincidir con <code>fifty</code> delincuentes (&quot; <code>CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC</code> &quot;) en <code>&quot;P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3&quot;</code> .
    testString: 'assert("P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3".match(reCriminals) && "P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3".match(reCriminals)[0] == "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC", "Your regex should match <code>fifty</code> criminals ("<code>CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC</code>") in <code>"P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3"</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// example crowd gathering
let crowd = 'P1P2P3P4P5P6CCCP7P8P9';

let reCriminals = /./; // Change this line

let matchedCriminals = crowd.match(reCriminals);
console.log(matchedCriminals);
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
