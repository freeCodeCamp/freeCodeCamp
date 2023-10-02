---
id: 5a24c314108439a4d403614c
title: Redux ストアから state を取得する
challengeType: 6
forumTopicId: 301443
dashedName: get-state-from-the-redux-store
---

# --description--

Redux の store オブジェクトには、ストアとのやり取りを可能にするメソッドがいくつか用意されています。 たとえば `getState()` メソッドを使用すると、Redux の store オブジェクトに保持されている現在の `state` を取得できます。

# --instructions--

コードエディターで、前のチャレンジのコードが、より簡潔な内容に書き換えられています。 `store.getState()` を使用して、`store` から `state` を取得し、それを新しい変数 `currentState` に割り当ててください。

# --hints--

Redux ストアで、初期状態で 5 という値を持たせます。

```js
assert(store.getState() === 5);
```

変数 `currentState` が存在し、Redux ストアの現在の state を割り当てる必要があります。

```js
(getUserInput) =>
  assert(
    currentState === 5 && getUserInput('index').includes('store.getState()')
  );
```

# --seed--

## --seed-contents--

```js
const store = Redux.createStore(
  (state = 5) => state
);

// Change code below this line
```

# --solutions--

```js
const store = Redux.createStore(
  (state = 5) => state
);

// Change code below this line
const currentState = store.getState();
```
