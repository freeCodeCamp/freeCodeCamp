---
id: 5a24c314108439a4d4036166
title: إنشاء مكونات React
challengeType: 6
forumTopicId: 301381
dashedName: compose-react-components
---

# --description--

ومع استمرار التحديات في استخدام تركيبات أكثر تعقيدا مع مكونات React و JSX، ثمة نقطة هامة جديرة يحب ملاحظتها. لا يختلف تقديم مكونات أسلوب ES6 ضمن مكونات أخرى عن تقديم المكونات البسيطة التي استخدمتها في التحديات القليلة الأخيرة. يمكنك أنشاء عناصر JSX، والمكونان الوظيفي عديمة الحالة (stateless functional components)، ومكونات الفئة (class components) في ES6 ضمن مكونات أخرى.

# --instructions--

في محرر التعليمات البرمجية، يقوم مكون `TypesOfFood` فعلًا بتقديم مكون يسمى `Vegetables`. وهناك مكون `Fruits` من التحدي الأخير.

أدخل مكونين داخل `Fruits` - أولا `NonCitrus`، ثم `Citrus`. كل من هذين العنصرين تم توفيره لك خلف الكواليس. بعد ذلك، عش مكون فئة `Fruits` في مكون `TypesOfFood`، تحت عنصر العنوان `h1` وما فوق `Vegetables`. وينبغي أن تكون النتيجة سلسلة من المكونات المتداخلة التي تستخدم نوعين مختلفين من المكونات.

# --hints--

يجب أن ينتج مكون `TypesOfFood` عنصر `div` واحد.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood));
    return mockedComponent.children().type() === 'div';
  })()
);
```

يجب أن ينتج مكون `TypesOfFood` مكون `Fruits`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood));
    return mockedComponent.children().childAt(1).name() === 'Fruits';
  })()
);
```

مكون `Fruits` يجب أن يعيد مكون `NonCitrus` و مكون `Citrus`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood));
    return (
      mockedComponent.find('Fruits').children().find('NonCitrus').length ===
        1 &&
      mockedComponent.find('Fruits').children().find('Citrus').length === 1
    );
  })()
);
```

يجب أن ينتج مكون `TypesOfFood` مكون `Vegetables` تحت مكون `Fruits`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood));
    return mockedComponent.children().childAt(2).name() === 'Vegetables';
  })()
);
```

# --seed--

## --before-user-code--

```jsx
class NonCitrus extends React.Component {
  render() {
    return (
      <div>
        <h4>Non-Citrus:</h4>
        <ul>
          <li>Apples</li>
          <li>Blueberries</li>
          <li>Strawberries</li>
          <li>Bananas</li>
        </ul>
      </div>
    );
  }
};
class Citrus extends React.Component {
  render() {
    return (
      <div>
        <h4>Citrus:</h4>
        <ul>
          <li>Lemon</li>
          <li>Lime</li>
          <li>Orange</li>
          <li>Grapefruit</li>
        </ul>
      </div>
    );
  }
};
class Vegetables extends React.Component {
  render() {
    return (
      <div>
        <h2>Vegetables:</h2>
        <ul>
          <li>Brussel Sprouts</li>
          <li>Broccoli</li>
          <li>Squash</li>
        </ul>
      </div>
    );
     }
};
```

## --after-user-code--

```jsx
ReactDOM.render(<TypesOfFood />, document.getElementById('root'))
```

## --seed-contents--

```jsx
class Fruits extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        { /* Change code below this line */ }

        { /* Change code above this line */ }
      </div>
    );
  }
};

class TypesOfFood extends React.Component {
  constructor(props) {
     super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        { /* Change code below this line */ }

        { /* Change code above this line */ }
        <Vegetables />
      </div>
    );
  }
};
```

# --solutions--

```jsx
class Fruits extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        { /* Change code below this line */ }
        <NonCitrus />
        <Citrus />
        { /* Change code above this line */ }
      </div>
    )
  }
}

class TypesOfFood extends React.Component {
  constructor(props) {
     super(props);
  }
    render() {
      return (
        <div>
        <h1>Types of Food:</h1>
          { /* Change code below this line */ }
          <Fruits />
          { /* Change code above this line */ }
          <Vegetables />
        </div>
      );
    }
};
```
