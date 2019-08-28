---
id: 5a24c314108439a4d4036149
title: Extract Local State into Redux
challengeType: 6
isRequired: false
forumTopicId: 301428
localeTitle: Извлечь локальное состояние в Redux
---

## Description
<section id='description'>
Вы почти закончили! Напомним, что вы написали весь код Redux, чтобы Redux мог контролировать управление вашим приложением React messages. Теперь, когда Redux подключен, вам нужно извлечь управление состоянием из компонента <code>Presentational</code> и в Redux. В настоящее время вы подключены к Redux, но вы управляете состоянием локально в составе <code>Presentational</code> компонента.
</section>

## Instructions
<section id='instructions'>
В компоненте <code>Presentational</code> сначала удалите свойство <code>messages</code> в локальном <code>state</code> . Эти сообщения будут управляться Redux. Затем измените метод <code>submitMessage()</code> так, чтобы он отправил <code>submitNewMessage()</code> из <code>this.props</code> и передал текущее сообщение из локального <code>state</code> в качестве аргумента. Поскольку вы удалили <code>messages</code> из локального состояния, удалите свойство <code>messages</code> из вызова <code>this.setState()</code> здесь. Наконец, измените метод <code>render()</code> чтобы он отображал сообщения, полученные из <code>props</code> а не <code>state</code> . После внесения этих изменений приложение будет продолжать функционировать одинаково, за исключением того, что Redux управляет состоянием. В этом примере также показано, как компонент может иметь локальное <code>state</code> : ваш компонент по-прежнему отслеживает ввод пользователя локально в своем собственном <code>state</code> . Вы можете видеть, как Redux предоставляет полезную структуру управления государственными ресурсами поверх React. Вы достигли того же результата, используя сначала локальное состояние React, и это обычно возможно с помощью простых приложений. Однако, поскольку ваши приложения становятся все больше и сложнее, так же как и ваше управление состоянием, и это проблема, которую решает Redux.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>AppWrapper</code> should render to the page.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); return mockedComponent.find('AppWrapper').length === 1; })());
  - text: The <code>Presentational</code> component should render an <code>h2</code>, <code>input</code>, <code>button</code>, and <code>ul</code> elements.
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
    this.setState({
      input: '',
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

### After Tests
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
