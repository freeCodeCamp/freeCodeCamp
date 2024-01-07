---
id: a7f4d8f2483413a6ce226cac
title: Crea un convertitore di numeri romani
challengeType: 5
forumTopicId: 16044
dashedName: build-a-roman-numeral-converter
---

# --description--

Converti il numero dato in un numero romano.

| Numeri romani | Numeri arabi |
| ------------- | ------------ |
| M             | 1000         |
| CM            | 900          |
| D             | 500          |
| CD            | 400          |
| C             | 100          |
| XC            | 90           |
| L             | 50           |
| XL            | 40           |
| X             | 10           |
| IX            | 9            |
| V             | 5            |
| IV            | 4            |
| I             | 1            |

Tutti i numeri romani nei risultati dovrebbero essere in maiuscolo.

# --hints--

`convertToRoman(2)` dovrebbe restituire la stringa `II`.

```js
assert.deepEqual(convertToRoman(2), 'II');
```

`convertToRoman(3)` dovrebbe restituire la stringa `III`.

```js
assert.deepEqual(convertToRoman(3), 'III');
```

`convertToRoman(4)` dovrebbe restituire la stringa `IV`.

```js
assert.deepEqual(convertToRoman(4), 'IV');
```

`convertToRoman(5)` dovrebbe restituire la stringa `V`.

```js
assert.deepEqual(convertToRoman(5), 'V');
```

`convertToRoman(9)` dovrebbe restituire la stringa `IX`.

```js
assert.deepEqual(convertToRoman(9), 'IX');
```

`convertToRoman(12)` dovrebbe restituire la stringa `XII`.

```js
assert.deepEqual(convertToRoman(12), 'XII');
```

`convertToRoman(16)` dovrebbe restituire la stringa `XVI`.

```js
assert.deepEqual(convertToRoman(16), 'XVI');
```

`convertToRoman(29)` dovrebbe restituire la stringa `XXIX`.

```js
assert.deepEqual(convertToRoman(29), 'XXIX');
```

`convertToRoman(44)` dovrebbe restituire la stringa `XLIV`.

```js
assert.deepEqual(convertToRoman(44), 'XLIV');
```

`convertToRoman(45)` dovrebbe restituire la stringa `XLV`.

```js
assert.deepEqual(convertToRoman(45), 'XLV');
```

`convertToRoman(68)` dovrebbe restituire la stringa `LXVIII`

```js
assert.deepEqual(convertToRoman(68), 'LXVIII');
```

`convertToRoman(83)` dovrebbe restituire la stringa `LXXXIII`

```js
assert.deepEqual(convertToRoman(83), 'LXXXIII');
```

`convertToRoman(97)` dovrebbe restituire la stringa `XCVII`

```js
assert.deepEqual(convertToRoman(97), 'XCVII');
```

`convertToRoman(99)` dovrebbe restituire la stringa `XCIX`

```js
assert.deepEqual(convertToRoman(99), 'XCIX');
```

`convertToRoman(400)` dovrebbe restituire la stringa `CD`

```js
assert.deepEqual(convertToRoman(400), 'CD');
```

`convertToRoman(500)` dovrebbe restituire la stringa `D`

```js
assert.deepEqual(convertToRoman(500), 'D');
```

`convertToRoman(501)` dovrebbe restituire la stringa `DI`

```js
assert.deepEqual(convertToRoman(501), 'DI');
```

`convertToRoman(649)` dovrebbe restituire la stringa `DCXLIX`

```js
assert.deepEqual(convertToRoman(649), 'DCXLIX');
```

`convertToRoman(798)` dovrebbe restituire la stringa `DCCXCVIII`

```js
assert.deepEqual(convertToRoman(798), 'DCCXCVIII');
```

`convertToRoman(891)` dovrebbe restituire la stringa `DCCCXCI`

```js
assert.deepEqual(convertToRoman(891), 'DCCCXCI');
```

`convertToRoman(1000)` dovrebbe restituire la stringa `M`

```js
assert.deepEqual(convertToRoman(1000), 'M');
```

`convertToRoman(1004)` dovrebbe restituire la stringa `MIV`

```js
assert.deepEqual(convertToRoman(1004), 'MIV');
```

`convertToRoman(1006)` dovrebbe restituire la stringa `MVI`

```js
assert.deepEqual(convertToRoman(1006), 'MVI');
```

`convertToRoman(1023)` dovrebbe restituire la stringa `MXXIII`

```js
assert.deepEqual(convertToRoman(1023), 'MXXIII');
```

`convertToRoman(2014)` dovrebbe restituire la stringa `MMXIV`

```js
assert.deepEqual(convertToRoman(2014), 'MMXIV');
```

`convertToRoman(3999)` dovrebbe restituire la stringa `MMMCMXCIX`

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
