---
id: 56533eb9ac21ba0edf2244b3
title: 將攝氏度轉換爲華氏度
challengeType: 1
forumTopicId: 16806
dashedName: convert-celsius-to-fahrenheit
---

# --description--

從攝氏轉換爲華氏的公式是，攝氏溫度乘以 `9/5`，再加上 `32`。

輸入參數 `celsius` 代表一個攝氏度的溫度。 使用已定義的變量 `fahrenheit`，並賦值爲相應的華氏度的溫度值。 使用上面提到的公式來幫助將攝氏溫度轉換爲華氏溫度。

# --hints--

`convertToF(0)` 應返回一個數字。

```js
assert(typeof convertToF(0) === 'number');
```

`convertToF(-30)` 應返回 `-22`。

```js
assert(convertToF(-30) === -22);
```

`convertToF(-10)` 應返回 `14`。

```js
assert(convertToF(-10) === 14);
```

`convertToF(0)` 應返回 `32`。

```js
assert(convertToF(0) === 32);
```

`convertToF(20)` 應返回 `68`。

```js
assert(convertToF(20) === 68);
```

`convertToF(30)` 應返回 `86`。

```js
assert(convertToF(30) === 86);
```

# --seed--

## --seed-contents--

```js
function convertToF(celsius) {
  let fahrenheit;
  return fahrenheit;
}

convertToF(30);
```

# --solutions--

```js
function convertToF(celsius) {
  let fahrenheit = celsius * 9/5 + 32;

  return fahrenheit;
}

convertToF(30);
```
