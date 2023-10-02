---
id: 587d7b8e367417b2b2512b5f
title: 関数内の外部依存を回避するために引数を渡す
challengeType: 1
forumTopicId: 301234
dashedName: pass-arguments-to-avoid-external-dependence-in-a-function
---

# --description--

前回のチャレンジで、関数型プログラミングの原則に一歩近づきましたが、まだ何かが欠けています。

グローバル変数の値は変更しませんでしたが、関数 `incrementer` はグローバル変数 `fixedValue` がなければ動作しませんでした。

関数型プログラミングのもう一つの原則は、常に依存関係を明示的に宣言することです。 つまり、関数が変数やオブジェクトの存在に依存している場合は、その変数やオブジェクトを引数として関数に直接渡します。

この原則からはいくつかの良い結果がもたらされます。 この関数はテストが簡単になります。どのような入力を受け取るかが正確にわかり、プログラムの他の部分には依存しません。

このため、新しいコードを変更、削除、または追加する際に、安心感が強まります。 何が変更できて何が変更できないかがわかり、潜在的な罠がどこに潜んでいるかがわかります。

さらに、関数はコードのどの部分で実行されても、同じ一連の入力に対して常に同じ出力を生成します。

# --instructions--

`incrementer` 関数を更新して、依存関係を明確に宣言しましょう。

引数を取り、値を 1 増やした後に結果を返すように、`incrementer` 関数を記述してください。

# --hints--

関数 `incrementer` は `fixedValue` の値 (`4`) を変更してはいけません。

```js
assert(fixedValue === 4);
```

`incrementer` 関数は引数を取る必要があります。

```js
assert(incrementer.length === 1);
```

`incrementer` 関数は、`fixedValue` 値よりも 1 大きい値を返す必要があります。

```js
const __newValue = incrementer(fixedValue);
assert(__newValue === 5);
```

# --seed--

## --seed-contents--

```js
// The global variable
let fixedValue = 4;

// Only change code below this line
function incrementer() {


  // Only change code above this line
}
```

# --solutions--

```js
let fixedValue = 4;

function incrementer(fixedValue) {
  return fixedValue + 1;
}
```
