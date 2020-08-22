---
id: 5a24c314108439a4d4036166
title: Compose React Components
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: 撰写反应组件
---

## Description
<section id="description">随着挑战继续使用更复杂的组合与React组件和JSX，有一点需要注意。在其他组件中渲染ES6样式类组件与渲染您在最后几个挑战中使用的简单组件没有什么不同。您可以在其他组件中呈现JSX元素，无状态功能组件和ES6类组件。 </section>

## Instructions
<section id="instructions">在代码编辑器中， <code>TypesOfFood</code>组件已经在呈现一个名为<code>Vegetables</code>的组件。此外，还有最后一项挑战中的<code>Fruits</code>成分。将两种成分<code>NonCitrus</code> <code>Fruits</code> - 首先是<code>NonCitrus</code> ，然后是<code>Citrus</code> 。这两个组件都是在后台为您提供的。接下来，将<code>Fruits</code>类组件嵌入到<code>TypesOfFood</code>组件中，位于<code>h1</code>标题下方和<code>Vegetables</code>上方。结果应该是一系列嵌套组件，它们使用两种不同的组件类型。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>TypesOfFood</code>组件应返回单个<code>div</code>元素。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood)); return mockedComponent.children().type() === 'div'; })());
  - text: <code>TypesOfFood</code>组件应返回<code>Fruits</code>组件。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood)); return mockedComponent.children().childAt(1).name() === 'Fruits'; })());
  - text: <code>Fruits</code>组件应返回<code>NonCitrus</code>组件和<code>Citrus</code>组件。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood)); return (mockedComponent.find('Fruits').children().find('NonCitrus').length === 1 && mockedComponent.find('Fruits').children().find('Citrus').length === 1); })());
  - text: <code>TypesOfFood</code>组件应返回<code>Fruits</code>组件下面的<code>Vegetables</code>组件。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood)); return mockedComponent.children().childAt(2).name() === 'Vegetables'; })());

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class Fruits extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        { /* change code below this line */ }

         { /* change code above this line */ }
      </div>
    );
  }
};

class TypesOfFood extends React.Component {
  constructor(props) {
     super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        { /* change code below this line */ }

        { /* change code above this line */ }
        <Vegetables />
      </div>
    );
  }
};

```

</div>

### Before Test
<div id='jsx-setup'>

```jsx
class NonCitrus extends React.Component {
  render() {
    return (
      <div>
        <h4>Non-Citrus:</h4>
        <ul>
          <li>Apples</li>
          <li>Blueberries</li>
          <li>Strawberries</li>
          <li>Bananas</li>
        </ul>
      </div>
    );
  }
};
class Citrus extends React.Component {
  render() {
    return (
      <div>
        <h4>Citrus:</h4>
        <ul>
          <li>Lemon</li>
          <li>Lime</li>
          <li>Orange</li>
          <li>Grapefruit</li>
        </ul>
      </div>
    );
  }
};
class Vegetables extends React.Component {
  render() {
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
     }
};

```

</div>

### After Test
<div id='jsx-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
