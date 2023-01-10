---
id: acda2fb1324d9b0fa741e6b5
title: 確認結尾
challengeType: 1
forumTopicId: 16006
dashedName: confirm-the-ending
---

# --description--

檢查字符串（第一個參數 `str`）是否以給定的目標字符串（第二個參數 `target`）結束。

這個挑戰 *可以* 用 ES2015 引入的 `.endsWith()` 方法來解決。但在這個挑戰中，請使用 JavaScript 的字符串子串方法。

# --hints--

`confirmEnding("Bastian", "n")` 應返回 `true`。

```js
assert(confirmEnding('Bastian', 'n') === true);
```

`confirmEnding("Congratulation", "on")` 應返回 `true`。

```js
assert(confirmEnding('Congratulation', 'on') === true);
```

`confirmEnding("Connor", "n")` 應返回 `false`。

```js
assert(confirmEnding('Connor', 'n') === false);
```

`confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification")` 應返回 `false`。

```js
assert(
  confirmEnding(
    'Walking on water and developing software from a specification are easy if both are frozen',
    'specification'
  ) === false
);
```

`confirmEnding("He has to give me a new name", "name")` 應返回 `true`。

```js
assert(confirmEnding('He has to give me a new name', 'name') === true);
```

`confirmEnding("Open sesame", "same")` 應返回 `true`。

```js
assert(confirmEnding('Open sesame', 'same') === true);
```

`confirmEnding("Open sesame", "sage")` 應返回 `false`。

```js
assert(confirmEnding('Open sesame', 'sage') === false);
```

`confirmEnding("Open sesame", "game")` 應返回 `false`。

```js
assert(confirmEnding('Open sesame', 'game') === false);
```

`confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain")` 應返回 `false`。

```js
assert(
  confirmEnding(
    'If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing',
    'mountain'
  ) === false
);
```

`confirmEnding("Abstraction", "action")` 應該返回 `true`。

```js
assert(confirmEnding('Abstraction', 'action') === true);
```

不應使用內置方法 `.endsWith()` 來完成挑戰。

```js
assert(!/\.endsWith\(.*?\)\s*?;?/.test(code) && !/\['endsWith'\]/.test(code));
```

# --seed--

## --seed-contents--

```js
function confirmEnding(str, target) {
  return str;
}

confirmEnding("Bastian", "n");
```

# --solutions--

```js
function confirmEnding(str, target) {
  return str.substring(str.length - target.length) === target;
}

confirmEnding("Bastian", "n");
```
