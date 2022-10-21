---
id: 5a24c314108439a4d4036189
title: تغيير Inline CSS على أساس حالة المكون (Component State)
challengeType: 6
forumTopicId: 301380
dashedName: change-inline-css-conditionally-based-on-component-state
---

# --description--

في هذه المرحلة، رأيتم عدة تطبيقات للعرض المشروط و استخدام التصميمات الداخلية. هذا مثال آخر يجمع بين هذين الموضوعين. يمكنك أيضا جعل CSS مشروطا استنادا على حالة (state) مكون React. للقيام بذلك، يمكنك التحقق من وجود حالة، وإذا تم الوفاء بهذا الشرط، عدّل كائن التصميمات التي تم تعيينها لعناصر JSX في طريقة التقديم.

ومن المهم فهم هذا النموذج لأنه تحولاً جذرياً عن النهج الأكثر تقليدية المتمثل في تطبيق التصميمات عن طريق تعديل عناصر DOM قاصدًا (وهو أمر شائع جداً مع JQuery، مثلاً). وفي ذلك النهج، يجب أن تتتبع متى تتغير العناصر وأن تتعامل أيضا مع التلاعب الفعلي قاصدًا. قد يصبح من الصعب تتبع التغييرات، مما قد يجعل واجهة المستخدم (UI) الخاصة بك غير قابلة للتنبؤ. عندما تضبط كائن الأسلوب بناءً على شرط، فإنك تصف كيف يجب أن تبدو واجهة المستخدم (UI) بناء على وظيفة لحالة التطبيق. وهناك تدفق واضح للمعلومات لا يتحرك إلا في اتجاه واحد. هذه هي الطريقة المفضلة عند كتابة الطلبات مع React.

# --instructions--

يحتوي محرر التعليمات البرمجية على مكون مدخل بسيط محكوم به حدود (border) مصممة. تريد تصميم هذا الحدود الحمراء إذا قام المستخدم بطبع أكثر من 15 حرفاً من النص في مربع الإدخال. إضافة شرط للتحقق من ذلك، وإذا كان الشرط صحيحا، عيّن أسلوب الحدود المدخل إلى `3px solid red`. يمكنك محاولة ذلك بإدخال النص في المدخل.

# --hints--

يجب أن يوفر مكون `GateKeeper` عنصر `div`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(GateKeeper));
    return mockedComponent.find('div').length === 1;
  })()
);
```

يجب تهيئة المكون `GateKeeper` بمفتاح الحالة `input` إلى string فارغة.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(GateKeeper));
    return mockedComponent.state().input === '';
  })()
);
```

يجب أن يقدم مكون `GateKeeper` علامة `h3` و علامة `input`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(GateKeeper));
    return (
      mockedComponent.find('h3').length === 1 &&
      mockedComponent.find('input').length === 1
    );
  })()
);
```

يجب أن تحتوي علامة `input` في البداية على أسلوب `1px solid black` لخاصية `border`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(GateKeeper));
    return (
      mockedComponent.find('input').props().style.border === '1px solid black'
    );
  })()
);
```

يجب أن يتم تصميم علامة `input` بحدود `3px solid red` إذا كانت قيمة الإدخال في الحالة أطول من 15 حرفاً.

```js
async () => {
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 100));
  const mockedComponent = Enzyme.mount(React.createElement(GateKeeper));
  const simulateChange = (el, value) =>
    el.simulate('change', { target: { value } });
  let initialStyle = mockedComponent.find('input').props().style.border;
  const state_1 = () => {
    mockedComponent.setState({ input: 'this is 15 char' });
    return waitForIt(() => mockedComponent.find('input').props().style.border);
  };
  const state_2 = () => {
    mockedComponent.setState({
      input: 'A very long string longer than 15 characters.'
    });
    return waitForIt(() => mockedComponent.find('input').props().style.border);
  };
  const style_1 = await state_1();
  const style_2 = await state_2();
  assert(
    initialStyle === '1px solid black' &&
      style_1 === '1px solid black' &&
      style_2 === '3px solid red'
  );
};
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<GateKeeper />, document.getElementById('root'))
```

## --seed-contents--

```jsx
class GateKeeper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ input: event.target.value })
  }
  render() {
    let inputStyle = {
      border: '1px solid black'
    };
    // Change code below this line

    // Change code above this line
    return (
      <div>
        <h3>Don't Type Too Much:</h3>
        <input
          type="text"
          style={inputStyle}
          value={this.state.input}
          onChange={this.handleChange} />
      </div>
    );
  }
};
```

# --solutions--

```jsx
class GateKeeper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ input: event.target.value })
  }
  render() {
    let inputStyle = {
      border: '1px solid black'
    };
    if (this.state.input.length > 15) {
      inputStyle.border = '3px solid red';
    };
    return (
      <div>
        <h3>Don't Type Too Much:</h3>
        <input
          type="text"
          style={inputStyle}
          value={this.state.input}
          onChange={this.handleChange} />
      </div>
    );
  }
};
```
