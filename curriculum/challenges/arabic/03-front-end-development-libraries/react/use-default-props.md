---
id: 5a24c314108439a4d403616b
title: استخدام الميزات الافتراضية (Default Props)
challengeType: 6
forumTopicId: 301418
dashedName: use-default-props
---

# --description--

React أيضا لديه خِيار لتعيين الميزات الافتراضية (default props). يمكنك تعيين الميزات الافتراضية (default props) للمكون كخاصية في المكون نفسه ويقوم React بتعيين الميزات الافتراضية (default props) إذا لزم الأمر. هذا يسمح لك بتحديد قيمة المِيزة إذا لم يتم تقديم قيمة قصداً. على سبيل المثال، إذا أعلنت `MyComponent.defaultProps = { location: 'San Francisco' }`، لقد عرفت مكان المِيزة التي تم تعيينه بشكل string بقيمة `San Francisco`، إذا لم تحدد خلاف ذلك. إعادة تعيين الميزات React الافتراضية إذا كانت الميزات غير معرفة (React)، ولكن إذا مررت `null` كقيمة للمِيزة، فسيبقى `null`.

# --instructions--

يعرض محرر التعليمات البرمجية مكون `ShoppingCart`. تحديد المِيزات الافتراضية في هذا المكون الذي تحدد مِيزة `items` بقيمة `0`.

# --hints--

يجب أن يقدم مكون `ShoppingCart`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ShoppingCart));
    return mockedComponent.find('ShoppingCart').length === 1;
  })()
);
```

يجب أن يحتوي المكون `ShoppingCart` على مِيزة افتراضي من `{ items: 0 }`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ShoppingCart));
    mockedComponent.setProps({ items: undefined });
    return mockedComponent.find('ShoppingCart').props().items === 0;
  })()
);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<ShoppingCart />, document.getElementById('root'))
```

## --seed-contents--

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

# --solutions--

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
