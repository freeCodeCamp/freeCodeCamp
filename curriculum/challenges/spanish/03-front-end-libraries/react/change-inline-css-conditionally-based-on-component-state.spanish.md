---
id: 5a24c314108439a4d4036189
title: Change Inline CSS Conditionally Based on Component State
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Cambiar CSS en línea condicionalmente basado en el estado del componente
---

## Description
<section id="description"> En este punto, ha visto varias aplicaciones de representación condicional y el uso de estilos en línea. Aquí hay un ejemplo más que combina estos dos temas. También puede representar CSS de forma condicional en función del estado de un componente React. Para hacer esto, verifica una condición, y si esa condición se cumple, modifica el objeto de estilos que está asignado a los elementos JSX en el método de procesamiento. Es importante entender este paradigma porque es un cambio dramático con respecto al enfoque más tradicional de aplicar estilos mediante la modificación directa de elementos DOM (que es muy común en jQuery, por ejemplo). En ese enfoque, debe realizar un seguimiento de cuándo cambian los elementos y también manejar la manipulación real directamente. Puede ser difícil hacer un seguimiento de los cambios, lo que podría hacer que su UI sea impredecible. Cuando configura un objeto de estilo basado en una condición, describe cómo debe verse la interfaz de usuario en función del estado de la aplicación. Hay un flujo claro de información que solo se mueve en una dirección. Este es el método preferido al escribir aplicaciones con React. </section>

## Instructions
<section id="instructions"> El editor de código tiene un componente de entrada controlado simple con un borde con estilo. Desea que el estilo de este borde sea rojo si el usuario escribe más de 15 caracteres de texto en el cuadro de entrada. Agregue una condición para verificar esto y, si la condición es válida, establezca el estilo de borde de entrada en <code>3px solid red</code> . Puedes probarlo ingresando texto en la entrada. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El componente <code>GateKeeper</code> debe representar un elemento <code>div</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(GateKeeper)); return mockedComponent.find("div").length === 1; })(), "The <code>GateKeeper</code> component should render a <code>div</code> element.");'
  - text: El componente <code>GateKeeper</code> debe inicializarse con una <code>input</code> clave de estado establecida en una cadena vacía.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(GateKeeper)); return mockedComponent.state().input === ""; })(), "The <code>GateKeeper</code> component should be initialized with a state key <code>input</code> set to an empty string.");'
  - text: El componente <code>GateKeeper</code> debe representar una etiqueta <code>h3</code> y una etiqueta de <code>input</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(GateKeeper)); return mockedComponent.find("h3").length === 1 && mockedComponent.find("input").length === 1; })(), "The <code>GateKeeper</code> component should render an <code>h3</code> tag and an <code>input</code> tag.");'
  - text: La etiqueta de <code>input</code> debe tener inicialmente un estilo de <code>1px solid black</code> para la propiedad de <code>border</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(GateKeeper)); return mockedComponent.find("input").props().style.border === "1px solid black"; })(), "The <code>input</code> tag should initially have a style of <code>1px solid black</code> for the <code>border</code> property.");'
  - text: La etiqueta de <code>input</code> debe tener un estilo con un borde de <code>3px solid red</code> si el valor de entrada en el estado es más largo que 15 caracteres.
    testString: 'async () => {  const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 100)); const mockedComponent = Enzyme.mount(React.createElement(GateKeeper)); const simulateChange = (el, value) => el.simulate("change", {target: {value}}); let initialStyle = mockedComponent.find("input").props().style.border; const state_1 = () => { mockedComponent.setState({input: "this is 15 char" }); return waitForIt(() => mockedComponent.find("input").props().style.border )}; const state_2 = () => { mockedComponent.setState({input: "A very long string longer than 15 characters." }); return waitForIt(() => mockedComponent.find("input").props().style.border )}; const style_1 = await state_1(); const style_2 = await state_2(); assert(initialStyle === "1px solid black" && style_1 === "1px solid black" && style_2 === "3px solid red", "The <code>input</code> tag should be styled with a border of <code>3px solid red</code> if the input value in state is longer than 15 characters."); }; '

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class GateKeeper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ input: event.target.value })
  }
  render() {
    let inputStyle = {
      border: '1px solid black'
    };
    // change code below this line

    // change code above this line
    return (
      <div>
        <h3>Don't Type Too Much:</h3>
        <input
          type="text"
          style={inputStyle}
          value={this.state.input}
          onChange={this.handleChange} />
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
