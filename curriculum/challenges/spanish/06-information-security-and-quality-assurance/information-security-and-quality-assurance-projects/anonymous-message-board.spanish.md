---
id: 587d824a367417b2b2512c45
title: Anonymous Message Board
challengeType: 4
isRequired: true
videoUrl: ''
localeTitle: Tablero de mensajes anónimos
---

## Description
<section id="description"> Cree una aplicación de JavaScript de pila completa que sea funcionalmente similar a esto: <a href="https://spiky-well-vein.glitch.me/" target="_blank">https://spiky-well-vein.glitch.me/</a> . Trabajar en este proyecto implicará que escriba su código en Glitch en nuestro proyecto de inicio. Después de completar este proyecto, puede copiar su URL de error público (en la página de inicio de su aplicación) en esta pantalla para probarlo. Opcionalmente, puede optar por escribir su proyecto en otra plataforma, pero debe ser visible públicamente para nuestras pruebas. ¡Comience este proyecto en Glitch usando <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-project-messageboard/">este enlace</a> o clone <a href="https://github.com/freeCodeCamp/boilerplate-project-messageboard/">este repositorio</a> en GitHub! Si utiliza Glitch, recuerde guardar el enlace a su proyecto en un lugar seguro. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Solo permita que su sitio se cargue en un iFrame en sus propias páginas.
    testString: ''
  - text: No permitir la recuperación previa de DNS.
    testString: ''
  - text: Solo permita que su sitio envíe la referencia para sus propias páginas.
    testString: ''
  - text: 'Puedo POSTRE un hilo a un tablero de mensajes específico pasando el texto de datos del formulario y deletepassword_ a /api/threads/{board}.(Recomendar res.redirect a la página del tablero / b / {board}) Guardado será al menos _id, texto , createdon_ (fecha y hora), bumpedon_ (fecha y hora, comienza igual que created_on), reportado (booleano), deletepassword_, & replies (array).'
    testString: ''
  - text: 'Puedo POSTAR una respuesta a un hilo en una placa específica pasando el texto de datos del formulario, deletepassword_, & threadid_ a / api / replies / {board} y también actualizará la fecha bumped_on a la fecha de los comentarios. (Recomiende res.redirect to thread page / b / {board} / {thread_id}) En la matriz de respuestas del thread se guardará _id, text, createdon_, deletepassword_, y se informará.'
    testString: ''
  - text: 'Puedo OBTENER una matriz de los 10 subprocesos más recientes en el tablero con solo las 3 respuestas más recientes de cada uno de / api / threads / {board}. Los campos informados y deletepasswords_ no se enviarán al cliente.'
    testString: ''
  - text: 'Puedo obtener un hilo completo con todas sus respuestas desde / api / replies / {board}? Thread_id = {thread_id}. También ocultando los mismos campos que el cliente debería ver.'
    testString: ''
  - text: 'Puedo eliminar un hilo por completo si envío una solicitud DELETE a / api / threads / {board} y paso el threadid_ & deletepassword_. (La respuesta del texto será "contraseña incorrecta" o "éxito")'
    testString: ''
  - text: 'Puedo eliminar una publicación (simplemente cambiando el texto a "[eliminado]" en lugar de eliminarlo completamente como un hilo) si envío una solicitud DELETE a / api / replies / {board} y paso a lo largo de threadid_, replyid_, & deletepassword_. (La respuesta del texto será "contraseña incorrecta" o "éxito")'
    testString: ''
  - text: 'Puedo reportar un hilo y cambiar su valor reportado a verdadero enviando una solicitud PUT a / api / threads / {board} y pasar el threadid_. (La respuesta del texto será "éxito")'
    testString: ''
  - text: 'Puedo informar una respuesta y cambiar su valor informado a verdadero enviando una solicitud PUT a / api / replies / {board} y pasar el threadid_ & replyid_. (La respuesta del texto será "éxito")'
    testString: ''
  - text: Pruebas funcionales completas que prueban totalmente rutas y pases.
    testString: ''

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
