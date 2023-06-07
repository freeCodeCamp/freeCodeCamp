---
id: 5e46f802ac417301a38fb92b
title: Visualizador de vistas de página en determinados períodos de tiempo
challengeType: 10
forumTopicId: 462369
dashedName: page-view-time-series-visualizer
---

# --description--

Estarás <a href="https://replit.com/github/freeCodeCamp/boilerplate-page-view-time-series-visualizer" target="_blank" rel="noopener noreferrer nofollow">trabajando en este proyecto con nuestro código de inicio Replit</a>.

-   Empieza importando el proyecto en Replit.
-   Siguiente, verás una ventana `.replit`.
-   Selecciona `Use run command` y click en el botón `Done`.


Todavía estamos desarrollando la parte interactiva del currículo de Python. Por el momento, aquí hay algunos videos en el canal de YouTube de freeCodeCamp.org que te enseñaran todo lo que necesitas saber para completar este proyecto:

- <a href="https://www.freecodecamp.org/news/python-for-everybody/" target="_blank" rel="noopener noreferrer nofollow">Python for Everybody Video Course</a>(14 horas)

- <a href="https://www.freecodecamp.org/news/how-to-analyze-data-with-python-pandas/" target="_blank" rel="noopener noreferrer nofollow">How to Analyze Data with Python Pandas</a> (10 horas)

# --instructions--

Para este proyecto, visualizarás los datos de las series temporales utilizando un gráfico de líneas, un gráfico de barras y un gráfico de cajas. Utilizarás Pandas, Matplotlib y Seaborn para visualizar un conjunto de datos que contiene el número de vistas diarias en la página del foro de freeCodeCamp.org del 2016-05-09 al 2019-12-03. Las visualizaciones de datos le ayudarán a entender los patrones en las visitas e identificarán el crecimiento anual y mensual.

Utiliza los datos para completar las siguientes tareas:

- Usa Pandas para importar los datos desde "fcc-forum-pageviews.csv". Establece el índice para la columna `date`.
- Limpia los datos filtrando los días en que las vistas de la página se encuentren en un alto de 2.5% del conjunto de datos o inferior de 2.5% del conjunto de datos.
- Crea una función `draw_line_plot` que use Matplotlib para dibujar un gráfico de línea similar a "examples/Figure_1.png". El título debería ser `Daily freeCodeCamp Forum Page Views 5/2016-12/2019`. La etiqueta en el eje x debería ser `Date` y la etiqueta en el eje y debería ser `Page Views`.
- Crea una función `draw_bar_plot` que dibuje un gráfico de barras similar a "examples/Figure_2.png". Debería mostrar el promedio diario de vistas a la página para cada mes agrupadas por año. La leyenda debería mostrar etiquetas mensuales y tener un título de `Months`. En la gráfica, la etiqueta en el eje x debería ser `Years` y la etiqueta en el eje y debería ser `Average Page Views`.
- Crea `draw_box_plot` una función que use Seaborn para dibujar dos puntos de caja adyacentes similar a "examples/Figure_3.png". Estos diagramas de caja deberían mostrar como los valores son distribuídos dentro de un año dado o mes y como se compara con el tiempo. El título del primer gráfico debería ser `Year-wise Box Plot (Trend)` y el título del segundo gráfico debería ser `Month-wise Box Plot (Seasonality)`. Asegurese que la etiqueta mes mes en la parte inferior empiece en `Jan` y los ejes x y y estén etiquetados correctamente. La plantilla incluye comandos para preparar los datos.

Para cada gráfico, asegúrese de usar una copia de los datos. Las pruebas unitarias están escritas para en `test_module.py`.

El boilerplate también incluye los comandos para guardar y devolver la imagen.

## Desarrollo

Para el desarrollo, puedes usar `main.py` para probar tus funciones. Haz clic en el botón "run" y se ejecutará `main.py`.

## Pruebas

Hemos importado las pruebas de `test_module.py` a `main.py` para tu conveniencia. Las pruebas se ejecutarán automáticamente cada vez que presiones el botón "run".

## Envío

Copia el enlace de tu proyecto y envíalo a freeCodeCamp.

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
