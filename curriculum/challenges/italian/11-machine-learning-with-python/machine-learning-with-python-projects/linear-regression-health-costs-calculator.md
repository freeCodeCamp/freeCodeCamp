---
id: 5e46f8edac417301a38fb930
title: Calcolatore di costi per la salute con la Regressione Lineare
challengeType: 10
forumTopicId: 462379
dashedName: linear-regression-health-costs-calculator
---

# --description--

<a href="https://colab.research.google.com/github/freeCodeCamp/boilerplate-linear-regression-health-costs-calculator/blob/master/fcc_predict_health_costs_with_regression.ipynb" target="_blank" rel="noopener noreferrer nofollow">Lavorerai su questo progetto con Google Colaboratory</a>.

Dopo essere andato a quel collegamento, crea una copia del notebook nel tuo account o localmente. Una volta completato il progetto e superato il test (incluso a quel link), invia il link del progetto qui sotto. Se stai inviando un link di Google Colaboratory, assicurati di attivare la condivisione di link per "anyone with the link"

Stiamo ancora sviluppando il contenuto didattico interattivo per il programma di machine learning. Per ora, puoi vedere le sfide video in questa certificazione. Potrebbe anche essere necessario cercare ulteriori risorse di apprendimento, in maniera simile a quello che faresti lavorando su un progetto del mondo reale.

# --instructions--

In questa sfida, cercherai di prevedere i costi sanitari utilizzando un algoritmo di regressione.

Ti viene dato un set di dati contenente informazioni su persone diverse, inclusi i costi sanitari. Utilizza i dati per prevedere i costi sanitari sulla base di nuovi dati.

Le prime due celle di questo notebook importanto le librerie e i dati.

Assicurati di convertire dati categorici a numeri. Usa 80% dei dati come `train_dataset` e 20% dei dati come `test_dataset`.

`pop` la colonna "expenses" da questi dataset per creare dei nuovi dataset chiamati `train_labels` e `test_labels`. Usa queste etichette quando addestri il tuo modello.

Crea un modello e addestralo con `train_dataset`. Esegui l'ultima cella del norebook per verificare il tuo modello. L'ultima cella userà il non visto `test_dataset` per verificare quanto bene il modello generalizzi.

Per passare la sfida, `model.evaluate` deve restituire un errore medio assoluto inferiore a 3500. Questo significa che predice le spese mediche correttamente con un margine di $3500.

L'ultima cella predirrà anche le spese usando `test_dataset` e graficando i risultati.

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
