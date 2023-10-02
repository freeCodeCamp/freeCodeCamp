---
id: 5a24c314108439a4d4036180
title: shouldComponentUpdate で再レンダーを最適化する
challengeType: 6
forumTopicId: 301398
dashedName: optimize-re-renders-with-shouldcomponentupdate
---

# --description--

ここまでは、新しい `state` または新しい `props` を受け取ったコンポーネントはどれも、自分自身とそのすべての子を再レンダーします。 通常はこの処理で大丈夫です。 しかし React では、子コンポーネントが新しい `state` または `props` を受け取ったときに呼び出すことができるライフサイクルメソッドが用意されていて、コンポーネントを更新する必要があるかどうかを具体的に宣言することができます。 これは `shouldComponentUpdate()` というメソッドで、パラメーターとして `nextProps` と `nextState` を受け取ります。

このメソッドはパフォーマンスを最適化する便利な手段です。 たとえばデフォルトの動作では、新しい `props` を受け取ると、たとえその `props` が変更されていなくてもコンポーネントが再レンダーされます。 `shouldComponentUpdate()` を使用して `props` を比較することで、この動作を回避することができます。 メソッドからは、コンポーネントの更新が必要かどうかを React に伝える `boolean` 値を返す必要があります。 現在の props (`this.props`) を次の props (`nextProps`) と比較して、更新する必要があるかどうかを判断し、それに応じて `true` または `false` を返すことができます。

# --instructions--

`shouldComponentUpdate()` メソッドが `OnlyEvens` というコンポーネントに追加されています。 現在、このメソッドは `true` を返すため、`OnlyEvens` は新しい `props` を受け取るたびに再レンダーされます。 メソッドを変更して、新しい props の `value` が偶数の場合にのみ `OnlyEvens` を更新するようにしてください。 `Add` ボタンをクリックして、ライフサイクルフックがトリガーされるときにブラウザーのコンソールでイベントの順序を確認してください。

# --hints--

`Controller` コンポーネントで、`OnlyEvens` コンポーネントを子としてレンダーします。

```js
assert(
  (() => {
    const mockedComponent = Enzyme.mount(React.createElement(Controller));
    return (
      mockedComponent.find('Controller').length === 1 &&
      mockedComponent.find('OnlyEvens').length === 1
    );
  })()
);
```

`shouldComponentUpdate` メソッドを `OnlyEvens` コンポーネントで定義します。

```js
assert(
  (() => {
    const child = React.createElement(OnlyEvens)
      .type.prototype.shouldComponentUpdate.toString()
      .replace(/s/g, '');
    return child !== 'undefined';
  })()
);
```

`OnlyEvens` コンポーネントから、`this.props.value` の値をレンダーする `h1` タグを返します。

```js
(() => {
  const mockedComponent = Enzyme.mount(React.createElement(Controller));
  const first = () => {
    mockedComponent.setState({ value: 1000 });
    return mockedComponent.find('h1').html();
  };
  const second = () => {
    mockedComponent.setState({ value: 10 });
    return mockedComponent.find('h1').html();
  };
  const firstValue = first();
  const secondValue = second();
  assert(firstValue === '<h1>1000</h1>' && secondValue === '<h1>10</h1>');
})();
```

`nextProps.value` が偶数の場合にのみ、`OnlyEvens` を再レンダーします。

```js
(() => {
  const mockedComponent = Enzyme.mount(React.createElement(Controller));
  const first = () => {
    mockedComponent.setState({ value: 8 });
    return mockedComponent.find('h1').text();
  };
  const second = () => {
    mockedComponent.setState({ value: 7 });
    return mockedComponent.find('h1').text();
  };
  const third = () => {
    mockedComponent.setState({ value: 42 });
    return mockedComponent.find('h1').text();
  };
  const firstValue = first();
  const secondValue = second();
  const thirdValue = third();
  assert(firstValue === '8' && secondValue === '8' && thirdValue === '42');
})();
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<Controller />, document.getElementById('root'));
```

## --seed-contents--

```jsx
class OnlyEvens extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should I update?');
    // Change code below this line
    return true;
    // Change code above this line
  }
  componentDidUpdate() {
    console.log('Component re-rendered.');
  }
  render() {
    return <h1>{this.props.value}</h1>;
  }
}

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.addValue = this.addValue.bind(this);
  }
  addValue() {
    this.setState(state => ({
      value: state.value + 1
    }));
  }
  render() {
    return (
      <div>
        <button onClick={this.addValue}>Add</button>
        <OnlyEvens value={this.state.value} />
      </div>
    );
  }
}
```

# --solutions--

```jsx
class OnlyEvens extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should I update?');
    // Change code below this line
    return nextProps.value % 2 === 0;
    // Change code above this line
  }
  componentDidUpdate() {
    console.log('Component re-rendered.');
  }
  render() {
    return <h1>{this.props.value}</h1>;
  }
}

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.addValue = this.addValue.bind(this);
  }
  addValue() {
    this.setState(state => ({
      value: state.value + 1
    }));
  }
  render() {
    return (
      <div>
        <button onClick={this.addValue}>Add</button>
        <OnlyEvens value={this.state.value} />
      </div>
    );
  }
}
```
