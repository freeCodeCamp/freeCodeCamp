---
id: 5a23c84252665b21eecc803f
title: Suma los dígitos de un número entero
challengeType: 1
forumTopicId: 302331
dashedName: sum-digits-of-an-integer
---

# --description--

Escribe una funcion que toma una cadena de texto como parametro. Esta cadena de texto representa un número que puede estar un cualquier base (mejor que 37) y devolver la suma de sus digitos.

<ul>
  <li><b>1</b><sub>10</sub>suma a <b>1</b></li>
  <li><b>1234</b><sub>10</sub> suma a <b>10</b></li>
  <li><b>fe</b><sub>16</sub> sums to <b>29</b></li>
  <li><b>f0e</b><sub>16</sub> sums to <b>29</b></li>
</ul>

# --hints--

`sumDigits` debe de ser una función.

```js
assert(typeof sumDigits == 'function');
```

`sumDigits("1")` debe devolver un número.

```js
assert(typeof sumDigits('1') == 'number');
```

`sumDigits("1")` debe devolver `1`.

```js
assert.equal(sumDigits('1'), 1);
```

`sumDigits("12345")` debe devolver `15`.

```js
assert.equal(sumDigits('12345'), 15);
```

`sumDigits("254")` should return `11`.

```js
assert.equal(sumDigits('254'), 11);
```

`sumDigits("fe")` should return `29`.

```js
assert.equal(sumDigits('fe'), 29);
```

`sumDigits("f0e")` should return `29`.

```js
assert.equal(sumDigits('f0e'), 29);
```

`sumDigits("999ABCXYZ")` should return `162`.

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
