---
id: 5a24c314108439a4d403616b
title: Use Default Props
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Usar accesorios predeterminados
---

## Description
<section id="description"> React también tiene una opción para establecer accesorios predeterminados. Puede asignar accesorios predeterminados a un componente como una propiedad en el propio componente y React asigna el apoyo predeterminado si es necesario. Esto le permite especificar lo que debe ser un valor de propiedad si no se proporciona ningún valor explícitamente. Por ejemplo, si declara <code>MyComponent.defaultProps = { location: &#39;San Francisco&#39; }</code> , ha definido un prop de ubicación que se establece en la cadena <code>San Francisco</code> , a menos que especifique lo contrario. React asigna props por defecto si los prop no están definidos, pero si pasa <code>null</code> como valor para un prop, seguirá siendo <code>null</code> . </section>

## Instructions
<section id="instructions"> El editor de código muestra un componente <code>ShoppingCart</code> . Defina accesorios predeterminados en este componente que especifican <code>items</code> prop con un valor de <code>0</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El componente <code>ShoppingCart</code> debe renderizar.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ShoppingCart)); return mockedComponent.find("ShoppingCart").length === 1; })(), "The <code>ShoppingCart</code> component should render.");'
  - text: 'El componente <code>ShoppingCart</code> debe tener un prop predeterminado de <code>{ items: 0 }</code> .'
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ShoppingCart)); mockedComponent.setProps({items: undefined}); return mockedComponent.find("ShoppingCart").props().items === 0; })(), "The <code>ShoppingCart</code> component should have a default prop of <code>{ items: 0 }</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component</h1>
    </div>
  )
};
// change code below this line

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
