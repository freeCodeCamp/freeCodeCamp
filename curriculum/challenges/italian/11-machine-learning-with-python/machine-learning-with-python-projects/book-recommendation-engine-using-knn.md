---
id: 5e46f8e3ac417301a38fb92f
title: Motore per il suggerimento di libri che utilizza KNN
challengeType: 10
forumTopicId: 462378
dashedName: book-recommendation-engine-using-knn
---

# --description--

<a href="https://colab.research.google.com/github/freeCodeCamp/boilerplate-book-recommendation-engine/blob/master/fcc_book_recommendation_knn.ipynb" target="_blank" rel="noopener noreferrer nofollow">Lavorerai su questo progetto con Google Colaboratory</a>.

Dopo essere andato a quel collegamento, crea una copia del notebook nel tuo account o localmente. Una volta completato il progetto e superato il test (incluso a quel link), invia il link del progetto qui sotto. Se stai inviando un link di Google Colaboratory, assicurati di attivare la condivisione di link per "anyone with the link"

Stiamo ancora sviluppando il contenuto didattico interattivo per il programma di machine learning. Per ora, puoi vedere le sfide video in questa certificazione. Potrebbe anche essere necessario cercare ulteriori risorse di apprendimento, in maniera simile a quello che faresti lavorando su un progetto del mondo reale.

# --instructions--

In questa sfida creerai un algoritmo per suggerire dei libri usando **K-Nearest Neighbors**.

Userai il <a href="http://www2.informatik.uni-freiburg.de/~cziegler/BX/" target="_blank" rel="noopener noreferrer nofollow">Book-Crossings dataset</a>. Questo set di dati contiene 1,1 milioni di valutazioni (scala 1-10) di 270.000 libri da 90.000 utenti.

Dopo aver importato e pulito i dati, usa `NearestNeighbors` da `sklearn.neighbors` per sviluppare un modello che mostra libri che sono simili a un dato libro. L'algoritmo Nearest Neighbors misura la distanza per determinare la "vicinanza" delle istanze.

Crea una funzione dal nome `get_recommends` che prende il titolo di un libro (dal dataset) come argomento e restituisce una lista di 5 libri simili con la loro distanza dal libro argomento.

Questo codice:

```py
get_recommends("The Queen of the Damned (Vampire Chronicles (Paperback))")
```

dovrebbe restituire:

```py
[
  'The Queen of the Damned (Vampire Chronicles (Paperback))',
  [
    ['Catch 22', 0.793983519077301], 
    ['The Witching Hour (Lives of the Mayfair Witches)', 0.7448656558990479], 
    ['Interview with the Vampire', 0.7345068454742432],
    ['The Tale of the Body Thief (Vampire Chronicles (Paperback))', 0.5376338362693787],
    ['The Vampire Lestat (Vampire Chronicles, Book II)', 0.5178412199020386]
  ]
]
```

Nota che i dati restituiti da `get_recommends()` è una lista. Il primo elemento nella lista è il titolo del libro passato nella funzione. Il secondo elemento nella lista è una lista di altre cinque liste. Ognuna delle cinque liste contiene un libro raccomandato e la distanza dal libro suggerito al libro passato nella funzione.

Se grafichi il dataset (facoltativo), noterai che molti libri non sono votati frequentemente. Per assicurarti significanza statistica, rimuovi dal dataset utenti con meno di 200 voti e libri con meno di 100 voti.

Le prime tre celle importano librerie di cui potresti avere bisogno e i dati da usare. L'ultima cella è per i test. Scrivi il tuo codive tra queste celle.

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
