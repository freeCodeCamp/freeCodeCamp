---
id: a7f4d8f2483413a6ce226cac
title: 罗马数字转换器
challengeType: 5
forumTopicId: 16044
---

# --description--

把传入的数字转变为罗马数字。

转换后的[罗马数字](http://www.mathsisfun.com/roman-numerals.html)字母必须都是大写。

# --hints--

`convertToRoman(2)`应该返回 'II'。

```js
assert.deepEqual(convertToRoman(2), 'II');
```

`convertToRoman(3)`应该返回 'III'。

```js
assert.deepEqual(convertToRoman(3), 'III');
```

`convertToRoman(4)`应该返回 'IV'。

```js
assert.deepEqual(convertToRoman(4), 'IV');
```

`convertToRoman(5)`应该返回 'V'。

```js
assert.deepEqual(convertToRoman(5), 'V');
```

`convertToRoman(9)`应该返回 'IX'。

```js
assert.deepEqual(convertToRoman(9), 'IX');
```

`convertToRoman(12)`应该返回 'XII'。

```js
assert.deepEqual(convertToRoman(12), 'XII');
```

`convertToRoman(16)`应该返回 'XVI'。

```js
assert.deepEqual(convertToRoman(16), 'XVI');
```

`convertToRoman(29)`应该返回 'XXIX'。

```js
assert.deepEqual(convertToRoman(29), 'XXIX');
```

`convertToRoman(44)`应该返回 'XLIV'。

```js
assert.deepEqual(convertToRoman(44), 'XLIV');
```

`convertToRoman(45)`应该返回 'XLV'。

```js
assert.deepEqual(convertToRoman(45), 'XLV');
```

`convertToRoman(68)`应该返回 'LXVIII'。

```js
assert.deepEqual(convertToRoman(68), 'LXVIII');
```

`convertToRoman(83)`应该返回 'LXXXIII'。

```js
assert.deepEqual(convertToRoman(83), 'LXXXIII');
```

`convertToRoman(97)`应该返回 'XCVII'。

```js
assert.deepEqual(convertToRoman(97), 'XCVII');
```

`convertToRoman(99)`应该返回 'XCIX'。

```js
assert.deepEqual(convertToRoman(99), 'XCIX');
```

`convertToRoman(400)`应该返回 'CD'。

```js
assert.deepEqual(convertToRoman(400), 'CD');
```

`convertToRoman(500)`应该返回 'D'。

```js
assert.deepEqual(convertToRoman(500), 'D');
```

`convertToRoman(501)`应该返回 'DI'。

```js
assert.deepEqual(convertToRoman(501), 'DI');
```

`convertToRoman(649)`应该返回 'DCXLIX'。

```js
assert.deepEqual(convertToRoman(649), 'DCXLIX');
```

`convertToRoman(798)`应该返回 'DCCXCVIII'。

```js
assert.deepEqual(convertToRoman(798), 'DCCXCVIII');
```

`convertToRoman(891)`应该返回 'DCCCXCI'。

```js
assert.deepEqual(convertToRoman(891), 'DCCCXCI');
```

`convertToRoman(1000)`应该返回 'M'。

```js
assert.deepEqual(convertToRoman(1000), 'M');
```

`convertToRoman(1004)`应该返回 'MIV'。

```js
assert.deepEqual(convertToRoman(1004), 'MIV');
```

`convertToRoman(1006)`应该返回 'MVI'。

```js
assert.deepEqual(convertToRoman(1006), 'MVI');
```

`convertToRoman(1023)`应该返回 'MXXIII'。

```js
assert.deepEqual(convertToRoman(1023), 'MXXIII');
```

`convertToRoman(2014)`应该返回 'MMXIV'。

```js
assert.deepEqual(convertToRoman(2014), 'MMXIV');
```

`convertToRoman(3999)`应该返回 'MMMCMXCIX'。

```js
assert.deepEqual(convertToRoman(3999), 'MMMCMXCIX');
```

# --solutions--

