---
id: 5895f70bf9fc0f352b528e64
title: Use a Template Engine's Powers
localeTitle: Usa los poderes de una plantilla de motor
challengeType: 2
---

## Description
<section id='description'> 
Como recordatorio, este proyecto se está construyendo sobre el siguiente proyecto de inicio en <a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-advancednode/'>Glitch</a> , o clonado desde <a href='https://github.com/freeCodeCamp/boilerplate-advancednode/'>GitHub</a> . 
Una de las mejores características de usar un motor de plantillas es poder pasar variables del servidor al archivo de plantillas antes de representarlo en HTML. 
En su archivo Pug, está a punto de usar una variable haciendo referencia al nombre de la variable como <code>#{variable_name}</code> línea con otro texto en un elemento o usando un lado igual en el elemento sin un espacio como <code>p= variable_name</code> que establece que p elementos texto igual a la variable. 
Recomendamos encarecidamente consultar la sintaxis y la estructura de Pug <a href='https://github.com/pugjs/pug'>aquí</a> en sus Githubs README. Pug tiene que ver con el uso de espacios en blanco y pestañas para mostrar elementos anidados y reducir la cantidad de código necesario para crear un sitio hermoso. 
Mirando nuestro archivo pug &#39;index.pug&#39; incluido en su proyecto, usamos el <em>título</em> y el <em>mensaje de</em> las variables 
Para pasarlas solo desde nuestro servidor, deberá agregar un objeto como segundo argumento a su <em>res.render</em> con el Las variables y su valor. Por ejemplo, pase este objeto a lo largo de la configuración de las variables para su vista de índice: <code>{title: &#39;Hello&#39;, message: &#39;Please login&#39;</code> 
Debería verse como: <code>res.render(process.cwd() + &#39;/views/pug/index&#39;, {title: &#39;Hello&#39;, message: &#39;Please login&#39;});</code> 
Ahora actualice su página y debería ver esos valores representados en su vista en el lugar correcto como se muestra en su archivo index.pug! Envía tu página cuando creas que lo has hecho bien. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Pug render las variables correctas
    testString: 'getUserInput => $.get(getUserInput("url")+ "/") .then(data => { assert.match(data, /pug-variable("|")>Please login/gi, "Your projects home page should now be rendered by pug with the projects .pug file unaltered"); }, xhr => { throw new Error(xhr.statusText); })'

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
