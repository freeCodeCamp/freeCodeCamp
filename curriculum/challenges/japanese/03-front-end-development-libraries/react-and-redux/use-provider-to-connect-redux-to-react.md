---
id: 5a24c314108439a4d4036144
title: Provider を使用して Redux を React に接続する
challengeType: 6
forumTopicId: 301435
dashedName: use-provider-to-connect-redux-to-react
---

# --description--

前回のチャレンジでは、messages 配列を処理するための Redux ストアを作成し、新しいメッセージを追加するためのアクションを作成しました。 次のステップとして、React から Redux ストアにアクセスできるようにし、更新のディスパッチに必要なアクションにアクセスできるようにします。 React Redux にはこの作業に役立つ `react-redux` というパッケージが用意されています。

React Redux には、2 つの重要な機能を実行する、`Provider` と `connect` という小さな API があります。 `connect` については別のチャレンジで説明します。 `Provider` は、React アプリケーションをラップする React Redux のラッパーコンポーネントです。 このラッパーを使用すると、コンポーネントツリー全体にわたって Redux の `store` 関数と `dispatch` 関数にアクセスできます。 `Provider` は、Redux ストアとアプリケーションの子コンポーネントの 2 つのプロパティを受け取ります。 たとえば、App コンポーネントの `Provider` の定義は次のようになります。

```jsx
<Provider store={store}>
  <App/>
</Provider>
```

# --instructions--

コードエディターに、前のいくつかのチャレンジで紹介した Redux コードと React コードがあります。 これには Redux のストア、アクション、`DisplayMessages` コンポーネントが含まれています。 唯一の新しいコードは、一番下にある `AppWrapper` コンポーネントです。 この最上位のコンポーネントを使用して、`ReactRedux` から `Provider` をレンダーし、Redux ストアを prop として渡してください。 次に、`DisplayMessages` コンポーネントを子としてレンダーしてください。 作業が完了すると、React コンポーネントがページにレンダーされます。

**注:** React Redux はここではグローバル変数として利用できるので、Provider にはドット表記でアクセスできます。 エディター内のコードではこれを利用しており、定数 `Provider` に設定して、`AppWrapper` の render メソッドで使用できるようにしています。

# --hints--

`AppWrapper` をレンダーします。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(AppWrapper));
    return mockedComponent.find('AppWrapper').length === 1;
  })()
);
```

`Provider` ラッパーコンポーネントで、 `store` という prop を渡し、Redux ストアに等しく設定します。

```js
(getUserInput) =>
  assert(
    (function () {
      const mockedComponent = Enzyme.mount(React.createElement(AppWrapper));
      return __helpers
        .removeWhiteSpace(getUserInput('index'))
        .includes('<Providerstore={store}>');
    })()
  );
```

`DisplayMessages` を `AppWrapper` の子としてレンダーします。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(AppWrapper));
    return (
      mockedComponent.find('AppWrapper').find('DisplayMessages').length === 1
    );
  })()
);
```

`DisplayMessages` コンポーネントで、`h2`、`input`、`button`、`ul` の各要素をレンダーします。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(AppWrapper));
    return (
      mockedComponent.find('div').length === 1 &&
      mockedComponent.find('h2').length === 1 &&
      mockedComponent.find('button').length === 1 &&
      mockedComponent.find('ul').length === 1
    );
  })()
);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<AppWrapper />, document.getElementById('root'))
```

## --seed-contents--

```jsx
// Redux:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};



const store = Redux.createStore(messageReducer);

// React:

class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {  
    this.setState((state) => {
      const currentMessage = state.input;
      return {
        input: '',
        messages: state.messages.concat(currentMessage)
      };
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};

const Provider = ReactRedux.Provider;

class AppWrapper extends React.Component {
  // Render the Provider below this line

  // Change code above this line
};
```

# --solutions--

```jsx
// Redux:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};

const store = Redux.createStore(messageReducer);

// React:

class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
 this.handleChange = this.handleChange.bind(this);
 this.submitMessage = this.submitMessage.bind(this);
 }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {
    this.setState((state) => {
      const currentMessage = state.input;
      return {
        input: '',
        messages: state.messages.concat(currentMessage)
      };  
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};

const Provider = ReactRedux.Provider;

class AppWrapper extends React.Component {
  // Change code below this line
  render() {
    return (
      <Provider store = {store}>
        <DisplayMessages/>
      </Provider>
    );
  }
  // Change code above this line
};
```
