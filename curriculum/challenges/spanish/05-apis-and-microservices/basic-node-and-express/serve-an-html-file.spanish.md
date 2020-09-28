---
id: 587d7fb0367417b2b2512bef
title: Serve an HTML File
localeTitle: Servir un archivo HTML
challengeType: 2
---

## Description
<section id='description'> 
Podemos responder con un archivo utilizando el método <code>res.sendFile(path)</code> . 
Puede colocarlo dentro del manejador de ruta <code>app.get('/', ...)</code> . Detrás de escena, este método establecerá los encabezados adecuados para instruir a su navegador sobre cómo manejar el archivo que desea enviar, según su tipo. Luego leerá y enviará el archivo. Este método necesita una ruta de archivo absoluta. Le recomendamos que utilice la variable global Node <code>__dirname</code> para calcular la ruta. 
por ejemplo <code>absolutePath = __dirname + relativePath/file.ext</code> . 
El archivo a enviar es <code>/views/index.html</code> . Intente 'Mostrar en vivo' su aplicación, debería ver un encabezado HTML grande (y un formulario que usaremos más adelante ...), sin estilo aplicado. 
Nota: puede editar la solución del desafío anterior o crear una nueva. Si crea una nueva solución, tenga en cuenta que Express evalúa las rutas de arriba a abajo. Ejecuta el controlador para la primera partida. Debe comentar la solución anterior, o el servidor seguirá respondiendo con una cadena. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su aplicación debe servir el archivo views / index.html
    testString: 'getUserInput => $.get(getUserInput(''url'')).then(data => { assert.match(data, /<h1>.*<\/h1>/, ''Your app does not serve the expected HTML''); }, xhr => { throw new Error(xhr.responseText); })'

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
