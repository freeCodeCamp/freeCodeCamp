---
id: 5a24c314108439a4d4036141
title: React Redux 入門
challengeType: 6
forumTopicId: 301430
dashedName: getting-started-with-react-redux
---

# --description--

この一連のチャレンジでは、React で Redux を使用する方法を紹介します。 最初に、それぞれのテクノロジーの主な原則についていくつか確認しておきましょう。 React はビューライブラリです。データを提供すると、効率的で予測可能な方法でビューをレンダーします。 Redux は状態管理フレームワークです。これを使用してアプリケーションの状態の管理を簡素化することができます。 通常、React Redux アプリでは、アプリ全体の状態を管理する単一の Redux ストアを作成します。 React コンポーネントでは、ストア内のデータのうち、それらの役割に関連するもののみにサブスクライブします。 そして、React コンポーネントから直接アクションをディスパッチすることで、ストアの更新をトリガーします。

React コンポーネントで自身の状態をローカルに管理することもできますが、複雑なアプリの場合は、Redux を使用してアプリの状態を 1 か所に保つ方が通常は便利です。 ただし、個々のコンポーネントが自身に特有のローカルな状態を持つような場合は例外です。 また、Redux はそのままで React と連携するようには設計されていないため、`react-redux` パッケージを使用する必要があります。 このパッケージによって、React コンポーネントに Redux の `state` を渡して `props` として `dispatch` できるようになります。

以降のいくつかのチャレンジでは、まず、新しいテキストメッセージを入力できるシンプルな React コンポーネントを作成します。 メッセージは配列に追加され、ビューに表示されます。 このチャレンジは React のレッスンで学んだことを復習する良い機会になります。 次に、messages 配列の状態を管理する Redux ストアとアクションを作成します。 最後に、`react-redux` を使用して Redux ストアとコンポーネントを接続し、それを通じてローカルの state を Redux ストアに抽出します。

# --instructions--

`DisplayMessages` コンポーネントから作業を始めます。 このコンポーネントにコンストラクターを追加し、2 つのプロパティを持つ state で初期化してください。プロパティの 1 つは `input` で、空の文字列に設定します。もう 1 つは `messages` で、空の配列に設定します。

# --hints--

`DisplayMessages` コンポーネントで空の `div` 要素をレンダーします。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(DisplayMessages));
    return mockedComponent.find('div').text() === '';
  })()
);
```

`DisplayMessages` コンストラクターを `super` を使用して正しく呼び出し、`props` を渡します。

```js
(getUserInput) =>
  assert(
    (function () {
      const noWhiteSpace = __helpers.removeWhiteSpace(getUserInput('index'));
      return (
        noWhiteSpace.includes('constructor(props)') &&
        noWhiteSpace.includes('super(props')
      );
    })()
  );
```

`DisplayMessages` コンポーネントの初期状態を `{input: "", messages: []}` にします。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(DisplayMessages));
    const initialState = mockedComponent.state();
    return (
      typeof initialState === 'object' &&
      initialState.input === '' &&
      Array.isArray(initialState.messages) &&
      initialState.messages.length === 0
    );
  })()
);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<DisplayMessages />, document.getElementById('root'))
```

## --seed-contents--

```jsx
class DisplayMessages extends React.Component {
  // Change code below this line

  // Change code above this line
  render() {
    return <div />
  }
};
```

# --solutions--

```jsx
class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
  }
  render() {
    return <div/>
  }
};
```
