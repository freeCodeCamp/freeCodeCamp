---
id: 5a24c314108439a4d4036164
title: إنشاء مكون (Component) مع التكوين (Composition)
challengeType: 6
forumTopicId: 301383
dashedName: create-a-component-with-composition
---

# --description--

الآن سوف تنظر في كيفية تكوين مكونات متعددة من React. تخيل أنك تبني تطبيق وأنشأت ثلاث مكونات: `Navbar`, و `Dashboard`, و `Footer`.

لتجميع هذه المكونات معا، يمكنك إنشاء عنصر `App` تكون مكون *الأصل* الذي يجعل كل واحد من هذه المكونات الثلاثة *أبنائه*. لجعل مكون أبن في مكون React، ضف اسم المكون المكتوب كعلامة HTML مخصصة في JSX. على سبيل المثال، في طريقة `render` يمكنك الكتابة:

```jsx
return (
 <App>
  <Navbar />
  <Dashboard />
  <Footer />
 </App>
)
```

عندما يقرا React علامة HTML مخصصة تشير إلى مكون آخر (اسم مكون مغلف في `< />` مثل المثال)، فهو يجعل تكوين ذلك المكون في موقع العلامة. هذا يجب أن يوضح العِلاقة بين الوالد والابن بين عنصر `App` و `Navbar`, و`Dashboard`, و `Footer`.

# --instructions--

في محرر التعليمات البرمجية، هناك مكون وظيفي بسيط يسمى `ChildComponent` ومكون فئة يسمى `ParentComponent`. تكوين الاثنين معاً بواسطة تقديم `ChildComponent` ضمن `ParentComponent`. تيقن من إغلاق علامة `ChildComponent` مع خط المائل إلى الأمام.

**ملاحظة:** إن `ChildComponent` يعرف مع وظيفة سهم ES6 لأن هذه ممارسة شائعة جدا عند استخدام React. ومع ذلك، أعرف أن هذا مجرد وظيفة. إذا لم تكن على دراية بصيغة وظيفة السهم، يرجى الرجوع إلى قسم JavaScript.

# --hints--

يجب أن يعيد مكون React عنصر `div` واحد.

```js
assert(
  (function () {
    var shallowRender = Enzyme.shallow(React.createElement(ParentComponent));
    return shallowRender.type() === 'div';
  })()
);
```

وينبغي للمكون أن ينتج عنصرين متداخلين (two nested elements).

```js
assert(
  (function () {
    var shallowRender = Enzyme.shallow(React.createElement(ParentComponent));
    return shallowRender.children().length === 2;
  })()
);
```

يجب أن ينتج المكون `ChildComponent` يكون أبن الثاني.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ParentComponent));
    return (
      mockedComponent.find('ParentComponent').find('ChildComponent').length ===
      1
    );
  })()
);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<ParentComponent />, document.getElementById('root'))
```

## --seed-contents--

```jsx
const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        { /* Change code below this line */ }


        { /* Change code above this line */ }
      </div>
    );
  }
};
```

# --solutions--

```jsx
const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        { /* Change code below this line */ }
        <ChildComponent />
        { /* Change code above this line */ }
      </div>
    );
  }
};
```
