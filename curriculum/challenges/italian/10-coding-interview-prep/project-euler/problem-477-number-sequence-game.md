---
id: 5900f54a1000cf542c51005c
title: 'Problema 477: Gioco della sequenza dei numeri'
challengeType: 1
forumTopicId: 302154
dashedName: problem-477-number-sequence-game
---

# --description--

Il gioco della sequenza di numeri inizia con una sequenza $S$ di $N$ numeri scritti su una riga.

Due giocatori alternano il turno. Al proprio turno, un giocatore deve scegliere e rimuovere il primo o l'ultimo numero rimasto nella sequenza.

Il punteggio del giocatore è la somma di tutti i numeri che ha cancellato. Ogni giocatore prova a massimizzare la propria somma.

Se $N = 4$ e $S = \\{1, 2, 10, 3\\}$, allora ogni giocatore massimizza il proprio punteggio come segue:

- Giocatore 1: rimuove il primo numero (1)
- Giocatore 2: rimuove l'ultimo numero dalla sequenza rimasta (3)
- Giocatore 1: rimuove l'ultimo numero dalla sequenza rimasta (10)
- Giocatore 2: rimuove il numero rimasto (2)

Il punteggio del giocatore 1 è $1 + 10 = 11$.

Sia $F(N)$ il punteggio del giocatore 1 se entrambi i giocatori seguono la strategia ottimale per la sequenza $S = \\{s_1, s_2, \ldots, s_N\\}$ definita come:

- $s_1 = 0$
- $s_{i + 1} = ({s_i}^2 + 45)$ modulo $1\\,000\\,000\\,007$

La sequenza inizia con $S = \\{0, 45, 2\\,070, 4\\,284\\,945, 753\\,524\\,550, 478\\,107\\,844, 894\\,218\\,625, \ldots\\}$.

Ti è dato $F(2) = 45$, $F(4) = 4\\,284\\,990$, $F(100) = 26\\,365\\,463\\,243$, $F(104) = 2\\,495\\,838\\,522\\,951$.

Trova $F({10}^8)$.

# --hints--

`numberSequenceGame()` dovrebbe restituire `25044905874565164`.

```js
assert.strictEqual(numberSequenceGame(), 25044905874565164);
```

# --seed--

## --seed-contents--

```js
function numberSequenceGame() {

  return true;
}

numberSequenceGame();
```

# --solutions--

```js
// solution required
```
