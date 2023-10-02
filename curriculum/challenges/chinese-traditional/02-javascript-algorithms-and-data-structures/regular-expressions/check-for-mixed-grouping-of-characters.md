---
id: 5c3dda8b4d8df89bea71600f
title: 檢查混合字符組
challengeType: 1
forumTopicId: 301339
dashedName: check-for-mixed-grouping-of-characters
---

# --description--

有時候我們想使用正則表達式裏的括號 `()` 來檢查字符組。

如果想在字符串找到 `Penguin` 或 `Pumpkin`，可以用這個正則表達式：`/P(engu|umpk)in/g`。

然後使用 `test()` 方法檢查 test 字符串裏面是否包含字符組。

```js
let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/;
testRegex.test(testStr);
```

`test` 方法會返回 `true`。

# --instructions--

完善正則表達式，使其以區分大小寫的方式檢查 `Franklin Roosevelt` 或 `Eleanor Roosevelt` 的名字，並且應該忽略 middle names。

然後完善代碼，使創建的正則檢查 `myString`，根據正則是否匹配返回 `true` 或 `false`。

# --hints--

正則 `myRegex` 測試 `Franklin D. Roosevelt` 應該返回 `true`。

```js
myRegex.lastIndex = 0;
assert(myRegex.test('Franklin D. Roosevelt'));
```

正則 `myRegex` 測試 `Eleanor Roosevelt` 應該返回 `true`。

```js
myRegex.lastIndex = 0;
assert(myRegex.test('Eleanor Roosevelt'));
```

正則 `myRegex` 測試 `Franklin Rosevelt` 應該返回 `false`。

```js
myRegex.lastIndex = 0;
assert(!myRegex.test('Franklin Rosevelt'));
```

正則 `myRegex` 測試 `Frank Roosevelt` 應該返回 `false`。

```js
myRegex.lastIndex = 0;
assert(!myRegex.test('Frank Roosevelt'));
```

你的正則 `myRegex` 測試 `FranklinRoosevelt` 應該返回 `false`。

```js
myRegex.lastIndex = 0;
assert(!myRegex.test('FranklinRoosevelt'));
```

你的正則 `myRegex` 測試 `EleanorRoosevelt` 應該返回 `false`。

```js
myRegex.lastIndex = 0;
assert(!myRegex.test('EleanorRoosevelt'));
```

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
let myString = "Eleanor Roosevelt";
let myRegex = /False/; // Change this line
let result = false; // Change this line
// After passing the challenge experiment with myString and see how the grouping works
```

# --solutions--

```js
let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor) (([A-Z]\.?|[A-Z][a-z]+) )?Roosevelt/;
let result = myRegex.test(myString);
```
