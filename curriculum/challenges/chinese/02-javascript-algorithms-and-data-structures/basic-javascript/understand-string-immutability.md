---
id: 56533eb9ac21ba0edf2244ba
title: 了解字符串的不变性
challengeType: 1
videoUrl: 'https://scrimba.com/c/cWPVaUR'
forumTopicId: 18331
dashedName: understand-string-immutability
---

# --description--

在 JavaScript 中，字符串（`String`）的值是不可变的（<dfn>immutable</dfn>），这意味着一旦字符串被创建就不能被改变。

例如，以下代码将产生错误，因为字符串 `Bob` 中的字母 `B` 不能更改为字母 `J`：

```js
let myStr = "Bob";
myStr[0] = "J";
```

请注意，这*不*意味着无法重新分配 `myStr`。 更改 `myStr` 的唯一方法是为其分配一个新值，如下所示：

```js
let myStr = "Bob";
myStr = "Job";
```

# --instructions--

更正对 `myStr` 的分配，使用上面示例中的方法包含 `Hello World` 字符串。

# --hints--

`myStr` 的值应该是字符串 `Hello World`。

```js
assert(myStr === 'Hello World');
```

不要修改注释上面的代码。

```js
assert(/myStr = "Jello World"/.test(code));
```

# --seed--

## --after-user-code--

```js
(function(v){return "myStr = " + v;})(myStr);
```

## --seed-contents--

```js
// Setup
let myStr = "Jello World";

// Only change code below this line
myStr[0] = "H"; // Change this line
// Only change code above this line
```

# --solutions--

```js
let myStr = "Jello World";
myStr = "Hello World";
```
