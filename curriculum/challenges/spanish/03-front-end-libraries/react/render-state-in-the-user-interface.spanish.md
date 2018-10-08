---
id: 5a24c314108439a4d4036171
title: Render State in the User Interface
localeTitle: Estado de render en la interfaz de usuario
challengeType: 6
isRequired: false
---

## Description
<section id='description'> 
Una vez que define el estado inicial de un componente, puede mostrar cualquier parte de él en la interfaz de usuario que se representa. Si un componente tiene estado, siempre tendrá acceso a los datos en <code>state</code> en su método <code>render()</code> . Puede acceder a los datos con <code>this.state</code> . 
Si desea acceder a un valor de estado dentro del <code>return</code> del método de procesamiento, debe incluir el valor entre llaves. 
<code>State</code> es una de las características más poderosas de los componentes en React. Le permite hacer un seguimiento de los datos importantes en su aplicación y generar una IU en respuesta a los cambios en estos datos. Si sus datos cambian, su interfaz de usuario cambiará. React utiliza lo que se llama un DOM virtual, para realizar un seguimiento de los cambios detrás de la escena. Cuando se actualizan los datos del estado, se activa una nueva representación de los componentes que utilizan esos datos, incluidos los componentes secundarios que recibieron los datos como prop. Reacciona actualiza el DOM real, pero solo cuando es necesario. Esto significa que no tiene que preocuparse por cambiar el DOM. Simplemente declara cómo debería ser la interfaz de usuario. 
Tenga en cuenta que si hace que un componente sea con estado, ningún otro componente es consciente de su <code>state</code> . Su <code>state</code> es completamente encapsulado, o local a ese componente, a menos que pase datos de estado a un componente secundario como <code>props</code> . Esta noción de <code>state</code> encapsulado es muy importante porque le permite escribir cierta lógica, y luego tener esa lógica contenida y aislada en un lugar en su código. 
</section>

## Instructions
<section id='instructions'> 
En el editor de código, <code>MyComponent</code> ya tiene estado. Defina una etiqueta <code>h1</code> en el método de procesamiento del componente que representa el valor de <code>name</code> del estado del componente. 
<strong>Nota:</strong> El <code>h1</code> solo debe representar el valor del <code>state</code> y nada más. En JSX, cualquier código que escriba con llaves <code>{ }</code> será tratado como JavaScript. Entonces, para acceder al valor desde el <code>state</code> simplemente incluya la referencia entre llaves. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>MyComponent</code> debe tener un <code>name</code> clave con el valor <code>freeCodeCamp</code> almacenado en su estado.
    testString: 'assert(Enzyme.mount(React.createElement(MyComponent)).state("name") === "freeCodeCamp", "<code>MyComponent</code> should have a key <code>name</code> with value <code>freeCodeCamp</code> stored in its state.");'
  - text: <code>MyComponent</code> debe representar un encabezado <code>h1</code> incluido en un solo <code>div</code> .
    testString: 'assert(/<div><h1>.*<\/h1><\/div>/.test(Enzyme.mount(React.createElement(MyComponent)).html()), "<code>MyComponent</code> should render an <code>h1</code> header enclosed in a single <code>div</code>.");'
  - text: El encabezado <code>h1</code> representado debe contener texto representado desde el estado del componente.
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const first = () => { mockedComponent.setState({ name: "TestName" });   return waitForIt(() => mockedComponent.html()) }; const firstValue = await first(); assert(firstValue === "<div><h1>TestName</h1></div>", "The rendered <code>h1</code> header should contain text rendered from the component&apos;s state.");};'

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
      name: 'freeCodeCamp'
    }
  }
  render() {
    return (
      <div>
        { /* change code below this line */ }

        { /* change code above this line */ }
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
      name: 'freeCodeCamp'
    }
  }
  render() {
    return (
      <div>
        { /* change code below this line */ }
        <h1>{this.state.name}</h1>
        { /* change code above this line */ }
      </div>
    );
  }
};
```

</section>
