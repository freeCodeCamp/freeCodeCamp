---
id: 5a24c314108439a4d4036165
title: استخدام React لتقديم المكونات المتداخلة (Nested Components)
challengeType: 6
forumTopicId: 301420
dashedName: use-react-to-render-nested-components
---

# --description--

وأظهر التحدي السابق طريقة بسيطة لتكوين مكونين، ولكن هناك العديد من الطرق المختلفة التي يمكنك تكوين المكونات مع React.

تكوين المكون هو أحد الميزات React القوية. عندما تعمل مع React، من المهم البَدْء بالتفكير في واجهة المستخدم الخاصة بك من حيث المكونات مثل مثال التطبيق في التحدي السابق. تقسم واجهة المستخدم الخاصة بك إلى أجزاء مشروع الأساسية، وهن القطع تصبح مكونات. هذا يساعد على فصل التعليمات البرمجية المسؤول عن واجهة المستخدم عن التعليمات البرمجية المسؤول عن التعامل مع منطق التطبيق الخاص بك. ويمكن أن يبسِّط بشكل كبير تطوير المشروعات المعقدة وصيانتها.

# --instructions--

هناك عنصران وظيفيان محددان في محرر التعليمات البرمجية، يسميان `TypesOfFruit` و `Fruits`. خذ مكون `TypesOfFruit` وإنشائه، أو *أدخاله* ضمن مكون `Fruits`. ثم خذ مكون `Fruits` وإدخاله ضمن مكون `TypesOfFood`. يجب أن تكون النتيجة مكون فرعي، متداخل داخل مكون الأساسي، يتم تداخله داخل مكون الأساسي خاص به!

# --hints--

يجب أن ينتج مكون `TypesOfFood` عنصر `div` واحد.

```js
assert(Enzyme.shallow(React.createElement(TypesOfFood)).type() === 'div');
```

يجب أن ينتج مكون `TypesOfFood` مكون `Fruits`.

```js
assert(
  Enzyme.shallow(React.createElement(TypesOfFood)).props().children[1].type
    .name === 'Fruits'
);
```

يجب أن ينتج مكون `Fruits` المكون `TypesOfFruit`.

```js
assert(
  Enzyme.mount(React.createElement(TypesOfFood)).find('h2').html() ===
    '<h2>Fruits:</h2>'
);
```

يجب أن يعيد مكون `TypesOfFruit` عناصر `h2` و `ul`.

```js
assert(
  Enzyme.mount(React.createElement(TypesOfFood)).find('ul').text() ===
    'ApplesBlueberriesStrawberriesBananas'
);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<TypesOfFood />, document.getElementById('root'))
```

## --seed-contents--

```jsx
const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div>
      { /* Change code below this line */ }

      { /* Change code above this line */ }
    </div>
  );
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
      </div>
    );
  }
};
```

# --solutions--

```jsx
const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div>
      { /* Change code below this line */ }
        <TypesOfFruit />
      { /* Change code above this line */ }
    </div>
  );
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
        <Fruits />
        { /* Change code above this line */ }
      </div>
    );
  }
};
```
