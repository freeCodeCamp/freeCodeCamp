---
id: 587d7b8d367417b2b2512b59
title: Import a Default Export
localeTitle: Importar una exportación predeterminada
challengeType: 1
---

## Description
<section id='description'> 
En el último desafío, aprendiste acerca de la <code>export default</code> y sus usos. Es importante tener en cuenta que, para importar una exportación predeterminada, debe usar una sintaxis de <code>import</code> diferente. 
En el siguiente ejemplo, tenemos una función, <code>add</code> , que es la exportación predeterminada de un archivo, <code>&quot;math_functions&quot;</code> . Aquí está cómo importarlo: 
<blockquote>import add from "math_functions";<br>add(5,4); //Will return 9</blockquote> 
La sintaxis difiere en un lugar clave: el valor importado, <code>add</code> , no está rodeado por llaves, <code>{}</code> . A diferencia de los valores exportados, el método principal para importar una exportación predeterminada es simplemente escribir el nombre del valor después de la <code>import</code> . 
</section>

## Instructions
<section id='instructions'> 
En el siguiente código, importe la exportación predeterminada, <code>subtract</code> , del archivo <code>&quot;math_functions&quot;</code> , que se encuentra en el mismo directorio que este archivo. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Importa adecuadamente <code>export default</code> método <code>export default</code> .
    testString: 'getUserInput => assert(getUserInput("index").match(/import\s+subtract\s+from\s+"math_functions"/g), "Properly imports <code>export default</code> method.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
"use strict";
subtract(7,4);
```

</div>

### Before Test
<div id='js-setup'>

```js
window.require = function(str) {
if (str === 'math_functions') {
return function(a, b) {
return a - b;
}}};
```

</div>


</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
