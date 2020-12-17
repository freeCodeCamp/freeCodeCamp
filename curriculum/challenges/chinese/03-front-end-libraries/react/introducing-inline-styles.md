---
id: 5a24c314108439a4d4036181
title: 介绍内联样式
challengeType: 6
forumTopicId: 301395
---

# --description--

还有其他复杂的概念可以为你的 React 代码增加强大的功能。但是，你可能会想知道更简单的问题，比如：如何对在 React 中创建的 JSX 元素进行风格化。你可能知道，由于[将 class 应用于 JSX 元素的方式](define-an-html-class-in-jsx)与 HTML 中的使用并不完全相同。

如果从样式表导入样式，它就没有太大的不同。使用`className`属性将 class 应用于 JSX 元素，并将样式应用于样式表中的 class。另一种选择是使用***内联***样式，这在 ReactJS 开发中非常常见。

你将内联样式应用于 JSX 元素，类似于你在 HTML 中的操作方式，但有一些 JSX 差异。以下是 HTML 中内联样式的示例：

`<div style="color: yellow; font-size: 16px">Mellow Yellow</div>`

JSX 元素使用`style`属性，但是由于 JSX 的传输方式，你不能将值设置为`字符串`。相反，你应将其设置为 JavaScript`对象`。这里有一个例子：

`<div style={{color: "yellow", fontSize: 16}}>Mellow Yellow</div>`

注意我们使用驼峰式命名的 "fontSize" 属性，这是因为 React 不会接受样式对象中的连字符。React 将在 HTML 中为我们应用正确的属性名称。

# --instructions--

在代码编辑器的`div`中添加一个`style`属性，使文本颜色为红色，字体大小为 72px。

请注意，你可以选择将字体大小设置为数字，省略单位 "px"，或者将其写为 "72px"。

# --hints--

组件应该渲染一个`div`元素。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(Colorful));
    return mockedComponent.children().type() === 'div';
  })()
);
```

`div`元素应该是`红色`的。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(Colorful));
    return mockedComponent.children().props().style.color === 'red';
  })()
);
```

`div`元素的字体大小应为`72px`。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(Colorful));
    return (
      mockedComponent.children().props().style.fontSize === 72 ||
      mockedComponent.children().props().style.fontSize === '72' ||
      mockedComponent.children().props().style.fontSize === '72px'
    );
  })()
);
```

# --solutions--

