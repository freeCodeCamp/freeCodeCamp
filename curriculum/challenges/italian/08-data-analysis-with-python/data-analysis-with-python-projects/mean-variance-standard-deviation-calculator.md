---
id: 5e46f7e5ac417301a38fb928
title: Calcolatore della Varianza, Media e Deviazione Standard
challengeType: 10
forumTopicId: 462366
dashedName: mean-variance-standard-deviation-calculator
---

# --description--

Lavorerai a <a href="https://replit.com/github/freeCodeCamp/boilerplate-mean-variance-standard-deviation-calculator" target="_blank" rel="noopener noreferrer nofollow">questo progetto con il nostro codice iniziale su Replit</a>.

-   Inizia importando il progetto su Replit.
-   Poi vedrai una finestra `.replit`.
-   Seleziona `Use run command` e clicca sul pulsante `Done`.


Stiamo ancora sviluppando la parte didattica interattiva del curriculum di Python. Per ora, ecco alcuni video sul canale YouTube di freeCodeCamp.org che ti insegneranno tutto quello che devi sapere per completare questo progetto:

- <a href="https://www.freecodecamp.org/news/python-for-everybody/" target="_blank" rel="noopener noreferrer nofollow">Video corso Python for Everybody</a> (14 ore)

- <a href="https://www.freecodecamp.org/news/how-to-analyze-data-with-python-pandas/" target="_blank" rel="noopener noreferrer nofollow"> Come analizzare i dati con Python Pandas </a>(10 ore)

# --instructions--

Crea una funzione denominata `calculate()` in `mean_var_std.py` che utilizza Numpy per calcolare la media, la varianza, la deviazione standard, il numero massimo, il numero minimo, e la somma delle righe, delle colonne e degli elementi in una matrice 3 x 3.

L'input della funzione dovrebbe essere una lista contenente 9 cifre. La funzione dovrebbe convertire la lista in un array Numpy 3 x 3, quindi restituire un dizionario contenente la media, varianza, deviazione standard, numero massimo, numero minimo, e somma su entrambi gli assi e per la matrice appiattita.

Il dizionario restituito dovrebbe seguire questo formato:

```py
{
  'mean': [axis1, axis2, flattened],
  'variance': [axis1, axis2, flattened],
  'standard deviation': [axis1, axis2, flattened],
  'max': [axis1, axis2, flattened],
  'min': [axis1, axis2, flattened],
  'sum': [axis1, axis2, flattened]
}
```

Se nella funzione viene passato un elenco contenente meno di 9 elementi, dovrebbe sollevare un'eccezione `ValueError` con il messaggio: "List must contain nine numbers." I valori nel dizionario restituito dovrebbero essere liste e non array Numpy.

Per esempio, `calculate([0,1,2,3,4,5,6,7,8])` dovrebbe restituire:

```py
{
  'mean': [[3.0, 4.0, 5.0], [1.0, 4.0, 7.0], 4.0],
  'variance': [[6.0, 6.0, 6.0], [0.6666666666666666, 0.6666666666666666, 0.6666666666666666], 6.666666666666667],
  'standard deviation': [[2.449489742783178, 2.449489742783178, 2.449489742783178], [0.816496580927726, 0.816496580927726, 0.816496580927726], 2.581988897471611],
  'max': [[6, 7, 8], [2, 5, 8], 8],
  'min': [[0, 1, 2], [0, 3, 6], 0],
  'sum': [[9, 12, 15], [3, 12, 21], 36]
}
```

I test unitari per questo progetto sono in `test_module.py`.

## Sviluppo

Per lo sviluppo, puoi usare `main.py` per testare la tua funzione `calculate()`. Fai clic sul pulsante "Run" e `main.py` verrà eseguito.

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
