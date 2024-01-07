---
id: 5a24c314108439a4d4036174
title: クラスメソッドに 'this' をバインドする
challengeType: 6
forumTopicId: 301379
dashedName: bind-this-to-a-class-method
---

# --description--

`state` の設定と更新に加えて、コンポーネントクラスのメソッドを定義することもできます。 クラスメソッドでは通常、メソッドのスコープ内でクラスのプロパティ (`state` や `props` など) にアクセスできるように、`this` キーワードを使用する必要があります。 いくつかの方法でクラスメソッドから `this` にアクセスすることができます。

よく使用される方法として、コンストラクターで `this` を明示的にバインドすることができます。この場合、コンポーネントの初期化時に `this` がクラスメソッドにバインドされます。 気づいたかもしれませんが、前回のチャレンジでは `this.handleClick = this.handleClick.bind(this)` をコンストラクターの `handleClick` メソッドに使用しました。 その後、クラスメソッドの中で `this.setState()` のように関数を呼び出すと、`this` はクラスを参照し、`undefined` ではなくなります。

**注:** `this` キーワードは JavaScript で特に混乱を招くものの一つですが、React では重要な役割を果たしています。 ここでの動作はまったくふつうですが、今回のレッスンでは `this` についての詳しい復習はしません。詳細な説明が必要な方は他のレッスンを参照してください。

# --instructions--

コードエディターに、テキストを追跡する `state` を持つコンポーネントがあります。 また、テキストを `You clicked!` に設定できるメソッドがあります。 ただし、使用している `this` キーワードが未定義であるため、このメソッドは動作しません。 コンポーネントのコンストラクターで `this` を `handleClick()` メソッドに明示的にバインドして修正してください。

次に、render メソッドの `button` 要素に click ハンドラーを追加してください。 このハンドラーでは、ボタンが click イベントを受け取ったときに `handleClick()` メソッドをトリガーする必要があります。 `onClick` ハンドラーに渡すメソッドには中括弧を付けて、JavaScript として直接解釈されるようにする必要があることに注意してください。

上記の手順を完了すると、ボタンをクリックしたときに `You clicked!` と表示することができます。

# --hints--

`MyComponent` から、ボタンと `h1` 要素の 2 つの要素をこの順序で囲む `div` 要素を返します。

```js
assert(
  Enzyme.mount(React.createElement(MyComponent)).find('div').length === 1 &&
    Enzyme.mount(React.createElement(MyComponent))
      .find('div')
      .childAt(0)
      .type() === 'button' &&
    Enzyme.mount(React.createElement(MyComponent))
      .find('div')
      .childAt(1)
      .type() === 'h1'
);
```

キーと値のペア `{ text: "Hello" }` を使用して `MyComponent` の state を初期化します。

```js
assert(
  Enzyme.mount(React.createElement(MyComponent)).state('text') === 'Hello'
);
```

`button` 要素がクリックされたら、`handleClick` メソッドを実行し、state の `text` を `You clicked!` に設定します。

```js
async () => {
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250));
  const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
  const first = () => {
    mockedComponent.setState({ text: 'Hello' });
    return waitForIt(() => mockedComponent.state('text'));
  };
  const second = () => {
    mockedComponent.find('button').simulate('click');
    return waitForIt(() => mockedComponent.state('text'));
  };
  const firstValue = await first();
  const secondValue = await second();
  assert(firstValue === 'Hello' && secondValue === 'You clicked!');
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
      text: "Hello"
    };
    // Change code below this line

    // Change code above this line
  }
  handleClick() {
    this.setState({
      text: "You clicked!"
    });
  }
  render() {
    return (
      <div>
        { /* Change code below this line */ }
        <button>Click Me</button>
        { /* Change code above this line */ }
        <h1>{this.state.text}</h1>
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
      text: "Hello"
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      text: "You clicked!"
    });
  }
  render() {
    return (
      <div>
        <button onClick = {this.handleClick}>Click Me</button>
        <h1>{this.state.text}</h1>
      </div>
    );
  }
};
```
