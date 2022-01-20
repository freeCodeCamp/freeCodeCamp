---
id: 5a24c314108439a4d4036145
title: state を props にマップする
challengeType: 6
forumTopicId: 301433
dashedName: map-state-to-props
---

# --description--

`Provider` コンポーネントを使用すると、React コンポーネントに `state` と `dispatch` を提供することができます。ただし、どのような状態とアクションが必要なのかを正確に指定する必要があります。 そうすることで、各コンポーネントから必要な state にのみアクセスできるようになります。 これを実現するには、`mapStateToProps()` と `mapDispatchToProps()` の 2 つの関数を作成します。

これらの関数では、state のどの部分にアクセスしたいのか、そして、どのアクションクリエイターをディスパッチできるようにする必要があるのかを宣言します。 これらの関数を用意できたら、別のチャレンジで React Redux の `connect` メソッドを使用してそれらをコンポーネントに接続する方法を試すことができます。

**注:** バックグラウンドでは、React Redux は `store.subscribe()` メソッドを使用して `mapStateToProps()` を実装します。

# --instructions--

関数 `mapStateToProps()` を作成してください。 この関数は、引数として `state` を受け取り、その state を特定のプロパティ名にマップするオブジェクトを返します。 これらのプロパティには `props` を介してコンポーネントからアクセスできるようになります。 この例では、アプリケーションの state 全体を単一の配列に保持するため、コンポーネントにその state 全体を渡すことができます。 返されるオブジェクトにプロパティ `messages` を作成し、`state` に設定してください。

# --hints--

const `state` は空の配列である必要があります。

```js
assert(Array.isArray(state) && state.length === 0);
```

`mapStateToProps` は関数である必要があります。

```js
assert(typeof mapStateToProps === 'function');
```

`mapStateToProps` はオブジェクトを返す必要があります。

```js
assert(typeof mapStateToProps() === 'object');
```

配列を state として `mapStateToProps` に渡すと、`messages` のキーに割り当てられたこの配列を返します。

```js
assert(mapStateToProps(['messages']).messages.pop() === 'messages');
```

# --seed--

## --seed-contents--

```jsx
const state = [];

// Change code below this line
```

# --solutions--

```jsx
const state = [];

// Change code below this line

const mapStateToProps = (state) => {
  return {
    messages: state
  }
};
```
