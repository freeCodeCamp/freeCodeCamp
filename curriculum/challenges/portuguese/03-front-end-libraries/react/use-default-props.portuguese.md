---
id: 5a24c314108439a4d403616b
title: Use Default Props
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Use Adereços Padrão
---

## Description
<section id="description"> Reagir também tem uma opção para definir adereços padrão. Você pode atribuir props padrão a um componente como uma propriedade no próprio componente e React atribui o prop padrão, se necessário. Isso permite que você especifique o valor de um objeto propício se nenhum valor for explicitamente fornecido. Por exemplo, se você declarar <code>MyComponent.defaultProps = { location: &#39;San Francisco&#39; }</code> , você definiu um local de localização definido como a cadeia <code>San Francisco</code> , a menos que você especifique o contrário. React atribui props padrão se os props forem indefinidos, mas se você passar <code>null</code> como o valor de um prop, ele permanecerá <code>null</code> . </section>

## Instructions
<section id="instructions"> O editor de código mostra um componente <code>ShoppingCart</code> . Definir props padrão neste componente que especificam os <code>items</code> prop com um valor de <code>0</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O componente <code>ShoppingCart</code> deve renderizar.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ShoppingCart)); return mockedComponent.find("ShoppingCart").length === 1; })(), "The <code>ShoppingCart</code> component should render.");'
  - text: 'O componente <code>ShoppingCart</code> deve ter um prop padrão de <code>{ items: 0 }</code> .'
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
