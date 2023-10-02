---
id: 5690307fddb111c6084545d7
title: if else ステートメントの論理的順序
challengeType: 1
videoUrl: 'https://scrimba.com/c/cwNvMUV'
forumTopicId: 18228
dashedName: logical-order-in-if-else-statements
---

# --description--

`if` ステートメント、`else if` ステートメントでは、順序が重要です。

関数は上から下へと実行されるので、どのステートメントが先に来るかに気をつけるようにしてください。

例として 2 つの関数を考えてみましょう。

まず 1 つ目です。

```js
function foo(x) {
  if (x < 1) {
    return "Less than one";
  } else if (x < 2) {
    return "Less than two";
  } else {
    return "Greater than or equal to two";
  }
}
```

2 つ目は 1 つ目のステートメントの順序を入れ替えただけのものです。

```js
function bar(x) {
  if (x < 2) {
    return "Less than two";
  } else if (x < 1) {
    return "Less than one";
  } else {
    return "Greater than or equal to two";
  }
}
```

これら 2 つの関数は見かけはほとんど同じですが、両方に数値を渡すと異なる出力が得られます。

```js
foo(0)
bar(0)
```

`foo(0)` は文字列 `Less than one` を返し、`bar(0)` は文字列 `Less than two` を返します。

# --instructions--

すべてのケースで適切なステートメントを返すように、関数内のロジックの順序を変更してください。

# --hints--

`orderMyLogic(4)` は文字列 `Less than 5` を返す必要があります。

```js
assert(orderMyLogic(4) === 'Less than 5');
```

`orderMyLogic(6)` は文字列 `Less than 10` を返す必要があります。

```js
assert(orderMyLogic(6) === 'Less than 10');
```

`orderMyLogic(11)` は文字列 `Greater than or equal to 10` を返す必要があります。

```js
assert(orderMyLogic(11) === 'Greater than or equal to 10');
```

# --seed--

## --seed-contents--

```js
function orderMyLogic(val) {
  if (val < 10) {
    return "Less than 10";
  } else if (val < 5) {
    return "Less than 5";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);
```

# --solutions--

```js
function orderMyLogic(val) {
  if(val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}
```
