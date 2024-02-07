---
id: 5e4f5c4b570f7e3a4949899f
title: Predittore del livello del mare
challengeType: 10
forumTopicId: 462370
dashedName: sea-level-predictor
---

# --description--

Lavorerai a <a href="https://replit.com/github/freeCodeCamp/boilerplate-sea-level-predictor" target="_blank" rel="noopener noreferrer nofollow">questo progetto con il nostro codice d'inizio su Replit</a>.

-   Inizia importando il progetto su Replit.
-   Poi vedrai una finestra `.replit`.
-   Seleziona `Use run command` e clicca sul pulsante `Done`.


Stiamo ancora sviluppando la parte didattica interattiva del curriculum di Python. Per ora, ecco alcuni video sul canale YouTube di freeCodeCamp.org che ti insegneranno tutto quello che devi sapere per completare questo progetto:

- <a href="https://www.freecodecamp.org/news/python-for-everybody/" target="_blank" rel="noopener noreferrer nofollow">Video corso Python for Everybody</a> (14 ore)

- <a href="https://www.freecodecamp.org/news/how-to-analyze-data-with-python-pandas/" target="_blank" rel="noopener noreferrer nofollow"> Come analizzare i dati con Python Pandas </a>(10 ore)

# --instructions--

Analizzerai un set di dati del cambiamento globale medio del livello del mare dal 1880. Userai i dati per predire il cambiamento del livello del mare fino all'anno 2050 incluso.

Usa i dati per completare le seguenti attività:

- Usa Pandas per importare i dati da `epa-sea-level.csv`.
- Usa matplotlib per creare un grafico a dispersione usando la colonna `Year` come asse x e la colonna `CSIRO Adjusted Sea Level` come asse y.
- Usa la funzione `linregress` da `scipy.stats` per ottenere la pendenza e l'intercetta y della retta di regressione. Traccia la retta di regressione sopra la parte superiore del grafico a dispersione. Fai passare la linea attraverso l'anno 2050 per prevedere l'aumento del livello del mare nel 2050.
- Traccia una nuova retta di regressione utilizzando i dati dall'anno 2000 all'anno più recente nel set di dati. Fai passare la linea anche per l'anno 2050 per prevedere quale sarà l'aumento del livello del mare nel 2050 se il tasso di crescita continuerà come ha fatto dal 2000 in poi.
- L'asse x dovrebbe essere `Year`, l'asse y dovrebbe essere `Sea Level (inches)` e il titolo dovrebbe essere `Rise in Sea Level`.

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
