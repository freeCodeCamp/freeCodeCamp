---
id: 5a24c314108439a4d4036154
title: 複数のレデューサーを結合する
challengeType: 6
forumTopicId: 301436
dashedName: combine-multiple-reducers
---

# --description--

アプリの状態が複雑になってくると、状態を複数の断片に分割したいと考えるかもしれません。 しかし、Redux の 1 つ目の原則である「すべてのアプリの状態はストア内の単一の状態オブジェクトに保持される」という原則を忘れてはいけません。 そこで、Redux では複雑な状態モデルの解決策として、レデューサーコンポジションを提供しています。 アプリケーションの状態のさまざまな部分を処理するために複数のレデューサーを定義し、それらのレデューサーを 1 つのルートレデューサーに結合します。 そして、そのルートレデューサーを Redux の `createStore()` メソッドに渡します。

複数のレデューサーを結合できるように、Redux には `combineReducers()` メソッドが用意されています。 このメソッドはオブジェクトを引数として受け取ります。オブジェクトでは、特定のレデューサー関数にキーを関連付けるプロパティを定義します。 Redux は、キーに付けられた名前を、state の関連付けられた部分を示す名前として使用します。

通常は、アプリケーションの状態の各部分について、それらを何らかの方法で区別できる場合、またはそれらが一意である場合には、それぞれに対応したレデューサーを作成することをお勧めします。 たとえば、ユーザー認証機能を備えたメモ作成アプリの場合は、あるレデューサーで認証を処理し、別のレデューサーでユーザーが送信しているテキストやメモを処理します。 このようなアプリケーションの `combineReducers()` メソッドは、たとえば次のように記述します。

```js
const rootReducer = Redux.combineReducers({
  auth: authenticationReducer,
  notes: notesReducer
});
```

これで、キー `notes` には、メモに関連付けられて `notesReducer` によって処理されるすべての状態が含まれます。 このようにして複数のレデューサーを構成し、より複雑なアプリケーション状態を管理することができます。 この例では、Redux ストアに保持される状態は、`auth` プロパティと `notes` プロパティを含む単一のオブジェクトになります。

# --instructions--

コードエディターに `counterReducer()` 関数と `authReducer()` 関数が Redux ストアとともに用意されています。 `Redux.combineReducers()` メソッドを使用して `rootReducer()` 関数の記述を完成させてください。 `counterReducer` を `count` というキーに割り当て、`authReducer` を `auth` というキーに割り当ててください。

# --hints--

`counterReducer` で、`state` を 1 増やすか 1 減らします。

```js
assert(
  (function () {
    const initialState = store.getState().count;
    store.dispatch({ type: INCREMENT });
    store.dispatch({ type: INCREMENT });
    const firstState = store.getState().count;
    store.dispatch({ type: DECREMENT });
    const secondState = store.getState().count;
    return firstState === initialState + 2 && secondState === firstState - 1;
  })()
);
```

`authReducer` で、`authenticated` の `state` を `true` と `false` の間で切り替えます。

```js
assert(
  (function () {
    store.dispatch({ type: LOGIN });
    const loggedIn = store.getState().auth.authenticated;
    store.dispatch({ type: LOGOUT });
    const loggedOut = store.getState().auth.authenticated;
    return loggedIn === true && loggedOut === false;
  })()
);
```

ストアの `state` に、数値を保持する `count` とオブジェクトを保持する `auth` の 2 つのキーを持たせます。 `auth` オブジェクトにはブール値を保持する `authenticated` プロパティを持たせます。

```js
assert(
  (function () {
    const state = store.getState();
    return (
      typeof state.auth === 'object' &&
      typeof state.auth.authenticated === 'boolean' &&
      typeof state.count === 'number'
    );
  })()
);
```

`rootReducer` を、`counterReducer` と `authReducer` を結合する関数にします。

```js
(getUserInput) =>
  assert(
    (function () {
      const noWhiteSpace = __helpers.removeWhiteSpace(getUserInput('index'));
      return (
        typeof rootReducer === 'function' &&
        noWhiteSpace.includes('Redux.combineReducers')
      );
    })()
  );
```

# --seed--

## --seed-contents--

```js
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const authReducer = (state = {authenticated: false}, action) => {
  switch(action.type) {
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

const rootReducer = // Define the root reducer here

const store = Redux.createStore(rootReducer);
```

# --solutions--

```js
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const authReducer = (state = {authenticated: false}, action) => {
  switch(action.type) {
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

const rootReducer = Redux.combineReducers({
  count: counterReducer,
  auth: authReducer
});

const store = Redux.createStore(rootReducer);
```
