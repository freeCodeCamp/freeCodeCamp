---
id: 56533eb9ac21ba0edf2244c3
title: 使用返回值賦值
challengeType: 1
videoUrl: 'https://scrimba.com/c/ce2pEtB'
forumTopicId: 16658
dashedName: assignment-with-a-returned-value
---

# --description--

如果你還記得我們在這一節<a href="/learn/javascript-algorithms-and-data-structures/basic-javascript/storing-values-with-the-assignment-operator" target="_blank" rel="noopener noreferrer nofollow">使用賦值運算符存儲值</a>中的討論，賦值之前，先完成等號右邊的操作。 這意味着我們可以獲取函數的返回值，並將其賦值給一個變量。

假設我們有一個預先定義的函數 `sum` ，它將兩個數相加，然後：

```js
ourSum = sum(5, 12);
```

將調用 `sum` 函數，該函數返回 `17` 的值並將其分配給 `ourSum` 變量。

# --instructions--

調用 `processArg` 函數，參數爲 `7`，然後把返回的值賦值給變量 `processed`。

# --hints--

`processed` 的值應爲 `2`。

```js
assert(processed === 2);
```

應該將 `processArg` 賦值給 `processed`。

```js
assert(/processed\s*=\s*processArg\(\s*7\s*\)/.test(code));
```

# --seed--

## --after-user-code--

```js
(function(){return "processed = " + processed})();
```

## --seed-contents--

```js
// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line

```

# --solutions--

```js
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7);
```
