---
id: 5a24c314108439a4d403617a
title: state を props として子コンポーネントに渡す
challengeType: 6
forumTopicId: 301403
dashedName: pass-state-as-props-to-child-components
---

# --description--

ここまでのチャレンジで、子の JSX 要素や子の React コンポーネントに props を渡す例をたくさん紹介してきました。 これらの props はいったいどこからやって来るのでしょうか。 よくあるパターンとしては、アプリにとって重要な `state` を含むステートフルコンポーネントを用意し、それから子コンポーネントをレンダーします。 そしてそれらのコンポーネントから、props として渡された `state` の一部にアクセスできるようにします。

たとえば `App` コンポーネントがあり、他のコンポーネントの中から `Navbar` をレンダーするとします。 `App` には `state` があり、そこにはたくさんのユーザー情報が含まれていますが、`Navbar` ではユーザーのユーザー名にアクセスして表示できれば十分です。 そこで、`state` のうちその部分を prop として `Navbar` コンポーネントに渡します。

こうしたパターンは React での重要な決まりごとをいくつか示しています。 1 つ目は*一方向のデータフロー*です。 state は、ステートフルな親コンポーネントから子コンポーネントに向かって、アプリケーションのコンポーネントツリーを一方向に流れます。 子コンポーネントでは必要な state データのみを受け取ります。 2 つ目は、複雑なステートフルアプリを、ほんの数個の、またはおそらく単一の、ステートフルコンポーネントに分割できることです。 残りのコンポーネントでは、単純に親コンポーネントから state を props として受け取り、その state から UI をレンダーします。 その結果、コードのある部分で state の管理を処理し、別の部分で UI のレンダーを処理するという、コードの分離ができ始めます。 state のロジックを UI のロジックから切り分けるというこの原則は、React の主要な原則の一つとなっています。 これを正しく適用すれば、複雑なステートフルアプリケーションの設計管理がずっと簡単になります。

# --instructions--

`MyApp` はステートフルコンポーネントで、`Navbar` コンポーネントを子としてレンダーします。 `state` の `name` プロパティを子コンポーネントに渡し、`h1` タグに `name` を表示してください。これは `Navbar` の render メソッドの一部になります。 `name` をテキスト `Hello, my name is:` の後に表示してください。

# --hints--

`MyApp` コンポーネントで、`Navbar` コンポーネントをその中にレンダーします。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyApp));
    return (
      mockedComponent.find('MyApp').length === 1 &&
      mockedComponent.find('Navbar').length === 1
    );
  })()
);
```

`Navbar` コンポーネントで、`MyApp` の state プロパティ `name` を props として受け取ります。

```js
async () => {
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250));
  const mockedComponent = Enzyme.mount(React.createElement(MyApp));
  const setState = () => {
    mockedComponent.setState({ name: 'TestName' });
    return waitForIt(() => mockedComponent.find('Navbar').props());
  };
  const navProps = await setState();
  assert(navProps.name === 'TestName');
};
```

`Navbar` の `h1` 要素で、`name` prop をレンダーします。

```js
async () => {
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250));
  const mockedComponent = Enzyme.mount(React.createElement(MyApp));
  const navH1Before = mockedComponent.find('Navbar').find('h1').text();
  const setState = () => {
    mockedComponent.setState({ name: 'TestName' });
    return waitForIt(() => mockedComponent.find('Navbar').find('h1').text());
  };
  const navH1After = await setState();
  assert(new RegExp('TestName').test(navH1After) && navH1After !== navH1Before);
};
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<MyApp />, document.getElementById('root'))
```

## --seed-contents--

```jsx
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'CamperBot'
    }
  }
  render() {
    return (
       <div>
         {/* Change code below this line */}
         <Navbar />
         {/* Change code above this line */}
       </div>
    );
  }
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div>
      {/* Change code below this line */}
      <h1>Hello, my name is: </h1>
      {/* Change code above this line */}
    </div>
    );
  }
};
```

# --solutions--

```jsx
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'CamperBot'
    }
  }
  render() {
    return (
       <div>
         <Navbar name={this.state.name}/>
       </div>
    );
  }
};
class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div>
      <h1>Hello, my name is: {this.props.name}</h1>
    </div>
    );
  }
};
```
