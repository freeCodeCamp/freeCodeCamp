---
id: 587d7db2367417b2b2512b8b
title: 了解立即调用函数表达（IIFE）
challengeType: 1
forumTopicId: 301328
dashedName: understand-the-immediately-invoked-function-expression-iife
---

# --description--

JavaScript 中的一个常见模式就是，函数在声明后立刻执行：

```js
(function () {
  console.log("Chirp, chirp!");
})();
```

这是一个匿名函数表达式，立即执行并输出 `Chirp, chirp!`。

请注意，函数没有名称，也不存储在变量中。 函数表达式末尾的两个括号（）会让它被立即执行或调用。 这种模式被叫做立即调用函数表达式（<dfn>immediately invoked function expression</dfn>) 或者<dfn>IIFE</dfn>。

# --instructions--

重写函数 `makeNest`，并删除它的调用，取而代之是一个匿名的立即调用函数表达式（IIFE）。

# --hints--

该函数应该是匿名的。

```js
assert(/\((function|\(\))(=>|\(\)){?/.test(code.replace(/\s/g, '')));
```

函数应该在表达式的末尾有括号，以便立即调用它。

```js
assert(/\(.*(\)\(|\}\(\))\)/.test(code.replace(/[\s;]/g, '')));
```

# --seed--

## --seed-contents--

```js
function makeNest() {
  console.log("A cozy nest is ready");
}

makeNest();
```

# --solutions--

```js
(function () {
  console.log("A cozy nest is ready");
})();
```

---

```js
(function () {
  console.log("A cozy nest is ready");
}());
```

---

```js
(() => {
  console.log("A cozy nest is ready");
})();
```

---

```js
(() =>
  console.log("A cozy nest is ready")
)();
```
