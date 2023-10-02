---
id: a7f4d8f2483413a6ce226cac
title: Conversor de números romanos
challengeType: 5
forumTopicId: 16044
dashedName: roman-numeral-converter
---

# --description--

Convierte el número proporcionado en un número romano.

| Números romanos | Números arábigos |
| --------------- | ---------------- |
| M               | 1000             |
| CM              | 900              |
| D               | 500              |
| CD              | 400              |
| C               | 100              |
| XC              | 90               |
| L               | 50               |
| XL              | 40               |
| X               | 10               |
| IX              | 9                |
| V               | 5                |
| IV              | 4                |
| I               | 1                |

Todas las respuestas de los números romanos deben ser proporcionadas en mayúsculas.

# --hints--

`convertToRoman(2)` debe devolver la cadena `II`.

```js
assert.deepEqual(convertToRoman(2), 'II');
```

`convertToRoman(3)` debe devolver la cadena `III`.

```js
assert.deepEqual(convertToRoman(3), 'III');
```

`convertToRoman(4)` debe devolver la cadena `IV`.

```js
assert.deepEqual(convertToRoman(4), 'IV');
```

`convertToRoman(5)` debe devolver la cadena `V`.

```js
assert.deepEqual(convertToRoman(5), 'V');
```

`convertToRoman(9)` debe devolver la cadena `IX`.

```js
assert.deepEqual(convertToRoman(9), 'IX');
```

`convertToRoman(12)` debe devolver la cadena `XII`.

```js
assert.deepEqual(convertToRoman(12), 'XII');
```

`convertToRoman(16)` debe devolver la cadena `XVI`.

```js
assert.deepEqual(convertToRoman(16), 'XVI');
```

`convertToRoman(29)` debe devolver la cadena `XXIX`.

```js
assert.deepEqual(convertToRoman(29), 'XXIX');
```

`convertToRoman(44)` debe devolver la cadena `XLIV`.

```js
assert.deepEqual(convertToRoman(44), 'XLIV');
```

`convertToRoman(45)` debe devolver la cadena `XLV`.

```js
assert.deepEqual(convertToRoman(45), 'XLV');
```

`convertToRoman(68)` debe devolver la cadena `LXVIII`

```js
assert.deepEqual(convertToRoman(68), 'LXVIII');
```

`convertToRoman(83)` debe devolver la cadena `LXXXIII`

```js
assert.deepEqual(convertToRoman(83), 'LXXXIII');
```

`convertToRoman(97)` debe devolver la cadena `XCVII`

```js
assert.deepEqual(convertToRoman(97), 'XCVII');
```

`convertToRoman(99)` debe devolver la cadena `XCIX`

```js
assert.deepEqual(convertToRoman(99), 'XCIX');
```

`convertToRoman(400)` debe devolver la cadena `CD`

```js
assert.deepEqual(convertToRoman(400), 'CD');
```

`convertToRoman(500)` debe devolver la cadena `D`

```js
assert.deepEqual(convertToRoman(500), 'D');
```

`convertToRoman(501)` debe devolver la cadena `DI`

```js
assert.deepEqual(convertToRoman(501), 'DI');
```

`convertToRoman(649)` debe devolver la cadena `DCXLIX`

```js
assert.deepEqual(convertToRoman(649), 'DCXLIX');
```

`convertToRoman(798)` debe devolver la cadena `DCCXCVIII`

```js
assert.deepEqual(convertToRoman(798), 'DCCXCVIII');
```

`convertToRoman(891)` debe devolver la cadena `DCCCXCI`

```js
assert.deepEqual(convertToRoman(891), 'DCCCXCI');
```

`convertToRoman(1000)` debe devolver la cadena `M`

```js
assert.deepEqual(convertToRoman(1000), 'M');
```

`convertToRoman(1004)` debe devolver la cadena `MIV`

```js
assert.deepEqual(convertToRoman(1004), 'MIV');
```

`convertToRoman(1006)` debe devolver la cadena `MVI`

```js
assert.deepEqual(convertToRoman(1006), 'MVI');
```

`convertToRoman(1023)` debe devolver la cadena `MXXIII`

```js
assert.deepEqual(convertToRoman(1023), 'MXXIII');
```

`convertToRoman(2014)` debe devolver la cadena `MMXIV`

```js
assert.deepEqual(convertToRoman(2014), 'MMXIV');
```

`convertToRoman(3999)` debe devolver la cadena `MMMCMXCIX`

```js
assert.deepEqual(convertToRoman(3999), 'MMMCMXCIX');
```

# --seed--

## --seed-contents--

```js
function convertToRoman(num) {
 return num;
}

convertToRoman(36);
```

# --solutions--

```js
function convertToRoman(num) {
  var ref = [['M', 1000], ['CM', 900], ['D', 500], ['CD', 400], ['C', 100], ['XC', 90], ['L', 50], ['XL', 40], ['X', 10], ['IX', 9], ['V', 5], ['IV', 4], ['I', 1]];
  var res = [];
  ref.forEach(function(p) {
    while (num >= p[1]) {
      res.push(p[0]);
      num -= p[1];
    }
  });
  return res.join('');
}
```
