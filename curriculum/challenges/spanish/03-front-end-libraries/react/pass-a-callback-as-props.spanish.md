---
id: 5a24c314108439a4d403617b
title: Pass a Callback as Props
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Pasar una devolución de llamada como accesorios
---

## Description
<section id="description"> Puede pasar el <code>state</code> como accesorios a componentes secundarios, pero no está limitado a pasar datos. También puede pasar funciones de controlador o cualquier método que esté definido en un componente React a un componente secundario. Así es como permite que los componentes secundarios interactúen con sus componentes principales. Le pasas métodos a un niño como un apoyo regular. Se le asigna un nombre y usted tiene acceso a ese nombre de método en <code>this.props</code> en el componente secundario. </section>

## Instructions
<section id="instructions"> Hay tres componentes descritos en el editor de código. El <code>MyApp</code> componente es el padre que va a hacer que las <code>GetInput</code> y <code>RenderInput</code> componentes hijos. Añadir el <code>GetInput</code> componente al método render en <code>MyApp</code> , a continuación, pasar un puntal llamada <code>input</code> asignado a <code>inputValue</code> de <code>MyApp</code> &#39;s <code>state</code> . También cree un prop llamado <code>handleChange</code> y pase el manejador de entrada <code>handleChange</code> . A continuación, agregue <code>RenderInput</code> al método de procesamiento en <code>MyApp</code> , luego cree un prop llamado <code>input</code> y pase el <code>inputValue</code> del <code>state</code> . Una vez que haya terminado, podrá escribir el campo de <code>input</code> en el componente <code>GetInput</code> , que luego invoca el método del controlador en su elemento principal a través de accesorios. Esto actualiza la entrada en el <code>state</code> del padre, que se pasa como apoyo a ambos hijos. Observe cómo los datos fluyen entre los componentes y cómo la única fuente de verdad sigue siendo el <code>state</code> del componente principal. Es cierto que este ejemplo es un poco artificial, pero debería servir para ilustrar cómo los datos y las devoluciones de llamada se pueden pasar entre los componentes React. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El componente <code>MyApp</code> debería renderizarse.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyApp)); return mockedComponent.find("MyApp").length === 1; })(), "The <code>MyApp</code> component should render.");'
  - text: El componente <code>GetInput</code> debería renderizarse.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyApp)); return mockedComponent.find("GetInput").length === 1; })(), "The <code>GetInput</code> component should render.");'
  - text: El componente <code>RenderInput</code> debería renderizarse.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyApp)); return mockedComponent.find("RenderInput").length === 1; })(), "The <code>RenderInput</code> component should render.");'
  - text: El componente <code>GetInput</code> debería recibir la propiedad de estado de <code>MyApp</code> <code>inputValue</code> como props y contener un elemento de <code>input</code> que modifique <code>MyApp</code> estado de <code>MyApp</code> .
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyApp)); const state_1 = () => { mockedComponent.setState({inputValue: ""}); return waitForIt(() => mockedComponent.state() )}; const state_2 = () => { mockedComponent.find("input").simulate("change", {target: {value: "TestInput"}}); return waitForIt(() => mockedComponent.state() )}; const updated_1 = await state_1(); const updated_2 = await state_2(); assert(updated_1.inputValue === "" && updated_2.inputValue === "TestInput", "The <code>GetInput</code> component should receive the <code>MyApp</code> state property <code>inputValue</code> as props and contain an <code>input</code> element which modifies <code>MyApp</code> state."); }; '
  - text: El componente <code>RenderInput</code> debe recibir la propiedad de estado de <code>MyApp</code> <code>inputValue</code> como props.
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyApp)); const state_1 = () => { mockedComponent.setState({inputValue: "TestName"}); return waitForIt(() => mockedComponent )}; const updated_1 = await state_1(); assert(updated_1.find("p").text().includes("TestName"), "The <code>RenderInput</code> component should receive the <code>MyApp</code> state property <code>inputValue</code> as props."); }; '

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
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

class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input
          value={this.props.input}
          onChange={this.props.handleChange}/>
      </div>
    );
  }
};

class RenderInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Input Render:</h3>
        <p>{this.props.input}</p>
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
