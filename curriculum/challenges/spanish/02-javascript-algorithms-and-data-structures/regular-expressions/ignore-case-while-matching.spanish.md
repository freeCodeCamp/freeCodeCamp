---
id: 587d7db4367417b2b2512b91
title: Ignore Case While Matching
localeTitle: Ignorar caso mientras coinciden
challengeType: 1
---

## Description
<section id='description'> 
Hasta ahora, has visto expresiones regulares para hacer coincidencias literales de cadenas. Pero a veces, es posible que también desee igualar las diferencias de casos. 
Caso (o, a veces, mayúsculas) es la diferencia entre letras mayúsculas y minúsculas. Ejemplos de mayúsculas son <code>&quot;A&quot;</code> , <code>&quot;B&quot;</code> y <code>&quot;C&quot;</code> . Ejemplos de minúsculas son <code>&quot;a&quot;</code> , <code>&quot;b&quot;</code> y <code>&quot;c&quot;</code> . 
Puedes hacer coincidir ambos casos usando lo que se llama una bandera. Hay otras banderas, pero aquí se enfocará en la bandera que ignora el caso, la bandera <code>i</code> . Puedes usarlo añadiéndolo a la expresión regular. Un ejemplo de uso de esta bandera es <code>/ignorecase/i</code> . Esta expresión regular puede coincidir con las cadenas <code>&quot;ignorecase&quot;</code> , <code>&quot;igNoreCase&quot;</code> e <code>&quot;IgnoreCase&quot;</code> . 
</section>

## Instructions
<section id='instructions'> 
Escriba una expresión regular <code>fccRegex</code> para que coincida con <code>&quot;freeCodeCamp&quot;</code> , sin importar su caso. Su expresión regular no debe coincidir con ninguna abreviatura o variación con espacios. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Tu expresión regular debe coincidir con <code>freeCodeCamp</code>
    testString: 'assert(fccRegex.test("freeCodeCamp"), "Your regex should match <code>freeCodeCamp</code>");'
  - text: Tu expresión regular debe coincidir con <code>FreeCodeCamp</code>
    testString: 'assert(fccRegex.test("FreeCodeCamp"), "Your regex should match <code>FreeCodeCamp</code>");'
  - text: Tu expresión regular debe coincidir con <code>FreecodeCamp</code>
    testString: 'assert(fccRegex.test("FreecodeCamp"), "Your regex should match <code>FreecodeCamp</code>");'
  - text: Tu expresión regular debe coincidir con <code>FreeCodecamp</code>
    testString: 'assert(fccRegex.test("FreeCodecamp"), "Your regex should match <code>FreeCodecamp</code>");'
  - text: Su expresión regular no debe coincidir con <code>Free Code Camp</code>
    testString: 'assert(!fccRegex.test("Free Code Camp"), "Your regex should not match <code>Free Code Camp</code>");'
  - text: Tu expresión regular debe coincidir con <code>FreeCOdeCamp</code>
    testString: 'assert(fccRegex.test("FreeCOdeCamp"), "Your regex should match <code>FreeCOdeCamp</code>");'
  - text: Su expresión regular no debe coincidir con <code>FCC</code>
    testString: 'assert(!fccRegex.test("FCC"), "Your regex should not match <code>FCC</code>");'
  - text: Tu expresión regular debe coincidir con <code>FrEeCoDeCamp</code>
    testString: 'assert(fccRegex.test("FrEeCoDeCamp"), "Your regex should match <code>FrEeCoDeCamp</code>");'
  - text: Tu expresión regular debe coincidir con <code>FrEeCodECamp</code>
    testString: 'assert(fccRegex.test("FrEeCodECamp"), "Your regex should match <code>FrEeCodECamp</code>");'
  - text: Tu expresión regular debe coincidir con <code>FReeCodeCAmp</code>
    testString: 'assert(fccRegex.test("FReeCodeCAmp"), "Your regex should match <code>FReeCodeCAmp</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let myString = "freeCodeCamp";
let fccRegex = /change/; // Change this line
let result = fccRegex.test(myString);
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
