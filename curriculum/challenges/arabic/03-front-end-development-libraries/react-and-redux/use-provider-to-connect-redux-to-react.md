---
id: 5a24c314108439a4d4036144
title: استخدم المزود (Provider) لربط Redux ألى React
challengeType: 6
forumTopicId: 301435
dashedName: use-provider-to-connect-redux-to-react
---

# --description--

في التحدي السابق، أنشئ متجر Redux للتعامل مع قائمة الرسائل وإنشاء إجراء لإضافة رسائل جديدة. الخطوة التالية هي توفير وصول React إلى متجر Redux والإجراءات التي يحتاج إليها لإرسال (dispatch) التحديثات. يرتبط React إلى Redux يوفر حُزْمَة `react-redux` للمساعدة في إنجاز هذه المهام.

يرتبط React إلى Redux يوفر API تطبيقات صغيرة مع ميزتين رئيستين: `Provider` و `connect`. تحدي آخر يغطي `connect`. يغلف مكون `Provider` من React المرتبط إلى Redux الذي يغلف تطبيق React الخاص بك. ثم يسمح لك هذا التغليف بالوصول إلى وظائف `store` و `dispatch` في Redux, يعمل في كل هيكل المكون (component tree) الخاص بك. `Provider` يأخذ مِيزتان، متجر Redux والمكونات الفرعية للتطبيق الخاص بك. تعريف `Provider` لمكون التطبيق قد يبدو هكذا:

```jsx
<Provider store={store}>
  <App/>
</Provider>
```

# --instructions--

يعرض محرر التعليمات البرمجية الآن جميع التعليمات Redux و React البرمجية الخاصة بك من عدة تحديات سابقة. يحتوي على متجر Redux، والإجراءات، والمكون `DisplayMessages`. القطعة الجديدة الوحيدة هي مكون `AppWrapper` في الأسفل. استخدم هذا المكون العلوي المستوى لجعل `Provider` من `ReactRedux`، وتمرير متجر Redux كمِيزة (prop). ثم أنتج `DisplayMessages` كعنصر فرعي. بمجرد الانتهاء منك، يجب أن ترى مكون React الخاص بك الذي تم إنتاجه في الصفحة.

**ملاحظة:** يكون React المرتبط إلى Redux متوفر كمتغير عالمي هنا، حتى تتمكن من الوصول (Provider) إلى المزود بتدوين النُّقَط(dot notation). يستغل التعليمات البرمجية في المحرر هذا وينشئ ثابت `Provider` لاستخدامه في طريقة عرض `AppWrapper`.

# --hints--

يجب أن ينشئ `AppWrapper`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(AppWrapper));
    return mockedComponent.find('AppWrapper').length === 1;
  })()
);
```

يجب أن يحتوي مغلف المكون `Provider` مِيزة (prop) من `store` مرر إليه، يساوي متجر Redux.

```js
(getUserInput) =>
  assert(
    (function () {
      const mockedComponent = Enzyme.mount(React.createElement(AppWrapper));
      return __helpers
        .removeWhiteSpace(getUserInput('index'))
        .includes('<Providerstore={store}>');
    })()
  );
```

يجب أن يكون `DisplayMessages` كفارعي من `AppWrapper`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(AppWrapper));
    return (
      mockedComponent.find('AppWrapper').find('DisplayMessages').length === 1
    );
  })()
);
```

يجب أن ينشئ مكون `DisplayMessages` عناصر `h2`، و `input`، و `button`، و `ul`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(AppWrapper));
    return (
      mockedComponent.find('div').length === 1 &&
      mockedComponent.find('h2').length === 1 &&
      mockedComponent.find('button').length === 1 &&
      mockedComponent.find('ul').length === 1
    );
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
    message
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

class DisplayMessages extends React.Component {
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

const Provider = ReactRedux.Provider;

class AppWrapper extends React.Component {
  // Render the Provider below this line

  // Change code above this line
};
```

# --solutions--

```jsx
// Redux:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message
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

class DisplayMessages extends React.Component {
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

const Provider = ReactRedux.Provider;

class AppWrapper extends React.Component {
  // Change code below this line
  render() {
    return (
      <Provider store = {store}>
        <DisplayMessages/>
      </Provider>
    );
  }
  // Change code above this line
};
```
