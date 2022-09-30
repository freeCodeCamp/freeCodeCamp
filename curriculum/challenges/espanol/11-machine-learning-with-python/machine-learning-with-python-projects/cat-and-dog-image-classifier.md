---
id: 5e46f8dcac417301a38fb92e
title: Clasificador de imágenes de gatos y perros
challengeType: 10
forumTopicId: 462377
dashedName: cat-and-dog-image-classifier
---

# --description--

Trabajarás <a href="https://colab.research.google.com/github/freeCodeCamp/boilerplate-cat-and-dog-image-classifier/blob/master/fcc_cat_dog.ipynb" target="_blank" rel="noopener noreferrer nofollow"> en este proyecto</a> con Google Colaboratory.

Después de acceder al enlace, crea una copia del cuaderno ya sea en tu propia cuenta o de manera local. Una vez hayas completado el proyecto y superes el test (incluido en el enlace), envía el enlace del proyecto a continuación. Si envias un enlace a Google Colaboratory, asegúrate de que activas el uso compartido para "cualquiera con el enlace."

Todavía estamos desarrollando el contenido instructivo interactivo para el plan de estudios de aprendizaje automático. Por ahora, puedes pasar por los desafíos en video de esta certificación. También puede que tengas que buscar recursos de aprendizaje adicionales, similares a lo que harías cuando trabajas en un proyecto del mundo real.

# --instructions--

Para este desafio, deberás completar el código para clasificar las imágenes de perros y gatos. Usaras TensorFlow 2.0 y Keras para crear una red neuronal convolucional que clasifique correctamente las imágenes de gatos y perros al menos el 63% de las veces. (¡Crédito adicional si obtienes un 70% de precisión!)

Se le entregara parte del código, pero debes añadir el faltante para completar este desafío. Lea las instrucciones de cada celda de texto para que sepa lo que tiene que hacer en cada celda de código.

La primera celda de código importa las bibliotecas requeridas. La celda de segundo código descarga los datos y establece variables clave. La tercera celda es el primer lugar en el que escribes tu propio código.

La estructura de los archivos de conjuntos de datos que se descargan se ve así (Notará que el directorio de pruebas no tiene subdirectorios y las imágenes no están etiquetadas):

```py
cats_and_dogs
|__ train:
    |______ cats: [cat.0.jpg, cat.1.jpg ...]
    |______ dogs: [dog.0.jpg, dog.1.jpg ...]
|__ validation:
    |______ cats: [cat.2000.jpg, cat.2001.jpg ...]
    |______ dogs: [dog.2000.jpg, dog.2001.jpg ...]
|__ test: [1.jpg, 2.jpg ...]
```

Si lo deseas, puedes ajustar los epochs y el tamaño por lotes, pero no es necesario.

Las siguientes instrucciones corresponden a números de celda específicos, indicados con un comentario en la parte superior de la celda (como `# 3`).

## Celda 3

¡Ahora es tu turno! Establecer correctamente cada una de las variables de esta celda. (Ya no deberían ser iguales a `None`.)

Crea generadores de imágenes para cada uno de los tres conjuntos de datos de imagen (entrenamiento, validación, prueba). Utilice `ImageDataGenerator` para leer / decodificar las imágenes y convertirlas en tensores de punto flotante. Utilice el argumento `rescale` (y ningún otro argumento por ahora) para cambiar la escala de los tensores de valores entre 0 y 255 a valores entre 0 y 1.

Para las variables `*_data_gen`, utilice el método `flow_from_directory`. Pase en el tamaño del lote, directorio, tamaño de destino (`(IMG_HEIGHT, IMG_WIDTH)`), modo de clase y cualquier otra cosa requerida. `test_data_gen` será el más complicado. Para `test_data_gen`, asegúrese de pasar en `shuffle=False` al método `flow_from_directory`. Esto asegurará que las predicciones finales se mantengan en el orden que espera nuestra prueba. Para `test_data_gen` también será útil observar la estructura de directorio.


Después de ejecutar el código, la salida debería verse así:

```py
Found 2000 images belonging to 2 classes.
Found 1000 images belonging to 2 classes.
Found 50 images belonging to 1 class.
```

## Celda 4

La función `plotImages` se utilizará varias veces para trazar imágenes. Toma una matriz de imágenes y una lista de probabilidades, aunque la lista de probabilidades es opcional. Este código es para ti. Si creaste correctamente la variable `train_data_gen`, ejecutar esta celda graficará cinco imágenes de entrenamiento aleatorias.

## Celda 5

Recree el `train_image_generator` usando `ImageDataGenerator`.

Dado que hay una pequeña cantidad de ejemplos de entrenamiento, existe el riesgo de sobreajuste. Una forma de solucionar este problema es crear más datos de entrenamiento a partir de ejemplos de entrenamiento existentes mediante el uso de transformaciones aleatorias.

Añade 4-6 transformaciones aleatorias como argumentos para `ImageDataGenerator`. Asegúrese de reescalar lo mismo que antes.

## Celda 6

No tienes que hacer nada por esta celda. `train_data_gen` se crea como antes pero con el nuevo `train_image_generator`. Luego, una sola imagen se traza cinco veces diferentes usando diferentes variaciones.

## Celda 7

En esta celda, cree un modelo para la red neuronal que genere probabilidades de clase. Debería usar el modelo secuencial de Keras. Probablemente involucre una pila de capas Conv2D y MaxPooling2D y luego una capa completamente conectada en la parte superior que se activa mediante una función de activación de ReLU.

Compile el modelo pasando los argumentos para configurar el optimizador y la pérdida. Pase también `metrics=['accuracy']` para ver la precisión del entrenamiento y la validación para cada época de entrenamiento.

## Celda 8

Utilice el método `fit` en su `model` para entrenar la red. Asegúrese de pasar argumentos para `x`, `steps_per_epoch`, `epochs`, `validation_data` y `validation_steps`.

## Celda 9

Ejecute esta celda para visualizar la precisión y la pérdida del modelo.

## Celda 10

Ahora es el momento de usar su modelo para predecir si una nueva imagen es un gato o un perro.

En esta celda, obtenga la probabilidad de que cada imagen de prueba (de `test_data_gen`) sea un perro o un gato. `probabilities` debe ser una lista de números enteros.

Llame a la función `plotImages` y pase las imágenes de prueba y las probabilidades correspondientes a cada imagen de prueba.

Después de ejecutar la celda, debería ver las 50 imágenes de prueba con una etiqueta que muestra el porcentaje de "seguro" de que la imagen es un gato o un perro. La precisión corresponderá a la precisión que se muestra en el gráfico anterior (después de ejecutar la celda anterior). Más imágenes de entrenamiento podrían conducir a una mayor precisión.

## Celda 11

Ejecute esta celda final para ver si pasó el desafío o si necesita seguir intentándolo.

# --hints--

Debería pasar todas las pruebas de Python.

```js

```

# --solutions--

```py
  # Python challenges don't need solutions,
  # because they would need to be tested against a full working project.
  # Please check our contributing guidelines to learn more.
```
