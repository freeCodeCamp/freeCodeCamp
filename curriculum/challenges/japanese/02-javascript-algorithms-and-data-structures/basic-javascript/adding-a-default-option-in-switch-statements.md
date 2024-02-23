---
id: 56533eb9ac21ba0edf2244de
title: switch ステートメントへのデフォルトオプションの追加
challengeType: 1
videoUrl: 'https://scrimba.com/c/c3JvVfg'
forumTopicId: 16653
dashedName: adding-a-default-option-in-switch-statements
---

# --description--

`switch` ステートメントでは、可能性のあるすべての値を `case` ステートメントとして指定することができない場合があります。 代わりに、`case` に一致するものが見つからない場合に実行される `default` を追加することができます。 これは、`if/else` チェーンの最後の `else` のようなものだと考えてください。

`default` ステートメントは最後の case として記述してください。

```js
switch (num) {
  case value1:
    statement1;
    break;
  case value2:
    statement2;
    break;
...
  default:
    defaultStatement;
    break;
}
```

# --instructions--

次の条件ごとに `answer` を設定した switch ステートメントを記述してください。  
`a` - `apple`  
`b` - `bird`  
`c` - `cat`  
`default` - `stuff`

# --hints--

`switchOfStuff("a")` は文字列 `apple` を返す必要があります。

```js
assert(switchOfStuff('a') === 'apple');
```

`switchOfStuff("b")` は文字列 `bird` を返す必要があります。

```js
assert(switchOfStuff('b') === 'bird');
```

`switchOfStuff("c")` は文字列 `cat` を返す必要があります。

```js
assert(switchOfStuff('c') === 'cat');
```

`switchOfStuff("d")` は文字列 `stuff` を返す必要があります。

```js
assert(switchOfStuff('d') === 'stuff');
```

`switchOfStuff(4)` は文字列 `stuff` を返す必要があります。

```js
assert(switchOfStuff(4) === 'stuff');
```

`if` または `else` ステートメントを使用することはできません。

```js
assert(!/else/g.test(code) || !/if/g.test(code));
```

`default` ステートメントを使用する必要があります。

```js
assert(switchOfStuff('string-to-trigger-default-case') === 'stuff');
```

少なくとも 3 つの `break` ステートメントを含める必要があります。

```js
assert(code.match(/break/g).length > 2);
```

# --seed--

## --seed-contents--

```js
function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line



  // Only change code above this line
  return answer;
}

switchOfStuff(1);
```

# --solutions--

```js
function switchOfStuff(val) {
  let answer = "";

  switch(val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
  }
  return answer;
}
```
