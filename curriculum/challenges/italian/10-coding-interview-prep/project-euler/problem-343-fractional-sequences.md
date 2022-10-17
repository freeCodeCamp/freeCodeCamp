---
id: 5900f4c41000cf542c50ffd6
title: 'Problema 343: Sequenze frazionarie'
challengeType: 1
forumTopicId: 302002
dashedName: problem-343-fractional-sequences
---

# --description--

Per qualsiasi numero intero positivo $k$, una sequenza finita $a_i$ di frazioni $\frac{x_i}{y_i}$ è definita da:

- $a_1 = \displaystyle\frac{1}{k}$ e
- $a_i = \displaystyle\frac{(x_{i - 1} + 1)}{(y_{i - 1} - 1)}$ ridotto ai minimi termini per $i > 1$.

Quando $a_i$ raggiunge un numero intero $n$, la sequenza si ferma. (cioè, quando $y_i = 1$.)

Definisci $f(k) = n$.

Per esempio, per $k = 20$:

$$\frac{1}{20} → \frac{2}{19} → \frac{3}{18} = \frac{1}{6} → \frac{2}{5} → \frac{3}{4} → \frac{4}{3} → \frac{5}{2} → \frac{6}{1} = 6$$

Quindi $f(20) = 6$.

Anche $f(1) = 1$, $f(2) = 2$, $f(3) = 1$ e $\sum f(k^3) = 118\\,937$ per $1 ≤ k ≤ 100$.

Trova $\sum f(k^3)$ per $1 ≤ k ≤ 2 × {10}^6$.

# --hints--

`fractionalSequences()` dovrebbe restituire `269533451410884200`.

```js
assert.strictEqual(fractionalSequences(), 269533451410884200);
```

# --seed--

## --seed-contents--

```js
function fractionalSequences() {

  return true;
}

fractionalSequences();
```

# --solutions--

```js
// solution required
```
