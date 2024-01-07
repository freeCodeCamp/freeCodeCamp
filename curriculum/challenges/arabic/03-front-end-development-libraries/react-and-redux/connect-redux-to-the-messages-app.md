---
id: 5a24c314108439a4d4036148
title: إيصال Redux إلى تطبيق الرسائل
challengeType: 6
forumTopicId: 301427
dashedName: connect-redux-to-the-messages-app
---

# --description--

الآن بعد أن فهمت كيفية استخدام `connect` لتوصيل React إلى Redux، يمكنك تطبيق ما تعلمته على مكون React الخاص بك الذي يتعامل مع الرسائل.

في الدرس الأخير، المكون الذي يتصل إلى Redux يسما `Presentational`، وهذا لم يكن غير مقصود. هذا المصطلح *عمومًا* يشير إلى مكونات React غير متصلة قاصدًا إلى Redux. وهم ببساطة مسؤولون عن عرض واجهة المستخدم ويفعلون ذلك كوظيفة (function) من الميزات (props) التي يتلقُها. وعلى النقيض من ذلك، فإن مكونات المحتوي موصولة إلى Redux. وعادة ما تكون هذه المؤسسات مسؤولة عن إرسال (dispatching) الإجراءات (actions) إلى المتجر (store) وكثيراً ما تنقل إلى مكونات (components) الفرعية كميزات (props).

# --instructions--

محرر التعليمات البرمجية لديه كل التعليمات البرمجية التي كتبتها في هذا القسم حتى الآن. التغيير الوحيد هو أن مكون React قد أعيد تسميته إلى `Presentational`. أنشئ مكون جديد محتفظ به في ثابتة تسمى `Container` التي تستخدم `connect` لربط مكون `Presentational` ألى Redux. ثم في `AppWrapper`، انتج مكون React المربوط ألى Redux باسم`Provider`. مرر `Provider` من `store` في Redux كمِيزة (prop) وتنشئ `Container` كفرع. بمجرد إعداد كل شيء، سترى تطبيق الرسائل الذي يتم أنتاجه إلى الصفحة مرة أخرى.

# --hints--

يجب أن ينشئ `AppWrapper` إلى الصفحة.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(AppWrapper));
    return mockedComponent.find('AppWrapper').length === 1;
  })()
);
```

يجب أن يقدم مكون `Presentational` إلى الصفحة.

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

يجب أن يتلقى عنصر `Presentational` مِيزة (prop) على هيئة منشئ أجراء (action creator) باسم `submitMessage`.

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
    this.setState((state) => {
      const currentMessage = state.input;
      return {
        input: '',
        messages: state.messages.concat(currentMessage)
      };
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

// React-Redux:
const mapStateToProps = (state) => {
  return { messages: state }
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (newMessage) => {
       dispatch(addMessage(newMessage))
    }
  }
};

const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

// Define the Container component here:


class AppWrapper extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // Complete the return statement:
    return (null);
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
    this.setState((state) => {
      const currentMessage = state.input;
      return {
        input: '',
        messages: state.messages.concat(currentMessage)
      };
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

// React-Redux:
const mapStateToProps = (state) => {
  return { messages: state }
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (newMessage) => {
       dispatch(addMessage(newMessage))
    }
  }
};

const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

class AppWrapper extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Provider store={store}>
        <Container/>
      </Provider>
    );
  }
};
```
