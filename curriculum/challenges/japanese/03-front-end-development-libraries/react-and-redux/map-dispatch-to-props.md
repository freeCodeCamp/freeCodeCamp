---
id: 5a24c314108439a4d4036146
title: dispatch を props にマップする
challengeType: 6
forumTopicId: 301432
dashedName: map-dispatch-to-props
---

# --description--

`mapDispatchToProps()` は、React コンポーネントに特定のアクションクリエイターを提供するために使用する関数で、アクションクリエイターから Redux ストアに対してアクションをディスパッチできるようにします。 この関数は、前回のチャレンジで記述した `mapStateToProps()` 関数と構造が似ていますが、 ディスパッチアクションをプロパティ名にマップするオブジェクトを返し、それがコンポーネントの `props` になります。 ただし、`state` の一部分を返すのではなく、各プロパティから、アクションクリエイターと関連するアクションデータ (存在する場合) を使用して `dispatch` を呼び出す関数を返します。 この `dispatch` は、`state` を `mapStateToProps()` に渡したのとまったく同じように、関数を定義するときにパラメーターとして `mapDispatchToProps()` に渡されます。そのため、dispatch にアクセスすることができます。 バックグラウンドでは、React Redux が `mapDispatchToProps()` でこれらのディスパッチを実行するために、Redux の `store.dispatch()` を使用しています。 これは、`state` にマッピングされたコンポーネントに対して `store.subscribe()` を使用する方法に似ています。

たとえば、`loginUser()` というアクションクリエイターがあり、アクションペイロードとして `username` を受け取るとします。 このアクションクリエイターの `mapDispatchToProps()` から返されるオブジェクトは次のようになります。

```jsx
{
  submitLoginUser: function(username) {
    dispatch(loginUser(username));
  }
}
```

# --instructions--

コードエディターに `addMessage()` というアクションクリエイターが用意されています。 `dispatch` を引数として受け取り、オブジェクトを返す、関数 `mapDispatchToProps()` を記述してください。 オブジェクトには、dispatch 関数に設定されたプロパティ `submitNewMessage` を持たせます。この関数は、`addMessage()` をディスパッチするときに新しいメッセージを追加するためのパラメーターを受け取ります。

# --hints--

`addMessage` から、`type` と `message` というキーを持つオブジェクトを返します。

```js
assert(
  (function () {
    const addMessageTest = addMessage();
    return (
      addMessageTest.hasOwnProperty('type') &&
      addMessageTest.hasOwnProperty('message')
    );
  })()
);
```

`mapDispatchToProps` は関数である必要があります。

```js
assert(typeof mapDispatchToProps === 'function');
```

`mapDispatchToProps` はオブジェクトを返す必要があります。

```js
assert(typeof mapDispatchToProps() === 'object');
```

`mapDispatchToProps` からの `submitNewMessage` による `addMessage` のディスパッチで、dispatch 関数にメッセージを返します。

```js
assert(
  (function () {
    let testAction;
    const dispatch = (fn) => {
      testAction = fn;
    };
    let dispatchFn = mapDispatchToProps(dispatch);
    dispatchFn.submitNewMessage('__TEST__MESSAGE__');
    return (
      testAction.type === 'ADD' && testAction.message === '__TEST__MESSAGE__'
    );
  })()
);
```

# --seed--

## --seed-contents--

```jsx
const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

// Change code below this line
```

# --solutions--

```jsx
const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

// Change code below this line

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: function(message) {
      dispatch(addMessage(message));
    }
  }
};
```
