---
id: 5a24c314108439a4d4036165
challengeType: 6
forumTopicId: 301420
title: 使用 React 渲染嵌套组件
---

## Description
<section id='description'>
上一个挑战显示了组合两个组件的简单方法，但是有许多不同的方法可以把 React 组件组合在一起。
组件组合是 React 的强大功能之一。当你使用 React 时，应当先用组件的思路考虑清楚用户界面的结构（如上一个挑战中的 App 示例）。可以将 UI 分解为基本的构建块，这些构建块就是组件。这样做有助于将负责 UI 的代码与负责处理应用程序逻辑的代码分开，并可以大大简化复杂项目的开发和维护。
</section>

## Instructions
<section id='instructions'>
代码编辑器中定义了两个功能组件，分别是<code>TypesOfFruit</code>和<code>Fruits</code>。请把<code>TypesOfFruit</code>组件放到<code>Fruits</code>组件中，然后把<code>Fruits</code>组件放到<code>TypesOfFood</code>组件中。结果应该是子组件嵌套在父组件中，父组件嵌套在它本身的父组件中！
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>TypesOfFood</code>组件应该返回单个<code>div</code>元素。
    testString: assert(Enzyme.shallow(React.createElement(TypesOfFood)).type() === 'div');
  - text: <code>TypesOfFood</code>组件应该返回<code>Fruits</code>组件。
    testString: assert(Enzyme.shallow(React.createElement(TypesOfFood)).props().children[1].type.name === 'Fruits');
  - text: <code>Fruits</code>组件应该返回<code>TypesOfFruit</code>组件。
    testString: assert(Enzyme.mount(React.createElement(TypesOfFood)).find('h2').html() === '<h2>Fruits:</h2>');
  - text: <code>TypesOfFruit</code>组件应该返回<code>h2</code>和<code>ul</code>元素。
    testString: assert(Enzyme.mount(React.createElement(TypesOfFood)).find('ul').text() === 'ApplesBlueberriesStrawberriesBananas');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div>
      { /* change code below this line */ }

      { /* change code above this line */ }
    </div>
  );
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
const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div>
      { /* change code below this line */ }
        <TypesOfFruit />
      { /* change code above this line */ }
    </div>
  );
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
        <Fruits />
        { /* change code above this line */ }
      </div>
    );
  }
};
```

</section>
