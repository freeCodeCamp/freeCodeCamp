---
id: 5a23c84252665b21eecc8041
title: Somma di una serie
challengeType: 1
forumTopicId: 302333
dashedName: sum-of-a-series
---

# --description--

Calcola il termine **n**<sup>mo</sup> di una <em>serie</em>, cioè la somma dei primi **n** termini della successione <em>corrispondente</em>. In modo informale questo valore, o il suo limite quando **n** tende all'infinito, è anche chiamato la *somma della serie*, quindi il titolo di questo compito. Per questo compito, usa: $S_n = \displaystyle\sum_{k=1}^n \frac{1}{k^2}$.

# --instructions--

Scrivi una funzione che prende $a$ e $b$ come parametri e restituisce la somma dall'$a^{mo}$ al $b^{mo}$ elemento della successione.

# --hints--

`sum` dovrebbe essere una funzione.

```js
assert(typeof sum == 'function');
```

`sum(1, 100)` dovrebbe restituire un numero.

```js
assert(typeof sum(1, 100) == 'number');
```

`sum(1, 100)` dovrebbe restituire `1.6349839001848923`.

```js
assert.equal(sum(1, 100), 1.6349839001848923);
```

`sum(33, 46)` dovrebbe restituire `0.009262256361481223`.

```js
assert.equal(sum(33, 46), 0.009262256361481223);
```

`sum(21, 213)` dovrebbe restituire `0.044086990748706555`.

```js
assert.equal(sum(21, 213), 0.044086990748706555);
```

`sum(11, 111)` dovrebbe restituire `0.08619778593108679`.

```js
assert.equal(sum(11, 111), 0.08619778593108679);
```

`sum(1, 10)` dovrebbe restituire `1.5497677311665408`.

```js
assert.equal(sum(1, 10), 1.5497677311665408);
```

# --seed--

## --seed-contents--

```js
function sum(a, b) {

}
```

# --solutions--

```js
function sum(a, b) {
  function fn(x) {
    return 1 / (x * x);
  }
  var s = 0;
  for (; a <= b; a++) s += fn(a);
  return s;
}
```
