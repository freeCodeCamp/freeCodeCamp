---
id: 587d7b8c367417b2b2512b56
title: Use export to Reuse a Code Block
localeTitle: Usar la exportación para reutilizar un bloque de código
challengeType: 1
---

## Description
<section id='description'> 
En el desafío anterior, aprendió acerca de la <code>import</code> y cómo se puede aprovechar para importar pequeñas cantidades de código de archivos grandes. Sin embargo, para que esto funcione, debemos utilizar una de las declaraciones que acompañan a la <code>import</code> , conocida como <dfn>exportación</dfn> . Cuando queremos que un código, una función o una variable, se pueda utilizar en otro archivo, debemos exportarlo para importarlo en otro archivo. Al igual que la <code>import</code> , la <code>export</code> es una característica que no es del navegador. 
Lo siguiente es lo que llamamos una <dfn>exportación con nombre</dfn> . Con esto, podemos importar cualquier código que exportemos a otro archivo con la sintaxis de <code>import</code> que aprendió en la última lección. Aquí hay un ejemplo: 
<blockquote>const capitalizeString = (string) => {<br>&nbsp;&nbsp;return string.charAt(0).toUpperCase() + string.slice(1);<br>}<br>export { capitalizeString } //How to export functions.<br>export const foo = "bar"; //How to export variables.</blockquote> 
Alternativamente, si desea compactar todas sus declaraciones de <code>export</code> en una sola línea, puede adoptar este enfoque: 
<blockquote>const capitalizeString = (string) => {<br>&nbsp;&nbsp;return string.charAt(0).toUpperCase() + string.slice(1);<br>}<br>const foo = "bar";<br>export { capitalizeString, foo }</blockquote> 
Cualquiera de los dos enfoques es perfectamente aceptable. 
</section>

## Instructions
<section id='instructions'> 
A continuación hay dos variables que quiero que estén disponibles para que otros archivos las utilicen. Utilizando la primera forma en que demostré <code>export</code> , exportamos las dos variables. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>foo</code> se exporta.
    testString: 'getUserInput => assert(getUserInput("index").match(/export\s+const\s+foo\s*=\s*"bar"/g), "<code>foo</code> is exported.");'
  - text: <code>bar</code> se exporta.
    testString: 'getUserInput => assert(getUserInput("index").match(/export\s+const\s+bar\s*=\s*"foo"/g), "<code>bar</code> is exported.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
"use strict";
const foo = "bar";
const bar = "foo";
```

</div>

### Before Test
<div id='js-setup'>

```js
window.exports = function(){};
```

</div>


</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
