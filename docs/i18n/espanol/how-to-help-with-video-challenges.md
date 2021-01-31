# Cómo ayudar con los desafíos de vídeo

Los retos en vídeo son un nuevo tipo de desafío en el currículo de freeCodeCamp.

Un desafío de vídeo es una pequeña sección de un curso de vídeo completo sobre un tema en particular. Una página de desafío de vídeo inserta un vídeo de YouTube. Cada página de desafío tiene una única pregunta de selección múltiple relacionada con el vídeo. El usuario debe responder correctamente a la pregunta antes de pasar al siguiente desafío de vídeo en el curso.

Las páginas de desafío de vídeo son creadas por miembros del equipo freeCodeCamp. Los vídeos de YouTube también son subidos por miembros del equipo freeCodeCamp. Muchos de los desafíos de video todavía no tienen preguntas asociadas con ellos.

Puedes ayudar creando preguntas de selección múltiple relacionadas con las secciones de vídeo y añadiendo las preguntas a los archivos de markdown para los desafíos de video.


## Plantilla de desafío

A continuación se muestra una plantilla de cómo se ven los archivos markdown de los desafíos.

````md
---
id: Identificador Único (alfanumérico, MongoDB_id)
title: Titulo del Desafío
challengeType: 11
videoId: 'videoId de Youtube para el desafío de video'
---

## Descripción

<section id='description'>
Descripción opcional con información util relacionada con el video.
</section>

## Pruebas

<section id='tests'>

```yml
question:
  text: 'Pregunta'
  answers:
    - 'Respuesta Uno'
    - 'Respuesta Dos'
    - 'Respuesta Tres'
  solution: 3
````

</section>
````

## Creando preguntas para los desafíos de video

### Accede a los archivos markdown del desafío de video

Puedes encontrar los archivos markdown de los desafíos de video en las siguientes ubicaciones del currículum

- [Curso de análisis de datos con Python](https://github.com/freeCodeCamp/freeCodeCamp/tree/master/curriculum/challenges/english/08-data-analysis-with-python/data-analysis-with-python-course)
- [Curso de TensorFlow 2.0](https://github.com/freeCodeCamp/freeCodeCamp/tree/master/curriculum/challenges/english/11-machine-learning-with-python/tensorflow)
- [Curso de Numpy](https://github.com/freeCodeCamp/freeCodeCamp/tree/master/curriculum/challenges/english/08-data-analysis-with-python/numpy)
- [Curso de como funcionan las redes neuronales](https://github.com/freeCodeCamp/freeCodeCamp/tree/master/curriculum/challenges/english/11-machine-learning-with-python/how-neural-networks-work)

Elige un archivo markdown de las opciones anteriores.

### Mire superficialmente el video asociado con el desafío y cree una pregunta de opción múltiple

Primero, encuentre el videoId.

Por ejemplo, en el siguiente código de la cabecera de un archivo markdown de desafío de video, el videoId es "nVAaxZ34khk". En GitHub, la información debe ser puesta en un formato de tabla.
````
---
id: 5e9a093a74c4063ca6f7c14d title: Análisis de datos Ejemplo A challengeType: 11
videoId: nVAaxZ34khk
---
```

A continuación, acceda al vídeo de YouTube con ese videoId. La url del video será:
https://www.youtube. om/watch?v=[videoId]    (añadir videoId a la URL sin corchetes cuadrados)

En el ejemplo anterior, la url es https://www. outube.com/watch?v=nVAaxZ34khk

Mira superficialmente el vídeo de YouTube con ese videoId y piensa en una pregunta de selección múltiple basada en el contenido del vídeo.

### Añade la pregunta al archivo markdown

Puedes añadir la pregunta localmente o directamente a través de la interfaz de GitHub. Para añadir la pregunta localmente, necesitas [configurar freeCodeCamp localmente](how-to-setup-freecodecamp-locally.md). También puede encontrar el archivo en GitHub y hacer clic en el botón Editar para añadir la pregunta directamente en su navegador.

Si aún no se ha añadido una pregunta a un desafío de vídeo en particular, tendrá la siguiente pregunta predeterminada:

```yml
question:
  text: |
    Pregunta
  answers:
    - |
      una
    - |
      dos
    - |
      tres
  solution: 3
```

Actualiza la palabra "Pregunta" con tu pregunta. Actualiza “una”, “dos”, y “tres” con las posibles respuestas. Asegúrate de actualizar el número de la solución con el que corresponde a la respuesta correcta. Puede añadir más respuestas posibles usando el mismo formato. La pregunta y las respuestas pueden estar rodeadas de comillas.

#### Utiliza markdown para formatear tu pregunta

El texto de la pregunta se analiza como markdown. La forma más simple de asegurarse de que está formateado correctamente es iniciar la pregunta con `texto: |`, así:

```yml
question:
  text: |
    Pregunta
```

Entonces debes asegurarte de que tu pregunta está en una nueva línea e indentada un nivel mas que `texto: |`.

El mismo enfoque se puede utilizar para las respuestas, de modo que toda la pregunta se convierte

```yml
question:
  text: |
    Pregunta
  answers:
  - |
    Primera Respuesta
  - |
    Segunda
  - |
    Tercera
  solution: 2
```

Asegúrate de que cada respuesta sea plausible, pero sólo hay una respuesta correcta.

#### Uso de HTML

Las preguntas y respuestas pueden contener ciertas etiquetas HTML como `<br>` para una nueva línea. Las etiquetas HTML deben ser usadas de forma poco frecuente, cuando las preguntas no pueden ser expresadas sin ellas.

### Ejemplos de preguntas

#### Ejemplos sin HTML

````yml
question:
  text: |
    ¿Que registra este código JavaScript en la consola?
    ```js
    console.log('hola mundo');
    ````


    ¡Selecciona una respuesta!
  answers:
    - | hola *mundo*
    - | **hola** mundo
    - | hola mundo solution: 3
````

````yml
pregunta:
  text: |
    ¿Qué se imprimirá después de ejecutar este código:
    ```py
    width = 15
    height = 12.
    print(height/3)
    ````
  answers:
    - | 39
    - | 4
    - | 4.0
    - | 5.0
    - | 5 solution: 3
````

#### Ejemplo con HTML

```yml
question:
  text: |
    ¿Qué se imprimirá después de ejecutar este código:
    <pre><code>width = 15<br>height = 12.<br>print(height/3)<code></pre>
  answers:
    - |
      39
    - |
      4
    - |
      4.
    - |
      5.
    - |
      5
  solution: 3
````

El ejemplo final demuestra que se puede usar HTML, pero que no es tan legible como la versión sin ella.

Para más ejemplos, puede ver los archivos de markdown para el siguiente curso de vídeo. Todos los desafíos ya tienen preguntas: [Curso de Python para todos](https://github.com/freeCodeCamp/freeCodeCamp/tree/master/curriculum/challenges/english/07-scientific-computing-with-python/python-for-everybody)

## Abrir una pull request

Después de crear una o más preguntas, puede enviar los cambios a una nueva rama y [abrir una pull request](how-to-open-a-pull-request.md).
