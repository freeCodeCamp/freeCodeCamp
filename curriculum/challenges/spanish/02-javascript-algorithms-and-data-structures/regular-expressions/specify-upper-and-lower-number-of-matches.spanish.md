---
id: 587d7db9367417b2b2512ba5
title: Specify Upper and Lower Number of Matches
challengeType: 1
videoUrl: ''
localeTitle: Especifique el número superior e inferior de coincidencias
---

## Description
<section id="description"> Recuerde que utiliza el signo más <code>+</code> para buscar uno o más caracteres y el asterisco <code>*</code> para buscar cero o más caracteres. Estos son convenientes, pero a veces usted quiere hacer coincidir un cierto rango de patrones. Puede especificar el número inferior y superior de patrones con <code>quantity specifiers</code> . Los especificadores de cantidad se utilizan con llaves ( <code>{</code> y <code>}</code> ). Pones dos números entre las llaves: para el número inferior y superior de patrones. Por ejemplo, para hacer coincidir solo la letra <code>a</code> aparece entre <code>3</code> y <code>5</code> veces en la cadena <code>&quot;ah&quot;</code> , su expresión regular sería <code>/a{3,5}h/</code> . <blockquote> sea ​​A4 = &quot;aaaah&quot;; <br> sea ​​A2 = &quot;aah&quot;; <br> deja multipleA = / a {3,5} h /; <br> prueba múltiple (A4); // Devuelve true <br> prueba múltiple (A2); // Devuelve falso </blockquote></section>

## Instructions
<section id="instructions"> Cambie el regex <code>ohRegex</code> para que coincida solo con <code>3</code> a <code>6</code> letras <code>h</code> en la palabra <code>&quot;Oh no&quot;</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su expresión regular debe utilizar llaves.
    testString: 'assert(ohRegex.source.match(/{.*?}/).length > 0, "Your regex should use curly brackets.");'
  - text: Tu expresión regular no debe coincidir con <code>&quot;Ohh no&quot;</code>
    testString: 'assert(!ohRegex.test("Ohh no"), "Your regex should not match <code>"Ohh no"</code>");'
  - text: Tu expresión regular debe coincidir con <code>&quot;Ohhh no&quot;</code>
    testString: 'assert(ohRegex.test("Ohhh no"), "Your regex should match <code>"Ohhh no"</code>");'
  - text: Tu expresión regular debe coincidir con <code>&quot;Ohhhh no&quot;</code>
    testString: 'assert(ohRegex.test("Ohhhh no"), "Your regex should match <code>"Ohhhh no"</code>");'
  - text: Tu expresión regular debe coincidir con <code>&quot;Ohhhhh no&quot;</code>
    testString: 'assert(ohRegex.test("Ohhhhh no"), "Your regex should match <code>"Ohhhhh no"</code>");'
  - text: Tu expresión regular debe coincidir con <code>&quot;Ohhhhhh no&quot;</code>
    testString: 'assert(ohRegex.test("Ohhhhhh no"), "Your regex should match <code>"Ohhhhhh no"</code>");'
  - text: Tu expresión regular no debe coincidir con <code>&quot;Ohhhhhhh no&quot;</code>
    testString: 'assert(!ohRegex.test("Ohhhhhhh no"), "Your regex should not match <code>"Ohhhhhhh no"</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let ohStr = "Ohhh no";
let ohRegex = /change/; // Change this line
let result = ohRegex.test(ohStr);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
