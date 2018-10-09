---
id: 5a24c314108439a4d4036187
title: Use a Ternary Expression for Conditional Rendering
localeTitle: Utilice una expresión ternaria para la representación condicional
challengeType: 6
isRequired: false
---

## Description
<section id='description'>
Antes de pasar a las técnicas de representación dinámica, hay una última forma de usar condicionales de JavaScript incorporados para representar lo que desea: el <em><strong>operador ternario</strong></em> . El operador ternario se utiliza a menudo como acceso directo para las declaraciones <code>if/else</code> en JavaScript. No son tan robustos como las declaraciones tradicionales <code>if/else</code> , pero son muy populares entre los desarrolladores de React. Una razón para esto se debe a cómo se compila JSX, <code>if/else</code> sentencias no se pueden insertar directamente en el código JSX. Es posible que haya notado esto hace un par de desafíos: cuando se requería una declaración <code>if/else</code> , siempre estaba <em>fuera de</em> la declaración de <code>return</code> . Las expresiones ternarias pueden ser una excelente alternativa si desea implementar lógica condicional dentro de su JSX. Recuerde que un operador ternario tiene tres partes, pero puede combinar varias expresiones ternarias juntas. Aquí está la sintaxis básica:
<blockquote>condition ? expressionIfTrue : expressionIfFalse</blockquote>
</section>

## Instructions
<section id='instructions'>
El editor de código tiene tres constantes definidas dentro del <code>CheckUserAge</code> <code>render()</code> del componente <code>CheckUserAge</code> . Se denominan <code>buttonOne</code> , <code>buttonTwo</code> y <code>buttonThree</code> . A cada uno de estos se les asigna una expresión JSX simple que representa un elemento de botón. Primero, inicialice el estado de <code>CheckUserAge</code> con <code>input</code> y <code>userAge</code> ambos configurados en valores de una cadena vacía.
Una vez que el componente está brindando información a la página, los usuarios deben tener una forma de interactuar con él. Dentro de la declaración de <code>return</code> del componente, configure una expresión ternaria que implemente la siguiente lógica: cuando la página se carga por primera vez, renderice el botón de envío, <code>buttonOne</code> , a la página. Luego, cuando un usuario ingresa su edad y hace clic en el botón, renderiza un botón diferente según la edad. Si un usuario ingresa un número menor que <code>18</code> , render <code>buttonThree</code> . Si un usuario ingresa un número mayor o igual a <code>18</code> , renderice el <code>buttonTwo</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El componente <code>CheckUserAge</code> debe procesarse con un solo elemento de <code>input</code> y un solo elemento de <code>button</code> .
    testString: 'assert(Enzyme.mount(React.createElement(CheckUserAge)).find("div").find("input").length === 1 && Enzyme.mount(React.createElement(CheckUserAge)).find("div").find("button").length === 1, "The <code>CheckUserAge</code> component should render with a single <code>input</code> element and a single <code>button</code> element.");'
  - text: 'El <code>CheckUserAge</code> componente <code>CheckUserAge</code> debe inicializarse con una propiedad de <code>userAge</code> y una propiedad de <code>input</code> , ambas configuradas con el valor de una cadena vacía'
    testString: 'assert(Enzyme.mount(React.createElement(CheckUserAge)).state().input === "" && Enzyme.mount(React.createElement(CheckUserAge)).state().userAge === "", "The <code>CheckUserAge</code> component&apos;s state should be initialized with a property of <code>userAge</code> and a property of <code>input</code>, both set to a value of an empty string.");'
  - text: 'Cuando el componente <code>CheckUserAge</code> se procesa por primera vez en el DOM, el texto interno del <code>button</code> debe ser Enviar.'
    testString: 'assert(Enzyme.mount(React.createElement(CheckUserAge)).find("button").text() === "Submit", "When the <code>CheckUserAge</code> component is first rendered to the DOM, the <code>button</code>&apos;s inner text should be Submit.");'
  - text: 'Cuando se introduce un número inferior a 18 a la <code>input</code> elemento y el <code>button</code> se hace clic en el <code>button</code> &#39;s texto interno debe leer <code>You Shall Not Pass</code> .'
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(CheckUserAge)); const initialButton = mockedComponent.find("button").text(); const enter3AndClickButton = () => { mockedComponent.find("input").simulate("change", {target: { value: "3" }}); mockedComponent.find("button").simulate("click"); return waitForIt(() => { mockedComponent.update(); return mockedComponent.find("button").text(); }); }; const enter17AndClickButton = () => { mockedComponent.find("input").simulate("change", {target: { value: "17" }}); mockedComponent.find("button").simulate("click"); return waitForIt(() => { mockedComponent.update(); return mockedComponent.find("button").text(); }); }; const userAge3 = await enter3AndClickButton(); const userAge17 = await enter17AndClickButton(); assert(initialButton === "Submit" && userAge3 === "You Shall Not Pass" && userAge17 === "You Shall Not Pass", "When a number of less than 18 is entered into the <code>input</code> element and the <code>button</code> is clicked, the <code>button</code>&apos;s inner text should read <code>You Shall Not Pass</code>."); }; '
  - text: 'Cuando se introduce un número mayor o igual a 18 a la <code>input</code> elemento y el <code>button</code> se hace clic en el <code>button</code> &#39;s texto interno debe leer <code>You May Enter</code> .'
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(CheckUserAge)); const initialButton = mockedComponent.find("button").text(); const enter18AndClickButton = () => { mockedComponent.find("input").simulate("change", {target: { value: "18" }}); mockedComponent.find("button").simulate("click"); return waitForIt(() => { mockedComponent.update(); return mockedComponent.find("button").text(); }); }; const enter35AndClickButton = () => { mockedComponent.find("input").simulate("change", {target: { value: "35" }}); mockedComponent.find("button").simulate("click"); return waitForIt(() => { mockedComponent.update(); return mockedComponent.find("button").text(); }); }; const userAge18 = await enter18AndClickButton(); const userAge35 = await enter35AndClickButton(); assert(initialButton === "Submit" && userAge18 === "You May Enter" && userAge35 === "You May Enter", "When a number greater than or equal to 18 is entered into the <code>input</code> element and the <code>button</code> is clicked, the <code>button</code>&apos;s inner text should read <code>You May Enter</code>."); }; '
  - text: &quot;Una vez que se ha enviado un número y el valor de la <code>input</code> se cambia de nuevo, el <code>button</code> debería volver a leer <code>Submit</code> &quot;.
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(CheckUserAge)); const enter18AndClickButton = () => { mockedComponent.find("input").simulate("change", {target: { value: "18" }}); mockedComponent.find("button").simulate("click"); return waitForIt(() => { mockedComponent.update(); return mockedComponent.find("button").text(); }); }; const changeInputDontClickButton = () => { mockedComponent.find("input").simulate("change", {target: { value: "5" }}); return waitForIt(() => { mockedComponent.update(); return mockedComponent.find("button").text(); }); }; const enter10AndClickButton = () => { mockedComponent.find("input").simulate("change", {target: { value: "10" }}); mockedComponent.find("button").simulate("click"); return waitForIt(() => { mockedComponent.update(); return mockedComponent.find("button").text(); }); }; const userAge18 = await enter18AndClickButton(); const changeInput1 = await changeInputDontClickButton(); const userAge10 = await enter10AndClickButton(); const changeInput2 = await changeInputDontClickButton(); assert(userAge18 === "You May Enter" && changeInput1 === "Submit" && userAge10 === "You Shall Not Pass" && changeInput2 === "Submit", "Once a number has been submitted, and the value of the <code>input</code> is once again changed, the <code>button</code> should return to reading <code>Submit</code>."); }; '
  - text: Su código no debe contener ninguna declaración <code>if/else</code> .
    testString: 'assert(new RegExp(/(\s|;)if(\s|\()/).test(Enzyme.mount(React.createElement(CheckUserAge)).instance().render.toString()) === false, "Your code should not contain any <code>if/else</code> statements.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx

