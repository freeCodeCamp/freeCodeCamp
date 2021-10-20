---
id: 56533eb9ac21ba0edf2244a8
title: 使用賦值運算符存儲值
challengeType: 1
videoUrl: 'https://scrimba.com/c/cEanysE'
forumTopicId: 18310
dashedName: storing-values-with-the-assignment-operator
---

# --description--

在 JavaScript 中，你可以使用賦值（<dfn>assignment</dfn>）運算符 （`=`）將值存儲在變量中。

```js
myVariable = 5;
```

這條語句把 `Number` 類型的值 `5` 賦給變量 `myVariable`。

在將值賦給運算符左側的變量之前，將先執行 `=` 運算符右側的所有運算。

```js
var myVar;
myVar = 5;
```

首先，此代碼創建一個名爲 `myVar` 的變量。 然後，數值 `5` 被賦給變量 `myVar`。 現在，如果 `myVar` 再次出現在代碼中，程序將會將它視爲 `5`。

# --instructions--

把數值 `7` 賦給變量 `a`。

# --hints--

不應該修改註釋上面的代碼。

```js
assert(/var a;/.test(code));
```

`a` 的值應該爲 7。

```js
assert(typeof a === 'number' && a === 7);
```

# --seed--

## --before-user-code--

```js
if (typeof a != 'undefined') {
  a = undefined;
}
```

## --after-user-code--

```js
(function(a){return "a = " + a;})(a);
```

## --seed-contents--

```js
// Setup
var a;

// Only change code below this line
```

# --solutions--

```js
var a;
a = 7;
```
