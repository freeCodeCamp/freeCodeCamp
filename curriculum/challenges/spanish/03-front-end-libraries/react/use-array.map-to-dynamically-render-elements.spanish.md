---
id: 5a24c314108439a4d403618a
title: Use Array.map() to Dynamically Render Elements
challengeType: 6
videoUrl: ''
localeTitle: Utilice Array.map () para generar elementos dinámicamente
---

## Description
<section id="description"> La representación condicional es útil, pero es posible que necesite que sus componentes representen un número desconocido de elementos. A menudo, en programación reactiva, un programador no tiene forma de saber cuál es el estado de una aplicación hasta el tiempo de ejecución, ya que mucho depende de la interacción de un usuario con ese programa. Los programadores deben escribir su código para manejar correctamente ese estado desconocido antes de tiempo. Usar <code>Array.map()</code> en React ilustra este concepto. Por ejemplo, creas una aplicación simple &quot;Lista de tareas pendientes&quot;. Como programador, no tiene forma de saber cuántos elementos puede tener un usuario en su lista. Debe configurar su componente para que <em><strong>muestre dinámicamente</strong></em> el número correcto de elementos de la lista mucho antes de que alguien que usa el programa decida que hoy es el día de la lavandería. </section>

## Instructions
<section id="instructions"> El editor de código tiene la mayor parte del componente <code>MyToDoList</code> configurado. Parte de este código debe parecer familiar si completó el desafío del formulario controlado. Notará un área de <code>textarea</code> y un <code>button</code> , junto con un par de métodos que rastrean sus estados, pero todavía no se muestra nada en la página. Dentro del <code>constructor</code> , cree un objeto <code>this.state</code> y defina dos estados: <code>userInput</code> debe inicializarse como una cadena vacía, y <code>toDoList</code> debe inicializarse como una matriz vacía. A continuación, elimine el comentario en el método <code>render()</code> junto a la variable de <code>items</code> . En su lugar, <code>toDoList</code> sobre la matriz <code>toDoList</code> almacenada en el estado interno del componente y <code>toDoList</code> dinámicamente un <code>li</code> para cada elemento. Intente ingresar la cadena <code>eat, code, sleep, repeat</code> en el área de <code>textarea</code> , luego haga clic en el botón y vea qué sucede. <strong>Nota:</strong> Es posible que sepa que todos los elementos secundarios de hermanos creados por una operación de mapeo como esta deben suministrarse con un atributo de <code>key</code> único. No te preocupes, este es el tema del próximo reto. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El componente MyToDoList debería existir y representarse en la página.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyToDoList)); return mockedComponent.find("MyToDoList").length === 1; })(), "The MyToDoList component should exist and render to the page.");'
  - text: El primer elemento secundario de <code>MyToDoList</code> debe ser un elemento <code>textarea</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyToDoList)); return mockedComponent.find("MyToDoList").children().childAt(0).type() === "textarea"; })(), "The first child of <code>MyToDoList</code> should be a <code>textarea</code> element.");'
  - text: El tercer elemento secundario de <code>MyToDoList</code> debe ser un elemento de <code>button</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyToDoList)); return mockedComponent.find("MyToDoList").children().childAt(2).type() === "button"; })(), "The third child of <code>MyToDoList</code> should be a <code>button</code> element.");'
  - text: El estado de <code>MyToDoList</code> debe inicializarse con <code>toDoList</code> como una matriz vacía.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyToDoList)); const initialState = mockedComponent.state(); return Array.isArray(initialState.toDoList) === true && initialState.toDoList.length === 0; })(), "The state of <code>MyToDoList</code> should be initialized with <code>toDoList</code> as an empty array.");'
  - text: El estado de <code>MyToDoList</code> debe inicializarse con <code>userInput</code> como una cadena vacía.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyToDoList)); const initialState = mockedComponent.state(); return typeof initialState.userInput === "string" && initialState.userInput.length === 0; })(), "The state of <code>MyToDoList</code> should be initialized with <code>userInput</code> as an empty string.");'
  - text: 'Cuando se hace clic en el botón <code>Create List</code> , el componente <code>MyToDoList</code> debería devolver dinámicamente una lista desordenada que contenga un elemento de elemento de lista para cada elemento de una lista separada por comas ingresada en el elemento de área de <code>textarea</code> .'
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 100)); const mockedComponent = Enzyme.mount(React.createElement(MyToDoList)); const simulateChange = (el, value) => el.simulate("change", {target: {value}}); const state_1 = () => { return waitForIt(() => mockedComponent.find("ul").find("li"))}; const setInput = () => { return waitForIt(() => simulateChange(mockedComponent.find("textarea"), "testA, testB, testC"))}; const click = () => { return waitForIt(() => mockedComponent.find("button").simulate("click"))}; const state_2 = () => { return waitForIt(() => { const nodes = mockedComponent.find("ul").find("li"); return { nodes, text: nodes.reduce((t, n) => t + n.text(), "") }; })}; const setInput_2 = () => { return waitForIt(() => simulateChange(mockedComponent.find("textarea"), "t1, t2, t3, t4, t5, t6"))}; const click_1 = () => { return waitForIt(() => mockedComponent.find("button").simulate("click"))}; const state_3 = () => { return waitForIt(() => { const nodes = mockedComponent.find("ul").find("li"); return { nodes, text: nodes.reduce((t, n) => t + n.text(), "") }; })}; const awaited_state_1 = await state_1(); const awaited_setInput = await setInput(); const awaited_click = await click(); const awaited_state_2 = await state_2(); const awaited_setInput_2 = await setInput_2(); const awaited_click_1 = await click_1(); const awaited_state_3 = await state_3(); assert(awaited_state_1.length === 0 && awaited_state_2.nodes.length === 3 && awaited_state_3.nodes.length === 6 && awaited_state_2.text === "testA testB testC" && awaited_state_3.text === "t1 t2 t3 t4 t5 t6", "When the <code>Create List</code> button is clicked, the <code>MyToDoList</code> component should dynamically return an unordered list that contains a list item element for every item of a comma-separated list entered into the <code>textarea</code> element."); }; '

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const textAreaStyles = {
  width: 235,
  margin: 5
};

class MyToDoList extends React.Component {
  constructor(props) {
    super(props);
    // change code below this line

    // change code above this line
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit() {
    const itemsArray = this.state.userInput.split(',');
    this.setState({
      toDoList: itemsArray
    });
  }
  handleChange(e) {
    this.setState({
      userInput: e.target.value
    });
  }
  render() {
    const items = null; // change code here
    return (
      <div>
        <textarea
          onChange={this.handleChange}
          value={this.state.userInput}
          style={textAreaStyles}
          placeholder="Separate Items With Commas" /><br />
        <button onClick={this.handleSubmit}>Create List</button>
        <h1>My "To Do" List:</h1>
        <ul>
          {items}
        </ul>
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
