---
id: 5e46f983ac417301a38fb933
title: Cracker Password SHA-1
challengeType: 10
forumTopicId: 462374
helpCategory: Python
dashedName: sha-1-password-cracker
---

# --description--

Lavorerai a <a href="https://replit.com/github/freeCodeCamp/boilerplate-SHA-1-password-cracker" target="_blank" rel="noopener noreferrer nofollow">questo progetto con il nostro codice iniziale su Replit</a>.

-   Inizia importando il progetto su Replit.
-   Poi vedrai una finestra `.replit`.
-   Seleziona `Use run command` e clicca sul pulsante `Done`.


Stiamo ancora sviluppando la parte didattica interattiva del curriculum di Python. Per ora, ecco alcuni video sul canale YouTube di freeCodeCamp.org che ti insegneranno tutto quello che devi sapere per completare questo progetto:

- <a href="https://www.freecodecamp.org/news/python-for-everybody/" target="_blank" rel="noopener noreferrer nofollow">Video corso Python for Everybody</a> (14 ore)

- <a href="https://www.freecodecamp.org/news/learn-python-basics-in-depth-video-course/" target="_blank" rel="noopener noreferrer nofollow">Video corso Python Basics in Depth</a> (4 hours)

- <a href="https://www.freecodecamp.org/news/intermediate-python-course/" target="_blank" rel="noopener noreferrer nofollow">Video corso Intermediate Python</a> (6 hours)

# --instructions--

Le password non devono mai essere memorizzate come semplice testo in chiaro. Esse dovrebbero essere memorizzate come hash, nel caso in cui la lista delle password fosse scoperta. Tuttavia, non tutti gli hash sono creati allo stesso modo.

In questo progetto comprenderai l'importanza di avere una buona sicurezza, creando un cracker di password per ottenere le password di cui è stato fatto l'hash utilizzando SHA-1.

Creare una funzione che riceve un hash SHA-1 di una password e restituisce la password se è una delle 10000 password più utilizzate. Se l'hash SHA-1 NON è di una password nel database, restituisce "PASSWORD NOT IN DATABASE".

La funzione dovrebbe calcolare l'hash di ogni password da `top-10000-passwords.txt` e confrontarla con l'hash passato nella funzione.

La funzione dovrebbe prendere un secondo argomento opzionale chiamato `use_salts`. Se impostato a true, ogni stringa di salt dal file `known-salts.txt` dovrebbe essere aggiunto prima e dopo ogni password presa da `top-10000-passwords.txt` prima di fare l'hashing e prima di confrontarlo con l'hash passato alla funzione.

Ecco l'hash di alcune password con cui testare la funzione:

- `b305921a3723cd5d70a375cd21a61e60aabb84ec` dovrebbe restituire "sammy123"
- `c7ab388a5ebefbf4d550652f1eb4d833e5316e3e` dovrebbe restituire "abacab"
- `5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8` dovrebbe restituire "password"

Ecco l'hash di alcune password con cui testare la funzione con `use_salts` impostato a `True`:

- `53d8b3dc9d39f0184144674e310185e41a87ffd5` dovrebbe restituire "superman"
- `da5a4e8cf89539e66097acd2f8af128acae2f8ae` dovrebbe restituire "q1w2e3r4t5"
- `ea3f62d498e3b98557f9f9cd0d905028b3b019e1` dovrebbe restituire "bubbles1"

La libreria `hashlib` è stata importata per te. Considera di usarla nel tuo codice. <a href="https://docs.python.org/3/library/hashlib.html" target="_blank" rel="noopener noreferrer nofollow">Scopri di più su "hashlib" qui</a>.

## Sviluppo

Scrivi il tuo codice in `password_cracker.py`. Per lo sviluppo, puoi usare `main.py` per testare il tuo codice. Usa il bottone "run" e `main.py` sarà eseguito.

## Test

I test unitari per questo progetto sono in `test_module.py`. Abbiamo importato i test da `test_module.py` in `main.py` per tua convenienza. I test saranno eseguiti automaticamente quando usi il bottone "run".

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
