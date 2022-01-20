---
id: 56533eb9ac21ba0edf2244dc
title: if/else ステートメントのチェーン
challengeType: 1
videoUrl: 'https://scrimba.com/c/caeJgsw'
forumTopicId: 16772
dashedName: chaining-if-else-statements
---

# --description--

`if/else` ステートメントをチェーンとしてつなげて複雑なロジックを記述することができます。 次は、`if` / `else if` ステートメントを複数つなげた<dfn>擬似コード</dfn>です。

```js
if (condition1) {
  statement1
} else if (condition2) {
  statement2
} else if (condition3) {
  statement3
. . .
} else {
  statementN
}
```

# --instructions--

次の条件を満たすように `if`/`else if` ステートメントをつなげて記述してください。

`num < 5` - `Tiny` を返す  
`num < 10` - `Small` を返す  
`num < 15` - `Medium` を返す  
`num < 20` - `Large` を返す  
`num >= 20` - `Huge` を返す

# --hints--

少なくとも 4 つの `else` ステートメントが必要です。

```js
assert(code.match(/else/g).length > 3);
```

少なくとも 4 つの `if` ステートメントが必要です。

```js
assert(code.match(/if/g).length > 3);
```

少なくとも 1 つの `return` ステートメントが必要です。

```js
assert(code.match(/return/g).length >= 1);
```

`testSize(0)` は文字列 `Tiny` を返す必要があります。

```js
assert(testSize(0) === 'Tiny');
```

`testSize(4)` は文字列 `Tiny` を返す必要があります。

```js
assert(testSize(4) === 'Tiny');
```

`testSize(5)` は文字列 `Small` を返す必要があります。

```js
assert(testSize(5) === 'Small');
```

`testSize(8)` は文字列 `Small` を返す必要があります。

```js
assert(testSize(8) === 'Small');
```

`testSize(10)` は文字列 `Medium` を返す必要があります。

```js
assert(testSize(10) === 'Medium');
```

`testSize(14)` は文字列 `Medium` を返す必要があります。

```js
assert(testSize(14) === 'Medium');
```

`testSize(15)` は文字列 `Large` を返す必要があります。

```js
assert(testSize(15) === 'Large');
```

`testSize(17)` は文字列 `Large` を返す必要があります。

```js
assert(testSize(17) === 'Large');
```

`testSize(20)` は文字列 `Huge` を返す必要があります。

```js
assert(testSize(20) === 'Huge');
```

`testSize(25)` は文字列 `Huge` を返す必要があります。

```js
assert(testSize(25) === 'Huge');
```

# --seed--

## --seed-contents--

```js
function testSize(num) {
  // Only change code below this line


  return "Change Me";
  // Only change code above this line
}

testSize(7);
```

# --solutions--

```js
function testSize(num) {
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else {
    return "Huge";
  }
}
```
