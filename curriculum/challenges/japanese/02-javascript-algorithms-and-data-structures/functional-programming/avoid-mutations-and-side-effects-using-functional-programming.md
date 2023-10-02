---
id: 587d7b8e367417b2b2512b5e
title: 関数型プログラミングを使用してミューテーションや副作用を回避する
challengeType: 1
forumTopicId: 301228
dashedName: avoid-mutations-and-side-effects-using-functional-programming
---

# --description--

まだ気づいていない方もいるかもしれませんが、 前回のチャレンジには `tabClose()` 関数の `splice` 呼び出しに問題がありました。 残念ながら、`splice` は呼び出しの対象となる元の配列を変更します。そのため、2 つ目の呼び出しでは変更後の配列が使用され、予期しない結果をもたらしました。

これははるかに大きなパターンの小さな一例にすぎません。変数、配列、またはオブジェクトに対して関数を呼び出すと、関数によってオブジェクトの変数などが変更されます。

関数型プログラミングの基本原則の一つは、何も変更を加えないことです。 変更はバグにつながります。 関数の引数やグローバル変数なども含めて「自分の関数は何も変更を加えない」という認識を持ちながらバグを防ぐ方が簡単です。

前の例では複雑な操作はありませんでしたが、`splice` メソッドによって元の配列が変更され、バグが発生しました。

すでに説明しましたが、関数型プログラミングでは、何らかの変更が生じることを<dfn>ミューテーション</dfn>と呼び、その結果のことを<dfn>副作用</dfn>と呼びます。 関数は、理想的には<dfn>純粋な関数</dfn>、つまり、副作用を起こさない関数でなければなりません。

この原則を実践して、コード内の変数やオブジェクトを変更しないようにしましょう。

# --instructions--

関数 `incrementer` のコードを記述して、グローバル変数 `fixedValue` の値を 1 増やして返してください。

# --hints--

関数 `incrementer` は `fixedValue` の値 (`4`) を変更してはいけません。

```js
incrementer();
assert(fixedValue === 4);
```

`incrementer` 関数は、`fixedValue` 値よりも 1 大きい値を返す必要があります。

```js
const __newValue = incrementer();
assert(__newValue === 5);
```

`incrementer` 関数は、グローバル変数 `fixedValue` の値に基づいて値を返す必要があります。

```js
(function () {
  fixedValue = 10;
  const newValue = incrementer();
  assert(fixedValue === 10 && newValue === 11);
  fixedValue = 4;
})();
```

# --seed--

## --seed-contents--

```js
// The global variable
let fixedValue = 4;

function incrementer() {
  // Only change code below this line


  // Only change code above this line
}
```

# --solutions--

```js
let fixedValue = 4

function incrementer() {
  return fixedValue + 1
}
```
