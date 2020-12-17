---
id: 5a24c314108439a4d4036174
title: 将 this 绑定到 Class 方法
challengeType: 6
forumTopicId: 301379
---

# --description--

除了设置和更新`state`之外，你还可以为组件类定义方法。类方法通常需要使用`this`关键字，以便它可以访问方法中类的属性（例如`state`和`props`）。有几种方法可以让你的类方法访问`this`。

一种常见的方法是在构造函数中显式地绑定`this`，这样当组件初始化时，`this`就会绑定到类方法。你可能已经注意到上一个挑战使用了`this.handleClick = this.handleClick.bind(this)`用于其在构造函数中的`handleClick`方法。然后，当你在类方法中调用像`this.setState()`这样的函数时，`this`指的是这个类，而不是`undefined`。

**注意：** `this`关键字是 JavaScript 中最令人困惑的方面之一，但它在 React 中扮演着重要的角色。虽然它的行为在这里是完全正常的，但是这些课程并不深入研究`this`，所以如果以上内容令你感到困惑，请参考其他课程！

# --instructions--

代码编辑器有一个带有`state`的组件，用于跟踪项目计数。它还有一个方法，允许你增加此项目计数。但是，该方法不起作用，因为它使用了未定义的`this`关键字。可以通过将`this`显式绑定到组件构造函数中的`addItem()`方法来修复它。

接下来，向 render 方法中的`button`元素添加一个单击处理程序。当按钮接收到单击事件时，它应该触发`addItem()`方法。记住，传递给`onClick`处理程序的方法需要使用花括号，因为它应该直接被解释为 JavaScript。

完成上述步骤后，你应该可以单击按钮并查看 HTML 中的项目计数增量。

# --hints--

`MyComponent`应返回`div`元素，该元素按顺序包含两个元素，一个按钮和一个`h1`元素。

```js
assert(
  Enzyme.mount(React.createElement(MyComponent)).find('div').length === 1 &&
    Enzyme.mount(React.createElement(MyComponent))
      .find('div')
      .childAt(0)
      .type() === 'button' &&
    Enzyme.mount(React.createElement(MyComponent))
      .find('div')
      .childAt(1)
      .type() === 'h1'
);
```

`MyComponent`的 state 应该使用键值对`{ itemCount: 0 }`进行初始化。

```js
assert(
  Enzyme.mount(React.createElement(MyComponent)).state('text') === 'Hello'
);
```

单击`button`元素应该运行`addItem`方法，并使 state`itemCount`的计数增加`1`。

```js
async () => {
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250));
  const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
  const first = () => {
    mockedComponent.setState({ text: 'Hello' });
    return waitForIt(() => mockedComponent.state('text'));
  };
  const second = () => {
    mockedComponent.find('button').simulate('click');
    return waitForIt(() => mockedComponent.state('text'));
  };
  const firstValue = await first();
  const secondValue = await second();
  assert(firstValue === 'Hello' && secondValue === 'You clicked!');
};
```

# --solutions--

