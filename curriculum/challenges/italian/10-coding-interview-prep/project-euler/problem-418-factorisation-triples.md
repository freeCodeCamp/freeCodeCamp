---
id: 5900f50f1000cf542c510021
title: 'Problema 418: Triplette di fattorizzazione'
challengeType: 1
forumTopicId: 302087
dashedName: problem-418-factorisation-triples
---

# --description--

Sia $n$ un numero intero positivo. Una tripletta di numeri interi ($a$, $b$, $c$) è chiamata una tripletta di fattorizzazione di $n$ se:

- $1 ≤ a ≤ b ≤ c$
- $a \times b \times c = n$.

Definisci $f(n)$ come $a + b + c$ per la tripletta di fattorizzazione ($a$, $b$, $c$) di $n$ che minimizza $\frac{c}{a}$. Si può dimostrare che questa tripletta è unica.

Per esempio, $f(165) = 19$, $f(100\\,100) = 142$ e $f(20!) = 4\\,034\\,872$.

Trova $f(43!)$.

# --hints--

`factorisationTriples()` dovrebbe restituire `1177163565297340400`.

```js
assert.strictEqual(factorisationTriples(), 1177163565297340400);
```

# --seed--

## --seed-contents--

```js
function factorisationTriples() {

  return true;
}

factorisationTriples();
```

# --solutions--

```js
// solution required
```
