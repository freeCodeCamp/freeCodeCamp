---
id: afcc8d540bea9ea2669306b6
title: Repetir una cadena repetir una cadena
challengeType: 5
forumTopicId: 16041
dashedName: repeat-a-string-repeat-a-string
---

# --description--

Repita una cadena dada `str` (primer argumento) por `num` veces (segundo argumento). Retorne una cadena vacía si `num` no es un número positivo. Para este desafío, utiliza *not* el método `.repeat()` incorporado.

# --hints--

`repeatStringNumTimes("*", 3)` debe devolver `"***"`.

```js
assert(repeatStringNumTimes('*', 3) === '***');
```

`repeatStringNumTimes("abc", 3)` debe devolver `"abcabcabc"`.

```js
assert(repeatStringNumTimes('abc', 3) === 'abcabcabc');
```

`repeatStringNumTimes("abc", 4)` debe devolver `"abcabcabcabc"`.

```js
assert(repeatStringNumTimes('abc', 4) === 'abcabcabcabc');
```

`repeatStringNumTimes("abc", 1)` debe devolver `"abc"`.

```js
assert(repeatStringNumTimes('abc', 1) === 'abc');
```

`repeatStringNumTimes("*", 8)` debe devolver `"********"`.

```js
assert(repeatStringNumTimes('*', 8) === '********');
```

`repeatStringNumTimes("abc", -2)` debe devolver `""`.

```js
assert(repeatStringNumTimes('abc', -2) === '');
```

El método integrado `repeat()` no debe ser utilizado.

```js
assert(!/\.repeat/g.test(code));
```

`repeatStringNumTimes("abc", 0)` debe devolver `""`.

```js
assert(repeatStringNumTimes('abc', 0) === '');
```

# --seed--

## --seed-contents--

```js
function repeatStringNumTimes(str, num) {
  return str;
}

repeatStringNumTimes("abc", 3);
```

# --solutions--

```js
function repeatStringNumTimes(str, num) {
  if (num < 1) return '';
  return num === 1 ? str : str + repeatStringNumTimes(str, num-1);
}

repeatStringNumTimes("abc", 3);
```
