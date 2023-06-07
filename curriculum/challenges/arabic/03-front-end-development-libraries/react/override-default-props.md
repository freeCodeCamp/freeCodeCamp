---
id: 5a24c314108439a4d403616c
title: أعد صياغة الميزات الافتراضية (Override Default Props)
challengeType: 6
forumTopicId: 301399
dashedName: override-default-props
---

# --description--

القدرة على تعيين الميزات الافتراضية (default props) هي خاصية مفيدة في React. طريقة تجاوز الاحتياطات الافتراضية هي تعيين قيم المِيزة صراحة لمكون ما.

# --instructions--

عنصر `ShoppingCart` يوفر الآن مكون فرعي `Items`. هذا المكون `Items` لديه مِيزة (prop) افتراضي `quantity` بقيمة عدد `0`. تجاوز المِيزة الافتراضية عن طريق تمرير قيمة `10` لمِيزة `quantity`.

**ملاحظة:** تذكر أن بناء الجملة لإضافة عنصر المِيزة إلى المكون يبدو شبيهاً بكيفية إضافة سمات HTML. لكن، قيمة `quantity` هي عدد صحيح، فإنها لن تذهب في علامتا التنصيص (quotes) ولكن يجب تغليفها في أقواس غريبة (curly braces). على سبيل المثال، `{100}`. هذه الجملة تخبر JSX لتفسير القيمة داخل الأقواس قاصدًا مثل JavaScript.

# --hints--

يجب أن ينتج المكون `ShoppingCart`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ShoppingCart));
    return mockedComponent.find('ShoppingCart').length === 1;
  })()
);
```

يجب أن ينتج المكون `Items`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ShoppingCart));
    return mockedComponent.find('Items').length === 1;
  })()
);
```

يجب أن يحتوي المكون `Items` على المزيّة `{ quantity: 10 }` يمر من مكون `ShoppingCart`.

```js
(getUserInput) =>
  assert(
    (function () {
      const mockedComponent = Enzyme.mount(React.createElement(ShoppingCart));
      return (
        mockedComponent.find('Items').props().quantity == 10 &&
        getUserInput('index')
          .replace(/ /g, '')
          .includes('<Itemsquantity={10}/>')
      );
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
    { /* Change code below this line */ }
    return <Items />
    { /* Change code above this line */ }
  }
};
```

# --solutions--

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
    { /* Change code below this line */ }
    return <Items quantity = {10} />
    { /* Change code above this line */ }
  }
};
```
