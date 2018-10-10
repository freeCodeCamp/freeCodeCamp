---
id: 5a24c314108439a4d403616b
title: Use Default Props
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: استخدام الدعائم الافتراضية
---

## Description
<section id="description"> يحتوي React أيضًا على خيار لتعيين الأدوات الافتراضية. يمكنك تعيين الدعائم الافتراضية لمكون كخاصية على المكون نفسه ويقوم React بتعيين الدعامة الافتراضية إذا لزم الأمر. هذا يسمح لك بتحديد قيمة prop يجب أن تكون إذا لم يتم توفير أي قيمة بشكل صريح. على سبيل المثال ، إذا قمت بتعريف <code>MyComponent.defaultProps = { location: &#39;San Francisco&#39; }</code> ، فقد قمت بتعريف موقع دعامة تم تعيينه على السلسلة <code>San Francisco</code> ، ما لم تحدد خلاف ذلك. يقوم React بتعيين الدعائم الافتراضية إذا كانت الدعائم غير محددة ، ولكن إذا قمت بتمرير قيمة <code>null</code> كقيمة للدعم ، فسيظل <code>null</code> . </section>

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ShoppingCart)); return mockedComponent.find("ShoppingCart").length === 1; })(), "The <code>ShoppingCart</code> component should render.");'
  - text: ''
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
