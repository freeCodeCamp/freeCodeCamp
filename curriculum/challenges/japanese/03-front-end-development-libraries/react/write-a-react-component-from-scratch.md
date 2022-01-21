---
id: 5a24c314108439a4d4036168
title: React コンポーネントをゼロから記述する
challengeType: 6
forumTopicId: 301424
dashedName: write-a-react-component-from-scratch
---

# --description--

JSX と React コンポーネントの基本を学んだところで、今度は自分でコンポーネントを記述してみましょう。 React コンポーネントは React アプリケーションの中心的な構成要素であるため、それらの記述に十分慣れることが重要です。 代表的な React コンポーネントとして、`React.Component` を拡張する ES6 `class` があります。 このコンポーネントには、HTML (JSX からの) を返すかまたは `null` を返す render メソッドがあります。 これは React コンポーネントの基本的な形式です。 これについて十分に理解すれば、より複雑な React プロジェクトの構築を始めることができます。

# --instructions--

`React.Component` を拡張するクラス `MyComponent` を定義してください。 その render メソッドから、中に `My First React Component!` というテキストを持つ `h1` タグを含む `div` を返してください。 このテキストを正確に使用してください。大文字小文字の区別と句読点が重要です。 コンポーネントのコンストラクターも必ず呼び出してください。

`ReactDOM.render()` を使用してこのコンポーネントを DOM にレンダーしてください。 `id='challenge-node'` を持つ `div` を使用できます。

# --hints--

`MyComponent` という React コンポーネントを用意します。

```js
(getUserInput) =>
  assert(
    __helpers
      .removeWhiteSpace(getUserInput('index'))
      .includes('classMyComponentextendsReact.Component{')
  );
```

`MyComponent` に、テキスト `My First React Component!` を持つ `h1` タグを含めます。大文字小文字の区別と句読点が重要です。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
    return mockedComponent.find('h1').text() === 'My First React Component!';
  })()
);
```

`MyComponent` を DOM にレンダーします。

```js
assert(document.getElementById('challenge-node').childNodes.length === 1);
```

`MyComponent` に、`props` を使用して `super` を呼び出すコンストラクターを記述します。

```js
assert(
  MyComponent.toString().includes('MyComponent(props)') &&
    MyComponent.toString().includes('_super.call(this, props)')
);
```

# --seed--

## --seed-contents--

```jsx
// Change code below this line
```

# --solutions--

```jsx
// Change code below this line
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>My First React Component!</h1>
      </div>
    );
  }
};

ReactDOM.render(<MyComponent />, document.getElementById('challenge-node'));
```
