---
id: 5a24c314108439a4d4036173
title: تعيين الحالة (State) مع طريقة this.setState
challengeType: 6
forumTopicId: 301412
dashedName: set-state-with-this-setstate
---

# --description--

تحدثت التحديات السابقة عن `state` للمكون (component) وكيفية تهيئة الحالة (state) في `constructor`. وهناك أيضا طريقة لتغيير `state` المكون (component). يوفر React طريقة (method) لتحديث `state` المكون (component) تسمى `setState`. يمكنك التواصل بطريقة (method) تسمى `setState` داخل فئة مكونك (component class) مثل: `this.setState()`، وإرسال كائن (object) مع أزواج القيمة الرئيسة (key-value). تكون الهُوِيَّات (keys) حالة (state) خصائصك (properties) وقيم حالة البيانات المحدثة. على سبيل المثال، إذا خزنت `username` في الحالة (state) و أردنا تحديثه، فسيبدو كذلك:

```jsx
this.setState({
  username: 'Lewis'
});
```

يتوقع React منك عدم تعديل `state` قاصدًا، بدلاً من ذلك استخدم `this.setState()` دائماً عند حدوث تغييرات في الحالة (state). كما يجب أن تشير إلى أن React قد تركيب تحديث حالة (state) متعدد من أجل تحسين الأداء. ما يعنيه هذا هو أن تحديثات الحالة (state) بواسطة طريقة (method) تسمى `setState` يمكن أن تكون غير متزامن (asynchronous). هناك صيغة بديلة لطريقة `setState` التي توفر حل حول هذه المشكلة. هذا نادراً ما تكون هناك حاجة إليه ولكن من الجيد أن معرفته! يرجى الرجوع إلى <a href="https://www.freecodecamp.org/news/what-is-state-in-react-explained-with-examples/" target="_blank" rel="noopener noreferrer nofollow">مقال React</a> لمزيد من التفاصيل.

# --instructions--

هناك عنصر `button` في محرر التعليمات البرمجية له معالج `onClick()`. يتم تشغيل هذا المعالج عندما يستقبل `button` حدث النقر في المتصفح، يشغل الطريقة `handleClick` المعرَّفة في `MyComponent`. في حدود طريقة (method) المسمى `handleClick` حدث `state` للمكون (component) باستخدام `this.setState()`. عيّن خاصية (property) المسمى `name` في `state` لتساوي مقطع نصي (string) بقيمة `React Rocks!`.

انقر على الزر (button) وشاهد تحديث الحالة (state) المنشئة. لا تقلق إذا كنت لا تفهم تماما كيف يعمل رمز المعالج في هذه المرحلة. إنه مغطى في التحديات القادمة.

# --hints--

يجب أن تهيئ حالة `MyComponent` مع زوج القيمة الرئيسة `{ name: Initial State }`.

```js
assert(
  Enzyme.mount(React.createElement(MyComponent)).state('name') ===
    'Initial State'
);
```

`MyComponent` يجب أن يٌنتج عنصر عنوان `h1`.

```js
assert(Enzyme.mount(React.createElement(MyComponent)).find('h1').length === 1);
```

يجب أن يحتوي عنصر العنوان `h1` المُنتج على النص المقدم من حالة المكون (component's state).

```js
async () => {
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250));
  const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
  const first = () => {
    mockedComponent.setState({ name: 'TestName' });
    return waitForIt(() => mockedComponent.html());
  };
  const firstValue = await first();
  assert(/<h1>TestName<\/h1>/.test(firstValue));
};
```

فَعّيل الطريقة (method) المسمى `handleClick` في `MyComponent` لتعيين خاصية name في الحالة (state) لتساوي `React Rocks!`.

```js
async () => {
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250));
  const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
  const first = () => {
    mockedComponent.setState({ name: 'Before' });
    return waitForIt(() => mockedComponent.state('name'));
  };
  const second = () => {
    mockedComponent.instance().handleClick();
    return waitForIt(() => mockedComponent.state('name'));
  };
  const firstValue = await first();
  const secondValue = await second();
  assert(firstValue === 'Before' && secondValue === 'React Rocks!');
};
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
    this.state = {
      name: 'Initial State'
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // Change code below this line

    // Change code above this line
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};
```

# --solutions--

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Initial State'
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
     // Change code below this line
    this.setState({
      name: 'React Rocks!'
    });
    // Change code above this line
  }
  render() {
    return (
      <div>
        <button onClick = {this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};
```
