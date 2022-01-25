---
id: 5a24c314108439a4d4036164
title: コンポジションを使用してコンポーネントを作成する
challengeType: 6
forumTopicId: 301383
dashedName: create-a-component-with-composition
---

# --description--

ここでは、複数の React コンポーネントをまとめて作成する方法について説明します。 アプリを作成していて、すでに `Navbar`、`Dashboard`、`Footer` の 3 つのコンポーネントを作成したとします。

これら 3 つのコンポーネントを*子*としてレンダーする `App` という*親*コンポーネントを作成することができます。 コンポーネントを React コンポーネント内の子としてレンダーするには、カスタム HTML タグとして記述したコンポーネント名を JSX に含めます。 たとえば、`render` メソッドで次のように記述できます。

```jsx
return (
 <App>
  <Navbar />
  <Dashboard />
  <Footer />
 </App>
)
```

React で、別のコンポーネントを参照するカスタム HTML タグが出現すると (この例では `< />` で囲まれたコンポーネント名)、そのコンポーネントのマークアップがタグの場所にレンダーされます。 これにより、`App` コンポーネントと `Navbar`、`Dashboard`、`Footer` との間の親子関係が示されます。

# --instructions--

コードエディターに、`ChildComponent` という単純な関数型コンポーネントと、`ParentComponent` というクラスコンポーネントがあります。 `ParentComponent` の中に `ChildComponent` をレンダーして、2 つのコンポーネントをまとめて作成してください。 必ずフォワードスラッシュで `ChildComponent` タグを終了してください。

**注:** `ChildComponent` は ES6 のアロー関数で定義されています。これは React を使用するときのごく一般的な記法です。 ただし、これは単なる関数にすぎません。 アロー関数の構文に慣れていない方は、JavaScript のセクションを参照してください。

# --hints--

React コンポーネントから単一の `div` 要素を返します。

```js
assert(
  (function () {
    var shallowRender = Enzyme.shallow(React.createElement(ParentComponent));
    return shallowRender.type() === 'div';
  })()
);
```

コンポーネントから 2 つのネストされた要素を返します。

```js
assert(
  (function () {
    var shallowRender = Enzyme.shallow(React.createElement(ParentComponent));
    return shallowRender.children().length === 2;
  })()
);
```

コンポーネントから `ChildComponent` を 2 番目の子として返します。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ParentComponent));
    return (
      mockedComponent.find('ParentComponent').find('ChildComponent').length ===
      1
    );
  })()
);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<ParentComponent />, document.getElementById('root'))
```

## --seed-contents--

```jsx
const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        { /* Change code below this line */ }


        { /* Change code above this line */ }
      </div>
    );
  }
};
```

# --solutions--

```jsx
const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        { /* Change code below this line */ }
        <ChildComponent />
        { /* Change code above this line */ }
      </div>
    );
  }
};
```
