---
id: 5a24c314108439a4d403617c
title: ライフサイクルメソッド componentWillMount を使用する
challengeType: 6
forumTopicId: 301423
dashedName: use-the-lifecycle-method-componentwillmount
---

# --description--

React コンポーネントには、コンポーネントのライフサイクル中に特定の時点でアクションを実行する機会を提供する、いくつかの特別なメソッドがあります。 これらはライフサイクルメソッドまたはライフサイクルフックと呼ばれ、特定の時点でコンポーネントをキャッチできます。 メソッドは、レンダー前、更新前、prop を受け取る前、アンマウント前などの時点で実行できます。 主なライフサイクルメソッドとしては、`componentWillMount()`、`componentDidMount()`、`shouldComponentUpdate()`、`componentDidUpdate()`、`componentWillUnmount()` があります。以降のレッスンでは、これらのライフサイクルメソッドの基本的な用例について説明します。

**注:** ライフサイクルメソッド `componentWillMount` は、将来のバージョン 16.X で非推奨になり、バージョン 17 で削除される予定です [(情報元)](https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html)。

# --instructions--

`componentWillMount()` メソッドは、コンポーネントが DOM にマウントされるときに、`render()` メソッドの前に呼び出されます。 `componentWillMount()` の中でコンソールに何か出力してください。出力を確認するにはブラウザーのコンソールを開いておく必要があります。

# --hints--

`MyComponent` で `div` 要素をレンダーします。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
    return mockedComponent.find('div').length === 1;
  })()
);
```

`componentWillMount` で `console.log` を呼び出します。

```js
assert(
  (function () {
    const lifecycle = React.createElement(MyComponent)
      .type.prototype.componentWillMount.toString()
      .replace(/ /g, '');
    return lifecycle.includes('console.log(');
  })()
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
  }
  componentWillMount() {
    // Change code below this line

    // Change code above this line
  }
  render() {
    return <div />
  }
};
```

# --solutions--

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    // Change code below this line
    console.log('Component is mounting...');
    // Change code above this line
  }
  render() {
    return <div />
  }
};
```
