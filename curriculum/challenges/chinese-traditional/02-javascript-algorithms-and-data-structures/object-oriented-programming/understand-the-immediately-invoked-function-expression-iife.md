---
id: 587d7db2367417b2b2512b8b
title: 瞭解立即調用函數表達（IIFE）
challengeType: 1
forumTopicId: 301328
dashedName: understand-the-immediately-invoked-function-expression-iife
---

# --description--

JavaScript 中的一個常見模式就是，函數在聲明後立刻執行：

```js
(function () {
  console.log("Chirp, chirp!");
})();
```

這是一個匿名函數表達式，立即執行並輸出 `Chirp, chirp!`。

請注意，函數沒有名稱，也不存儲在變量中。 函數表達式末尾的兩個括號（）會讓它被立即執行或調用。 這種模式被叫做立即調用函數表達式（<dfn>immediately invoked function expression</dfn>) 或者<dfn>IIFE</dfn>。

# --instructions--

重寫函數 `makeNest`，並刪除它的調用，取而代之是一個匿名的立即調用函數表達式（IIFE）。

# --hints--

該函數應該是匿名的。

```js
assert(/\((function|\(\))(=>|\(\)){?/.test(code.replace(/\s/g, '')));
```

函數應該在表達式的末尾有括號，以便立即調用它。

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
