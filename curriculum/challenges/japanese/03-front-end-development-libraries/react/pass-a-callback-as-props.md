---
id: 5a24c314108439a4d403617b
title: コールバックを props として渡す
challengeType: 6
forumTopicId: 301400
dashedName: pass-a-callback-as-props
---

# --description--

`state` を props として子コンポーネントに渡すことができますが、渡せるのはデータに限りません。 ハンドラー関数や、React コンポーネントで定義されている任意のメソッドを、子コンポーネントに渡すこともできます。 この方法で、子コンポーネントがその親コンポーネントとやり取りできるようになります。 メソッドについても、通常の prop とまったく同様に子に渡します。 メソッドには名前が割り当てられており、子コンポーネントの `this.props` の下でそのメソッド名にアクセスできます。

# --instructions--

コードエディターに 3 つのコンポーネントの概略が記されています。 `MyApp` コンポーネントは、`GetInput` および `RenderInput` という子コンポーネントをレンダーする親コンポーネントです。 `MyApp` の render メソッドに `GetInput` コンポーネントを追加し、`MyApp` の `state` から `inputValue` に割り当てられた `input` という prop を渡してください。 また、`handleChange` という prop を作成して、それに入力ハンドラー `handleChange` を渡してください。

次に、`MyApp` の render メソッドに `RenderInput` を追加し、`input` という prop を作成して、`state` からの `inputValue` を渡してください。 記述を終えると、`GetInput` コンポーネントの `input` フィールドに入力できるようになり、その親のハンドラーメソッドが props 経由で呼び出されます。 これにより、親の `state` の入力が更新され、両方の子要素に props として渡されます。 コンポーネント間でのデータの流れと、単一の信頼できる情報源が引き続き親コンポーネントの `state` のままになっていることを確かめてください。 この例は少し不自然かもしれませんが、React コンポーネント間でデータやコールバックをどのように受け渡すことができるのかを理解するのに役立ちます。

# --hints--

`MyApp` コンポーネントをレンダーします。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyApp));
    return mockedComponent.find('MyApp').length === 1;
  })()
);
```

`GetInput` コンポーネントをレンダーします。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyApp));
    return mockedComponent.find('GetInput').length === 1;
  })()
);
```

`RenderInput` コンポーネントをレンダーします。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyApp));
    return mockedComponent.find('RenderInput').length === 1;
  })()
);
```

`GetInput` コンポーネントで、`MyApp` の state プロパティ `inputValue` を props として受け取り、`MyApp` の state を変更する `input` 要素を含めます。

```js
async () => {
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250));
  const mockedComponent = Enzyme.mount(React.createElement(MyApp));
  const state_1 = () => {
    mockedComponent.setState({ inputValue: '' });
    return waitForIt(() => mockedComponent.state());
  };
  const state_2 = () => {
    mockedComponent
      .find('input')
      .simulate('change', { target: { value: 'TestInput' } });
    return waitForIt(() => mockedComponent.state());
  };
  const updated_1 = await state_1();
  const updated_2 = await state_2();
  assert(updated_1.inputValue === '' && updated_2.inputValue === 'TestInput');
};
```

`RenderInput` コンポーネントで、`MyApp` の state プロパティ `inputValue` を props として受け取ります。

```js
async () => {
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250));
  const mockedComponent = Enzyme.mount(React.createElement(MyApp));
  const state_1 = () => {
    mockedComponent.setState({ inputValue: 'TestName' });
    return waitForIt(() => mockedComponent);
  };
  const updated_1 = await state_1();
  assert(updated_1.find('p').text().includes('TestName'));
};
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<MyApp />, document.getElementById('root'))
```

## --seed-contents--

```jsx
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }
  render() {
    return (
       <div>
        { /* Change code below this line */ }

        { /* Change code above this line */ }
       </div>
    );
  }
};

class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input
          value={this.props.input}
          onChange={this.props.handleChange}/>
      </div>
    );
  }
};

class RenderInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Input Render:</h3>
        <p>{this.props.input}</p>
      </div>
    );
  }
};
```

# --solutions--

```jsx
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
  this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }
  render() {
    return (
       <div>
         <GetInput
           input={this.state.inputValue}
           handleChange={this.handleChange}/>
         <RenderInput
           input={this.state.inputValue}/>
       </div>
    );
  }
};

class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input
          value={this.props.input}
          onChange={this.props.handleChange}/>
      </div>
    );
  }
};

class RenderInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Input Render:</h3>
        <p>{this.props.input}</p>
      </div>
    );
  }
};
```
