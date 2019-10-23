---
id: 5a24c314108439a4d4036185
title: Use && for a More Concise Conditional
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Use && para un condicional más conciso
---

## Description
<section id="description"> Las declaraciones if / else funcionaron en el último desafío, pero hay una forma más concisa de lograr el mismo resultado. Imagine que está rastreando varias condiciones en un componente y desea que se representen diferentes elementos en función de cada una de estas condiciones. Si escribe muchas <code>else if</code> instrucciones, <code>else if</code> declaraciones devuelven interfaces de usuario ligeramente diferentes, puede repetir el código que deja espacio para el error. En su lugar, puede utilizar el operador lógico <code>&amp;&amp;</code> para realizar la lógica condicional de una manera más concisa. Esto es posible porque desea verificar si una condición es <code>true</code> y, si lo es, devolver algún margen de beneficio. Aquí hay un ejemplo: <code>{condition &amp;&amp; &lt;p&gt;markup&lt;/p&gt;}</code> Si la <code>condition</code> es <code>true</code> , se devolverá la marca. Si la condición es <code>false</code> , la operación devolverá inmediatamente <code>false</code> después de evaluar la <code>condition</code> y no devolverá nada. Puede incluir estas declaraciones directamente en su JSX y encadenar varias condiciones juntas escribiendo <code>&amp;&amp;</code> después de cada una. Esto le permite manejar una lógica condicional más compleja en su método <code>render()</code> sin repetir mucho código. </section>

## Instructions
<section id="instructions"> Resuelva el ejemplo anterior de nuevo, de modo que <code>h1</code> solo <code>display</code> si la <code>display</code> es <code>true</code> , pero use el operador lógico <code>&amp;&amp;</code> lugar de una instrucción <code>if/else</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>MyComponent</code> debería existir y renderizarse.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); return mockedComponent.find("MyComponent").length; })(), "<code>MyComponent</code> should exist and render.");'
  - text: 'Cuando la <code>display</code> se configura como <code>true</code> , se debe <code>display</code> un <code>div</code> , un <code>button</code> y <code>h1</code> .'
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const state_1 = () => { mockedComponent.setState({display: true}); return waitForIt(() => mockedComponent )}; const updated = await state_1(); assert(updated.find("div").length === 1 && updated.find("div").children().length === 2 && updated.find("button").length === 1 && updated.find("h1").length === 1, "When <code>display</code> is set to <code>true</code>, a <code>div</code>, <code>button</code>, and <code>h1</code> should render."); }; '
  - text: 'Cuando la <code>display</code> está configurada en <code>false</code> , solo <code>button</code> debe <code>display</code> un <code>button</code> <code>div</code> y.'
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const state_1 = () => { mockedComponent.setState({display: false}); return waitForIt(() => mockedComponent )}; const updated = await state_1(); assert(updated.find("div").length === 1 && updated.find("div").children().length === 1 && updated.find("button").length === 1 && updated.find("h1").length === 0, "When <code>display</code> is set to <code>false</code>, only a <code>div</code> and <code>button</code> should render."); }; '
  - text: El método de representación debe utilizar el operador lógico && para verificar la condición de this.state.display.
    testString: 'getUserInput => assert(getUserInput("index").includes("&&"), "The render method should use the && logical operator to check the condition of this.state.display.");'

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
