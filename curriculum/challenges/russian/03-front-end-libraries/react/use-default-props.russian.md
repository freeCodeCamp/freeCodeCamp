---
id: 5a24c314108439a4d403616b
title: Use Default Props
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Использовать опоры по умолчанию
---

## Description
<section id="description"> React также имеет возможность устанавливать реквизиты по умолчанию. Вы можете назначить реквизиты по умолчанию для компонента как свойства самого компонента, а React присваивает стандартную поддержку, если это необходимо. Это позволяет указать, какое значение должно иметь значение prop, если значение явно не указано. Например, если вы объявите <code>MyComponent.defaultProps = { location: &#39;San Francisco&#39; }</code> , вы определили <code>MyComponent.defaultProps = { location: &#39;San Francisco&#39; }</code> местоположения, которая установлена ​​в строке <code>San Francisco</code> , если вы не указали иначе. React присваивает реквизиты по умолчанию, если реквизиты не определены, но если вы передадите <code>null</code> в качестве значения для prop, он останется <code>null</code> . </section>

## Instructions
<section id="instructions"> Редактор кода показывает компонент <code>ShoppingCart</code> . Определите реквизиты по умолчанию для этого компонента, которые указывают <code>items</code> со значением <code>0</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Компонент <code>ShoppingCart</code> должен отображать.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ShoppingCart)); return mockedComponent.find("ShoppingCart").length === 1; })(), "The <code>ShoppingCart</code> component should render.");'
  - text: 'Компонент <code>ShoppingCart</code> должен иметь опору по умолчанию <code>{ items: 0 }</code> .'
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
