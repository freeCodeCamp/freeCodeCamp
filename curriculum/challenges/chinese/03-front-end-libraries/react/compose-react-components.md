---
id: 5a24c314108439a4d4036166
challengeType: 6
forumTopicId: 301381
title: 组合 React 组件
---

## Description
<section id='description'>
随着挑战继续，我们将组合使用更复杂的 React 组件和 JSX，有一点需要注意。在其他组件中渲染 ES6 风格的类组件和渲染你在过去几个挑战中使用的简单组件没有什么不同。你可以在其他组件中渲染 JSX 元素、无状态功能组件和 ES6 类组件。
</section>

## Instructions
<section id='instructions'>
在代码编辑器中，<code>TypesOfFood</code>组件已经渲染了一个名为<code>Vegetables</code>的组件。此外，还有上次挑战中的<code>Fruits</code>组件。
在<code>Fruits</code>中嵌套两个组件，首先<code>NonCitrus</code>，然后是<code>Citrus</code>，这两个组件都是在后台为你提供的。接下来，将<code>Fruits</code>类组件嵌到<code>TypesOfFood</code>组件中，位于<code>h1</code>标题下方和<code>Vegetables</code>上方。结果应该是一系列嵌套的组件，它们使用两种不同的组件类型。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>TypesOfFood</code>组件应该返回单个<code>div</code>元素。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood)); return mockedComponent.children().type() === 'div'; })());
  - text: <code>TypesOfFood</code>组件应该返回<code>Fruits</code>组件。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood)); return mockedComponent.children().childAt(1).name() === 'Fruits'; })());
  - text: <code>Fruits</code>组件应该返回<code>NonCitrus</code>组件和<code>Citrus</code>组件。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood)); return (mockedComponent.find('Fruits').children().find('NonCitrus').length === 1 && mockedComponent.find('Fruits').children().find('Citrus').length === 1); })());
  - text: <code>TypesOfFood</code>组件应该返回<code>Vegetables</code>组件，且其位于<code>Fruits</code>组件之下。
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
ReactDOM.render(<TypesOfFood />, document.getElementById('root'))
```

</div>

</section>

## Solution
<section id='solution'>


```js
class Fruits extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        { /* change code below this line */ }
        <NonCitrus />
        <Citrus />
        { /* change code above this line */ }
      </div>
    )
  }
}

class TypesOfFood extends React.Component {
  constructor(props) {
     super(props);
  }
    render() {
      return (
        <div>
        <h1>Types of Food:</h1>
          { /* change code below this line */ }
          <Fruits />
          { /* change code above this line */ }
          <Vegetables />
        </div>
      );
    }
};
```

</section>
