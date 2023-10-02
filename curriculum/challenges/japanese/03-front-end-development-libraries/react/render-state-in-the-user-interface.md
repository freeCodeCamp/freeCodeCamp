---
id: 5a24c314108439a4d4036171
title: ユーザーインターフェイスに state をレンダーする
challengeType: 6
forumTopicId: 301409
dashedName: render-state-in-the-user-interface
---

# --description--

コンポーネントの初期状態を定義したら、レンダーされる UI に、そのコンポーネントの任意の部分を表示することができます。 コンポーネントがステートフルの場合は、コンポーネントから常に自身の `render()` メソッドの中で `state` のデータにアクセスできます。 データへのアクセスには `this.state` を使用できます。

render メソッドの `return` の中で state 値にアクセスしたい場合は、値を中括弧で囲む必要があります。

`state` は React で最も強力なコンポーネントの機能の一つです。 アプリの重要なデータを追跡して、このデータの変更に応じて UI をレンダーすることができます。 データが変更されると、UI が変更されます。 React では、仮想 DOM と呼ばれるものを使用して、見えないところで変更を追跡しています。 state のデータが更新されると、データを prop として受け取った子コンポーネントを含めて、そのデータを使用しているコンポーネントの再レンダーをトリガーします。 実際の DOM も更新しますが、必要な場合に限られます。 つまり、DOM の変更を気にする必要はない、ということです。 単に UI をどのように表示させるかを宣言するだけです。

あるコンポーネントをステートフルにした場合、他のコンポーネントはその `state` を認識しないことに注意してください。 state データを `props` として子コンポーネントに渡さない限り、`state` は完全にカプセル化されるか、またはそのコンポーネントに対してローカルになります。 `state` のカプセル化という考え方はとても重要です。なぜなら、特定のロジックを記述して、そのロジックをコード内の 1 か所に閉じ込めて分離しておけるからです。

# --instructions--

コードエディターにある `MyComponent` はすでにステートフルになっています。 コンポーネントの render メソッドで `h1` タグを定義し、コンポーネントの state から `name` の値をレンダーしてください。

**注:** `h1` では `state` の値のみをレンダーし、それ以外はレンダーしないでください。 JSX では、中括弧 `{ }` で記述されたコードはすべて JavaScript として扱われます。 そのため、`state` から値にアクセスするには参照を中括弧で囲みます。

# --hints--

`MyComponent` で、キー `name` を設定し、その state に値 `freeCodeCamp` を格納します。

```js
assert(
  Enzyme.mount(React.createElement(MyComponent)).state('name') ===
    'freeCodeCamp'
);
```

`MyComponent` で、`h1` 見出し要素を単一の `div` で囲んでレンダーします。

```js
assert(
  /<div><h1>.*<\/h1><\/div>/.test(
    Enzyme.mount(React.createElement(MyComponent)).html()
  )
);
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
  const getValue = firstValue.replace(/\s/g, '');
  assert(getValue === '<div><h1>TestName</h1></div>');
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
      name: 'freeCodeCamp'
    }
  }
  render() {
    return (
      <div>
        { /* Change code below this line */ }

        { /* Change code above this line */ }
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
      name: 'freeCodeCamp'
    }
  }
  render() {
    return (
      <div>
        { /* Change code below this line */ }
        <h1>{this.state.name}</h1>
        { /* Change code above this line */ }
      </div>
    );
  }
};
```
