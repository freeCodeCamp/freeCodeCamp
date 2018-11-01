---
id: 5a24c314108439a4d4036147
title: Connect Redux to React
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Conecta Redux a Reaccionar
---

## Descripción
<section id="description"> Ahora que ha escrito las <code>mapStateToProps()</code> y <code>mapDispatchToProps()</code> , puede usarlas para mapear el <code>state</code> y <code>dispatch</code> a los <code>props</code> de uno de sus componentes React. El método de <code>connect</code> de React Redux puede manejar esta tarea. Este método toma dos argumentos opcionales, <code>mapStateToProps()</code> y <code>mapDispatchToProps()</code> . Son opcionales porque puede tener un componente que solo necesita acceso al <code>state</code> pero no necesita enviar ninguna acción, o viceversa. Para usar este método, pase las funciones como argumentos e inmediatamente llame al resultado con su componente. Esta sintaxis es un poco inusual y se parece a: <code>connect(mapStateToProps, mapDispatchToProps)(MyComponent)</code> <strong>Nota:</strong> Si desea omitir uno de los argumentos del método de <code>connect</code> , pase <code>null</code> en su lugar. </section>

## Instrucciones
<section id="instructions"> El editor de código tiene las <code>mapStateToProps()</code> y <code>mapDispatchToProps()</code> y un nuevo componente React llamado <code>Presentational</code> . Conecte este componente para Redux con la <code>connect</code> método de la <code>ReactRedux</code> objeto global, y lo llaman inmediatamente en el <code>Presentational</code> componente. Asigne el resultado a una nueva <code>const</code> llamada <code>ConnectedComponent</code> que representa el componente conectado. Eso es todo, ahora estás conectado a Redux! Intente cambiar cualquiera de los argumentos de <code>connect</code> a <code>null</code> y observe los resultados de la prueba. </section>

## Pruebas
<section id='tests'>

```yml
tests:
  - text: El componente de <code>Presentational</code> debe hacer.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); return mockedComponent.find("Presentational").length === 1; })(), "The <code>Presentational</code> component should render.");'
  - text: El componente de <code>Presentational</code> debe recibir <code>messages</code> prop <code>messages</code> través de <code>connect</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); const props = mockedComponent.find("Presentational").props(); return props.messages === "__INITIAL__STATE__"; })(), "The <code>Presentational</code> component should receive a prop <code>messages</code> via <code>connect</code>.");'
  - text: El componente de <code>Presentational</code> debe recibir un prop <code>submitNewMessage</code> través de <code>connect</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); const props = mockedComponent.find("Presentational").props(); return typeof props.submitNewMessage === "function"; })(), "The <code>Presentational</code> component should receive a prop <code>submitNewMessage</code> via <code>connect</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

const mapStateToProps = (state) => {
  return {
    messages: state
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message));
    }
  }
};

class Presentational extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h3>This is a Presentational Component</h3>
  }
};

const connect = ReactRedux.connect;
// change code below this line

```

</div>



### After Test
<div id='jsx-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solución
<section id='solution'>

```js
// Solución requerida 
```
</section>
