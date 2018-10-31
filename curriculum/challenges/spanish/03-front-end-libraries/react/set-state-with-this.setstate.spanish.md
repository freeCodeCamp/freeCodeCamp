---
id: 5a24c314108439a4d4036173
title: Set State with this.setState
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Establecer estado con this.setState
---

## Description
<section id="description"> Los desafíos anteriores cubrían el <code>state</code> componente y cómo inicializar el estado en el <code>constructor</code> . También hay una manera de cambiar el <code>state</code> del componente. React proporciona un método para actualizar el <code>state</code> componente llamado <code>setState</code> . Llama al método <code>setState</code> dentro de su clase de componente así: <code>this.setState()</code> , pasando un objeto con pares clave-valor. Las claves son las propiedades de su estado y los valores son los datos de estado actualizados. Por ejemplo, si almacenáramos un <code>username</code> de <code>username</code> en estado y quisiéramos actualizarlo, se vería así: <blockquote> this.setState ({ <br> nombre de usuario: &#39;Lewis&#39; <br> }); </blockquote> React espera que nunca modifique el <code>state</code> directamente, en su lugar, siempre use <code>this.setState()</code> cuando ocurran cambios de estado. Además, debe tener en cuenta que React puede generar varias actualizaciones de estado por lotes para mejorar el rendimiento. Lo que esto significa es que las actualizaciones de estado a través del método <code>setState</code> pueden ser asíncronas. Hay una sintaxis alternativa para el método <code>setState</code> que proporciona una forma de solucionar este problema. Esto rara vez es necesario, pero es bueno tenerlo en cuenta. Por favor, consulte la <a target="_blank" href="https://facebook.github.io/react/docs/state-and-lifecycle.html">documentación de React</a> para más detalles. </section>

## Instructions
<section id="instructions"> Hay un elemento de <code>button</code> en el editor de código que tiene un controlador <code>onClick()</code> . Este controlador se activa cuando el <code>button</code> recibe un evento de clic en el navegador y ejecuta el método <code>handleClick</code> definido en <code>MyComponent</code> . Dentro del método <code>handleClick</code> , actualice el <code>state</code> del componente usando <code>this.setState()</code> . Establezca la propiedad de <code>name</code> en <code>state</code> para que sea igual a la cadena <code>React Rocks!</code> . Haga clic en el botón y observe la actualización del estado renderizado. No se preocupe si no entiende completamente cómo funciona el código del controlador de clics en este momento. Está cubierto en los próximos desafíos. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'El estado de <code>MyComponent</code> debe <code>MyComponent</code> con el par de valores clave <code>{ name: Initial State }</code> .'
    testString: 'assert(Enzyme.mount(React.createElement(MyComponent)).state("name") === "Initial State", "The state of <code>MyComponent</code> should initialize with the key value pair <code>{ name: Initial State }</code>.");'
  - text: <code>MyComponent</code> debe hacer un encabezado <code>h1</code> .
    testString: 'assert(Enzyme.mount(React.createElement(MyComponent)).find("h1").length === 1, "<code>MyComponent</code> should render an <code>h1</code> header.");'
  - text: El encabezado <code>h1</code> representado debe contener texto representado desde el estado del componente.
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const first = () => { mockedComponent.setState({ name: "TestName" }); return waitForIt(() => mockedComponent.html()); }; const firstValue = await first(); assert(/<h1>TestName<\/h1>/.test(firstValue), "The rendered <code>h1</code> header should contain text rendered from the component&apos;s state."); };'
  - text: ¡Llamar al método <code>handleClick</code> en <code>MyComponent</code> debe establecer la propiedad de nombre en el estado para igualar <code>React Rocks!</code> .
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const first = () => { mockedComponent.setState({ name: "Before" }); return waitForIt(() => mockedComponent.state("name")); }; const second = () => { mockedComponent.instance().handleClick(); return waitForIt(() => mockedComponent.state("name")); }; const firstValue = await first(); const secondValue = await second(); assert(firstValue === "Before" && secondValue === "React Rocks!", "Calling the <code>handleClick</code> method on <code>MyComponent</code> should set the name property in state to equal <code>React Rocks!</code>."); };'

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
      name: 'Initial State'
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // change code below this line

    // change code above this line
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
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
