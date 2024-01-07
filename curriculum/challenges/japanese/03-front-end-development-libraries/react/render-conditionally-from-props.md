---
id: 5a24c314108439a4d4036188
title: props から条件付きでレンダーする
challengeType: 6
forumTopicId: 301405
dashedName: render-conditionally-from-props
---

# --description--

ここまで、いつ、何をレンダーするのかを条件で決める方法として、`if/else`、`&&`、および三項演算子 (`condition ? expressionIfTrue : expressionIfFalse`) を見てきました。 しかし、まだ説明していない重要なトピックが一つあります。それは、これらの概念はそのいずれかまたはすべてを、React の別の強力な機能である props と組み合わせることができる、ということです。 props を使用してコードを条件付きでレンダーすることは、React の開発者にとってはごく一般的な作業です。つまり、与えられた prop の値を利用することで、何を表示するかを自動的に決めることができます。

このチャレンジでは、props に基づいてレンダー処理を決定する子コンポーネントを設定します。 また、三項演算子も使用しますが、前のチャレンジで説明した他のいくつかの概念が、このチャレンジでも同じように役立つかもしれません。

# --instructions--

コードエディターに 2 つのコンポーネントがあって、一部が定義されています。1 つは `GameOfChance` という親で、もう 1 つは `Results` という子です。 これらを使用して、ユーザーがボタンを押して勝ったか負けたかを表示する簡単なゲームを作成します。

まず、実行のたびに異なる値をランダムに返す簡単な式が必要です。 これには `Math.random()` を使用できます。 このメソッドは、呼び出されるたびに `0` (含む) ～ `1` (含まない) の間の値を返します。 そのため、確率を 50/50 にする場合は `Math.random() >= .5` という式を使用します。 統計的に言えば、この式は 50% の確率で `true` を返し、残りの 50% の確率で `false` を返します。 render メソッドで、`null` の部分を前述の式に置き換えて変数宣言を完成させてください。

これで、コードでランダムな決定を行うのに使用できる式ができました。 次に、この式を実装する必要があります。 `Results` コンポーネントを `GameOfChance` の子としてレンダーし、`expression` を `fiftyFifty` という prop として渡してください。 `Results` コンポーネントで、`GameOfChance` から渡される `fiftyFifty` prop に基づいて、`You Win!` または `You Lose!` というテキストを使用して `h1` 要素をレンダーする三項式を記述してください。 最後に、`handleClick()` メソッドで、各ターンを正しくカウントし、ユーザーが自分のプレイした回数を確認できるようにしてください。 こうすることで、2 連勝または 2 連敗した場合にコンポーネントが実際に更新されたことをユーザーに伝えることもできます。

# --hints--

`GameOfChance` コンポーネントが存在し、ページにレンダーする必要があります。

```js
assert.strictEqual(
  Enzyme.mount(React.createElement(GameOfChance)).find('GameOfChance').length,
  1
);
```

`GameOfChance` から単一の `button` 要素を返します。

```js
assert.strictEqual(
  Enzyme.mount(React.createElement(GameOfChance)).find('button').length,
  1
);
```

`GameOfChance` から `Results` コンポーネントの単一のインスタンスを返します。これには `fiftyFifty` という prop があります。

```js
assert(
  Enzyme.mount(React.createElement(GameOfChance)).find('Results').length ===
    1 &&
    Enzyme.mount(React.createElement(GameOfChance))
      .find('Results')
      .props()
      .hasOwnProperty('fiftyFifty') === true
);
```

`GameOfChance` の state を初期化し、`counter` のプロパティを値 `1` に設定します。

```js
assert.strictEqual(
  Enzyme.mount(React.createElement(GameOfChance)).state().counter,
  1
);
```

`GameOfChance` コンポーネントを初めて DOM にレンダーするときに、`p` 要素をその内側のテキスト `Turn: 1` とともに返します。

```js
assert.strictEqual(
  Enzyme.mount(React.createElement(GameOfChance)).find('p').text(),
  'Turn: 1'
);
```

ボタンがクリックされるたびに、カウンターの state の値を 1 ずつ増やし、テキスト `Turn: N` が含まれている DOM に単一の `p` 要素をレンダーします。ここで `N` はカウンターの state の値です。

```js
(() => {
  const comp = Enzyme.mount(React.createElement(GameOfChance));
  const simulate = () => {
    comp.find('button').simulate('click');
  };
  const result = () => ({
    count: comp.state('counter'),
    text: comp.find('p').text()
  });
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
  const _1_val = _1();
  const _2_val = _2();
  const _3_val = _3();
  const _4_val = _4();
  const _5_val = _5();
  assert(
    _1_val.count === 2 &&
      _1_val.text === 'Turn: 2' &&
      _2_val.count === 3 &&
      _2_val.text === 'Turn: 3' &&
      _3_val.count === 4 &&
      _3_val.text === 'Turn: 4' &&
      _4_val.count === 5 &&
      _4_val.text === 'Turn: 5' &&
      _5_val.count === 6 &&
      _5_val.text === 'Turn: 6'
  );
})();
```

`GameOfChance` コンポーネントが初めて DOM にマウントされたら、その後ボタンがクリックされるたびに、`You Win!` または `You Lose!` のいずれかをランダムにレンダーする単一の `h1` 要素を返します。 注: このテストはランダムに失敗する可能性があります。 その場合は再実行してください。

```js
(() => {
  const comp = Enzyme.mount(React.createElement(GameOfChance));
  const simulate = () => {
    comp.find('button').simulate('click');
  };
  const result = () => ({
    h1: comp.find('h1').length,
    text: comp.find('h1').text()
  });
  const _1 = result();
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
  const _2_val = _2();
  const _3_val = _3();
  const _4_val = _4();
  const _5_val = _5();
  const _6_val = _6();
  const _7_val = _7();
  const _8_val = _8();
  const _9_val = _9();
  const _10_val = _10();
  const __text = new Set([
    _1.text,
    _2_val.text,
    _3_val.text,
    _4_val.text,
    _5_val.text,
    _6_val.text,
    _7_val.text,
    _8_val.text,
    _9_val.text,
    _10_val.text
  ]);
  const __h1 = new Set([
    _1.h1,
    _2_val.h1,
    _3_val.h1,
    _4_val.h1,
    _5_val.h1,
    _6_val.h1,
    _7_val.h1,
    _8_val.h1,
    _9_val.h1,
    _10_val.h1
  ]);
  assert(__text.size === 2 && __h1.size === 1);
})();
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<GameOfChance />, document.getElementById('root'));
```

## --seed-contents--

```jsx
class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    {/* Change code below this line */}
    return <h1></h1>;
    {/* Change code above this line */}
  }
}

class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(prevState => {
      // Complete the return statement:
      return {
        counter: prevState
      }
    });
  }
  render() {
    const expression = null; // Change this line
    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>
        {/* Change code below this line */}

        {/* Change code above this line */}
        <p>{'Turn: ' + this.state.counter}</p>
      </div>
    );
  }
}
```

# --solutions--

```jsx
// We want this to be deterministic for testing purposes.
const randomSequence = [true, false, false, true, true, false, false, true, true, false];
let index = 0;
const fiftyFifty = () => randomSequence[index++ % randomSequence.length];

class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h1>{this.props.fiftyFifty ? 'You Win!' : 'You Lose!'}</h1>;
  }
}

class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(prevState => {
      return {
        counter: prevState.counter + 1
      }
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>
        <Results fiftyFifty={fiftyFifty()} />
        <p>{'Turn: ' + this.state.counter}</p>
      </div>
    );
  }
}
```
