---
id: 5cdafbc32913098997531680
title: resolve と reject を使用してプロミスを完了する
challengeType: 1
forumTopicId: 301196
dashedName: complete-a-promise-with-resolve-and-reject
---

# --description--

プロミスには、`pending` (保留)、`fulfilled` (成功)、`rejected` (拒否) の 3 つの状態があります。 前のチャレンジで作成したプロミスは、プロミスの完了方法を追加していなかったために、永久に `pending` 状態のままになります。 プロミスを完了するには、プロミスの引数に与えられた `resolve` および `reject` パラメーターを使用します。 プロミスを成功としたい場合は `resolve` を使用し、失敗としたい場合は `reject` を使用します。 これらは、次に示すように引数を取るメソッドです。

```js
const myPromise = new Promise((resolve, reject) => {
  if(condition here) {
    resolve("Promise was fulfilled");
  } else {
    reject("Promise was rejected");
  }
});
```

上記の例では、これらの関数の引数として文字列を使用していますが、実際には何でも使用できます。 多くの場合はオブジェクトで、そこからウェブサイトなどに設定するデータを取得して使用します。

# --instructions--

プロミスを使用して成功と失敗を処理してください。 `responseFromServer` が `true` の場合は、`resolve` メソッドを呼び出してプロミスを成功として完了してください。 `resolve`には、`We got the data` という値の文字列を渡します。 `responseFromServer` が `false` の場合は、代わりに `reject` メソッドを使用して文字列 `Data not received` を渡してください。

# --hints--

`if` 条件が `true` の場合は、必要な文字列とともに `resolve` を呼び出す必要があります。

```js
assert(
  code.match(/if\s*\(\s*responseFromServer\s*\)\s*{\s*resolve\s*\(\s*('|"|`)We got the data\1\s*\)(\s*|\s*;\s*)}/g)
);
```

`if` 条件が `false` の場合は、必要な文字列とともに `reject` を呼び出す必要があります。

```js
assert(
  code.match(/}\s*else\s*{\s*reject\s*\(\s*('|"|`)Data not received\1\s*\)(\s*|\s*;\s*)}/g)
);
```

# --seed--

## --seed-contents--

```js
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;

  if(responseFromServer) {
    // Change this line
  } else {  
    // Change this line
  }
});
```

# --solutions--

```js
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;

  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});
```
