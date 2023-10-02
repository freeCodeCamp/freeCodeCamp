---
id: 5900f4b01000cf542c50ffc2
title: 'Problema 323: Operazioni sui bit di interi casuali'
challengeType: 1
forumTopicId: 301980
dashedName: problem-323-bitwise-or-operations-on-random-integers
---

# --description--

Sia $y_0, y_1, y_2, \ldots$ una successione casuale di numeri interi senza segno a 32 bit (cioè $0 ≤ y_i &lt; 2^{32}$, ogni valore altrettanto probabile).

Per la successione $x_i$ viene data la seguente ricorsione:

- $x_0 = 0$ e
- $x_i = x_{i - 1} \mathbf{|} y_{i - 1}$, per $i > 0$. ($\mathbf{|}$ è l'operatore bitwise-OR)

Si può vedere che alla fine ci sarà un indice $N$ tale che $x_i = 2^{32} - 1$ (un pattern con tutti i bit a uno) per tutti gli i $i ≥ N$.

Trova il valore atteso di $N$. Dai la tua risposta arrotondata a 10 cifre dopo il punto decimale.

# --hints--

`bitwiseOrOnRandomIntegers()` dovrebbe restituire `6.3551758451`.

```js
assert.strictEqual(bitwiseOrOnRandomIntegers(), 6.3551758451);
```

# --seed--

## --seed-contents--

```js
function bitwiseOrOnRandomIntegers() {

  return true;
}

bitwiseOrOnRandomIntegers();
```

# --solutions--

```js
// solution required
```
