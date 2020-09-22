---
id: 5a24c314108439a4d403616c
title: Override Default Props
challengeType: 6
videoUrl: ''
localeTitle: Substituir Adereços Padrão
---

## Description
<section id="description"> A capacidade de definir props padrão é um recurso útil no React. A maneira de substituir os props padrão é definir explicitamente os valores prop para um componente. </section>

## Instructions
<section id="instructions"> O componente <code>ShoppingCart</code> agora renderiza um <code>Items</code> filho. Esse componente <code>Items</code> tem uma <code>quantity</code> prop padrão definida para o inteiro <code>0</code> . Substitua o prop padrão, passando um valor de <code>10</code> para <code>quantity</code> . <strong>Nota:</strong> Lembre <strong>-</strong> se de que a sintaxe para adicionar um suporte a um componente é semelhante à forma como você adiciona atributos HTML. No entanto, como o valor da <code>quantity</code> é um número inteiro, ele não será colocado entre aspas, mas deverá ser colocado em chaves. Por exemplo, <code>{100}</code> . Essa sintaxe diz ao JSX para interpretar o valor dentro das chaves diretamente como JavaScript. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O componente <code>ShoppingCart</code> deve renderizar.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ShoppingCart)); return mockedComponent.find("ShoppingCart").length === 1; })(), "The component <code>ShoppingCart</code> should render.");'
  - text: Os <code>Items</code> componentes devem renderizar.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ShoppingCart)); return mockedComponent.find("Items").length === 1; })(), "The component <code>Items</code> should render.");'
  - text: 'O componente <code>Items</code> deve ter um prop de <code>{ quantity: 10 }</code> passado do componente <code>ShoppingCart</code> .'
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
