---
id: 587d7b8c367417b2b2512b57
title: Use * to Import Everything from a File
localeTitle: Usa * para importar todo desde un archivo
challengeType: 1
---

## Description
<section id='description'> 
Suponga que tiene un archivo que desea importar todo su contenido en el archivo actual. Esto se puede hacer con la sintaxis de <dfn>importación *</dfn> . 
Aquí hay un ejemplo donde el contenido de un archivo llamado <code>&quot;math_functions&quot;</code> se importa a un archivo en el mismo directorio: 
<blockquote>import * as myMathModule from "math_functions";<br>myMathModule.add(2,3);<br>myMathModule.subtract(5,3);</blockquote> 
Y rompiendo ese código: 
<blockquote>import * as object_with_name_of_your_choice from "file_path_goes_here"<br>object_with_name_of_your_choice.imported_function</blockquote> 
Puede usar cualquier nombre después de la <code>import * as</code> parte de la declaración. Para utilizar este método, se requiere un objeto que reciba los valores importados. Desde aquí, utilizará la notación de puntos para llamar a sus valores importados. 
</section>

## Instructions
<section id='instructions'> 
El siguiente código requiere el contenido de un archivo, <code>&quot;capitalize_strings&quot;</code> , que se encuentra en el mismo directorio que este, importado. Agregue la declaración de <code>import *</code> apropiada en la parte superior del archivo, utilizando el objeto proporcionado. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Utiliza correctamente <code>import * as</code> sintaxis.
    testString: 'assert(code.match(/import\s+\*\s+as\s+[a-zA-Z0-9_$]+\s+from\s*"\s*capitalize_strings\s*"\s*;/gi), "Properly uses <code>import * as</code> syntax.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
"use strict";
```

</div>

### Before Test
<div id='js-setup'>

```js
window.require = function(str) {
if (str === 'capitalize_strings') {
return {
capitalize: str => str.toUpperCase(),
lowercase: str => str.toLowerCase()
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
