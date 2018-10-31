---
id: 5a24c314108439a4d403616c
title: Override Default Props
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Переопределить опоры по умолчанию
---

## Description
<section id="description"> Возможность установки реквизитов по умолчанию является полезной функцией в React. Способ переопределения реквизитов по умолчанию состоит в том, чтобы явно указать значения prop для компонента. </section>

## Instructions
<section id="instructions"> <code>ShoppingCart</code> компонент в настоящее время оказывает нижестоящий компонент <code>Items</code> . Этот <code>Items</code> компонент имеет опору по умолчанию <code>quantity</code> , установленное на целое число <code>0</code> . Переопределите опору по умолчанию, передав значение <code>10</code> для <code>quantity</code> . <strong>Примечание.</strong> Помните, что синтаксис добавления опоры к компоненту выглядит так же, как вы добавляете атрибуты HTML. Однако, поскольку значение для <code>quantity</code> является целым числом, оно не будет отображаться в кавычках, но оно должно быть завернуто в фигурные скобки. Например, <code>{100}</code> . Этот синтаксис говорит JSX интерпретировать значение в фигурных скобках непосредственно как JavaScript. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ShoppingCart)); return mockedComponent.find("ShoppingCart").length === 1; })(), "The component <code>ShoppingCart</code> should render.");'
  - text: ''
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ShoppingCart)); return mockedComponent.find("Items").length === 1; })(), "The component <code>Items</code> should render.");'
  - text: 'Элемент <code>Items</code> должен иметь оповещение <code>{ quantity: 10 }</code> переданное из компонента <code>ShoppingCart</code> .'
    testString: 'getUserInput => assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ShoppingCart)); return mockedComponent.find("Items").props().quantity == 10 && getUserInput("index").replace(/ /g,"").includes("<Itemsquantity={10}/>"); })(), "The <code>Items</code> component should have a prop of <code>{ quantity: 10 }</code> passed from the <code>ShoppingCart</code> component.");'

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
</section>
