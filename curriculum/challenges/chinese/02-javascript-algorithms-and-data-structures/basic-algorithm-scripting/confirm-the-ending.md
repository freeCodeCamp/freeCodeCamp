---
id: acda2fb1324d9b0fa741e6b5
title: 检查字符串结尾
challengeType: 5
forumTopicId: 16006
---

# --description--

检查字符串（第一个参数 `str`）是否以给定的目标字符串（第二个参数 `target`）结束。

这个挑战*可以*用 ES2015 引入的 `.endsWith()` 方法来解决。但在这个挑战中，请使用 JavaScript 的字符串子串方法或正则表达式来通过挑战，而不要使用 `.endsWith()` 方法。

# --hints--

`confirmEnding("Bastian", "n")` 应返回 true。

```js
assert(confirmEnding('Bastian', 'n') === true);
```

`confirmEnding("Congratulation", "on")` 应返回 true。

```js
assert(confirmEnding('Congratulation', 'on') === true);
```

`confirmEnding("Connor", "n")` 应返回 false。

```js
assert(confirmEnding('Connor', 'n') === false);
```

`confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification")` 应返回 false。

```js
assert(
  confirmEnding(
    'Walking on water and developing software from a specification are easy if both are frozen',
    'specification'
  ) === false
);
```

`confirmEnding("He has to give me a new name", "name")` 应返回 true。

```js
assert(confirmEnding('He has to give me a new name', 'name') === true);
```

`confirmEnding("Open sesame", "same")` 应返回 true。

```js
assert(confirmEnding('Open sesame', 'same') === true);
```

`confirmEnding("Open sesame", "sage")` 应返回 false。

```js
assert(confirmEnding('Open sesame', 'sage') === false);
```

`confirmEnding("Open sesame", "game")` 应返回 false。

```js
assert(confirmEnding('Open sesame', 'game') === false);
```

`confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain")` 应返回 false。

```js
assert(
  confirmEnding(
    'If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing',
    'mountain'
  ) === false
);
```

`confirmEnding("Abstraction", "action")` 应该返回 true。

```js
assert(confirmEnding('Abstraction', 'action') === true);
```

不应使用内置方法 `.endsWith()` 来完成挑战。

```js
assert(!/\.endsWith\(.*?\)\s*?;?/.test(code) && !/\['endsWith'\]/.test(code));
```

# --solutions--

