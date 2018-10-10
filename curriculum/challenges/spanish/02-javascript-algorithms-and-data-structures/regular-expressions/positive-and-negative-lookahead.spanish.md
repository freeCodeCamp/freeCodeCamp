---
id: 587d7dba367417b2b2512ba9
title: Positive and Negative Lookahead
challengeType: 1
videoUrl: ''
localeTitle: Lookahead positivo y negativo
---

## Description
<section id="description"> <code>Lookaheads</code> son patrones que le dicen a JavaScript que mire hacia adelante en tu cadena para buscar patrones más adelante. Esto puede ser útil cuando desea buscar múltiples patrones sobre la misma cadena. Hay dos tipos de <code>lookaheads</code> : <code>positive lookahead</code> y <code>negative lookahead</code> . Un <code>positive lookahead</code> mirará para asegurarse de que el elemento en el patrón de búsqueda esté allí, pero en realidad no lo coincidirá. Un lookahead positivo se usa como <code>(?=...)</code> donde <code>...</code> es la parte requerida que no coincide. Por otro lado, un <code>negative lookahead</code> se verá para asegurarse de que el elemento en el patrón de búsqueda no esté allí. Un lookahead negativo se usa como <code>(?!...)</code> donde el <code>...</code> es el patrón que no desea que esté allí. El resto del patrón se devuelve si la parte de búsqueda anticipada negativa no está presente. Lookaheads son un poco confusos, pero algunos ejemplos ayudarán. <blockquote> let quit = &quot;qu&quot;; <br> Deje que noquit = &quot;qt&quot;; <br> vamos a quRegex = / q (? = u) /; <br> vamos a qRegex = / q (?! u) /; <br> quit.match (quRegex); // Devoluciones [&quot;q&quot;] <br> noquit.match (qRegex); // Devoluciones [&quot;q&quot;] </blockquote> Un uso más práctico de <code>lookaheads</code> es marcar dos o más patrones en una cadena. Aquí hay un verificador de contraseña simple (ingenuamente) que busca entre 3 y 6 caracteres y al menos un número: <blockquote> dejar contraseña = &quot;abc123&quot;; <br> deje checkPass = / (? = \ w {3,6}) (? = \ D * \ d) /; <br> checkPass.test (contraseña); // Devuelve true </blockquote></section>

## Instructions
<section id="instructions"> Use <code>lookaheads</code> en el <code>pwRegex</code> para hacer coincidir las contraseñas que tienen más de 5 caracteres y tienen dos dígitos consecutivos. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su expresión regular debe utilizar dos <code>lookaheads</code> positivos.
    testString: 'assert(pwRegex.source.match(/\(\?=.*?\)\(\?=.*?\)/) !== null, "Your regex should use two positive <code>lookaheads</code>.");'
  - text: Tu expresión regular no debe coincidir con <code>&quot;astronaut&quot;</code>
    testString: 'assert(!pwRegex.test("astronaut"), "Your regex should not match <code>"astronaut"</code>");'
  - text: Su expresión regular no debe coincidir con <code>&quot;airplanes&quot;</code>
    testString: 'assert(!pwRegex.test("airplanes"), "Your regex should not match <code>"airplanes"</code>");'
  - text: Tu expresión regular no debe coincidir con <code>&quot;banan1&quot;</code>
    testString: 'assert(!pwRegex.test("banan1"), "Your regex should not match <code>"banan1"</code>");'
  - text: Tu expresión regular debe coincidir con <code>&quot;bana12&quot;</code>
    testString: 'assert(pwRegex.test("bana12"), "Your regex should match <code>"bana12"</code>");'
  - text: Tu expresión regular debe coincidir con <code>&quot;abc123&quot;</code>
    testString: 'assert(pwRegex.test("abc123"), "Your regex should match <code>"abc123"</code>");'
  - text: Su expresión regular no debe coincidir con <code>&quot;123&quot;</code>
    testString: 'assert(!pwRegex.test("123"), "Your regex should not match <code>"123"</code>");'
  - text: Su expresión regular no debe coincidir con <code>&quot;1234&quot;</code>
    testString: 'assert(!pwRegex.test("1234"), "Your regex should not match <code>"1234"</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let sampleWord = "astronaut";
let pwRegex = /change/; // Change this line
let result = pwRegex.test(sampleWord);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
