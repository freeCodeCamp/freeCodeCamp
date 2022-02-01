---
id: 5a24c314108439a4d4036177
title: シンプルなカウンターを記述する
challengeType: 6
forumTopicId: 301425
dashedName: write-a-simple-counter
---

# --description--

ここまで説明した概念を駆使して、もっと複雑なステートフルコンポーネントを設計することができます。 `state` の初期化、`state` を設定するメソッドの記述、それらのメソッドをトリガーする click ハンドラーの割り当てなどが必要になります。

# --instructions--

`state` で `count` の値を追跡する `Counter` コンポーネントがあります。 2 つのボタンがあり、`increment()` メソッドと `decrement()` メソッドを呼び出します。 対応するボタンがクリックされたときにカウンターの値が 1 ずつ増加または減少するように、これらのメソッドを記述してください。 また、リセットボタンをクリックしたときにカウントを 0 に設定する `reset()` メソッドを作成してください。

**注:** ボタンの `className` は変更しないでください。 また、コンストラクターで新しく作成されるメソッドに必要なバインディングを忘れずに追加してください。

# --hints--

`Counter` から、`Increment!`、`Decrement!`、`Reset` の 3 つのボタンをこのテキスト内容の順序で含む `div` 要素を返します。

```js
assert(
  (() => {
    const mockedComponent = Enzyme.mount(React.createElement(Counter));
    return (
      mockedComponent.find('.inc').text() === 'Increment!' &&
      mockedComponent.find('.dec').text() === 'Decrement!' &&
      mockedComponent.find('.reset').text() === 'Reset'
    );
  })()
);
```

`count` プロパティを `0` に設定して `Counter` の state を初期化します。

```js
const mockedComponent = Enzyme.mount(React.createElement(Counter));
assert(mockedComponent.find('h1').text() === 'Current Count: 0');
```

Increment ボタンがクリックされたら、カウントを `1` 増やします。

```js
const mockedComponent = Enzyme.mount(React.createElement(Counter));
mockedComponent.find('.inc').simulate('click');
assert(mockedComponent.find('h1').text() === 'Current Count: 1');
```

Decrement ボタンがクリックされたら、カウントを `1` 減らします。

```js
const mockedComponent = Enzyme.mount(React.createElement(Counter));
mockedComponent.find('.dec').simulate('click');
assert(mockedComponent.find('h1').text() === 'Current Count: -1');
```

Reset ボタンがクリックされたら、カウントを `0` にリセットします。

```js
const mockedComponent = Enzyme.mount(React.createElement(Counter));
mockedComponent.setState({ count: 5 });
const currentCountElement = mockedComponent.find('h1');
assert(currentCountElement.text() === 'Current Count: 5');
mockedComponent.find('.reset').simulate('click');
assert(currentCountElement.text() === 'Current Count: 0');
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<Counter />, document.getElementById('root'))
```

## --seed-contents--

```jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    // Change code below this line

    // Change code above this line
  }
  // Change code below this line

  // Change code above this line
  render() {
    return (
      <div>
        <button className='inc' onClick={this.increment}>Increment!</button>
        <button className='dec' onClick={this.decrement}>Decrement!</button>
        <button className='reset' onClick={this.reset}>Reset</button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
};
```

# --solutions--

```jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  this.increment = this.increment.bind(this);
 this.decrement = this.decrement.bind(this);
 this.reset = this.reset.bind(this);
 }
  reset() {
    this.setState({
      count: 0
    });
  }
  increment() {
    this.setState(state => ({
      count: state.count + 1
    }));
  }
  decrement() {
    this.setState(state => ({
      count: state.count - 1
    }));
  }
  render() {
    return (
      <div>
        <button className='inc' onClick={this.increment}>Increment!</button>
        <button className='dec' onClick={this.decrement}>Decrement!</button>
        <button className='reset' onClick={this.reset}>Reset</button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
};
```
