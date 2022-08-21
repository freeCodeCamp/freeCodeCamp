---
id: 5a24c314108439a4d4036152
title: アクションタイプに const を使用する
challengeType: 6
forumTopicId: 301450
dashedName: use-const-for-action-types
---

# --description--

Redux では、アクションタイプを読み取り専用の定数として割り当て、必要なすべての場所でそれらの定数を参照するという作業がよく行われます。 作業中のコードをリファクタリングして、アクションタイプを `const` 宣言として記述することができます。

# --instructions--

`LOGIN` および `LOGOUT` を `const` 値として宣言し、それぞれに文字列 `'LOGIN'` および `'LOGOUT'` を割り当ててください。 次に、`authReducer()` とアクションクリエイターを編集して、文字列値ではなくそれらの定数を参照するようにしてください。

**注:** 一般に、定数はすべて大文字で記述することが慣習になっていて、Redux でも標準的になっています。

# --hints--

関数 `loginUser` の呼び出しで、`type` プロパティを文字列 `LOGIN` に設定したオブジェクトを返します。

```js
assert(loginUser().type === 'LOGIN');
```

関数 `logoutUser` の呼び出しで、`type` プロパティを文字列 `LOGOUT` に設定したオブジェクトを返します。

```js
assert(logoutUser().type === 'LOGOUT');
```

オブジェクトのプロパティ `login` を `false` に設定してストアを初期化します。

```js
assert(store.getState().authenticated === false);
```

`loginUser` のディスパッチで、ストアの state の `login` プロパティを `true` に更新します。

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

`logoutUser` のディスパッチで、ストアの state の `login` プロパティを `false` に更新します。

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

`authReducer` 関数で、 switch ステートメントを使用して複数のアクションタイプを処理します。

```js
(getUserInput) =>
  assert(
    (function () {
      return (
        typeof authReducer === 'function' &&
        getUserInput('index').toString().includes('switch') &&
        getUserInput('index').toString().includes('case') &&
        getUserInput('index').toString().includes('default')
      );
    })()
  );
```

`LOGIN` および `LOGOUT` を `const` 値として宣言し、`LOGIN` および `LOGOUT` という文字列を割り当てます。

```js
const noWhiteSpace = __helpers.removeWhiteSpace(code);
assert(LOGIN === 'LOGIN' && LOGOUT === 'LOGOUT')
assert(noWhiteSpace.includes('const'))
```

アクションクリエイターとレデューサーで、`LOGIN` 定数と `LOGOUT` 定数を参照します。

```js
(getUserInput) =>
  assert(
    (function () {
      const noWhiteSpace = __helpers.removeWhiteSpace(
        getUserInput('index').toString()
      );
      return (
        noWhiteSpace.includes('caseLOGIN:') &&
        noWhiteSpace.includes('caseLOGOUT:') &&
        noWhiteSpace.includes('type:LOGIN') &&
        noWhiteSpace.includes('type:LOGOUT')
      );
    })()
  );
```

# --seed--

## --seed-contents--

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

# --solutions--

```js
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {

  switch (action.type) {

    case LOGIN:
      return {
        authenticated: true
      }

    case LOGOUT:
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
    type: LOGIN
  }
};

const logoutUser = () => {
  return {
    type: LOGOUT
  }
};
```
