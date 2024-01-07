---
id: 5a24c314108439a4d403616d
title: استخدام PropTypes لتعريف Props التي تتوقعها
challengeType: 6
forumTopicId: 301419
dashedName: use-proptypes-to-define-the-props-you-expect
---

# --description--

يوفر React ميزات مفيدة للتحقق من نوع المكونات تتلقى مِيزات من النوع الصحيح. على سبيل المثال، يقوم تطبيقك بإجراء مكالمة API لاسترداد البيانات التي تتوقع أن تكون في قائمة، ويحال بعد ذلك إلى مكون كمِيزة. يمكنك تعيين `propTypes` على المكون الخاص بك لطلب أن تكون البيانات من نوع `array`. وهذا سيظهر تحذيرا مفيدا عندما تكون البيانات من أي نوع آخر.

يعدّ ممارسة أفضل لتعيين `propTypes` عندما تعرف نوع prop قبل الوقت. يمكنك تحديد خاصية `propTypes` لمكون بنفس الطريقة التي حددت بها `defaultProps`. فعل ذلك سيتحقق أن مِيزات من هُوِيَّة معينة موجود مع نوع مُعين. إليك مثال لطلب نوع `function` لمِيزة يسمى `handleClick`:

```js
MyComponent.propTypes = { handleClick: PropTypes.func.isRequired }
```

في المثال أعلاه، يقوم جزء `PropTypes.func` بالتحقق من أن `handleClick` تكون وظيفة. إضافة `isRequired` يخبر React أن `handleClick` هي خاصية مطلوبة لهذا العنصر. سترى تحذيرا إذا لم يتم توفير المِيزة. لاحظ أيضًا أن `func` تمثل `function`. من بين سبع أنواع بدائية من JavaScript، مثل `function` و `boolean` (مكتوبة على شكل `bool`) هي الدالتين الوحيدتين اللتين تستخدمان تهجئة غريبة. وبالإضافة إلى الأنواع البدائية، هناك أنواع أخرى متاحة. على سبيل المثال، يمكنك التحقق من أن مِيزة (prop) هو عنصر React. يرجى الرجوع إلى الوثائق <a href="https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes" target="_blank" rel="noopener noreferrer nofollow"></a> لجميع الخيارات.

**ملاحظة:** اعتبارا من React v15.5.0, يتم استيراد `PropTypes` بشكل مستقل من React، مثل هذا: `import PropTypes from 'prop-types';`

# --instructions--

حدد `propTypes` في مكون `Items` لتحصل `quantity` كميزة (prop) والتحقق من أنها من النوع `number`.

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

يجب أن يقدم مكون `Items`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ShoppingCart));
    return mockedComponent.find('Items').length === 1;
  })()
);
```

يجب أن يتضمن المكون `Items` خاصية `propTypes` لتيقن من قيمة `quantity` والتأكد من أنها على شكل عدد.

```js
(getUserInput) =>
  assert(
    (function () {
      const noWhiteSpace = __helpers.removeWhiteSpace(getUserInput('index'));
      return (
        noWhiteSpace.includes('quantity:PropTypes.number.isRequired') &&
        noWhiteSpace.includes('Items.propTypes=')
      );
    })()
  );
```

# --seed--

## --before-user-code--

```jsx
var PropTypes = {
  number: { isRequired: true }
};
```

## --after-user-code--

```jsx
ReactDOM.render(<ShoppingCart />, document.getElementById('root'))
```

## --seed-contents--

```jsx
const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};

// Change code below this line

// Change code above this line

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

# --solutions--

```jsx
const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};

// Change code below this line
Items.propTypes = {
  quantity: PropTypes.number.isRequired
};
// Change code above this line

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
