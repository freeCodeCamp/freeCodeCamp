---
id: 5a23c84252665b21eecc803f
title: Cума цифр цілого числа
challengeType: 1
forumTopicId: 302331
dashedName: sum-digits-of-an-integer
---

# --description--

Напишіть функцію, яка бере рядок як параметр. Цей рядок представляє число, яке може бути в будь -якій основі (менше 37) і повернути суму його цифр.

<ul>
  <li><b>1</b><sub>10</sub> складає число <b>1</b></li>
  <li><b>1234</b><sub>10</sub> складає число <b>10</b></li>
  <li><b>fe</b><sub>16</sub> складає число <b>29</b></li>
  <li><b>f0e</b><sub>16</sub> складає число<b>29</b></li>
</ul>

# --hints--

`sumDigits` має бути функцією.

```js
assert(typeof sumDigits == 'function');
```

`sumDigits("1")` має повернути число.

```js
assert(typeof sumDigits('1') == 'number');
```

`sumDigits("1")` має повернути `1`.

```js
assert.equal(sumDigits('1'), 1);
```

`sumDigits("12345")` має повернути `15`.

```js
assert.equal(sumDigits('12345'), 15);
```

`sumDigits("254")` має повернути `11`.

```js
assert.equal(sumDigits('254'), 11);
```

`sumDigits("fe")` має повернути `29`.

```js
assert.equal(sumDigits('fe'), 29);
```

`sumDigits("f0e")` має повернути `29`.

```js
assert.equal(sumDigits('f0e'), 29);
```

`sumDigits("999ABCXYZ")` має повернути `162`.

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
