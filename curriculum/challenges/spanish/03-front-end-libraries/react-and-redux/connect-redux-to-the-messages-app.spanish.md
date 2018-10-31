---
id: 5a24c314108439a4d4036148
title: Connect Redux to the Messages App
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Connect Redux a la aplicación de mensajes
---

## Description
<section id="description"> Ahora que entiende cómo usar <code>connect</code> para conectarse React to Redux, puede aplicar lo que ha aprendido a su componente React que maneja los mensajes. En la última lección, el componente que se conectó a Redux se llamó <code>Presentational</code> , y esto no fue arbitrario. Este término <i>generalmente se</i> refiere a los componentes React que no están directamente conectados a Redux. Simplemente son responsables de la presentación de la interfaz de usuario y hacen esto en función de los accesorios que reciben. Por el contrario, los componentes del contenedor están conectados a Redux. Estos son generalmente responsables de enviar acciones a la tienda y, a menudo, pasan el estado de la tienda a componentes secundarios como accesorios. </section>

## Instructions
<section id="instructions"> El editor de código tiene todo el código que has escrito en esta sección hasta ahora. El único cambio es que el componente React se renombra a <code>Presentational</code> . Cree un nuevo componente que se mantenga en una constante llamada <code>Container</code> que use <code>connect</code> para conectar el componente <code>Presentational</code> a Redux. Luego, en <code>AppWrapper</code> , renderice el componente React Redux <code>Provider</code> . Pase a <code>Provider</code> la <code>store</code> Redux como utilería y renderice <code>Container</code> como un niño. Una vez que todo esté configurado, verás nuevamente la aplicación de mensajes renderizada en la página. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El <code>AppWrapper</code> debe renderizar a la página.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); return mockedComponent.find("AppWrapper").length === 1; })(), "The <code>AppWrapper</code> should render to the page.");'
  - text: 'El componente de <code>Presentational</code> debe representar los elementos <code>h2</code> , <code>input</code> , <code>button</code> y <code>ul</code> .'
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); return mockedComponent.find("Presentational").length === 1; })(), "The <code>Presentational</code> component should render an <code>h2</code>, <code>input</code>, <code>button</code>, and <code>ul</code> elements.");'
  - text: 'El componente de <code>Presentational</code> debe representar los elementos <code>h2</code> , <code>input</code> , <code>button</code> y <code>ul</code> .'
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); const PresentationalComponent = mockedComponent.find("Presentational"); return ( PresentationalComponent.find("div").length === 1 && PresentationalComponent.find("h2").length === 1 && PresentationalComponent.find("button").length === 1 && PresentationalComponent.find("ul").length === 1 ); })(), "The <code>Presentational</code> component should render an <code>h2</code>, <code>input</code>, <code>button</code>, and <code>ul</code> elements.");'
  - text: El componente de <code>Presentational</code> debe recibir <code>messages</code> de la tienda de Redux como prop.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); const PresentationalComponent = mockedComponent.find("Presentational"); const props = PresentationalComponent.props(); return Array.isArray(props.messages); })(), "The <code>Presentational</code> component should receive <code>messages</code> from the Redux store as a prop.");'
  - text: El componente de <code>Presentational</code> debe recibir el creador de la acción <code>submitMessage</code> como prop.
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
