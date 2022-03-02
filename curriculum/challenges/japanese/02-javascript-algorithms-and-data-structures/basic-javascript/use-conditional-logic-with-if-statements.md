---
id: cf1111c1c12feddfaeb3bdef
title: if ステートメントで条件分岐処理を行う
challengeType: 1
videoUrl: 'https://scrimba.com/c/cy87mf3'
forumTopicId: 18348
dashedName: use-conditional-logic-with-if-statements
---

# --description--

`if` ステートメントはコード内の判定に使用されます。 キーワード `if` は、丸括弧内で定義された特定の条件に基づいて中括弧内のコードを実行するように JavaScript に指示します。 これらの条件のことを `Boolean` (ブール) 条件と呼び、`true` または `false` のみを使用できます。

条件判定が `true` となった場合、プログラムは中括弧内のステートメントを実行します。 条件判定が `false` となった場合は、中括弧内のステートメントは実行されません。

**擬似コード**

<blockquote>if (<i>条件が true</i>) {<br>  <i>ステートメントを実行する</i><br>}</blockquote>

**例**

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

`test(true)` は文字列 `It was true` を返し、`test(false)` は文字列 `It was false` を返します。

`test` が `true` の値で呼び出された場合、`if` ステートメントは `myCondition` を評価し、条件が `true` かどうかを判定します。 条件が `true` なので、関数は `It was true` を返します。 `test` が `false` の値で呼び出された場合、`myCondition` は `true` *ではなく*、波括弧内の文は実行されません。そして、関数は `It was false` を返します。

# --instructions--

パラメーター `wasThatTrue` が `true` の場合は `Yes, that was true` を、そうでない場合は `No, that was false` を返すように、関数内に `if` ステートメントを作成してください。

# --hints--

`trueOrFalse` は関数である必要があります。

```js
assert(typeof trueOrFalse === 'function');
```

`trueOrFalse(true)` は文字列を返す必要があります。

```js
assert(typeof trueOrFalse(true) === 'string');
```

`trueOrFalse(false)` は文字列を返す必要があります。

```js
assert(typeof trueOrFalse(false) === 'string');
```

`trueOrFalse(true)` は文字列 `Yes, that was true` を返す必要があります。

```js
assert(trueOrFalse(true) === 'Yes, that was true');
```

`trueOrFalse(false)` は文字列 `No, that was false` を返す必要があります。

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
