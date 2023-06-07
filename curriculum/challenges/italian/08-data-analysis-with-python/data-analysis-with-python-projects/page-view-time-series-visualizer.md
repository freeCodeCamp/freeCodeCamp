---
id: 5e46f802ac417301a38fb92b
title: Visualizzatore della pagina delle serie temporali
challengeType: 10
forumTopicId: 462369
dashedName: page-view-time-series-visualizer
---

# --description--

Lavorerai a <a href="https://replit.com/github/freeCodeCamp/boilerplate-page-view-time-series-visualizer" target="_blank" rel="noopener noreferrer nofollow"> questo progetto con il nostro codice d'inizio su Replit</a>.

-   Inizia importando il progetto su Replit.
-   Poi vedrai una finestra `.replit`.
-   Seleziona `Use run command` e clicca sul pulsante `Done`.


Stiamo ancora sviluppando la parte didattica interattiva del curriculum di Python. Per ora, ecco alcuni video sul canale YouTube di freeCodeCamp.org che ti insegneranno tutto quello che devi sapere per completare questo progetto:

- <a href="https://www.freecodecamp.org/news/python-for-everybody/" target="_blank" rel="noopener noreferrer nofollow">Video corso Python for Everybody</a> (14 ore)

- <a href="https://www.freecodecamp.org/news/how-to-analyze-data-with-python-pandas/" target="_blank" rel="noopener noreferrer nofollow"> Come analizzare i dati con Python Pandas </a>(10 ore)

# --instructions--

Per questo progetto visualizzerai i dati delle serie temporali usando un grafico a linea, un grafico a barre, e un diagramma a scatola e baffi. Userai Pandas, Matplotlib, e Seaborn per visualizzare un set di dati contenente il numero di pagine viste ogni giorno sul forum di freeCodeCamp.org dal 2016-05-09 al 2019-12-03. La visualizzazione dei dati ti aiuterà a riconoscere schemi nelle visite e identificare crescita annuale e mensile.

Utilizza i dati per completare le seguenti attività:

- Utilizza Pandas per importare i dati da "fcc-forum-pageviews.csv". Imposta l'indice alla colonna `date`.
- Pulisci i dati filtrando i giorni in cui le viste della pagina erano nel 2,5% superiore o nel 2,5% inferiore del set di dati.
- Crea una funzione `draw_line_plot` che utilizza Matplotlib per disegnare un grafico a linee simile a "examples/Figure_1.png". Il titolo dovrebbe essere `Daily freeCodeCamp Forum Page Views 5/2016-12/2019`. L'etichetta sull'asse x dovrebbe essere `Date` e l'etichetta sull'asse y dovrebbe essere `Page Views`.
- Crea una funzione `draw_bar_plot` che disegna un grafico a barre simile a "examples/Figure_2.png". Dovrebbe mostrare le visualizzazioni medie giornaliere delle pagine per ogni mese raggruppato per anno. La legenda dovrebbe mostrare le etichette dei mesi e avere il titolo `Months`. Sul grafico, l'etichetta sull'asse x dovrebbe essere `Years` e l'etichetta sull'asse y dovrebbe essere `Average Page Views`.
- Crea una funzione `draw_box_plot` che utilizzi Seaborn per disegnare due grafici adiacenti simili a "examples/Figure_3.png". Questi grafici a riquadro devono mostrare come sono distribuiti i valori entro un determinato anno o mese e il confronto nel tempo. Il titolo del primo grafico dovrebbe essere `Year-wise Box Plot (Trend)` e il titolo del secondo grafico dovrebbe essere `Month-wise Box Plot (Seasonality)`. Assicurati che le etichette mensili in basso inizino con `Jan` e gli assi x e y siano etichettati correttamente. Il boilerplate include comandi per preparare i dati.

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
