---
id: 589a8eb3f9fc0f352b528e72
title: Implementation of Social Authentication III
challengeType: 2
videoUrl: ''
localeTitle: Implementación de la autenticación social III
---

## Description
<section id="description"> Como recordatorio, este proyecto se está construyendo sobre el siguiente proyecto de inicio en <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-socialauth/">Glitch</a> , o clonado desde <a href="https://github.com/freeCodeCamp/boilerplate-socialauth/">GitHub</a> . La parte final de la estrategia es manejar el perfil devuelto por GitHub. Necesitamos cargar el objeto de la base de datos de usuarios, si existe, o crear uno si no existe, y rellenar los campos del perfil, luego devolver el objeto del usuario. GitHub nos proporciona un <em>ID</em> único dentro de cada perfil que podemos usar para buscar con el usuario serializado (ya implementado). A continuación se muestra un ejemplo de implementación que puede usar en su proyecto: va dentro de la función que es el segundo argumento para la nueva estrategia, justo debajo de <code>console.log(profile);</code> actualmente es: <pre> db.collection (&#39;socialusers&#39;). findAndModify (
    {id: profile.id},
    {},
    {$ setOnInsert: {
        ID: profile.id,
        nombre: profile.displayName || &#39;John Doe&#39;,
        foto: profile.photos [0] .value || &quot;,
        correo electrónico: profile.emails [0] .value || &#39;No hay correo electrónico público&#39;,
        created_on: new Date (),
        Proveedor: profile.provider || &quot;
    }, $ set: {
        last_login: new Date ()
    }, $ inc: {
        login_count: 1
    }},
    {upsert: true, new: true},
    (err, doc) =&gt; {
        devuelve cb (null, doc.value);
    }
); </pre> Con un findAndModify, le permite buscar un objeto y actualizarlo, así como subir el objeto si no existe y recibir el nuevo objeto cada vez en nuestra función de devolución de llamada. En este ejemplo, siempre establecemos el last_login como ahora, siempre incrementamos el login_count en 1, y solo cuando insertamos un nuevo objeto (nuevo usuario) llenamos la mayoría de los campos. Algo para notar también es el uso de valores por defecto. A veces, un perfil devuelto no tendrá toda la información completada o el usuario la habrá elegido para que permanezca privada; Así que en este caso tenemos que manejarlo para evitar un error. Debería poder iniciar sesión en su aplicación ahora, ¡pruébelo! Envía tu página cuando creas que lo has hecho bien. Si te encuentras con errores, puedes ver un ejemplo del código terminado de este mini-proyecto <a href="https://glitch.com/#!/project/guttural-birch">aquí</a> . </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Configuración de la estrategia de GitHub completa
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /GitHubStrategy[^]*db.collection/gi, "Strategy should use now use the database to search for the user"); assert.match(data, /GitHubStrategy[^]*socialusers/gi, "Strategy should use "socialusers" as db collection"); assert.match(data, /GitHubStrategy[^]*return cb/gi, "Strategy should return the callback function "cb""); }, xhr => { throw new Error(xhr.statusText); })'

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
