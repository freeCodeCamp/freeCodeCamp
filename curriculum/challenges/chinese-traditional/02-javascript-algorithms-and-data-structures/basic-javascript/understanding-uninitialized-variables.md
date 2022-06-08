---
id: 56533eb9ac21ba0edf2244aa
title: 理解未初始化的變量
challengeType: 1
videoUrl: 'https://scrimba.com/c/cBa2JAL'
forumTopicId: 18335
dashedName: understanding-uninitialized-variables
---

# --description--

當 JavaScript 中的變量被聲明的時候，程序內部會給它一個初始值 `undefined`。 當你對一個值爲 `undefined` 的變量進行運算操作的時候，算出來的結果將會是 `NaN`，它的意思是 <dfn>"Not a Number"</dfn>。 如果你用 `undefined` 變量連接一個字符串，你將得到一個 `undefined` 的 <dfn>字符串</dfn>。

# --instructions--

定義 3 個變量 `a`、`b`、`c`，並且分別給他們賦值：`5`、`10`、`"I am a"`，這樣它們值就不會是 `undefined` 了。

# --hints--

應該定義變量 `a`，且它的值爲 `6`。

```js
assert(typeof a === 'number' && a === 6);
```

應該定義變量 `b`，且它最終的值爲 `15`。

```js
assert(typeof b === 'number' && b === 15);
```

變量 `c` 的值不能包含 `undefined`，應該爲字符串 `I am a String!`。

```js
assert(!/undefined/.test(c) && c === 'I am a String!');
```

不要修改第二條註釋下的代碼。

```js
assert(
  /a = a \+ 1;/.test(code) &&
    /b = b \+ 5;/.test(code) &&
    /c = c \+ " String!";/.test(code)
);
```

# --seed--

## --after-user-code--

```js
(function(a,b,c){ return "a = " + a + ", b = " + b + ", c = '" + c + "'"; })(a,b,c);
```

## --seed-contents--

```js
// Only change code below this line
var a;
var b;
var c;
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";
```

# --solutions--

```js
var a = 5;
var b = 10;
var c = "I am a";
a = a + 1;
b = b + 5;
c = c + " String!";
```
