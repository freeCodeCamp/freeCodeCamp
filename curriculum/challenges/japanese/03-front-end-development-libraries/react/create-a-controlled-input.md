---
id: 5a24c314108439a4d4036178
title: 制御された入力を作成する
challengeType: 6
forumTopicId: 301385
dashedName: create-a-controlled-input
---

# --description--

アプリケーションによっては、レンダーされた UI と `state` との間でもっと複雑なやり取りをする場合があります。 たとえば、`input` や `textarea` などのテキスト入力のフォームコントロール要素は、DOM 内ではユーザータイプとして独自の状態を維持します。 React では、こうしたミュータブルな状態の扱いを React コンポーネントの `state` に移すことができます。 ユーザーの入力はアプリケーションの `state` の一部となり、その入力フィールドの値は React によって制御されます。 通常は、ユーザー入力が可能な入力フィールドを持つ React コンポーネントがある場合、それは制御された入力フォームになります。

# --instructions--

コードエディターに、制御された `input` 要素を作成するための `ControlledInput` というコンポーネントのスケルトンがあります。 コンポーネントの `state` は、空文字列を保持する `input` プロパティですでに初期化されています。 この値は、ユーザーが `input` フィールドに入力するテキストを表します。

まず、`event` というパラメーターを持つ `handleChange()` というメソッドを作成してください。 このメソッドが呼び出されると、`input` 要素からのテキスト文字列を含む `event` オブジェクトを受け取ります。 この文字列にはメソッドの中で `event.target.value` を使用してアクセスできます。 コンポーネントの `state` の `input` プロパティを、この新しい文字列に更新してください。

`render` メソッドで、`h4` タグの上に `input` 要素を作成してください。 コンポーネントの `state` の `input` プロパティと等しい `value` 属性を追加してください。 そして、`onChange()` イベントハンドラーを追加して `handleChange()` メソッドに設定してください。

入力ボックスに入力すると、そのテキストは、ローカルの `state` の `input` プロパティとして設定された `handleChange()` メソッドによって処理され、ページ上の `input` ボックスの値としてレンダーされます。 コンポーネントの `state` は、入力データに関して単一の信頼できる情報源になります。

最後に、必要なバインディングを忘れずにコンストラクターに追加してください。

# --hints--

`ControlledInput` から、`input` と `p` タグを含む `div` 要素を返します。

```js
assert(
  Enzyme.mount(React.createElement(ControlledInput))
    .find('div')
    .children()
    .find('input').length === 1 &&
    Enzyme.mount(React.createElement(ControlledInput))
      .find('div')
      .children()
      .find('p').length === 1
);
```

`input` プロパティを空文字列に設定して `ControlledInput` の state を初期化します。

```js
assert.strictEqual(
  Enzyme.mount(React.createElement(ControlledInput)).state('input'),
  ''
);
```

input 要素への入力で、state と input の value を更新し、`p` 要素でこの state を入力されたとおりにレンダーします。

```js
async () => {
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250));
  const mockedComponent = Enzyme.mount(React.createElement(ControlledInput));
  const _1 = () => {
    mockedComponent.setState({ input: '' });
    return waitForIt(() => mockedComponent.state('input'));
  };
  const _2 = () => {
    mockedComponent
      .find('input')
      .simulate('change', { target: { value: 'TestInput' } });
    return waitForIt(() => ({
      state: mockedComponent.state('input'),
      text: mockedComponent.find('p').text(),
      inputVal: mockedComponent.find('input').props().value
    }));
  };
  const before = await _1();
  const after = await _2();
  assert(
    before === '' &&
      after.state === 'TestInput' &&
      after.text === 'TestInput' &&
      after.inputVal === 'TestInput'
  );
};
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<ControlledInput />, document.getElementById('root'))
```

## --seed-contents--

```jsx
class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    // Change code below this line

    // Change code above this line
  }
  // Change code below this line

  // Change code above this line
  render() {
    return (
      <div>
        { /* Change code below this line */}

        { /* Change code above this line */}
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
};
```

# --solutions--

```jsx
class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  render() {
    return (
      <div>
        <input
          value={this.state.input}
          onChange={this.handleChange} />
        <h4>Controlled Input:</h4>

        <p>{this.state.input}</p>
      </div>
    );
  }
};
```
