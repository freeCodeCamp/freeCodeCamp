---
id: 5a24c314108439a4d4036148
title: 将 Redux 连接到 Messages App
challengeType: 6
forumTopicId: 301427
---

# --description--

知道`connect`怎么实现 React 和 Redux 的连接后，我们可以在 React 组件中应用上面学到的内容。

在上一课，连接到 Redux 的组件命名为`Presentational`，这个命名不是任意的，这样的术语通常是指未直接连接到 Redux 的 React 组件，他们只负责执行接收 props 的函数来实现 UI 的呈现。与上一挑战相比，本挑战需要把容器组件连接到 Redux。这些组件通常负责把 actions 分派给 store，且经常给子组件传入 store state 属性。

# --instructions--

到目前为止，我们的编辑器上已包含了整个章节的代码，唯一不同的是，React 组件被重新命名为`Presentational`，即展示层组件。创建一个新组件，保存在名为`Container`的常量中。这个常量用`connect`把`Presentational`组件和 Redux 连接起来。然后，在`AppWrapper`中渲染 React Redux 的`Provider`组件，给`Provider`传入 Redux`store`属性并渲染`Container`为子组件。完成这些，消息 app 应用会再次渲染页面。

# --hints--

`AppWrapper`应渲染该页面。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(AppWrapper));
    return mockedComponent.find('AppWrapper').length === 1;
  })()
);
```

`Presentational`组件应渲染`h2`、`input`、`button`、`ul`四个元素。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(AppWrapper));
    return mockedComponent.find('Presentational').length === 1;
  })()
);
```

`Presentational`组件应渲染`h2`、`input`、`button`、`ul`四个元素。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(AppWrapper));
    const PresentationalComponent = mockedComponent.find('Presentational');
    return (
      PresentationalComponent.find('div').length === 1 &&
      PresentationalComponent.find('h2').length === 1 &&
      PresentationalComponent.find('button').length === 1 &&
      PresentationalComponent.find('ul').length === 1
    );
  })()
);
```

`Presentational`组件应接收 Redux store 的`消息`属性。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(AppWrapper));
    const PresentationalComponent = mockedComponent.find('Presentational');
    const props = PresentationalComponent.props();
    return Array.isArray(props.messages);
  })()
);
```

`Presentational`组件应接收创建 action 的函数`submitMessage`属性。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(AppWrapper));
    const PresentationalComponent = mockedComponent.find('Presentational');
    const props = PresentationalComponent.props();
    return typeof props.submitNewMessage === 'function';
  })()
);
```

# --solutions--

