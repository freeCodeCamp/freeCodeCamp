---
id: 5a24c314108439a4d403617b
title: تمرير معاودة الاتصال (Callback) مثل ميزات (Props)
challengeType: 6
forumTopicId: 301400
dashedName: pass-a-callback-as-props
---

# --description--

يمكنك تمرير `state` مثل مِيزة للمكونات الفرعية، ولكن لا تقتصر على تمرير البيانات. يمكنك أيضا تمرير وظائف المعالجين (handler functions) أو أي طريقة يتم تعريفها على مكون React لمكون الفرعي. هذه هي الطريقة التي تسمح بها لمكونات الفرعية للتفاعل مع مكوناتهم الأسلية. تمرير طرق الفرعي مثل مِيزة عادية. تم تعيين اسم ولديك حق الوصول إلى اسم هذه الطريقة تحت `this.props` في المكون الفرعي.

# --instructions--

هناك ثلاث مكونات مبينة في محرر التعليمات البرمجية. مكون `MyApp` هو أساسي الذي سيوفر مكونات `GetInput` و `RenderInput` فرعية. أضف مكون `GetInput` إلى طريقة التقديم في `MyApp`، ثم اجتازه مِيزة يسمى `input` تم تعيينه إلى `inputValue` في حالة `MyApp` التي تكون `state`. قم أيضا بإنشاء مِيزة باسم `handleChange` وتمرير معالج المدخلات (input handler) باسم `handleChange` إليه.

أضف مكون `RenderInput` إلى طريقة التقديم في `MyApp`، ثم أنشاء مِيزة باسم `input` تم تعيينه إلى `inputValue` في `state`. بمجرد انتهائك سوف تكون قادراً على كتابة `input` في مكون `GetInput`، التي تستخدم طريقة المعالج عن طريق الميزات في أصلها. يقوم هذا بتحديث الإدخال في `state` للأساس، الذي يتم تمريره كمستلزمات لكلا الفرعي. لاحظ كيف تتدفق البيانات بين المكونات وكيف يبقى المصدر الوحيد للحقيقة (single source of truth) يكون `state` للمكون الأساسي. ومن المسلم به أن هذا المثال مخيف بعض الشيء، ولكن ينبغي يوضح للكيفية التي يمكن بها تمرير البيانات والاستدعاءات (callbacks) بين مكونات React.

# --hints--

يجب أن يقدم مكون `MyApp`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyApp));
    return mockedComponent.find('MyApp').length === 1;
  })()
);
```

يجب أن يقدم مكون `GetInput`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyApp));
    return mockedComponent.find('GetInput').length === 1;
  })()
);
```

يجب أن يقدم مكون `RenderInput`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyApp));
    return mockedComponent.find('RenderInput').length === 1;
  })()
);
```

يجب أن يتلقى مكون `GetInput` ألى `MyApp` خاصية الحالة `inputValue` كمِيزة ويحتوي على عنصر `input` الذي يعدل حالة `MyApp`.

```js
async () => {
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250));
  const mockedComponent = Enzyme.mount(React.createElement(MyApp));
  const state_1 = () => {
    mockedComponent.setState({ inputValue: '' });
    return waitForIt(() => mockedComponent.state());
  };
  const state_2 = () => {
    mockedComponent
      .find('input')
      .simulate('change', { target: { value: 'TestInput' } });
    return waitForIt(() => mockedComponent.state());
  };
  const updated_1 = await state_1();
  const updated_2 = await state_2();
  assert(updated_1.inputValue === '' && updated_2.inputValue === 'TestInput');
};
```

يجب أن يتلقى مكون `RenderInput` إلى `MyApp` خاصية الحالة `inputValue` كمِيزات.

```js
async () => {
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250));
  const mockedComponent = Enzyme.mount(React.createElement(MyApp));
  const state_1 = () => {
    mockedComponent.setState({ inputValue: 'TestName' });
    return waitForIt(() => mockedComponent);
  };
  const updated_1 = await state_1();
  assert(updated_1.find('p').text().includes('TestName'));
};
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<MyApp />, document.getElementById('root'))
```

## --seed-contents--

```jsx
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }
  render() {
    return (
       <div>
        { /* Change code below this line */ }

        { /* Change code above this line */ }
       </div>
    );
  }
};

class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input
          value={this.props.input}
          onChange={this.props.handleChange}/>
      </div>
    );
  }
};

class RenderInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Input Render:</h3>
        <p>{this.props.input}</p>
      </div>
    );
  }
};
```

# --solutions--

```jsx
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
  this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }
  render() {
    return (
       <div>
         <GetInput
           input={this.state.inputValue}
           handleChange={this.handleChange}/>
         <RenderInput
           input={this.state.inputValue}/>
       </div>
    );
  }
};

class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input
          value={this.props.input}
          onChange={this.props.handleChange}/>
      </div>
    );
  }
};

class RenderInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Input Render:</h3>
        <p>{this.props.input}</p>
      </div>
    );
  }
};
```
