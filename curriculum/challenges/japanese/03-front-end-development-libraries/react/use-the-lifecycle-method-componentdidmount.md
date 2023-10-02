---
id: 5a24c314108439a4d403617d
title: ライフサイクルメソッド componentDidMount を使用する
challengeType: 6
forumTopicId: 301422
dashedName: use-the-lifecycle-method-componentdidmount
---

# --description--

ほとんどのウェブ開発者は、ある時点で、データを取得するために API エンドポイントを呼び出す必要があります。 React の作業では、このアクションをどこで実行すべきかを理解しておくことが重要です。

React では、API の呼び出しやサーバーへの呼び出しをライフサイクルメソッド `componentDidMount()` に配置することをお勧めします。 このメソッドは、コンポーネントが DOM にマウントされた後に呼び出されます。 この中で `setState()` を呼び出すと、そのたびにコンポーネントの再レンダーがトリガーされます。 このメソッドで API を呼び出して、API が返すデータを使用して state を設定すると、データの受信後に自動的に更新がトリガーされます。

# --instructions--

`componentDidMount()` に模擬的な API 呼び出しがあります。 この呼び出しは、2.5 秒後にサーバーの呼び出しをシミュレートしてデータを取得するように state を設定します。 この例では、サイトの現在のアクティブユーザーの合計数を要求します。 render メソッドで、`activeUsers` の値を `h1` のテキスト `Active Users:` の後にレンダーしてください。 プレビューで何が起きるかを確認し、タイムアウトを自由に変更してさまざまな効果を表示してください。

# --hints--

`MyComponent` で、`h1` タグを囲む `div` 要素をレンダーします。

```js
assert(
  (() => {
    const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
    return (
      mockedComponent.find('div').length === 1 &&
      mockedComponent.find('h1').length === 1
    );
  })()
);
```

コンポーネントの state を `componentDidMount` のタイムアウト関数で更新します。

```js
assert(
  (() => {
    const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
    return new RegExp('setTimeout(.|\n)+setState(.|\n)+activeUsers').test(
      String(mockedComponent.instance().componentDidMount)
    );
  })()
);
```

`h1` タグで、`MyComponent` の state から `activeUsers` の値をレンダーします。

```js
(() => {
  const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
  const first = () => {
    mockedComponent.setState({ activeUsers: 1237 });
    return mockedComponent.find('h1').text();
  };
  const second = () => {
    mockedComponent.setState({ activeUsers: 1000 });
    return mockedComponent.find('h1').text();
  };
  assert(new RegExp('1237').test(first()) && new RegExp('1000').test(second()));
})();
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<MyComponent />, document.getElementById('root'));
```

## --seed-contents--

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUsers: null
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        activeUsers: 1273
      });
    }, 2500);
  }
  render() {
    return (
      <div>
        {/* Change code below this line */}
        <h1>Active Users: </h1>
        {/* Change code above this line */}
      </div>
    );
  }
}
```

# --solutions--

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUsers: null
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        activeUsers: 1273
      });
    }, 2500);
  }
  render() {
    return (
      <div>
        <h1>Active Users: {this.state.activeUsers}</h1>
      </div>
    );
  }
}
```
