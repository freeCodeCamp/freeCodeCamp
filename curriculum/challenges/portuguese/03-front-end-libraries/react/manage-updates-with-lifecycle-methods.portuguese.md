---
id: 5a24c314108439a4d403617f
title: Manage Updates with Lifecycle Methods
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Gerenciar atualizações com métodos de ciclo de vida
---

## Description
<section id="description"> Outro método de ciclo de vida é o <code>componentWillReceiveProps()</code> que é chamado sempre que um componente recebe novos props. Esse método recebe os novos props como um argumento, que geralmente é escrito como <code>nextProps</code> . Você pode usar esse argumento e comparar com <code>this.props</code> e executar ações antes das atualizações do componente. Por exemplo, você pode chamar <code>setState()</code> localmente antes que a atualização seja processada. Outro método é <code>componentDidUpdate()</code> e é chamado imediatamente depois que um componente é renderizado novamente. Observe que renderização e montagem são consideradas coisas diferentes no ciclo de vida do componente. Quando uma página é carregada pela primeira vez, todos os componentes são montados e é onde os métodos como <code>componentWillMount()</code> e <code>componentDidMount()</code> são chamados. Depois disso, conforme o estado muda, os componentes se re-renderizam. O próximo desafio cobre isso com mais detalhes. </section>

## Instructions
<section id="instructions"> O componente filho <code>Dialog</code> recebe <code>message</code> de seu pai, o componente <code>Controller</code> . Escreva o método <code>componentWillReceiveProps()</code> no componente <code>Dialog</code> e faça com que ele registre <code>this.props</code> e <code>nextProps</code> no console. Você precisará passar <code>nextProps</code> como um argumento para esse método e, embora seja possível nomear qualquer coisa, nomeie-o em <code>nextProps</code> , <code>nextProps</code> aqui. Em seguida, adicione <code>componentDidUpdate()</code> no componente <code>Dialog</code> e registre uma instrução que diz que o componente foi atualizado. Esse método funciona de maneira semelhante ao <code>componentWillUpdate()</code> , que é fornecido para você. Agora clique no botão para alterar a mensagem e assistir ao console do seu navegador. A ordem das instruções do console mostra a ordem em que os métodos são chamados. <strong>Nota:</strong> Você precisará gravar os métodos de ciclo de vida como funções normais e não como funções de seta para passar nos testes (também não há vantagem em escrever métodos de ciclo de vida como funções de seta). </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O componente <code>Controller</code> deve renderizar o componente <code>Dialog</code> como um filho.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(Controller)); return mockedComponent.find("Controller").length === 1 && mockedComponent.find("Dialog").length === 1; })(), "The <code>Controller</code> component should render the <code>Dialog</code> component as a child.");'
  - text: O método <code>componentWillReceiveProps</code> no componente <code>Dialog</code> deve registrar <code>this.props</code> no console.
    testString: 'assert((function() { const lifecycleChild = React.createElement(Dialog).type.prototype.componentWillReceiveProps.toString().replace(/ /g,""); return lifecycleChild.includes("console.log") && lifecycleChild.includes("this.props") })(), "The <code>componentWillReceiveProps</code> method in the <code>Dialog</code> component should log <code>this.props</code> to the console.");'
  - text: O método <code>componentWillReceiveProps</code> no componente <code>Dialog</code> deve registrar <code>nextProps</code> no console.
    testString: 'assert((function() { const lifecycleChild = React.createElement(Dialog).type.prototype.componentWillReceiveProps.toString().replace(/ /g,""); const nextPropsAsParameterTest = /componentWillReceiveProps(| *?= *?)(\(|)nextProps(\)|)( *?=> *?{| *?{|{)/; const nextPropsInConsoleLogTest = /console\.log\(.*?nextProps\b.*?\)/; return ( lifecycleChild.includes("console.log") && nextPropsInConsoleLogTest.test(lifecycleChild) && nextPropsAsParameterTest.test(lifecycleChild) ); })(), "The <code>componentWillReceiveProps</code> method in the <code>Dialog</code> component should log <code>nextProps</code> to the console.");'
  - text: O componente <code>Dialog</code> deve chamar o método <code>componentDidUpdate</code> e registrar uma mensagem no console.
    testString: 'assert((function() { const lifecycleChild = React.createElement(Dialog).type.prototype.componentDidUpdate.toString().replace(/ /g,""); return lifecycleChild.length !== "undefined" && lifecycleChild.includes("console.log"); })(), "The <code>Dialog</code> component should call the <code>componentDidUpdate</code> method and log a message to the console.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class Dialog extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillUpdate() {
    console.log('Component is about to update...');
  }
  // change code below this line

  // change code above this line
  render() {
    return <h1>{this.props.message}</h1>
  }
};

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'First Message'
    };
    this.changeMessage = this.changeMessage.bind(this);
  }
  changeMessage() {
    this.setState({
      message: 'Second Message'
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.changeMessage}>Update</button>
        <Dialog message={this.state.message}/>
      </div>
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
