---
id: 587d7fb3367417b2b2512bfb
title: 'How to Use package.json, the Core of Any Node.js Project or npm Package'
localeTitle: 'Cómo usar package.json, el núcleo de cualquier proyecto Node.js o paquete npm'
challengeType: 2
---

## Description
<section id='description'> 
El archivo package.json es el centro de cualquier proyecto Node.js o paquete npm. Almacena información sobre su proyecto al igual que la sección &lt;head&gt; en un documento HTML describe el contenido de una página web. El package.json consiste en un solo objeto JSON donde la información se almacena en "clave": pares de valores. Solo hay dos campos obligatorios en un paquete mínimo.json (nombre y versión), pero es una buena práctica proporcionar información adicional sobre su proyecto que pueda ser útil para futuros usuarios o mantenedores. 
El campo de autor 
Si va al proyecto de Glitch que configuró anteriormente y mira en el lado izquierdo de su pantalla, encontrará el árbol de archivos donde puede ver un resumen de los diversos archivos en su proyecto. Bajo la sección de back-end del árbol de archivos, encontrará package.json, el archivo que mejoraremos en los próximos dos desafíos. 
Una de las piezas de información más comunes en este archivo es el campo de autor que especifica quién es el creador de un proyecto. Puede ser una cadena o un objeto con detalles de contacto. El objeto se recomienda para proyectos más grandes, pero en nuestro caso, una cadena simple como la del siguiente ejemplo servirá. 
<code>"author": "Jane Doe",</code> 
Instrucciones 
Agregue su nombre al campo de autor en el paquete.json de su proyecto de Glitch. 
Recuerda que estás escribiendo JSON. 
Todos los nombres de campo deben usar comillas dobles ("), por ejemplo," autor " 
Todos los campos deben estar separados por una coma (,) 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: package.json debería tener una clave de "autor" válida
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data); assert(packJson.author, ''"author" is missing''); }, xhr => { throw new Error(xhr.responseText); })'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
