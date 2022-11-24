---
id: 5e46f802ac417301a38fb92b
title: Visualizzatore della pagina delle serie temporali
challengeType: 10
forumTopicId: 462369
dashedName: page-view-time-series-visualizer
---

# --description--

Lavorerai a <a href="https://replit.com/github/freeCodeCamp/boilerplate-page-view-time-series-visualizer" target="_blank" rel="noopener noreferrer nofollow"> questo progetto con il nostro codice d'inizio su Replit</a>.

-   Start by importing the project on Replit.
-   Next, you will see a `.replit` window.
-   Select `Use run command` and click the `Done` button.


Stiamo ancora sviluppando la parte didattica interattiva del curriculum di Python. Per ora, ecco alcuni video sul canale YouTube di freeCodeCamp.org che ti insegneranno tutto quello che devi sapere per completare questo progetto:

- <a href="https://www.freecodecamp.org/news/python-for-everybody/" target="_blank" rel="noopener noreferrer nofollow">Python for Everybody Video Course</a>(14 hours)

- <a href="https://www.freecodecamp.org/news/how-to-analyze-data-with-python-pandas/" target="_blank" rel="noopener noreferrer nofollow">How to Analyze Data with Python Pandas</a> (10 hours)

# --instructions--

Per questo progetto visualizzerai i dati delle serie temporali usando un grafico a linea, un grafico a barre, e un diagramma a scatola e baffi. Userai Pandas, Matplotlib, e Seaborn per visualizzare un set di dati contenente il numero di pagine viste ogni giorno sul forum di freeCodeCamp.org dal 2016-05-09 al 2019-12-03. La visualizzazione dei dati ti aiuterà a riconoscere schemi nelle visite e identificare crescita annuale e mensile.

Utilizza i dati per completare le seguenti attività:

- Use Pandas to import the data from "fcc-forum-pageviews.csv". Set the index to the `date` column.
- Clean the data by filtering out days when the page views were in the top 2.5% of the dataset or bottom 2.5% of the dataset.
- Create a `draw_line_plot` function that uses Matplotlib to draw a line chart similar to "examples/Figure_1.png". The title should be `Daily freeCodeCamp Forum Page Views 5/2016-12/2019`. The label on the x axis should be `Date` and the label on the y axis should be `Page Views`.
- Create a `draw_bar_plot` function that draws a bar chart similar to "examples/Figure_2.png". It should show average daily page views for each month grouped by year. The legend should show month labels and have a title of `Months`. On the chart, the label on the x axis should be `Years` and the label on the y axis should be `Average Page Views`.
- Create a `draw_box_plot` function that uses Seaborn to draw two adjacent box plots similar to "examples/Figure_3.png". These box plots should show how the values are distributed within a given year or month and how it compares over time. The title of the first chart should be `Year-wise Box Plot (Trend)` and the title of the second chart should be `Month-wise Box Plot (Seasonality)`. Make sure the month labels on bottom start at `Jan` and the x and y axis are labeled correctly. The boilerplate includes commands to prepare the data.

Per ogni grafico, assicurati di utilizzare una copia del frame di dati. I test unitari sono scritti per te in `test_module.py`.

Il boilerplate include anche comandi per salvare e restituire l'immagine.

## Sviluppo

Nello sviluppo, puoi usare `main.py` per testare le tue funzioni. Usa il bottone "run" e `main.py` sarà eseguito.

## Test

Abbiamo impotato i test da `test_module.py` in `main.py` per la tua convenienza. I test saranno eseguiti automaticamente quando usi il bottone "run".

## Invio

Copia l'URL del tuo progetto e consegnalo nell'input qua sotto.

# --hints--

Dovrebbe superare tutti i test Python.

```js

```

# --solutions--

```py
  # Python challenges don't need solutions,
  # because they would need to be tested against a full working project.
  # Please check our contributing guidelines to learn more.
```
