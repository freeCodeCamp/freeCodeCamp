---
id: 5a24c314108439a4d4036167
title: Render a Class Component to the DOM
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: 将类组件渲染到DOM
---

## Description
<section id="description">您可能还记得在早期挑战中使用ReactDOM API将JSX元素呈现给DOM。渲染React组件的过程看起来非常相似。过去的几个挑战集中在组件和组合上，因此渲染是在幕后为您完成的。但是，您编写的React代码都不会在不调用ReactDOM API的情况下呈现给DOM。这是对语法的更新： <code>ReactDOM.render(componentToRender, targetNode)</code> 。第一个参数是要呈现的React组件。第二个参数是要在其中呈现该组件的DOM节点。 React组件传递到<code>ReactDOM.render()</code>与JSX元素略有不同。对于JSX元素，您传入要呈现的元素的名称。但是，对于React组件，您需要使用与渲染嵌套组件相同的语法，例如<code>ReactDOM.render(&lt;ComponentToRender /&gt;, targetNode)</code> 。您可以将此语法用于ES6类组件和功能组件。 </section>

## Instructions
<section id="instructions"> <code>Fruits</code>和<code>Vegetables</code>组件都是在幕后为您定义的。将两个组件渲染为<code>TypesOfFood</code>组件的<code>TypesOfFood</code>组件，然后将<code>TypesOfFood</code>呈现给DOM。有一个<code>div</code> ， <code>id=&#39;challenge-node&#39;</code>可供您使用。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>TypesOfFood</code>组件应返回单个<code>div</code>元素。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood)); return mockedComponent.children().type() === 'div'; })());
  - text: <code>TypesOfFood</code>组件应该在<code>h1</code>元素之后呈现<code>Fruits</code>组件。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood)); return mockedComponent.children().childAt(1).name() === 'Fruits'; })());
  - text: <code>TypesOfFood</code>组件应该在<code>Fruits</code>之后呈现<code>Vegetables</code>组件。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood)); return mockedComponent.children().childAt(2).name() === 'Vegetables'; })());
  - text: <code>TypesOfFood</code>组件应该使用id <code>challenge-node</code>呈现给<code>div</code>的DOM。
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
// solution required
```

/section>
