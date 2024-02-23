---
id: 5a24c314108439a4d4036168
title: كتابة مكون React من الصفر
challengeType: 6
forumTopicId: 301424
dashedName: write-a-react-component-from-scratch
---

# --description--

الآن بعد أن تعلمت أساسيات JSX و المكونات React، حان الوقت لكتابة مكون بمفردك. مكونات React هي لبنات البناء الأساسية لتطبيقات React لذا من المهم أن تصبح مألوفة جداً بكتابتها. تذكر، مكون React النموذجي هو `class` من ES6 التي توسع `React.Component`. لديه طريقة عرض تنتج HTML (من JSX) أو `null`. وهذا هو الشكل الأساسي لمكون React. بمجرد أن تفهموا هذا جيداً، سوف تكون مستعداً لبدء بناء المزيد من مشروعات React المعقدة.

# --instructions--

تحديد الفئة `MyComponent` التي تمدد `React.Component`. طريقة التقديم يجب أن ينتج `div` الذي يحتوي على علامة `h1` مع النص: `My First React Component!` فيها. استخدم هذا النص بالضبط، الحالة وعلامات الترقيم مهمة. تيقن من الاتصال بالبناء للمكون (constructor) الخاص بك أيضا.

قدم هذا المكون إلى DOM باستخدام `ReactDOM.render()`. هناك `div` مع `id='challenge-node'` متاح لك للاستخدام.

# --hints--

يجب أن يكون هناك مكون React يسمى `MyComponent`.

```js
(getUserInput) =>
  assert(
    __helpers
      .removeWhiteSpace(getUserInput('index'))
      .includes('classMyComponentextendsReact.Component{')
  );
```

يجب أن يحتوي `MyComponent` على علامة `h1` مع النص `My First React Component!`, مهم الحالة وعلامات الترقيم.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
    return mockedComponent.find('h1').text() === 'My First React Component!';
  })()
);
```

`MyComponent` يجب أن يُنتج في DOM.

```js
assert(document.getElementById('challenge-node').childNodes.length === 1);
```

`MyComponent` يجب أن يكون لديه بناء (constructor) يتصل بطريقة `super` مع `props`.

```js
assert(
  MyComponent.toString().includes('MyComponent(props)') &&
    MyComponent.toString().includes('_super.call(this, props)')
);
```

# --seed--

## --seed-contents--

```jsx
// Change code below this line
```

# --solutions--

```jsx
// Change code below this line
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>My First React Component!</h1>
      </div>
    );
  }
};

ReactDOM.render(<MyComponent />, document.getElementById('challenge-node'));
```
