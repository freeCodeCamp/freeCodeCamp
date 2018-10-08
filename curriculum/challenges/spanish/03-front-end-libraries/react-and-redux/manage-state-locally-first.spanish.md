---
id: 5a24c314108439a4d4036142
title: Manage State Locally First
localeTitle: Administrar el estado localmente primero
challengeType: 6
isRequired: false
---

## Description
<section id='description'> 
Aquí terminarás de crear el componente <code>DisplayMessages</code> . 
</section>

## Instructions
<section id='instructions'> 
Primero, en el método <code>render()</code> , haga que el componente procese un elemento de <code>input</code> , un elemento de <code>button</code> y un elemento <code>ul</code> . Cuando el elemento de <code>input</code> cambia, debe activar un método <code>handleChange()</code> . Además, el elemento de <code>input</code> debe representar el valor de la <code>input</code> que se encuentra en el estado del componente. El elemento de <code>button</code> debe activar un método <code>submitMessage()</code> cuando se hace clic. 
Segundo, escribe estos dos métodos. El método <code>handleChange()</code> debe actualizar la <code>input</code> con lo que el usuario está escribiendo. El método <code>submitMessage()</code> debe concatenar el mensaje actual (almacenado en la <code>input</code> ) a la matriz de <code>messages</code> en el estado local, y borrar el valor de la <code>input</code> . 
Finalmente, use la <code>ul</code> para mapear sobre el conjunto de <code>messages</code> y procesarlos en la pantalla como una lista de elementos <code>li</code> . 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: &#39;El componente <code>DisplayMessages</code> debería inicializarse con un estado igual a <code>{ input: &quot;&quot;, messages: [] }</code> .&#39;
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(DisplayMessages)); const initialState = mockedComponent.state(); return ( typeof initialState === "object" && initialState.input === "" && initialState.messages.length === 0); })(), "The <code>DisplayMessages</code> component should initialize with a state equal to <code>{ input: "", messages: [] }</code>.");'
  - text: &quot;El componente <code>DisplayMessages</code> debería generar un <code>div</code> contenga un elemento <code>h2</code> , un elemento de <code>button</code> , un elemento <code>ul</code> y elementos <code>li</code> como elementos <code>li</code> &quot;.
    testString: 'async () => { const mockedComponent = Enzyme.mount(React.createElement(DisplayMessages)); const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 100)); const state = () => { mockedComponent.setState({messages: ["__TEST__MESSAGE"]}); return waitForIt(() => mockedComponent )}; const updated = await state(); assert(updated.find("div").length === 1 && updated.find("h2").length === 1 && updated.find("button").length === 1 && updated.find("ul").length === 1, "The <code>DisplayMessages</code> component should render a <code>div</code> containing an <code>h2</code> element, a <code>button</code> element, a <code>ul</code> element, and <code>li</code> elements as children."); }; '
  - text: El elemento de <code>input</code> debe representar el valor de <code>input</code> en estado local.
    testString: 'async () => { const mockedComponent = Enzyme.mount(React.createElement(DisplayMessages)); const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 100)); const causeChange = (c, v) => c.find("input").simulate("change", { target: { value: v }}); const testValue = "__TEST__EVENT__INPUT"; const changed = () => { causeChange(mockedComponent, testValue); return waitForIt(() => mockedComponent )}; const updated = await changed(); assert(updated.find("input").props().value === testValue, "The <code>input</code> element should render the value of <code>input</code> in local state."); }; '
  - text: Al llamar al método <code>handleChange</code> debe actualizar el valor de <code>input</code> en estado a la entrada actual.
    testString: 'async () => { const mockedComponent = Enzyme.mount(React.createElement(DisplayMessages)); const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 100)); const causeChange = (c, v) => c.find("input").simulate("change", { target: { value: v }}); const initialState = mockedComponent.state(); const testMessage = "__TEST__EVENT__MESSAGE__"; const changed = () => { causeChange(mockedComponent, testMessage); return waitForIt(() => mockedComponent )}; const afterInput = await changed(); assert(initialState.input === "" && afterInput.state().input === "__TEST__EVENT__MESSAGE__", "Calling the method <code>handleChange</code> should update the <code>input</code> value in state to the current input.");  }; '
  - text: Al hacer clic en el botón <code>Add message</code> se debe llamar al método <code>submitMessage</code> que debe agregar la <code>input</code> actual a la matriz de <code>messages</code> en el estado.
    testString: 'async () => { const mockedComponent = Enzyme.mount(React.createElement(DisplayMessages)); const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 100)); const causeChange = (c, v) => c.find("input").simulate("change", { target: { value: v }}); const initialState = mockedComponent.state(); const testMessage_1 = "__FIRST__MESSAGE__"; const firstChange = () => { causeChange(mockedComponent, testMessage_1); return waitForIt(() => mockedComponent )}; const firstResult = await firstChange(); const firstSubmit = () => { mockedComponent.find("button").simulate("click"); return waitForIt(() => mockedComponent )}; const afterSubmit_1 = await firstSubmit(); const submitState_1 = afterSubmit_1.state(); const testMessage_2 = "__SECOND__MESSAGE__"; const secondChange = () => { causeChange(mockedComponent, testMessage_2); return waitForIt(() => mockedComponent )}; const secondResult = await secondChange(); const secondSubmit = () => { mockedComponent.find("button").simulate("click"); return waitForIt(() => mockedComponent )}; const afterSubmit_2 = await secondSubmit(); const submitState_2 = afterSubmit_2.state(); assert(initialState.messages.length === 0 && submitState_1.messages.length === 1 && submitState_2.messages.length === 2 && submitState_2.messages[1] === testMessage_2, "Clicking the <code>Add message</code> button should call the method <code>submitMessage</code> which should add the current <code>input</code> to the <code>messages</code> array in state."); }; '
  - text: El método <code>submitMessage</code> debería borrar la entrada actual.
    testString: 'async () => { const mockedComponent = Enzyme.mount(React.createElement(DisplayMessages)); const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 100)); const causeChange = (c, v) => c.find("input").simulate("change", { target: { value: v }}); const initialState = mockedComponent.state(); const testMessage = "__FIRST__MESSAGE__"; const firstChange = () => { causeChange(mockedComponent, testMessage); return waitForIt(() => mockedComponent )}; const firstResult = await firstChange(); const firstState = firstResult.state(); const firstSubmit = () => { mockedComponent.find("button").simulate("click"); return waitForIt(() => mockedComponent )}; const afterSubmit = await firstSubmit(); const submitState = afterSubmit.state(); assert(firstState.input === testMessage && submitState.input === "", "The <code>submitMessage</code> method should clear the current input."); }; '

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ",
      messages: []
    }
  }
  // add handleChange() and submitMessage() methods here

  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        { /* render an input, button, and ul here */ }

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
```

</section>
