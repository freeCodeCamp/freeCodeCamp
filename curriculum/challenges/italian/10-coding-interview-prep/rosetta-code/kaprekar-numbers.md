---
id: 5a23c84252665b21eecc7eca
title: Numeri di Kaprekar
challengeType: 1
forumTopicId: 302296
dashedName: kaprekar-numbers
---

# --description--

Un numero intero positivo è un numero di Kaprekar se:

<ul>
  <li>È 1 o,</li>
  <li>La rappresentazione decimale del suo quadrato può essere suddivisa una volta in due parti costituite da interi positivi che sommano al numero originale. </li>
</ul>

Si noti che una scissione risultante in una parte costituita esclusivamente da 0 non è valida, in quanto 0 non è considerato positivo.

Esempi di numeri di Kaprekar:

<ul>
  <li><code>2223</code> è un numero Kaprekar, poiché <code>2223 * 2223 = 4941729</code>, <code>4941729</code> può essere suddiviso in <code>494</code> e <code>1729</code>and <code>494 + 1729 = 2223</code></li>
  <li>La serie di numeri di Kaprekar è nota come A006886 e inizia con <code>1, 9, 45, 55, ...</code></li>
</ul>

# --instructions--

Scrivi una funzione che prende un numero $n$, una base $bs$, e restituisce vero se il numero è un numero di Kaprekar per la base specificata. Altrimenti, la funzione restituisce falso.

# --hints--

`isKaprekar` dovrebbe essere una funzione.

```js
assert(typeof isKaprekar == 'function');
```

`isKaprekar(1, 10)` dovrebbe restituire un booleano.

```js
assert(typeof isKaprekar(1, 10) == 'boolean');
```

`isKaprekar(1, 10)` dovrebbe restituire `true`.

```js
assert.equal(isKaprekar(1, 10), true);
```

`isKaprekar(9, 10)` dovrebbe restituire `true`.

```js
assert.equal(isKaprekar(9, 10), true);
```

`isKaprekar(2223, 10)` dovrebbe restituire `true`.

```js
assert.equal(isKaprekar(2223, 10), true);
```

`isKaprekar(22823, 10)` dovrebbe restituire `false`.

```js
assert.equal(isKaprekar(22823, 10), false);
```

`isKaprekar(9, 17)` dovrebbe restituire `false`.

```js
assert.equal(isKaprekar(9, 17), false);
```

`isKaprekar(225, 17)` dovrebbe restituire `true`.

```js
assert.equal(isKaprekar(225, 17), true);
```

`isKaprekar(999, 17)` dovrebbe restituire `false`.

```js
assert.equal(isKaprekar(999, 17), false);
```

# --seed--

## --seed-contents--

```js
function isKaprekar(n, bs) {

}
```

# --solutions--

```js
function isKaprekar(n, bs) {
  if (n < 1) return false;
  if (n == 1) return true;
  for (var a = n * n, b = 0, s = 1; a; s *= bs) {
    b += (a % bs) * s;
    a = Math.floor(a / bs);
    if (b && a + b == n) return true;
  }
  return false;
}
```
