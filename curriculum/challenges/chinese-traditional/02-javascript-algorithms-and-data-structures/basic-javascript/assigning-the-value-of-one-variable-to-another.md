---
id: 5ee127a03c3b35dd45426493
title: 將一個變量的值賦給另一個
challengeType: 1
videoUrl: ''
forumTopicId: 418265
dashedName: assigning-the-value-of-one-variable-to-another
---

# --description--

在使用<dfn>賦值</dfn>運算符賦予變量某個值後，你可以使用<dfn>賦值</dfn>運算符將該變量的值賦給另一個變量。

```js
var myVar;
myVar = 5;
var myNum;
myNum = myVar;
```

以上代碼聲明瞭一個沒有初始值的變量 `myVar`，然後給它賦值爲 `5`。 緊接着，又聲明瞭一個沒有初始值的變量 `myNum`。 然後，變量 `myVar` 的內容（也就是 `5`）被賦給了變量 `myNum`。 現在，變量 `myNum` 的值也爲 `5`。

# --instructions--

把變量 `a` 的內容賦給變量 `b`。

# --hints--

你不應該修改註釋上面的代碼。

```js
assert(/var a;/.test(code) && /a = 7;/.test(code) && /var b;/.test(code));
```

`b` 的值應該爲 `7`。

```js
assert(typeof b === 'number' && b === 7);
```

應該使用 `=` 將 `a` 賦給 `b`。

```js
assert(/b\s*=\s*a\s*/g.test(code));
```

# --seed--

## --before-user-code--

```js
if (typeof a != 'undefined') {
  a = undefined;
}
if (typeof b != 'undefined') {
  b = undefined;
}
```

## --after-user-code--

```js
(function(a, b) {
  return 'a = ' + a + ', b = ' + b;
})(a, b);
```

## --seed-contents--

```js
// Setup
var a;
a = 7;
var b;

// Only change code below this line
```

# --solutions--

```js
var a;
a = 7;
var b;
b = a;
```
