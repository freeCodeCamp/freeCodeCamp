---
id: 56533eb9ac21ba0edf2244c4
title: 函數執行到 return 語句就結束
challengeType: 1
videoUrl: 'https://scrimba.com/c/cQe39Sq'
forumTopicId: 18272
dashedName: return-early-pattern-for-functions
---

# --description--

當代碼執行到 `return` 語句時，函數返回一個結果就結束運行了，return 後面的語句不會執行。

**示例**

```js
function myFun() {
  console.log("Hello");
  return "World";
  console.log("byebye")
}
myFun();
```

以上將在控制檯中顯示字符串 `Hello` 並返回字符串 `World`。 字符串 `byebye` 將永遠不會在控制檯中顯示，因爲函數在 `return` 語句處就退出了。

# --instructions--

修改函數 `abTest` 當 `a` 或 `b` 小於 `0` 時，函數立即返回一個 `undefined` 並退出。

**提示**  
記住 <a href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/understanding-uninitialized-variables" target="_blank" rel="noopener noreferrer nofollow"><code>undefined</code> 是關鍵字 </a>，不是字符串.

# --hints--

`abTest(2, 2)` 應該返回一個數字

```js
assert(typeof abTest(2, 2) === 'number');
```

`abTest(2, 2)` 應該返回 `8`

```js
assert(abTest(2, 2) === 8);
```

`abTest(-2, 2)` 應該返回 `undefined`

```js
assert(abTest(-2, 2) === undefined);
```

`abTest(2, -2)` 應該返回 `undefined`

```js
assert(abTest(2, -2) === undefined);
```

`abTest(2, 8)` 應該返回 `18`

```js
assert(abTest(2, 8) === 18);
```

`abTest(3, 3)` 應該返回 `12`

```js
assert(abTest(3, 3) === 12);
```

`abTest(0, 0)` 應該返回 `0`

```js
assert(abTest(0, 0) === 0);
```

# --seed--

## --seed-contents--

```js
// Setup
function abTest(a, b) {
  // Only change code below this line



  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);
```

# --solutions--

```js
function abTest(a, b) {
  if(a < 0 || b < 0) {
    return undefined;
  }
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
```
