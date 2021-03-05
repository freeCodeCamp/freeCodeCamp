# Cómo ayudar con los desafíos de vídeo

Los retos en vídeo son un nuevo tipo de desafío en el currículo de freeCodeCamp.

Un desafío de vídeo es una pequeña sección de un curso de vídeo completo sobre un tema en particular. Una página de desafío de vídeo inserta un vídeo de YouTube. Cada página de desafío tiene una única pregunta de selección múltiple relacionada con el vídeo. El usuario deberá responder correctamente la pregunta antes de avanzar al siguiente desafío de video en el curso.

Las páginas de desafío de vídeo son creadas por miembros del equipo freeCodeCamp. Los vídeos de YouTube también son subidos por miembros del equipo freeCodeCamp. Muchos de los desafíos de video todavía no tienen preguntas asociadas con ellos.

You can help by creating multiple-choice questions related to video sections and adding the questions to the markdown files for the video challenges.


## Plantilla de desafío

A continuación se muestra una plantilla de cómo se ven los archivos markdown de los desafíos.

````md
---
id: Unique identifier (alphanumerical, MongoDB_id)
title: Challenge Title
challengeType: 11
videoId: 'YouTube videoId for video challenge'
forumTopicId: 12345
---

# --description--

Challenge description text, in markdown

```html
<div>
  example code
</div>
````

# --question--

Estos campos se utilizan actualmente para los desafíos de Python de opción múltiple.

## --text--

El texto de la pregunta va aquí.

## --answers--

Respuesta 1

---

Respuesta 2

---

Más respuestas

## --video-solution--

The number for the correct answer goes here.

````

## Creating questions for video challenges

### Access the video challenge markdown files

You can find the markdown files for video challenges at the following locations in the curriculum:

- [Data Analysis with Python Course](https://github.com/freeCodeCamp/freeCodeCamp/tree/main/curriculum/challenges/english/08-data-analysis-with-python/data-analysis-with-python-course)
- [TensorFlow 2.0 Course](https://github.com/freeCodeCamp/freeCodeCamp/tree/main/curriculum/challenges/english/11-machine-learning-with-python/tensorflow)
- [Numpy Course](https://github.com/freeCodeCamp/freeCodeCamp/tree/main/curriculum/challenges/english/08-data-analysis-with-python/numpy)
- [How Neural Networks Work Course](https://github.com/freeCodeCamp/freeCodeCamp/tree/main/curriculum/challenges/english/11-machine-learning-with-python/how-neural-networks-work)

Pick a challenge markdown file from the options above.

### Dale un vistazo al video asociado con el desafío y crea una pregunta de opción múltiple

Primero, encuentra la videoId (id del vídeo).

Por ejemplo, en el siguiente código de la cabecera de un archivo markdown de desafío de video, el videoId es "nVAaxZ34khk". En GitHub, la información debe ser colocada en un formato de tabla.
````
---
id: 5e9a093a74c4063ca6f7c14d title: Data Analysis Example A challengeType: 11
videoId: nVAaxZ34khk
---
```

A continuación, accede al vídeo de YouTube con esa `videoId`. La URL del video será:
https://www.youtube. om/watch?v=[videoId]    (reemplaza `videoId` en la URL con la ID del video sin los corchetes)

En el ejemplo anterior, la URL es https://www.youtube.com/watch?v=nVAaxZ34khk

Dale un vistazo al video de YouTube con ese videoId y piensa en una pregunta de selección múltiple basada en el contenido del video.

### Añade la pregunta al archivo markdown

Puedes añadir la pregunta localmente o utilizando la interfaz de GitHub. Para añadir la pregunta localmente, necesitas [configurar freeCodeCamp localmente](how-to-setup-freecodecamp-locally.md). También puede encontrar el archivo en GitHub y hacer clic en el botón Editar para añadir la pregunta directamente en su navegador.

If a question has not yet been added to a particular video challenge, it will have the following default question:

```md
# --question--

## --text--

Question text

## --answers--

Answer 1

---

Answer 2

---

More answers

## --video-solution--

1
```

Añade/Actualiza el texto de la pregunta debajo de la parte que muestra:
```
# --question--

## --text--
```
Add/Update answers (`Answer 1`, `Answer 2`, and so on) under `## --answers--`. Make sure to update the number under `## --video-solution--` with the correct answer number. You can add more possible answers using the same format. The question and answers can be surrounded with quotation marks.

### Ejemplos de preguntas

````md
# --question--

## --text--
What does this JavaScript code log to the console?
```js
console.log('hello world');
````

## --answers--

hello *world*

---

**hello** world

---

hello world

---

## --video-solution--
3
````

````md

# --question--

## --text--

What will print out after running this code:

```py
width = 15
height = 12.0
print(height/3)
````

## --answers--

39

---

4

---

4.0

---

5.0

---

5

## --video-solution--

3 ````

For more examples, you can look at the markdown files for the following video course. All the challenges already have questions: [Python for Everybody Course](https://github.com/freeCodeCamp/freeCodeCamp/tree/main/curriculum/challenges/english/07-scientific-computing-with-python/python-for-everybody)

## Open a pull request

After creating one or more questions, you can commit the changes to a new branch and [open a pull request](how-to-open-a-pull-request.md).
