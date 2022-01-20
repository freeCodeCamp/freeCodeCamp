---
id: 5a24c314108439a4d403614f
title: アクションイベントをディスパッチする
challengeType: 6
forumTopicId: 301442
dashedName: dispatch-an-action-event
---

# --description--

`dispatch` は、アクションを Redux ストアにディスパッチするために使用するメソッドです。 `store.dispatch()` を呼び出して、アクションクリエイターから返された値を渡すと、ストアにアクションが送り返されます。

すでに説明したように、アクションクリエイターは、発生したアクションを指定する type プロパティを持つオブジェクトを返します。 そして、メソッドからアクションオブジェクトを Redux ストアにディスパッチします。 次の行は前のチャレンジの例に基づいていますが、これらは等価であり、どちらもタイプ `LOGIN` のアクションをディスパッチします。

```js
store.dispatch(actionCreator());
store.dispatch({ type: 'LOGIN' });
```

# --instructions--

コードエディターの Redux ストアに初期化済みの state があります。これは `login` プロパティを含んでいるオブジェクトで、プロパティは現在 `false` に設定されています。 また、`loginAction()` というアクションクリエイターがあり、これはタイプ `LOGIN` のアクションを返します。 `dispatch` メソッドを呼び出して `LOGIN` アクションを Redux ストアにディスパッチし、`loginAction()` によって作成されたアクションを渡してください。

# --hints--

関数 `loginAction` の呼び出しで、`type` プロパティが文字列 `LOGIN` に設定されたオブジェクトを返します。

```js
assert(loginAction().type === 'LOGIN');
```

オブジェクトのプロパティ `login` を `false` に設定してストアを初期化します。

```js
assert(store.getState().login === false);
```

`store.dispatch()` メソッドを使用して、タイプ `LOGIN` のアクションをディスパッチします。

```js
(getUserInput) =>
  assert(
    (function () {
      let noWhiteSpace = getUserInput('index').replace(/\s/g, '');
      return (
        noWhiteSpace.includes('store.dispatch(loginAction())') ||
        noWhiteSpace.includes("store.dispatch({type: 'LOGIN'})") === true
      );
    })()
  );
```

# --seed--

## --seed-contents--

```js
const store = Redux.createStore(
  (state = {login: false}) => state
);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

// Dispatch the action here:
```

# --solutions--

```js
const store = Redux.createStore(
  (state = {login: false}) => state
);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

store.dispatch(loginAction());
```
