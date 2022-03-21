---
id: 5a24c314108439a4d4036157
title: Redux を使用してカウンターを記述する
challengeType: 6
forumTopicId: 301453
dashedName: write-a-counter-with-redux
---

# --description--

以上で Redux の中心的な原則のすべてを説明しました。 アクションとアクションクリエイターの作成方法、Redux ストアの作成方法、ストアに対するアクションのディスパッチ方法、純粋なレデューサーによる state の更新の設計方法について説明しました。 さらに、レデューサーコンポジションによる複雑な状態管理の方法、非同期アクションの処理方法についても説明しました。 ここで紹介した例はごく単純なものですが、その概念は Redux の中心的な原則となっています。 以上のことを十分に理解すれば、Redux アプリを自分で構築する作業に取り掛かることができます。 以降のチャレンジでは `state` の不変性に関する詳細について触れますが、まずはこれまでに学んだすべてのことをここでおさらいしておきましょう。

# --instructions--

このレッスンでは、Redux を使用したシンプルなカウンターをゼロから実装します。 基本的な部分はコードエディターに用意してありますが、詳細は皆さんが記述する必要があります。 用意された名前を使用して、`incAction` と `decAction` というアクションクリエイター、`counterReducer()`、および `INCREMENT` と `DECREMENT` というアクションタイプを定義し、最後に Redux `store` を定義してください。 完成すると、`INCREMENT` または `DECREMENT` アクションをディスパッチして、`store` に保持されている state を 1 増やすまたは 1 減らすことができるようになります。 初めての Redux アプリを作成できるようがんばってください！

# --hints--

アクションクリエイター `incAction` から、`type` が `INCREMENT` という値に等しいアクションオブジェクトを返します。

```js
assert(incAction().type === INCREMENT);
```

アクションクリエイター `decAction` から、`type` が `DECREMENT` という値に等しいアクションオブジェクトを返します。

```js
assert(decAction().type === DECREMENT);
```

Redux ストアを、`state` を 0 として初期化します。

```js
assert(_store.getState() === 0);
```

Redux ストアでの `incAction` のディスパッチで、`state` を 1 だけ増やします。

```js
assert(
  (function () {
    const initialState = _store.getState();
    _store.dispatch(incAction());
    const incState = _store.getState();
    return initialState + 1 === incState;
  })()
);
```

Redux ストアでの `decAction` のディスパッチで、`state` を 1 だけ減らします。

```js
assert(
  (function () {
    const initialState = _store.getState();
    _store.dispatch(decAction());
    const decState = _store.getState();
    return initialState - 1 === decState;
  })()
);
```

`counterReducer` は関数である必要があります。

```js
assert(typeof counterReducer === 'function');
```

# --seed--

## --seed-contents--

```js
const INCREMENT = null; // Define a constant for increment action types
const DECREMENT = null; // Define a constant for decrement action types

const counterReducer = null; // Define the counter reducer which will increment or decrement the state based on the action it receives

const incAction = null; // Define an action creator for incrementing

const decAction = null; // Define an action creator for decrementing

const store = null; // Define the Redux store here, passing in your reducers
```

## --after-user-code--

```js
const _store = Redux.createStore(counterReducer)
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

const incAction = () => {
  return {
    type: INCREMENT
  }
};

const decAction = () => {
  return {
    type: DECREMENT
  }
};

const store = Redux.createStore(counterReducer);
```
