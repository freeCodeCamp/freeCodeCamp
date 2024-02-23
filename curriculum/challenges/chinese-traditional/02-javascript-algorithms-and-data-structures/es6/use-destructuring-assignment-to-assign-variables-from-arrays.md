---
id: 587d7b89367417b2b2512b4b
title: 使用解構賦值從數組中分配變量
challengeType: 1
forumTopicId: 301213
dashedName: use-destructuring-assignment-to-assign-variables-from-arrays
---

# --description--

在 ES6 裏面，解構數組可以如同解構對象一樣簡單。

與數組解構不同，數組的擴展運算會將數組裏的所有內容分解成一個由逗號分隔的列表。 所以，你不能選擇哪個元素來給變量賦值。

而對數組進行解構卻可以讓我們做到這一點：

```js
const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b);
```

控制檯將顯示 `a` 和 `b` 的值爲 `1, 2`。

數組的第一個值被賦值給變量 `a`，數組的第二個值被賦值給變量 `b`。 我們甚至能在數組解構中使用逗號分隔符，來獲取任意一個想要的值：

```js
const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c);
```

控制檯將顯示 `a`、`b` 和 `c` 的值爲 `1, 2, 5`。

# --instructions--

使用數組解構來交換變量 `a` 與 `b` 的值，使 `a` 接收 `b` 的值，而 `b` 接收 `a` 的值。

# --hints--

交換後，`a` 的值應該爲 `6`。

```js
assert(a === 6);
```

交換後，`b` 的值應該爲 `8`。

```js
assert(b === 8);
```

應使用數組解構來交換 `a` 和 `b` 的值。

```js
assert(/\[\s*(\w)\s*,\s*(\w)\s*\]\s*=\s*\[\s*\2\s*,\s*\1\s*\]/g.test(code));
```

# --seed--

## --seed-contents--

```js
let a = 8, b = 6;
// Only change code below this line
```

# --solutions--

```js
let a = 8, b = 6;
[a, b] = [b, a];
```
