---
id: 5a24c314108439a4d4036169
title: مرر ميزات (Props) ألى مكون وظيفي عديم الحالة (Stateless Functional Component)
challengeType: 6
forumTopicId: 301402
dashedName: pass-props-to-a-stateless-functional-component
---

# --description--

شملت التحديات السابقة الكثير حول إنشاء وتكوين عناصر JSX، والمكونات الوظيفية (functional components)، ومكونات الفئة التصميم ES6 في React. مع هذه المؤسسة، حان الوقت للنظر إلى خاصية أخرى شائعة جدا في React هي: **ميزات (props)**. في React، يمكنك تمرير مِيزات (props)، أو الخواص (properties)، إلى مكونات الفرعية (child components). قل أن لديك مكون `App` الذي يجعل مكون الفرعي يسمى `Welcome` وهو مكون وظيفي عديم الحالة (stateless functional component). يمكنك تمرير `Welcome` ألى خاصية `user` عن طريق الكتابة:

```jsx
<App>
  <Welcome user='Mark' />
</App>
```

أنت تستخدم **سمات HTML المخصصة** التي أنشأتها وتدعمها React ليتم تمريرها إلى المكون. في هذه الحالة، يتم تمرير الخاصية `user` التي تم إنشاؤها إلى المكون `Welcome`. لما كان `Welcome` هو مكون وظيفي عديم الحالة (stateless functional component)، فلديه حق الوصول إلى هذه القيمة مثل:

```jsx
const Welcome = (props) => <h1>Hello, {props.user}!</h1>
```

إنه معيار لاستدعاء هذه القيمة `props` وعند التعامل مع المكونات الوظيفية عديمة الحالة (stateless functional components)، أنت في الأساس تعدّ حَجَّة لوظيفة تنتج JSX. يمكنك الوصول إلى قيمة الحِجَّة في هيكل الوظيفة. مع مكونات الفئة، سترى أن هذا مختلف بعض الشيء.

# --instructions--

هناك مكونات `Calendar` و `CurrentDate` في محرر التعليمات البرمجية. عند أنتاج `CurrentDate` من مكون `Calendar`، اجر في خاصية `date` المحدد للتاريخ الحالي من JavaScript الكائن `Date`. ثم الوصول إلى عنصر `prop` هذا في مكون `CurrentDate`، مظهراً قيمته داخل العلامات `p`. لاحظ أنه من أجل `prop` أن يتم تقييم مثل قيم JavaScript، يجب أن تكون مرفقة في أقواس منحنية curly brackets، على سبيل المثال `date={Date()}`.

# --hints--

يجب أن يعيد مكون `Calendar` عنصر `div` واحد.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(Calendar));
    return mockedComponent.children().type() === 'div';
  })()
);
```

يجب أن يكون العنصر الفرعي الثاني من عنصر `Calendar` هو مكون `CurrentDate`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(Calendar));
    return mockedComponent.children().childAt(1).name() === 'CurrentDate';
  })()
);
```

يجب أن يحتوي مكون `CurrentDate` على دعمه (prop) يسمى `date`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(Calendar));
    return mockedComponent.children().childAt(1).props().date;
  })()
);
```

يجب أن يحتوي مِيزة `date` في `CurrentDate` على string من النص.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(Calendar));
    const prop = mockedComponent.children().childAt(1).props().date;
    return typeof prop === 'string' && prop.length > 0;
  })()
);
```

يجب إنشاء مِيزة `date` عن طريق الاتصال `Date()`

```js
assert(/<CurrentDatedate={Date\(\)}\/>/.test(__helpers.removeWhiteSpace(code)));
```

يجب أن ينتج المكون `CurrentDate` القيمة من مِيزة `date` في علامة `p`.

```js
let date = 'dummy date';
assert(
  (function () {
    const mockedComponent = Enzyme.mount(
      React.createElement(CurrentDate, { date })
    );
    return mockedComponent.find('p').html().includes(date);
  })()
);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<Calendar />, document.getElementById('root'))
```

## --seed-contents--

```jsx
const CurrentDate = (props) => {
  return (
    <div>
      { /* Change code below this line */ }
      <p>The current date is: </p>
      { /* Change code above this line */ }
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        { /* Change code below this line */ }
        <CurrentDate />
        { /* Change code above this line */ }
      </div>
    );
  }
};
```

# --solutions--

```jsx
const CurrentDate = (props) => {
  return (
    <div>
      { /* Change code below this line */ }
      <p>The current date is: {props.date}</p>
      { /* Change code above this line */ }
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        { /* Change code below this line */ }
        <CurrentDate date={Date()} />
        { /* Change code above this line */ }
      </div>
    );
  }
};
```
