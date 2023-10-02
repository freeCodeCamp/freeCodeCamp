---
id: 5a24c314108439a4d4036172
title: 別の方法でユーザーインターフェイスに state をレンダーする
challengeType: 6
forumTopicId: 301408
dashedName: render-state-in-the-user-interface-another-way
---

# --description--

別の方法でコンポーネントの `state` にアクセスすることもできます。 `render()` メソッドで、`return` ステートメントの前に直接、JavaScript を記述することができます。 たとえば、関数を宣言したり、`state` や `props` のデータにアクセスしたり、そのデータに対して計算を実行したりできます。 そして、任意のデータを変数に割り当てて、`return` ステートメントでアクセスすることができます。

# --instructions--

`MyComponent` の render メソッドで、`name` という `const` を定義し、コンポーネントの `state` にある name の値を設定してください。 コードのこの部分には JavaScript を直接記述できるので、この参照を中括弧で囲む必要はありません。

次に、return ステートメントで変数 `name` を使用して、この値を `h1` タグにレンダーしてください。 return ステートメントでは JSX の構文を使用する必要があります (JavaScript の場合は中括弧を付けます) 。

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

レンダーされる `h1` タグに、`{name}` への参照を含めます。

```js
(getUserInput) =>
  assert(/<h1>\n*\s*\{\s*name\s*\}\s*\n*<\/h1>/.test(getUserInput('index')));
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
  assert(firstValue === '<div><h1>TestName</h1></div>');
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
    // Change code below this line

    // Change code above this line
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
    // Change code below this line
    const name = this.state.name;
    // Change code above this line
    return (
      <div>
        { /* Change code below this line */ }
        <h1>{name}</h1>
        { /* Change code above this line */ }
      </div>
    );
  }
};
```
