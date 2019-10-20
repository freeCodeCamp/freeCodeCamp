---
id: 587d7dbb367417b2b2512bab
title: Use Capture Groups to Search and Replace
challengeType: 1
videoUrl: ''
localeTitle: Utilice los grupos de captura para buscar y reemplazar
---

## Description
<section id="description"> La búsqueda es útil. Sin embargo, puede hacer que la búsqueda sea aún más poderosa cuando también cambia (o reemplaza) el texto que coincide. Puede buscar y reemplazar texto en una cadena usando <code>.replace()</code> en una cadena. Las entradas para <code>.replace()</code> son primero el patrón de <code>.replace()</code> regulares que desea buscar. El segundo parámetro es la cadena para reemplazar la coincidencia o una función para hacer algo. <blockquote> let wrongText = &quot;El cielo es plateado.&quot;; <br> Deje silverRegex = / silver /; <br> wrongText.replace (silverRegex, &quot;blue&quot;); <br> // Devuelve &quot;El cielo es azul&quot;. </blockquote> También puede acceder a grupos de captura en la cadena de reemplazo con signos de dólar ( <code>$</code> ). <blockquote> &quot;Code Camp&quot; .replace (/ (\ w +) \ s (\ w +) /, &#39;$ 2 $ 1&#39;); <br> // Devuelve &quot;Código de campamento&quot; </blockquote></section>

## Instructions
<section id="instructions"> Escriba una expresión regular para que busque la cadena <code>&quot;good&quot;</code> . Luego actualice la variable <code>replaceText</code> para reemplazar <code>&quot;good&quot;</code> con <code>&quot;okey-dokey&quot;</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Debes usar <code>.replace()</code> para buscar y reemplazar.
    testString: 'assert(code.match(/\.replace\(.*\)/), "You should use <code>.replace()</code> to search and replace.");'
  - text: Tu expresión regular debería cambiar <code>&quot;This sandwich is good.&quot;</code> a <code>&quot;This sandwich is okey-dokey.&quot;</code>
    testString: 'assert(result == "This sandwich is okey-dokey." && replaceText === "okey-dokey", "Your regex should change <code>"This sandwich is good."</code> to <code>"This sandwich is okey-dokey."</code>");'
  - text: No debes cambiar la última línea.
    testString: 'assert(code.match(/result\s*=\s*huhText\.replace\(.*?\)/), "You should not change the last line.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let huhText = "This sandwich is good.";
let fixRegex = /change/; // Change this line
let replaceText = ""; // Change this line
let result = huhText.replace(fixRegex, replaceText);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
