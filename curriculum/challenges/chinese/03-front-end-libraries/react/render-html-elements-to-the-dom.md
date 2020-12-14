---
id: 5a24bbe0dba28a8d3cbd4c5f
challengeType: 6
forumTopicId: 301406
title: 渲染 HTML 元素为 DOM 树
---

## Description
<section id='description'>
到目前为止，你已经了解到 JSX 是一种在 JavaScript 中编写可读 HTML 的便捷工具。在 React 中，我们可以使用它的的渲染 API（ReactDOM）将此 JSX 直接渲染到 HTML DOM。
ReactDOM 提供了一个简单的方法来将 React 元素呈现给 DOM，如下所示：<code>ReactDOM.render(componentToRender, targetNode)</code>，其中第一个参数是要渲染的 React 元素或组件，第二个参数是要将组件渲染到的 DOM 节点。
如你所料，必须在 JSX 元素声明之后调用<code>ReactDOM.render()</code>，就像你在使用变量之前必须声明它一样。
</section>

## Instructions
<section id='instructions'>
代码编辑器有一个简单的 JSX 组件。使用<code>ReactDOM.render()</code>方法将该组件渲染到页面。可以将定义好的 JSX 元素直接作为第一个参数传入，并使用<code>document.getElementById()</code>来选择要渲染到的 DOM 节点，在这个挑战中，请渲染到 id 为<code>challenge-node</code>的<code>div</code>中。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 常量<code>JSX</code>应该返回一个<code>div</code>元素。
    testString: assert(JSX.type === 'div');
  - text: <code>div</code>应该包含一个<code>h1</code>标签作为第一个元素。
    testString: assert(JSX.props.children[0].type === 'h1');
  - text: <code>div</code>应该包含一个<code>p</code>标签作为第二个元素。
    testString: assert(JSX.props.children[1].type === 'p');
  - text: 提供的 JSX 元素应该渲染到 id 为<code>challenge-node</code>的 DOM 节点。
    testString: assert(document.getElementById('challenge-node').childNodes[0].innerHTML === '<h1>Hello World</h1><p>Lets render this to the DOM</p>');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
// change code below this line

```

</div>



</section>

## Solution
<section id='solution'>


```js
const JSX = (
<div>
  <h1>Hello World</h1>
  <p>Lets render this to the DOM</p>
</div>
);
// change code below this line
ReactDOM.render(JSX, document.getElementById('challenge-node'));
```

</section>
