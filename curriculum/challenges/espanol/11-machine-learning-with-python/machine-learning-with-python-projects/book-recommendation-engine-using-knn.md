---
id: 5e46f8e3ac417301a38fb92f
title: Motor de Recomendación de Libros Usando KNN
challengeType: 10
forumTopicId: 462378
dashedName: book-recommendation-engine-using-knn
---

# --description--

En este proyecto trabajarás con <a href="https://colab.research.google.com/github/freeCodeCamp/boilerplate-book-recommendation-engine/blob/master/fcc_book_recommendation_knn.ipynb" target="_blank" rel="noopener noreferrer nofollow"> Google Colaboratory</a>.

Después de ir a ese enlace, crea una copia del notebook en tu propia cuenta o de manera local. Una vez que hayas completado el proyecto y éste pase la prueba (incluida en ese enlace), envía el enlace de tu proyecto a continuación. Si envias un enlace a Google Colaboratory, asegúrate de que activas el uso compartido para "cualquiera con el enlace."

Todavía estamos desarrollando la parte interactiva de la instrucción del plan de estudio de Python. Por ahora, usted puede pasar por los desafíos de vídeo en esta certificación. Es posible que también tengas que buscar recursos de aprendizaje adicionales, similares a lo que harías cuando trabajas en un proyecto del mundo real.

# --instructions--

En este desafío, crearás un algoritmo de recomendación de libros utilizando **K-Nearest Neighbors.**.

Utilizará el conjunto de datos <a href="http://www2.informatik.uni-freiburg.de/~cziegler/BX/" target="_blank" rel="noopener noreferrer nofollow">Book-Crossings</a>. Este conjunto de datos contiene 1,1 millones de calificaciones (escala de 1-10) de 270,000 libros por 90.000 usuarios.

Después de importar y limpiar los datos, usa `NearestNeighbors` desde `sklearn. eighbors` para desarrollar un modelo que muestre libros que son similares a un libro dado. El algoritmo de Neighbors más cercano mide la distancia para determinar la “cercanía” de las instancias.

Crea una función llamada `get_recommends` que toma el título del libro (desde el conjunto de datos) como argumento y devuelve una lista de 5 libros similares con sus distancias del argumento del libro.

Este código:

```py
get_recommends("The Queen of the Damned (Vampire Chronicles (Paperback))")
```

debe retornar:

```py
[
  'The Queen of the Damned (Vampire Chronicles (Paperback))',
  [
    ['Catch 22', 0.793983519077301], 
    ['The Witching Hour (Lives of the Mayfair Witches)', 0.7448656558990479], 
    ['Interview with the Vampire', 0.7345068454742432],
    ['The Tale of the Body Thief (Vampire Chronicles (Paperback))', 0.5376338362693787],
    ['The Vampire Lestat (Vampire Chronicles, Book II)', 0.5178412199020386]
  ]
]
```

Tenga en cuenta que los datos devueltos desde `get_recommends()` es una lista. El primer elemento de la lista es el título del libro pasado a la función. El segundo elemento de la lista es una lista de cinco listas más. Cada una de las cinco listas contiene un libro recomendado y la distancia del libro recomendado al libro pasado a la función.

Si graficas conjunto de datos (opcional), notaras que la mayoria de los libros no se clafican con frecuencia. Para garantizar la importacia estadística, elimine del conjunto de datos a los usuarios con menos de 200 calificaciones y libros con menos de 100 calificaciones.

Las primeras tres celdas importan las bibliotecas que puede necesitar y los datos a utilizar. La celda final es para pruebas. Escribe todo tu código entre esas celdas.

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
