---
id: 5a24c314108439a4d4036147
title: Connect Redux to React
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Conecte o Redux para Reagir
---

## Description
<section id="description"> Agora que você <code>mapStateToProps()</code> as <code>mapStateToProps()</code> e <code>mapDispatchToProps()</code> , é possível usá-las para mapear <code>state</code> e <code>dispatch</code> para os <code>props</code> de um de seus componentes React. O método de <code>connect</code> do React Redux pode manipular essa tarefa. Esse método usa dois argumentos opcionais, <code>mapStateToProps()</code> e <code>mapDispatchToProps()</code> . Eles são opcionais porque você pode ter um componente que precisa apenas acessar o <code>state</code> mas não precisa despachar nenhuma ação, ou vice-versa. Para usar esse método, passe as funções como argumentos e chame imediatamente o resultado com seu componente. Esta sintaxe é um pouco incomum e se parece com: <code>connect(mapStateToProps, mapDispatchToProps)(MyComponent)</code> <strong>Nota:</strong> Se você quiser omitir um dos argumentos para o método <code>connect</code> , você passa <code>null</code> em seu lugar. </section>

## Instructions
<section id="instructions"> O editor de código possui as <code>mapStateToProps()</code> e <code>mapDispatchToProps()</code> e um novo componente React chamado <code>Presentational</code> . Conecte esse componente ao Redux com o método <code>connect</code> do objeto global <code>ReactRedux</code> e chame-o imediatamente no componente <code>Presentational</code> . Atribua o resultado a uma nova <code>const</code> chamada <code>ConnectedComponent</code> que representa o componente conectado. É isso aí, agora você está conectado ao Redux! Tente alterar um dos argumentos da <code>connect</code> para <code>null</code> e observe os resultados do teste. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O componente <code>Presentational</code> deve renderizar.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); return mockedComponent.find("Presentational").length === 1; })(), "The <code>Presentational</code> component should render.");'
  - text: O componente <code>Presentational</code> deve receber uma <code>messages</code> prop por <code>connect</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); const props = mockedComponent.find("Presentational").props(); return props.messages === "__INITIAL__STATE__"; })(), "The <code>Presentational</code> component should receive a prop <code>messages</code> via <code>connect</code>.");'
  - text: O componente <code>Presentational</code> deve receber um prop <code>submitNewMessage</code> via <code>connect</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); const props = mockedComponent.find("Presentational").props(); return typeof props.submitNewMessage === "function"; })(), "The <code>Presentational</code> component should receive a prop <code>submitNewMessage</code> via <code>connect</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

const mapStateToProps = (state) => {
  return {
    messages: state
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message));
    }
  }
};

class Presentational extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h3>This is a Presentational Component</h3>
  }
};

const connect = ReactRedux.connect;
// change code below this line

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