const inputStyle = {
  width: 235,
  margin: 5
}

class CheckUserAge extends React.Component {
  constructor(props) {
    super(props);
    // change code below this line

    // change code above this line
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      input: e.target.value,
      userAge: "
    });
  }
  submit() {
    this.setState({
      userAge: this.state.input
    });
  }
  render() {
    const buttonOne = <button onClick={this.submit}>Submit</button>;
    const buttonTwo = <button>You May Enter</button>;
    const buttonThree = <button>You Shall Not Pass</button>;
    return (
      <div>
        <h3>Enter Your Age to Continue</h3>
        <input
          style={inputStyle}
          type="number"
          value={this.state.input}
          onChange={this.handleChange} /><br />
        {
          /* change code here */
        }
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
const inputStyle = {
  width: 235,
  margin: 5
}

class CheckUserAge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userAge: ",
      input: "
    }
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      input: e.target.value,
      userAge: "
    });
  }
  submit() {
    this.setState({
      userAge: this.state.input
    });
  }
  render() {
    const buttonOne = <button onClick={this.submit}>Submit</button>;
    const buttonTwo = <button>You May Enter</button>;
    const buttonThree = <button>You Shall Not Pass</button>;
    return (
      <div>
        <h3>Enter Your Age to Continue</h3>
        <input
          style={inputStyle}
          type="number"
          value={this.state.input}
          onChange={this.handleChange} /><br />
          {
            this.state.userAge === " ?
            buttonOne :
            this.state.userAge >= 18 ?
            buttonTwo :
            buttonThree
          }
      </div>
    );
  }
};
```

</section>
