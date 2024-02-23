---
id: 5a24c314108439a4d4036150
title: ストアでアクションを処理する
challengeType: 6
forumTopicId: 301444
dashedName: handle-an-action-in-the-store
---

# --description--

アクションが作成されてディスパッチされた後、Redux ストアでは、そのアクションに対してどう応答するかを知る必要があります。 その役割を担うのが `reducer` (リデューサー) 関数です。 Redux のリデューサーは、アクションに応じて行われる state の変更を担います。 `reducer` は、引数として `state` と `action` を受け取り、常に新しい `state` を返します。 ここで重要なのは、これがレデューサーの**唯一の**役割であると理解することです。 副次的な処理はまったくありません。API のエンドポイントを呼び出すこともなく、驚くようなことも隠されていません。 レデューサーは、state と action を受け取って新しい state を返すだけの純粋な関数です。

Redux のもう一つの重要な原則は「`state` は読み取り専用である」ことです。 言い換えれば、`reducer` 関数は**常に** `state` の新しいコピーを返す必要があり、state を直接変更することは決して許されません。 Redux では状態の不変性を強制してはいませんが、レデューサー関数のコードではプログラマーが状態の不変性を強制する必要があります。 これについてはこのあとのチャレンジで練習します。

# --instructions--

コードエディターに、以前に紹介した例と、`reducer` 関数の冒頭部分があります。 `reducer` 関数の本体を入力して、タイプ `'LOGIN'` のアクションを受け取った場合に `login` が `true` に設定された state オブジェクトを返すようにしてください。 それ以外の場合は、現在の `state` を返してください。 現在の `state` とディスパッチされた `action` がレデューサーに渡されるため、`action.type` を使用してアクションタイプに直接アクセスすることができます。

# --hints--

関数 `loginAction` の呼び出しで、type プロパティが文字列 `LOGIN` に設定されたオブジェクトを返します。

```js
assert(loginAction().type === 'LOGIN');
```

オブジェクトのプロパティ `login` を `false` に設定してストアを初期化します。

```js
assert(store.getState().login === false);
```

`loginAction` のディスパッチで、ストアの state の `login` プロパティを `true` に更新します。

```js
assert(
  (function () {
    const initialState = store.getState();
    store.dispatch(loginAction());
    const afterState = store.getState();
    return initialState.login === false && afterState.login === true;
  })()
);
```

アクションがタイプ `LOGIN` でない場合、ストアは現在の state を返します。

```js
assert(
  (function () {
    store.dispatch({ type: '__TEST__ACTION__' });
    let afterTest = store.getState();
    return typeof afterTest === 'object' && afterTest.hasOwnProperty('login');
  })()
);
```

# --seed--

## --seed-contents--

```js
const defaultState = {
  login: false
};

const reducer = (state = defaultState, action) => {
  // Change code below this line

  // Change code above this line
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};
```

# --solutions--

```js
const defaultState = {
  login: false
};

const reducer = (state = defaultState, action) => {

  if (action.type === 'LOGIN') {
    return {login: true}
  }

  else {
    return state
  }

};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};
```
