---
id: 5a24c314108439a4d403616b
title: Use Default Props
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: 使用默认道具
---

## Description
<section id="description"> React还有一个设置默认道具的选项。您可以将默认道具分配给组件作为组件本身的属性，如果需要，React会分配默认支柱。如果没有显式提供值，这允许您指定prop值应该是什么。例如，如果您声明<code>MyComponent.defaultProps = { location: &#39;San Francisco&#39; }</code> ，则您已定义了设置为<code>San Francisco</code>字符串的位置道具，除非您另行指定。如果道具未定义，则React会指定默认道具，但如果您将<code>null</code>作为道具的值传递，则它将保持为<code>null</code> 。 </section>

## Instructions
<section id="instructions">代码编辑器显示<code>ShoppingCart</code>组件。在此组件上定义默认道具，指定值为<code>0</code>的道具<code>items</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>ShoppingCart</code>组件应该呈现。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ShoppingCart)); return mockedComponent.find('ShoppingCart').length === 1; })());
  - text: '<code>ShoppingCart</code>组件应具有<code>{ items: 0 }</code>的默认支柱。'
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

/section>
