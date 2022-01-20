---
id: cf1111c1c11feddfaeb5bdef
title: JavaScript の for ループによる繰り返し処理
challengeType: 1
videoUrl: 'https://scrimba.com/c/c9yNVCe'
forumTopicId: 18219
dashedName: iterate-with-javascript-for-loops
---

# --description--

ループ処理によって、同じコードを何度も実行できます。

JavaScript のループで最も一般的なのは、特定の回数を実行する `for` ループと呼ばれるものです。

for ループは、セミコロンで区切られた 3 つの任意の式を使用して

`for (a; b; c)` のように宣言します。ここで `a` は初期化式、`b` は条件式、`c` は最終式です。

初期化式は、ループが開始される前に 1 回だけ実行されます。 通常はループ変数の定義と設定に使用します。

条件式は各ループ処理の最初に評価され、`true` である限り繰り返されます。 繰り返し処理の開始時に条件が `false` になると、ループの実行が停止します。 したがって、条件の最初の評価が false の場合はループは決して実行されません。

最終式は各ループ処理の最後、次の条件評価の前に実行されます。通常はループカウンターのインクリメントまたはデクリメントに使用します。

次の例では、`i = 0` で初期化し、条件 `i < 5` が true である間、繰り返し処理を実行します。 最終式の `i++` により、各ループ処理で `i` を `1` ずつインクリメントします。

```js
const ourArray = [];

for (let i = 0; i < 5; i++) {
  ourArray.push(i);
}
```

`ourArray` の値は `[0, 1, 2, 3, 4]` となります。

# --instructions--

`for` ループを使用して、1 から 5 までの値を `myArray` に push してください。

# --hints--

この課題には `for` ループを使用してください。

```js
assert(/for\s*\([^)]+?\)/.test(code));
```

`myArray` は `[1, 2, 3, 4, 5]` となる必要があります。

```js
assert.deepEqual(myArray, [1, 2, 3, 4, 5]);
```

# --seed--

## --after-user-code--

```js
if (typeof myArray !== "undefined"){(function(){return myArray;})();}
```

## --seed-contents--

```js
// Setup
const myArray = [];

// Only change code below this line

```

# --solutions--

```js
const myArray = [];
for (let i = 1; i < 6; i++) {
  myArray.push(i);
}
```
