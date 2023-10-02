---
id: 5900f4991000cf542c50ffab
title: 'Problema 301: Nim'
challengeType: 1
forumTopicId: 301955
dashedName: problem-301-nim
---

# --description--

Nim è un gioco giocato con pile di pietre, dove due giocatori si alternano a rimuovere qualsiasi numero di pietre da qualsiasi pila fino a quando non rimangono più pietre.

Considereremo la versione normale a tre pile del gioco di Nim, che funziona come segue:

- All'inizio del gioco ci sono tre cumuli di pietre.
- Nel suo turno il giocatore rimuove qualsiasi numero positivo di pietre da qualsiasi mucchio singolo.
- Il primo giocatore non in grado di muovere (perché non ci sono pietre rimaste) perde.

Se ($n_1$, $n_2$, $n_3$) indica una posizione Nim consistente in cumuli di dimensione $n_1$, $n_2$ e $n_3$, c'è una funzione semplice $X(n_1,n_2, _3)$ — che si può cercare o tentare di dedurre da sé — che restituisce:

- zero se, con una strategia perfetta, il giocatore che sta per muovere alla fine perde; o
- non zero se, con una strategia perfetta, il giocatore in procinto di muovere alla fine vincerà.

Per esempio $X(1, 2, 3) = 0$ perché, indipendentemente da ciò che fa il giocatore attuale, il suo avversario può rispondere con una mossa che lascia due cumuli di uguale dimensione, per cui ogni mossa dal giocatore attuale può essere ripetuta dal suo avversario fino a quando non rimangono pietre; così il giocatore attuale perde. Per chiarire:

- il giocatore corrente muove a (1,2,1)
- l'avversario muove a (1,0,1)
- il giocatore corrente muove a (0,0,1)
- l'avversario muove a (0,0,0), e così vince.

Per quanti interi positivi $n ≤ 2^{30}$ si ottiene $X(n, 2n, 3n) = 0$?

# --hints--

`nim()` dovrebbe restituire `2178309`.

```js
assert.strictEqual(nim(), 2178309);
```

# --seed--

## --seed-contents--

```js
function nim() {

  return true;
}

nim();
```

# --solutions--

```js
// solution required
```
