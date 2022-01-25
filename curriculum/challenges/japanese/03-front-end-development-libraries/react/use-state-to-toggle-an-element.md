---
id: 5a24c314108439a4d4036176
title: state を使用して要素を切り替える
challengeType: 6
forumTopicId: 301421
dashedName: use-state-to-toggle-an-element
---

# --description--

状況によっては、state を更新するときに以前の state を知る必要があります。 しかし、state の更新は非同期である可能性があります。これは React が複数の `setState()` 呼び出しを単一の更新にバッチ処理することを意味します。 つまり、次の値を計算するときに `this.state` または `this.props` の前の値に頼れない、ということです。 そのため、次のようなコードは使用しないでください。

```jsx
this.setState({
  counter: this.state.counter + this.props.increment
});
```

代わりに、state や props にアクセスすることのできる関数を `setState` に渡してください。 `setState` で関数を使用することによって、state や props の最新の値を使用することが保証されます。 前の例は次のように書き換える必要があります。

```jsx
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
```

`state` のみが必要な場合は、`props` のない形式も使用できます。

```jsx
this.setState(state => ({
  counter: state.counter + 1
}));
```

オブジェクトリテラルを括弧で囲む必要があることに注意してください。そうしないと JavaScript によってコードのブロックであるとみなされます。

# --instructions--

`MyComponent` に `visibility` プロパティがあり、`false` に初期化されています。 `visibility` の値が true の場合、render メソッドはあるビューを返し、false の場合はそれとは別のビューを返します。

現在、コンポーネントの `state` の `visibility` プロパティを更新する方法はありません。 true と false の間で値を切り替える必要があります。 ボタンには、`toggleVisibility()` というクラスメソッドをトリガーする click ハンドラーがあります。 `setState` に関数を渡してこのメソッドを定義し、メソッドが呼び出されたときに `visibility` の `state` が反対の値に切り替わるようにしてください。 `visibility` が `false` の場合は、メソッドで `true` に設定します。その逆も同様です。

最後に、ボタンをクリックしたときに `state` に基づいてコンポーネントの条件付きレンダーの結果を表示してください。

**ヒント:** `this` キーワードを `constructor` のメソッドにバインドするのを忘れずに！

# --hints--

`MyComponent` から、`button` を含む `div` 要素を返します。

```js
assert.strictEqual(
  Enzyme.mount(React.createElement(MyComponent)).find('div').find('button')
    .length,
  1
);
```

`MyComponent` の state を初期化し、`visibility` プロパティを `false` に設定します。

```js
assert.strictEqual(
  Enzyme.mount(React.createElement(MyComponent)).state('visibility'),
  false
);
```

ボタン要素をクリックしたときに、state の `visibility` プロパティを `true` と `false` の間で切り替えます。

```js
(() => {
  const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
  const first = () => {
    mockedComponent.setState({ visibility: false });
    return mockedComponent.state('visibility');
  };
  const second = () => {
    mockedComponent.find('button').simulate('click');
    return mockedComponent.state('visibility');
  };
  const third = () => {
    mockedComponent.find('button').simulate('click');
    return mockedComponent.state('visibility');
  };
  const firstValue = first();
  const secondValue = second();
  const thirdValue = third();
  assert(!firstValue && secondValue && !thirdValue);
})();
```

`setState` に無名関数を渡します。

```js
const paramRegex = '[a-zA-Z$_]\\w*(,[a-zA-Z$_]\\w*)?';
assert(
  new RegExp(
    'this\\.setState\\((function\\(' +
      paramRegex +
      '\\){|([a-zA-Z$_]\\w*|\\(' +
      paramRegex +
      '\\))=>)'
  ).test(__helpers.removeWhiteSpace(code))
);
```

`setState` の中で `this` を使用しないでください。

```js
assert(!/this\.setState\([^}]*this/.test(code));
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<MyComponent />, document.getElementById('root'));
```

## --seed-contents--

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    // Change code below this line

    // Change code above this line
  }
  // Change code below this line

  // Change code above this line
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
}
```

# --solutions--

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }
  toggleVisibility() {
    this.setState(state => ({
      visibility: !state.visibility
    }));
  }
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
}
```
