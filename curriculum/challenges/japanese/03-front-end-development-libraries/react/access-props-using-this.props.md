---
id: 5a24c314108439a4d403616e
title: this.props を使用して props にアクセスする
challengeType: 6
forumTopicId: 301375
dashedName: access-props-using-this-props
---

# --description--

前のいくつかのチャレンジでは、子コンポーネントに props を渡す基本的な方法について説明しました。 しかし、props に渡そうとしている子コンポーネントが、ステートレス関数型コンポーネントではなく、ES6 クラスコンポーネントである場合はどうでしょうか？ ES6 クラスコンポーネントでは、props にアクセスするために多少異なる規約を使用します。

クラスコンポーネント自体を参照するときはいつでも、`this` キーワードを使用します。 クラスコンポーネント内の props にアクセスするには、アクセスに使用するコードの前に `this` を置きます。 たとえば、ES6 クラスコンポーネントに `data` という prop がある場合、JSX では `{this.props.data}` と記述します。

# --instructions--

親コンポーネント `App` にある `Welcome` コンポーネントのインスタンスをレンダーしてください。 ここでは、`Welcome` に `name` という prop を付け、文字列の値を割り当ててください。 子要素 `Welcome` の中で、`strong` タグ内の `name` prop にアクセスしてください。

# --hints--

`App` コンポーネントは単一の `div` 要素を返す必要があります。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(App));
    return mockedComponent.children().type() === 'div';
  })()
);
```

`App` の子要素は `Welcome` コンポーネントである必要があります。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(App));
    return (
      mockedComponent.children().childAt(0).name() === 'Welcome'
    );
  })()
);
```

`Welcome` コンポーネントには `name` という prop を持たせる必要があります。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(App));
    return mockedComponent.find('Welcome').props().name;
  })()
);
```

`Welcome` コンポーネントで、`name` prop として渡した文字列を `strong` タグ内に表示する必要があります。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(App));
    return (
      mockedComponent.find('strong').text() ===
      mockedComponent.find('Welcome').props().name
    );
  })()
);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<App />, document.getElementById('root'))
```

## --seed-contents--

```jsx
class App extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
            { /* Change code below this line */ }
            <Welcome />
            { /* Change code above this line */ }
        </div>
    );
  }
};

class Welcome extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
          { /* Change code below this line */ }
          <p>Hello, <strong></strong>!</p>
          { /* Change code above this line */ }
        </div>
    );
  }
};
```

# --solutions--

```jsx
class Welcome extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
          { /* Change code below this line */ }
          <p>Hello, <strong>{this.props.name}</strong>!</p>
          { /* Change code above this line */ }
        </div>
    );
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
            { /* Change code below this line */ }
            <Welcome name="Quincy"/>
            { /* Change code above this line */ }
        </div>
    );
  }
};
```
