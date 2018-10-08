---
id: 5a24c314108439a4d403617c
title: Use the Lifecycle Method componentWillMount
localeTitle: Utilice el método de ciclo de vida componentWillMount
challengeType: 6
isRequired: false
---

## Description
<section id='description'> 
componentes React tienen varios métodos especiales que brindan oportunidades para realizar acciones en puntos específicos del ciclo de vida de un componente. Estos se denominan métodos de ciclo de vida, o ganchos de ciclo de vida, y le permiten capturar componentes en ciertos puntos en el tiempo. Esto puede ser antes de que se procesen, antes de que se actualicen, antes de que reciban accesorios, antes de desmontar, y así sucesivamente. Aquí hay una lista de algunos de los métodos principales del ciclo de vida: 
<code>componentWillMount()</code> 
<code>componentDidMount()</code> 
<code>componentWillReceiveProps()</code> 
<code>shouldComponentUpdate()</code> 
<code>componentWillUpdate()</code> 
<code>componentDidUpdate()</code> 
<code>componentWillUnmount()</code> 
Las siguientes lecciones cubrirán algunas de las Casos de uso básicos para estos métodos de ciclo de vida. 
</section>

## Instructions
<section id='instructions'> 
El método <code>componentWillMount()</code> se llama antes que el método <code>render()</code> cuando se está montando un componente en el DOM. Registre algo en la consola dentro de <code>componentWillMount()</code> : es posible que desee tener abierta la consola del navegador para ver el resultado. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>MyComponent</code> debe renderizar un elemento <code>div</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); return mockedComponent.find("div").length === 1; })(), "<code>MyComponent</code> should render a <code>div</code> element.");'
  - text: <code>console.log</code> debe llamar en <code>componentWillMount</code> .
    testString: 'assert((function() { const lifecycle = React.createElement(MyComponent).type.prototype.componentWillMount.toString().replace(/ /g,""); return lifecycle.includes("console.log("); })(), "<code>console.log</code> should be called in <code>componentWillMount</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    // change code below this line

    // change code above this line
  }
  render() {
    return <div />
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
  }
  componentWillMount() {
    // change code below this line
    console.log('Component is mounting...');
    // change code above this line
  }
  render() {
    return <div />
  }
};
```

</section>
