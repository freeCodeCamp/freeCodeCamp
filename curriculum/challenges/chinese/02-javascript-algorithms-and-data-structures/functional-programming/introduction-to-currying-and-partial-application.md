---
id: 587d7dab367417b2b2512b70
title: 函数柯里化和局部调用
challengeType: 1
forumTopicId: 301232
dashedName: introduction-to-currying-and-partial-application
---

# --description--

<dfn>arity</dfn>（参数个数）是函数所需的形参的数量。 函数柯里化（<dfn>Currying</dfn>）意思是把接受多个 arity 的函数变换成接受单一 arity 的函数。

换句话说，就是重构函数让它接收一个参数，然后返回接收下一个参数的函数，依此类推。

举个例子：

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

`curried(1)(2)` 会返回 `3`。

柯里化在不能一次为函数提供所有参数情况下很有用。 因为它可以将每个函数的调用保存到一个变量中，该变量将保存返回的函数引用，该引用在下一个参数可用时接受该参数。 下面是使用柯里化函数的例子：

```js
const funcForY = curried(1);
console.log(funcForY(2)); // 3
```

类似地，局部调用（ <dfn>partial application</dfn>）的意思是一次对一个函数应用几个参数，然后返回另一个应用更多参数的函数。 这是一个示例：

```js
function impartial(x, y, z) {
  return x + y + z;
}

const partialFn = impartial.bind(this, 1, 2);
partialFn(10); // 13
```

# --instructions--

填写 `add` 函数主体部分，用柯里化添加参数 `x`，`y` 和 `z`.

# --hints--

`add(10)(20)(30)` 应返回 `60`。

```js
assert(add(10)(20)(30) === 60);
```

`add(1)(2)(3)` 应返回 `6`。

```js
assert(add(1)(2)(3) === 6);
```

`add(11)(22)(33)` 应返回 `66`。

```js
assert(add(11)(22)(33) === 66);
```

应返回 `x + y + z` 的最终结果。

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
