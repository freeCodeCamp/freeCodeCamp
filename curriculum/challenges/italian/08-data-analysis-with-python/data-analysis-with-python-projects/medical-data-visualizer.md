---
id: 5e46f7f8ac417301a38fb92a
title: Visualizzatore di Dati Medici
challengeType: 10
forumTopicId: 462368
dashedName: medical-data-visualizer
---

# --description--

Lavorerai a <a href="https://replit.com/github/freeCodeCamp/boilerplate-medical-data-visualizer" target="_blank" rel="noopener noreferrer nofollow">questo progetto con il nostro codice iniziale su Replit</a>.

-   Inizia importando il progetto su Replit.
-   Poi vedrai una finestra `.replit`.
-   Seleziona `Use run command` e clicca sul pulsante `Done`.


Stiamo ancora sviluppando la parte didattica interattiva del curriculum di Python. Per ora, ecco alcuni video sul canale YouTube di freeCodeCamp.org che ti insegneranno tutto quello che devi sapere per completare questo progetto:

- <a href="https://www.freecodecamp.org/news/python-for-everybody/" target="_blank" rel="noopener noreferrer nofollow">Video corso Python for Everybody</a> (14 ore)

- <a href="https://www.freecodecamp.org/news/how-to-analyze-data-with-python-pandas/" target="_blank" rel="noopener noreferrer nofollow"> Come analizzare i dati con Python Pandas </a>(10 ore)

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

- Aggiungi una colonna `overweight` (sovrappeso) ai dati. Per determinare se una persona è in sovrappeso, calcola prima il suo BMI dividendo il peso in chilogrammi per il quadrato della sua altezza in metri. Se questo valore è > 25 allora la persona è in sovrappeso. Usa il valore 0 per NON sovrappeso e 1 per sovrappeso.
- Normalizza i dati ponendo 0 sempre bene e 1 sempre male. Se il valore di `cholesterol` o `gluc` è 1, metti il valore 0. Se il valore è superiore a 1, metti il valore 1.
- Converti i dati in formato esteso e crea un grafico che mostri il valore del conteggio delle caratteristiche categoriche usando il `catplot()` di seaborn. Il set di dati dovrebbe essere suddiviso in base a 'Cardio' in modo che ci sia un grafico per ogni valore di `cardio`. Il grafico dovrebbe apparire come `examples/Figure_1.png`.
- Pulisci i dati. Filtra i seguenti segmenti di pazienti che rappresentano dati errati:
  - la pressione diastolica è superiore a quella sistolica (tieni i dati corretti con `(df['ap_lo'] <= df['ap_hi'])`)
  - l'altezza è inferiore al 2.5° percentile (tieni i dati corretti con `(df['height'] >= df['height'].quantile(0.025))`)
  - l'altezza è superiore al 97.5° percentile
  - il peso è inferiore al 2.5° percentile
  - il peso è superiore al 97.5° percentile
- Crea una matrice di correlazione usando l'insieme di dati. Traccia la matrice di correlazione usando la `heatmap()` di seaborn. Maschera il triangolo superiore. Il grafico dovrebbe apparire come in `examples/Figure_2.png`.

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
