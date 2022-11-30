---
id: 5a24c314108439a4d4036174
title: ربط 'this' إلى Class Method
challengeType: 6
forumTopicId: 301379
dashedName: bind-this-to-a-class-method
---

# --description--

بالإضافة إلى إعداد وتحديث `state`، يمكنك أيضًا تحديد طرق (methods) لفئة مكوناتك (component class). عادة ما تحتاج طريقة الفئة (class method) إلى استخدام مصطلح `this` حتى تتمكن من الوصول إلى الخصائص في الفئة (class) (مثل `state` و `props`) داخل نطاق الطريقة (method). هناك بعض الطرق للسماح لطرقية الفئة الخاص بك بالوصول إلى `this`.

إحدى الطرق الشائعة هي ربط `this` صراحة في الإنشاء لذلك يصبح `this` مرتبطاً بأساليب الفئة (class method) عندما يتم تهيئة المكون. ربما لاحظت التحدي الأخير المستخدم `this.handleClick = this.handleClick.bind(this)` لطريقة `handleClick` في البناء. بعد ذلك، عندما تتصل بالوظيفة (function) مثل `this.setState()` ضمن طريقتك لفئة (class method)، يشير `this` إلى الفئة (class) ولن يكون `undefined`.

**ملاحظة:** الكلمة المفتاحية `this` هي واحدة من أكثر الجوانب ارتباكاً في JavaScript ولكنها تؤدي دوراً هاماً في React. مع أنّ أن سلوكها هنا طبيعي تماما، هذه الدروس ليست المكان المناسب لإجراء استعراض متعمق لكلمة `this` لذا يرجى الرجوع إلى الدروس الأخرى إذا كان ما ورد أعلا مثيرا للارتباك!

# --instructions--

يحتوي محرر كود على مكون (component) مع `state` التي تتابع حالة النص. ثم أن لديها طريقة تسمح لك بتعيين النص إلى `You clicked!`. ومع ذلك، فإن الطريقة لا تعمل لأنها تستخدم الكلمة المفتاحية `this` التي لم يتم تعريفها. أصلحة بواسطة ربط `this` بشكل معتمد للطريقة `handleClick()` في بناء المكوّن.

بعد ذلك، أضف معالج النقر (click handler) إلى عنصر `button` في طريقة التقديم. يجب أن تشغل طريقة `handleClick()` عندما يتلقى الزر حدثا بالنقر عليه. تذكر أن الطريقة التي تمررها إلى معالج `onClick` تحتاج إلى أقواس غريبة لأنه يجب أن تفسر قاصدًا على أنها JavaScript.

بمجرد الانتهاء من الخطوات المذكورة أعلاه، يجب أن تكون قادراً على النقر على الزر ومشاهدة `You clicked!`.

# --hints--

`MyComponent` يجب أن يعيد عنصر `div` الذي يغلق عنصرين، button و `h1` في ذلك الترتيب.

```js
assert(
  Enzyme.mount(React.createElement(MyComponent)).find('div').length === 1 &&
    Enzyme.mount(React.createElement(MyComponent))
      .find('div')
      .childAt(0)
      .type() === 'button' &&
    Enzyme.mount(React.createElement(MyComponent))
      .find('div')
      .childAt(1)
      .type() === 'h1'
);
```

يجب أن تهيئ حالة (state) تسمى `MyComponent` مع هُوِيَّة (key) القيمة الرئيسة `{ text: "Hello" }`.

```js
assert(
  Enzyme.mount(React.createElement(MyComponent)).state('text') === 'Hello'
);
```

النقر على `button` يجب تشغيل طريقة (method) تسمى `handleClick` وتعيين حالة (state) تسمى `text` بقيمة `You clicked!`.

```js
async () => {
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250));
  const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
  const first = () => {
    mockedComponent.setState({ text: 'Hello' });
    return waitForIt(() => mockedComponent.state('text'));
  };
  const second = () => {
    mockedComponent.find('button').simulate('click');
    return waitForIt(() => mockedComponent.state('text'));
  };
  const firstValue = await first();
  const secondValue = await second();
  assert(firstValue === 'Hello' && secondValue === 'You clicked!');
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
      text: "Hello"
    };
    // Change code below this line

    // Change code above this line
  }
  handleClick() {
    this.setState({
      text: "You clicked!"
    });
  }
  render() {
    return (
      <div>
        { /* Change code below this line */ }
        <button>Click Me</button>
        { /* Change code above this line */ }
        <h1>{this.state.text}</h1>
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
      text: "Hello"
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      text: "You clicked!"
    });
  }
  render() {
    return (
      <div>
        <button onClick = {this.handleClick}>Click Me</button>
        <h1>{this.state.text}</h1>
      </div>
    );
  }
};
```
