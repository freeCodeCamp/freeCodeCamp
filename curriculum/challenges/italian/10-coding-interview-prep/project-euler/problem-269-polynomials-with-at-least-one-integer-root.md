---
id: 5900f4791000cf542c50ff8c
title: 'Problema 269: Polinomi con almeno una radice intera'
challengeType: 1
forumTopicId: 301918
dashedName: problem-269-polynomials-with-at-least-one-integer-root
---

# --description--

Una radice o zero di un polinomio $P(x)$ è una soluzione per l'equazione $P(x) = 0$.

Definisci $P_n$ come un polinomio i cui coefficienti sono le cifre di $n$.

Per esempio, $P_{5703}(x) = 5x^3 + 7x^2 + 3$.

Possiamo vedere che:

- $P_n(0)$ è l'ultima cifra di $n$,
- $P_n(1)$ è la somma delle cifre di $n$,
- $Pn(10)$ è $n$ stesso.

Sia $Z(k)$ il numero di numeri interi positivi, $n$, che non eccedono $k$ per cui il polinomio $P_n$ ha almeno una radice intera.

Si può verifficare che $Z(100\\,000)$ è 14696.

Qual è il valore di $Z({10}^{16})$?

# --hints--

`polynomialsWithOneIntegerRoot()` dovrebbe restituire `1311109198529286`.

```js
assert.strictEqual(polynomialsWithOneIntegerRoot(), 1311109198529286);
```

# --seed--

## --seed-contents--

```js
function polynomialsWithOneIntegerRoot() {

  return true;
}

polynomialsWithOneIntegerRoot();
```

# --solutions--

```js
// solution required
```
