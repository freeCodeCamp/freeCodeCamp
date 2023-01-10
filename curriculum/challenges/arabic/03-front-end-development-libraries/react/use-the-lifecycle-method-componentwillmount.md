---
id: 5a24c314108439a4d403617c
title: أستخدام Lifecycle Method componentWillMount
challengeType: 6
forumTopicId: 301423
dashedName: use-the-lifecycle-method-componentwillmount
---

# --description--

لمكونات React عدة طرق مميزة تتيح فرصاً لعمل أفعال في نُقَط محددة من دورة حياة (lifecycle) أحد المكونات. هذه تسمى طرق دورة الحياة (lifecycle)، أو وظائف (hooks) دورة الحياة (lifecycle)، وتسمح بالتقاط المكونات في نُقَط زمنية معينة. ويمكن أن يحدث ذلك قبل أنتاجها، قبل تحديثهم، وقبل أن يتلقوا ميزات (props)، وقبل أن وقف التحميل (unmount)، وكذلك. فيما يلي قائمة ببعض طرق دورة الحياة (lifecycle) الرئيسة: `componentWillMount()` `componentDidMount()` `shouldComponentUpdate()` `componentDidUpdate()` `componentWillUnmount()` سوف تغطي الدروس العدّة التالية بعض حالات الاستخدام الأساسي لهذا طرق دورة الحياة (lifecycle).

**ملاحظة:** سيتم تجاهل `componentWillMount` طريقة دورة الحياة (Lifecycle) في إصدار بعد نوع 16.X وإزالتها في الإصدار نوع 17. تعلم المزيد في هذه <a href="https://www.freecodecamp.org/news/how-to-safely-use-reacts-life-cycles-with-fiber-s-async-rendering-fd4469ebbd8f/" target="_blank" rel="noopener noreferrer nofollow">المقالة</a>

# --instructions--

يتم استدعاء طريقة `componentWillMount()` قبل طريقة `render()` عندما يتم تحميل مكون إلى DOM. سجل شيء ما إلى وحدة التحكم (console) داخل `componentWillMount()` - قد ترغب في فتح وحدة تحكم المتصفح (browser console) الخاصة بك لمشاهدة الناتج.

# --hints--

`MyComponent` يجب أن ينتج عنصر `div`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
    return mockedComponent.find('div').length === 1;
  })()
);
```

`console.log` يجب استدعاءه في `componentWillMount`.

```js
assert(
  (function () {
    const lifecycle = React.createElement(MyComponent)
      .type.prototype.componentWillMount.toString()
      .replace(/ /g, '');
    return lifecycle.includes('console.log(');
  })()
);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<MyComponent />, document.getElementById('root'))
```

## --seed-contents--

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    // Change code below this line

    // Change code above this line
  }
  render() {
    return <div />
  }
};
```

# --solutions--

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    // Change code below this line
    console.log('Component is mounting...');
    // Change code above this line
  }
  render() {
    return <div />
  }
};
```
