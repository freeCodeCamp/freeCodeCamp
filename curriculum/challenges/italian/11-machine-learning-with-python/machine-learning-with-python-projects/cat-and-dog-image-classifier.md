---
id: 5e46f8dcac417301a38fb92e
title: Classificatore di immagini di gatti e cani
challengeType: 10
forumTopicId: 462377
dashedName: cat-and-dog-image-classifier
---

# --description--

<a href="https://colab.research.google.com/github/freeCodeCamp/boilerplate-cat-and-dog-image-classifier/blob/master/fcc_cat_dog.ipynb" target="_blank" rel="noopener noreferrer nofollow">Lavorerai su questo progetto con Google Colaboratory</a>.

Dopo essere andato a quel collegamento, crea una copia del notebook nel tuo account o localmente. Una volta completato il progetto e superato il test (incluso a quel link), invia il link del progetto qui sotto. Se stai inviando un link di Google Colaboratory, assicurati di attivare la condivisione di link per "anyone with the link"

Stiamo ancora sviluppando il contenuto didattico interattivo per il programma di machine learning. Per ora, puoi vedere le sfide video in questa certificazione. Potrebbe anche essere necessario cercare ulteriori risorse di apprendimento, in maniera simile a quello che faresti lavorando su un progetto del mondo reale.

# --instructions--

Per questa sfida, completerai il codice per classificare immagini di cani e gatti. Utilizzerai Tensorflow 2.0 e Keras per creare una rete neurale convoluzionale che classifica correttamente immagini di cani e gatti almeno il 63% delle volte. (Crediti extra se arrivi ad una accuratezza di 70%!)

Una parte del codice ti è dato, ma devi scrivere una parte del codice per completare la sfida. Leggi le istruzioni in ogni cella di testo così saprai cosa devi fare in ogni cella di codice.

La prima cella di codice importa le librerie richieste. La seconda cella scarica i dati e imposta le variabili chiave. La terza cella è il primo posto dove scriverai il tuo codice.

La struttura dei file di dataset che sono scaricati appare così (Noterai che la cartella di test non ha sottocartelle e che le immagini non sono etichettate):

```py
cats_and_dogs
|__ train:
    |______ cats: [cat.0.jpg, cat.1.jpg ...]
    |______ dogs: [dog.0.jpg, dog.1.jpg ...]
|__ validation:
    |______ cats: [cat.2000.jpg, cat.2001.jpg ...]
    |______ dogs: [dog.2000.jpg, dog.2001.jpg ...]
|__ test: [1.jpg, 2.jpg ...]
```

Puoi cambiare epoch e dimensione dei batch se vuoi, ma non è richiesto.

Le seguenti istruzioni corrispondo a specifici numeri di celle, indicate con un commento in cima alla cella (tipo `# 3`).

## Cella 3

Ora è il tuo turno! Imposta correttamente ciascuna delle variabili in questa cella. (Non dovrebbero più essere uguali a `None`.)

Crea generatori di immagini per ognuno dei tre set di dati di immagini (addestramento, validazione, test). Usa `ImageDataGenerator` per leggere / decodificare le immagini e convertire in tensori a virgola mobile. Usa l'argomento `rescale` (e nessun altro argomento per ora) per riscalare i tensori da valori tra 0 e 255 a valori tra 0 e 1.

Per le variabili `*_data_gen`, usa il metodo `flow_from_directory`. Passa la dimensione del batch, la directory, la dimensione del target (`(IMG_HEIGHT, IMG_WIDTH)`, modo di classe, e qualsiasi altra cosa richiesta. `test_data_gen` sarà la cosa più complicata. Per `test_data_gen`, assicurati di passare `shuffle=False` al metodo `flow_from_directory`. Questo sarà si che le predizioni finali stanno nell'ordine che i nostri test si aspettano. Per `test_data_gen` sarà anche utile osservare la struttura della cartella.


Dopo che esegui il codice, l'output dovrebbe essere tipo questo:

```py
Found 2000 images belonging to 2 classes.
Found 1000 images belonging to 2 classes.
Found 50 images belonging to 1 class.
```

## Cella 4

La funzione `plotImages` sarà usata alcune volte per plottare le immagini. Prende un array di immagini e una lista di probabilità, anche se la lista di probabilità è opzionale. Questo codice ti è dato. Se hai creato la variabile `train_data_gen` correttamente, allora eseguire questa cella plotterà cinque immagini di addestramento casuali.

## Cella 5

Ricrea `train_image_generator` usando `ImageDataGenerator`.

Visto che ci sono pochi esempi di addestramento, c'è il rischio di overfitting. Un modo per aggiustare questo problema è creando più dati di addestramento dagli esempi di addestramento esistenti tramite trasformazioni casuali.

Aggiungi 4-6 trasformazioni come argomenti di `ImageDataGenerator`. Assicurati di riscalare come hai fatto prima.

## Cella 6

Non devi fare nulla per questa cella. `train_data_gen` è creato proprio come prima ma con il nuovo `train_image_generator`. Poi, una singola immagine è plottata cinque volte diverse usando diverse variazioni.

## Cella 7

In questa cella, crea un modello per la rete neurale che restituisce le probabilità di classe. Dovrebbe usare il modello sequenziale di Keras. Probabilmente coinvolgerà una pila di livelli Conv2D e MaxPooling2D e poi un livello completamente connesso in cima che viene attivato da una funzione di attivazione ReLU.

Compila il modello passando gli argomenti per impostare l'ottimizzatore e la perdita. Passa anche `metrics=['accuracy']` per visualizzare l'accuratezza dell'addestramento e della convalida per ogni epoca di allenamento.

## Cella 8

Usa il metodo `fit` sul tuo `model` per addestrare la rete. Assicurati di passare argomenti per `x`, `steps_per_epoch`, `epochs`, `validation_data`e `validation_steps`.

## Cella 9

Esegui questa cella per visualizzare la precisione e la perdita del modello.

## Cella 10

Adesso è tempo di usare il tuo modello per predire se un'immagine nuova di zecca è un gatto o un cane.

In questa cella, ottieni la probabilità che ogni immagine di prova (da `test_data_gen`) sia un cane o un gatto. `probabilities` dovrebbe essere una lista di numeri interi.

Chiama la funzione `plotImages` e passagli le immagini di prova e le probabilità corrispondenti a ciascuna immagine di prova.

Dopo l'esecuzione della cella, dovresti vedere tutte le 50 immagini di prova con un'etichetta che mostra la percentuale di "sicurezza" che l'immagine sia un gatto o un cane. La precisione corrisponderà alla precisione mostrata nel grafico precedente (dopo aver eseguito la cella precedente). Più immagini di addestramento potrebbe portare ad una maggiore precisione.

## Cella 11

Esegui questa cella finale per vedere se hai passato la sfida o se devi continuare a provare.

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
