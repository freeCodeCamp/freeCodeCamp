---
id: 5a24c314108439a4d4036149
title: Extract Local State into Redux
localeTitle: Extraer el estado local en Redux
challengeType: 6
isRequired: false
---

## Description
<section id='description'> 
Ya casi terminas! Recuerde que escribió todo el código de Redux para que Redux pudiera controlar la administración del estado de su aplicación de mensajes React. Ahora que Redux está conectado, debe extraer la administración del estado del componente de <code>Presentational</code> y en Redux. Actualmente, tiene Redux conectado, pero está manejando el estado localmente dentro del componente de <code>Presentational</code> . 
</section>

## Instructions
<section id='instructions'> 
En el componente <code>Presentational</code> , primero, elimine la propiedad de <code>messages</code> en el <code>state</code> local. Estos mensajes serán gestionados por Redux. A continuación, modifique el método <code>submitMessage()</code> para que <code>submitNewMessage()</code> desde <code>this.props</code> , y pase la entrada del mensaje actual del <code>state</code> local como un argumento. Como también eliminó los <code>messages</code> del estado local, elimine la propiedad de <code>messages</code> de la llamada a <code>this.setState()</code> aquí. Finalmente, modifique el método <code>render()</code> para que se asigne sobre los mensajes recibidos de los <code>props</code> lugar del <code>state</code> . 
Una vez que se realicen estos cambios, la aplicación continuará funcionando de la misma manera, excepto que Redux administra el estado. Este ejemplo también ilustra cómo un componente puede tener un <code>state</code> local: su componente aún realiza un seguimiento local de las entradas del usuario en su propio <code>state</code> . Puede ver cómo Redux proporciona un marco de administración de estado útil sobre React. Obtuvo el mismo resultado utilizando solo el estado local de React al principio, y esto generalmente es posible con aplicaciones simples. Sin embargo, a medida que sus aplicaciones se vuelven más grandes y complejas, también lo hace la administración de su estado, y este es el problema que Redux resuelve. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El <code>AppWrapper</code> debe renderizar a la página.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); return mockedComponent.find("AppWrapper").length === 1; })(), "The <code>AppWrapper</code> should render to the page.");'
  - text: &#39;El componente de <code>Presentational</code> debe representar un <code>h2</code> , <code>input</code> , <code>button</code> y <code>ul</code> elementos.&#39;
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); return mockedComponent.find("Presentational").length === 1; })(), "The <code>Presentational</code> component should render an <code>h2</code>, <code>input</code>, <code>button</code>, and <code>ul</code> elements.");'
  - text: &#39;El componente de <code>Presentational</code> debe representar un <code>h2</code> , <code>input</code> , <code>button</code> y <code>ul</code> elementos.&#39;
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); const PresentationalComponent = mockedComponent.find("Presentational"); return ( PresentationalComponent.find("div").length === 1 && PresentationalComponent.find("h2").length === 1 && PresentationalComponent.find("button").length === 1 && PresentationalComponent.find("ul").length === 1 ); })(), "The <code>Presentational</code> component should render an <code>h2</code>, <code>input</code>, <code>button</code>, and <code>ul</code> elements.");'
  - text: El componente de <code>Presentational</code> debe recibir <code>messages</code> de la tienda de Redux como prop.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); const PresentationalComponent = mockedComponent.find("Presentational"); const props = PresentationalComponent.props(); return Array.isArray(props.messages); })(), "The <code>Presentational</code> component should receive <code>messages</code> from the Redux store as a prop.");'
  - text: El componente de <code>Presentational</code> debe recibir el creador de la acción <code>submitMessage</code> como prop.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); const PresentationalComponent = mockedComponent.find("Presentational"); const props = PresentationalComponent.props(); return typeof props.submitNewMessage === "function"; })(), "The <code>Presentational</code> component should receive the <code>submitMessage</code> action creator as a prop.");'
  - text: &#39;El estado del componente <code>Presentational</code> debe contener una propiedad, <code>input</code> , que se inicializa en una cadena vacía.&#39;
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); const PresentationalState = mockedComponent.find("Presentational").instance().state; return typeof PresentationalState.input === "string" && Object.keys(PresentationalState).length === 1; })(), "The state of the <code>Presentational</code> component should contain one property, <code>input</code>, which is initialized to an empty string.");'
  - text: Escribir en el elemento de <code>input</code> debe actualizar el estado del componente de <code>Presentational</code> .
    testString: 'async () => { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); const testValue = "__MOCK__INPUT__"; const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 100)); const causeChange = (c, v) => c.find("input").simulate("change", { target: { value: v }}); let initialInput = mockedComponent.find("Presentational").find("input"); const changed = () => { causeChange(mockedComponent, testValue); return waitForIt(() => mockedComponent )}; const updated = await changed(); const updatedInput = updated.find("Presentational").find("input"); assert(initialInput.props().value === "" && updatedInput.props().value === "__MOCK__INPUT__", "Typing in the <code>input</code> element should update the state of the <code>Presentational</code> component."); }; '
  - text: El envío del <code>submitMessage</code> en el componente de <code>Presentational</code> debe actualizar el almacén de Redux y borrar la entrada en el estado local.
    testString: 'async () => { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 100)); let beforeProps = mockedComponent.find("Presentational").props(); const testValue = "__TEST__EVENT__INPUT__"; const causeChange = (c, v) => c.find("input").simulate("change", { target: { value: v }}); const changed = () => { causeChange(mockedComponent, testValue); return waitForIt(() => mockedComponent )}; const clickButton = () => { mockedComponent.find("button").simulate("click"); return waitForIt(() => mockedComponent )}; const afterChange = await changed(); const afterChangeInput = afterChange.find("input").props().value; const afterClick = await clickButton(); const afterProps = mockedComponent.find("Presentational").props(); assert(beforeProps.messages.length === 0 && afterChangeInput === testValue && afterProps.messages.pop() === testValue && afterClick.find("input").props().value === "", "Dispatching the <code>submitMessage</code> on the <code>Presentational</code> component should update Redux store and clear the input in local state."); }; '
  - text: El componente de <code>Presentational</code> debe representar los <code>messages</code> del almacén de Redux.
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
      input: "
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
      input: "
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
