---
id: 5a24c314108439a4d403614d
title: Redux のアクションを定義する
challengeType: 6
forumTopicId: 301440
dashedName: define-a-redux-action
---

# --description--

Redux は状態管理フレームワークであり、したがって state の更新はその中心的な作業の一つです。 Redux では、state の更新はすべて、アクションをディスパッチすることによってトリガーされます。 アクションとは、発生したアクションイベントに関する情報を格納する単なる JavaScript オブジェクトです。 Redux ストアは、これらのアクションオブジェクトを受け取り、それに応じて自身の state を更新します。 場合によっては、Redux のアクションにも何らかのデータが伴うことがあります。 たとえば、ユーザーのログイン後にアクションはユーザー名を伴います。 データは省略可能ですが、アクションには、発生したアクションの「タイプ」を指定する `type` プロパティを持たせる必要があります。

Redux のアクションは、アプリで発生しているイベントに関する情報を Redux ストアに届けるメッセンジャーと捉えることができます。 情報を受け取ったストアは、発生したアクションに基づいて状態を更新する役割を果たします。

# --instructions--

Redux のアクションの記述は簡単で、type プロパティを持つオブジェクトを宣言するだけです。 オブジェクト `action` を宣言し、文字列 `'LOGIN'` を設定したプロパティ `type` を付けてください。

# --hints--

`action` オブジェクトが存在する必要があります。

```js
assert(
  (function () {
    return typeof action === 'object';
  })()
);
```

`action` オブジェクトに、値 `LOGIN` を持つキープロパティ `type` を持たせます。

```js
assert(
  (function () {
    return action.type === 'LOGIN';
  })()
);
```

# --seed--

## --seed-contents--

```js
// Define an action here:
```

# --solutions--

```js
const action = {
  type: 'LOGIN'
}
```
