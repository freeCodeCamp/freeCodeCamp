---
id: 5cdafbb0291309899753167f
title: JavaScript のプロミスを作成する
challengeType: 1
forumTopicId: 301197
dashedName: create-a-javascript-promise
---

# --description--

JavaScript におけるプロミスとは、その言葉が示すように、何らかの処理を (通常は非同期に) 実行することを「約束する」場合に使用するものです。 タスクを完了するとき、そのタスクは約束を果たしたか果たせなかったかのいずれかになります。 プロミス (`Promise`) はコンストラクター関数なので、`new` キーワードを使用して作成する必要があります。 引数として、2 つのパラメーター (`resolve` と `reject`) を持つ関数を受け取ります。 これらのメソッドは、プロミスの結果を判定するのに使用します。 構文は次のようになります。

```js
const myPromise = new Promise((resolve, reject) => {

});
```

# --instructions--

`makeServerRequest` という新しいプロミスを作成してください。 `resolve` と `reject` のパラメーターを持つ関数をコンストラクターに渡してください。

# --hints--

`makeServerRequest` という名前の宣言された変数に、プロミスを割り当てる必要があります。

```js
assert(makeServerRequest instanceof Promise);
```

プロミスには、`resolve` と `reject` をパラメーターとして持つ関数を渡す必要があります。

```js
assert(
  code.match(
    /Promise\s*\(\s*(function\s*\(\s*resolve\s*,\s*reject\s*\)\s*{|\(\s*resolve\s*,\s*reject\s*\)\s*=>\s*{)[^}]*}/g
  )
);
```

# --seed--

## --seed-contents--

```js

```

# --solutions--

```js
const makeServerRequest = new Promise((resolve, reject) => {

});
```
