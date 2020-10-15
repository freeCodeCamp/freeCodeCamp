---
id: 5a24c314108439a4d4036181
challengeType: 6
forumTopicId: 301395
title: 介绍内联样式
---

## Description
<section id='description'>
还有其他复杂的概念可以为你的 React 代码增加强大的功能。但是，你可能会想知道更简单的问题，比如：如何对在 React 中创建的 JSX 元素进行风格化。你可能知道，由于<a target="_blank" href="define-an-html-class-in-jsx">将 class 应用于 JSX 元素的方式</a>与 HTML 中的使用并不完全相同。
如果从样式表导入样式，它就没有太大的不同。使用<code>className</code>属性将 class 应用于 JSX 元素，并将样式应用于样式表中的 class。另一种选择是使用<strong><em>内联</em></strong>样式，这在 ReactJS 开发中非常常见。
你将内联样式应用于 JSX 元素，类似于你在 HTML 中的操作方式，但有一些 JSX 差异。以下是 HTML 中内联样式的示例：
<code>&lt;div style="color: yellow; font-size: 16px"&gt;Mellow Yellow&lt;/div&gt;</code>
JSX 元素使用<code>style</code>属性，但是由于 JSX 的传输方式，你不能将值设置为<code>字符串</code>。相反，你应将其设置为 JavaScript<code>对象</code>。这里有一个例子：
<code>&lt;div style={{color: "yellow", fontSize: 16}}&gt;Mellow Yellow&lt;/div&gt;</code>
注意我们使用驼峰式命名的 "fontSize" 属性，这是因为 React 不会接受样式对象中的连字符。React 将在 HTML 中为我们应用正确的属性名称。
</section>

## Instructions
<section id='instructions'>
在代码编辑器的<code>div</code>中添加一个<code>style</code>属性，使文本颜色为红色，字体大小为 72px。
请注意，你可以选择将字体大小设置为数字，省略单位 "px"，或者将其写为 "72px"。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 组件应该渲染一个<code>div</code>元素。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(Colorful)); return mockedComponent.children().type() === 'div'; })());
  - text: <code>div</code>元素应该是<code>红色</code>的。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(Colorful)); return mockedComponent.children().props().style.color === 'red'; })());
  - text: <code>div</code>元素的字体大小应为<code>72px</code>。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(Colorful)); return (mockedComponent.children().props().style.fontSize === 72 || mockedComponent.children().props().style.fontSize === '72' || mockedComponent.children().props().style.fontSize === '72px'); })());

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx

class Colorful extends React.Component {
  render() {
    return (
      <div>Big Red</div>
    );
  }
};

```

</div>


### After Test
<div id='jsx-teardown'>

```js
ReactDOM.render(<Colorful />, document.getElementById('root'))
```

</div>

</section>

## Solution
<section id='solution'>


```js
class Colorful extends React.Component {
  render() {
    return (
      <div style={{color: "red", fontSize: 72}}>Big Red</div>
    );
  }
};

```

</section>
