---
id: 5e44414f903586ffb414c950
title: Calcolatore delle probabilità
challengeType: 10
forumTopicId: 462364
dashedName: probability-calculator
---

# --description--

Lavorerai a <a href="https://replit.com/github/freeCodeCamp/boilerplate-probability-calculator" target="_blank" rel="noopener noreferrer nofollow">questo progetto con il nostro codice d'inizio su Replit</a>.

-   Inizia importando il progetto su Replit.
-   Poi vedrai una finestra `.replit`.
-   Seleziona `Use run command` e clicca sul pulsante `Done`.


# --instructions--

Supponiamo che ci sia un cappello contenente 5 palline blu, 4 palline rosse e 2 palline verdi. Qual è la probabilità che una pescata casuale di 4 palline contenga almeno 1 pallina rossa e 2 palline verdi? Mentre sarebbe possibile calcolare la probabilità utilizzando la matematica avanzata, un modo più facile è quello di scrivere un programma per eseguire un gran numero di esperimenti per stimare una probabilità approssimativa.

Per questo progetto, scriverai un programma per determinare la probabilità approssimativa di pescare a caso determinate palline da un cappello.

Per prima cosa, crea una classe `Hat` (cappello) in `prob_calculator.py`. La classe deve prendere un numero variabile di argomenti che specificano il numero di palline di ogni colore che sono nel cappello. Ad esempio, un oggetto di classe potrebbe essere creato in uno qualsiasi di questi modi:

```py
hat1 = Hat(yellow=3, blue=2, green=6)
hat2 = Hat(red=5, orange=4)
hat3 = Hat(red=5, orange=4, black=1, blue=0, pink=2, striped=9)
```

Un cappello sarà sempre creato con almeno una pallina. Gli argomenti passati all'oggetto cappello alla creazione dovrebbero essere convertiti in una variabile di istanza `contents`. `contents` dovrebbe essere una lista di stringhe contenente un elemento per ogni pallina nel cappello. Ogni elemento nella lista dovrebbe essere il nome del colore che rappresenti una singola sfera di quel colore. Ad esempio, se il tuo cappello è `{"red": 2, "blue": 1}`, `contents` dovrebbe essere `["red", "red", "blue"]`.

La classe `Hat` dovrebbe avere un metodo `draw` che accetta un argomento che indica il numero di palline da prelevare dal cappello. Questo metodo dovrebbe rimuovere palline a caso da `contents` e restituire quelle palline come un elenco di stringhe. Le palle non devono tornare nel cappello durante il pescaggio, simile all'esperimento con un'urna senza sostituzione. Se il numero di palline da pescare supera la quantità disponibile, restituisci tutte le palline.

Successivamente, crea una funzione `experiment` in `prob_calculator.py` (non all'interno della classe `Hat`). Questa funzione dovrebbe accettare i seguenti argomenti:

- `hat`: Un oggetto cappello contenente palline che dovrebbero essere copiate all'interno della funzione.
- `expected_balls`: Un oggetto che indica il gruppo esatto di palline che tentiamo di attingere dal cappello per l'esperimento. Ad esempio, per determinare la probabilità di pescare 2 palline blu e 1 pallina rossa dal cappello, imposta `expected_balls` a `{"blue":2, "red":1}`.
- `num_balls_drawn`: Il numero di palline da pescare dal cappello in ogni esperimento.
- `num_experiments`: Il numero di esperimenti da eseguire. (Più esperimenti eseguiti, più precisa sarà la probabilità approssimativa.)

La funzione `experiment` dovrebbe restituire una probabilità.

Per esempio, se vuoi determinare la probabilità di ottenere almeno due palline rosse e una verde quando estrai cinque palline da un cappello contenente sei palline nere, quattro rosse, e tre verdi. Per fare ciò, esegui `N` esperimenti, conti il numero `M` di estrazioni in cui ottieni almeno due palline rosse e una verde, e stimi la probabilità come `M/N`. Ogni esperimento consiste nell'iniziare con un cappello che contiene le palle specificate, estraendo svariate palline, e controllando se hai ottenuto le palle che stati cercando di ottenere.

Ecco come verrebbe chiamata la funzione `experiment` basata sull'esempio sopra con 2000 esperimenti:

```py
hat = Hat(black=6, red=4, green=3)
probability = experiment(hat=hat,
                  expected_balls={"red":2,"green":1},
                  num_balls_drawn=5,
                  num_experiments=2000)
```

Poiché questo è basato su pescaggi casuali, la probabilità sarà leggermente diversa ogni volta che il codice viene eseguito.

*Suggerimento: Considera di utilizzare i moduli già importati nella parte superiore di `prob_calculator.py`. Non inizializzare il seme casuale entro `prob_calculator.py`.*

## Sviluppo

Scrivi il tuo codice in `prob_calculator.py`. Per lo sviluppo, puoi usare `main.py` per testare il tuo codice. Fare clic sul pulsante "Run" e `main.py` verrà eseguito.

Il codice iniziale include le istruzioni di `import` per i moduli `copy` e `random`. Considera di utilizzarli nel tuo progetto.

## Test

I test unitari per questo progetto sono in `test_module.py`. Abbiamo importato i test da `test_module.py` in `main.py` per tua comodità. I test saranno eseguiti automaticamente quando usi il bottone "run".

## Invio

Copia l'URL del tuo progetto e invialo a freeCodeCamp.

# --hints--

Dovrebbe calcolare correttamente le probabilità e superare tutti i test.

```js

```

# --solutions--

```js
/**
  Backend challenges don't need solutions,
  because they would need to be tested against a full working project.
  Please check our contributing guidelines to learn more.
*/
```
