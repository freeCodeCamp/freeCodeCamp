---
title: Adding Snippets to Your Sublime Text Installation
localeTitle: Agregando fragmentos a su instalación de texto sublime
---
Si eres un usuario de texto sublime (espero que lo seas, que se recupere. Puedes obtenerlo [aquí](https://www.sublimetext.com/) ), es posible que ya hayas notado algunas de las capacidades de completar pestañas. Por ejemplo, cuando abre una etiqueta html como `<p>` , la cierra automáticamente tan pronto como escribe `/` . Puede obtener una funcionalidad similar para piezas de código que termina reescribiendo una y otra vez, ¡y es sorprendentemente fácil!

Aquí hay un ejemplo, que se activa después de escribir `div` y luego la pestaña:

![texto alternativo](//discourse-user-assets.s3.amazonaws.com/original/2X/5/59a4d233d2dcb17b76a9c36ca30c5bb07a35d00b.png)

## Paso 1.

Haga clic en `Tools > New Snippet...` en la barra de navegación. Esto abrirá un archivo de fragmento de esqueleto que se verá así:

![texto alternativo](//discourse-user-assets.s3.amazonaws.com/original/2X/a/a56106fbf754f7e641342d1ebdbc3f5bed582263.png)

## Paso 2.

Agregará el fragmento reemplazando el texto `Hello, ${1:this} is a ${2:snippet}.`

En el caso del fragmento de código `div` , es tan simple como colocar el siguiente texto en el área de fragmento:
```
<!-- $1 --> 
 <div class= "$1"> 
 
 </div> 
 <!-- $1 --> 
```

El operador `$` referencia a las variables que se escribirán una vez que escriba `div` y luego tab. De hecho puedes tener cualquier número de ellos!

## Paso 3.

Guarda el archivo. Puede darle el nombre de archivo que desee, pero la extensión **debe** ser `.sublime-snippet` . ¡Recuerda, solo puedes tener un fragmento por archivo! Me gusta darles nombres descriptivos como `html-div.sublime-snippet` .

¡Y ahí lo tienes! Puedes ser tan creativo como quieras.