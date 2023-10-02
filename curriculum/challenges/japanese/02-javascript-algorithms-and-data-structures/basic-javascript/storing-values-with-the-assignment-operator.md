---
id: 56533eb9ac21ba0edf2244a8
title: 代入演算子を使用して値を格納する
challengeType: 1
videoUrl: 'https://scrimba.com/c/cEanysE'
forumTopicId: 18310
dashedName: storing-values-with-the-assignment-operator
---

# --description--

JavaScript では、<dfn>代入</dfn>演算子 (`=`) を使用して値を変数に格納できます。

```js
myVariable = 5;
```

この例は `Number` 値 `5` を `myVariable` に代入します。

`=` 演算子の右側に何らかの計算式がある場合は、それらの計算が実行されてから、左側の変数に値が代入されます。

```js
var myVar;
myVar = 5;
```

最初に、このコードは `myVar` という名前の変数を作成します。 次に、`5` を `myVar` に代入します。 これ以降、`myVar` がコードに再び出現した場合、プログラムはそれを `5` であるかのように扱います。

# --instructions--

値 `7` を変数 `a` に代入してください。

# --hints--

指定のコメントより上にあるコードを変更しないでください。

```js
assert(/var a;/.test(code));
```

`a` の値は 7 である必要があります。

```js
assert(typeof a === 'number' && a === 7);
```

# --seed--

## --before-user-code--

```js
if (typeof a != 'undefined') {
  a = undefined;
}
```

## --after-user-code--

```js
(function(a){return "a = " + a;})(a);
```

## --seed-contents--

```js
// Setup
var a;

// Only change code below this line
```

# --solutions--

```js
var a;
a = 7;
```
