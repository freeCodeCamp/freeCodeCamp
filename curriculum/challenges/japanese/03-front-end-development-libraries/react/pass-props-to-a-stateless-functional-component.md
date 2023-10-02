---
id: 5a24c314108439a4d4036169
title: ステートレス関数型コンポーネントに props を渡す
challengeType: 6
forumTopicId: 301402
dashedName: pass-props-to-a-stateless-functional-component
---

# --description--

ここまでのチャレンジでは、React での JSX 要素、関数型コンポーネント、ES6 スタイルクラスコンポーネントの作成と構築について、多くのことを説明しました。 これらを基礎的な知識として、もう一つ React でごく一般的な機能である **props** について見てみましょう。 React では props、つまりプロパティを子コンポーネントに渡すことができます。 たとえば `App` コンポーネントがあり、そこでステートレス関数型コンポーネントである `Welcome` という子コンポーネントをレンダーするとします。 次のように記述することで、`Welcome` に `user` プロパティを渡すことができます。

```jsx
<App>
  <Welcome user='Mark' />
</App>
```

作成したのは**カスタムの HTML 属性**であり、React によってサポートされ、コンポーネントに渡すことができます。 この例では、作成したプロパティ `user` がコンポーネント `Welcome` に渡されます。 `Welcome` はステートレス関数型コンポーネントなので、次のようにしてこの値にアクセスできます。

```jsx
const Welcome = (props) => <h1>Hello, {props.user}!</h1>
```

この値のことを `props` と呼ぶのが標準的であり、ステートレス関数型コンポーネントを扱う際は基本的に、JSX を返す関数への引数として考えます。 関数本体で引数の値にアクセスすることができます。 クラスコンポーネントの場合は、こうした操作は多少異なります。

# --instructions--

コードエディターに `Calendar` コンポーネントと `CurrentDate` コンポーネントがあります。 `Calendar` コンポーネントから `CurrentDate` をレンダーするときに、JavaScript の `Date` オブジェクトからの現在の日付が割り当てられた `date` のプロパティを渡してください。 次に、`CurrentDate` コンポーネントでこの `prop` にアクセスして、`p` タグの中に値を表示してください。 `prop` の値を JavaScript として評価するには、たとえば `date={Date()}` のように中括弧で囲む必要があります。

# --hints--

`Calendar` コンポーネントから単一の `div` 要素を返します。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(Calendar));
    return mockedComponent.children().type() === 'div';
  })()
);
```

`Calendar` コンポーネントの 2 つ目の子を `CurrentDate` コンポーネントにします。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(Calendar));
    return mockedComponent.children().childAt(1).name() === 'CurrentDate';
  })()
);
```

`CurrentDate` コンポーネントに `date` という prop を持たせます。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(Calendar));
    return mockedComponent.children().childAt(1).props().date;
  })()
);
```

`CurrentDate` の `date` prop に、テキストの文字列を含めます。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(Calendar));
    const prop = mockedComponent.children().childAt(1).props().date;
    return typeof prop === 'string' && prop.length > 0;
  })()
);
```

`Date()` を呼び出して `date` prop を生成します。

```js
assert(/<CurrentDatedate={Date\(\)}\/>/.test(__helpers.removeWhiteSpace(code)));
```

`CurrentDate` コンポーネントで、`date` prop からの値を `p` タグにレンダーします。

```js
let date = 'dummy date';
assert(
  (function () {
    const mockedComponent = Enzyme.mount(
      React.createElement(CurrentDate, { date })
    );
    return mockedComponent.find('p').html().includes(date);
  })()
);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<Calendar />, document.getElementById('root'))
```

## --seed-contents--

```jsx
const CurrentDate = (props) => {
  return (
    <div>
      { /* Change code below this line */ }
      <p>The current date is: </p>
      { /* Change code above this line */ }
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        { /* Change code below this line */ }
        <CurrentDate />
        { /* Change code above this line */ }
      </div>
    );
  }
};
```

# --solutions--

```jsx
const CurrentDate = (props) => {
  return (
    <div>
      { /* Change code below this line */ }
      <p>The current date is: {props.date}</p>
      { /* Change code above this line */ }
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        { /* Change code below this line */ }
        <CurrentDate date={Date()} />
        { /* Change code above this line */ }
      </div>
    );
  }
};
```
