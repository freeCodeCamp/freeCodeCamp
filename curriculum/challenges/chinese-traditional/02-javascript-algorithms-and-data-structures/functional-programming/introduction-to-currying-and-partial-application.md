---
id: 587d7dab367417b2b2512b70
title: 函數柯里化和局部調用
challengeType: 1
forumTopicId: 301232
dashedName: introduction-to-currying-and-partial-application
---

# --description--

<dfn>arity</dfn>（參數個數）是函數所需的形參的數量。 函數柯里化（<dfn>Currying</dfn>）意思是把接受多個 arity 的函數變換成接受單一 arity 的函數。

換句話說，就是重構函數讓它接收一個參數，然後返回接收下一個參數的函數，依此類推。

舉個例子：

```js
function unCurried(x, y) {
  return x + y;
}

function curried(x) {
  return function(y) {
    return x + y;
  }
}

const curried = x => y => x + y

curried(1)(2)
```

`curried(1)(2)` 會返回 `3`。

柯里化在不能一次爲函數提供所有參數情況下很有用。 因爲它可以將每個函數的調用保存到一個變量中，該變量將保存返回的函數引用，該引用在下一個參數可用時接受該參數。 下面是使用柯里化函數的例子：

```js
const funcForY = curried(1);
console.log(funcForY(2)); // 3
```

類似地，局部調用（ <dfn>partial application</dfn>）的意思是一次對一個函數應用幾個參數，然後返回另一個應用更多參數的函數。 這是一個示例：

```js
function impartial(x, y, z) {
  return x + y + z;
}

const partialFn = impartial.bind(this, 1, 2);
partialFn(10); // 13
```

# --instructions--

填寫 `add` 函數主體部分，用柯里化添加參數 `x`，`y` 和 `z`.

# --hints--

`add(10)(20)(30)` 應返回 `60`。

```js
assert(add(10)(20)(30) === 60);
```

`add(1)(2)(3)` 應返回 `6`。

```js
assert(add(1)(2)(3) === 6);
```

`add(11)(22)(33)` 應返回 `66`。

```js
assert(add(11)(22)(33) === 66);
```

應返回 `x + y + z` 的最終結果。

```js
assert(code.match(/[xyz]\s*?\+\s*?[xyz]\s*?\+\s*?[xyz]/g));
```

# --seed--

## --seed-contents--

```js
function add(x) {
  // Only change code below this line


  // Only change code above this line
}

add(10)(20)(30);
```

# --solutions--

```js
const add = x => y => z => x + y + z
```
