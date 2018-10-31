---
id: 587d7db9367417b2b2512ba6
title: Specify Only the Lower Number of Matches
challengeType: 1
videoUrl: ''
localeTitle: Especifique solo el número inferior de coincidencias
---

## Description
<section id="description"> Puede especificar el número inferior y superior de patrones con <code>quantity specifiers</code> utilizando llaves. A veces solo desea especificar el número más bajo de patrones sin límite superior. Para especificar solo el número más bajo de patrones, mantenga el primer número seguido de una coma. Por ejemplo, para hacer coincidir solo la cadena <code>&quot;hah&quot;</code> con la letra <code>a</code> aparece al menos <code>3</code> veces, su expresión regular sería <code>/ha{3,}h/</code> . <blockquote> sea ​​A4 = &quot;haaaah&quot;; <br> sea ​​A2 = &quot;haah&quot;; <br> deje A100 = &quot;h&quot; + &quot;a&quot; .repeat (100) + &quot;h&quot;; <br> deja multipleA = / ha {3,} h /; <br> prueba múltiple (A4); // Devuelve true <br> prueba múltiple (A2); // Devuelve falso <br> prueba múltiple (A100); // Devuelve true </blockquote></section>

## Instructions
<section id="instructions"> Cambie el regex <code>haRegex</code> para que coincida con la palabra <code>&quot;Hazzah&quot;</code> solo cuando tenga cuatro o más letras <code>z</code> &#39;s. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su expresión regular debe utilizar llaves.
    testString: 'assert(haRegex.source.match(/{.*?}/).length > 0, "Your regex should use curly brackets.");'
  - text: Tu expresión regular no debe coincidir con <code>&quot;Hazzah&quot;</code>
    testString: 'assert(!haRegex.test("Hazzah"), "Your regex should not match <code>"Hazzah"</code>");'
  - text: Tu expresión regular no debe coincidir con <code>&quot;Hazzzah&quot;</code>
    testString: 'assert(!haRegex.test("Hazzzah"), "Your regex should not match <code>"Hazzzah"</code>");'
  - text: Tu expresión regular debe coincidir con <code>&quot;Hazzzzah&quot;</code>
    testString: 'assert(haRegex.test("Hazzzzah"), "Your regex should match <code>"Hazzzzah"</code>");'
  - text: Tu expresión regular debe coincidir con <code>&quot;Hazzzzzah&quot;</code>
    testString: 'assert(haRegex.test("Hazzzzzah"), "Your regex should match <code>"Hazzzzzah"</code>");'
  - text: Tu expresión regular debe coincidir con <code>&quot;Hazzzzzzah&quot;</code>
    testString: 'assert(haRegex.test("Hazzzzzzah"), "Your regex should match <code>"Hazzzzzzah"</code>");'
  - text: 'Tu expresión regular debe coincidir con <code>&quot;Hazzah&quot;</code> con 30 <code>z</code> \ &#39;s en ella.'
    testString: 'assert(haRegex.test("Ha" + "z".repeat(30) + "ah"), "Your regex should match <code>"Hazzah"</code> with 30 <code>z</code>\"s in it.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let haStr = "Hazzzzah";
let haRegex = /change/; // Change this line
let result = haRegex.test(haStr);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
