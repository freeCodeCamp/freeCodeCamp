---
id: 5a24c314108439a4d403617e
title: إضافة Event Listeners
challengeType: 6
forumTopicId: 301377
dashedName: add-event-listeners
---

# --description--

طريقة `componentDidMount()` هي أيضا أفضل مكان لإرفاق أي مستمعي الأحداث (event listeners) الذين تحتاج إلى إضافتهم لوظائف محددة. يوفر React نظام الأحداث الاصطناعية التي تغلف نظام الأحداث الأصلية الموجود في المتصفحات. وهذا يعني أن نظام الأحداث الاصطناعية يتصرف بنفس الطريقة بغض النظر عن متصفح المستخدم - حتى لو كانت الأحداث الأصلية تتصرف بطريقة مختلفة بين المتصفحات المختلفة.

لقد كنت تستخدم فعلًا بعض هذه المعالجات الاصطناعية للأحداث مثل `onClick()`. نظام الحدث الاصطناعي في React رائع لاستخدامه في معظم التفاعلات التي ستديرها على عناصر DOM. ومع ذلك، إذا كنت ترغب في إرفاق معالج الحدث (event handler) إلى عناصر المستند أو النافذة، فيجب عليك القيام بذلك مباشرة.

# --instructions--

إرفاق مستمع الحدث (event listener) في طريقة `componentDidMount()` للأحداث `keydown` وجعل هذه الأحداث تشغل رد الاتصال `handleKeyPress()`. يمكنك استخدام `document.addEventListener()` الذي يأخذ الحدث (بالاقتباس) كأول حَجَّة واستدعاء (callback) كحجة ثانية.

ثم، في `componentWillUnmount()`، أزل مستمع هذا الحدث نفسه. يمكنك تمرير نفس الحجج إلى `document.removeEventListener()`. من الممارسات الجيدة أن تستخدم طريقة دورة الحياة (lifecycle) هذه للقيام بأي تنظيف على مكونات React قبل أن يتم تفكيكها وتدميرها. إزالة مستمعي الأحداث مثال على إجراء تنظيف من هذا القبيل.

# --hints--

`MyComponent` يجب أن يقدم عنصر `div` الذي يلم علامة `h1`.

```js
assert(
  (() => {
    const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
    return mockedComponent.find('div').children().find('h1').length === 1;
  })()
);
```

يجب إلحاق مستمع `keydown` بالمستند في `componentDidMount`.

```js
assert(
  (() => {
    const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
    const didMountString = mockedComponent
      .instance()
      .componentDidMount.toString();
    return new RegExp(
      'document.addEventListener(.|\n|\r)+keydown(.|\n|\r)+this.handleKeyPress'
    ).test(didMountString);
  })()
);
```

يجب إزالة مستمع `keydown` من المستند في `componentWillUnmount`.

```js
assert(
  (() => {
    const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
    const willUnmountString = mockedComponent
      .instance()
      .componentWillUnmount.toString();
    return new RegExp(
      'document.removeEventListener(.|\n|\r)+keydown(.|\n|\r)+this.handleKeyPress'
    ).test(willUnmountString);
  })()
);
```

بمجرد تركيب المكون (component)، يجب أن تحدِيث حالته (state) عند الضغط على `enter` وتحدِيث علامة `h1` المقدمة.

```js
async () => {
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250));
  const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
  const beforeState = mockedComponent.state('message');
  const beforeText = mockedComponent.find('h1').text();
  const pressEnterKey = () => {
    mockedComponent.instance().handleKeyPress({ keyCode: 13 });
    return waitForIt(() => {
      mockedComponent.update();
      return {
        state: mockedComponent.state('message'),
        text: mockedComponent.find('h1').text()
      };
    });
  };
  const afterKeyPress = await pressEnterKey();
  assert(
    beforeState !== afterKeyPress.state && beforeText !== afterKeyPress.text
  );
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
      message: ''
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  // Change code below this line
  componentDidMount() {

  }
  componentWillUnmount() {

  }
  // Change code above this line
  handleEnter() {
    this.setState((state) => ({
      message: state.message + 'You pressed the enter key! '
    }));
  }
  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.handleEnter();
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
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
      message: ''
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleEnter = this.handleEnter.bind(this);  }
  componentDidMount() {
    // Change code below this line
    document.addEventListener('keydown', this.handleKeyPress);
    // Change code above this line
  }
  componentWillUnmount() {
    // Change code below this line
    document.removeEventListener('keydown', this.handleKeyPress);
    // Change code above this line
  }
  handleEnter() {
    this.setState((state) => ({
      message: state.message + 'You pressed the enter key! '
    }));
  }
  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.handleEnter();
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
};
```
