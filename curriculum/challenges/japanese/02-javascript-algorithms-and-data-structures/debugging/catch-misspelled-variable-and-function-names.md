---
id: 587d7b84367417b2b2512b35
title: 変数名や関数名のスペルミスを見つける
challengeType: 1
forumTopicId: 301186
dashedName: catch-misspelled-variable-and-function-names
---

# --description--

`console.log()` と `typeof` メソッドの 2 つは、中間値やプログラム出力の型を確認する場合によく使用されます。 よくあるバグの原因として、 スペルミスがあります。タイピングの速い人が起こしがちな構文レベルの問題の 1 つです。

Transposed, missing, or miscapitalized characters in a variable or function name will have the browser looking for an object that doesn't exist - and complain in the form of a reference error. JavaScript の変数名や関数名は大文字と小文字が区別されます。

# --instructions--

`netWorkingCapital` の計算が正しく実行されるように、コード内のスペルミスを 2 か所修正してください。

# --hints--

netWorkingCapital の計算で使用されている 2 つの変数のスペルを確認してください。コンソール出力に「Net working capital is: 2」と表示する必要があります。

```js
assert(netWorkingCapital === 2);
```

コード内の変数にスペルミスがあってはいけません。

```js
assert(!__helpers.removeJSComments(code).match(/recievables/g));
```

`receivables` 変数をコードで正しく宣言して使用する必要があります。

```js
assert(__helpers.removeJSComments(code).match(/receivables/g).length == 2);
```

コード内の変数にスペルミスがあってはいけません。

```js
assert(!__helpers.removeJSComments(code).match(/payable;/g));
```

`payables` 変数をコードで正しく宣言して使用する必要があります。

```js
assert(__helpers.removeJSComments(code).match(/payables/g).length == 2);
```

# --seed--

## --seed-contents--

```js
let receivables = 10;
let payables = 8;
let netWorkingCapital = recievables - payable;
console.log(`Net working capital is: ${netWorkingCapital}`);
```

# --solutions--

```js
let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`);
```
