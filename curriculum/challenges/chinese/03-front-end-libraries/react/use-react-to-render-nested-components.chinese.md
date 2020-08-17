---
id: 5a24c314108439a4d4036165
title: Use React to Render Nested Components
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: 使用React渲染嵌套组件
---

## Description
<section id="description">最后一个挑战显示了组合两个组件的简单方法，但是有许多不同的方法可以使用React组合组件。组件组合是React强大的功能之一。当您使用React时，重要的是开始根据组件（如上一个挑战中的App示例）考虑您的用户界面。您将UI分解为其基本构建块，这些块成为组件。这有助于将负责UI的代码与负责处理应用程序逻辑的代码分开。它可以大大简化复杂项目的开发和维护。 </section>

## Instructions
<section id="instructions">代码编辑器中定义了两个功能组件，名为<code>TypesOfFruit</code>和<code>Fruits</code> 。取<code>TypesOfFruit</code>组分和构成它，或者它<em>窝</em> ，所述内<code>Fruits</code>组分。然后使用<code>Fruits</code>组件并将其嵌套在<code>TypesOfFood</code>组件中。结果应该是一个嵌套在父组件中的子组件，它嵌套在它自己的父组件中！ </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>TypesOfFood</code>组件应返回单个<code>div</code>元素。
    testString: assert(Enzyme.shallow(React.createElement(TypesOfFood)).type() === 'div');
  - text: <code>TypesOfFood</code>组件应返回<code>Fruits</code>组件。
    testString: assert(Enzyme.shallow(React.createElement(TypesOfFood)).props().children[1].type.name === 'Fruits');
  - text: <code>Fruits</code>组件应返回<code>TypesOfFruit</code>组件。
    testString: assert(Enzyme.mount(React.createElement(TypesOfFood)).find('h2').html() === '<h2>Fruits:</h2>');
  - text: <code>TypesOfFruit</code>组件应返回<code>h2</code>和<code>ul</code>元素。
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
