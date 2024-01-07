---
id: 5a24c314108439a4d403615b
title: Object.assign を使用してオブジェクトをコピーする
challengeType: 6
forumTopicId: 301437
dashedName: copy-an-object-with-object-assign
---

# --description--

前のいくつかのチャレンジでは配列を扱いましたが、state が `object` の場合にも状態の不変性 (イミュータビリティ) を強制するのに役立つ方法があります。 オブジェクトを扱うのに便利なツールとして `Object.assign()` ユーティリティがあります。 `Object.assign()` は、ターゲットオブジェクトとソースオブジェクトを受け取り、ソースオブジェクトからターゲットオブジェクトにプロパティをマップします。 一致するプロパティはすべて、ソースオブジェクト内のプロパティによって上書きされます。 この方法はオブジェクトのシャローコピーを作成するのによく使用されます。1 つ目の引数として空のオブジェクトを渡し、その後にコピーしたいオブジェクトを渡します。 例:

```js
const newObject = Object.assign({}, obj1, obj2);
```

この例では、新しい `object` として `newObject` を作成します。このオブジェクトには、現在 `obj1` と `obj2` に存在するプロパティが含まれています。

# --instructions--

Redux の state とアクションが、`state` に対して `object` を処理するように変更されました。 `status` プロパティを文字列 `online` に設定する、タイプが `ONLINE` のアクションに対して、新しい `state` オブジェクトを返すようにコードを編集してください。 チャレンジを完了するには `Object.assign()` を使用してください。

# --hints--

Redux ストアが存在し、1 行目で宣言された `defaultState` オブジェクトに等しい state で初期化する必要があります。

```js
assert(
  (function () {
    const expectedState = {
      user: 'CamperBot',
      status: 'offline',
      friends: '732,982',
      community: 'freeCodeCamp'
    };
    const initialState = store.getState();
    return DeepEqual(expectedState, initialState);
  })()
);
```

`wakeUp` と `immutableReducer` はどちらも関数である必要があります。

```js
assert(typeof wakeUp === 'function' && typeof immutableReducer === 'function');
```

タイプ `ONLINE` のアクションのディスパッチで、state 内のプロパティ `status` を `online` に更新します。state をミューテートさせてはいけません。

```js
assert(
  (function () {
    const initialState = store.getState();
    const isFrozen = DeepFreeze(initialState);
    store.dispatch({ type: 'ONLINE' });
    const finalState = store.getState();
    const expectedState = {
      user: 'CamperBot',
      status: 'online',
      friends: '732,982',
      community: 'freeCodeCamp'
    };
    return isFrozen && DeepEqual(finalState, expectedState);
  })()
);
```

`Object.assign` を使用して新しい state を返します。

```js
(getUserInput) => assert(getUserInput('index').includes('Object.assign'));
```

# --seed--

## --seed-contents--

```js
const defaultState = {
  user: 'CamperBot',
  status: 'offline',
  friends: '732,982',
  community: 'freeCodeCamp'
};

const immutableReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'ONLINE':
      // Don't mutate state here or the tests will fail
      return
    default:
      return state;
  }
};

const wakeUp = () => {
  return {
    type: 'ONLINE'
  }
};

const store = Redux.createStore(immutableReducer);
```

# --solutions--

```js
const defaultState = {
  user: 'CamperBot',
  status: 'offline',
  friends: '732,982',
  community: 'freeCodeCamp'
};

const immutableReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'ONLINE':
      return Object.assign({}, state, {
        status: 'online'
      });
    default:
      return state;
  }
};

const wakeUp = () => {
  return {
    type: 'ONLINE'
  }
};

const store = Redux.createStore(immutableReducer);
```
