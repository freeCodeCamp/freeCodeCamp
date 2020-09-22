---
id: 5a24c314108439a4d4036149
title: Extract Local State into Redux
challengeType: 6
forumTopicId: 301428
---

## Description
<section id='description'>
You're almost done! Recall that you wrote all the Redux code so that Redux could control the state management of your React messages app. Now that Redux is connected, you need to extract the state management out of the <code>Presentational</code> component and into Redux. Currently, you have Redux connected, but you are handling the state locally within the <code>Presentational</code> component.
</section>

## Instructions
<section id='instructions'>
In the <code>Presentational</code> component, first, remove the <code>messages</code> property in the local <code>state</code>. These messages will be managed by Redux. Next, modify the <code>submitMessage()</code> method so that it dispatches <code>submitNewMessage()</code> from <code>this.props</code>, and pass in the current message input from local <code>state</code> as an argument. Because you removed <code>messages</code> from local state, remove the <code>messages</code> property from the call to <code>this.setState()</code> here as well. Finally, modify the <code>render()</code> method so that it maps over the messages received from <code>props</code> rather than <code>state</code>.
Once these changes are made, the app will continue to function the same, except Redux manages the state. This example also illustrates how a component may have local <code>state</code>: your component still tracks user input locally in its own <code>state</code>. You can see how Redux provides a useful state management framework on top of React. You achieved the same result using only React's local state at first, and this is usually possible with simple apps. However, as your apps become larger and more complex, so does your state management, and this is the problem Redux solves.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>AppWrapper</code> should render to the page.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); return mockedComponent.find('AppWrapper').length === 1; })());
  - text: The <code>Presentational</code> component should render to page.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); return mockedComponent.find('Presentational').length === 1; })());
  - text: The <code>Presentational</code> component should render an <code>h2</code>, <code>input</code>, <code>button</code>, and <code>ul</code> elements.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); const PresentationalComponent = mockedComponent.find('Presentational'); return ( PresentationalComponent.find('div').length === 1 && PresentationalComponent.find('h2').length === 1 && PresentationalComponent.find('button').length === 1 && PresentationalComponent.find('ul').length === 1 ); })());
  - text: The <code>Presentational</code> component should receive <code>messages</code> from the Redux store as a prop.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); const PresentationalComponent = mockedComponent.find('Presentational'); const props = PresentationalComponent.props(); return Array.isArray(props.messages); })());
  - text: The <code>Presentational</code> component should receive the <code>submitMessage</code> action creator as a prop.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); const PresentationalComponent = mockedComponent.find('Presentational'); const props = PresentationalComponent.props(); return typeof props.submitNewMessage === 'function'; })());
  - text: The state of the <code>Presentational</code> component should contain one property, <code>input</code>, which is initialized to an empty string.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); const PresentationalState = mockedComponent.find('Presentational').instance().state; return typeof PresentationalState.input === 'string' && Object.keys(PresentationalState).length === 1; })());
  - text: Typing in the <code>input</code> element should update the state of the <code>Presentational</code> component.
    testString: 'async () => { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); const testValue = ''__MOCK__INPUT__''; const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 100)); const causeChange = (c, v) => c.find(''input'').simulate(''change'', { target: { value: v }}); let initialInput = mockedComponent.find(''Presentational'').find(''input''); const changed = () => { causeChange(mockedComponent, testValue); return waitForIt(() => mockedComponent )}; const updated = await changed(); const updatedInput = updated.find(''Presentational'').find(''input''); assert(initialInput.props().value === '''' && updatedInput.props().value === ''__MOCK__INPUT__''); }; '
  - text: Dispatching the <code>submitMessage</code> on the <code>Presentational</code> component should update Redux store and clear the input in local state.
    testString: 'async () => { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 100)); let beforeProps = mockedComponent.find(''Presentational'').props(); const testValue = ''__TEST__EVENT__INPUT__''; const causeChange = (c, v) => c.find(''input'').simulate(''change'', { target: { value: v }}); const changed = () => { causeChange(mockedComponent, testValue); return waitForIt(() => mockedComponent )}; const clickButton = () => { mockedComponent.find(''button'').simulate(''click''); return waitForIt(() => mockedComponent )}; const afterChange = await changed(); const afterChangeInput = afterChange.find(''input'').props().value; const afterClick = await clickButton(); const afterProps = mockedComponent.find(''Presentational'').props(); assert(beforeProps.messages.length === 0 && afterChangeInput === testValue && afterProps.messages.pop() === testValue && afterClick.find(''input'').props().value === ''''); }; '
  - text: The <code>Presentational</code> component should render the <code>messages</code> from the Redux store.
    testString: 'async () => { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 100)); let beforeProps = mockedComponent.find(''Presentational'').props(); const testValue = ''__TEST__EVENT__INPUT__''; const causeChange = (c, v) => c.find(''input'').simulate(''change'', { target: { value: v }}); const changed = () => { causeChange(mockedComponent, testValue); return waitForIt(() => mockedComponent )}; const clickButton = () => { mockedComponent.find(''button'').simulate(''click''); return waitForIt(() => mockedComponent )}; const afterChange = await changed(); const afterChangeInput = afterChange.find(''input'').props().value; const afterClick = await clickButton(); const afterProps = mockedComponent.find(''Presentational'').props(); assert(beforeProps.messages.length === 0 && afterChangeInput === testValue && afterProps.messages.pop() === testValue && afterClick.find(''input'').props().value === '''' && afterClick.find(''ul'').childAt(0).text() === testValue); }; '

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

</div>


### After Test
<div id='jsx-teardown'>

```jsx
ReactDOM.render(<AppWrapper />, document.getElementById('root'))
```

</div>

</section>

## Solution
<section id='solution'>


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

</section>
