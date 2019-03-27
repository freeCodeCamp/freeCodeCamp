---
id: 5a24c314108439a4d4036174
title: Bind 'this' to a Class Method
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Enlazar 'this' a un método de la clase
---

## Description
<section id="description"> Además de establecer y actualizar <code>state</code> , también puede definir métodos para la clase de su componente. Un método de clase normalmente necesita usar la palabra clave <code>this</code> para poder acceder a las propiedades de la clase (como el <code>state</code> y los <code>props</code> ) desde dentro del método. Hay algunas maneras de permitir que sus métodos accedan a <code>this</code>. Una forma común es vincular de forma explícita <code>this</code> en el constructor por lo que <code>this</code> se une a los métodos de la clase cuando el componente se crea. Es posible que haya notado que el último desafío utilizó <code>this.handleClick = this.handleClick.bind(this)</code> para su método <code>handleClick</code> en el constructor. Luego, cuando llama a una función como <code>this.setState()</code> dentro de su método, <code>this</code> refiere a la clase y no quedará <code>undefined</code>. <strong>Nota:</strong> La palabra clave <code>this</code> es uno de los aspectos más confusos de JavaScript, pero desempeña un papel importante en React. A pesar de que su comportamiento aquí es totalmente normal, estas lecciones no hablan en profundidad sobre la palabra clave <code>this</code> así que por favor consulte otras lecciones si lo anterior es confuso. </section>

## Instructions
<section id="instructions"> El editor de código tiene un componente con un <code>state</code> que lleva la cuenta de los elementos. También tiene un método que le permite incrementar este recuento de elementos. Sin embargo, el método no funciona porque está usando la palabra clave <code>this</code> que no está definida en el metodo. Corrija el problema uniendo explícitamente <code>this</code> al metodo <code>addItem()</code> en el constructor del componente. A continuación, añada un controlador de clic al elemento <code>button</code> en el método render. Debería activar el método <code>addItem()</code> cuando el botón recibe un evento de clic. Recuerde que el método que pase al controlador <code>onClick</code> necesita llaves porque debe interpretarse directamente como JavaScript. Una vez que complete los pasos anteriores, debería poder hacer clic en el botón y ver el incremento en el recuento de elementos en el HTML. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>MyComponent</code> debe devolver un elemento <code>div</code> que envuelve dos elementos, un botón y un elemento <code>h1</code> , en ese orden.'
    testString: 'assert(Enzyme.mount(React.createElement(MyComponent)).find("div").length === 1 && Enzyme.mount(React.createElement(MyComponent)).find("div").childAt(0).type() === "button" && Enzyme.mount(React.createElement(MyComponent)).find("div").childAt(1).type() === "h1", "<code>MyComponent</code> debe devolver un elemento <code>div</code> que envuelve dos elementos, un botón y un elemento <code>h1</code> , en ese orden.");'
  - text: 'El estado de <code>MyComponent</code> debe inicializarse con el par de valores clave <code>{ itemCount: 0 }</code> .'
    testString: 'assert(Enzyme.mount(React.createElement(MyComponent)).state("itemCount") === 0, "El estado de <code>MyComponent</code> debe inicializarse con el par de valores clave <code>{ itemCount: 0 }</code> .");'
  - text: 'Al hacer clic en el elemento <code>button</code> se debe ejecutar el método <code>addItem</code> e incrementar el estado <code>itemCount</code> en <code>1</code>.'
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const first = () => { mockedComponent.setState({ itemCount: 0 }); return waitForIt(() => mockedComponent.state("itemCount")); }; const second = () => { mockedComponent.find("button").simulate("click"); return waitForIt(() => mockedComponent.state("itemCount")); }; const firstValue = await first(); const secondValue = await second(); assert(firstValue === 0 && secondValue === 1, "Al hacer clic en el elemento del <code>button</code> se debe ejecutar el método <code>addItem</code> e incrementar el estado <code>itemCount</code> en <code>1</code> ."); };'

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
      itemCount: 0
    };
    // change code below this line

    // change code above this line
  }
  addItem() {
    this.setState({
      itemCount: this.state.itemCount + 1
    });
  }
  render() {
    return (
      <div>
        { /* change code below this line */ }
        <button>Click Me</button>
        { /* change code above this line */ }
        <h1>Current Item Count: {this.state.itemCount}</h1>
      </div>
    );
  }
};

```

</div>


### After Test
<div id='jsx-teardown'>

```js
ReactDOM.render(<MyComponent />, document.getElementById('root'))
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
      itemCount: 0
    };
    this.addItem = this.addItem.bind(this);
  }
  addItem() {
    this.setState({
      itemCount: this.state.itemCount + 1
    });
  }
  render() {
    return (
      <div>
        <button onClick = {this.addItem}>Click Me</button>
        <h1>Current Item Count: {this.state.itemCount}</h1>
      </div>
    );
  }
};
```
</section>