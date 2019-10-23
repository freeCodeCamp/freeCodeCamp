---
id: 5a24c314108439a4d4036144
title: Use Provider to Connect Redux to React
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Use Provider para Conectar Redux a React
---

## Description
<section id="description"> En el último desafío, creó un almacén de Redux para manejar la matriz de mensajes y creó una acción para agregar nuevos mensajes. El siguiente paso es proporcionar acceso React a la tienda Redux y las acciones que necesita para enviar actualizaciones. React Redux proporciona su paquete <code>react-redux</code> para ayudar a realizar estas tareas. React Redux proporciona una pequeña API con dos características clave: <code>Provider</code> y <code>connect</code> . Otro reto cubre <code>connect</code> . El <code>Provider</code> es un componente envolvente de React Redux que envuelve su aplicación React. Este contenedor le permite acceder a las funciones de <code>store</code> y <code>dispatch</code> Redux a través de su árbol de componentes. <code>Provider</code> toma dos accesorios, la tienda Redux y los componentes secundarios de su aplicación. La definición del <code>Provider</code> para un componente de la aplicación podría tener este aspecto: <blockquote> &lt;Provider store={store}&gt; <br> &lt;App /&gt; <br> &lt;/Provider&gt; </blockquote></section>

## Instructions
<section id="instructions"> El editor de código ahora muestra todos sus códigos Redux y React de los últimos desafíos. Incluye la tienda Redux, las acciones y el componente <code>DisplayMessages</code> . La única pieza nueva es el componente <code>AppWrapper</code> en la parte inferior. Utilice este componente de nivel superior para representar al <code>Provider</code> desde <code>ReactRedux</code> , y pase la tienda Redux como prop. Luego renderice el componente <code>DisplayMessages</code> como un elemento secundario. Una vez que hayas terminado, deberías ver tu componente React renderizado en la página. <strong>Nota:</strong> React Redux está disponible aquí como una variable global, por lo que puede acceder al Proveedor con notación de puntos. El código en el editor se aprovecha de esto y lo establece en un <code>Provider</code> constante para que lo use en el método de renderizado de <code>AppWrapper</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El <code>AppWrapper</code> debe hacer.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); return mockedComponent.find("AppWrapper").length === 1; })(), "The <code>AppWrapper</code> should render.");'
  - text: 'El componente contenedor del <code>Provider</code> debe tener una propiedad de la <code>store</code> pasado, igual a la tienda Redux.'
    testString: 'getUserInput => assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); return getUserInput("index").replace(/\s/g,"").includes("<Providerstore={store}>"); })(), "The <code>Provider</code> wrapper component should have a prop of <code>store</code> passed to it, equal to the Redux store.");'
  - text: <code>DisplayMessages</code> debería renderizarse como un elemento secundario de <code>AppWrapper</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); return mockedComponent.find("AppWrapper").find("DisplayMessages").length === 1; })(), "<code>DisplayMessages</code> should render as a child of <code>AppWrapper</code>.");'
  - text: 'El componente <code>DisplayMessages</code> debe representar un elemento h2, input, button y <code>ul</code> .'
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); return mockedComponent.find("div").length === 1 && mockedComponent.find("h2").length === 1 && mockedComponent.find("button").length === 1 && mockedComponent.find("ul").length === 1; })(), "The <code>DisplayMessages</code> component should render an h2, input, button, and <code>ul</code> element.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
// Redux Code:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};



const store = Redux.createStore(messageReducer);

// React Code:

class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ",
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {
    const currentMessage = this.state.input;
    this.setState({
      input: ",
      messages: this.state.messages.concat(currentMessage)
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};

const Provider = ReactRedux.Provider;

class AppWrapper extends React.Component {
  // render the Provider here

  // change code above this line
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
