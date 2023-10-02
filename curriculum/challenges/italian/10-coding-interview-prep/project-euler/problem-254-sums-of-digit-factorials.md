---
id: 5900f46b1000cf542c50ff7d
title: 'Problema 254: Somme dei fattoriali delle cifre'
challengeType: 1
forumTopicId: 301902
dashedName: problem-254-sums-of-digit-factorials
---

# --description--

Sia $f(n)$ la somma dei fattoriali delle cifre di $n$. Per esempio, $f(342) = 3! + 4! + 2! = 32$.

Definisci $sf(n)$ come la somma delle cifre di $f(n)$. Quindi $sf(342) = 3 + 2 = 5$.

Definisci $g(i)$ in modo che sia il più piccolo numero intero positivo $n$ tale che $sf(n) = i$. Anche se $sf(342)$ è 5, $sf(25)$ è anch'esso 5, e si può verificare che $g(5)$ è 25.

Definisci $sg(i)$ come la somma delle cifre di $g(i)$. Quindi $sg(5) = 2 + 5 = 7$.

Inoltre, può essere verificato che $g(20)$ è 267 e $\sum sg(i)$ per $1 ≤ i ≤ 20$ è 156.

Che cosa è $\sum sg(i)$ per $1 ≤ i ≤ 150$?

# --hints--

`sumsOfDigitFactorials()` dovrebbe restituire `8184523820510`.

```js
assert.strictEqual(sumsOfDigitFactorials(), 8184523820510);
```

# --seed--

## --seed-contents--

```js
function sumsOfDigitFactorials() {

  return true;
}

sumsOfDigitFactorials();
```

# --solutions--

```js
// solution required
```
