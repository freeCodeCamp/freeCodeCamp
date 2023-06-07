---
id: 5a24c314108439a4d4036187
title: 条件付きレンダーに三項式を使用する
challengeType: 6
forumTopicId: 301414
dashedName: use-a-ternary-expression-for-conditional-rendering
---

# --description--

動的レンダーの手法の話に移る前に、組み込みの JavaScript 条件である<dfn>三項演算子</dfn>を使用して必要なものをレンダーする方法を最後に紹介します。 三項演算子は JavaScript の `if/else` ステートメントの省略形としてよく利用されます。 これらは従来の `if/else` ステートメントほど堅牢ではありませんが、React 開発者の間では非常に人気があります。 その理由の一つは、JSX のコンパイルの仕組み上、`if/else` ステートメントを JSX コードに直接挿入できないためです。 今までのチャレンジでこのことに気づいていたかもしれませんが、`if/else` ステートメントが必要な場合は常に `return` ステートメントの*外側*にありました。 JSX の中で条件付きロジックを実装したい場合に、三項式は代わりの手段としてとても便利です。 三項演算子には 3 つのパートがありますが、複数の三項式を組み合わせることもできます。 基本的な構文は次のとおりです。

```jsx
condition ? expressionIfTrue : expressionIfFalse;
```

# --instructions--

コードエディターに 3 つの定数があり、`CheckUserAge` コンポーネントの `render()` メソッドの中で定義されています。 これらは `buttonOne`、`buttonTwo`、`buttonThree` という名前で、 ボタン要素を表す単純な JSX 式がそれぞれに割り当てられています。 まず、`CheckUserAge` の state を `input` と `userAge` で初期化し、両方に空の文字列の値を設定してください。

コンポーネントから情報がページにレンダーされると、ユーザーがそれらの情報とやり取りする手段が必要になります。 コンポーネントの `return` ステートメントの中で、次のロジックを実装する三項式を設定してください。ページが初めて読み込まれるときに、送信ボタン `buttonOne` をページにレンダーしてください。 次に、ユーザーが自分の年齢を入力してボタンをクリックしたときに、年齢に基づいて異なるボタンをレンダーしてください。 ユーザーが `18` より小さい数字を入力した場合は、`buttonThree` をレンダーしてください。 ユーザーが `18` 以上の数字を入力した場合は、`buttonTwo` をレンダーしてください。

# --hints--

`CheckUserAge` コンポーネントを、単一の `input` 要素と単一の `button` 要素でレンダーします。

```js
assert(
  Enzyme.mount(React.createElement(CheckUserAge)).find('div').find('input')
    .length === 1 &&
    Enzyme.mount(React.createElement(CheckUserAge)).find('div').find('button')
      .length === 1
);
```

`CheckUserAge` コンポーネントの state を、`userAge` のプロパティと `input` のプロパティで初期化し、両方に空の文字列の値を設定します。

```js
assert(
  Enzyme.mount(React.createElement(CheckUserAge)).state().input === '' &&
    Enzyme.mount(React.createElement(CheckUserAge)).state().userAge === ''
);
```

`CheckUserAge` コンポーネントが初めて DOM にレンダーされるときは、`button` の内側のテキストを Submit にします。

```js
assert(
  Enzyme.mount(React.createElement(CheckUserAge)).find('button').text() ===
    'Submit'
);
```

`input` 要素に 18 よりも小さい数字が入力されて `button` がクリックされた場合は、`button` の内側のテキストを `You Shall Not Pass` にします。

```js
(() => {
  const mockedComponent = Enzyme.mount(React.createElement(CheckUserAge));
  const initialButton = mockedComponent.find('button').text();
  const enter3AndClickButton = () => {
    mockedComponent
      .find('input')
      .simulate('change', { target: { value: '3' } });
    mockedComponent.find('button').simulate('click');
    mockedComponent.update();
    return mockedComponent.find('button').text();
  };
  const enter17AndClickButton = () => {
    mockedComponent
      .find('input')
      .simulate('change', { target: { value: '17' } });
    mockedComponent.find('button').simulate('click');
    mockedComponent.update();
    return mockedComponent.find('button').text();
  };
  const userAge3 = enter3AndClickButton();
  const userAge17 = enter17AndClickButton();
  assert(
    initialButton === 'Submit' &&
      userAge3 === 'You Shall Not Pass' &&
      userAge17 === 'You Shall Not Pass'
  );
})();
```

