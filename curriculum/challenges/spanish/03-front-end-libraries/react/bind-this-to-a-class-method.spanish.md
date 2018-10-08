---
id: 5a24c314108439a4d4036174
title: Bind 'this' to a Class Method
localeTitle: Enlazar 'esto' a un método de clase
challengeType: 6
isRequired: false
---

## Description
<section id='description'> 
Además de establecer y actualizar el <code>state</code> , también puede definir métodos para su clase de componente. Un método de clase normalmente necesita usar <code>this</code> palabra clave para poder acceder a las propiedades de la clase (como el <code>state</code> y los <code>props</code> ) dentro del alcance del método. Hay algunas maneras de permitir que sus métodos de clase accedan a <code>this</code> . 
Una forma común es vincular de forma explícita <code>this</code> en el constructor por lo que <code>this</code> se une a los métodos de la clase cuando el componente se inicializa. Es posible que haya notado que el último desafío utilizó <code>this.handleClick = this.handleClick.bind(this)</code> para su método <code>handleClick</code> en el constructor. Luego, cuando llama a una función como <code>this.setState()</code> dentro de su método de clase, <code>this</code> refiere a la clase y no quedará <code>undefined</code> . 
<strong>Nota:</strong> <code>this</code> palabra clave es uno de los aspectos más confusos de JavaScript, pero desempeña un papel importante en React. A pesar de que su comportamiento aquí es totalmente normal, estas lecciones no son el lugar para una revisión en profundidad de <code>this</code> así que por favor consulte otras lecciones si lo anterior es confuso. 
</section>

## Instructions
<section id='instructions'> 
El editor de código tiene un componente con un <code>state</code> que realiza un seguimiento de un recuento de elementos. También tiene un método que le permite incrementar este recuento de elementos. Sin embargo, el método no funciona porque está usando <code>this</code> palabra clave que no está definida. Corregir el problema mediante la unión explícitamente <code>this</code> a la <code>addItem()</code> método en el constructor del componente. 
A continuación, agregue un controlador de clic al elemento de <code>button</code> en el método de procesamiento. Debería activar el método <code>addItem()</code> cuando el botón recibe un evento de clic. Recuerde que el método que pase al controlador <code>onClick</code> necesita llaves porque debe interpretarse directamente como JavaScript. 
Una vez que complete los pasos anteriores, debería poder hacer clic en el botón y ver el incremento en el recuento de elementos en el HTML. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: &quot; <code>MyComponent</code> debería devolver un elemento <code>div</code> que envuelva dos elementos, un botón y un elemento <code>h1</code> , en ese orden&quot;.
    testString: 'assert(Enzyme.mount(React.createElement(MyComponent)).find("div").length === 1 && Enzyme.mount(React.createElement(MyComponent)).find("div").childAt(0).type() === "button" && Enzyme.mount(React.createElement(MyComponent)).find("div").childAt(1).type() === "h1", "<code>MyComponent</code> should return a <code>div</code> element which wraps two elements, a button and an <code>h1</code> element, in that order.");'
  - text: &#39;El estado de <code>MyComponent</code> debe inicializarse con el par de valores clave <code>{ itemCount: 0 }</code> .&#39;
    testString: 'assert(Enzyme.mount(React.createElement(MyComponent)).state("itemCount") === 0, "The state of <code>MyComponent</code> should initialize with the key value pair <code>{ itemCount: 0 }</code>.");'
  - text: Al hacer clic en el elemento del <code>button</code> se debe ejecutar el método <code>addItem</code> e incrementar el estado <code>itemCount</code> en <code>1</code> .
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const first = () => { mockedComponent.setState({ itemCount: 0 }); return waitForIt(() => mockedComponent.state("itemCount")); }; const second = () => { mockedComponent.find("button").simulate("click"); return waitForIt(() => mockedComponent.state("itemCount")); }; const firstValue = await first(); const secondValue = await second(); assert(firstValue === 0 && secondValue === 1, "Clicking the <code>button</code> element should run the <code>addItem</code> method and increment the state <code>itemCount</code> by <code>1</code>."); };'

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
