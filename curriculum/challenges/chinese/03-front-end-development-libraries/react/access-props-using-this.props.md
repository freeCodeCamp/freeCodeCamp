---
id: 5a24c314108439a4d403616e
title: 使用 this.props 访问 Props
challengeType: 6
forumTopicId: 301375
dashedName: access-props-using-this-props
---

# --description--

前几项挑战涵盖了将 props 传递给子组件的基本方法。 但是，倘若接收 prop 的子组件不是无状态函数组件，而是一个 ES6 类组件又当如何呢？ ES6 类组件访问 props 的方法略有不同。

任何时候，如果要引用类组件本身，可以使用 `this` 关键字。 要访问类组件中的 props，需要在在访问它的代码前面添加 `this`。 例如，如果 ES6 类组件有一个名为 `data` 的 prop，可以在 JSX 中这样写：`{this.props.data}`。

# --instructions--

在父组件 `App` 中渲染 `Welcome` 组件的一个实例。 在这里，给 `Welcome` 一个 `name` 的 prop，并给它赋值一个字符串。 在 `Welcome` 的子节点里，访问 `strong` 标签内的 `name` prop。

# --hints--

`App` 组件应返回单个 `div` 元素。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(App));
    return mockedComponent.children().type() === 'div';
  })()
);
```

`App` 的子组件应该是 `Welcome` 组件。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(App));
    return (
      mockedComponent.children().childAt(0).name() === 'Welcome'
    );
  })()
);
```

`Welcome` 组件应该有一个名为 `name` 的 prop。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(App));
    return mockedComponent.find('Welcome').props().name;
  })()
);
```

`Welcome` 组件应显示你在 `strong` 标签中作为 `name` 属性传递的字符串。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(App));
    return (
      mockedComponent.find('strong').text() ===
      mockedComponent.find('Welcome').props().name
    );
  })()
);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<App />, document.getElementById('root'))
```

## --seed-contents--

```jsx
class App extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
            { /* Change code below this line */ }
            <Welcome />
            { /* Change code above this line */ }
        </div>
    );
  }
};

class Welcome extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
          { /* Change code below this line */ }
          <p>Hello, <strong></strong>!</p>
          { /* Change code above this line */ }
        </div>
    );
  }
};
```

# --solutions--

```jsx
class Welcome extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
          { /* Change code below this line */ }
          <p>Hello, <strong>{this.props.name}</strong>!</p>
          { /* Change code above this line */ }
        </div>
    );
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
            { /* Change code below this line */ }
            <Welcome name="Quincy"/>
            { /* Change code above this line */ }
        </div>
    );
  }
};
```
