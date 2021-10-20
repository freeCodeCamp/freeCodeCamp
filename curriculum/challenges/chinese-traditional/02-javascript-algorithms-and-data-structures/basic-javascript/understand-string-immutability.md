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

例如，下面的代碼：

```js
var myStr = "Bob";
myStr[0] = "J";
```

是不會把變量 `myStr` 的值改變成 `Job` 的，因爲變量 `myStr` 是不可變的。 注意，這*並不*意味着 `myStr` 永遠不能被改變，只是字符串字面量 <dfn>string literal</dfn> 的各個字符不能被改變。 改變 `myStr` 的唯一方法是重新給它賦一個值，例如：

```js
var myStr = "Bob";
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
var myStr = "Jello World";

// Only change code below this line
myStr[0] = "H"; // Change this line
// Only change code above this line
```

# --solutions--

```js
var myStr = "Jello World";
myStr = "Hello World";
```
