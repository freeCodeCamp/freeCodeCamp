---
id: 5a24c314108439a4d403616b
title: Use Default Props
challengeType: 6
forumTopicId: 301418
---

## Description
<section id='description'>
React also has an option to set default props. You can assign default props to a component as a property on the component itself and React assigns the default prop if necessary. This allows you to specify what a prop value should be if no value is explicitly provided. For example, if you declare <code>MyComponent.defaultProps = { location: 'San Francisco' }</code>, you have defined a location prop that's set to the string <code>San Francisco</code>, unless you specify otherwise. React assigns default props if props are undefined, but if you pass <code>null</code> as the value for a prop, it will remain <code>null</code>.
</section>

## Instructions
<section id='instructions'>
The code editor shows a <code>ShoppingCart</code> component. Define default props on this component which specify a prop <code>items</code> with a value of <code>0</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>ShoppingCart</code> component should render.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ShoppingCart)); return mockedComponent.find('ShoppingCart').length === 1; })());
  - text: 'The <code>ShoppingCart</code> component should have a default prop of <code>{ items: 0 }</code>.'
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ShoppingCart)); mockedComponent.setProps({items: undefined}); return mockedComponent.find(''ShoppingCart'').props().items === 0; })());'

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
// Change code below this line

```

</div>


### After Test
<div id='jsx-teardown'>

```jsx
ReactDOM.render(<ShoppingCart />, document.getElementById('root'))
```

</div>

</section>

## Solution
<section id='solution'>


```jsx
const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component</h1>
    </div>
  )
};

// Change code below this line
ShoppingCart.defaultProps = {
  items: 0
}
```

</section>
