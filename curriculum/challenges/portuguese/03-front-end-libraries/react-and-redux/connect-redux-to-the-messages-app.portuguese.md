---
id: 5a24c314108439a4d4036148
title: Connect Redux to the Messages App
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Conecte o Redux ao aplicativo de mensagens
---

## Description
<section id="description"> Agora que você entendeu como usar a <code>connect</code> para conectar o React ao Redux, você pode aplicar o que aprendeu ao seu componente React que lida com mensagens. Na última lição, o componente que você conectou ao Redux chamava-se <code>Presentational</code> , e isso não era arbitrário. Este termo <i>geralmente</i> se refere aos componentes React que não estão diretamente conectados ao Redux. Eles são simplesmente responsáveis ​​pela apresentação da interface do usuário e fazem isso como uma função dos objetos que recebem. Por outro lado, os componentes do contêiner estão conectados ao Redux. Normalmente, eles são responsáveis ​​por despachar ações para o armazenamento e, freqüentemente, passar o estado do armazenamento para componentes filhos como acessórios. </section>

## Instructions
<section id="instructions"> O editor de código tem todo o código que você escreveu nesta seção até agora. A única mudança é que o componente React é renomeado para <code>Presentational</code> . Crie um novo componente mantido em uma constante chamada <code>Container</code> que usa <code>connect</code> para conectar o componente <code>Presentational</code> ao Redux. Em seguida, no <code>AppWrapper</code> , renderize o componente React Redux <code>Provider</code> . Passe <code>Provider</code> ao <code>store</code> Redux como prop e renderize <code>Container</code> como um filho. Depois que tudo estiver configurado, você verá o aplicativo de mensagens renderizado para a página novamente. </section>

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
