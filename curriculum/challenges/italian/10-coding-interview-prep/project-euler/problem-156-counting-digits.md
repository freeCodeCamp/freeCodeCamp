---
id: 5900f4091000cf542c50ff1b
title: 'Problema 156: Contare le cifre'
challengeType: 1
forumTopicId: 301787
dashedName: problem-156-counting-digits
---

# --description--

A partire da zero i numeri naturali sono scritti in base 10 in questo modo:

0 1 2 3 4 5 6 7 8 9 10 11 12....

Considera la cifra $d = 1$. Dopo aver annotato ogni numero n, aggiorneremo il numero di uno che si sono verificati e chiameremo questo numero $f(n, 1)$. I primi valori per $f(n, 1)$, quindi, sono i seguenti:

| $n$ | $f(n, 1)$ |
| --- | --------- |
| 0   | 0         |
| 1   | 1         |
| 2   | 1         |
| 3   | 1         |
| 4   | 1         |
| 5   | 1         |
| 6   | 1         |
| 7   | 1         |
| 8   | 1         |
| 9   | 1         |
| 10  | 2         |
| 11  | 4         |
| 12  | 5         |

Nota che $f(n, 1)$ non è mai uguale a 3.

Quindi le prime due soluzioni dell'equazione $f(n, 1) = n$ sono $n = 0$ e $n = 1$. La soluzione successiva è $n = 199981$. Allo stesso modo la funzione $f(n, d)$ dà il numero totale di cifre d che sono state scritte dopo che il numero $n$ è stato scritto.

Infatti, per ogni cifra $d =0$, 0 è la prima soluzione dell'equazione $f(n, d) = n$. Sia $s(d)$ sia la somma di tutte le soluzioni per le quali $f(n, d) = n$.

Dato $s(1) = 22786974071$. Trova $\sum{s(d)}$ per $1 ≤ d ≤ 9$.

Nota: se, per alcuni $n$, $f(n, d) = n$ per più di un valore di $d$ questo valore di $n$ è contato di nuovo per ogni valore di $d$ per il quale $f(n, d) = n$.

# --hints--

`countingDigits()` dovrebbe restituire `21295121502550`.

```js
assert.strictEqual(countingDigits(), 21295121502550);
```

# --seed--

## --seed-contents--

```js
function countingDigits() {

  return true;
}

countingDigits();
```

# --solutions--

```js
// solution required
```
