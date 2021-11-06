---
id: cf1111c1c12feddfaeb3bdef
title: 用 if 語句來表達條件邏輯
challengeType: 1
videoUrl: 'https://scrimba.com/c/cy87mf3'
forumTopicId: 18348
dashedName: use-conditional-logic-with-if-statements
---

# --description--

`if` 語句用於在代碼中做出決定。 關鍵字 `if` 告訴 JavaScript 在小括號中的條件爲真的情況下去執行定義在大括號裏面的代碼。 這種條件被稱爲 `Boolean` 條件，因爲他們只可能是 `true`（真）或 `false`（假）。

當條件的計算結果爲 `true`，程序執行大括號內的語句。 當布爾條件的計算結果爲 `false`，大括號內的代碼將不會執行。

**僞代碼**

<blockquote>if（<i>條件爲真</i>）{<br> <i>語句被執行</i><br>}</blockquote>

**示例**

```js
function test (myCondition) {
  if (myCondition) {
    return "It was true";
  }
  return "It was false";
}

test(true);
test(false);
```

`test(true)` 返回字符串 `It was true`，`test(false)` 返回字符串 `It was false`。

當 `test` 被調用，並且傳遞進來的參數值爲 `true` 時，`if` 語句會計算 `myCondition` 的結果，看它是否爲 `true`。 如果條件爲 `true`，函數會返回 `It was true`。 當 `test` 被調用，並且傳遞進來的參數值爲 `false` 時，`myCondition` *不* 爲 `true`，並且不執行大括號後面的語句，函數返回 `It was false`。

# --instructions--

在函數內部創建一個 `if` 語句，如果該參數 `wasThatTrue` 值爲 `true`，返回 `Yes, that was true`，否則，返回`No, that was false`。

# --hints--

`trueOrFalse` 應該是一個函數

```js
assert(typeof trueOrFalse === 'function');
```

`trueOrFalse(true)` 應該返回一個字符串

```js
assert(typeof trueOrFalse(true) === 'string');
```

`trueOrFalse(false)` 應該返回一個字符串

```js
assert(typeof trueOrFalse(false) === 'string');
```

`trueOrFalse(true)` 應該返回 `Yes, that was true`

```js
assert(trueOrFalse(true) === 'Yes, that was true');
```

`trueOrFalse(false)`應該返回 `No, that was false`

```js
assert(trueOrFalse(false) === 'No, that was false');
```

# --seed--

## --seed-contents--

```js
function trueOrFalse(wasThatTrue) {
  // Only change code below this line



  // Only change code above this line

}
```

# --solutions--

```js
function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";
}
```
