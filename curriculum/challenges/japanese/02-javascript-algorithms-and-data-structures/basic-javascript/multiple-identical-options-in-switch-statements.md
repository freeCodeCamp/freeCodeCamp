---
id: 56533eb9ac21ba0edf2244df
title: switch ステートメントの複数の同一オプション
challengeType: 1
videoUrl: 'https://scrimba.com/c/cdBKWCV'
forumTopicId: 18242
dashedName: multiple-identical-options-in-switch-statements
---

# --description--

`switch` ステートメントの `case` で `break` ステートメントを省略すると、`break` が現れるまで、その後の `case` ステートメント (1 つ以上) が実行されます。 同じ出力となる複数の入力がある場合、`switch` ステートメントで次のように表現できます。

```js
let result = "";
switch (val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3";
    break;
  case 4:
    result = "4 alone";
}
```

1、2、3 の case はすべて同じ結果を生成します。

# --instructions--

次の範囲の `answer` を設定するように switch ステートメントを記述してください。  
`1 ～ 3` - `Low`  
`4 ～ 6` - `Mid`  
`7 ～ 9` - `High`

**注:** 範囲内の数値ごとに `case` ステートメントが必要です。

# --hints--

`sequentialSizes(1)` は文字列 `Low` を返す必要があります。

```js
assert(sequentialSizes(1) === 'Low');
```

`sequentialSizes(2)` は文字列 `Low` を返す必要があります。

```js
assert(sequentialSizes(2) === 'Low');
```

`sequentialSizes(3)` は文字列 `Low` を返す必要があります。

```js
assert(sequentialSizes(3) === 'Low');
```

`sequentialSizes(4)` は文字列 `Mid` を返す必要があります。

```js
assert(sequentialSizes(4) === 'Mid');
```

`sequentialSizes(5)` は文字列 `Mid` を返す必要があります。

```js
assert(sequentialSizes(5) === 'Mid');
```

`sequentialSizes(6)` は文字列 `Mid` を返す必要があります。

```js
assert(sequentialSizes(6) === 'Mid');
```

`sequentialSizes(7)` は文字列 `High` を返す必要があります。

```js
assert(sequentialSizes(7) === 'High');
```

`sequentialSizes(8)` は文字列 `High` を返す必要があります。

```js
assert(sequentialSizes(8) === 'High');
```

`sequentialSizes(9)` は文字列 `High` を返す必要があります。

```js
assert(sequentialSizes(9) === 'High');
```

`if` ステートメントまたは `else` ステートメントを使用しないでください。

```js
assert(!/else/g.test(code) || !/if/g.test(code));
```

9 つの `case` ステートメントが必要です。

```js
assert(code.match(/case/g).length === 9);
```

# --seed--

## --seed-contents--

```js
function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line



  // Only change code above this line
  return answer;
}

sequentialSizes(1);
```

# --solutions--

```js
function sequentialSizes(val) {
  let answer = "";

  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
  }

  return answer;
}
```
