---
id: 5a24c314108439a4d403617e
title: Add Event Listeners
challengeType: 6
videoUrl: ''
localeTitle: Adicionar ouvintes de eventos
---

## Description
<section id="description"> O método <code>componentDidMount()</code> também é o melhor local para anexar qualquer ouvinte de evento que você precise adicionar para funcionalidade específica. O React fornece um sistema de eventos sintéticos que envolve o sistema de eventos nativo presente nos navegadores. Isso significa que o sistema de eventos sintéticos se comporta exatamente da mesma maneira, independentemente do navegador do usuário - mesmo que os eventos nativos possam se comportar de maneira diferente entre diferentes navegadores. Você já usou alguns desses manipuladores de eventos sintéticos, como <code>onClick()</code> . O sistema de eventos sintéticos do React é ótimo para usar na maioria das interações que você gerencia em elementos DOM. No entanto, se você deseja anexar um manipulador de eventos aos objetos de documento ou janela, é necessário fazer isso diretamente. </section>

## Instructions
<section id="instructions"> Anexe um ouvinte de evento no método <code>componentDidMount()</code> para eventos <code>keydown</code> e faça com que esses eventos acionem o retorno de chamada <code>handleKeyPress()</code> . Você pode usar <code>document.addEventListener()</code> que considera o evento (entre aspas) como o primeiro argumento e o retorno de chamada como o segundo argumento. Em seguida, em <code>componentWillUnmount()</code> , remova esse mesmo ouvinte de evento. Você pode passar os mesmos argumentos para <code>document.removeEventListener()</code> . É uma boa prática usar esse método de ciclo de vida para fazer qualquer limpeza nos componentes do React antes que eles sejam desmontados e destruídos. A remoção de ouvintes de eventos é um exemplo de uma dessas ações de limpeza. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>MyComponent</code> deve renderizar um elemento <code>div</code> que contenha uma tag <code>h1</code> .
    testString: 'assert((() => { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); return mockedComponent.find("div").children().find("h1").length === 1; })(), "<code>MyComponent</code> should render a <code>div</code> element which wraps an <code>h1</code> tag.");'
  - text: Um ouvinte keydown deve ser anexado ao documento em <code>componentDidMount</code> .
    testString: 'assert((() => { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const didMountString = mockedComponent.instance().componentDidMount.toString(); return new RegExp("document\.addEventListener(.|\n|\r)+keydown(.|\n|\r)+this\.handleKeyPress").test(didMountString); })(), "A keydown listener should be attached to the document in <code>componentDidMount</code>.");'
  - text: O listener keydown deve ser removido do documento em <code>componentWillUnmount</code> .
    testString: 'assert((() => { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const willUnmountString = mockedComponent.instance().componentWillUnmount.toString(); return new RegExp("document\.removeEventListener(.|\n|\r)+keydown(.|\n|\r)+this\.handleKeyPress").test(willUnmountString); })(), "The keydown listener should be removed from the document in <code>componentWillUnmount</code>.");'
  - text: 'Depois que o componente estiver montado, pressionar <code>enter</code> deve atualizar seu estado e a tag <code>h1</code> renderizada.'
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const beforeState = mockedComponent.state("message"); const beforeText = mockedComponent.find("h1").text(); const pressEnterKey = () => { mockedComponent.instance().handleKeyPress({ keyCode: 13 }); return waitForIt(() => { mockedComponent.update(); return { state: mockedComponent.state("message"), text: mockedComponent.find("h1").text()}; });}; const afterKeyPress = await pressEnterKey(); assert(beforeState !== afterKeyPress.state && beforeText !== afterKeyPress.text, "Once the component has mounted, pressing <code>enter</code> should update its state and the rendered <code>h1</code> tag."); }; '

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  // change code below this line
  componentDidMount() {

  }
  componentWillUnmount() {

  }
  // change code above this line
  handleEnter() {
    this.setState({
      message: this.state.message + 'You pressed the enter key! '
    });
  }
  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.handleEnter();
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
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
