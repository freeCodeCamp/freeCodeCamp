---
id: 587d7b85367417b2b2512b39
title: 捕捉函數調用後缺少的左括號和右括號
challengeType: 1
forumTopicId: 301185
dashedName: catch-missing-open-and-closing-parenthesis-after-a-function-call
---

# --description--

當函數或方法不接受任何參數時，你可能忘記在調用它時加上空的左括號和右括號。 通常，函數調用的結果會保存在變量中，供其他代碼使用。 可以通過將變量值（或其類型）打印到控制檯，查看輸出究竟是一個函數引用還是函數調用的返回值來檢測這類錯誤。

下面示例中的兩個變量是不同的:

```js
function myFunction() {
  return "You rock!";
}
let varOne = myFunction;
let varTwo = myFunction();
```

這裏 `varOne` 是函數 `myFunction` ，`varTwo` 是字符串 `You rock!`

# --instructions--

修復代碼，將變量 `result` 設置爲調用函數 `getNine` 返回的值。

# --hints--

你應該修復變量 `result` 使其爲函數 `getNine` 的返回的 number 值。

```js
assert(result == 9);
```

你應該調用 `getNine` 函數。

```js
assert(code.match(/getNine\(\)/g).length == 2);
```

# --seed--

## --seed-contents--

```js
function getNine() {
  let x = 6;
  let y = 3;
  return x + y;
}

let result = getNine;
console.log(result);
```

# --solutions--

```js
function getNine() {
 let x = 6;
 let y = 3;
 return x + y;
}

let result = getNine();
console.log(result);
```
