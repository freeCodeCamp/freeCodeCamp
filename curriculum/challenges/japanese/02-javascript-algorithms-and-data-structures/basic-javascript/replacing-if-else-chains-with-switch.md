---
id: 56533eb9ac21ba0edf2244e0
title: if else のチェーンを switch に置き換える
challengeType: 1
videoUrl: 'https://scrimba.com/c/c3JE8fy'
forumTopicId: 18266
dashedName: replacing-if-else-chains-with-switch
---

# --description--

選択肢となるオプションが多数ある場合、`switch` ステートメントを使用すると、たくさんの `if`/`else if` ステートメントをつなげるよりも記述が簡単になります。 次の例をご覧ください。

```js
if (val === 1) {
  answer = "a";
} else if (val === 2) {
  answer = "b";
} else {
  answer = "c";
}
```

これは次のように置き換えることができます。

```js
switch (val) {
  case 1:
    answer = "a";
    break;
  case 2:
    answer = "b";
    break;
  default:
    answer = "c";
}
```

# --instructions--

`if`/`else if` ステートメントのチェーンを `switch` ステートメントに変更してください。

# --hints--

プログラムにはどんな `else` ステートメントも使用しないでください。

```js
assert(!/else/g.test(code));
```

プログラムにはどんな `if` ステートメントも使用しないでください。

```js
assert(!/if/g.test(code));
```

少なくとも 4 つの `break` ステートメントを含める要があります。

```js
assert(code.match(/break/g).length >= 4);
```

`chainToSwitch("bob")` は文字列 `Marley` を返す必要があります。

```js
assert(chainToSwitch('bob') === 'Marley');
```

`chainToSwitch(42)` は文字列 `The Answer` を返す必要があります。

```js
assert(chainToSwitch(42) === 'The Answer');
```

`chainToSwitch(1)` は文字列 `There is no #1` を返す必要があります。

```js
assert(chainToSwitch(1) === 'There is no #1');
```

`chainToSwitch(99)` は文字列 `Missed me by this much!` を返す必要があります。

```js
assert(chainToSwitch(99) === 'Missed me by this much!');
```

`chainToSwitch(7)` は文字列 `Ate Nine` を返す必要があります。

```js
assert(chainToSwitch(7) === 'Ate Nine');
```

`chainToSwitch("John")` は `""` (空文字列) を返す必要があります。

```js
assert(chainToSwitch('John') === '');
```

`chainToSwitch(156)` は `""` (空文字列) を返す必要があります。

```js
assert(chainToSwitch(156) === '');
```

# --seed--

## --seed-contents--

```js
function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line

  if (val === "bob") {
    answer = "Marley";
  } else if (val === 42) {
    answer = "The Answer";
  } else if (val === 1) {
    answer = "There is no #1";
  } else if (val === 99) {
    answer = "Missed me by this much!";
  } else if (val === 7) {
    answer = "Ate Nine";
  }

  // Only change code above this line
  return answer;
}

chainToSwitch(7);
```

# --solutions--

```js
function chainToSwitch(val) {
  let answer = "";

  switch (val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
  }
  return answer;
}
```
