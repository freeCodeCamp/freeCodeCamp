---
id: 56533eb9ac21ba0edf2244c6
title: 1 列に並べる
challengeType: 1
videoUrl: 'https://scrimba.com/c/ca8Q8tP'
forumTopicId: 18307
dashedName: stand-in-line
---

# --description--

コンピューターサイエンスでは、アイテムを順に保存する抽象的な<dfn>データ構造</dfn>として<dfn>キュー</dfn>を使用します。 新しいアイテムはキューの末尾に追加され、古いアイテムはキューの先頭から削除されます。

# --instructions--

配列 (`arr`) と数値 (`item`) を引数として取る関数 `nextInLine` を記述してください。

配列の末尾に数値を追加し、それから配列の先頭の要素を削除してください。

その後、`nextInLine` 関数は削除された要素を返す必要があります。

# --hints--

`nextInLine([], 5)` は数値を返す必要があります。

```js
assert.isNumber(nextInLine([], 5));
```

`nextInLine([], 1)` は `1` を返す必要があります。

```js
assert(nextInLine([], 1) === 1);
```

`nextInLine([2], 1)` は `2` を返す必要があります。

```js
assert(nextInLine([2], 1) === 2);
```

`nextInLine([5,6,7,8,9], 1)` は `5` を返す必要があります。

```js
assert(nextInLine([5, 6, 7, 8, 9], 1) === 5);
```

`nextInLine(testArr, 10)` の実行後、`testArr[4]` は `10` となる必要があります。

```js
nextInLine(testArr, 10);
assert(testArr[4] === 10);
```

# --seed--

## --before-user-code--

```js
var logOutput = [];
var originalConsole = console
function capture() {
    var nativeLog = console.log;
    console.log = function (message) {
        logOutput.push(message);
        if(nativeLog.apply) {
          nativeLog.apply(originalConsole, arguments);
        } else {
          var nativeMsg = Array.prototype.slice.apply(arguments).join(' ');
          nativeLog(nativeMsg);
        }
    };
}

function uncapture() {
  console.log = originalConsole.log;
}

capture();
```

## --after-user-code--

```js
uncapture();
testArr = [1,2,3,4,5];
(function() { return logOutput.join("\n");})();
```

## --seed-contents--

```js
function nextInLine(arr, item) {
  // Only change code below this line

  return item;
  // Only change code above this line
}

// Setup
let testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
```

# --solutions--

```js
let testArr = [1, 2, 3, 4, 5];

function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
}
```
