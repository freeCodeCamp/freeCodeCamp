---
id: 5a24c314108439a4d4036153
title: ストアリスナーを登録する
challengeType: 6
forumTopicId: 301446
dashedName: register-a-store-listener
---

# --description--

Redux `store` オブジェクトでアクセスできるもう一つのメソッドは `store.subscribe()` です。 このメソッドでは、ストアにリスナー関数をサブスクライブすることができます。リスナーは、ストアに対してアクションがディスパッチされるたびに呼び出されます。 このメソッドの簡単な用法の一つとして、アクションを受信してストアを更新するたびに、単にメッセージを記録する関数をストアにサブスクライブすることができます。

# --instructions--

ストアがアクションを受信するたびにグローバル変数 `count` を 1 増やすコールバック関数を記述し、この関数を `store.subscribe()` メソッドに渡してください。 アクションオブジェクトを直接渡すたびに、`store.dispatch()` が 3 回連続して呼び出されることがわかります。 アクションがディスパッチされる合間のコンソール出力を表示して、更新が行われる様子を確認してください。

# --hints--

ストアでの `ADD` アクションのディスパッチで、state を `1` 増やします。

```js
assert(
  (function () {
    const initialState = store.getState();
    store.dispatch({ type: 'ADD' });
    const newState = store.getState();
    return newState === initialState + 1;
  })()
);
```

`store.subscribe` を使用してストアにリスナー関数をサブスクライブします。

```js
(getUserInput) => assert(getUserInput('index').match(/store\s*\.\s*subscribe\(/gm));
```

`store.subscribe` は関数を受け取ります。

```js
(getUserInput) => assert(getUserInput('index').match(/(\s*function\s*)|(\s*\(\s*\)\s*=>)/gm)) 
```

`store.subscribe` へのコールバックでも、ストアが更新されたときにグローバルの `count` 変数を 1 増やします。

```js
assert(store.getState() === count);
```

# --seed--

## --before-user-code--

```js
count = 0;
```

## --seed-contents--

```js
const ADD = 'ADD';

const reducer = (state = 0, action) => {
  switch(action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

// Global count variable:
let count = 0;

// Change code below this line

// Change code above this line

store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
```

# --solutions--

```js
const ADD = 'ADD';

const reducer = (state = 0, action) => {
  switch(action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);
 let count = 0;
// Change code below this line

store.subscribe( () =>
 {
 count++;
 }
);

// Change code above this line

store.dispatch({type: ADD});
store.dispatch({type: ADD});
store.dispatch({type: ADD});
```
