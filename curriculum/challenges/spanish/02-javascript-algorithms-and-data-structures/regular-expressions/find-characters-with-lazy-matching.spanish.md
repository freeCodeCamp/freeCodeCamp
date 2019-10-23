---
id: 587d7db6367417b2b2512b9b
title: Find Characters with Lazy Matching
challengeType: 1
videoUrl: ''
localeTitle: Encuentra personajes con Lazy Matching
---

## Description
<section id="description"> En expresiones regulares, una coincidencia <code>greedy</code> encuentra la parte más larga posible de una cadena que se ajusta al patrón de expresiones regulares y la devuelve como una coincidencia. La alternativa se denomina coincidencia <code>lazy</code> , que encuentra la parte más pequeña posible de la cadena que satisface el patrón de expresiones regulares. Puede aplicar la expresión regular <code>/t[az]*i/</code> a la cadena <code>&quot;titanic&quot;</code> . Esta expresión regular es básicamente un patrón que comienza con <code>t</code> , termina con <code>i</code> y tiene algunas letras en medio. Las expresiones regulares son, por defecto, <code>greedy</code> , por lo que la coincidencia devolvería <code>[&quot;titani&quot;]</code> . Encuentra la subcadena más grande posible para ajustar el patrón. Sin embargo, puede utilizar el <code>?</code> Personaje para cambiarlo a juego <code>lazy</code> . <code>&quot;titanic&quot;</code> emparejado contra la expresión regular ajustada de <code>/t[az]*?i/</code> devuelve <code>[&quot;ti&quot;]</code> . </section>

## Instructions
<section id="instructions"> <code>/&lt;.*&gt;/</code> la expresión regular <code>/&lt;.*&gt;/</code> para devolver la etiqueta HTML <code>&lt;h1&gt;</code> y no el texto <code>&quot;&lt;h1&gt;Winter is coming&lt;/h1&gt;&quot;</code> . Recuerda el comodín <code>.</code> En una expresión regular coincide con cualquier carácter. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: La variable de <code>result</code> debe ser una matriz con <code>&lt;h1&gt;</code> en ella
    testString: 'assert(result[0] == "<h1>", "The <code>result</code> variable should be an array with <code>&lt;h1&gt;</code> in it");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*>/; // Change this line
let result = text.match(myRegex);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
