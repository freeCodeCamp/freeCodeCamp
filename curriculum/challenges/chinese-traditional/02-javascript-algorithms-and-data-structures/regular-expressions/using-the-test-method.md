---
id: 587d7db3367417b2b2512b8e
title: 使用測試方法
challengeType: 1
forumTopicId: 301369
dashedName: using-the-test-method
---

# --description--

在編程語言中，正則表達式用於匹配指定的字符串。 通過正則表達式創建匹配模式（規則）可以幫你完成指定匹配。

如果想要在字符串 `The dog chased the cat` 中匹配到 `the` 這個單詞，可以使用如下正則表達式：`/the/`。 注意，正則表達式中不需要引號。

JavaScript 中有多種使用正則表達式的方法。 測試正則表達式的一種方法是使用 `.test()` 方法。 `.test()` 方法會把編寫的正則表達式和字符串（即括號內的內容）匹配，如果成功匹配到字符，則返回 `true`，反之，返回 `false`。

```js
let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr);
```

`test` 方法會返回 `true`。

# --instructions--

使用 `.test()` 方法，檢測字符串 `myString` 是否符合正則表達式 `myRegex` 定義的規則。

# --hints--

你應該使用 `.test()` 方法來檢測正則表達式。

```js
assert(code.match(/myRegex.test\(\s*myString\s*\)/));
```

你的返回結果應該爲 `true`。

```js
assert(result === true);
```

# --seed--

## --seed-contents--

```js
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex; // Change this line
```

# --solutions--

```js
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Change this line
```
