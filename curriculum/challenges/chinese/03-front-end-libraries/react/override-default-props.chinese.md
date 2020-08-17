---
id: 5a24c314108439a4d403616c
title: Override Default Props
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: 覆盖默认道具
---

## Description
<section id="description">设置默认道具的能力是React中的一个有用功能。覆盖默认道具的方法是显式设置组件的prop值。 </section>

## Instructions
<section id="instructions"> <code>ShoppingCart</code>组件现在呈现子组件<code>Items</code> 。此<code>Items</code>组件的默认prop <code>quantity</code>设置为整数<code>0</code> 。通过为<code>quantity</code>传递值<code>10</code>来覆盖默认支柱。 <strong>注意：</strong>请记住，向组件添加prop的语法与添加HTML属性的方式类似。但是，由于<code>quantity</code>的值是一个整数，因此它不会引用引号，但应该用大括号括起来。例如， <code>{100}</code> 。此语法告诉JSX将大括号内的值直接解释为JavaScript。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>ShoppingCart</code>应该呈现组件。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ShoppingCart)); return mockedComponent.find('ShoppingCart').length === 1; })());
  - text: 该组件<code>Items</code>应该呈现。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ShoppingCart)); return mockedComponent.find('Items').length === 1; })());
  - text: '<code>Items</code>组件应具有从<code>ShoppingCart</code>组件传递的<code>{ quantity: 10 }</code>的prop。'
    testString: "getUserInput => assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ShoppingCart)); return mockedComponent.find('Items').props().quantity == 10 && getUserInput('index').replace(/ /g,'').includes('<Itemsquantity={10}/>'); })());"

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
}

Items.defaultProps = {
  quantity: 0
}

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    { /* change code below this line */ }
    return <Items />
    { /* change code above this line */ }
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
