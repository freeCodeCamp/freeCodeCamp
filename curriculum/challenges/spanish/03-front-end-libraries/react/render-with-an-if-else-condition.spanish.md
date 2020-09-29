---
id: 5a24c314108439a4d4036184
title: Render with an If-Else Condition
challengeType: 6
videoUrl: ''
localeTitle: Render con una condición de si-else
---

## Description
<section id="description"> Otra aplicación del uso de JavaScript para controlar su vista renderizada es vincular los elementos que se representan a una condición. Cuando la condición es verdadera, una vista se renderiza. Cuando es falso, es una vista diferente. Puede hacer esto con una instrucción <code>if/else</code> estándar en el método <code>render()</code> de un componente React. </section>

## Instructions
<section id="instructions"> MyComponent contiene un <code>boolean</code> en su estado que rastrea si desea mostrar algún elemento en la interfaz de usuario o no. El <code>button</code> cambia el estado de este valor. Actualmente, rinde la misma interfaz de usuario cada vez. Reescriba el método <code>render()</code> con una instrucción <code>if/else</code> para que si la <code>display</code> es <code>true</code> , devuelva el marcado actual. De lo contrario, devuelva el marcado sin el elemento <code>h1</code> . <strong>Nota:</strong> Debe escribir un <code>if/else</code> para pasar las pruebas. El uso del operador ternario no pasará aquí. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>MyComponent</code> debería existir y renderizarse.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); return mockedComponent.find("MyComponent").length === 1; })(), "<code>MyComponent</code> should exist and render.");'
  - text: 'Cuando la <code>display</code> se configura como <code>true</code> , se debe <code>display</code> un <code>div</code> , un <code>button</code> y <code>h1</code> .'
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const state_1 = () => { mockedComponent.setState({display: true}); return waitForIt(() => mockedComponent )}; const updated = await state_1(); assert(mockedComponent.find("div").length === 1 && mockedComponent.find("div").children().length === 2 && mockedComponent.find("button").length === 1 && mockedComponent.find("h1").length === 1, "When <code>display</code> is set to <code>true</code>, a <code>div</code>, <code>button</code>, and <code>h1</code> should render."); }; '
  - text: 'Cuando la <code>display</code> está configurada en <code>false</code> , solo <code>button</code> debe <code>display</code> un <code>button</code> <code>div</code> y.'
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const state_1 = () => { mockedComponent.setState({display: false}); return waitForIt(() => mockedComponent )}; const updated = await state_1(); assert(mockedComponent.find("div").length === 1 && mockedComponent.find("div").children().length === 1 && mockedComponent.find("button").length === 1 && mockedComponent.find("h1").length === 0, "When <code>display</code> is set to <code>false</code>, only a <code>div</code> and <code>button</code> should render."); }; '
  - text: El método de render debería usar una instrucción <code>if/else</code> para verificar la condición de <code>this.state.display</code> .
    testString: 'getUserInput => assert(getUserInput("index").includes("if") && getUserInput("index").includes("else"), "The render method should use an <code>if/else</code> statement to check the condition of <code>this.state.display</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState({
      display: !this.state.display
    });
  }
  render() {
    // change code below this line

    return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
         <h1>Displayed!</h1>
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
