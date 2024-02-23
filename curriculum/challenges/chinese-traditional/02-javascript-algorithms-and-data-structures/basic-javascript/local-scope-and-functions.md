---
id: 56533eb9ac21ba0edf2244bf
title: 局部作用域和函數
challengeType: 1
videoUrl: 'https://scrimba.com/c/cd62NhM'
forumTopicId: 18227
dashedName: local-scope-and-functions
---

# --description--

在一個函數內聲明的變量，以及該函數的參數都具有局部（<dfn>local</dfn>）作用域。 這意味着它們只在該函數內可見。

這是在函數 `myTest` 內聲明局部變量 `loc` 的例子：

```js
function myTest() {
  const loc = "foo";
  console.log(loc);
}

myTest();
console.log(loc);
```

`myTest()` 函數調用將在控制檯中顯示字符串 `foo`。 `console.log(loc)` 行（在 `myTest` 函數之外）將拋出錯誤，因爲 `loc` 未在函數之外定義。

# --instructions--

編輯器有兩個 `console.log` 來幫助您瞭解正在發生的事情。 檢查控制檯的代碼輸出以查看它是如何改變的。 在 `myLocalScope` 中聲明一個本地變量 `myVar` 並運行測試。

**注意：** 控制檯仍將顯示 `ReferenceError: myVar is not defined`，但這不會導致測試失敗。

# --hints--

不應該包含全局的 `myVar` 變量。

```js
function declared() {
  myVar;
}

assert.throws(declared, ReferenceError);
```

需要定義局部的 `myVar` 變量。

```js
assert(
  /functionmyLocalScope\(\)\{.*(var|let|const)myVar[\s\S]*}/.test(
    __helpers.removeWhiteSpace(code)
  )
);
```

# --seed--

## --seed-contents--

```js
function myLocalScope() {
  // Only change code below this line

  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);
```

# --solutions--

```js
function myLocalScope() {
  // Only change code below this line
  let myVar;
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);
```
