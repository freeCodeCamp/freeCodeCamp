---
id: 587d7db4367417b2b2512b93
title: Find More Than the First Match
challengeType: 1
videoUrl: ''
localeTitle: Encuentra más que el primer partido
---

## Description
<section id="description"> Hasta ahora, solo ha podido extraer o buscar un patrón una vez. <blockquote> deje testStr = &quot;Repetir, Repetir, Repetir&quot;; <br> vamos a nuestroRegex = / Repetir /; <br> testStr.match (ourRegex); <br> // Devoluciones [&quot;Repetir&quot;] </blockquote> Para buscar o extraer un patrón más de una vez, puede usar la bandera <code>g</code> . <blockquote> vamos a repeatRegex = / Repetir / g; <br> testStr.match (repeatRegex); <br> // Devuelve [&quot;Repetir&quot;, &quot;Repetir&quot;, &quot;Repetir&quot;] </blockquote></section>

## Instructions
<section id="instructions"> Usando el regex <code>starRegex</code> , encuentra y extrae ambas palabras <code>&quot;Twinkle&quot;</code> de la cadena <code>twinkleStar</code> . <strong>Nota</strong> <br> Puedes tener múltiples banderas en tu expresión regular como <code>/search/gi</code> </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Tu regex <code>starRegex</code> debe usar la bandera global <code>g</code>
    testString: 'assert(starRegex.flags.match(/g/).length == 1, "Your regex <code>starRegex</code> should use the global flag <code>g</code>");'
  - text: Su regex <code>starRegex</code> debe usar el indicador de mayúsculas y minúsculas <code>i</code>
    testString: 'assert(starRegex.flags.match(/i/).length == 1, "Your regex <code>starRegex</code> should use the case insensitive flag <code>i</code>");'
  - text: Tu coincidencia debe coincidir con ambas apariciones de la palabra <code>&quot;Twinkle&quot;</code>
    testString: 'assert(result.sort().join() == twinkleStar.match(/twinkle/gi).sort().join(), "Your match should match both occurrences of the word <code>"Twinkle"</code>");'
  - text: El <code>result</code> tu partida debe tener dos elementos.
    testString: 'assert(result.length == 2, "Your match <code>result</code> should have two elements in it.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /change/; // Change this line
let result = twinkleStar; // Change this line

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
