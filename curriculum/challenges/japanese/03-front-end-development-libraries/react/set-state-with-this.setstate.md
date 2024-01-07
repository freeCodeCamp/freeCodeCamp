---
id: 5a24c314108439a4d4036173
title: this.setState を使用して state を設定する
challengeType: 6
forumTopicId: 301412
dashedName: set-state-with-this-setstate
---

# --description--

以前のチャレンジで、コンポーネントの `state` と、`constructor` での state の初期化方法について説明しました。 コンポーネントの `state` を変更する方法もあります。 React には、コンポーネントの `state` を更新するための `setState` というメソッドが用意されています。 `setState` メソッドはコンポーネントクラスの中で `this.setState()` のように呼び出し、キーと値のペアを持つオブジェクトを渡します。 キーは state のプロパティであり、値は更新された state データです。 たとえば、`username` を state に保存していて、それを更新したい場合は、次のようにします。

```jsx
this.setState({
  username: 'Lewis'
});
```

React では `state` を直接変更しないことが前提となっています。代わりに、state が変更された場合は常に `this.setState()` を使用します。 また、React ではパフォーマンスを向上させるために複数の state の更新がバッチ処理されることがあります。 このため、`setState` メソッドによる state の更新が非同期になる可能性があります。 この問題を回避する方法として、`setState` メソッドの代わりとなる構文があります。 必要になることはめったにありませんが、覚えておくと役に立ちます。 詳細については freeCodeCamp の <a href="https://www.freecodecamp.org/news/what-is-state-in-react-explained-with-examples/" target="_blank" rel="noopener noreferrer nofollow">React に関する記事</a>を参照してください。

# --instructions--

コードエディターに `button` 要素があり、`onClick()` ハンドラーが設定されています。 このハンドラーは、`button` がブラウザーで click イベントを受信したときにトリガーされ、`MyComponent` で定義されている `handleClick` メソッドを実行します。 `handleClick` メソッドの中で、`this.setState()` を使用してコンポーネントの `state` を更新してください。 `state` 内の `name` プロパティに文字列 `React Rocks!` を設定してください。

ボタンをクリックして、レンダーされる state が更新されることを確認してください。 ここでは click ハンドラーのコードの動作を十分に理解していなくても心配はいりません。 それについては以降のチャレンジで説明します。

# --hints--

`MyComponent` の state を、キーと値のペア `{ name: Initial State }` を使用して初期化します。

```js
assert(
  Enzyme.mount(React.createElement(MyComponent)).state('name') ===
    'Initial State'
);
```

`MyComponent` で `h1` 見出し要素をレンダーします。

```js
assert(Enzyme.mount(React.createElement(MyComponent)).find('h1').length === 1);
```

レンダーされる `h1` 見出し要素には、コンポーネントの state からレンダーされたテキストのみを含めます。

```js
async () => {
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250));
  const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
  const first = () => {
    mockedComponent.setState({ name: 'TestName' });
    return waitForIt(() => mockedComponent.html());
  };
  const firstValue = await first();
  assert(/<h1>TestName<\/h1>/.test(firstValue));
};
```

`MyComponent` の `handleClick` メソッドの呼び出しで、state 内の name プロパティを `React Rocks!` に設定します。

```js
async () => {
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250));
  const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
  const first = () => {
    mockedComponent.setState({ name: 'Before' });
    return waitForIt(() => mockedComponent.state('name'));
  };
  const second = () => {
    mockedComponent.instance().handleClick();
    return waitForIt(() => mockedComponent.state('name'));
  };
  const firstValue = await first();
  const secondValue = await second();
  assert(firstValue === 'Before' && secondValue === 'React Rocks!');
};
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
      name: 'Initial State'
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // Change code below this line

    // Change code above this line
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
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
      name: 'Initial State'
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
     // Change code below this line
    this.setState({
      name: 'React Rocks!'
    });
    // Change code above this line
  }
  render() {
    return (
      <div>
        <button onClick = {this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};
```
