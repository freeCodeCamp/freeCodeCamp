---
id: 5a24c314108439a4d4036144
title: Use Provider to Connect Redux to React
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Use o provedor para conectar o Redux para reagir
---

## Description
<section id="description"> No último desafio, você criou um repositório Redux para manipular a matriz de mensagens e criou uma ação para adicionar novas mensagens. A próxima etapa é fornecer acesso React ao armazenamento Redux e as ações necessárias para despachar atualizações. O React Redux fornece seu pacote <code>react-redux</code> para ajudar a realizar essas tarefas. O React Redux fornece uma pequena API com dois recursos principais: <code>Provider</code> e <code>connect</code> . Outro desafio abrange a <code>connect</code> . O <code>Provider</code> é um componente wrapper do React Redux que envolve seu aplicativo React. Este wrapper permite que você acesse as funções de <code>store</code> e <code>dispatch</code> do Redux em toda a árvore de componentes. <code>Provider</code> leva dois adereços, o armazenamento Redux e os componentes filhos do seu aplicativo. Definir o <code>Provider</code> para um componente de aplicativo pode ser assim: <blockquote> &lt;Loja do provedor = {store}&gt; <br> &lt;App /&gt; <br> &lt;/ Provedor&gt; </blockquote></section>

## Instructions
<section id="instructions"> O editor de código agora mostra todo o seu código Redux e React dos últimos desafios. Inclui o repositório, as ações e o componente <code>DisplayMessages</code> do Redux. A única peça nova é o componente <code>AppWrapper</code> na parte inferior. Use este componente de nível superior para renderizar o <code>Provider</code> partir do <code>ReactRedux</code> e passe o repositório do Redux como prop. Em seguida, renderize o componente <code>DisplayMessages</code> como um filho. Quando terminar, você verá o componente React renderizado na página. <strong>Nota:</strong> React Redux está disponível como uma variável global aqui, então você pode acessar o Provider com notação de ponto. O código no editor tira proveito disso e o configura para um <code>Provider</code> constante para você usar no método de renderização <code>AppWrapper</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O <code>AppWrapper</code> deve renderizar.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); return mockedComponent.find("AppWrapper").length === 1; })(), "The <code>AppWrapper</code> should render.");'
  - text: 'O componente wrapper <code>Provider</code> deve ter um prop de <code>store</code> passado para ele, igual ao repositório Redux.'
    testString: 'getUserInput => assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); return getUserInput("index").replace(/\s/g,"").includes("<Providerstore={store}>"); })(), "The <code>Provider</code> wrapper component should have a prop of <code>store</code> passed to it, equal to the Redux store.");'
  - text: <code>DisplayMessages</code> deve renderizar como filho do <code>AppWrapper</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); return mockedComponent.find("AppWrapper").find("DisplayMessages").length === 1; })(), "<code>DisplayMessages</code> should render as a child of <code>AppWrapper</code>.");'
  - text: 'O componente <code>DisplayMessages</code> deve renderizar um elemento h2, input, button e <code>ul</code> .'
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); return mockedComponent.find("div").length === 1 && mockedComponent.find("h2").length === 1 && mockedComponent.find("button").length === 1 && mockedComponent.find("ul").length === 1; })(), "The <code>DisplayMessages</code> component should render an h2, input, button, and <code>ul</code> element.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
// Redux Code:
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

// React Code:

class DisplayMessages extends React.Component {
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

const Provider = ReactRedux.Provider;

class AppWrapper extends React.Component {
  // render the Provider here

  // change code above this line
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
