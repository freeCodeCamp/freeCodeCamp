---
id: 5a24c314108439a4d4036151
title: Switch ステートメントを使用して複数のアクションを処理する
challengeType: 6
forumTopicId: 301449
dashedName: use-a-switch-statement-to-handle-multiple-actions
---

# --description--

Redux ストアに、複数のアクションタイプを処理する方法を指示することができます。 たとえば、Redux ストアでユーザー認証を管理していて、 ユーザーがログインしているときとログアウトしているときの状態を表現する必要があるとします。 それには、プロパティ `authenticated` を持つ単一の state オブジェクトを使用して状態を表現します。 また、アクションオブジェクトと一緒に、ユーザーログインとユーザーログアウトに対応したアクションを作成するアクションクリエイターも必要です。

# --instructions--

コードエディターに、ストア、アクション、そしてアクションクリエイターが用意されています。 複数の認証アクションを処理するように `reducer` 関数を記述してください。 `reducer` で JavaScript の `switch` ステートメントを使用して、さまざまなアクションイベントに応答してください。 これは Redux のレデューサーを記述する際の標準的なパターンになります。 switch ステートメントでは、`action.type` に応じて処理を切り替え、適切な認証状態を返してください。

**注:** ここでは状態の不変性については心配しないでください。なぜなら、この例では小さく単純だからです。 アクションごとに、たとえば `{authenticated: true}` のように新しいオブジェクトを返すことができます。 また、switch ステートメントで `default` の case を忘れずに記述し、現在の `state` を返してください。 これが重要な理由は、アプリに複数のレデューサーを記述すると、たとえアクションがそのレデューサーに関連したものでなくても、アクションがディスパッチされるといつでもそれらのレデューサーがすべて実行されるからです。 そのような場合は、必ず現在の `state` を返してください。

# --hints--

関数 `loginUser` の呼び出しで、type プロパティを文字列 `LOGIN` に設定したオブジェクトを返します。

```js
assert(loginUser().type === 'LOGIN');
```

関数 `logoutUser` の呼び出しで、type プロパティを文字列 `LOGOUT` に設定したオブジェクトを返します。

```js
assert(logoutUser().type === 'LOGOUT');
```

オブジェクトの `authenticated` プロパティを `false` に設定してストアを初期化します。

```js
assert(store.getState().authenticated === false);
```

`loginUser` のディスパッチで、ストアの state の `authenticated` プロパティを `true` に更新します。

```js
assert(
  (function () {
    const initialState = store.getState();
    store.dispatch(loginUser());
    const afterLogin = store.getState();
    return (
      initialState.authenticated === false && afterLogin.authenticated === true
    );
  })()
);
```

`logoutUser` のディスパッチで、ストアの state の `authenticated` プロパティを `false` に更新します。

```js
assert(
  (function () {
    store.dispatch(loginUser());
    const loggedIn = store.getState();
    store.dispatch(logoutUser());
    const afterLogout = store.getState();
    return (
      loggedIn.authenticated === true && afterLogout.authenticated === false
    );
  })()
);
```

`authReducer` 関数で、`switch` ステートメントを使用して複数のアクションタイプを処理します。

```js
(getUserInput) =>
  assert(
    getUserInput('index').toString().includes('switch') &&
      getUserInput('index').toString().includes('case') &&
      getUserInput('index').toString().includes('default')
  );
```

# --seed--

## --seed-contents--

```js
const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {
  // Change code below this line

  // Change code above this line
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: 'LOGIN'
  }
};

const logoutUser = () => {
  return {
    type: 'LOGOUT'
  }
};
```

# --solutions--

```js
const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {

  switch (action.type) {

    case 'LOGIN':
      return {
        authenticated: true
      }

    case 'LOGOUT':
      return {
        authenticated: false
      }

    default:
      return state;

  }

};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: 'LOGIN'
  }
};

const logoutUser = () => {
  return {
    type: 'LOGOUT'
  }
};
```
