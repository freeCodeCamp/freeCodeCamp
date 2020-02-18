---
id: 5a24c314108439a4d403616d
title: Use PropTypes to Define the Props You Expect
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Use PropTypes para definir los beneficios que espera
---

## Description
<section id="description"> React proporciona funciones útiles de verificación de tipos para verificar que los componentes reciban accesorios del tipo correcto. Por ejemplo, su aplicación realiza una llamada a la API para recuperar datos que espera estar en una matriz, que luego se pasa a un componente como prop. Puede establecer <code>propTypes</code> en su componente para requerir que los datos sean de tipo <code>array</code> . Esto arrojará una advertencia útil cuando los datos sean de cualquier otro tipo. Se considera una buena práctica establecer los <code>propTypes</code> cuando conoce el tipo de accesorio con anticipación. Puede definir una propiedad <code>propTypes</code> para un componente de la misma manera que definió <code>defaultProps</code> . Al hacer esto se verificará que los accesorios de una clave dada estén presentes con un tipo dado. Aquí hay un ejemplo para requerir la <code>function</code> tipo para un prop llamado <code>handleClick</code> : <code>MyComponent.propTypes = { handleClick: PropTypes.func.isRequired }</code> En el ejemplo anterior, la parte <code>PropTypes.func</code> verifica que <code>handleClick</code> es una función. Agregar <code>isRequired</code> le dice a React que <code>handleClick</code> es una propiedad requerida para ese componente. Verá una advertencia si no se proporciona ese apoyo. También note que <code>func</code> representa la <code>function</code> . Entre los siete tipos primitivos de JavaScript, <code>function</code> y <code>boolean</code> (escrito como <code>bool</code> ) son los únicos dos que utilizan una ortografía inusual. Además de los tipos primitivos, hay otros tipos disponibles. Por ejemplo, puedes verificar que un prop es un elemento React. Por favor, consulte la documentación para todas las opciones. <strong>Nota:</strong> A partir de React v15.5.0, <code>PropTypes</code> se importa independientemente de React, de la siguiente manera: <code>import PropTypes from &#39;prop-types&#39;;</code> </section>

## Instructions
<section id="instructions"> Defina <code>propTypes</code> para que el componente <code>Items</code> requiera <code>quantity</code> como prop y verifique que sea de tipo <code>number</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El componente <code>ShoppingCart</code> debe renderizar.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ShoppingCart)); return mockedComponent.find("ShoppingCart").length === 1; })(), "The <code>ShoppingCart</code> component should render.");'
  - text: El componente <code>Items</code> debería renderizarse.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ShoppingCart)); return mockedComponent.find("Items").length === 1; })(), "The <code>Items</code> component should render.");'
  - text: El componente <code>Items</code> debe incluir una verificación de <code>propTypes</code> que requiera que la <code>quantity</code> sea ​​un <code>number</code> .
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
