---
id: 56533eb9ac21ba0edf2244dd
title: switch ステートメントを使用して多数の選択肢から選択する
challengeType: 1
videoUrl: 'https://scrimba.com/c/c4mv4fm'
forumTopicId: 18277
dashedName: selecting-from-many-options-with-switch-statements
---

# --description--

選択肢が多数ある場合は <dfn>switch</dfn> ステートメントを使用してください。 `switch` ステートメントは値を調べますが、多数の <dfn>case</dfn> ステートメントを記述してさまざまな値の候補を定義することができます。 条件が一致した最初の `case` 値から `break` に達するまで、ステートメントが実行されます。

次は `switch` ステートメントの例です。

```js
switch (fruit) {
  case "apple":
    console.log("The fruit is an apple");
    break;
  case "orange":
    console.log("The fruit is an orange");
    break;
}
```

`case` の値は厳密等価 (`===`) によりテストされます。 `break` は、ステートメントの実行を停止するよう JavaScript に指示します。 `break` が省略されている場合は次のステートメントが実行されます。

# --instructions--

`val` をテストし、次の条件で `answer` を設定する switch ステートメントを記述してください。  
`1` - `alpha`  
`2` - `beta`  
`3` - `gamma`  
`4` - `delta`

# --hints--

`caseInSwitch(1)` の値は文字列 `alpha` となる必要があります。

```js
assert(caseInSwitch(1) === 'alpha');
```

`caseInSwitch(2)` の値は文字列 `beta` となる必要があります。

```js
assert(caseInSwitch(2) === 'beta');
```

`caseInSwitch(3)` の値は文字列 `gamma` となる必要があります。

```js
assert(caseInSwitch(3) === 'gamma');
```

`caseInSwitch(4)` の値は文字列 `delta` となる必要があります。

```js
assert(caseInSwitch(4) === 'delta');
```

`if` ステートメントまたは `else` ステートメントを使用しないでください。

```js
assert(!/else/g.test(code) || !/if/g.test(code));
```

少なくとも 3 つの `break` ステートメントを記述する必要があります。

```js
assert(code.match(/break/g).length > 2);
```

# --seed--

## --seed-contents--

```js
function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line



  // Only change code above this line
  return answer;
}

caseInSwitch(1);
```

# --solutions--

```js
function caseInSwitch(val) {
  let answer = "";

  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
  }
  return answer;
}
```
