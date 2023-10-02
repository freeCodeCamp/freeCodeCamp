---
id: 56533eb9ac21ba0edf2244ba
title: 瞭解字符串的不變性
challengeType: 1
videoUrl: 'https://scrimba.com/c/cWPVaUR'
forumTopicId: 18331
dashedName: understand-string-immutability
---

# --description--

在 JavaScript 中，字符串（`String`）的值是不可變的（<dfn>immutable</dfn>），這意味着一旦字符串被創建就不能被改變。

例如，以下代碼將產生錯誤，因爲字符串 `Bob` 中的字母 `B` 不能更改爲字母 `J`：

```js
let myStr = "Bob";
myStr[0] = "J";
```

請注意，這*不*意味着無法重新分配 `myStr`。 更改 `myStr` 的唯一方法是爲其分配一個新值，如下所示：

```js
let myStr = "Bob";
myStr = "Job";
```

# --instructions--

更正對 `myStr` 的分配，使用上面示例中的方法包含 `Hello World` 字符串。

# --hints--

`myStr` 的值應該是字符串 `Hello World`。

```js
assert(myStr === 'Hello World');
```

不要修改註釋上面的代碼。

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
