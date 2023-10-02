---
id: 5a24c314108439a4d4036159
title: 配列でスプレッド演算子を使用する
challengeType: 6
forumTopicId: 301452
dashedName: use-the-spread-operator-on-arrays
---

# --description--

ES6 以降において、Redux で状態の不変性を強制するための解決策の一つとなるのが、スプレッド演算子 `...` です。 スプレッド演算子にはさまざまな応用例があります。前のチャレンジで、既存の配列から新しい配列を生成することを説明しましたが、スプレッド演算子の一つはそうした操作に適しています。 この構文は比較的新しいものですが、一般的に使用されています。 たとえば、配列 `myArray` があり、次のように記述するとします。

```js
let newArray = [...myArray];
```

すると、`newArray` が `myArray` のクローンになります。 どちらの配列もまだメモリ内に個別に存在します。 `newArray.push(5)` のようなミューテーションを実行した場合でも、`myArray` は変更されません。 `...` によって、`myArray` 内の値が新しい配列に効果的に*展開 (スプレッド)* されます。 配列を複製して、新しい配列にさらに値を追加する場合は、たとえば `[...myArray, 'new value']` と記述できます。 この場合は、`myArray` 内の値と、最後の値として `new value` という文字列で構成された、新しい配列を返します。 スプレッド構文はこうした配列の構成で何度も使用できます。しかし重要なのは、配列のシャローコピーしか作成しないことです。 つまり、一次元配列に対するイミュータブルな配列操作しか提供しません。

# --instructions--

スプレッド演算子を使用して、To-do が追加されたときに state の新しいコピーを返してください。

# --hints--

Redux ストアが存在し、state を `["Do not mutate state!"]` にして初期化する必要があります。

```js
assert(
  (function () {
    const initialState = store.getState();
    return (
      Array.isArray(initialState) === true &&
      initialState[0] === 'Do not mutate state!'
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
    const expectedState = ['Do not mutate state!', '__TEST__TO__DO__'];
    return isFrozen && DeepEqual(finalState, expectedState);
  })()
);
```

スプレッド演算子を使用して新しい state を返します。

```js
(getUserInput) => assert(getUserInput('index').includes('...state'));
```

# --seed--

## --seed-contents--

```js
const immutableReducer = (state = ['Do not mutate state!'], action) => {
  switch(action.type) {
    case 'ADD_TO_DO':
      // Don't mutate state here or the tests will fail
      return
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: 'ADD_TO_DO',
    todo
  }
}

const store = Redux.createStore(immutableReducer);
```

# --solutions--

```js
const immutableReducer = (state = ['Do not mutate state!'], action) => {
  switch(action.type) {
    case 'ADD_TO_DO':
      return [
        ...state,
        action.todo
      ];
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: 'ADD_TO_DO',
    todo
  }
}

const store = Redux.createStore(immutableReducer);
```
