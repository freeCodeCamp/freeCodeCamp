---
id: 5a24c314108439a4d4036149
title: ローカルの state を Redux に抽出する
challengeType: 6
forumTopicId: 301428
dashedName: extract-local-state-into-redux
---

# --description--

完成までもう少しです！ Redux が React メッセージアプリの状態管理を制御できるように、すべての Redux コードを記述しました。 Redux に接続したので、`Presentational` コンポーネントから Redux に状態管理を抽出する必要があります。 現在は Redux に接続した状態ですが、`Presentational` コンポーネントの中で状態をローカルに処理しています。

# --instructions--

`Presentational` コンポーネントで、まず、ローカルの `state` にある `messages` プロパティを削除してください。 これらのメッセージは Redux によって管理されます。 次に、`submitMessage()` メソッドを変更して `this.props` から `submitNewMessage()` をディスパッチするようにし、ローカルの `state` から入力された現在のメッセージを引数として渡してください。 ローカルの state から `messages` を削除したので、`this.setState()` 呼び出しからも `messages` プロパティを削除してください。 最後に、`render()` メソッドを変更して、`state` からではなく `props` から受信したメッセージをマップしてください。

以上の変更を加えると、Redux によって状態が管理されること以外、アプリの動作は引き続き同じです。 この例では、コンポーネントでローカルの `state` を維持できることも示しています。その場合、コンポーネントは引き続きユーザー入力を自身の `state` でローカルに追跡します。 Redux によって、React の上に便利な状態管理フレームワークが提供されることがわかります。 最初は React のローカルの state のみを使用して同じ結果を達成しました。シンプルなアプリであれば通常はそれが可能です。 しかし、アプリの規模が大きくなり複雑になるにつれて、状態管理もまた大きく複雑になります。そうした問題を Redux が解決してくれます。

# --hints--

`AppWrapper` をページにレンダーします。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(AppWrapper));
    return mockedComponent.find('AppWrapper').length === 1;
  })()
);
```

`Presentational` コンポーネントをページにレンダーします。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(AppWrapper));
    return mockedComponent.find('Presentational').length === 1;
  })()
);
```

`Presentational` コンポーネントで、`h2`、`input`、`button`、`ul` の各要素をレンダーします。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(AppWrapper));
    const PresentationalComponent = mockedComponent.find('Presentational');
    return (
      PresentationalComponent.find('div').length === 1 &&
      PresentationalComponent.find('h2').length === 1 &&
      PresentationalComponent.find('button').length === 1 &&
      PresentationalComponent.find('ul').length === 1
    );
  })()
);
```

`Presentational` コンポーネントで、Redux ストアから `messages` を prop として受け取ります。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(AppWrapper));
    const PresentationalComponent = mockedComponent.find('Presentational');
    const props = PresentationalComponent.props();
    return Array.isArray(props.messages);
  })()
);
```

`Presentational` コンポーネントで、`submitMessage` アクションクリエイターを prop として受け取ります。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(AppWrapper));
    const PresentationalComponent = mockedComponent.find('Presentational');
    const props = PresentationalComponent.props();
    return typeof props.submitNewMessage === 'function';
  })()
);
```

`Presentational` コンポーネントの state に、空の文字列に初期化された 1 つのプロパティである `input` を含めます。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(AppWrapper));
    const PresentationalState = mockedComponent
      .find('Presentational')
      .instance().state;
    return (
      typeof PresentationalState.input === 'string' &&
      Object.keys(PresentationalState).length === 1
    );
  })()
);
```

`input` 要素への入力で、`Presentational` コンポーネントの state を更新します。

```js
async () => {
  const mockedComponent = Enzyme.mount(React.createElement(AppWrapper));
  const testValue = '__MOCK__INPUT__';
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 100));
  const causeChange = (c, v) =>
    c.find('input').simulate('change', { target: { value: v } });
  let initialInput = mockedComponent.find('Presentational').find('input');
  const changed = () => {
    causeChange(mockedComponent, testValue);
    return waitForIt(() => mockedComponent);
  };
  const updated = await changed();
  const updatedInput = updated.find('Presentational').find('input');
  assert(
    initialInput.props().value === '' &&
      updatedInput.props().value === '__MOCK__INPUT__'
  );
};
```

`Presentational` コンポーネントでの `submitMessage` のディスパッチで、Redux ストアを更新し、ローカルの state の入力をクリアします。

```js
async () => {
  const mockedComponent = Enzyme.mount(React.createElement(AppWrapper));
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 100));
  let beforeProps = mockedComponent.find('Presentational').props();
  const testValue = '__TEST__EVENT__INPUT__';
  const causeChange = (c, v) =>
    c.find('input').simulate('change', { target: { value: v } });
  const changed = () => {
    causeChange(mockedComponent, testValue);
    return waitForIt(() => mockedComponent);
  };
  const clickButton = () => {
    mockedComponent.find('button').simulate('click');
    return waitForIt(() => mockedComponent);
  };
  const afterChange = await changed();
  const afterChangeInput = afterChange.find('input').props().value;
  const afterClick = await clickButton();
  const afterProps = mockedComponent.find('Presentational').props();
  assert(
    beforeProps.messages.length === 0 &&
      afterChangeInput === testValue &&
      afterProps.messages.pop() === testValue &&
      afterClick.find('input').props().value === ''
  );
};
```

`Presentational` コンポーネントで、Redux ストアからの `messages` をレンダーします。

```js
async () => {
  const mockedComponent = Enzyme.mount(React.createElement(AppWrapper));
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 100));
  let beforeProps = mockedComponent.find('Presentational').props();
  const testValue = '__TEST__EVENT__INPUT__';
  const causeChange = (c, v) =>
    c.find('input').simulate('change', { target: { value: v } });
  const changed = () => {
    causeChange(mockedComponent, testValue);
    return waitForIt(() => mockedComponent);
  };
  const clickButton = () => {
    mockedComponent.find('button').simulate('click');
    return waitForIt(() => mockedComponent);
  };
  const afterChange = await changed();
  const afterChangeInput = afterChange.find('input').props().value;
  const afterClick = await clickButton();
  const afterProps = mockedComponent.find('Presentational').props();
  assert(
    beforeProps.messages.length === 0 &&
      afterChangeInput === testValue &&
      afterProps.messages.pop() === testValue &&
      afterClick.find('input').props().value === '' &&
      afterClick.find('ul').childAt(0).text() === testValue
  );
};
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
    message: message
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
const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

// Change code below this line
class Presentational extends React.Component {
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
    this.setState((state) => ({
      input: '',
      messages: state.messages.concat(state.input)
    }));
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
// Change code above this line

const mapStateToProps = (state) => {
  return {messages: state}
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message))
    }
  }
};

const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

class AppWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container/>
      </Provider>
    );
  }
};
```

# --solutions--

```jsx
// Redux:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message: message
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
const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

// Change code below this line
class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
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
    this.props.submitNewMessage(this.state.input);
    this.setState({
      input: ''
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
          {this.props.messages.map( (message, idx) => {
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
// Change code above this line

const mapStateToProps = (state) => {
  return {messages: state}
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message))
    }
  }
};

const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

class AppWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container/>
      </Provider>
    );
  }
};
```
