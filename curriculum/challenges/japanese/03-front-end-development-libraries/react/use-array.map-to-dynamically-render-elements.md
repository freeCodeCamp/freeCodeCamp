---
id: 5a24c314108439a4d403618a
title: Array.map() を使用して動的に要素をレンダーする
challengeType: 6
forumTopicId: 301417
dashedName: use-array-map-to-dynamically-render-elements
---

# --description--

条件付きレンダーは便利ですが、コンポーネントでレンダーする必要のある要素の数がわからない場合もあります。 リアクティブなプログラミングでは多くの場合、アプリケーションの状態は実行時までわかりません。なぜなら、ユーザーとそのプログラムのやり取りに大きく依存しているからです。 そうした未知の状態を事前に正しく処理するコードを記述する必要があります。 こうした概念に対応できるのが、React での `Array.map()` の使用です。

たとえば、シンプルな「To Do List」アプリを作成するとします。 ユーザーが各自のリストにいくつのアイテムを持っているかは、プログラマーにはわかりません。 プログラムを使用している誰かが「今日は洗濯の日だ」と決めるよりもずっと前に、リスト要素の正しい数を動的にレンダーするようにコンポーネントを設定する必要があります。

# --instructions--

コードエディターで、`MyToDoList` コンポーネントのほとんどが設定済みです。 制御されたフォームのチャレンジを完了しているのであれば、このコードの一部に見覚えがあると思います。 `textarea` と `button` があり、ユーザーの state を追跡するいくつかのメソッドがありますが、まだ何もページにレンダーされません。

`constructor` の中で、`this.state` オブジェクトを作成し、2 つの状態を定義してください。1 つは `userInput` で、空の文字列として初期化してください。もう 1 つは `toDoList` で、空の配列として初期化してください。 次に、`render()` メソッドにある `items` 変数の隣の値 `null` を削除してください。 その場所で、コンポーネントの内部状態に格納されている `toDoList` 配列全体をマップし、各アイテムの `li` を動的にレンダーしてください。 文字列 `eat, code, sleep, repeat` を `textarea` に入力してボタンをクリックし、何が起きるかを確かめてみてください。

**注:** ご存知かもしれませんが、このようなマッピング操作によって作成される兄弟の子要素にはすべて、一意の `key` 属性を付ける必要があります。 心配はいりません。次のチャレンジでこのトピックを取り上げます。

# --hints--

MyToDoList コンポーネントが存在し、ページにレンダーする必要があります。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyToDoList));
    return mockedComponent.find('MyToDoList').length === 1;
  })()
);
```

`MyToDoList` の 1 つ目の子を `textarea` 要素にします。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyToDoList));
    return (
      mockedComponent.find('MyToDoList').children().childAt(0).type() ===
      'textarea'
    );
  })()
);
```

`MyToDoList` の 2 つ目の子を `br` 要素にします。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyToDoList));
    return (
      mockedComponent.find('MyToDoList').children().childAt(1).type() === 'br'
    );
  })()
);
```

`MyToDoList` の 3 つ目の子を `button` 要素にします。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyToDoList));
    return (
      mockedComponent.find('MyToDoList').children().childAt(2).type() ===
      'button'
    );
  })()
);
```

`MyToDoList` の state で、`toDoList` を空の配列として初期化します。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyToDoList));
    const initialState = mockedComponent.state();
    return (
      Array.isArray(initialState.toDoList) === true &&
      initialState.toDoList.length === 0
    );
  })()
);
```

`MyToDoList` の state で、`userInput` を空の文字列として初期化します。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyToDoList));
    const initialState = mockedComponent.state();
    return (
      typeof initialState.userInput === 'string' &&
      initialState.userInput.length === 0
    );
  })()
);
```

`Create List` ボタンがクリックされたら、`MyToDoList` コンポーネントから、`textarea` 要素に入力されたコンマ区切りリストのすべてのアイテムに対応するリストアイテム要素を含む、順序なしリストを動的に返します。

```js
(() => {
  const mockedComponent = Enzyme.mount(React.createElement(MyToDoList));
  const simulateChange = (el, value) =>
    el.simulate('change', { target: { value } });
  const state_1 = () => {
    return mockedComponent.find('ul').find('li');
  };
  const setInput = () => {
    return simulateChange(
      mockedComponent.find('textarea'),
      'testA, testB, testC'
    );
  };
  const click = () => {
    return mockedComponent.find('button').simulate('click');
  };
  const state_2 = () => {
    const nodes = mockedComponent.find('ul').find('li');
    return { nodes, text: nodes.reduce((t, n) => t + n.text().trim(), '') };
  };
  const setInput_2 = () => {
    return simulateChange(
      mockedComponent.find('textarea'),
      't1, t2, t3, t4, t5, t6'
    );
  };
  const click_1 = () => {
    return mockedComponent.find('button').simulate('click');
  };
  const state_3 = () => {
    const nodes = mockedComponent.find('ul').find('li');
    return { nodes, text: nodes.reduce((t, n) => t + n.text().trim(), '') };
  };
  const awaited_state_1 = state_1();
  const awaited_setInput = setInput();
  const awaited_click = click();
  const awaited_state_2 = state_2();
  const awaited_setInput_2 = setInput_2();
  const awaited_click_1 = click_1();
  const awaited_state_3 = state_3();
  assert(
    awaited_state_1.length === 0 &&
      awaited_state_2.nodes.length === 3 &&
      awaited_state_3.nodes.length === 6 &&
      awaited_state_2.text === 'testAtestBtestC' &&
      awaited_state_3.text === 't1t2t3t4t5t6'
  );
})();
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<MyToDoList />, document.getElementById('root'));
```

## --seed-contents--

```jsx
const textAreaStyles = {
  width: 235,
  margin: 5
};

class MyToDoList extends React.Component {
  constructor(props) {
    super(props);
    // Change code below this line

    // Change code above this line
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit() {
    const itemsArray = this.state.userInput.split(',');
    this.setState({
      toDoList: itemsArray
    });
  }
  handleChange(e) {
    this.setState({
      userInput: e.target.value
    });
  }
  render() {
    const items = null; // Change this line
    return (
      <div>
        <textarea
          onChange={this.handleChange}
          value={this.state.userInput}
          style={textAreaStyles}
          placeholder='Separate Items With Commas'
        />
        <br />
        <button onClick={this.handleSubmit}>Create List</button>
        <h1>My "To Do" List:</h1>
        <ul>{items}</ul>
      </div>
    );
  }
}
```

# --solutions--

```jsx
const textAreaStyles = {
  width: 235,
  margin: 5
};

class MyToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: [],
      userInput: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit() {
    const itemsArray = this.state.userInput.split(',');
    this.setState({
      toDoList: itemsArray
    });
  }
  handleChange(e) {
    this.setState({
      userInput: e.target.value
    });
  }
  render() {
    const items = this.state.toDoList.map((item, i) => {
      return <li key={i}>{item}</li>;
    });
    return (
      <div>
        <textarea
          onChange={this.handleChange}
          value={this.state.userInput}
          style={textAreaStyles}
          placeholder='Separate Items With Commas'
        />
        <br />
        <button onClick={this.handleSubmit}>Create List</button>
        <h1>My "To Do" List:</h1>
        <ul>{items}</ul>
      </div>
    );
  }
}
```
