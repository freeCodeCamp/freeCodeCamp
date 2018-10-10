---
id: 5a24c314108439a4d403616c
title: Override Default Props
localeTitle: Anular apoyos predeterminados
challengeType: 6
isRequired: false
---

## Description
<section id='description'>
La capacidad de establecer accesorios predeterminados es una característica útil en React. La forma de anular los accesorios predeterminados es establecer explícitamente los valores de prop para un componente.
</section>

## Instructions
<section id='instructions'>
El componente <code>ShoppingCart</code> ahora representa un componente secundario <code>Items</code> . Este componente de <code>Items</code> tiene una <code>quantity</code> prop predeterminada establecida en el entero <code>0</code> . Anule el prop predeterminado al pasar un valor de <code>10</code> por <code>quantity</code> .
<strong>Nota:</strong> recuerde que la sintaxis para agregar una propuesta a un componente es similar a la forma en que agrega atributos HTML. Sin embargo, dado que el valor para la <code>quantity</code> es un número entero, no irá entre comillas, pero debería estar entre corchetes. Por ejemplo, <code>{100}</code> . Esta sintaxis le dice a JSX que interprete el valor entre las llaves directamente como JavaScript.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El componente <code>ShoppingCart</code> debe renderizar.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ShoppingCart)); return mockedComponent.find("ShoppingCart").length === 1; })(), "The component <code>ShoppingCart</code> should render.");'
  - text: Los <code>Items</code> componente deben hacer.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ShoppingCart)); return mockedComponent.find("Items").length === 1; })(), "The component <code>Items</code> should render.");'
  - text: 'El componente <code>Items</code> debe tener una propiedad de <code>{ quantity: 10 }</code> aprobada desde el componente <code>ShoppingCart</code> .'
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
    return <Items quantity = {10} />
    { /* change code above this line */ }
  }
};
```

</section>
