---
id: 5a23c84252665b21eecc803f
title: Somma delle cifre di un intero
challengeType: 1
forumTopicId: 302331
dashedName: sum-digits-of-an-integer
---

# --description--

Scrivi una funzione che prende una stringa come parametro. Questa stringa rappresenta un numero che può essere in qualsiasi base (inferiore a 37) e restituisce la somma delle sue cifre.

<ul>
  <li><b>1</b><sub>10</sub> sums to <b>1</b></li>
  <li><b>1234</b><sub>10</sub> sums to <b>10</b></li>
  <li><b>fe</b><sub>16</sub> sums to <b>29</b></li>
  <li><b>f0e</b><sub>16</sub> sums to <b>29</b></li>
</ul>

# --hints--

`sumDigits` dovrebbe essere una funzione.

```js
assert(typeof sumDigits == 'function');
```

`sumDigits("1")` dovrebbe restituire un numero.

```js
assert(typeof sumDigits('1') == 'number');
```

`sumDigits("1")` dovrebbe restituire `1`.

```js
assert.equal(sumDigits('1'), 1);
```

`sumDigits("12345")` dovrebbe restituire `15`.

```js
assert.equal(sumDigits('12345'), 15);
```

`sumDigits("254")` dovrebbe restituire `11`.

```js
assert.equal(sumDigits('254'), 11);
```

`sumDigits("fe")` dovrebbe restituire `29`.

```js
assert.equal(sumDigits('fe'), 29);
```

`sumDigits("f0e")` dovrebbe restituire `29`.

```js
assert.equal(sumDigits('f0e'), 29);
```

`sumDigits("999ABCXYZ")` dovrebbe restituire `162`.

```js
assert.equal(sumDigits('999ABCXYZ'), 162);
```

# --seed--

## --seed-contents--

```js
function sumDigits(n) {

}
```

# --solutions--

```js
function sumDigits(n) {
  n += '';
  for (var s = 0, i = 0, e = n.length; i < e; i += 1)
    s += parseInt(n.charAt(i), 36);
  return s;
}
```
