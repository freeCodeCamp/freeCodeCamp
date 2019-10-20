---
id: 587d7db9367417b2b2512ba7
title: Specify Exact Number of Matches
challengeType: 1
videoUrl: ''
localeTitle: Especifique el número exacto de coincidencias
---

## Description
<section id="description"> Puede especificar el número inferior y superior de patrones con <code>quantity specifiers</code> utilizando llaves. A veces solo quieres un número específico de coincidencias. Para especificar un cierto número de patrones, solo tiene ese número entre los corchetes. Por ejemplo, para hacer coincidir solo la palabra <code>&quot;hah&quot;</code> con la letra <code>a</code> <code>3</code> veces, su expresión regular sería <code>/ha{3}h/</code> . <blockquote> sea ​​A4 = &quot;haaaah&quot;; <br> sea ​​A3 = &quot;haaah&quot;; <br> deje A100 = &quot;h&quot; + &quot;a&quot; .repeat (100) + &quot;h&quot;; <br> sea ​​multipleHA = / ha {3} h /; <br> multipleHA.test (A4); // Devuelve falso <br> prueba de prueba múltiple (A3); // Devuelve true <br> prueba de prueba múltiple (A100); // Devuelve falso </blockquote></section>

## Instructions
<section id="instructions"> Cambie el regex <code>timRegex</code> para que coincida con la palabra <code>&quot;Timber&quot;</code> solo cuando tenga cuatro letras <code>m</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su expresión regular debe utilizar llaves.
    testString: 'assert(timRegex.source.match(/{.*?}/).length > 0, "Your regex should use curly brackets.");'
  - text: Tu expresión regular no debe coincidir con <code>&quot;Timber&quot;</code>
    testString: 'assert(!timRegex.test("Timber"), "Your regex should not match <code>"Timber"</code>");'
  - text: Tu expresión regular no debe coincidir con <code>&quot;Timmber&quot;</code>
    testString: 'assert(!timRegex.test("Timmber"), "Your regex should not match <code>"Timmber"</code>");'
  - text: Tu expresión regular no debe coincidir con <code>&quot;Timmmber&quot;</code>
    testString: 'assert(!timRegex.test("Timmmber"), "Your regex should not match <code>"Timmmber"</code>");'
  - text: Tu expresión regular debe coincidir con <code>&quot;Timmmmber&quot;</code>
    testString: 'assert(timRegex.test("Timmmmber"), "Your regex should match <code>"Timmmmber"</code>");'
  - text: Su expresión regular no debe coincidir con <code>&quot;Timber&quot;</code> con 30 <code>m</code> en ella.
    testString: 'assert(!timRegex.test("Ti" + "m".repeat(30) + "ber"), "Your regex should not match <code>"Timber"</code> with 30 <code>m</code>\"s in it.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let timStr = "Timmmmber";
let timRegex = /change/; // Change this line
let result = timRegex.test(timStr);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
