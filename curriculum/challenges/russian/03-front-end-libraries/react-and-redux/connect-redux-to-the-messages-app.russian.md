---
id: 5a24c314108439a4d4036148
title: Connect Redux to the Messages App
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Подключить Redux к приложению «Сообщения»
---

## Description
<section id="description"> Теперь, когда вы понимаете, как использовать <code>connect</code> для подключения React к Redux, вы можете применить то, что вы узнали, к своему компоненту React, который обрабатывает сообщения. В последнем уроке компонент, который вы подключили к Redux, был назван <code>Presentational</code> , и это не было произвольным. Этот термин <i>обычно</i> относится к компонентам React, которые напрямую не связаны с Redux. Они просто отвечают за представление пользовательского интерфейса и делают это в зависимости от реквизита, который они получают. Напротив, компоненты контейнера подключены к Redux. Обычно они отвечают за отправку действий в хранилище и часто передают состояние хранилища дочерним компонентам в качестве реквизита. </section>

## Instructions
<section id="instructions"> Редактор кода имеет весь код, который вы написали в этом разделе. Единственное изменение заключается в том, что компонент React переименовывается в <code>Presentational</code> . Создайте новый компонент, состоящий из константы, называемой <code>Container</code> которая использует <code>connect</code> для подключения <code>Presentational</code> компонента к Redux. Затем в <code>AppWrapper</code> отобразите компонент React Redux <code>Provider</code> . Пропустите <code>Provider</code> <code>store</code> Redux в качестве опоры и выведите <code>Container</code> в качестве ребенка. Как только все будет установлено, вы снова увидите сообщение, отображаемое на странице. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>AppWrapper</code> должен отобразить страницу.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); return mockedComponent.find("AppWrapper").length === 1; })(), "The <code>AppWrapper</code> should render to the page.");'
  - text: '<code>Presentational</code> компонент должен отображать элементы <code>h2</code> , <code>input</code> , <code>button</code> и <code>ul</code> .'
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); return mockedComponent.find("Presentational").length === 1; })(), "The <code>Presentational</code> component should render an <code>h2</code>, <code>input</code>, <code>button</code>, and <code>ul</code> elements.");'
  - text: '<code>Presentational</code> компонент должен отображать элементы <code>h2</code> , <code>input</code> , <code>button</code> и <code>ul</code> .'
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); const PresentationalComponent = mockedComponent.find("Presentational"); return ( PresentationalComponent.find("div").length === 1 && PresentationalComponent.find("h2").length === 1 && PresentationalComponent.find("button").length === 1 && PresentationalComponent.find("ul").length === 1 ); })(), "The <code>Presentational</code> component should render an <code>h2</code>, <code>input</code>, <code>button</code>, and <code>ul</code> elements.");'
  - text: <code>Presentational</code> компонент должен получать <code>messages</code> от магазина Redux в качестве опоры.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); const PresentationalComponent = mockedComponent.find("Presentational"); const props = PresentationalComponent.props(); return Array.isArray(props.messages); })(), "The <code>Presentational</code> component should receive <code>messages</code> from the Redux store as a prop.");'
  - text: <code>Presentational</code> компонент должен получить создателя действия <code>submitMessage</code> в качестве опоры.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); const PresentationalComponent = mockedComponent.find("Presentational"); const props = PresentationalComponent.props(); return typeof props.submitNewMessage === "function"; })(), "The <code>Presentational</code> component should receive the <code>submitMessage</code> action creator as a prop.");'

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
    const currentMessage = this.state.input;
    this.setState({
      input: ",
      messages: this.state.messages.concat(currentMessage)
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

// define the Container component here:


class AppWrapper extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // complete the return statement:
    return (null);
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
