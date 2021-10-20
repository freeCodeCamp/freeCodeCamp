---
id: 587d7b8c367417b2b2512b56
title: 用 export 來重用代碼塊
challengeType: 1
forumTopicId: 301219
dashedName: use-export-to-share-a-code-block
---

# --description--

假設有一個文件 `math_functions.js`，該文件包含了數學運算相關的一些函數。 其中一個存儲在變量 `add` 裏，該函數接受兩個數字作爲參數返回它們的和。 你想在幾個不同的 JavaScript 文件中使用這個函數。 要實現這個目的，就需要 `export` 它。

```js
export const add = (x, y) => {
  return x + y;
}
```

上面是導出單個函數常用方法，還可以這樣導出：

```js
const add = (x, y) => {
  return x + y;
}

export { add };
```

導出變量和函數後，就可以在其它文件裏導入使用從而避免了代碼冗餘。 重複第一個例子的代碼可以導出多個對象或函數，在第二個例子裏面的導出語句中添加更多值也可以導出多項，例子如下：

```js
export { add, subtract };
```

# --instructions--

編輯框中有兩個字符串相關的函數。 選用一種方法導出兩個函數。

# --hints--

應該導出 `uppercaseString` 變量。

```js
assert(
  code.match(
    /(export\s+const\s+uppercaseString|export\s*{\s*(uppercaseString[^}]*|[^,]*,\s*uppercaseString\s*)})/g
  )
);
```

應該導出 `lowercaseString` 變量。

```js
assert(
  code.match(
    /(export\s+const\s+lowercaseString|export\s*{\s*(lowercaseString[^}]*|[^,]*,\s*lowercaseString\s*)})/g
  )
);
```

# --seed--

## --seed-contents--

```js
const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}
```

# --solutions--

```js
export const uppercaseString = (string) => {
  return string.toUpperCase();
}

export const lowercaseString = (string) => {
  return string.toLowerCase()
}
```
