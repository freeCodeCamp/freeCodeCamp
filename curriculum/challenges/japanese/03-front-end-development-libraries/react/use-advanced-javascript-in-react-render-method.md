---
id: 5a24c314108439a4d4036183
title: React の render メソッドで高度な JavaScript を使用する
challengeType: 6
forumTopicId: 301415
dashedName: use-advanced-javascript-in-react-render-method
---

# --description--

以前のチャレンジでは、中括弧 `{ }` を使用して JavaScript コードを JSX コードに挿入する方法について説明しました。たとえば props へのアクセス、props の受け渡し、state へのアクセス、コードへのコメントの挿入、そして前回はコンポーネントのスタイル設定などの作業で使用しました。 これらはすべて JSX で JavaScript を使用するための一般的な用例ですが、これ以外の方法でも React コンポーネントで JavaScript コードを利用することができます。

中括弧の内側に***挿入せずに***、`return` ステートメントの前で、`render` メソッドで JavaScript を直接記述することもできます。 なぜなら、まだ JSX コードの中にないからです。 後で JSX コードの `return` ステートメントの*内側*で変数を使用したい場合は、変数名を中括弧の中に置きます。

# --instructions--

ここに示したコードの `render` メソッドにある配列には、1980 年代のマジックエイトボールという玩具で映し出される答えを表す 20 個のフレーズが格納されています。 ボタンの click イベントが `ask` メソッドにバインドされているため、ボタンがクリックされるたびに乱数が生成され、`randomIndex` として state に格納されます。 52 行目の文字列 `change me!` を削除し、`answer` 定数を割り当て直して、コンポーネントが更新されるたびにコードから `possibleAnswers` 配列の別のインデックスにランダムにアクセスするようにしてください。 最後に、`answer` 定数を `p` タグの中に挿入してください。

# --hints--

`MagicEightBall` コンポーネントが存在し、ページにレンダーする必要があります。

```js
assert.strictEqual(
  Enzyme.mount(React.createElement(MagicEightBall)).find('MagicEightBall')
    .length,
  1
);
```

`MagicEightBall` の 1 つ目の子を `input` 要素にします。

```js
assert.strictEqual(
  Enzyme.mount(React.createElement(MagicEightBall))
    .children()
    .childAt(0)
    .name(),
  'input'
);
```

`MagicEightBall` の 3 つ目の子を `button` 要素にします。

```js
assert.strictEqual(
  Enzyme.mount(React.createElement(MagicEightBall))
    .children()
    .childAt(2)
    .name(),
  'button'
);
```

`MagicEightBall` の state を、`userInput` のプロパティと `randomIndex` のプロパティで初期化し、両方に空の文字列の値を設定します。

```js
assert(
  Enzyme.mount(React.createElement(MagicEightBall)).state('randomIndex') ===
    '' &&
    Enzyme.mount(React.createElement(MagicEightBall)).state('userInput') === ''
);
```

`MagicEightBall` が初めて DOM にマウントされるときに、空の `p` 要素を返します。

```js
assert(
  Enzyme.mount(React.createElement(MagicEightBall)).find('p').length === 1 &&
    Enzyme.mount(React.createElement(MagicEightBall)).find('p').text() === ''
);
```

`input` 要素にテキストを入力してボタンをクリックすると、`MagicEightBall` コンポーネントは、`possibleAnswers` 配列からのランダムな要素を含む `p` 要素を返します。

