---
id: 587d7b7a367417b2b2512b12
title: 使用 slice() 複製數組元素
challengeType: 1
forumTopicId: 301158
dashedName: copy-array-items-using-slice
---

# --description--

接下來我們要介紹 `slice()` 方法。 `slice()` 不會修改數組，而是會複製，或者說*提取（extract）*給定數量的元素到一個新數組。 `slice()` 只接收 2 個輸入參數：第一個是開始提取元素的位置（索引），第二個是提取元素的結束位置（索引）。 提取的元素中不包括第二個參數所對應的元素。 如下示例：

```js
let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

let todaysWeather = weatherConditions.slice(1, 3);
```

`todaysWeather` 值爲 `['snow', 'sleet']`，`weatherConditions` 值仍然爲 `['rain', 'snow', 'sleet', 'hail', 'clear']`。

在上面的代碼中，我們從一個數組中提取了一些元素，並用這些元素創建了一個新數組。

# --instructions--

我們已經定義了一個 `forecast` 函數，它接受一個數組作爲參數。 請修改這個函數，利用 `slice()` 從輸入的數組中提取信息，最終返回一個包含元素 `warm` 和 `sunny` 的新數組。

# --hints--

`forecast` 應返回 `["warm", "sunny"]`。

```js
assert.deepEqual(
  forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']),
  ['warm', 'sunny']
);
```

`forecast` 函數中應使用 `slice()` 方法。

```js
assert(/\.slice\(/.test(code));
```

# --seed--

## --seed-contents--

```js
function forecast(arr) {
  // Only change code below this line

  return arr;
}

// Only change code above this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
```

# --solutions--

```js
function forecast(arr) {
  return arr.slice(2,4);
}
```
