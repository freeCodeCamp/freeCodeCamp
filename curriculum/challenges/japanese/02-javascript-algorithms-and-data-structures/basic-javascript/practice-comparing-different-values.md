---
id: 599a789b454f2bbd91a3ff4d
title: 異なる値を比較する練習
challengeType: 1
videoUrl: 'https://scrimba.com/c/cm8PqCa'
forumTopicId: 301174
dashedName: practice-comparing-different-values
---

# --description--

前回の 2 つのチャレンジでは等価演算子 (`==`) と厳密等価演算子 (`===`) について学習しました。 簡単なおさらいを兼ねて、これらの演算子の使用についてもう少し練習をしてみましょう。

比較する値が同じ型でない場合、等価演算子では型変換を行ってから、それらの値を評価します。 しかし、厳密等価演算子では型変換を行うことなく、データ型と値をそのまま比較します。

**例**

`3 == '3'` では、JavaScript によって文字列から数値への型変換が行われるため、`true` を返します。 `3 === '3'` では、型が異なり、型変換も行われないため `false` を返します。

**注:** JavaScript では次のように `typeof` 演算子を使用して、変数または値の型を判断することができます。

```js
typeof 3
typeof '3'
```

`typeof 3` は文字列 `number` を返し、`typeof '3'` は文字列 `string` を返します。

# --instructions--

エディターにある `compareEquality` 関数は、等価演算子を使用して 2 つの値を比較します。 値が厳密に等しい場合にのみ、文字列 `Equal` を返すように関数を変更してください。

# --hints--

`compareEquality(10, "10")` は文字列 `Not Equal` を返す必要があります。

```js
assert(compareEquality(10, '10') === 'Not Equal');
```

`compareEquality("20", 20)` は文字列 `Not Equal` を返す必要があります。

```js
assert(compareEquality('20', 20) === 'Not Equal');
```

`===` 演算子を使用してください。

```js
assert(code.match(/===/g));
```

# --seed--

## --seed-contents--

```js
// Setup
function compareEquality(a, b) {
  if (a == b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");
```

# --solutions--

```js
function compareEquality(a,b) {
  if (a === b) {
    return "Equal";
  }
  return "Not Equal";
}
```
