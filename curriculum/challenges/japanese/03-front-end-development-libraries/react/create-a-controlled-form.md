---
id: 5a24c314108439a4d4036179
title: 制御されたフォームを作成する
challengeType: 6
forumTopicId: 301384
dashedName: create-a-controlled-form
---

# --description--

前回のチャレンジで、React では `input` や `textarea` などの特定の要素について、その内部状態を制御できることを示しました。これらは制御されたコンポーネントになります。 このことは、通常の HTML `form` 要素を含む他のフォーム要素にも適用されます。

# --instructions--

submit ハンドラーを持つ空の `form` で設定された `MyForm` コンポーネントがあります。 submit ハンドラーはフォームの送信時に呼び出されます。

フォームを送信するボタンはすでに追加してあります。 その `type` は `submit` に設定されていて、フォームを制御するボタンであることを示しています。 `form` に `input` 要素を追加し、前回のチャレンジのように、その `value` と `onChange()` 属性を設定してください。 次に、`handleSubmit` メソッドで、コンポーネントの state プロパティ `submit` をローカルの `state` の現在の入力値に設定して、メソッドを完成させてください。

**注:** submit ハンドラーでは、デフォルトのフォーム送信動作が実行されてウェブページが更新されるのを防ぐために、`event.preventDefault()` を呼び出す必要もあります。 ここでは簡単のため、更新によるチャレンジコードのリセットを防ぐために、デフォルトの動作は無効になっています。

さらに、`form` の後に、コンポーネントの `state` の `submit` 値をレンダーする `h1` タグを作成してください。 これで、フォームに入力してボタンをクリックすると (または enter を押すと)、入力がページにレンダーされます。

# --hints--

`MyForm` から、`form` と `h1` タグを含む `div` 要素を返します。 フォームに `input` と `button` を含めます。

```js
assert(
  (() => {
    const mockedComponent = Enzyme.mount(React.createElement(MyForm));
    return (
      mockedComponent.find('div').children().find('form').length === 1 &&
      mockedComponent.find('div').children().find('h1').length === 1 &&
      mockedComponent.find('form').children().find('input').length === 1 &&
      mockedComponent.find('form').children().find('button').length === 1
    );
  })()
);
```

`MyForm` の state を初期化し、`input` と `submit` の両方のプロパティを空文字列に設定します。

```js
assert(
  Enzyme.mount(React.createElement(MyForm)).state('input') === '' &&
    Enzyme.mount(React.createElement(MyForm)).state('submit') === ''
);
```

`input` 要素への入力で、コンポーネントの state の `input` プロパティを更新します。

```js
(() => {
  const mockedComponent = Enzyme.mount(React.createElement(MyForm));
  const _1 = () => {
    mockedComponent.setState({ input: '' });
    return mockedComponent.state('input');
  };
  const _2 = () => {
    mockedComponent
      .find('input')
      .simulate('change', { target: { value: 'TestInput' } });
    return {
      state: mockedComponent.state('input'),
      inputVal: mockedComponent.find('input').props().value
    };
  };
  const before = _1();
  const after = _2();
  assert(
    before === '' &&
      after.state === 'TestInput' &&
      after.inputVal === 'TestInput'
  );
})();
```

フォームの送信で、`handleSubmit` を実行し、state の `submit` プロパティを現在の入力と等しくなるように設定します。

```js
(() => {
  const mockedComponent = Enzyme.mount(React.createElement(MyForm));
  const _1 = () => {
    mockedComponent.setState({ input: '' });
    mockedComponent.setState({ submit: '' });
    mockedComponent
      .find('input')
      .simulate('change', { target: { value: 'SubmitInput' } });
    return mockedComponent.state('submit');
  };
  const _2 = () => {
    mockedComponent.find('form').simulate('submit');
    return mockedComponent.state('submit');
  };
  const before = _1();
  const after = _2();
  assert(before === '' && after === 'SubmitInput');
})();
```

`handleSubmit` から `event.preventDefault` を呼び出します。

```js
assert(
  __helpers.isCalledWithNoArgs(
    'event.preventDefault',
    MyForm.prototype.handleSubmit.toString()
  )
);
```

`h1` 見出し要素で、コンポーネントの state の `submit` フィールドの値をレンダーします。

```js
(() => {
  const mockedComponent = Enzyme.mount(React.createElement(MyForm));
  const _1 = () => {
    mockedComponent.setState({ input: '' });
    mockedComponent.setState({ submit: '' });
    mockedComponent
      .find('input')
      .simulate('change', { target: { value: 'TestInput' } });
    return mockedComponent.find('h1').text();
  };
  const _2 = () => {
    mockedComponent.find('form').simulate('submit');
    return mockedComponent.find('h1').text();
  };
  const before = _1();
  const after = _2();
  assert(before === '' && after === 'TestInput');
})();
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<MyForm />, document.getElementById('root'));
```

## --seed-contents--

```jsx
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit(event) {
    // Change code below this line

    // Change code above this line
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {/* Change code below this line */}

          {/* Change code above this line */}
          <button type='submit'>Submit!</button>
        </form>
        {/* Change code below this line */}

        {/* Change code above this line */}
      </div>
    );
  }
}
```

# --solutions--

```jsx
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState(state => ({
      submit: state.input
    }));
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.input} onChange={this.handleChange} />
          <button type='submit'>Submit!</button>
        </form>
        <h1>{this.state.submit}</h1>
      </div>
    );
  }
}
```
