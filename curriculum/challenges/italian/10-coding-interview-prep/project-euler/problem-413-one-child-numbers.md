---
id: 5900f50a1000cf542c51001c
title: 'Problema 413: Numeri figli unici'
challengeType: 1
forumTopicId: 302082
dashedName: problem-413-one-child-numbers
---

# --description--

Diciamo che un numero positivo a $d$ cifre (senza zeri davanti) è un numero figlio unico se esattamente una delle sue sotto stringhe è divisibile per $d$.

Per esempio, 5671 è un numero figlio unico a 4 cifre. Tra tutte le sue sotto stringhe, 5, 6, 7, 1, 56, 67, 71, 567, 671, e 5671, solo 56 è divisibile per 4.

In maniera simile, 104 è un numero figlio unico a tre cifre perché solo 0 è divisibile per 3. 1132451 è un numero figlio unico a 7 cifre perché solo 245 è divisibile per 7.

Sia $F(N)$ il numeri di numeri figli unici inferiori a $N$. Possiamo verificare che $F(10) = 9$, $F({10}^3) = 389$ e che $F({10}^7) = 277\\,674$.

Trova $F({10}^{19})$.

# --hints--

`oneChildNumbers()` dovrebbe restituire `3079418648040719`.

```js
assert.strictEqual(oneChildNumbers(), 3079418648040719);
```

# --seed--

## --seed-contents--

```js
function oneChildNumbers() {

  return true;
}

oneChildNumbers();
```

# --solutions--

```js
// solution required
```
