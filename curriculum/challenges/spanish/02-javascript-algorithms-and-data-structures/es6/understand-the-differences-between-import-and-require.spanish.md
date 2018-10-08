---
id: 587d7b8c367417b2b2512b55
title: Understand the Differences Between import and require
localeTitle: Comprender las diferencias entre importar y requerir
challengeType: 1
---

## Description
<section id='description'> 
En el pasado, la función <code>require()</code> se usaría para importar las funciones y el código en archivos y módulos externos. Aunque es práctico, esto presenta un problema: algunos archivos y módulos son bastante grandes, y es posible que solo necesite cierto código de esos recursos externos. 
ES6 nos da una herramienta muy útil conocida como <dfn>importación</dfn> . Con él, podemos elegir qué partes de un módulo o archivo cargar en un archivo dado, ahorrando tiempo y memoria. 
Considera el siguiente ejemplo. Imagine que <code>math_array_functions</code> tiene aproximadamente 20 funciones, pero solo necesito una, <code>countItems</code> , en mi archivo actual. El antiguo enfoque de <code>require()</code> me obligaría a incorporar las 20 funciones. Con esta nueva sintaxis de <code>import</code> , puedo traer solo la función deseada, así: 
<blockquote>import { countItems } from "math_array_functions"</blockquote> 
Una descripción del código anterior: 
<blockquote>import { function } from "file_path_goes_here"<br>// We can also import variables the same way!</blockquote> 
Hay algunas formas de escribir una declaración de <code>import</code> , pero la anterior es un caso de uso muy común. 
<strong>Nota</strong> <br> El espacio en blanco que rodea la función dentro de las llaves es una buena práctica: facilita la lectura de la declaración de <code>import</code> . 
<strong>Nota</strong> <br> Las lecciones en esta sección manejan características que no son del navegador. <code>import</code> , y las declaraciones que presentamos en el resto de estas lecciones, no funcionarán directamente en un navegador. Sin embargo, podemos usar varias herramientas para crear código a partir de esto para que funcione en el navegador. 
<strong>Nota</strong> <br> En la mayoría de los casos, la ruta del archivo requiere una <code>./</code> antes de ella; de lo contrario, el nodo buscará en el directorio <code>node_modules</code> primero intentando cargarlo como una dependencia. 
</section>

## Instructions
<section id='instructions'> 
Agregue la declaración de <code>import</code> apropiada que permitirá que el archivo actual use la función <code>capitalizeString</code> . El archivo donde vive esta función se llama <code>&quot;string_functions&quot;</code> , y está en el mismo directorio que el archivo actual. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: declaración de <code>import</code> válida
    testString: 'getUserInput => assert(getUserInput("index").match(/import\s+\{\s*capitalizeString\s*\}\s+from\s+("|")string_functions\1/g), "valid <code>import</code> statement");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
"use strict";
capitalizeString("hello!");
```

</div>

### Before Test
<div id='js-setup'>

```js
window.require = function (str) {
if (str === 'string_functions') {
return {
capitalizeString: str => str.toUpperCase()
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
