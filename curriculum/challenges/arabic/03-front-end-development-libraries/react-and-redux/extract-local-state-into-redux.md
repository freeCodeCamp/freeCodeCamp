---
id: 5a24c314108439a4d4036149
title: استخراج المنطقة المحلية (Local State) إلى Redux
challengeType: 6
forumTopicId: 301428
dashedName: extract-local-state-into-redux
---

# --description--

أنت على وشك الانتهاء! قم بالتذكير بأنك كتبت كل تعلمات Redux البرمجية بحيث يتمكن Redux من التحكم في إدارة حالة تطبيق React للرسائل الخاص بك. الآن بعد أن تم توصيل Redux، تحتاج إلى استخراج إدارة الحالة من مكون `Presentational` ومررها إلى Redux. حالياً، لديك Redux متصل، لكنك تتعامل مع الحالة محلياً ضمن مكون `Presentational`.

# --instructions--

في مكون `Presentational` أولاً، إزال خاصية `messages` في `state` المحلية. سيتم إدارة هذه الرسائل بواسطة Redux. بعد ذلك، عدل طريقة `submitMessage()` بحيث ترسل `submitNewMessage()` من `this.props`، ومرر في إدخال الرسالة الحالية من `state` كحاجة. لأنك إزالة `messages` من الحالة المحلية، إزالة خاصية `messages` من المكالمة إلى `this.setState()` هنا أيضا. وأخيرا، عدل طريقة `render()` بحيث تنشئ الرسائل الواردة من `props` بدلا من `state`.

بمجرد إجراء هذه التغييرات، ستستمر وظيفة التطبيق بنفس القدر، إلا أن Redux يدير الحالة. يوضح هذا المثال أيضًا كيف أن المكون قد يحتوي على `state` المحلية: مكونك لا يزال يتتبع إدخال المستخدم محليًا في `state` الخاصة به. يمكنك أن ترى كيف يوفر Redux أداة framework لإدارة الحالة مفيدة على رأس React. في البداية لقد حققت نفس النتيجة باستخدام حالة React المحلية فقط، وهذا ممكن عادة مع التطبيقات البسيطة. ومع ذلك، كلما أصبحت تطبيقاتك أكبر وأكثر تعقيدا، وكتلك إدارة حالتك، وهذه هي المشكلة في الحلول Redux.

# --hints--

يجب أن ينشئ `AppWrapper` في الصفحة.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(AppWrapper));
    return mockedComponent.find('AppWrapper').length === 1;
  })()
);
```

يجب أن يقدم مكون `Presentational` في الصفحة.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(AppWrapper));
    return mockedComponent.find('Presentational').length === 1;
  })()
);
```

يجب أن ينشئ مكون `Presentational` عناصر `h2`، و `input`، و `button`، و `ul`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(AppWrapper));
    const PresentationalComponent = mockedComponent.find('Presentational');
    return (
      PresentationalComponent.find('div').length === 1 &&
      PresentationalComponent.find('h2').length === 1 &&
      PresentationalComponent.find('button').length === 1 &&
      PresentationalComponent.find('ul').length === 1
    );
  })()
);
```

يجب أن يتلقى مكون `Presentational` مِيزة (prop) باسم `messages` من متجر Redux.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(AppWrapper));
    const PresentationalComponent = mockedComponent.find('Presentational');
    const props = PresentationalComponent.props();
    return Array.isArray(props.messages);
  })()
);
```

يجب أن يتلقى مكون `Presentational` مِيزة (prop) على هيئة منشئ أجراء (action creator) باسم `submitMessage`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(AppWrapper));
    const PresentationalComponent = mockedComponent.find('Presentational');
    const props = PresentationalComponent.props();
    return typeof props.submitNewMessage === 'function';
  })()
);
```

حالة مكون `Presentational` يجب أن تحتوي على خاصية واحدة، و`input`، الذي تم تهيئته إلى string فارغة.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(AppWrapper));
    const PresentationalState = mockedComponent
      .find('Presentational')
      .instance().state;
    return (
      typeof PresentationalState.input === 'string' &&
      Object.keys(PresentationalState).length === 1
    );
  })()
);
```

