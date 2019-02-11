---
id: 587d7fb3367417b2b2512bfc
title: Add a Description to Your package.json
localeTitle: Agregue una descripción a su package.json
challengeType: 2
---

## Description
<section id='description'> 
La siguiente parte de un buen package.json es el campo de descripción, donde pertenece una descripción breve pero informativa sobre su proyecto. 
Si algún día planea publicar un paquete en npm, recuerde que esta es la cadena que debe vender su idea al usuario cuando decide instalar el paquete o no. Sin embargo, este no es el único caso de uso para la descripción: es una excelente manera de resumir lo que hace un proyecto, es tan importante para sus proyectos Node.js normales para ayudar a otros desarrolladores, futuros mantenedores o incluso a su propio yo a entender el proyecto. con rapidez. 
Independientemente de lo que planee para su proyecto, definitivamente se recomienda una descripción. Agreguemos algo similar a esto: 
<code>"description": "A project that does something awesome",</code> 
Instrucciones 
Agrega una descripción al package.json en tu proyecto de Glitch. 
Recuerde usar comillas dobles para los nombres de campo (") y las comas (,) para separar los campos. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: package.json debería tener una clave de "descripción" válida
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data); assert(packJson.description, ''"description" is missing''); }, xhr => { throw new Error(xhr.responseText); })'

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
