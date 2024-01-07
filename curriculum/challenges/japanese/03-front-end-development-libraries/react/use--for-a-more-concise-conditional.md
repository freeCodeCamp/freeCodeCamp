---
id: 5a24c314108439a4d4036185
title: 条件をもっと簡潔にするために && を使用する
challengeType: 6
forumTopicId: 301413
dashedName: use--for-a-more-concise-conditional
---

# --description--

前回のチャレンジでは `if/else` ステートメントが正しく機能しましたが、もっと簡潔な方法で同じ結果を得ることができます。 コンポーネントで複数の条件を追跡していて、それぞれの条件に応じて異なる要素をレンダーしたいとしましょう。 わずかに異なる UI を返す `else if` ステートメントをたくさん記述すると、エラーの余地を残すコードを繰り返してしまう可能性があります。 代わりに、`&&` 論理演算子を使用して、もっと簡潔な方法で条件ロジックを実行することができます。 ここでは、条件が `true` かどうかをチェックして、true ならばマークアップを返すという処理なので、この演算子を使用できます。 例:

```jsx
{condition && <p>markup</p>}
```

`condition` が `true` の場合は、マークアップを返します。 condition が `false` の場合は、`condition` の評価後にすぐに `false` が返されるため、何も返しません。 これらのステートメントを JSX や文字列の複数の条件に直接含め、それぞれのステートメントの後に `&&` を記述してまとめることができます。 これにより、たくさんのコードを繰り返さなくても、`render()` メソッドでもっと複雑な条件ロジックを処理することができます。

# --instructions--

もう一度前の例を解決してください。`display` が `true` の場合にのみ `h1` をレンダーしますが、`if/else` ステートメントの代わりに `&&` 論理演算子を使用してください。

# --hints--

`MyComponent` が存在し、レンダーする必要があります。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
    return mockedComponent.find('MyComponent').length;
  })()
);
```

`display` が `true` に設定されている場合は、`div`、`button`、および `h1` をレンダーします。

```js
async () => {
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250));
  const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
  const state_1 = () => {
    mockedComponent.setState({ display: true });
    return waitForIt(() => mockedComponent);
  };
  const updated = await state_1();
  assert(
    updated.find('div').length === 1 &&
      updated.find('div').children().length === 2 &&
      updated.find('button').length === 1 &&
      updated.find('h1').length === 1
  );
};
```

`display` が `false` に設定されている場合は、`div` と `button` のみをレンダーします。

```js
async () => {
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250));
  const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
  const state_1 = () => {
    mockedComponent.setState({ display: false });
    return waitForIt(() => mockedComponent);
  };
  const updated = await state_1();
  assert(
    updated.find('div').length === 1 &&
      updated.find('div').children().length === 1 &&
      updated.find('button').length === 1 &&
      updated.find('h1').length === 0
  );
};
```

render メソッドでは、`this.state.display` の条件をチェックするために `&&` 論理演算子を使用する必要があります。

```js
(getUserInput) => assert(getUserInput('index').includes('&&'));
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<MyComponent />, document.getElementById('root'))
```

## --seed-contents--

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState(state => ({
      display: !state.display
    }));
  }
  render() {
    // Change code below this line
    return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
         <h1>Displayed!</h1>
       </div>
    );
  }
};
```

# --solutions--

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
 this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState(state => ({
      display: !state.display
    }));
  }
  render() {
    // Change code below this line
    return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
         {this.state.display && <h1>Displayed!</h1>}
       </div>
    );
  }
};
```