`input` 要素に 18 以上の数字が入力されて `button` がクリックされた場合は、`button` の内側のテキストを `You May Enter` にします。

```js
(() => {
  const mockedComponent = Enzyme.mount(React.createElement(CheckUserAge));
  const initialButton = mockedComponent.find('button').text();
  const enter18AndClickButton = () => {
    mockedComponent
      .find('input')
      .simulate('change', { target: { value: '18' } });
    mockedComponent.find('button').simulate('click');
    mockedComponent.update();
    return mockedComponent.find('button').text();
  };
  const enter35AndClickButton = () => {
    mockedComponent
      .find('input')
      .simulate('change', { target: { value: '35' } });
    mockedComponent.find('button').simulate('click');
    mockedComponent.update();
    return mockedComponent.find('button').text();
  };
  const userAge18 = enter18AndClickButton();
  const userAge35 = enter35AndClickButton();
  assert(
    initialButton === 'Submit' &&
      userAge18 === 'You May Enter' &&
      userAge35 === 'You May Enter'
  );
})();
```

数字が送信されて再び `input` の値が変更されたら、`button` を `Submit` の読み取りに戻します。

```js
(() => {
  const mockedComponent = Enzyme.mount(React.createElement(CheckUserAge));
  const enter18AndClickButton = () => {
    mockedComponent
      .find('input')
      .simulate('change', { target: { value: '18' } });
    mockedComponent.find('button').simulate('click');
    mockedComponent.update();
    return mockedComponent.find('button').text();
  };
  const changeInputDontClickButton = () => {
    mockedComponent
      .find('input')
      .simulate('change', { target: { value: '5' } });
    mockedComponent.update();
    return mockedComponent.find('button').text();
  };
  const enter10AndClickButton = () => {
    mockedComponent
      .find('input')
      .simulate('change', { target: { value: '10' } });
    mockedComponent.find('button').simulate('click');
    mockedComponent.update();
    return mockedComponent.find('button').text();
  };
  const userAge18 = enter18AndClickButton();
  const changeInput1 = changeInputDontClickButton();
  const userAge10 = enter10AndClickButton();
  const changeInput2 = changeInputDontClickButton();
  assert(
    userAge18 === 'You May Enter' &&
      changeInput1 === 'Submit' &&
      userAge10 === 'You Shall Not Pass' &&
      changeInput2 === 'Submit'
  );
})();
```

コードに `if/else` ステートメントを含めないでください。

```js
assert(
  new RegExp(/(\s|;)if(\s|\()/).test(
    code
  ) === false
);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<CheckUserAge />, document.getElementById('root'));
```

## --seed-contents--

```jsx
const inputStyle = {
  width: 235,
  margin: 5
};

class CheckUserAge extends React.Component {
  constructor(props) {
    super(props);
    // Change code below this line

    // Change code above this line
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      input: e.target.value,
      userAge: ''
    });
  }
  submit() {
    this.setState(state => ({
      userAge: state.input
    }));
  }
  render() {
    const buttonOne = <button onClick={this.submit}>Submit</button>;
    const buttonTwo = <button>You May Enter</button>;
    const buttonThree = <button>You Shall Not Pass</button>;
    return (
      <div>
        <h3>Enter Your Age to Continue</h3>
        <input
          style={inputStyle}
          type='number'
          value={this.state.input}
          onChange={this.handleChange}
        />
        <br />
        {/* Change code below this line */}

        {/* Change code above this line */}
      </div>
    );
  }
}
```

# --solutions--

```jsx
const inputStyle = {
  width: 235,
  margin: 5
};

class CheckUserAge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userAge: '',
      input: ''
    };
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      input: e.target.value,
      userAge: ''
    });
  }
  submit() {
    this.setState(state => ({
      userAge: state.input
    }));
  }
  render() {
    const buttonOne = <button onClick={this.submit}>Submit</button>;
    const buttonTwo = <button>You May Enter</button>;
    const buttonThree = <button>You Shall Not Pass</button>;
    return (
      <div>
        <h3>Enter Your Age to Continue</h3>
        <input
          style={inputStyle}
          type='number'
          value={this.state.input}
          onChange={this.handleChange}
        />
        <br />
        {this.state.userAge === ''
          ? buttonOne
          : this.state.userAge >= 18
          ? buttonTwo
          : buttonThree}
      </div>
    );
  }
}
```
