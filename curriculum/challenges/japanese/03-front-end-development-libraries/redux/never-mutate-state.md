---
id: 5a24c314108439a4d4036158
title: state を決してミューテートしない
challengeType: 6
forumTopicId: 301445
dashedName: never-mutate-state
---

# --description--

以降のチャレンジでは、Redux で重要な状態の不変性の原則を強制するいくつかの方法について説明します。 イミュータブルな state とは、state を直接変更せず、代わりに state の新しいコピーを返すことです。

Redux アプリの state のスナップショットを時間を追って取得すると、`state 1`、`state 2`、`state 3`、`state 4`、`...` のようなものが取得されます。各 state は最後の状態と似ている可能性がありますが、それぞれ別個のデータです。 この不変性こそが、皆さんが耳にしたことがあるかもしれないタイムトラベルデバッグのような機能を実現します。

Redux では、ストアやレデューサーで状態の不変性を積極的には強制していません。その責任はプログラマーが担います。 幸い、JavaScript (特にES6) では状態の不変性の強制に使用できる便利なツールがいくつか提供されており、`string` でも、`number` でも、 `array` でも、または `object` でも利用できます。 ちなみに文字列と数値はプリミティブな値であり、本質的に不変です。 別の言い方をすれば、3 は常に 3 です。 数値 3 の値を変更することはできません。 しかし、`array` や `object` はミュータブルです。 実際には、state はおそらく `array` または `object` で構成されます。これは、数多くの種類の情報を表す便利なデータ構造だからです。

# --instructions--

コードエディターに、To-do アイテムを管理する `store` と `reducer` があります。 リデューサーの `ADD_TO_DO` case を書き換えて、state の末尾に新しい To-do を追加してください。 標準的な JavaScript または ES6 を使用して、いくつかの方法でこのことを実行できます。 `action.todo` からのアイテムが末尾に追加された新しい配列を返す方法を見つけてください。

# --hints--

Redux ストアが存在し、コードエディターで state を `todos` 配列に初期化する必要があります。

```js
assert(
  (function () {
    const todos = [
      'Go to the store',
      'Clean the house',
      'Cook dinner',
      'Learn to code'
    ];
    const initialState = store.getState();
    return (
      Array.isArray(initialState) && initialState.join(',') === todos.join(',')
    );
  })()
);
```

`addToDo` と `immutableReducer` はどちらも関数である必要があります。

```js
assert(typeof addToDo === 'function' && typeof immutableReducer === 'function');
```

Redux ストアでのタイプ `ADD_TO_DO` のアクションのディスパッチで、`todo` アイテムを追加します。state をミューテートしてはいけません。

```js
assert(
  (function () {
    const initialState = store.getState();
    const isFrozen = DeepFreeze(initialState);
    store.dispatch(addToDo('__TEST__TO__DO__'));
    const finalState = store.getState();
    const expectedState = [
      'Go to the store',
      'Clean the house',
      'Cook dinner',
      'Learn to code',
      '__TEST__TO__DO__'
    ];
    return isFrozen && DeepEqual(finalState, expectedState);
  })()
);
```

# --seed--

## --seed-contents--

```js
const ADD_TO_DO = 'ADD_TO_DO';

// A list of strings representing tasks to do:
const todos = [
  'Go to the store',
  'Clean the house',
  'Cook dinner',
  'Learn to code',
];

const immutableReducer = (state = todos, action) => {
  switch(action.type) {
    case ADD_TO_DO:
      // Don't mutate state here or the tests will fail
      return
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: ADD_TO_DO,
    todo
  }
}

const store = Redux.createStore(immutableReducer);
```

# --solutions--

```js
const ADD_TO_DO = 'ADD_TO_DO';

const todos = [
  'Go to the store',
  'Clean the house',
  'Cook dinner',
  'Learn to code',
];

const immutableReducer = (state = todos, action) => {
  switch(action.type) {
    case ADD_TO_DO:
      return state.concat(action.todo);
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: ADD_TO_DO,
    todo
  }
}

const store = Redux.createStore(immutableReducer);
```
