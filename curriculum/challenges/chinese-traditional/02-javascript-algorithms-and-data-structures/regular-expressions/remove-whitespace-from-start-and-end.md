---
id: 587d7dbb367417b2b2512bac
title: 刪除開頭和結尾的空白
challengeType: 1
forumTopicId: 301362
dashedName: remove-whitespace-from-start-and-end
---

# --description--

有時字符串周圍存在的空白字符並不是必需的。 字符串的典型處理是刪除字符串開頭和結尾處的空格。

# --instructions--

編寫一個正則表達式並使用適當的字符串方法刪除字符串開頭和結尾的空格。

**注意：** `String.prototype.trim()` 方法在這裏也可以實現同樣的效果，但是你需要使用正則表達式來完成此項挑戰。

# --hints--

`result` 應該等於 `Hello, World!`

```js
assert(result === 'Hello, World!');
```

你不應該使用 `String.prototype.trim()` 方法。

```js
assert(!code.match(/\.?[\s\S]*?trim/));
```

`result` 變量的值不應該是一個字符串。

```js
assert(!code.match(/result\s*=\s*["'`].*?["'`]/));
```

`hello` 變量的值不應更改。

```js
assert(hello === '   Hello, World!  ');
```

# --seed--

## --seed-contents--

```js
let hello = "   Hello, World!  ";
let wsRegex = /change/; // Change this line
let result = hello; // Change this line
```

# --solutions--

```js
let hello = "   Hello, World!  ";
let wsRegex = /^(\s+)(.+[^\s])(\s+)$/;
let result = hello.replace(wsRegex, '$2');
```
