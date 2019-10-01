---
id: 5a24c314108439a4d403617e
title: Add Event Listeners
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Añadir escuchas de eventos
---

## Description
<section id="description"> El método <code>componentDidMount()</code> también es el mejor lugar para adjuntar cualquier detector de eventos que necesite agregar para una funcionalidad específica. React proporciona un sistema de eventos sintéticos que envuelve el sistema de eventos nativo presente en los navegadores. Esto significa que el sistema de eventos sintéticos se comporta exactamente igual sin importar el navegador del usuario, incluso si los eventos nativos pueden comportarse de manera diferente entre diferentes navegadores. Ya ha estado utilizando algunos de estos controladores de eventos sintéticos, como <code>onClick()</code> . El sistema de eventos sintéticos de React es excelente para la mayoría de las interacciones que administrará en los elementos DOM. Sin embargo, si desea adjuntar un controlador de eventos al documento o los objetos de la ventana, debe hacerlo directamente. </section>

## Instructions
<section id="instructions"> Adjunte un detector de eventos en el método <code>componentDidMount()</code> para eventos <code>keydown</code> y <code>keydown</code> que estos eventos activen el callback <code>handleKeyPress()</code> . Puede usar <code>document.addEventListener()</code> que toma el evento (entre comillas) como primer argumento y la devolución de llamada como segundo argumento. Luego, en <code>componentWillUnmount()</code> , elimine este mismo detector de eventos. Puede pasar los mismos argumentos a <code>document.removeEventListener()</code> . Es una buena práctica usar este método de ciclo de vida para limpiar los componentes de React antes de que se desmonten y destruyan. La eliminación de escuchas de eventos es un ejemplo de una de estas acciones de limpieza. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>MyComponent</code> debe generar un elemento <code>div</code> que envuelva una etiqueta <code>h1</code>.
    testString: 'assert((() => { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); return mockedComponent.find("div").children().find("h1").length === 1; })(), "<code>MyComponent</code> debe generar un elemento <code>div</code> que envuelva una etiqueta <code>h1</code>.");'
  - text: Se debe adjuntar un detector de keydown al documento en <code>componentDidMount</code>.
    testString: 'assert((() => { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const didMountString = mockedComponent.instance().componentDidMount.toString(); return new RegExp("document\.addEventListener(.|\n|\r)+keydown(.|\n|\r)+this\.handleKeyPress").test(didMountString); })(), "Se debe adjuntar un detector de keydown al documento en <code>componentDidMount</code>.");'
  - text: El oyente keydown debe eliminarse del documento en <code>componentWillUnmount</code>.
    testString: 'assert((() => { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const willUnmountString = mockedComponent.instance().componentWillUnmount.toString(); return new RegExp("document\.removeEventListener(.|\n|\r)+keydown(.|\n|\r)+this\.handleKeyPress").test(willUnmountString); })(), "El oyente keydown debe eliminarse del documento en <code>componentWillUnmount</code>.");'
  - text: Una vez que el componente se haya montado, al presionar <code>enter</code> se actualizará su estado y la etiqueta <code>h1</code> renderizada.
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const beforeState = mockedComponent.state("message"); const beforeText = mockedComponent.find("h1").text(); const pressEnterKey = () => { mockedComponent.instance().handleKeyPress({ keyCode: 13 }); return waitForIt(() => { mockedComponent.update(); return { state: mockedComponent.state("message"), text: mockedComponent.find("h1").text()}; });}; const afterKeyPress = await pressEnterKey(); assert(beforeState !== afterKeyPress.state && beforeText !== afterKeyPress.text, "Una vez que el componente se haya montado, al presionar <code>enter</code> se actualizará su estado y la etiqueta <code>h1</code> renderizada."); }; '

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
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleEnter = this.handleEnter.bind(this);  }
  componentDidMount() {
    // change code below this line
    document.addEventListener('keydown', this.handleKeyPress);
    // change code above this line
  }
  componentWillUnmount() {
    // change code below this line
    document.removeEventListener('keydown', this.handleKeyPress);
    // change code above this line
  }
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
</section>
