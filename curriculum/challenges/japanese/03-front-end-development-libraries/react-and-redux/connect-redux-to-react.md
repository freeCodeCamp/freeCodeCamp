---
id: 5a24c314108439a4d4036147
title: Redux を React に接続する
challengeType: 6
forumTopicId: 301426
dashedName: connect-redux-to-react
---

# --description--

`mapStateToProps()` 関数と `mapDispatchToProps()` 関数の両方を記述したので、これらを使用して `state` をマップし、いずれかの React コンポーネントの `props` に `dispatch` することができます。 React Redux の `connect` メソッドはこの処理を実行できます。 このメソッドは、`mapStateToProps()` と `mapDispatchToProps()` の 2 つのオプション引数を受け取ります。 これらがオプションになっているのは、`state` へのアクセスのみが必要でアクションをディスパッチする必要がない場合や、その逆の場合があるためです。

このメソッドを使用するには、関数を引数として渡し、直後にその結果をコンポーネントとともに呼び出します。 この構文は少し変わっていて、次のようになります。

```js
connect(mapStateToProps, mapDispatchToProps)(MyComponent)
```

**注:** `connect` メソッドの引数の 1 つを省略したい場合は、代わりに `null` を渡します。

# --instructions--

コードエディターに `mapStateToProps()` 関数と `mapDispatchToProps()` 関数があり、`Presentational` という新しい React コンポーネントがあります。 `ReactRedux` グローバルオブジェクトの `connect` メソッドを使用して、このコンポーネントを Redux に接続し、直後に `Presentational` コンポーネントで呼び出してください。 その結果を、接続先のコンポーネントを表す `ConnectedComponent` という新しい `const` に割り当ててください。 これで Redux に接続します。 `connect` のいずれかの引数を `null` に変更して、テスト結果を確認してみてください。

# --hints--

`Presentational` コンポーネントをレンダーします。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(AppWrapper));
    return mockedComponent.find('Presentational').length === 1;
  })()
);
```

`Presentational` コンポーネントで、`connect` を介して prop `messages` を受け取ります。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(AppWrapper));
    const props = mockedComponent.find('Presentational').props();
    return props.messages === '__INITIAL__STATE__';
  })()
);
```

`Presentational` コンポーネントで、`connect` を介して prop `submitNewMessage` を受け取ります。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(AppWrapper));
    const props = mockedComponent.find('Presentational').props();
    return typeof props.submitNewMessage === 'function';
  })()
);
```

# --seed--

## --after-user-code--

```jsx
const store = Redux.createStore(
  (state = '__INITIAL__STATE__', action) => state
);
class AppWrapper extends React.Component {
  render() {
    return (
      <ReactRedux.Provider store = {store}>
        <ConnectedComponent/>
      </ReactRedux.Provider>
    );
  }
};
ReactDOM.render(<AppWrapper />, document.getElementById('root'))
```

## --seed-contents--

```jsx
const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

const mapStateToProps = (state) => {
  return {
    messages: state
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message));
    }
  }
};

class Presentational extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h3>This is a Presentational Component</h3>
  }
};

const connect = ReactRedux.connect;
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

const mapStateToProps = (state) => {
  return {
    messages: state
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message));
    }
  }
};

class Presentational extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h3>This is a Presentational Component</h3>
  }
};

const connect = ReactRedux.connect;
// Change code below this line

const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(Presentational);
```
