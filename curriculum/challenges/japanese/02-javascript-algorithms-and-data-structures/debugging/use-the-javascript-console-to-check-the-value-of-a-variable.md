---
id: 587d7b83367417b2b2512b33
title: JavaScript コンソールを使用して変数の値を確認する
challengeType: 1
forumTopicId: 18372
dashedName: use-the-javascript-console-to-check-the-value-of-a-variable
---

# --description--

Chrome と Firefox はどちらも、JavaScript をデバッグするための優れた JavaScript コンソール (DevTools とも呼ばれます) を備えています。

Chrome には「デベロッパー ツール」というメニューがあり、Firefox には「ウェブコンソール」というメニューがあります。 別のブラウザーやスマートフォンを使用している場合は、デスクトップ版の Firefox または Chrome に切り替えることをぜひお勧めします。

コンソールに丸括弧で囲まれた部分の出力を "print (印字)" する `console.log()` メソッドは、おそらく最も有用なデバッグツールとなります。 このメソッドをコード内の重要な場所に記述すると、変数の中間値を表示することができます。 実際の表示内容を調べる前に、出力されるべきものが何かを確認しておくことをお勧めします。 計算の状態を確認するためのチェックポイントをコード全体にわたって設定しておくと、問題のある場所を絞り込むのに役立ちます。

以下は、文字列 `Hello world!` をコンソールに出力する例です。

```js
console.log('Hello world!');
```

# --instructions--

`console.log()` メソッドを使用して、コード内の指示された場所で変数 `a` の値を出力してください。

# --hints--

変数 `a` の値を確認するために `console.log()` を使用する必要があります。

```js
assert(code.match(/console\.log\(a\)/g));
```

# --seed--

## --seed-contents--

```js
let a = 5;
let b = 1;
a++;
// Only change code below this line


let sumAB = a + b;
console.log(sumAB);
```

# --solutions--

```js
var a = 5; console.log(a);
```
