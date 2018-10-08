---
id: 5a24c314108439a4d403617f
title: Manage Updates with Lifecycle Methods
localeTitle: Gestionar actualizaciones con métodos de ciclo de vida
challengeType: 6
isRequired: false
---

## Description
<section id='description'> 
Otro método de ciclo de vida es <code>componentWillReceiveProps()</code> que se llama cada vez que un componente recibe nuevos accesorios. Este método recibe las nuevas propuestas como un argumento, que generalmente se escribe como <code>nextProps</code> . Puede usar este argumento y comparar con <code>this.props</code> y realizar acciones antes de que se actualice el componente. Por ejemplo, puede llamar a <code>setState()</code> localmente antes de que se procese la actualización. 
Otro método es <code>componentDidUpdate()</code> , y se llama inmediatamente después de que un componente vuelve a renderizarse. Tenga en cuenta que la representación y el montaje se consideran cosas diferentes en el ciclo de vida del componente. Cuando se carga una página por primera vez, todos los componentes se montan y aquí es donde se llaman los métodos, por ejemplo, <code>componentWillMount()</code> y <code>componentDidMount()</code> . Después de esto, a medida que cambia el estado, los componentes se vuelven a representar. El próximo reto lo cubre con más detalle. 
</section>

## Instructions
<section id='instructions'> 
El cuadro de <code>Dialog</code> componente secundario recibe <code>message</code> de texto de su elemento principal, el componente <code>Controller</code> . Escriba el método <code>componentWillReceiveProps()</code> en el componente <code>Dialog</code> y <code>this.props</code> que registre <code>this.props</code> y <code>nextProps</code> en la consola. Deberá pasar <code>nextProps</code> como un argumento a este método y, aunque es posible nombrarlo de alguna manera, <code>nextProps</code> nombre <code>nextProps</code> aquí. 
A continuación, agregue <code>componentDidUpdate()</code> en el componente de <code>Dialog</code> , y registre una declaración que indique que el componente se ha actualizado. Este método funciona de manera similar a <code>componentWillUpdate()</code> , que se proporciona para usted. Ahora haga clic en el botón para cambiar el mensaje y ver la consola de su navegador. El orden de las sentencias de la consola muestra el orden en que se llaman los métodos. 
<strong>Nota:</strong> Deberá escribir los métodos del ciclo de vida como funciones normales y no como funciones de flecha para pasar las pruebas (tampoco hay ninguna ventaja al escribir métodos de ciclo de vida como funciones de flecha). 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El componente <code>Controller</code> debe representar el componente <code>Dialog</code> como un elemento secundario.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(Controller)); return mockedComponent.find("Controller").length === 1 && mockedComponent.find("Dialog").length === 1; })(), "The <code>Controller</code> component should render the <code>Dialog</code> component as a child.");'
  - text: El método <code>componentWillReceiveProps</code> en el componente <code>Dialog</code> debe registrar <code>this.props</code> en la consola.
    testString: 'assert((function() { const lifecycleChild = React.createElement(Dialog).type.prototype.componentWillReceiveProps.toString().replace(/ /g,""); return lifecycleChild.includes("console.log") && lifecycleChild.includes("this.props") })(), "The <code>componentWillReceiveProps</code> method in the <code>Dialog</code> component should log <code>this.props</code> to the console.");'
  - text: El método <code>componentWillReceiveProps</code> en el componente <code>Dialog</code> debe registrar <code>nextProps</code> en la consola.
    testString: 'assert((function() { const lifecycleChild = React.createElement(Dialog).type.prototype.componentWillReceiveProps.toString().replace(/ /g,""); const nextPropsAsParameterTest = /componentWillReceiveProps(| *?= *?)(\(|)nextProps(\)|)( *?=> *?{| *?{|{)/; const nextPropsInConsoleLogTest = /console\.log\(.*?nextProps\b.*?\)/; return ( lifecycleChild.includes("console.log") && nextPropsInConsoleLogTest.test(lifecycleChild) && nextPropsAsParameterTest.test(lifecycleChild) ); })(), "The <code>componentWillReceiveProps</code> method in the <code>Dialog</code> component should log <code>nextProps</code> to the console.");'
  - text: El componente <code>Dialog</code> debe llamar al método <code>componentDidUpdate</code> y registrar un mensaje en la consola.
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
class Dialog extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillUpdate() {
    console.log('Component is about to update...');
  }
  // change code below this line
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }
  componentDidUpdate() {
    console.log('Component re-rendered');
  }
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

</section>
