---
id: 5a24c314108439a4d4036167
title: أنتاج مكون فئة (Class Component) إلى DOM
challengeType: 6
forumTopicId: 301404
dashedName: render-a-class-component-to-the-dom
---

# --description--

يمكنك تذكر استخدام API ReactDOM في تحدي سابق لإضافة عناصر JSX إلى DOM. وستبدو عملية تقديم مكونات React متشابهة جدا. لقد ركزت التحديات القليلة الماضية على المكونات (components) والتكوين (composition)، لذلك تم التقديم لك خلف الكواليس. ومع ذلك، لن يقدم أي من رمز React الذي تكتبه إلى DOM دون أستدعاء API ReactDOM.

إليك تذكير بكفية كتابة الصيغة: `ReactDOM.render(componentToRender, targetNode)`. الحَجَّة الأولى هي عنصر React الذي تريد أنتاجه. الحجة الثانية هي DOM node التي تريد أن تجعل ذلك المكون داخلها.

يتم تمرير مكونات React إلى `ReactDOM.render()` بشكل مختلف قليلا عن عناصر JSX. بالنسبة لعناصر JSX ، يمكنك تمرير اسم العنصر الذي تريد أنتاجه. لكن، بالنسبة لمكونات React، تحتاج إلى استخدام نفس الجملة كما لو كنت تقدم مكوناً متداخلاً، على سبيل المثال `ReactDOM.render(<ComponentToRender />, targetNode)`. أنت تستخدم هذه الجملة لكل من مكونات فئة ES6 والمكونات الوظيفية ES6.

# --instructions--

كل من مكونين `Fruits` و `Vegetables` تم تعريفهما لك خلف الكواليس. أنتج كلا المكونين كمكون `TypesOfFood` فرعي، ثم أنشئ `TypesOfFood` على DOM. هناك `div` مع `id='challenge-node'` متاح لك للاستخدام.

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

يجب أن ينتج مكون `TypesOfFood` المكون `Fruits` بعد عنصر `h1`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood));
    return mockedComponent.children().childAt(1).name() === 'Fruits';
  })()
);
```

يجب أن ينتج مكون `TypesOfFood` المكون `Vegetables` بعد `Fruits`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood));
    return mockedComponent.children().childAt(2).name() === 'Vegetables';
  })()
);
```

يجب أن يقدم مكون `TypesOfFood` إلى DOM ضمن `div` مع معرف `challenge-node`.

```js
assert(
  (function () {
    const html = document.getElementById('challenge-node').childNodes[0]
      .innerHTML;
    return (
      html.includes(
        '<div><h2>Fruits:</h2><h4>Non-Citrus:</h4><ul><li>Apples</li><li>Blueberries</li><li>Strawberries</li><li>Bananas</li></ul><h4>Citrus:</h4><ul><li>Lemon</li><li>Lime</li><li>Orange</li><li>Grapefruit</li></ul></div>'
      ) &&
      html.includes(
        '<div><h2>Vegetables:</h2><ul><li>Brussel Sprouts</li><li>Broccoli</li><li>Squash</li></ul></div>'
      )
    );
  })()
);
```

# --seed--

## --before-user-code--

```jsx
const Fruits = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <h4>Non-Citrus:</h4>
        <ul>
          <li>Apples</li>
          <li>Blueberries</li>
          <li>Strawberries</li>
          <li>Bananas</li>
        </ul>
      <h4>Citrus:</h4>
        <ul>
          <li>Lemon</li>
          <li>Lime</li>
          <li>Orange</li>
          <li>Grapefruit</li>
        </ul>
    </div>
  );
};
const Vegetables = () => {
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
};
```

## --seed-contents--

```jsx
class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {/* Change code below this line */}

        {/* Change code above this line */}
      </div>
    );
  }
};

// Change code below this line
```

# --solutions--

```jsx
class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {/* Change code below this line */}
          <Fruits />
           <Vegetables />
         {/* Change code above this line */}
      </div>
    );
  }
};

// Change code below this line
ReactDOM.render(<TypesOfFood />, document.getElementById('challenge-node'));
```
