---
id: 5e46f7f8ac417301a38fb92a
title: Visualizzatore di Dati Medici
challengeType: 10
forumTopicId: 462368
dashedName: medical-data-visualizer
---

# --description--

Lavorerai a <a href="https://replit.com/github/freeCodeCamp/boilerplate-medical-data-visualizer" target="_blank" rel="noopener noreferrer nofollow">questo progetto con il nostro codice iniziale su Replit</a>.

-   Start by importing the project on Replit.
-   Next, you will see a `.replit` window.
-   Select `Use run command` and click the `Done` button.


Stiamo ancora sviluppando la parte didattica interattiva del curriculum di Python. Per ora, ecco alcuni video sul canale YouTube di freeCodeCamp.org che ti insegneranno tutto quello che devi sapere per completare questo progetto:

- <a href="https://www.freecodecamp.org/news/python-for-everybody/" target="_blank" rel="noopener noreferrer nofollow">Python for Everybody Video Course</a>(14 hours)

- <a href="https://www.freecodecamp.org/news/how-to-analyze-data-with-python-pandas/" target="_blank" rel="noopener noreferrer nofollow">How to Analyze Data with Python Pandas</a> (10 hours)

# --instructions--

In questo progetto visualizzerai e farai calcoli relativi ai dati di esami medici usando matplotlib, seaborn, e pandas. I valori dell’insieme di dati sono stati raccolti durante una serie di esami medici.

## Descrizione dei dati

Le righe nel set di dati rappresentano i pazienti e le colonne rappresentano informazioni come le misurazioni del corpo, i risultati di vari esami del sangue e lo stile di vita. Userai il set di dati per esplorare il rapporto tra malattie cardiache, misurazioni del corpo, marcatori del sangue e stile di vita.

Nome del file: medical_examination.csv

|                 Caratteristica                 | Tipo Di Variabile |   Variabile   |                              Tipo Di Valore                              |
|:----------------------------------------------:|:-----------------:|:-------------:|:------------------------------------------------------------------------:|
|                      Età                       |  Dato oggettivo   |     `age`     |                               int (giorni)                               |
|                    Altezza                     |  Dato oggettivo   |   `height`    |                                 int (cm)                                 |
|                      Peso                      |  Dato oggettivo   |   `weight`    |                                float (kg)                                |
|                     Genere                     |  Dato oggettivo   |   `gender`    |                           codice di categoria                            |
|              Pressione sistolica               |   Dato da esami   |    `ap_hi`    |                                   int                                    |
|         Pressione sanguigna diastolica         |   Dato da esami   |    `ap_lo`    |                                   int                                    |
|                  Colesterolo                   |   Dato da esami   | `cholesterol` | 1: normale, 2: al di sopra del normale, 3: molto al di sopra del normale |
|                    Glucosio                    |   Dato da esami   |    `gluc`     | 1: normale, 2: al di sopra del normale, 3: molto al di sopra del normale |
|                    Fumatore                    |  Dato soggettivo  |    `smoke`    |                                 binario                                  |
|              Assunzione di alcol               |  Dato soggettivo  |    `alco`     |                                 binario                                  |
|                Attività fisica                 |  Dato soggettivo  |   `active`    |                                 binario                                  |
| Presenza o assenza di malattie cardiovascolari | Variabile target  |   `cardio`    |                                 binario                                  |

## Compiti

Crea un grafico simile a `examples/Figure_1.png`, dove vengono mostrati i conteggi di buoni e cattivi risultati per le variabili `cholesterol`, `gluc`, `alco`, `active` e `smoke` per pazienti con cardio=1 e cardio=0 in differenti pannelli.

Utilizza i dati per completare le seguenti attività in `medical_data_visualizer.py`:

- Add an `overweight` column to the data. To determine if a person is overweight, first calculate their BMI by dividing their weight in kilograms by the square of their height in meters. If that value is > 25 then the person is overweight. Use the value 0 for NOT overweight and the value 1 for overweight.
- Normalize the data by making 0 always good and 1 always bad. If the value of `cholesterol` or `gluc` is 1, make the value 0. If the value is more than 1, make the value 1.
- Convert the data into long format and create a chart that shows the value counts of the categorical features using seaborn's `catplot()`. The dataset should be split by 'Cardio' so there is one chart for each `cardio` value. The chart should look like `examples/Figure_1.png`.
- Clean the data. Filter out the following patient segments that represent incorrect data:
  - diastolic pressure is higher than systolic (Keep the correct data with `(df['ap_lo'] <= df['ap_hi'])`)
  - height is less than the 2.5th percentile (Keep the correct data with `(df['height'] >= df['height'].quantile(0.025))`)
  - height is more than the 97.5th percentile
  - weight is less than the 2.5th percentile
  - weight is more than the 97.5th percentile
- Create a correlation matrix using the dataset. Plot the correlation matrix using seaborn's `heatmap()`. Mask the upper triangle. The chart should look like `examples/Figure_2.png`.

Ogni volta che una variabile è impostata su `None`, assicurati di impostarla al codice corretto.

I test unitari sono scritti per te in `test_module.py`.

## Sviluppo

Nello sviluppo, puoi usare `main.py` per testare le tue funzioni. Usa il bottone "run" e `main.py` sarà eseguito.

## Test

Abbiamo importato i test da `test_module.py` in `main.py` per tua convenienza. I test saranno eseguiti automaticamente quando usi il bottone "run".

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
