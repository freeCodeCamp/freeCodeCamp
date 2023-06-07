---
id: 587d7b88367417b2b2512b47
title: 將 rest 操作符與函數參數一起使用
challengeType: 1
forumTopicId: 301221
dashedName: use-the-rest-parameter-with-function-parameters
---

# --description--

ES6 推出了用於函數參數的 <dfn>rest 操作符</dfn>幫助我們創建更加靈活的函數。 rest 操作符可以用於創建有一個變量來接受多個參數的函數。 這些參數被儲存在一個可以在函數內部讀取的數組中。

請看以下代碼：

```js
function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], { }));
```

控制檯將顯示字符串 `You have passed 3 arguments.` 和 `You have passed 4 arguments.`。

rest 參數使我們不需要使用 `arguments` 對象，允許我們對傳遞給函數 `howMany` 的參數數組使用數組方法。

# --instructions--

修改 `sum` 函數，使用 rest 參數，使 `sum` 函數可以接收任意數量的參數，並返回它們的總和。

# --hints--

`sum(0,1,2)` 的結果應是 3。

```js
assert(sum(0, 1, 2) === 3);
```

`sum(1,2,3,4)` 的結果應是 10。

```js
assert(sum(1, 2, 3, 4) === 10);
```

`sum(5)` 的結果應是 5。

```js
assert(sum(5) === 5);
```

`sum()` 的結果應是 0。

```js
assert(sum() === 0);
```

`sum` 應是一個箭頭函數，對 `args` 參數使用 rest 操作符語法（`...`）。

```js
assert(__helpers.removeWhiteSpace(code).match(/sum=\(\.\.\.args\)=>/));
```

# --seed--

## --seed-contents--

```js
const sum = (x, y, z) => {
  const args = [x, y, z];
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}
```

# --solutions--

```js
const sum = (...args) => {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}
```