الكتابة في عنصر `input` يجب أن حديث حالة `Presentational`.

```js
async () => {
  const mockedComponent = Enzyme.mount(React.createElement(AppWrapper));
  const testValue = '__MOCK__INPUT__';
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 100));
  const causeChange = (c, v) =>
    c.find('input').simulate('change', { target: { value: v } });
  let initialInput = mockedComponent.find('Presentational').find('input');
  const changed = () => {
    causeChange(mockedComponent, testValue);
    return waitForIt(() => mockedComponent);
  };
  const updated = await changed();
  const updatedInput = updated.find('Presentational').find('input');
  assert(
    initialInput.props().value === '' &&
      updatedInput.props().value === '__MOCK__INPUT__'
  );
};
```

إرسال `submitMessage` على `Presentational` يجب أن يحديث متجر Redux ويمسح الإدخال (input) في الحالة (state) المحلية.

```js
async () => {
  const mockedComponent = Enzyme.mount(React.createElement(AppWrapper));
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 100));
  let beforeProps = mockedComponent.find('Presentational').props();
  const testValue = '__TEST__EVENT__INPUT__';
  const causeChange = (c, v) =>
    c.find('input').simulate('change', { target: { value: v } });
  const changed = () => {
    causeChange(mockedComponent, testValue);
    return waitForIt(() => mockedComponent);
  };
  const clickButton = () => {
    mockedComponent.find('button').simulate('click');
    return waitForIt(() => mockedComponent);
  };
  const afterChange = await changed();
  const afterChangeInput = afterChange.find('input').props().value;
  const afterClick = await clickButton();
  const afterProps = mockedComponent.find('Presentational').props();
  assert(
    beforeProps.messages.length === 0 &&
      afterChangeInput === testValue &&
      afterProps.messages.pop() === testValue &&
      afterClick.find('input').props().value === ''
  );
};
```

يجب أن يكون مكون `Presentational` مِيزة (prop) باسم `messages` من متجر Redux.

```js
async () => {
  const mockedComponent = Enzyme.mount(React.createElement(AppWrapper));
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 100));
  let beforeProps = mockedComponent.find('Presentational').props();
  const testValue = '__TEST__EVENT__INPUT__';
  const causeChange = (c, v) =>
    c.find('input').simulate('change', { target: { value: v } });
  const changed = () => {
    causeChange(mockedComponent, testValue);
    return waitForIt(() => mockedComponent);
  };
  const clickButton = () => {
    mockedComponent.find('button').simulate('click');
    return waitForIt(() => mockedComponent);
  };
  const afterChange = await changed();
  const afterChangeInput = afterChange.find('input').props().value;
  const afterClick = await clickButton();
  const afterProps = mockedComponent.find('Presentational').props();
  assert(
    beforeProps.messages.length === 0 &&
      afterChangeInput === testValue &&
      afterProps.messages.pop() === testValue &&
      afterClick.find('input').props().value === '' &&
      afterClick.find('ul').childAt(0).text() === testValue
  );
};
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<AppWrapper />, document.getElementById('root'))
```

## --seed-contents--

```jsx
// Redux:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message: message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};

const store = Redux.createStore(messageReducer);

// React:
const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

// Change code below this line
class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {
    this.setState((state) => ({
      input: '',
      messages: state.messages.concat(state.input)
    }));
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};
// Change code above this line

const mapStateToProps = (state) => {
  return {messages: state}
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message))
    }
  }
};

const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

class AppWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container/>
      </Provider>
    );
  }
};
```

# --solutions--

```jsx
// Redux:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message: message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};

const store = Redux.createStore(messageReducer);

// React:
const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

// Change code below this line
class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
 this.handleChange = this.handleChange.bind(this);
 this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {
    this.props.submitNewMessage(this.state.input);
    this.setState({
      input: ''
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.props.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};
// Change code above this line

const mapStateToProps = (state) => {
  return {messages: state}
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message))
    }
  }
};

const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

class AppWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container/>
      </Provider>
    );
  }
};
```
