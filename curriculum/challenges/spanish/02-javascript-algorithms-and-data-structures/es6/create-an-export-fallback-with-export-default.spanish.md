---
id: 587d7b8c367417b2b2512b58
title: Create an Export Fallback with export default
challengeType: 1
videoUrl: ''
localeTitle: Crear un respaldo de exportación con la exportación predeterminada
---

## Description
<section id="description"> En la lección de <code>export</code> , aprendió sobre la sintaxis denominada <dfn>exportación con nombre</dfn> . Esto le permitió tener múltiples funciones y variables disponibles para usar en otros archivos. Hay otra sintaxis de <code>export</code> que necesita conocer, conocida como <dfn>exportación predeterminada</dfn> . Por lo general, utilizará esta sintaxis si solo se exporta un valor desde un archivo. También se utiliza para crear un valor de reserva para un archivo o módulo. Aquí hay un ejemplo rápido de la <code>export default</code> : <blockquote> función predeterminada de exportación agregar (x, y) { <br> devuelve x + y; <br> } </blockquote> Nota: Dado que <code>export default</code> se utiliza para declarar un valor de reserva para un módulo o archivo, solo puede tener un valor como exportación predeterminada en cada módulo o archivo. Además, no puede utilizar <code>export default</code> con <code>var</code> , <code>let</code> o <code>const</code> </section>

## Instructions
<section id="instructions"> La siguiente función debe ser el valor de retorno para el módulo. Por favor agregue el código necesario para hacerlo. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Uso adecuado de la <code>export</code> reserva.
    testString: 'getUserInput => assert(getUserInput("index").match(/export\s+default\s+function\s+subtract\(x,y\)\s+{return\s+x\s-\s+y;}/g), "Proper used of <code>export</code> fallback.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
"use strict";
function subtract(x,y) {return x - y;}

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
