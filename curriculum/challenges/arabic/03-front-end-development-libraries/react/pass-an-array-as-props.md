---
id: 5a24c314108439a4d403616a
title: مرر قائمة (Array) مثل مِيزات (Props)
challengeType: 6
forumTopicId: 301401
dashedName: pass-an-array-as-props
---

# --description--

وأظهر التحدي السابق كيفية نقل المعلومات من عنصر الأساسي إلى مكون الفرعي مثل عنصر `props` أو الخواص. هذا التحدي يظهر كيفية تمرير القائمات (arrays) مثل `props`. لتمرير قائمة (array) إلى عنصر JSX، يجب معاملته JavaScript ومغلف في أقواس منحنية (curly braces).

```jsx
<ParentComponent>
  <ChildComponent colors={["green", "blue", "red"]} />
</ParentComponent>
```

بعد ذلك يمكن لمكون الفرعي الوصول إلى خاصية قائمة (array) باسم `colors`. وسائل القائمة مثل `join()` يمكن استخدامها عند اللجوء إلى الخاصية. سيؤدي `const ChildComponent = (props) => <p>{props.colors.join(', ')}</p>` إلى ضم جميع عناصر قائمة `colors` إلى string مفصولة بالفصلة (comma) وينتج: <`<p>green, blue, red</p>` لاحقا، ستتعلم عن الطرق الشائعة الأخرى لإنتاج قائمات البيانات في React.

# --instructions--

هناك `List` و `ToDo` في محرر التعليمات البرمجية. عند أنتاج كل `List` من المكون `ToDo`، مرر خاصية `tasks` تم تعيينها لقائمة من المهام للقيام بها، على سبيل المثال `["walk dog", "workout"]`. ثم أستخدم قائمة `tasks` في مكون القائمة `List`، تظهر قيمتها داخل عنصر `p`. استخدم `join(", ")` لعرض `props.tasks` في عنصر `p` كقائمة مفصولة بفواصل (comma). وينبغي لقائمة اليوم أن تتضمن مهمتين في الأقل، وينبغي أن يكون للغد 3 مهام في الأقل.

# --hints--

مكون `ToDo` يجب أن ينتج `div` خارجي واحد.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ToDo));
    return mockedComponent.children().first().type() === 'div';
  })()
);
```

يجب أن يكون العنصر الفرعي الثالث من مكون `ToDo` جزء من مكون `List`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ToDo));
    return mockedComponent.children().first().childAt(2).name() === 'List';
  })()
);
```

يجب أن يكون العنصر الفرعي الخامس من مكون `ToDo` جزء من مكون `List`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ToDo));
    return mockedComponent.children().first().childAt(4).name() === 'List';
  })()
);
```

يجب أن يكون لكلا مثالين من مكون `List` خاصية تسمى `tasks` و يجب أن تكون `tasks` من نوع القائمة (array).

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ToDo));
    return (
      Array.isArray(mockedComponent.find('List').get(0).props.tasks) &&
      Array.isArray(mockedComponent.find('List').get(1).props.tasks)
    );
  })()
);
```

يجب أن يحتوي المكون `List` الأول الذي يمثل مهام اليوم على عنصرين أو أكثر.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ToDo));
    return mockedComponent.find('List').get(0).props.tasks.length >= 2;
  })()
);
```

المكون `List` الثاني الذي يمثل مهام الغد يجب أن يحتوي على 3 عناصر أو أكثر.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ToDo));
    return mockedComponent.find('List').get(1).props.tasks.length >= 3;
  })()
);
```

يجب أن يقدم المكون `List` القيمة من مِيزة `tasks` في علامة `p`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ToDo));
    return (
      mockedComponent
        .find('p')
        .get(0)
        .props.children.replace(/\s*,\s*/g, ',') ===
        mockedComponent
          .find('List')
          .get(0)
          .props.tasks.join(',')
          .replace(/\s*,\s*/g, ',') &&
      mockedComponent
        .find('p')
        .get(1)
        .props.children.replace(/\s*,\s*/g, ',') ===
        mockedComponent
          .find('List')
          .get(1)
          .props.tasks.join(',')
          .replace(/\s*,\s*/g, ',')
    );
  })()
);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<ToDo />, document.getElementById('root'))
```

## --seed-contents--

```jsx
const List = (props) => {
  { /* Change code below this line */ }
  return <p>{}</p>
  { /* Change code above this line */ }
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        { /* Change code below this line */ }
        <List/>
        <h2>Tomorrow</h2>
        <List/>
        { /* Change code above this line */ }
      </div>
    );
  }
};
```

# --solutions--

```jsx
const List= (props) => {
  return <p>{props.tasks.join(', ')}</p>
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        <List tasks={['study', 'exercise']} />
        <h2>Tomorrow</h2>
        <List tasks={['call Sam', 'grocery shopping', 'order tickets']} />
      </div>
    );
  }
};
```
