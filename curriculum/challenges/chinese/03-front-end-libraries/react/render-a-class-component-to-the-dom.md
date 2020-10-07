---
id: 5a24c314108439a4d4036167
challengeType: 6
forumTopicId: 301404
title: 渲染 class 组件为 Dom 树
---

## Description
<section id='description'>
你可能还记得在早期挑战中使用 ReactDOM API 将 JSX 元素渲染到 DOM，这与渲染 React 组件的过程十分相似。过去的几个挑战主要针对组件和组合，因此渲染是在幕后为你完成的。但是，如果不调用 ReactDOM API，你编写的任何 React 代码都不会渲染到 DOM。
以下是语法的复习：<code>ReactDOM.render(componentToRender, targetNode)</code>。第一个参数是要渲染的 React 组件。第二个参数是要在其中渲染该组件的 DOM 节点。
React 组件传递到<code>ReactDOM.render()</code>与 JSX 元素略有不同。对于 JSX 元素，你传入的是要渲染的元素的名称。但是，对于 React 组件，你需要使用与渲染嵌套组件相同的语法，例如<code>ReactDOM.render(&lt;ComponentToRender /&gt;, targetNode)</code>。你可以将此语法用于ES6类组件和函数组件。
</section>

## Instructions
<section id='instructions'>
在后台为你定义了<code>Fruits</code>和<code>Vegetables</code>组件。将两个组件渲染为<code>TypesOfFood</code>组件的子组件，然后将<code>TypesOfFood</code>渲染到 DOM 节点，在这个挑战中，请渲染到 id 为<code>challenge-node</code>的<code>div</code>中。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>TypesOfFood</code>组件应该返回单个<code>div</code>元素。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood)); return mockedComponent.children().type() === 'div'; })());
  - text: <code>TypesOfFood</code>组件应该在<code>h1</code>元素之后渲染<code>Fruits</code>组件。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood)); return mockedComponent.children().childAt(1).name() === 'Fruits'; })());
  - text: <code>TypesOfFood</code>组件应该在<code>Fruits</code>组件之后渲染<code>Vegetables</code>组件。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood)); return mockedComponent.children().childAt(2).name() === 'Vegetables'; })());
  - text: <code>TypesOfFood</code>组件应该渲染到 id 为<code>challenge-node</code>的<code>div</code>中。
    testString: assert((function() { const html = document.getElementById('challenge-node').childNodes[0].innerHTML; return html.includes('<div><h2>Fruits:</h2><h4>Non-Citrus:</h4><ul><li>Apples</li><li>Blueberries</li><li>Strawberries</li><li>Bananas</li></ul><h4>Citrus:</h4><ul><li>Lemon</li><li>Lime</li><li>Orange</li><li>Grapefruit</li></ul></div>') && html.includes('<div><h2>Vegetables:</h2><ul><li>Brussel Sprouts</li><li>Broccoli</li><li>Squash</li></ul></div>'); })());

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {/* change code below this line */}

        {/* change code above this line */}
      </div>
    );
  }
};

// change code below this line

```

</div>

### Before Test
<div id='jsx-setup'>

```jsx

const Fruits = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <h4>Non-Citrus:</h4>
        <ul>
          <li>Apples</li>
          <li>Blueberries</li>
          <li>Strawberries</li>
          <li>Bananas</li>
        </ul>
      <h4>Citrus:</h4>
        <ul>
          <li>Lemon</li>
          <li>Lime</li>
          <li>Orange</li>
          <li>Grapefruit</li>
        </ul>
    </div>
  );
};
const Vegetables = () => {
  return (
    <div>
      <h2>Vegetables:</h2>
      <ul>
        <li>Brussel Sprouts</li>
        <li>Broccoli</li>
        <li>Squash</li>
      </ul>
    </div>
  );
};

```

</div>


</section>

## Solution
<section id='solution'>


```js
class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {/* change code below this line */}
          <Fruits />
           <Vegetables />
         {/* change code above this line */}
      </div>
    );
  }
};

// change code below this line
ReactDOM.render(<TypesOfFood />, document.getElementById('challenge-node'));
```

</section>