```js
(() => {
  const comp = Enzyme.mount(React.createElement(MagicEightBall));
  const simulate = () => {
    comp.find('input').simulate('change', { target: { value: 'test?' } });
    comp.find('button').simulate('click');
  };
  const result = () => comp.find('p').text();
  const _1 = () => {
    simulate();
    return result();
  };
  const _2 = () => {
    simulate();
    return result();
  };
  const _3 = () => {
    simulate();
    return result();
  };
  const _4 = () => {
    simulate();
    return result();
  };
  const _5 = () => {
    simulate();
    return result();
  };
  const _6 = () => {
    simulate();
    return result();
  };
  const _7 = () => {
    simulate();
    return result();
  };
  const _8 = () => {
    simulate();
    return result();
  };
  const _9 = () => {
    simulate();
    return result();
  };
  const _10 = () => {
    simulate();
    return result();
  };
  const _1_val = _1();
  const _2_val = _2();
  const _3_val = _3();
  const _4_val = _4();
  const _5_val = _5();
  const _6_val = _6();
  const _7_val = _7();
  const _8_val = _8();
  const _9_val = _9();
  const _10_val = _10();
  const actualAnswers = [
    _1_val,
    _2_val,
    _3_val,
    _4_val,
    _5_val,
    _6_val,
    _7_val,
    _8_val,
    _9_val,
    _10_val
  ];
  const hasIndex = actualAnswers.filter(
    (answer, i) => possibleAnswers.indexOf(answer) !== -1
  );
  const notAllEqual = new Set(actualAnswers);
  assert(notAllEqual.size > 1 && hasIndex.length === 10);
})();
```

# --seed--

## --after-user-code--

```jsx
var possibleAnswers = [
  'It is certain',
  'It is decidedly so',
  'Without a doubt',
  'Yes, definitely',
  'You may rely on it',
  'As I see it, yes',
  'Outlook good',
  'Yes',
  'Signs point to yes',
  'Reply hazy try again',
  'Ask again later',
  'Better not tell you now',
  'Cannot predict now',
  'Concentrate and ask again',
  "Don't count on it",
  'My reply is no',
  'My sources say no',
  'Outlook not so good',
  'Very doubtful',
  'Most likely'
];
ReactDOM.render(<MagicEightBall />, document.getElementById('root'));
```

## --seed-contents--

```jsx
const inputStyle = {
  width: 235,
  margin: 5
};

class MagicEightBall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      randomIndex: ''
    };
    this.ask = this.ask.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  ask() {
    if (this.state.userInput) {
      this.setState({
        randomIndex: Math.floor(Math.random() * 20),
        userInput: ''
      });
    }
  }
  handleChange(event) {
    this.setState({
      userInput: event.target.value
    });
  }
  render() {
    const possibleAnswers = [
      'It is certain',
      'It is decidedly so',
      'Without a doubt',
      'Yes, definitely',
      'You may rely on it',
      'As I see it, yes',
      'Outlook good',
      'Yes',
      'Signs point to yes',
      'Reply hazy try again',
      'Ask again later',
      'Better not tell you now',
      'Cannot predict now',
      'Concentrate and ask again',
      "Don't count on it",
      'My reply is no',
      'My sources say no',
      'Most likely',
      'Outlook not so good',
      'Very doubtful'
    ];
    const answer = 'change me!'; // Change this line
    return (
      <div>
        <input
          type='text'
          value={this.state.userInput}
          onChange={this.handleChange}
          style={inputStyle}
        />
        <br />
        <button onClick={this.ask}>Ask the Magic Eight Ball!</button>
        <br />
        <h3>Answer:</h3>
        <p>
          {/* Change code below this line */}

          {/* Change code above this line */}
        </p>
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

class MagicEightBall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      randomIndex: ''
    };
    this.ask = this.ask.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  ask() {
    if (this.state.userInput) {
      this.setState({
        randomIndex: Math.floor(Math.random() * 20),
        userInput: ''
      });
    }
  }
  handleChange(event) {
    this.setState({
      userInput: event.target.value
    });
  }
  render() {
    const possibleAnswers = [
      'It is certain',
      'It is decidedly so',
      'Without a doubt',
      'Yes, definitely',
      'You may rely on it',
      'As I see it, yes',
      'Outlook good',
      'Yes',
      'Signs point to yes',
      'Reply hazy try again',
      'Ask again later',
      'Better not tell you now',
      'Cannot predict now',
      'Concentrate and ask again',
      "Don't count on it",
      'My reply is no',
      'My sources say no',
      'Outlook not so good',
      'Very doubtful',
      'Most likely'
    ];
    const answer = possibleAnswers[this.state.randomIndex];
    return (
      <div>
        <input
          type='text'
          value={this.state.userInput}
          onChange={this.handleChange}
          style={inputStyle}
        />
        <br />
        <button onClick={this.ask}>Ask the Magic Eight Ball!</button>
        <br />
        <h3>Answer:</h3>
        <p>{answer}</p>
      </div>
    );
  }
}
```
