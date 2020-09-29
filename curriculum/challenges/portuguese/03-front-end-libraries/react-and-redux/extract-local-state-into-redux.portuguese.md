---
id: 5a24c314108439a4d4036149
title: Extract Local State into Redux
challengeType: 6
videoUrl: ''
localeTitle: Extrair o estado local no Redux
---

## Description
<section id="description"> Você está quase pronto! Lembre-se que você escreveu todo o código do Redux para que o Redux pudesse controlar o gerenciamento de estado do seu aplicativo de mensagens do React. Agora que o Redux está conectado, você precisa extrair o gerenciamento de estado do componente <code>Presentational</code> para o Redux. Atualmente, você tem o Redux conectado, mas está lidando com o estado localmente no componente <code>Presentational</code> . </section>

## Instructions
<section id="instructions"> No componente <code>Presentational</code> , primeiro, remova a propriedade <code>messages</code> no <code>state</code> local. Essas mensagens serão gerenciadas pelo Redux. Em seguida, modifique o método <code>submitMessage()</code> para que ele <code>submitNewMessage()</code> partir <code>this.props</code> e passe a entrada de mensagem atual do <code>state</code> local como um argumento. Como você removeu as <code>messages</code> do estado local, remova também a propriedade <code>messages</code> da chamada para <code>this.setState()</code> aqui. Finalmente, modifique o método <code>render()</code> para que ele mapeie as mensagens recebidas de <code>props</code> ao invés de <code>state</code> . Depois que essas alterações forem feitas, o aplicativo continuará a funcionar da mesma forma, exceto que o Redux gerencia o estado. Este exemplo também ilustra como um componente pode ter <code>state</code> local: seu componente ainda rastreia a entrada do usuário localmente em seu próprio <code>state</code> . Você pode ver como o Redux fornece uma estrutura de gerenciamento de estado útil sobre o React. Você conseguiu o mesmo resultado usando apenas o estado local do React, e isso geralmente é possível com aplicativos simples. No entanto, à medida que seus aplicativos se tornam maiores e mais complexos, o mesmo acontece com o gerenciamento do estado, e esse é o problema que o Redux resolve. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O <code>AppWrapper</code> deve renderizar para a página.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); return mockedComponent.find("AppWrapper").length === 1; })(), "The <code>AppWrapper</code> should render to the page.");'
  - text: 'O componente <code>Presentational</code> deve renderizar os elementos <code>h2</code> , <code>input</code> , <code>button</code> e <code>ul</code> .'
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); return mockedComponent.find("Presentational").length === 1; })(), "The <code>Presentational</code> component should render an <code>h2</code>, <code>input</code>, <code>button</code>, and <code>ul</code> elements.");'
  - text: 'O componente <code>Presentational</code> deve renderizar os elementos <code>h2</code> , <code>input</code> , <code>button</code> e <code>ul</code> .'
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); const PresentationalComponent = mockedComponent.find("Presentational"); return ( PresentationalComponent.find("div").length === 1 && PresentationalComponent.find("h2").length === 1 && PresentationalComponent.find("button").length === 1 && PresentationalComponent.find("ul").length === 1 ); })(), "The <code>Presentational</code> component should render an <code>h2</code>, <code>input</code>, <code>button</code>, and <code>ul</code> elements.");'
  - text: O componente <code>Presentational</code> deve receber <code>messages</code> da loja Redux como um prop.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); const PresentationalComponent = mockedComponent.find("Presentational"); const props = PresentationalComponent.props(); return Array.isArray(props.messages); })(), "The <code>Presentational</code> component should receive <code>messages</code> from the Redux store as a prop.");'
  - text: O componente <code>Presentational</code> deve receber o criador da ação <code>submitMessage</code> como um prop.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); const PresentationalComponent = mockedComponent.find("Presentational"); const props = PresentationalComponent.props(); return typeof props.submitNewMessage === "function"; })(), "The <code>Presentational</code> component should receive the <code>submitMessage</code> action creator as a prop.");'
  - text: 'O estado do componente <code>Presentational</code> deve conter uma propriedade, <code>input</code> , que é inicializada para uma cadeia vazia.'
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); const PresentationalState = mockedComponent.find("Presentational").instance().state; return typeof PresentationalState.input === "string" && Object.keys(PresentationalState).length === 1; })(), "The state of the <code>Presentational</code> component should contain one property, <code>input</code>, which is initialized to an empty string.");'
  - text: Digitar no elemento de <code>input</code> deve atualizar o estado do componente <code>Presentational</code> .
    testString: 'async () => { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); const testValue = "__MOCK__INPUT__"; const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 100)); const causeChange = (c, v) => c.find("input").simulate("change", { target: { value: v }}); let initialInput = mockedComponent.find("Presentational").find("input"); const changed = () => { causeChange(mockedComponent, testValue); return waitForIt(() => mockedComponent )}; const updated = await changed(); const updatedInput = updated.find("Presentational").find("input"); assert(initialInput.props().value === "" && updatedInput.props().value === "__MOCK__INPUT__", "Typing in the <code>input</code> element should update the state of the <code>Presentational</code> component."); }; '
  - text: Despachar o <code>submitMessage</code> no componente <code>Presentational</code> deve atualizar o armazenamento do Redux e limpar a entrada no estado local.
    testString: 'async () => { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 100)); let beforeProps = mockedComponent.find("Presentational").props(); const testValue = "__TEST__EVENT__INPUT__"; const causeChange = (c, v) => c.find("input").simulate("change", { target: { value: v }}); const changed = () => { causeChange(mockedComponent, testValue); return waitForIt(() => mockedComponent )}; const clickButton = () => { mockedComponent.find("button").simulate("click"); return waitForIt(() => mockedComponent )}; const afterChange = await changed(); const afterChangeInput = afterChange.find("input").props().value; const afterClick = await clickButton(); const afterProps = mockedComponent.find("Presentational").props(); assert(beforeProps.messages.length === 0 && afterChangeInput === testValue && afterProps.messages.pop() === testValue && afterClick.find("input").props().value === "", "Dispatching the <code>submitMessage</code> on the <code>Presentational</code> component should update Redux store and clear the input in local state."); }; '
  - text: O componente <code>Presentational</code> deve renderizar as <code>messages</code> do armazenamento Redux.
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
