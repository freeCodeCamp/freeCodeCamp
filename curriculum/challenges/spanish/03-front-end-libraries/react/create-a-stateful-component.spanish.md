---
id: 5a24c314108439a4d4036170
title: Create a Stateful Component
challengeType: 6
videoUrl: ''
localeTitle: Crear un componente de estado
---

## Description
<section id="description"> Uno de los temas más importantes en React es el <code>state</code> . El estado consiste en cualquier información que su aplicación necesite conocer, que puede cambiar con el tiempo. Desea que sus aplicaciones respondan a los cambios de estado y presenten una interfaz de usuario actualizada cuando sea necesario. React ofrece una buena solución para la administración estatal de aplicaciones web modernas. Usted crea el estado en un componente React declarando una propiedad de <code>state</code> en la clase de componente en su <code>constructor</code> . Esto inicializa el componente con el <code>state</code> cuando se crea. La propiedad de <code>state</code> debe establecer en un <code>object</code> JavaScript. Declarándolo se ve así: <blockquote> this.state = { <br> // describe tu estado aquí <br> } Usted tiene acceso al objeto <code>state</code> largo de la vida de su componente. Puede actualizarlo, representarlo en su interfaz de usuario y pasarlo como accesorios a componentes secundarios. El objeto de <code>state</code> puede ser tan complejo o tan simple como lo necesite. Tenga en cuenta que debe crear un componente de clase extendiendo <code>React.Component</code> para crear un <code>state</code> como este. </blockquote></section>

## Instructions
<section id="instructions"> Hay un componente en el editor de código que intenta representar una propiedad de <code>name</code> desde su <code>state</code> . Sin embargo, no hay un <code>state</code> definido. Inicialice el componente con el <code>state</code> en el <code>constructor</code> y asigne su nombre a una propiedad de <code>name</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>StatefulComponent</code> debería existir y renderizarse.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(StatefulComponent)); return mockedComponent.find("StatefulComponent").length === 1; })(), "<code>StatefulComponent</code> should exist and render.");'
  - text: <code>StatefulComponent</code> debe representar un elemento <code>div</code> y un elemento <code>h1</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(StatefulComponent)); return mockedComponent.find("div").length === 1 && mockedComponent.find("h1").length === 1; })(), "<code>StatefulComponent</code> should render a <code>div</code> and an <code>h1</code> element.");'
  - text: El estado de <code>StatefulComponent</code> debe inicializarse con un <code>name</code> propiedad establecido en una cadena.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(StatefulComponent)); const initialState = mockedComponent.state(); return ( typeof initialState === "object" && typeof initialState.name === "string"); })(), "The state of <code>StatefulComponent</code> should be initialized with a property <code>name</code> set to a string.");'
  - text: El <code>name</code> de la propiedad en el estado de <code>StatefulComponent</code> debe representarse en el elemento <code>h1</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(StatefulComponent)); const initialState = mockedComponent.state(); return mockedComponent.find("h1").text() === initialState.name; })(), "The property <code>name</code> in the state of <code>StatefulComponent</code> should render in the <code>h1</code> element.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    // initialize state here

  }
  render() {
    return (
      <div>
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
