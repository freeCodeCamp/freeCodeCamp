---
id: 5900f4891000cf542c50ff9b
title: 'Problema 284: Quadrati stazionari'
challengeType: 1
forumTopicId: 301935
dashedName: problem-284-steady-squares
---

# --description--

Il numero 376 a 3 cifre nel sistema di numerazione decimale è un esempio di numeri con la proprietà speciale che il suo quadrato termina con le stesse cifre: ${376}^2 = 141376$. Chiamiamo un numero con questa proprietà un quadrato stazionario.

I quadrati stabili possono essere osservati anche in altri sistemi di numerazione. Nel sistema di numerazione base 14, il numero a 3 cifre $c37$ è anche un quadrato costante: $c37^2 = aa0c37$, e la somma delle sue cifre è $c+3+7=18$ nello stesso sistema di numerazione. Le lettere $a$, $b$, $c$ e $d$ sono usate rispettivamente per le cifre 10, 11, 12 e 13, in modo simile al sistema di numerazione esadecimale.

Per $1 ≤ n ≤ 9$, la somma delle cifre di tutti i quadrati stazionari a cifra $n$ nel sistema di numerazione base 14 è $2d8$ (582 decimali). I quadrati stabili con 0 iniziali non sono permessi.

Trova la somma delle cifre di tutti i quadrati stazionari di $n$ nel sistema di numerazione della base 14 per $1 ≤ n ≤ 10000$ (decimale) e dai la tua risposta come una stringa nel sistema base 14 utilizzando lettere minuscole se necessario.

# --hints--

`steadySquares()` dovrebbe restituire una stringa.

```js
assert(typeof steadySquares() === 'string');
```

`steadySquares()` dovrebbe restituire la stringa `5a411d7b`.

```js
assert.strictEqual(steadySquares(), '5a411d7b');
```

# --seed--

## --seed-contents--

```js
function steadySquares() {

  return true;
}

steadySquares();
```

# --solutions--

```js
// solution required
```
