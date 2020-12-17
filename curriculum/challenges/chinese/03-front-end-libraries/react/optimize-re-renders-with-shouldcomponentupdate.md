---
id: 5a24c314108439a4d4036180
title: 使用 shouldComponentUpdate 优化重新渲染
challengeType: 6
forumTopicId: 301398
---

# --description--

到目前为止，如果任何组件接收到新的`state`或新的`props`，它会重新渲染自己及其所有子组件。这通常是好的。但是 React 提供了一种生命周期方法，当子组件接收到新的`state`或`props`时，你可以调用该方法，并特别声明组件是否应该更新。方法是`shouldComponentUpdate()`，它将`nextProps`和`nextState`作为参数。

这种方法是优化性能的有效方法。例如，默认行为是，当组件接收到新的`props`时，即使`props`没有改变，它也会重新渲染。你可以通过使用`shouldComponentUpdate()`比较`props`来防止这种情况。该方法必须返回一个布尔值，该值告诉 React 是否更新组件。你可以比较当前的 props（`this.props`）和下一个 props（`nextProps`），以确定你是否需要更新，并相应地返回`true`或`false`。

# --instructions--

`shouldComponentUpdate()`方法添加到名为`OnlyEvens`的组件中。目前，该方法返回`true`，因此每次收到新的`props`时，`OnlyEvens`都会重新渲染。修改该方法，以便`OnlyEvens`仅在其新 props 的`value`为偶数时更新。单击`Add`按钮，在触发其他生命周期钩子时，在浏览器控制台中查看事件的顺序。

# --hints--

`Controller`组件应该将`OnlyEvens`组件渲染为子组件。

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

应该在`OnlyEvens`组件上定义`shouldComponentUpdate`方法。

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

`OnlyEvens`组件应该返回一个`h1`标签，该标签渲染`this.props.value`的值。

```js
async () => {
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250));
  const mockedComponent = Enzyme.mount(React.createElement(Controller));
  const first = () => {
    mockedComponent.setState({ value: 1000 });
    return waitForIt(() => mockedComponent.find('h1').html());
  };
  const second = () => {
    mockedComponent.setState({ value: 10 });
    return waitForIt(() => mockedComponent.find('h1').html());
  };
  const firstValue = await first();
  const secondValue = await second();
  assert(firstValue === '<h1>1000</h1>' && secondValue === '<h1>10</h1>');
};
```

只有在`nextProps.value`为偶数时，`OnlyEvens`才会重新渲染。

```js
async () => {
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250));
  const mockedComponent = Enzyme.mount(React.createElement(Controller));
  const first = () => {
    mockedComponent.setState({ value: 8 });
    return waitForIt(() => mockedComponent.find('h1').text());
  };
  const second = () => {
    mockedComponent.setState({ value: 7 });
    return waitForIt(() => mockedComponent.find('h1').text());
  };
  const third = () => {
    mockedComponent.setState({ value: 42 });
    return waitForIt(() => mockedComponent.find('h1').text());
  };
  const firstValue = await first();
  const secondValue = await second();
  const thirdValue = await third();
  assert(firstValue === '8' && secondValue === '8' && thirdValue === '42');
};
```

# --solutions--

