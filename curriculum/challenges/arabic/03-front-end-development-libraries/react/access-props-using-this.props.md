---
id: 5a24c314108439a4d403616e
title: الوصول إلى Props باستخدام this.props
challengeType: 6
forumTopicId: 301375
dashedName: access-props-using-this-props
---

# --description--

وشملت التحديات العدّة الأخيرة الطرق الأساسية لإيصال props المتعلقة بمكونات الأطفال (child components). ولكن ماذا لو كان مكون الطفل (child component) الذي تمرره هو مكون لفئة ES6 بدلاً من مكون وظيفي عديم الحالة؟ ويستخدم مكون لفئة ES6 اتفاقية مختلفة قليلاً للوصول إلى props.

في أي وقت تشير إلى مكون لفئة (class component) داخل نفسه، تستخدم الكلمة `this`. للوصول إلى props ضمن مكون لفئة، يمكنك إعداد التعليمات البرمجية التي تستخدمها للوصول إليها مع `this`. على سبيل المثال، إذا كان مكون لفئة ES6 يحتوي على props يسمى `data`، فإنك تكتب `{this.props.data}` في JSX.

# --instructions--

تقديم (render) خطوة للمكون `Welcome` في المكون الأصلي `App`. هنا، أعط `Welcome` دعمه (prop) من `name` وتعيين قيمة string. داخل الطفل، `Welcome`، الوصول إلى دعمه (prop) باسم `name` ضمن `strong` قوية.

# --hints--

يجب أن يعيد مكون `App` عنصر `div` واحد.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(App));
    return mockedComponent.children().type() === 'div';
  })()
);
```

يجب أن يكون ابن `App` مكون `Welcome`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(App));
    return (
      mockedComponent.children().childAt(0).name() === 'Welcome'
    );
  })()
);
```

يجب أن يحتوي مكون `Welcome` على دعمه (prop) يسمى `name`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(App));
    return mockedComponent.find('Welcome').props().name;
  })()
);
```

يجب أن يعرض مكون `Welcome` المقطع (string) الذي تمرره دعمه (prop) باسم `name` ضمن دعمه باسم `strong` داخل وسوم.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(App));
    return (
      mockedComponent.find('strong').text() ===
      mockedComponent.find('Welcome').props().name
    );
  })()
);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<App />, document.getElementById('root'))
```

## --seed-contents--

```jsx
class App extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
            { /* Change code below this line */ }
            <Welcome />
            { /* Change code above this line */ }
        </div>
    );
  }
};

class Welcome extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
          { /* Change code below this line */ }
          <p>Hello, <strong></strong>!</p>
          { /* Change code above this line */ }
        </div>
    );
  }
};
```

# --solutions--

```jsx
class Welcome extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
          { /* Change code below this line */ }
          <p>Hello, <strong>{this.props.name}</strong>!</p>
          { /* Change code above this line */ }
        </div>
    );
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
            { /* Change code below this line */ }
            <Welcome name="Quincy"/>
            { /* Change code above this line */ }
        </div>
    );
  }
};
```
