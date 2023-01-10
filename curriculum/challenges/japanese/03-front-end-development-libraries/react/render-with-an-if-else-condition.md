---
id: 5a24c314108439a4d4036184
title: If-Else 条件でレンダーする
challengeType: 6
forumTopicId: 301410
dashedName: render-with-an-if-else-condition
---

# --description--

レンダーされるビューを JavaScript を使用して制御する別の用例として、レンダーされる要素を条件に結び付けることができます。 条件が true の場合は、あるビューをレンダーし、 条件が false の場合は別のビューをレンダーします。 これを行うには、React コンポーネントの `render()` メソッドで標準の `if/else` ステートメントを使用します。

# --instructions--

MyComponent の state に、UI に要素を表示するかどうかを追跡する `boolean` が含まれています。 `button` は、この値の state を切り替えます。 現時点では、毎回同じ UI をレンダーします。 `render()` メソッドを `if/else` ステートメントで書き換えて、`display` が `true` の場合に現在のマークアップを返すようにしてください。 それ以外の場合は、`h1` 要素のないマークアップを返してください。

**注:** テストを成功させるには `if/else` を記述する必要があります。 ここでは三項演算子を使用しても成功となりません。

# --hints--

`MyComponent` が存在し、レンダーする必要があります。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
    return mockedComponent.find('MyComponent').length === 1;
  })()
);
```

`display` が `true` に設定されている場合は、`div`、`button`、および `h1` をレンダーします。

```js
async () => {
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250));
  const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
  const state_1 = () => {
    mockedComponent.setState({ display: true });
    return waitForIt(() => mockedComponent);
  };
  const updated = await state_1();
  assert(
    mockedComponent.find('div').length === 1 &&
      mockedComponent.find('div').children().length === 2 &&
      mockedComponent.find('button').length === 1 &&
      mockedComponent.find('h1').length === 1
  );
};
```

`display` が `false` に設定されている場合は、`div` と `button` のみをレンダーします。

```js
async () => {
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250));
  const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
  const state_1 = () => {
    mockedComponent.setState({ display: false });
    return waitForIt(() => mockedComponent);
  };
  const updated = await state_1();
  assert(
    mockedComponent.find('div').length === 1 &&
      mockedComponent.find('div').children().length === 1 &&
      mockedComponent.find('button').length === 1 &&
      mockedComponent.find('h1').length === 0
  );
};
```

render メソッドでは、`this.state.display` の条件をチェックするために `if/else` ステートメントを使用する必要があります。

```js
(getUserInput) =>
  assert(
    getUserInput('index').includes('if') &&
      getUserInput('index').includes('else')
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
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState((state) => ({
      display: !state.display
    }));
  }
  render() {
    // Change code below this line

    return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
         <h1>Displayed!</h1>
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
      display: true
    }
 this.toggleDisplay = this.toggleDisplay.bind(this);
 }
  toggleDisplay() {
    this.setState((state) => ({
      display: !state.display
    }));
  }
  render() {
    // Change code below this line
    if (this.state.display) {
      return (
         <div>
           <button onClick={this.toggleDisplay}>Toggle Display</button>
           <h1>Displayed!</h1>
         </div>
      );
    } else {
      return (
        <div>
           <button onClick={this.toggleDisplay}>Toggle Display</button>
         </div>
      );
    }
  }
};
```
