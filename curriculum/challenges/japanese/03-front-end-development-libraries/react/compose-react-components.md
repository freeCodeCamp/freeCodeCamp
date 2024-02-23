---
id: 5a24c314108439a4d4036166
title: React コンポーネントを構成する
challengeType: 6
forumTopicId: 301381
dashedName: compose-react-components
---

# --description--

チャレンジで使用する React コンポーネントや JSX の構成が複雑になってきていますが、一つ重要な点があります。 前のいくつかのチャレンジでは単純なコンポーネントのレンダーを使用しましたが、ES6 スタイルのクラスコンポーネントを他のコンポーネントの中でレンダーすることもこれと変わりはありません。 JSX の要素、ステートレス関数型コンポーネント、および ES6 クラスコンポーネントを、他のコンポーネントの中でレンダーすることができます。

# --instructions--

コードエディターに `TypesOfFood` コンポーネントがあり、すでに `Vegetables` というコンポーネントをレンダーしています。 また、前回のチャレンジで使用した `Fruits` コンポーネントがあります。

2 つのコンポーネントを `Fruits` の中に入れてください。最初に `NonCitrus` に、次に `Citrus` に入れてください。 これらのコンポーネントはどちらもあらかじめ用意されています。 次に、`Fruits` クラスコンポーネントを `TypesOfFood` の `h1` 見出し要素の下、`Vegetables` の上に入れてください。 この結果、2 つの異なるコンポーネントタイプを使用する、一連のネストされたコンポーネントができます。

# --hints--

`TypesOfFood` コンポーネントから単一の `div` 要素を返します。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood));
    return mockedComponent.children().type() === 'div';
  })()
);
```

`TypesOfFood` コンポーネントから `Fruits` 要素を返します。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood));
    return mockedComponent.children().childAt(1).name() === 'Fruits';
  })()
);
```

`Fruits` コンポーネントから `NonCitrus` コンポーネントと `Citrus` コンポーネントを返します。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood));
    return (
      mockedComponent.find('Fruits').children().find('NonCitrus').length ===
        1 &&
      mockedComponent.find('Fruits').children().find('Citrus').length === 1
    );
  })()
);
```

`TypesOfFood` コンポーネントから、`Fruits` コンポーネントの下に `Vegetables` コンポーネントを返します。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood));
    return mockedComponent.children().childAt(2).name() === 'Vegetables';
  })()
);
```

# --seed--

## --before-user-code--

```jsx
class NonCitrus extends React.Component {
  render() {
    return (
      <div>
        <h4>Non-Citrus:</h4>
        <ul>
          <li>Apples</li>
          <li>Blueberries</li>
          <li>Strawberries</li>
          <li>Bananas</li>
        </ul>
      </div>
    );
  }
};
class Citrus extends React.Component {
  render() {
    return (
      <div>
        <h4>Citrus:</h4>
        <ul>
          <li>Lemon</li>
          <li>Lime</li>
          <li>Orange</li>
          <li>Grapefruit</li>
        </ul>
      </div>
    );
  }
};
class Vegetables extends React.Component {
  render() {
    return (
      <div>
        <h2>Vegetables:</h2>
        <ul>
          <li>Brussel Sprouts</li>
          <li>Broccoli</li>
          <li>Squash</li>
        </ul>
      </div>
    );
     }
};
```

## --after-user-code--

```jsx
ReactDOM.render(<TypesOfFood />, document.getElementById('root'))
```

## --seed-contents--

```jsx
class Fruits extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        { /* Change code below this line */ }

        { /* Change code above this line */ }
      </div>
    );
  }
};

class TypesOfFood extends React.Component {
  constructor(props) {
     super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        { /* Change code below this line */ }

        { /* Change code above this line */ }
        <Vegetables />
      </div>
    );
  }
};
```

# --solutions--

```jsx
class Fruits extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        { /* Change code below this line */ }
        <NonCitrus />
        <Citrus />
        { /* Change code above this line */ }
      </div>
    )
  }
}

class TypesOfFood extends React.Component {
  constructor(props) {
     super(props);
  }
    render() {
      return (
        <div>
        <h1>Types of Food:</h1>
          { /* Change code below this line */ }
          <Fruits />
          { /* Change code above this line */ }
          <Vegetables />
        </div>
      );
    }
};
```
