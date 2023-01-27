---
id: 5a24c314108439a4d4036179
title: إنشاء نموذج المتحكم بيه (Controlled Form)
challengeType: 6
forumTopicId: 301384
dashedName: create-a-controlled-form
---

# --description--

وأظهر التحدي الأخير أن React يمكنها التحكم في state الداخلية لعناصر معينة مثل `input` و `textarea`, الذي يجعلها مكونات (components) خاضعة للتحكم. ينطبق هذا على عناصر النموذج (form) الأخرى أيضا، بما في ذلك عنصر `form` الذي يكون HTML العادي.

# --instructions--

تم إعداد مكون `MyForm` مع `form` فارغ مع معالج الإرسال. وسيتم استدعاء المعالج الإرسال (submit handler) عند تقديم النموذج.

لقد أضفت الزر الذي يرسل النموذج. يمكنك أن ترى أنه يحتوي على `type` إلى `submit` مما يشير إلى أنه الزر الذي يتحكم في النموذج. أضف عنصر `input` في `form` وقم بتعيين سمات `value` و `onChange()` مثل التحدي الأخير. يجب عليك بعد ذلك إكمال طريقة (method) تسمى `handleSubmit` بحيث يتعين ممتلكات state المكونة (component) مسمى `submit` إلى قيمة الإدخال (input) الحالية في `state` المحلية.

**ملاحظة:** يجب عليك أيضًا الاتصال بوظيفة `event.preventDefault()` في المعالج الإرسال، لمنع إرسال النموذج الافتراضي للسلوك الذي يحديث صفحة الويب. لتسهله استخداما، تم تعطيل السلوك الافتراضي هنا لمنع التحديثات من إعادة تعيين رمز التحدي (resetting challenge code).

أخيرا إنشاء علامة `h1` بعد `form` الذي يجعل `submit` قيمة من `state` المكون. يمكنك كتابة النموذج ثم انقر فوق الزر (أو اضغط على الإدخال)، ويجب أن ترى ما أدخلت ينتج على الصفحة.

# --hints--

`MyForm` يجب أن يعيد عنصر `div` الذي يحتوي على علامة `form` و `h1`. يجب أن يحتوي النموذج على `input` و `button`.

```js
assert(
  (() => {
    const mockedComponent = Enzyme.mount(React.createElement(MyForm));
    return (
      mockedComponent.find('div').children().find('form').length === 1 &&
      mockedComponent.find('div').children().find('h1').length === 1 &&
      mockedComponent.find('form').children().find('input').length === 1 &&
      mockedComponent.find('form').children().find('button').length === 1
    );
  })()
);
```

يجب أن تهيئ state تسمى `MyForm` باستخدام خواص `input` و `submit`، وكلاهما يحمل مقاطع نصية (strings) فارغة.

```js
assert(
  Enzyme.mount(React.createElement(MyForm)).state('input') === '' &&
    Enzyme.mount(React.createElement(MyForm)).state('submit') === ''
);
```

الكتابة في عنصر `input` يجب أن تحديث خاصية `input` في state المكون (component).

```js
(() => {
  const mockedComponent = Enzyme.mount(React.createElement(MyForm));
  const _1 = () => {
    mockedComponent.setState({ input: '' });
    return mockedComponent.state('input');
  };
  const _2 = () => {
    mockedComponent
      .find('input')
      .simulate('change', { target: { value: 'TestInput' } });
    return {
      state: mockedComponent.state('input'),
      inputVal: mockedComponent.find('input').props().value
    };
  };
  const before = _1();
  const after = _2();
  assert(
    before === '' &&
      after.state === 'TestInput' &&
      after.inputVal === 'TestInput'
  );
})();
```

يجب أن يقوم إرسال النموذج (form) بتشغيل `handleSubmit` الذي يجب أن يحدد خاصية `submit` أذي تساوي state في مدخلات (input) الحالية.

```js
(() => {
  const mockedComponent = Enzyme.mount(React.createElement(MyForm));
  const _1 = () => {
    mockedComponent.setState({ input: '' });
    mockedComponent.setState({ submit: '' });
    mockedComponent
      .find('input')
      .simulate('change', { target: { value: 'SubmitInput' } });
    return mockedComponent.state('submit');
  };
  const _2 = () => {
    mockedComponent.find('form').simulate('submit');
    return mockedComponent.state('submit');
  };
  const before = _1();
  const after = _2();
  assert(before === '' && after === 'SubmitInput');
})();
```

`handleSubmit` يجب أن يصل `event.preventDefault`

```js
assert(
  __helpers.isCalledWithNoArgs(
    'event.preventDefault',
    MyForm.prototype.handleSubmit.toString()
  )
);
```

عنصر العنوان `h1` يجب أن يأثر على قيمة الخانة `submit` من state المكون (component).

```js
(() => {
  const mockedComponent = Enzyme.mount(React.createElement(MyForm));
  const _1 = () => {
    mockedComponent.setState({ input: '' });
    mockedComponent.setState({ submit: '' });
    mockedComponent
      .find('input')
      .simulate('change', { target: { value: 'TestInput' } });
    return mockedComponent.find('h1').text();
  };
  const _2 = () => {
    mockedComponent.find('form').simulate('submit');
    return mockedComponent.find('h1').text();
  };
  const before = _1();
  const after = _2();
  assert(before === '' && after === 'TestInput');
})();
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<MyForm />, document.getElementById('root'));
```

## --seed-contents--

```jsx
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit(event) {
    // Change code below this line

    // Change code above this line
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {/* Change code below this line */}

          {/* Change code above this line */}
          <button type='submit'>Submit!</button>
        </form>
        {/* Change code below this line */}

        {/* Change code above this line */}
      </div>
    );
  }
}
```

# --solutions--

```jsx
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState(state => ({
      submit: state.input
    }));
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.input} onChange={this.handleChange} />
          <button type='submit'>Submit!</button>
        </form>
        <h1>{this.state.submit}</h1>
      </div>
    );
  }
}
```
