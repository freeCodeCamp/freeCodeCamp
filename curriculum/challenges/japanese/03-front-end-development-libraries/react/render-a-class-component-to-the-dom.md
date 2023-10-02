---
id: 5a24c314108439a4d4036167
title: クラスコンポーネントを DOM にレンダーする
challengeType: 6
forumTopicId: 301404
dashedName: render-a-class-component-to-the-dom
---

# --description--

前のチャレンジで、ReactDOM API を使用して JSX 要素を DOM にレンダーする例を紹介しました。 React コンポーネントのレンダーの処理も、よく似たものになります。 前のいくつかのチャレンジでは、コンポーネントとコンポジションを中心に説明していて、レンダーは舞台裏で行っていました。 しかし、ReactDOM API を呼び出さなければ、記述した React のコードは DOM にレンダーされません。

新しい構文を次に示します: `ReactDOM.render(componentToRender, targetNode)`。 1 つ目の引数は、レンダーする React コンポーネントです。 2 つ目の引数は DOM ノードで、この中にコンポーネントをレンダーします。

React コンポーネントは、JSX 要素とは少し異なる形で `ReactDOM.render()` に渡されます。 JSX 要素の場合は、レンダーする要素の名前を渡します。 しかし React コンポーネントの場合は、ネストされたコンポーネントをレンダーする場合と同じ構文を使用する必要があります (例: `ReactDOM.render(<ComponentToRender />, targetNode)`)。 この構文は ES6 クラスコンポーネントの場合でも関数型コンポーネントの場合でも使用します。

# --instructions--

`Fruits` コンポーネントと `Vegetables` コンポーネントをすでに定義してあります。 両方のコンポーネントを `TypesOfFood` コンポーネントの子としてレンダーし、`TypesOfFood` を DOM にレンダーしてください。 `id='challenge-node'` を持つ `div` を使用できます。

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

`TypesOfFood` コンポーネントで、 `h1` 要素の後に `Fruits` コンポーネントをレンダーします。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood));
    return mockedComponent.children().childAt(1).name() === 'Fruits';
  })()
);
```

`TypesOfFood` コンポーネントで、 `Fruits` の後に `Vegetables` コンポーネントをレンダーします。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood));
    return mockedComponent.children().childAt(2).name() === 'Vegetables';
  })()
);
```

`TypesOfFood` コンポーネントを DOM にレンダーします。id `challenge-node` を持つ `div` の中にレンダーします。

```js
assert(
  (function () {
    const html = document.getElementById('challenge-node').childNodes[0]
      .innerHTML;
    return (
      html.includes(
        '<div><h2>Fruits:</h2><h4>Non-Citrus:</h4><ul><li>Apples</li><li>Blueberries</li><li>Strawberries</li><li>Bananas</li></ul><h4>Citrus:</h4><ul><li>Lemon</li><li>Lime</li><li>Orange</li><li>Grapefruit</li></ul></div>'
      ) &&
      html.includes(
        '<div><h2>Vegetables:</h2><ul><li>Brussel Sprouts</li><li>Broccoli</li><li>Squash</li></ul></div>'
      )
    );
  })()
);
```

# --seed--

## --before-user-code--

```jsx
const Fruits = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <h4>Non-Citrus:</h4>
        <ul>
          <li>Apples</li>
          <li>Blueberries</li>
          <li>Strawberries</li>
          <li>Bananas</li>
        </ul>
      <h4>Citrus:</h4>
        <ul>
          <li>Lemon</li>
          <li>Lime</li>
          <li>Orange</li>
          <li>Grapefruit</li>
        </ul>
    </div>
  );
};
const Vegetables = () => {
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
};
```

## --seed-contents--

```jsx
class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {/* Change code below this line */}

        {/* Change code above this line */}
      </div>
    );
  }
};

// Change code below this line
```

# --solutions--

```jsx
class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {/* Change code below this line */}
          <Fruits />
           <Vegetables />
         {/* Change code above this line */}
      </div>
    );
  }
};

// Change code below this line
ReactDOM.render(<TypesOfFood />, document.getElementById('challenge-node'));
```
