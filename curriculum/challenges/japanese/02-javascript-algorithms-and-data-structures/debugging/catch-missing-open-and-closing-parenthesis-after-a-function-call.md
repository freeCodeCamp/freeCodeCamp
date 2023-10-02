---
id: 587d7b85367417b2b2512b39
title: 関数呼び出しの後の足りない開始括弧や終了括弧をキャッチする
challengeType: 1
forumTopicId: 301185
dashedName: catch-missing-open-and-closing-parenthesis-after-a-function-call
---

# --description--

引数を取らない関数やメソッドでは、それらを呼び出すときに (空の) 開始括弧や終了括弧を含めることを忘れてしまうかもしれません。 関数呼び出しの結果を変数に保存してコードの他の部分で使用することがよくあります。 このエラーを検出するには、変数の値 (またはそれらの型) をコンソールに出力して、関数の戻り値として期待している値ではなく、関数の参照に設定されていないかを確認します。

次の例の変数は異なる結果になります。

```js
function myFunction() {
  return "You rock!";
}
let varOne = myFunction;
let varTwo = myFunction();
```

この例では、`varOne` は関数 `myFunction` になり、`varTwo` は文字列 `You rock!` になります。

# --instructions--

変数 `result` が、関数 `getNine` の呼び出しにより返される値に設定されるようにコードを修正してください。

# --hints--

変数 `result` が、関数 `getNine` が返す値に設定されるようにコードを修正します。

```js
assert(result == 9);
```

`getNine` 関数を呼び出す必要があります。

```js
assert(code.match(/getNine\(\)/g).length == 2);
```

# --seed--

## --seed-contents--

```js
function getNine() {
  let x = 6;
  let y = 3;
  return x + y;
}

let result = getNine;
console.log(result);
```

# --solutions--

```js
function getNine() {
 let x = 6;
 let y = 3;
 return x + y;
}

let result = getNine();
console.log(result);
```
