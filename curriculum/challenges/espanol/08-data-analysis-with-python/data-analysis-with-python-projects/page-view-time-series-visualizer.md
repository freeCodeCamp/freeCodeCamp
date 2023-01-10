---
id: 5e46f802ac417301a38fb92b
title: Visualizador de vistas de página en determinados períodos de tiempo
challengeType: 10
forumTopicId: 462369
dashedName: page-view-time-series-visualizer
---

# --description--

Estarás <a href="https://replit.com/github/freeCodeCamp/boilerplate-page-view-time-series-visualizer" target="_blank" rel="noopener noreferrer nofollow">trabajando en este proyecto con nuestro código de inicio Replit</a>.

-   Start by importing the project on Replit.
-   Next, you will see a `.replit` window.
-   Select `Use run command` and click the `Done` button.


Todavía estamos desarrollando la parte interactiva del currículo de Python. Por el momento, aquí hay algunos videos en el canal de YouTube de freeCodeCamp.org que te enseñaran todo lo que necesitas saber para completar este proyecto:

- <a href="https://www.freecodecamp.org/news/python-for-everybody/" target="_blank" rel="noopener noreferrer nofollow">Python for Everybody Video Course</a>(14 hours)

- <a href="https://www.freecodecamp.org/news/how-to-analyze-data-with-python-pandas/" target="_blank" rel="noopener noreferrer nofollow">How to Analyze Data with Python Pandas</a> (10 hours)

# --instructions--

Para este proyecto, visualizarás los datos de las series temporales utilizando un gráfico de líneas, un gráfico de barras y un gráfico de cajas. Utilizarás Pandas, Matplotlib y Seaborn para visualizar un conjunto de datos que contiene el número de vistas diarias en la página del foro de freeCodeCamp.org del 2016-05-09 al 2019-12-03. Las visualizaciones de datos le ayudarán a entender los patrones en las visitas e identificarán el crecimiento anual y mensual.

Utiliza los datos para completar las siguientes tareas:

- Use Pandas to import the data from "fcc-forum-pageviews.csv". Set the index to the `date` column.
- Clean the data by filtering out days when the page views were in the top 2.5% of the dataset or bottom 2.5% of the dataset.
- Create a `draw_line_plot` function that uses Matplotlib to draw a line chart similar to "examples/Figure_1.png". The title should be `Daily freeCodeCamp Forum Page Views 5/2016-12/2019`. The label on the x axis should be `Date` and the label on the y axis should be `Page Views`.
- Create a `draw_bar_plot` function that draws a bar chart similar to "examples/Figure_2.png". It should show average daily page views for each month grouped by year. The legend should show month labels and have a title of `Months`. On the chart, the label on the x axis should be `Years` and the label on the y axis should be `Average Page Views`.
- Create a `draw_box_plot` function that uses Seaborn to draw two adjacent box plots similar to "examples/Figure_3.png". These box plots should show how the values are distributed within a given year or month and how it compares over time. The title of the first chart should be `Year-wise Box Plot (Trend)` and the title of the second chart should be `Month-wise Box Plot (Seasonality)`. Make sure the month labels on bottom start at `Jan` and the x and y axis are labeled correctly. The boilerplate includes commands to prepare the data.

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
