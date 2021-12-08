---
id: 5a24c314108439a4d403616e
title: 使用 this.props 訪問 Props
challengeType: 6
forumTopicId: 301375
dashedName: access-props-using-this-props
---

# --description--

前幾項挑戰涵蓋了將 props 傳遞給子組件的基本方法。 但是，倘若接收 prop 的子組件不是無狀態函數組件，而是一個 ES6 類組件又當如何呢？ ES6 類組件訪問 props 的方法略有不同。

任何時候，如果要引用類組件本身，可以使用 `this` 關鍵字。 要訪問類組件中的 props，需要在在訪問它的代碼前面添加 `this`。 例如，如果 ES6 類組件有一個名爲 `data` 的 prop，可以在 JSX 中這樣寫：`{this.props.data}`。

# --instructions--

在父組件 `App` 中渲染 `Welcome` 組件的一個實例。 在這裏，給 `Welcome` 一個 `name` 的 prop，並給它賦值一個字符串。 在 `Welcome` 的子節點裏，訪問 `strong` 標籤內的 `name` prop。

# --hints--

`App` 組件應返回單個 `div` 元素。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(App));
    return mockedComponent.children().type() === 'div';
  })()
);
```

`App` 的子組件應該是 `Welcome` 組件。

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

`Welcome` 組件應該有一個名爲 `name` 的 prop。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(App));
    return mockedComponent.find('Welcome').props().name;
  })()
);
```

`Welcome` 組件應顯示你在 `strong` 標籤中作爲 `name` 屬性傳遞的字符串。

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
