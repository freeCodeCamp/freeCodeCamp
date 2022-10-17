---
id: afcc8d540bea9ea2669306b6
title: Repetir uma string Repetir uma string
challengeType: 1
forumTopicId: 16041
dashedName: repeat-a-string-repeat-a-string
---

# --description--

Repita uma string passada `str` (primeiro argumento), `num` vezes (segundo argumento). Retorne uma string vazia se `num` não for um número positivo. Para o propósito do desafio, *Não* use o método integrado `.repeat()`.

# --hints--

`repeatStringNumTimes("*", 3)` deve retornar a string `***`.

```js
assert(repeatStringNumTimes('*', 3) === '***');
```

`repeatStringNumTimes("abc", 3)` deve retornar a string `abcabcabc`.

```js
assert(repeatStringNumTimes('abc', 3) === 'abcabcabc');
```

`repeatStringNumTimes("abc", 4)` deve retornar a `abcabcabcabc`.

```js
assert(repeatStringNumTimes('abc', 4) === 'abcabcabcabc');
```

`repeatStringNumTimes("abc", 1)` deve retornar a string `abc`.

```js
assert(repeatStringNumTimes('abc', 1) === 'abc');
```

`repeatStringNumTimes("*", 8)` deve retornar a `********`.

```js
assert(repeatStringNumTimes('*', 8) === '********');
```

`repeatStringNumTimes("abc", -2)` deve retornar uma string vazia (`""`).

```js
assert(repeatStringNumTimes('abc', -2) === '');
```

O método integrado `repeat()` não deve ser usado.

```js
assert(!/\.repeat/g.test(code));
```

`repeatStringNumTimes("abc", 0)` deve retornar `""`.

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
