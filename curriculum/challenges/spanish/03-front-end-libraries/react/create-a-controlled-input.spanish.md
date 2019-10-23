---
id: 5a24c314108439a4d4036178
title: Create a Controlled Input
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Crear una entrada controlada
---

## Description
<section id="description"> Su aplicación puede tener interacciones más complejas entre el <code>state</code> y la interfaz de usuario renderizada. Por ejemplo, los elementos de control de formulario para la entrada de texto, como <code>input</code> y <code>textarea</code> , mantienen su propio estado en el DOM según el tipo de usuario. Con Reaccionar, puede moverse en este estado mutable de un componente Reaccionar <code>state</code> . La entrada del usuario se convierte en parte del <code>state</code> de la aplicación, por lo que React controla el valor de ese campo de entrada. Normalmente, si tiene componentes React con campos de entrada en los que el usuario puede escribir, será un formulario de entrada controlado. </section>

## Instructions
<section id="instructions"> El editor de código tiene el esqueleto de un componente llamado <code>ControlledInput</code> para crear un elemento de <code>input</code> controlado. El <code>state</code> del componente ya está inicializado con una propiedad de <code>input</code> que contiene una cadena vacía. Este valor representa el texto que un usuario escribe en el campo de <code>input</code> . Primero, cree un método llamado <code>handleChange()</code> que tenga un parámetro llamado <code>event</code> . Cuando se llama al método, recibe un objeto de <code>event</code> que contiene una cadena de texto del elemento de <code>input</code> . Puede acceder a esta cadena con <code>event.target.value</code> dentro del método. Actualice la propiedad de <code>input</code> del <code>state</code> del componente con esta nueva cadena. En el método de renderización, cree el elemento de <code>input</code> sobre la etiqueta <code>h4</code> . Agregue un atributo de <code>value</code> que sea igual a la propiedad de <code>input</code> del <code>state</code> del componente. A continuación, añadir un <code>onChange()</code> controlador de eventos se establece en el <code>handleChange()</code> método. Cuando escribe en el cuadro de entrada, el texto se procesa mediante el método <code>handleChange()</code> , se establece como la propiedad de <code>input</code> en el <code>state</code> local y se representa como el valor en el cuadro de <code>input</code> en la página. El <code>state</code> componente es la única fuente de verdad con respecto a los datos de entrada. Por último, pero no menos importante, no olvide agregar los enlaces necesarios en el constructor. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>ControlledInput</code> debe devolver un elemento <code>div</code> que contiene una <code>input</code> y una etiqueta <code>p</code> .
    testString: 'assert(Enzyme.mount(React.createElement(ControlledInput)).find("div").children().find("input").length === 1 && Enzyme.mount(React.createElement(ControlledInput)).find("div").children().find("p").length === 1, "<code>ControlledInput</code> should return a <code>div</code> element which contains an <code>input</code> and a <code>p</code> tag.");'
  - text: El estado de <code>ControlledInput</code> debe inicializarse con una propiedad de <code>input</code> establecida en una cadena vacía.
    testString: 'assert.strictEqual(Enzyme.mount(React.createElement(ControlledInput)).state("input"), "", "The state of <code>ControlledInput</code> should initialize with an <code>input</code> property set to an empty string.");'
  - text: 'Escribir en el elemento de entrada debe actualizar el estado y el valor de la entrada, y el elemento <code>p</code> debe representar este estado a medida que escribe.'
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(ControlledInput)); const _1 = () => { mockedComponent.setState({ input: "" }); return waitForIt(() => mockedComponent.state("input"))}; const _2 = () => { mockedComponent.find("input").simulate("change", { target: { value: "TestInput" }}); return waitForIt(() => ({ state: mockedComponent.state("input"), text: mockedComponent.find("p").text(), inputVal: mockedComponent.find("input").props().value }))}; const before = await _1(); const after = await _2(); assert(before === "" && after.state === "TestInput" && after.text === "TestInput" && after.inputVal === "TestInput", "Typing in the input element should update the state and the value of the input, and the <code>p</code> element should render this state as you type."); }; '

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "
    };
    // change code below this line

    // change code above this line
  }
  // change code below this line

  // change code above this line
  render() {
    return (
      <div>
        { /* change code below this line */}

        { /* change code above this line */}
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
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
