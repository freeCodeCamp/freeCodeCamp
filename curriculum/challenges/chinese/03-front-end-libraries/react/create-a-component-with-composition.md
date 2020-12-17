---
id: 5a24c314108439a4d4036164
title: 用组合的方式创建一个 React 组件
challengeType: 6
forumTopicId: 301383
---

# --description--

现在我们来看看如何组合多个 React 组件。想象一下，你正在构建一个应用程序，并创建了三个组件：`Navbar`、`Dashboard`和`Footer`。

要将这些组件组合在一起，你可以创建一个`App`*父组件*，将这三个组件分别渲染成为*子组件*。要在 React 组件中渲染一个子组件，你需要在 JSX 中包含作为自定义 HTML 标签编写的组件名称。例如，在`render`方法中，你可以这样编写：

```jsx
return (
 <App>
  <Navbar />
  <Dashboard />
  <Footer />
 </App>
)
```

当 React 遇到引用另一个组件的自定义 HTML 标签时（如本例所示，组件名称包含在`< />`中），它在标签的位置渲染该组件的标签。这可以说明`App`组件和`Navbar`、`Dashboard`以及`Footer`之间的父子关系。

# --instructions--

在代码编辑器中，有一个名为`ChildComponent`的简单功能组件和一个名为`ParentComponent`的 React 组件。通过在`ParentComponent`中渲染`ChildComponent`来将两者组合在一起。确保使用正斜杠关闭`ChildComponent`标签。

**注意：** `ChildComponent`是使用 ES6 的箭头函数定义的，因为这是使用 React 时非常常见的做法。但是，要知道这只是一个函数。如果你不熟悉箭头函数语法，请参阅 JavaScript 部分。

# --hints--

React 组件应该返回单个`div`元素。

```js
assert(
  (function () {
    var shallowRender = Enzyme.shallow(React.createElement(ParentComponent));
    return shallowRender.type() === 'div';
  })()
);
```

组件应该返回两个嵌套的元素。

```js
assert(
  (function () {
    var shallowRender = Enzyme.shallow(React.createElement(ParentComponent));
    return shallowRender.children().length === 2;
  })()
);
```

组件的第二个子元素应该是 ChildComponent。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ParentComponent));
    return (
      mockedComponent.find('ParentComponent').find('ChildComponent').length ===
      1
    );
  })()
);
```

# --solutions--

