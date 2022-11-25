---
id: 5e4f5c4b570f7e3a4949899f
title: Predittore del livello del mare
challengeType: 10
forumTopicId: 462370
dashedName: sea-level-predictor
---

# --description--

Lavorerai a <a href="https://replit.com/github/freeCodeCamp/boilerplate-sea-level-predictor" target="_blank" rel="noopener noreferrer nofollow">questo progetto con il nostro codice d'inizio su Replit</a>.

-   Start by importing the project on Replit.
-   Next, you will see a `.replit` window.
-   Select `Use run command` and click the `Done` button.


Stiamo ancora sviluppando la parte didattica interattiva del curriculum di Python. Per ora, ecco alcuni video sul canale YouTube di freeCodeCamp.org che ti insegneranno tutto quello che devi sapere per completare questo progetto:

- <a href="https://www.freecodecamp.org/news/python-for-everybody/" target="_blank" rel="noopener noreferrer nofollow">Python for Everybody Video Course</a>(14 hours)

- <a href="https://www.freecodecamp.org/news/how-to-analyze-data-with-python-pandas/" target="_blank" rel="noopener noreferrer nofollow">How to Analyze Data with Python Pandas</a> (10 hours)

# --instructions--

Analizzerai un set di dati del cambiamento globale medio del livello del mare dal 1880. Userai i dati per predire il cambiamento del livello del mare fino all'anno 2050 incluso.

Usa i dati per completare le seguenti attività:

- Use Pandas to import the data from `epa-sea-level.csv`.
- Use matplotlib to create a scatter plot using the `Year` column as the x-axis and the `CSIRO Adjusted Sea Level` column as the y-axix.
- Use the `linregress` function from `scipy.stats` to get the slope and y-intercept of the line of best fit. Plot the line of best fit over the top of the scatter plot. Make the line go through the year 2050 to predict the sea level rise in 2050.
- Plot a new line of best fit just using the data from year 2000 through the most recent year in the dataset. Make the line also go through the year 2050 to predict the sea level rise in 2050 if the rate of rise continues as it has since the year 2000.
- The x label should be `Year`, the y label should be `Sea Level (inches)`, and the title should be `Rise in Sea Level`.

I test unitari sono scritti per te in `test_module.py`.

Il boilerplate include anche comandi per salvare e restituire l'immagine.

## Sviluppo

Nello sviluppo, puoi usare `main.py` per testare le tue funzioni. Usa il bottone "run" e `main.py` sarà eseguito.

## Test

Abbiamo importato i test da `test_module.py` in `main.py` per tua convenienza. I test saranno eseguiti automaticamente quando usi il bottone "run".

## Invio

Copia l'URL del tuo progetto e consegnalo nell'input qua sotto.

## Sorgente Dati

<a href="https://datahub.io/core/sea-level-rise" target="_blank" rel="noopener noreferrer nofollow">Cambiamento medio assoluto globale del livello del mare</a>, dal 1880 al 2014 da US Environmental Protection Agency usando i dati da CSIRO, 2015; NOAA, 2015.


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
