---
id: 5900f3ca1000cf542c50fedc
title: 'Problema 93: Espressioni aritmetiche'
challengeType: 1
forumTopicId: 302210
dashedName: problem-93-arithmetic-expressions
---

# --description--

Utilizzando ciascuna delle cifre dall'insieme {1, 2, 3, 4} esattamente una volta, e facendo uso delle quattro operazioni aritmetiche (+, −, \*, /) e parentesi, è possibile formare diversi target interi positivi.

Per esempio,

<div style='margin-left: 4em;'>
  8 = (4 * (1 + 3)) / 2<br>
  14 = 4 * (3 + 1 / 2)<br>
  19 = 4 * (2 + 3) − 1<br>
  36 = 3 * 4 * (2 + 1)
</div>

Nota che le concatenazioni delle cifre, come 12 + 34, non sono permesse.

Utilizzando il set {1, 2, 3, 4} è possibile ottenere trentuno numeri target diversi, di cui 36 è il massimo, e ciascuno dei numeri da 1 a 28 può essere ottenuto prima di incontrare il primo numero non espressibile.

Trova l'insieme di quattro cifre distinte, `a` &lt; `b` &lt; `c` &lt; `d`, per cui può essere ottenuto il set più lungo di numeri interi positivi consecutivi, da 1 a `n`, dando la tua risposta come stringa: `abcd`.

# --hints--

`arithmeticExpressions()` dovrebbe restituire un numero.

```js
assert(typeof arithmeticExpressions() === 'number');
```

`arithmeticExpressions()` dovrebbe restituire 1258.

```js
assert.strictEqual(arithmeticExpressions(), 1258);
```

# --seed--

## --seed-contents--

```js
function arithmeticExpressions() {

  return true;
}

arithmeticExpressions();
```

# --solutions--

```js
// solution required
```
