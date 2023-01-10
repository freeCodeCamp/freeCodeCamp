---
id: 5900f4571000cf542c50ff69
title: 'Problema 234: Numeri semidivisibili'
challengeType: 1
forumTopicId: 301878
dashedName: problem-234-semidivisible-numbers
---

# --description--

Per un intero $n ≥ 4$, definiamo la radice quadrata prima inferiore di $n$, indicata da $lps(n)$, come il $\text{maggiore numero primo} ≤ \sqrt{n}$ e la radice quadrata prima superiore di $n$, $ups(n)$, come $\text{il più piccolo numero primo} ≥ \sqrt{n}$.

Così, per esempio, $lps(4) = 2 = su(4)$, $lps(1000) = 31$, $ups(1000) = 37$.

Chiamiamo un intero $n ≥ 4$ semidivisible, se $lps(n)$ o $ups(n)$ divide $n$, ma non entrambi.

La somma dei numeri semidivisibili non superiori a 15 è di 30, i numeri sono 8, 10 e 12. 15 non è semidivisibile perché è un multiplo sia di $lps(15) = 3$ che di $ups(15) = 5$. Come ulteriore esempio, la somma dei 92 numeri semidivisibili fino a 1000 è di 34825.

Qual è la somma di tutti i numeri semidivisibili non superiori a 999966663333?

# --hints--

`semidivisibleNumbers()` dovrebbe restituire `1259187438574927000`.

```js
assert.strictEqual(semidivisibleNumbers(), 1259187438574927000);
```

# --seed--

## --seed-contents--

```js
function semidivisibleNumbers() {

  return true;
}

semidivisibleNumbers();
```

# --solutions--

```js
// solution required
```
