---
id: 5a24c314108439a4d403617e
title: イベントリスナーを追加する
challengeType: 6
forumTopicId: 301377
dashedName: add-event-listeners
---

# --description--

特定の機能のためにイベントリスナーを追加する必要がある場合、`componentDidMount()` メソッドもまたイベントリスナーをアタッチするのに最適な場所になります。 React は、ブラウザーのネイティブのイベントシステムを包み込む、合成のイベントシステムを備えています。 この合成のイベントシステムは、ユーザーのブラウザーに関係なく、たとえネイティブイベントの動作がブラウザー間で異なる場合があるとしても、まったく同じ動作をします。

すでに `onClick()` などで、こうした合成のイベントハンドラーのいくつかを使用しています。 React の合成のイベントシステムは、DOM 要素で管理するほとんどのやり取りで使用するのにとても適しています。 ただし、イベントハンドラーを document オブジェクトや window オブジェクトにアタッチしたい場合は、直接実行する必要があります。

# --instructions--

`keydown` イベントの `componentDidMount()` メソッドでイベントリスナーをアタッチし、これらのイベントでコールバックの `handleKeyPress()` をトリガーしてください。 `document.addEventListener()` を使用して、1 つ目の引数としてイベント (引用符で囲みます) を受け取り、2 つ目の引数としてコールバックを受け取ることができます。

次に、`componentWillUnmount()`で、同じイベントリスナーを削除してください。 同じ引数を `document.removeEventListener()` に渡すことができます。 このライフサイクルメソッドを使用して、React コンポーネントでクリーンアップを実行してから、コンポーネントをアンマウントして破棄することをお勧めします。 イベントリスナーの削除はそうしたクリーンアップアクションの例です。

# --hints--

`MyComponent` で、`h1` タグを囲む `div` 要素をレンダーします。

```js
assert(
  (() => {
    const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
    return mockedComponent.find('div').children().find('h1').length === 1;
  })()
);
```

`componentDidMount` で `keydown` リスナーをドキュメントにアタッチします。

```js
assert(
  (() => {
    const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
    const didMountString = mockedComponent
      .instance()
      .componentDidMount.toString();
    return new RegExp(
      'document.addEventListener(.|\n|\r)+keydown(.|\n|\r)+this.handleKeyPress'
    ).test(didMountString);
  })()
);
```

`componentWillUnmount` で `keydown` リスナーをドキュメントから削除します。

```js
assert(
  (() => {
    const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
    const willUnmountString = mockedComponent
      .instance()
      .componentWillUnmount.toString();
    return new RegExp(
      'document.removeEventListener(.|\n|\r)+keydown(.|\n|\r)+this.handleKeyPress'
    ).test(willUnmountString);
  })()
);
```

コンポーネントがマウントされてから `enter` が押されたら、その state と、レンダーされる `h1` タグを更新します。

```js
async () => {
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250));
  const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
  const beforeState = mockedComponent.state('message');
  const beforeText = mockedComponent.find('h1').text();
  const pressEnterKey = () => {
    mockedComponent.instance().handleKeyPress({ keyCode: 13 });
    return waitForIt(() => {
      mockedComponent.update();
      return {
        state: mockedComponent.state('message'),
        text: mockedComponent.find('h1').text()
      };
    });
  };
  const afterKeyPress = await pressEnterKey();
  assert(
    beforeState !== afterKeyPress.state && beforeText !== afterKeyPress.text
  );
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
      message: ''
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  // Change code below this line
  componentDidMount() {

  }
  componentWillUnmount() {

  }
  // Change code above this line
  handleEnter() {
    this.setState((state) => ({
      message: state.message + 'You pressed the enter key! '
    }));
  }
  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.handleEnter();
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
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
      message: ''
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleEnter = this.handleEnter.bind(this);  }
  componentDidMount() {
    // Change code below this line
    document.addEventListener('keydown', this.handleKeyPress);
    // Change code above this line
  }
  componentWillUnmount() {
    // Change code below this line
    document.removeEventListener('keydown', this.handleKeyPress);
    // Change code above this line
  }
  handleEnter() {
    this.setState((state) => ({
      message: state.message + 'You pressed the enter key! '
    }));
  }
  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.handleEnter();
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
};
```
