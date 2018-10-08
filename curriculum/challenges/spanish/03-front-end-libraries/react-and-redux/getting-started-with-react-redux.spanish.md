---
id: 5a24c314108439a4d4036141
title: Getting Started with React Redux
localeTitle: Empezando con React Redux
challengeType: 6
isRequired: false
---

## Description
<section id='description'> 
Esta serie de desafíos presenta cómo utilizar Redux con React. Primero, aquí hay una revisión de algunos de los principios clave de cada tecnología. React es una biblioteca de vistas que proporciona datos, luego la convierte de forma eficiente y predecible. Redux es un marco de administración de estado que puede utilizar para simplificar la administración del estado de su aplicación. Normalmente, en una aplicación React Redux, creas una sola tienda Redux que administra el estado de toda tu aplicación. Sus componentes de React se suscriben solo a los datos en la tienda que son relevantes para su función. Luego, envía acciones directamente desde los componentes de React, que luego activan las actualizaciones del almacén. 
Aunque los componentes de React pueden administrar su propio estado localmente, cuando tiene una aplicación compleja, generalmente es mejor mantener el estado de la aplicación en una sola ubicación con Redux. Hay excepciones cuando los componentes individuales pueden tener un estado local específico solo para ellos. Finalmente, debido a que Redux no está diseñado para funcionar con React out of the box, debe usar el paquete <code>react-redux</code> . Le proporciona una forma de pasar el <code>state</code> Redux y <code>dispatch</code> a sus componentes React como <code>props</code> . 
En los próximos desafíos, primero, creará un componente React simple que le permite ingresar nuevos mensajes de texto. Estos se agregan a una matriz que se muestra en la vista. Esto debería ser una buena revisión de lo que aprendiste en las lecciones de React. A continuación, creará un almacén de Redux y acciones que administran el estado de la matriz de mensajes. Finalmente, utilizará <code>react-redux</code> para conectar la tienda Redux con su componente, extrayendo así el estado local a la tienda Redux. 
</section>

## Instructions
<section id='instructions'> 
Comience con un componente <code>DisplayMessages</code> . Agregue un constructor a este componente e inicialícelo con un estado que tenga dos propiedades: <code>input</code> , que se establece en una cadena vacía, y <code>messages</code> , que se establece en una matriz vacía. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El componente <code>DisplayMessages</code> debe representar un elemento <code>div</code> vacío.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(DisplayMessages)); return mockedComponent.find("div").text() === "" })(), "The <code>DisplayMessages</code> component should render an empty <code>div</code> element.");'
  - text: &#39;El constructor de <code>DisplayMessages</code> debe llamarse correctamente con <code>super</code> , pasando en <code>props</code> &#39;.
    testString: 'getUserInput => assert((function() { const noWhiteSpace = getUserInput("index").replace(/\s/g,""); return noWhiteSpace.includes("constructor(props)") && noWhiteSpace.includes("super(props"); })(), "The <code>DisplayMessages</code> constructor should be called properly with <code>super</code>, passing in <code>props</code>.");'
  - text: &#39;El componente <code>DisplayMessages</code> debe tener un estado inicial igual a <code>{input: &quot;&quot;, messages: []}</code> .&#39;
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(DisplayMessages)); const initialState = mockedComponent.state(); return typeof initialState === "object" && initialState.input === "" && Array.isArray(initialState.messages) && initialState.messages.length === 0; })(), "The <code>DisplayMessages</code> component should have an initial state equal to <code>{input: "", messages: []}</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class DisplayMessages extends React.Component {
  // change code below this line

  // change code above this line
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
class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ",
      messages: []
    }
  }
  render() {
    return <div/>
  }
};
```

</section>
