---
id: 5a24c314108439a4d4036187
title: استخدام Ternary Expression للإنتاج المشروط (Conditional Rendering)
challengeType: 6
forumTopicId: 301414
dashedName: use-a-ternary-expression-for-conditional-rendering
---

# --description--

قبل الانتقال إلى تقنيات العرض الديناميكي، هناك طريقة أخيرة لاستخدام اشتراطات JavaScript المدمجة لتقديم ما تريده, تسمى: <dfn>ternary operator</dfn>. غالباً ما يستخدم ternary operator كاختصار لتعبيرات `if/else` في JavaScript. إنها ليست قوية تماما مثل تعبيرات `if/else` التقليدية، لكنها تحظى بشعبية كبيرة بين مطوري React. أحد أسباب هذا هو بسبب كيفية تجميع JSX، أن تعبيرات `if/else` لا يمكن إدراجها في كود JSX مباشرة. ربما كنت قد لاحظت هذا في تحديين السابقين - عندما يكون تعبير `if/else` مطلوب، كان دائماً *خارج* كلمة `return`. Ternary expressions يمكن أن تكون بديلا ممتازا إذا كنت تريد تنفيذ المنطق الشرط (conditional logic) داخل JSX. تذكر أن ternary operator له ثلاث أجزاء، ولكن يمكنك الجمع بين عدة ternary expressions. إليك الجملة الأساسية:

```jsx
condition ? expressionIfTrue : expressionIfFalse;
```

# --instructions--

يحتوي محرر التعليمات البرمجية على ثلاث ثوابت تُعرف في مكون `CheckUserAge` داخل طريقة `render()`. يطلق عليهم `buttonOne`, و `buttonTwo`, و `buttonThree`. يتم تعيين كل من هذه عبارة JSX بسيطة تمثل عنصر الزر (button). أولا، هيّئ حالة (state) بقيمة `CheckUserAge` مع `input` و `userAge` وكلاهما مجموعة مقطع نصي (string) فارغة.

وبمجرد أن يقدم المكون المعلومات إلى الصفحة، ينبغي أن يكون لدى المستخدمين طريقة للتفاعل معها. ضمن تعبير `return` للمكون، أنشئ ternary expression يطبق المنطق التالي: عند تحميل الصفحة أول مرة، يعرض زر الإرسال (submit button)، باسم `buttonOne`، إلى الصفحة. بعد ذلك، عندما يدخل المستخدم عمره وينقر على الزر، ينتج زر مختلف تبعاً لعمره. إذا دخل المستخدم رقماً أقل من `18`، أنشئ `buttonThree`. إذا دخل المستخدم رقما أكبر من أو يساوي `18`، أنشئ `buttonTwo`.

# --hints--

أنشئ المكون `CheckUserAge` مع عنصر واحد `input` وعنصر `button` واحد.

```js
assert(
  Enzyme.mount(React.createElement(CheckUserAge)).find('div').find('input')
    .length === 1 &&
    Enzyme.mount(React.createElement(CheckUserAge)).find('div').find('button')
      .length === 1
);
```

يجب تهيئة حالة (state) المكون (component) مسمى `CheckUserAge` بخاصية `userAge` وخاصية `input`، كل منهما يحمل مقطع نصي (string) فارغ.

```js
assert(
  Enzyme.mount(React.createElement(CheckUserAge)).state().input === '' &&
    Enzyme.mount(React.createElement(CheckUserAge)).state().userAge === ''
);
```

عندما يتم تسليم المكون `CheckUserAge` أول مرة إلى DOM، يجب إرسال نص `button` الداخلي.

```js
assert(
  Enzyme.mount(React.createElement(CheckUserAge)).find('button').text() ===
    'Submit'
);
```

عندما يتم إدخال عدد من أقل من 18 في عنصر `input` ويتم النقر على `button`، يجب أن يكون النص `button` الداخلي بقيمة `You Shall Not Pass`.

```js
(() => {
  const mockedComponent = Enzyme.mount(React.createElement(CheckUserAge));
  const initialButton = mockedComponent.find('button').text();
  const enter3AndClickButton = () => {
    mockedComponent
      .find('input')
      .simulate('change', { target: { value: '3' } });
    mockedComponent.find('button').simulate('click');
    mockedComponent.update();
    return mockedComponent.find('button').text();
  };
  const enter17AndClickButton = () => {
    mockedComponent
      .find('input')
      .simulate('change', { target: { value: '17' } });
    mockedComponent.find('button').simulate('click');
    mockedComponent.update();
    return mockedComponent.find('button').text();
  };
  const userAge3 = enter3AndClickButton();
  const userAge17 = enter17AndClickButton();
  assert(
    initialButton === 'Submit' &&
      userAge3 === 'You Shall Not Pass' &&
      userAge17 === 'You Shall Not Pass'
  );
})();
```

