---
id: 5a23c84252665b21eecc803f
title: Soma dos dígitos de um inteiro
challengeType: 1
forumTopicId: 302331
dashedName: sum-digits-of-an-integer
---

# --description--

Escreva uma função que receba uma string como parâmetro. Essa string representa um número que pode estar em qualquer base (inferior a 37) e que retorne a soma de seus dígitos.

<ul>
  <li><b>1</b><sub>10</sub> soma <b>1</b></li>
  <li><b>1234</b><sub>10</sub> soma <b>10</b></li>
  <li><b>fe</b><sub>16</sub> soma <b>29</b></li>
  <li><b>f0e</b><sub>16</sub> soma <b>29</b></li>
</ul>

# --hints--

`sumDigits` deve ser uma função.

```js
assert(typeof sumDigits == 'function');
```

`sumDigits("1")` deve retornar um número.

```js
assert(typeof sumDigits('1') == 'number');
```

`sumDigits("1")` deve retornar `1`.

```js
assert.equal(sumDigits('1'), 1);
```

`sumDigits("12345")` deve retornar `15`.

```js
assert.equal(sumDigits('12345'), 15);
```

`sumDigits("254")` deve retornar `11`.

```js
assert.equal(sumDigits('254'), 11);
```

`sumDigits("fe")` deve retornar `29`.

```js
assert.equal(sumDigits('fe'), 29);
```

`sumDigits("f0e")` deve retornar `29`.

```js
assert.equal(sumDigits('f0e'), 29);
```

`sumDigits("999ABCXYZ")` deve retornar `162`.

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
