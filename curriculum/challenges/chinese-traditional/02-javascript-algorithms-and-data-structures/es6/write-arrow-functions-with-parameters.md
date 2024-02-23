---
id: 587d7b88367417b2b2512b44
title: 編寫帶參數的箭頭函數
challengeType: 1
forumTopicId: 301223
dashedName: write-arrow-functions-with-parameters
---

# --description--

和一般的函數一樣，你也可以給箭頭函數傳遞參數。

```js
const doubler = (item) => item * 2;
doubler(4);
```

`doubler(4)` 將返回 `8`。

如果箭頭函數只有一個參數，則可以省略參數外面的括號。

```js
const doubler = item => item * 2;
```

可以給箭頭函數傳遞多個參數。

```js
const multiplier = (item, multi) => item * multi;
multiplier(4, 2);
```

`multiplier(4, 2)` 將返回 `8`。

# --instructions--

使用箭頭函數的語法重寫 `myConcat` 函數，將 `arr2` 的內容添加到 `arr1`。

# --hints--

應替換 `var` 關鍵詞。

```js
assert.notMatch(code, /var/g);
```

`myConcat` 應該是一個常量（使用`const`）。

```js
assert.match(code, /const\s+myConcat/g);
```

`myConcat` 應該是一個帶有兩個參數的箭頭函數。

```js
assert(
  /myConcat=\(\w+,\w+\)=>/.test(code.replace(/\s/g, '')) &&
    typeof myConcat === 'function'
);
```

`myConcat()` 應該返回 `[1, 2, 3, 4, 5]`。

```js
assert.deepEqual(myConcat([1, 2], [3, 4, 5]), [1, 2, 3, 4, 5]);
```

不能使用 `function` 關鍵字。

```js
assert.notMatch(code, /function/g);
```

# --seed--

## --seed-contents--

```js
var myConcat = function(arr1, arr2) {
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));
```

# --solutions--

```js
const myConcat = (arr1, arr2) =>  {
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));
```
