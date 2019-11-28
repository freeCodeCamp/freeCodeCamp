---
id: 5a24c314108439a4d403616d
title: Use PropTypes to Define the Props You Expect
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Use PropTypes para definir os suportes que você espera
---

## Description
<section id="description"> O React fornece recursos úteis de verificação de tipos para verificar se os componentes recebem props do tipo correto. Por exemplo, seu aplicativo faz uma chamada de API para recuperar dados que você espera estar em uma matriz, que é então passada para um componente como um prop. Você pode definir <code>propTypes</code> no seu componente para exigir que os dados sejam do tipo <code>array</code> . Isso lançará um aviso útil quando os dados forem de qualquer outro tipo. É considerado uma boa prática definir <code>propTypes</code> quando você conhece o tipo de suporte antes do tempo. Você pode definir uma propriedade <code>propTypes</code> para um componente da mesma maneira que definiu <code>defaultProps</code> . Fazendo isso, você verifica se os objetos de uma determinada chave estão presentes em um determinado tipo. Aqui está um exemplo para requerer a <code>function</code> type para um <code>handleClick</code> chamado <code>handleClick</code> : <code>MyComponent.propTypes = { handleClick: PropTypes.func.isRequired }</code> No exemplo acima, a parte <code>PropTypes.func</code> verifica que <code>handleClick</code> é uma função. Adicionando <code>isRequired</code> diz React que <code>handleClick</code> é uma propriedade necessária para esse componente. Você verá um aviso se esse suporte não for fornecido. Observe também que <code>func</code> representa a <code>function</code> . Entre os sete tipos primitivos de JavaScript, <code>function</code> e <code>boolean</code> (escrito como <code>bool</code> ) são os dois únicos que usam ortografia incomum. Além dos tipos primitivos, existem outros tipos disponíveis. Por exemplo, você pode verificar se um prop é um elemento React. Por favor, consulte a documentação de todas as opções. <strong>Nota:</strong> A partir do React v15.5.0, <code>PropTypes</code> é importado independentemente do React, desta forma: <code>import PropTypes from &#39;prop-types&#39;;</code> </section>

## Instructions
<section id="instructions"> Defina <code>propTypes</code> para o componente <code>Items</code> para exigir <code>quantity</code> como um prop e verifique se é do tipo <code>number</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O componente <code>ShoppingCart</code> deve renderizar.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ShoppingCart)); return mockedComponent.find("ShoppingCart").length === 1; })(), "The <code>ShoppingCart</code> component should render.");'
  - text: O componente <code>Items</code> deve renderizar.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ShoppingCart)); return mockedComponent.find("Items").length === 1; })(), "The <code>Items</code> component should render.");'
  - text: O componente <code>Items</code> deve incluir uma verificação de <code>propTypes</code> que exija <code>quantity</code> para ser um <code>number</code> .
    testString: 'getUserInput => assert((function() { const noWhiteSpace = getUserInput("index").replace(/ /g, ""); return noWhiteSpace.includes("quantity:PropTypes.number.isRequired") && noWhiteSpace.includes("Items.propTypes="); })(), "The <code>Items</code> component should include a <code>propTypes</code> check that requires <code>quantity</code> to be a <code>number</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};

// change code below this line

// change code above this line

Items.defaultProps = {
  quantity: 0
};

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items />
  }
};

```

</div>

### Before Test
<div id='jsx-setup'>

```jsx
var PropTypes = {
  number: { isRequired: true }
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
