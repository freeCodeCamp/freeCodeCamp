---
id: 5a24c314108439a4d4036149
title: Extract Local State into Redux
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: ''
---

## Description
<section id="description"> أنت على وشك الإنتهاء! تذكر أنك كتبت كل رمز Redux بحيث يمكن لـ Redux التحكم في إدارة حالة تطبيق رسائل React. الآن بعد أن تم توصيل Redux ، تحتاج إلى استخراج إدارة الحالة من مكون <code>Presentational</code> وإلى Redux. حالياً ، لديك Redux متصل ، لكنك تتعامل مع الحالة محليًا داخل مكون <code>Presentational</code> . </section>

## Instructions
<section id="instructions"> في مكون <code>Presentational</code> أولاً ، قم بإزالة خاصية <code>messages</code> في <code>state</code> المحلية. ستتم إدارة هذه الرسائل بواسطة Redux. بعد ذلك ، قم بتعديل طريقة <code>submitMessage()</code> بحيث يتم إرسال <code>submitNewMessage()</code> من <code>this.props</code> ، وتمرير الإدخال الحالي للرسالة من <code>state</code> المحلية كوسيطة. نظرًا لأنك أزلت <code>messages</code> من الحالة المحلية ، فأزل خاصية <code>messages</code> من المكالمة إلى <code>this.setState()</code> هنا أيضًا. وأخيرًا ، قم بتعديل طريقة العرض <code>render()</code> بحيث يتم تعيينها على الرسائل المستلمة من <code>props</code> بدلاً من <code>state</code> . بمجرد إجراء هذه التغييرات ، سيستمر التطبيق في العمل كما هو ، باستثناء أن يقوم Redux بإدارة الحالة. يوضح هذا المثال أيضا كيف يمكن أن يكون المكون المحلي <code>state</code> : مكون الخاص بك لا يزال يتابع إدخال المستخدم محليا في الخاصة به <code>state</code> . يمكنك أن ترى كيف يوفر Redux إطارًا مفيدًا لإدارة الدولة أعلى React. لقد حققت النتيجة نفسها باستخدام حالة React المحلية فقط في البداية ، وهذا ممكن عادة باستخدام تطبيقات بسيطة. ومع ذلك ، عندما تصبح تطبيقاتك أكبر وأكثر تعقيدًا ، كذلك فإن إدارة الولاية لديك ، وهذه هي المشكلة التي يحلها Redux. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); return mockedComponent.find("AppWrapper").length === 1; })(), "The <code>AppWrapper</code> should render to the page.");'
  - text: يجب أن يقوم مكون <code>Presentational</code> بعرض عناصر <code>h2</code> و <code>input</code> و <code>button</code> و <code>ul</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); return mockedComponent.find("Presentational").length === 1; })(), "The <code>Presentational</code> component should render an <code>h2</code>, <code>input</code>, <code>button</code>, and <code>ul</code> elements.");'
  - text: ''
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); const PresentationalComponent = mockedComponent.find("Presentational"); return ( PresentationalComponent.find("div").length === 1 && PresentationalComponent.find("h2").length === 1 && PresentationalComponent.find("button").length === 1 && PresentationalComponent.find("ul").length === 1 ); })(), "The <code>Presentational</code> component should render an <code>h2</code>, <code>input</code>, <code>button</code>, and <code>ul</code> elements.");'
  - text: يجب أن يتلقى المكون <code>Presentational</code> <code>messages</code> من مخزن Redux كدعم.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); const PresentationalComponent = mockedComponent.find("Presentational"); const props = PresentationalComponent.props(); return Array.isArray(props.messages); })(), "The <code>Presentational</code> component should receive <code>messages</code> from the Redux store as a prop.");'
  - text: يجب أن يتلقى المكون <code>Presentational</code> منشئ إجراء <code>submitMessage</code> كدعم.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); const PresentationalComponent = mockedComponent.find("Presentational"); const props = PresentationalComponent.props(); return typeof props.submitNewMessage === "function"; })(), "The <code>Presentational</code> component should receive the <code>submitMessage</code> action creator as a prop.");'
  - text: يجب أن تحتوي حالة المكون <code>Presentational</code> على خاصية واحدة ، <code>input</code> ، والتي تتم تهيئتها إلى سلسلة فارغة.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); const PresentationalState = mockedComponent.find("Presentational").instance().state; return typeof PresentationalState.input === "string" && Object.keys(PresentationalState).length === 1; })(), "The state of the <code>Presentational</code> component should contain one property, <code>input</code>, which is initialized to an empty string.");'
  - text: ''
    testString: 'async () => { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); const testValue = "__MOCK__INPUT__"; const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 100)); const causeChange = (c, v) => c.find("input").simulate("change", { target: { value: v }}); let initialInput = mockedComponent.find("Presentational").find("input"); const changed = () => { causeChange(mockedComponent, testValue); return waitForIt(() => mockedComponent )}; const updated = await changed(); const updatedInput = updated.find("Presentational").find("input"); assert(initialInput.props().value === "" && updatedInput.props().value === "__MOCK__INPUT__", "Typing in the <code>input</code> element should update the state of the <code>Presentational</code> component."); }; '
  - text: يجب أن يؤدي إرسال <code>submitMessage</code> على مكون <code>Presentational</code> تحديث مخزن Redux ومسح الإدخال في الحالة المحلية.
    testString: 'async () => { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 100)); let beforeProps = mockedComponent.find("Presentational").props(); const testValue = "__TEST__EVENT__INPUT__"; const causeChange = (c, v) => c.find("input").simulate("change", { target: { value: v }}); const changed = () => { causeChange(mockedComponent, testValue); return waitForIt(() => mockedComponent )}; const clickButton = () => { mockedComponent.find("button").simulate("click"); return waitForIt(() => mockedComponent )}; const afterChange = await changed(); const afterChangeInput = afterChange.find("input").props().value; const afterClick = await clickButton(); const afterProps = mockedComponent.find("Presentational").props(); assert(beforeProps.messages.length === 0 && afterChangeInput === testValue && afterProps.messages.pop() === testValue && afterClick.find("input").props().value === "", "Dispatching the <code>submitMessage</code> on the <code>Presentational</code> component should update Redux store and clear the input in local state."); }; '
  - text: يجب أن يقوم المكون <code>Presentational</code> بعرض <code>messages</code> من مخزن Redux.
    testString: 'async () => { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 100)); let beforeProps = mockedComponent.find("Presentational").props(); const testValue = "__TEST__EVENT__INPUT__"; const causeChange = (c, v) => c.find("input").simulate("change", { target: { value: v }}); const changed = () => { causeChange(mockedComponent, testValue); return waitForIt(() => mockedComponent )}; const clickButton = () => { mockedComponent.find("button").simulate("click"); return waitForIt(() => mockedComponent )}; const afterChange = await changed(); const afterChangeInput = afterChange.find("input").props().value; const afterClick = await clickButton(); const afterProps = mockedComponent.find("Presentational").props(); assert(beforeProps.messages.length === 0 && afterChangeInput === testValue && afterProps.messages.pop() === testValue && afterClick.find("input").props().value === "" && afterClick.find("ul").childAt(0).text() === testValue, "The <code>Presentational</code> component should render the <code>messages</code> from the Redux store."); }; '

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

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
      input: ",
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
    this.setState({
      input: ",
      messages: this.state.messages.concat(this.state.input)
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

</div>


### After Test
<div id='jsx-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
