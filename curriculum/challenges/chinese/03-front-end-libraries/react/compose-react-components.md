---
id: 5a24c314108439a4d4036166
title: 组合 React 组件
challengeType: 6
forumTopicId: 301381
---

# --description--

随着挑战继续，我们将组合使用更复杂的 React 组件和 JSX，有一点需要注意。在其他组件中渲染 ES6 风格的类组件和渲染你在过去几个挑战中使用的简单组件没有什么不同。你可以在其他组件中渲染 JSX 元素、无状态功能组件和 ES6 类组件。

# --instructions--

在代码编辑器中，`TypesOfFood`组件已经渲染了一个名为`Vegetables`的组件。此外，还有上次挑战中的`Fruits`组件。

在`Fruits`中嵌套两个组件，首先`NonCitrus`，然后是`Citrus`，这两个组件都是在后台为你提供的。接下来，将`Fruits`类组件嵌到`TypesOfFood`组件中，位于`h1`标题下方和`Vegetables`上方。结果应该是一系列嵌套的组件，它们使用两种不同的组件类型。

# --hints--

`TypesOfFood`组件应该返回单个`div`元素。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood));
    return mockedComponent.children().type() === 'div';
  })()
);
```

`TypesOfFood`组件应该返回`Fruits`组件。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood));
    return mockedComponent.children().childAt(1).name() === 'Fruits';
  })()
);
```

`Fruits`组件应该返回`NonCitrus`组件和`Citrus`组件。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood));
    return (
      mockedComponent.find('Fruits').children().find('NonCitrus').length ===
        1 &&
      mockedComponent.find('Fruits').children().find('Citrus').length === 1
    );
  })()
);
```

`TypesOfFood`组件应该返回`Vegetables`组件，且其位于`Fruits`组件之下。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood));
    return mockedComponent.children().childAt(2).name() === 'Vegetables';
  })()
);
```

# --solutions--

