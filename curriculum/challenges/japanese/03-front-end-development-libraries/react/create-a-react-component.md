---
id: 5a24c314108439a4d4036163
title: React コンポーネントを作成する
challengeType: 6
forumTopicId: 301386
dashedName: create-a-react-component
---

# --description--

React コンポーネントを定義する別の方法として、ES6 の `class` 構文による方法があります。 次の例では、`Kitten` は `React.Component` を拡張します。

```jsx
class Kitten extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>Hi</h1>
    );
  }
}
```

これで、`React.Component` クラスを拡張した ES6 クラス `Kitten` が作成され、 `Kitten` クラスから、ローカルの state やライフサイクルフックといった数多くの便利な React 機能にアクセスできるようになりました。 まだこれらの用語に慣れていなくても心配はいりません。以降のチャレンジで詳しく説明します。 また、`Kitten` クラスの中に、`super()` を呼び出す `constructor` が定義されていることに注目してください。 このコンストラクターは、`super()` を使用して親クラス (この例では `React.Component`) のコンストラクターを呼び出します。 コンストラクターは、`class` キーワードで作成されたオブジェクトの初期化時に使用される特別なメソッドです。 `super` を使用してコンポーネントの `constructor` を呼び出し、両方に `props` を渡すことをお勧めします。 これにより、コンポーネントが正しく初期化されます。 ここでは、このコードを含めることが標準的であることを知っておいてください。 このあと、コンストラクターや `props` の他の用法について説明していきます。

# --instructions--

コードエディターで、`MyComponent` が class 構文を使用して定義されています。 `Hello React!` というテキストを持つ `h1` を含む `div` 要素を返すように、`render` メソッドの記述を完成させてください。

# --hints--

React コンポーネントから `div` 要素を返します。

```js
assert(Enzyme.shallow(React.createElement(MyComponent)).type() === 'div');
```

返された `div` で、`h1` 見出し要素をその中にレンダーします。

```js
assert(
  /<div><h1>.*<\/h1><\/div>/.test(
    Enzyme.shallow(React.createElement(MyComponent)).html()
  )
);
```

`h1` 見出し要素に文字列 `Hello React!` を含めます。

```js
assert(
  Enzyme.shallow(React.createElement(MyComponent)).html() ===
    '<div><h1>Hello React!</h1></div>'
);
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
  }
  render() {
    // Change code below this line



    // Change code above this line
  }
};
```

# --solutions--

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // Change code below this line
    return (
      <div>
        <h1>Hello React!</h1>
      </div>
    );
    // Change code above this line
  }
};
```