عندما يتم إدخال عدد من أكبر أو يساوي 18 في عنصر `input` ويتم النقر على `button`، يجب أن يكون النص `button` الداخلي بقيمة `You May Enter`.

```js
(() => {
  const mockedComponent = Enzyme.mount(React.createElement(CheckUserAge));
  const initialButton = mockedComponent.find('button').text();
  const enter18AndClickButton = () => {
    mockedComponent
      .find('input')
      .simulate('change', { target: { value: '18' } });
    mockedComponent.find('button').simulate('click');
    mockedComponent.update();
    return mockedComponent.find('button').text();
  };
  const enter35AndClickButton = () => {
    mockedComponent
      .find('input')
      .simulate('change', { target: { value: '35' } });
    mockedComponent.find('button').simulate('click');
    mockedComponent.update();
    return mockedComponent.find('button').text();
  };
  const userAge18 = enter18AndClickButton();
  const userAge35 = enter35AndClickButton();
  assert(
    initialButton === 'Submit' &&
      userAge18 === 'You May Enter' &&
      userAge35 === 'You May Enter'
  );
})();
```

حالما يتم إرسال رَقَم، ويتم مرة أخرى تغيير قيمة `input`، يجب أن ينشئ `button` نص حسب قراءة `Submit`.

```js
(() => {
  const mockedComponent = Enzyme.mount(React.createElement(CheckUserAge));
  const enter18AndClickButton = () => {
    mockedComponent
      .find('input')
      .simulate('change', { target: { value: '18' } });
    mockedComponent.find('button').simulate('click');
    mockedComponent.update();
    return mockedComponent.find('button').text();
  };
  const changeInputDontClickButton = () => {
    mockedComponent
      .find('input')
      .simulate('change', { target: { value: '5' } });
    mockedComponent.update();
    return mockedComponent.find('button').text();
  };
  const enter10AndClickButton = () => {
    mockedComponent
      .find('input')
      .simulate('change', { target: { value: '10' } });
    mockedComponent.find('button').simulate('click');
    mockedComponent.update();
    return mockedComponent.find('button').text();
  };
  const userAge18 = enter18AndClickButton();
  const changeInput1 = changeInputDontClickButton();
  const userAge10 = enter10AndClickButton();
  const changeInput2 = changeInputDontClickButton();
  assert(
    userAge18 === 'You May Enter' &&
      changeInput1 === 'Submit' &&
      userAge10 === 'You Shall Not Pass' &&
      changeInput2 === 'Submit'
  );
})();
```

يجب ألا يحتوي كودك على أي تعبيرات `if/else`.

```js
assert(
  new RegExp(/(\s|;)if(\s|\()/).test(
    code
  ) === false
);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<CheckUserAge />, document.getElementById('root'));
```

## --seed-contents--

```jsx
const inputStyle = {
  width: 235,
  margin: 5
};

class CheckUserAge extends React.Component {
  constructor(props) {
    super(props);
    // Change code below this line

    // Change code above this line
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      input: e.target.value,
      userAge: ''
    });
  }
  submit() {
    this.setState(state => ({
      userAge: state.input
    }));
  }
  render() {
    const buttonOne = <button onClick={this.submit}>Submit</button>;
    const buttonTwo = <button>You May Enter</button>;
    const buttonThree = <button>You Shall Not Pass</button>;
    return (
      <div>
        <h3>Enter Your Age to Continue</h3>
        <input
          style={inputStyle}
          type='number'
          value={this.state.input}
          onChange={this.handleChange}
        />
        <br />
        {/* Change code below this line */}

        {/* Change code above this line */}
      </div>
    );
  }
}
```

# --solutions--

```jsx
const inputStyle = {
  width: 235,
  margin: 5
};

class CheckUserAge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userAge: '',
      input: ''
    };
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      input: e.target.value,
      userAge: ''
    });
  }
  submit() {
    this.setState(state => ({
      userAge: state.input
    }));
  }
  render() {
    const buttonOne = <button onClick={this.submit}>Submit</button>;
    const buttonTwo = <button>You May Enter</button>;
    const buttonThree = <button>You Shall Not Pass</button>;
    return (
      <div>
        <h3>Enter Your Age to Continue</h3>
        <input
          style={inputStyle}
          type='number'
          value={this.state.input}
          onChange={this.handleChange}
        />
        <br />
        {this.state.userAge === ''
          ? buttonOne
          : this.state.userAge >= 18
          ? buttonTwo
          : buttonThree}
      </div>
    );
  }
}
```
