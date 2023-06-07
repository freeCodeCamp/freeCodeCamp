---
id: 5900f3db1000cf542c50feee
title: 'Problema 111: Primi con cifre ripetute'
challengeType: 1
forumTopicId: 301736
dashedName: problem-111-primes-with-runs
---

# --description--

Considerando i numeri primi a 4 cifre contenenti cifre ripetute è chiaro che non possono essere tutte uguali: 1111 è divisibile per 11, 2222 è divisibile per 22, e così via. Ma ci sono nove primi a 4 cifre contenenti tre uno:

$$1117, 1151, 1171, 1181, 1511, 1811, 2111, 4111, 8111$$

Diciamo che $M(n, d)$ rappresenta il numero massimo di cifre ripetute per un primo di n cifre in cui d è la cifra ripetuta, $N(n, d)$ rappresenta il numero di tali primi, e $S(n, d)$ rappresenta la somma di essi.

Quindi $M(4, 1) = 3$ è il numero massimo di cifre ripetute per un primo a 4 cifre dove la cifra ripetuta è uno, ci sono $N(4, 1) = 9$ di questi primi, e la somma di essi è $S(4, 1) = 22275$. Si scopre che per d = 0, è possibile avere solo $M(4, 0) = 2$ cifre ripetute, ma ci sono $N(4, 0) = 13$ casi simili.

Allo stesso modo otteniamo i seguenti risultati per i primi a 4 cifre.

| Digit, d | $M(4, d)$ | $N(4, d)$ | $S(4, d)$ |
| -------- | --------- | --------- | --------- |
| 0        | 2         | 13        | 67061     |
| 1        | 3         | 9         | 22275     |
| 2        | 3         | 1         | 2221      |
| 3        | 3         | 12        | 46214     |
| 4        | 3         | 2         | 8888      |
| 5        | 3         | 1         | 5557      |
| 6        | 3         | 1         | 6661      |
| 7        | 3         | 9         | 57863     |
| 8        | 3         | 1         | 8887      |
| 9        | 3         | 7         | 48073     |

Per d = 0 a 9, la somma di tutti gli $S(4, d)$ è di 273700. Trova la somma di tutti gli $S(10, d)$.

# --hints--

`primesWithRuns()` dovrebbe restituire `612407567715`.

```js
assert.strictEqual(primesWithRuns(), 612407567715);
```

# --seed--

## --seed-contents--

```js
function primesWithRuns() {

  return true;
}

primesWithRuns();
```

# --solutions--

```js
// solution required
```
