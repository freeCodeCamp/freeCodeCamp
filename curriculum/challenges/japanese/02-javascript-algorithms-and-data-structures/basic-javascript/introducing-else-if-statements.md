---
id: 56533eb9ac21ba0edf2244db
title: else if ステートメントを導入する
challengeType: 1
videoUrl: 'https://scrimba.com/c/caeJ2hm'
forumTopicId: 18206
dashedName: introducing-else-if-statements
---

# --description--

処理を必要とする条件が複数ある場合は、`if` ステートメントと `else if` ステートメントをつなぎ合わせることができます。

```js
if (num > 15) {
  return "Bigger than 15";
} else if (num < 5) {
  return "Smaller than 5";
} else {
  return "Between 5 and 15";
}
```

# --instructions--

`else if` ステートメントを使用するようにロジックを変えてください。

# --hints--

2 つ以上の `else` ステートメントを記述する必要があります。

```js
assert(code.match(/else/g).length > 1);
```

2 つ以上の `if` ステートメントを記述する必要があります。

```js
assert(code.match(/if/g).length > 1);
```

`if else` コードブロックごとに開始と終了の中括弧を置く必要があります。

```js
assert(
  code.match(
    /if\s*\((.+)\)\s*\{[\s\S]+\}\s*else\s+if\s*\((.+)\)\s*\{[\s\S]+\}\s*else\s*\{[\s\S]+\s*\}/
  )
);
```

`testElseIf(0)` は文字列 `Smaller than 5` を返す必要があります。

```js
assert(testElseIf(0) === 'Smaller than 5');
```

`testElseIf(5)` は文字列 `Between 5 and 10` を返す必要があります。

```js
assert(testElseIf(5) === 'Between 5 and 10');
```

`testElseIf(7)` は文字列 `Between 5 and 10` を返す必要があります。

```js
assert(testElseIf(7) === 'Between 5 and 10');
```

`testElseIf(10)` は文字列 `Between 5 and 10` を返す必要があります。

```js
assert(testElseIf(10) === 'Between 5 and 10');
```

`testElseIf(12)` は文字列 `Greater than 10` を返す必要があります。

```js
assert(testElseIf(12) === 'Greater than 10');
```

# --seed--

## --seed-contents--

```js
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }

  if (val < 5) {
    return "Smaller than 5";
  }

  return "Between 5 and 10";
}

testElseIf(7);
```

# --solutions--

```js
function testElseIf(val) {
  if(val > 10) {
    return "Greater than 10";
  } else if(val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}
```
