---
id: 587d7b88367417b2b2512b46
title: 設置函數的默認參數
challengeType: 1
forumTopicId: 301209
dashedName: set-default-parameters-for-your-functions
---

# --description--

ES6 裏允許給函數傳入<dfn>默認參數</dfn>，來構建更加靈活的函數。

請看以下代碼：

```js
const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John"));
console.log(greeting());
```

控制檯將顯示字符串 `Hello John` 和 `Hello Anonymous`。

默認參數會在參數沒有被指定（值爲 undefined）的時候起作用。 在上面的例子中，參數 `name` 會在沒有得到新的值的時候，默認使用值 `Anonymous`。 你還可以給多個參數賦予默認值。

# --instructions--

給函數 `increment` 傳入默認參數，使得在 `value` 沒有被賦值的時候，默認給 `number` 加上 1。

# --hints--

`increment(5, 2)` 的結果應該是 `7`。

```js
assert(increment(5, 2) === 7);
```

`increment(5)` 的結果應該是 `6`。

```js
assert(increment(5) === 6);
```

參數 `value` 的默認值是 `1`。

```js
assert(code.match(/value\s*=\s*1/g));
```

# --seed--

## --seed-contents--

```js
// Only change code below this line
const increment = (number, value) => number + value;
// Only change code above this line
```

# --solutions--

```js
const increment = (number, value = 1) => number + value;
```
