---
id: 587d7fb1367417b2b2512bf2
title: Use the .env File
localeTitle: Usa el archivo .env
challengeType: 2
---

## Description
<section id='description'> 
El archivo <code>.env</code> es un archivo oculto que se utiliza para pasar variables de entorno a su aplicación. Este archivo es secreto, nadie más que usted puede acceder a él, y se puede usar para almacenar datos que desea mantener privados u ocultos. Por ejemplo, puede almacenar claves de API de servicios externos o su URI de base de datos. También puedes usarlo para almacenar opciones de configuración. Al configurar las opciones de configuración, puede cambiar el comportamiento de su aplicación, sin la necesidad de volver a escribir algún código. 
Se puede acceder a las variables de entorno desde la aplicación como <code>process.env.VAR_NAME</code> . El objeto <code>process.env</code> es un objeto de nodo global, y las variables se pasan como cadenas. Por convención, los nombres de las variables están en mayúsculas, con palabras separadas por un guión bajo. El <code>.env</code> es un archivo de shell, por lo que no necesita incluir nombres o valores entre comillas. También es importante tener en cuenta que no puede haber espacio alrededor del signo igual cuando está asignando valores a sus variables, por ejemplo, <code>VAR_NAME=value</code> . Por lo general, colocará cada definición de variable en una línea separada. 
Agreguemos una variable de entorno como una opción de configuración. Almacene la variable <code>MESSAGE_STYLE=uppercase</code> en el archivo <code>.env</code> . Luego diga al controlador de ruta GET <code>/json</code> que creó en el último desafío para transformar el mensaje del objeto de respuesta en mayúsculas si <code>process.env.MESSAGE_STYLE</code> es igual a <code>uppercase</code> . El objeto de respuesta debe convertirse en <code>{"message": "HELLO JSON"}</code> . 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: La respuesta del punto final <code>/json</code> debe cambiar de acuerdo con la variable de entorno <code>MESSAGE_STYLE</code>
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/use-env-vars'').then(data => { assert.isTrue(data.passed, ''The response of "/json" does not change according to MESSAGE_STYLE''); }, xhr => { throw new Error(xhr.responseText); })'

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
