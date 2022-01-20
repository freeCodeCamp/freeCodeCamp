---
id: 5a24c314108439a4d4036165
title: React を使用して、ネストされたコンポーネントをレンダーする
challengeType: 6
forumTopicId: 301420
dashedName: use-react-to-render-nested-components
---

# --description--

前回のチャレンジでは、2 つのコンポーネントを構成する簡単な方法を紹介しましたが、React でコンポーネントを構成する方法は他にもたくさんあります。

コンポーネントコンポジションは React の強力な機能の一つです。 React の作業では、前回のチャレンジの App の例のようなコンポーネントに関して、ユーザーインターフェイスの検討を始めることが重要です。 UI を基本的な構成要素に分解すると、それらの要素がコンポーネントになります。 この作業によって、アプリケーションロジックの処理を担うコードと UI を担うコードとを切り分けられるようになり、 複雑なプロジェクトの開発と保守を大幅に簡素化できます。

# --instructions--

コードエディターに、`TypesOfFruit` と `Fruits` という 2 つの関数型コンポーネントが定義されています。 `TypesOfFruit` コンポーネントを構成するか、または `Fruits` の中に*ネスト*してください。 次に、`Fruits` コンポーネントを `TypesOfFood` コンポーネントの中にネストしてください。 結果は、親コンポーネントの中にネストされた子コンポーネントになります。親コンポーネントは、それ自身の親コンポーネントの中にネストされます。

# --hints--

`TypesOfFood` コンポーネントから単一の `div` 要素を返します。

```js
assert(Enzyme.shallow(React.createElement(TypesOfFood)).type() === 'div');
```

`TypesOfFood` コンポーネントから `Fruits` コンポーネントを返します。

```js
assert(
  Enzyme.shallow(React.createElement(TypesOfFood)).props().children[1].type
    .name === 'Fruits'
);
```

`Fruits` コンポーネントから `TypesOfFruit` コンポーネントを返します。

```js
assert(
  Enzyme.mount(React.createElement(TypesOfFood)).find('h2').html() ===
    '<h2>Fruits:</h2>'
);
```

`TypesOfFruit` コンポーネントから `h2` 要素と `ul` 要素を返します。

```js
assert(
  Enzyme.mount(React.createElement(TypesOfFood)).find('ul').text() ===
    'ApplesBlueberriesStrawberriesBananas'
);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<TypesOfFood />, document.getElementById('root'))
```

## --seed-contents--

```jsx
const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div>
      { /* Change code below this line */ }

      { /* Change code above this line */ }
    </div>
  );
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
      </div>
    );
  }
};
```

# --solutions--

```jsx
const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div>
      { /* Change code below this line */ }
        <TypesOfFruit />
      { /* Change code above this line */ }
    </div>
  );
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
        <Fruits />
        { /* Change code above this line */ }
      </div>
    );
  }
};
```
