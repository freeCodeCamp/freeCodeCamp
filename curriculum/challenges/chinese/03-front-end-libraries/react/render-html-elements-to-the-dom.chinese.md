---
id: 5a24bbe0dba28a8d3cbd4c5f
title: Render HTML Elements to the DOM
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: 将HTML元素渲染到DOM
---

## Description
<section id="description">到目前为止，您已经了解到JSX是一种在JavaScript中编写可读HTML的便捷工具。使用React，我们可以使用React的渲染API（称为ReactDOM）将此JSX直接渲染到HTML DOM。 ReactDOM提供了一种简单的方法来将React元素呈现给DOM，如下所示： <code>ReactDOM.render(componentToRender, targetNode)</code> ，其中第一个参数是要呈现的React元素或组件，第二个参数是DOM节点您想要将组件渲染到。正如您所料，必须在JSX元素声明之后调用<code>ReactDOM.render()</code> ，就像在使用它们之前必须声明变量一样。 </section>

## Instructions
<section id="instructions">代码编辑器有一个简单的JSX组件。使用<code>ReactDOM.render()</code>方法将此组件呈现给页面。您可以直接将定义的JSX元素作为第一个参数传递，并使用<code>document.getElementById()</code>来选择要将其渲染到的DOM节点。有一个<code>div</code> ， <code>id=&#39;challenge-node&#39;</code>可供您使用。确保不要更改<code>JSX</code>常量。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 常量<code>JSX</code>应该返回一个<code>div</code>元素。
    testString: assert(JSX.type === 'div');
  - text: <code>div</code>应包含一个<code>h1</code>标记作为第一个元素。
    testString: assert(JSX.props.children[0].type === 'h1');
  - text: <code>div</code>应该包含一个<code>p</code>标签作为第二个元素。
    testString: assert(JSX.props.children[1].type === 'p');
  - text: 提供的JSX元素应该使用id <code>challenge-node</code>呈现给DOM <code>challenge-node</code> 。
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
// solution required
```

/section>
