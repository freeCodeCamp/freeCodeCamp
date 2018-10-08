---
id: 5a24c314108439a4d4036179
title: Create a Controlled Form
localeTitle: Crear un formulario controlado
challengeType: 6
isRequired: false
---

## Description
<section id='description'> 
El último desafío demostró que React puede controlar el estado interno de ciertos elementos como <code>input</code> y <code>textarea</code> , lo que los convierte en componentes controlados. Esto se aplica también a otros elementos de formulario, incluido el elemento de <code>form</code> HTML regular. 
</section>

## Instructions
<section id='instructions'> 
El componente <code>MyForm</code> se configura con un <code>form</code> vacío con un controlador de envío. Se llamará al controlador de envío cuando se envíe el formulario. 
Hemos añadido un botón que envía el formulario. Puede ver que tiene el <code>type</code> conjunto para <code>submit</code> indica que es el botón que controla el formulario. Agregue el elemento de <code>input</code> en el <code>form</code> y establezca su <code>value</code> y los <code>onChange()</code> como el último desafío. Luego debe completar el método <code>handleSubmit</code> para que establezca la propiedad de estado del componente <code>submit</code> al valor de entrada actual en el <code>state</code> local. 
<strong>Nota:</strong> También debe llamar a <code>event.preventDefault()</code> en el controlador de envío, para evitar el comportamiento de envío de formulario predeterminado que actualizará la página web. 
Finalmente, cree una etiqueta <code>h1</code> después del <code>form</code> que representa el valor de <code>submit</code> del <code>state</code> del componente. Luego puede escribir en el formulario y hacer clic en el botón (o presionar intro), y debería ver su entrada renderizada en la página. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>MyForm</code> debería devolver un elemento <code>div</code> que contenga un <code>form</code> y una etiqueta <code>h1</code> . El formulario debe incluir una <code>input</code> y un <code>button</code> .
    testString: 'assert((() => { const mockedComponent = Enzyme.mount(React.createElement(MyForm)); return (mockedComponent.find("div").children().find("form").length === 1 && mockedComponent.find("div").children().find("h1").length === 1 && mockedComponent.find("form").children().find("input").length === 1 && mockedComponent.find("form").children().find("button").length === 1) })(), "<code>MyForm</code> should return a <code>div</code> element which contains a <code>form</code> and an <code>h1</code> tag. The form should include an <code>input</code> and a <code>button</code>.");'
  - text: &quot;El estado de <code>MyForm</code> debería inicializarse con las propiedades de <code>input</code> y <code>submit</code> , ambas configuradas como cadenas vacías&quot;.
    testString: 'assert(Enzyme.mount(React.createElement(MyForm)).state("input") === "" && Enzyme.mount(React.createElement(MyForm)).state("submit") === "", "The state of <code>MyForm</code> should initialize with <code>input</code> and <code>submit</code> properties, both set to empty strings.");'
  - text: Escribir el elemento de <code>input</code> debe actualizar la propiedad de <code>input</code> del estado del componente.
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyForm)); const _1 = () => { mockedComponent.setState({ input: "" }); return waitForIt(() => mockedComponent.state("input"))}; const _2 = () => { mockedComponent.find("input").simulate("change", { target: { value: "TestInput" }}); return waitForIt(() => ({ state: mockedComponent.state("input"), inputVal: mockedComponent.find("input").props().value }))}; const before = await _1(); const after = await _2(); assert(before === "" && after.state === "TestInput" && after.inputVal === "TestInput", "Typing in the <code>input</code> element should update the <code>input</code> property of the component&apos;s state."); }; '
  - text: El envío del formulario debe ejecutar <code>handleSubmit</code> que debe establecer la propiedad de <code>submit</code> en un estado igual a la entrada actual.
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyForm)); const _1 = () => { mockedComponent.setState({ input: "" }); mockedComponent.setState({submit: ""}); mockedComponent.find("input").simulate("change", {target: {value: "SubmitInput"}}); return waitForIt(() => mockedComponent.state("submit"))}; const _2 = () => { mockedComponent.find("form").simulate("submit"); return waitForIt(() => mockedComponent.state("submit"))}; const before = await _1(); const after = await _2(); assert(before === "" && after === "SubmitInput", "Submitting the form should run <code>handleSubmit</code> which should set the <code>submit</code> property in state equal to the current input."); };'
  - text: El encabezado <code>h1</code> debe representar el valor del campo de <code>submit</code> desde el estado del componente.
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyForm)); const _1 = () => { mockedComponent.setState({ input: "" }); mockedComponent.setState({submit: ""}); mockedComponent.find("input").simulate("change", {target: {value: "TestInput"}}); return waitForIt(() => mockedComponent.find("h1").text())}; const _2 = () => { mockedComponent.find("form").simulate("submit"); return waitForIt(() => mockedComponent.find("h1").text())}; const before = await _1(); const after = await _2(); assert(before === "" && after === "TestInput", "The <code>h1</code> header should render the value of the <code>submit</code> field from the component&apos;s state."); }; '

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ",
      submit: "
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit(event) {
    // change code below this line

    // change code above this line
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          { /* change code below this line */ }

          { /* change code above this line */ }
          <button type='submit'>Submit!</button>
        </form>
        { /* change code below this line */ }

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
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ",
      submit: "
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit(event) {
    event.preventDefault()
    this.setState({
      submit: this.state.input
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.input}
            onChange={this.handleChange} />
          <button type='submit'>Submit!</button>
        </form>
        <h1>{this.state.submit}</h1>
      </div>
    );
  }
};
```

</section>
