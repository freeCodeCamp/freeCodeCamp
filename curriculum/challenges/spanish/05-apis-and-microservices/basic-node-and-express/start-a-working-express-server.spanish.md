---
id: 587d7fb0367417b2b2512bee
title: Start a Working Express Server
localeTitle: Iniciar un servidor Express de trabajo
challengeType: 2
---

## Description
<section id='description'> 
En las dos primeras líneas del archivo myApp.js puede ver cómo es fácil crear un objeto de aplicación Express. Este objeto tiene varios métodos, y aprenderemos muchos de ellos en estos desafíos. Un método fundamental es <code>app.listen(port)</code> . Le dice a su servidor que escuche en un puerto dado, poniéndolo en estado de ejecución. Puedes verlo en la parte inferior del archivo. Se encuentra dentro de los comentarios porque, por razones de prueba, necesitamos que la aplicación se ejecute en segundo plano. Todo el código que desee agregar va entre estas dos partes fundamentales. Glitch almacena el número de puerto en la variable de entorno <code>process.env.PORT</code> . Su valor es de <code>3000</code> . 
¡Vamos a servir nuestra primera cuerda! En Express, las rutas tienen la siguiente estructura: <code>app.METHOD(PATH, HANDLER)</code> . METHOD es un método http en minúsculas. PATH es una ruta relativa en el servidor (puede ser una cadena, o incluso una expresión regular). HANDLER es una función que llama expresamente cuando la ruta coincide. 
manejadores toman la <code>function(req, res) {...}</code> formulario <code>function(req, res) {...}</code> , donde req es el objeto de solicitud, y res es el objeto de respuesta. Por ejemplo, el controlador 
<blockquote>function(req, res) {<br> res.send('Response String');<br>}</blockquote> 
servirá la cadena 'Cadena de respuesta'. 
Use el método <code>app.get()</code> para servir la cadena Hello Express, para obtener solicitudes que coincidan con la ruta / root. Asegúrese de que su código funcione mirando los registros, luego vea los resultados en su navegador y haga clic en el botón 'Mostrar en vivo' en la interfaz de usuario de Glitch. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su aplicación debe servir la cadena 'Hola Express'
    testString: 'getUserInput => $.get(getUserInput(''url'')).then(data => { assert.equal(data, ''Hello Express'', ''Your app does not serve the text "Hello Express"''); }, xhr => { throw new Error(xhr.responseText); })'

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
