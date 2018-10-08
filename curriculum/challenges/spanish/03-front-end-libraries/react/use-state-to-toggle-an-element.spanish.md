---
id: 5a24c314108439a4d4036176
title: Use State to Toggle an Element
localeTitle: Usar estado para alternar un elemento
challengeType: 6
isRequired: false
---

## Description
<section id='description'> 
Puede usar el <code>state</code> en las aplicaciones React de formas más complejas que las que ha visto hasta ahora. Un ejemplo es monitorear el estado de un valor, luego renderizar la IU condicionalmente en base a este valor. Hay varias maneras diferentes de lograr esto, y el editor de código muestra un método. 
</section>

## Instructions
<section id='instructions'> 
<code>MyComponent</code> tiene una propiedad de <code>visibility</code> que se inicializa en <code>false</code> . El método de renderización devuelve una vista si el valor de <code>visibility</code> es verdadero y una vista diferente si es falsa. 
Actualmente, no hay forma de actualizar la propiedad de <code>visibility</code> en el <code>state</code> del componente. El valor debe alternar entre verdadero y falso. Hay un controlador de clic en el botón que activa un método de clase llamado <code>toggleVisibility()</code> . Defina este método para que el <code>state</code> de <code>visibility</code> cambie al valor opuesto cuando se llama al método. Si la <code>visibility</code> es <code>false</code> , el método lo establece en <code>true</code> y viceversa. 
Finalmente, haga clic en el botón para ver la representación condicional del componente en función de su <code>state</code> . 
<strong>Sugerencia:</strong> ¡No olvide enlazar <code>this</code> palabra clave con el método en el constructor! 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>MyComponent</code> debería devolver un elemento <code>div</code> que contenga un <code>button</code> .
    testString: 'assert.strictEqual(Enzyme.mount(React.createElement(MyComponent)).find("div").find("button").length, 1, "<code>MyComponent</code> should return a <code>div</code> element which contains a <code>button</code>.");'
  - text: El estado de <code>MyComponent</code> debe inicializarse con una propiedad de <code>visibility</code> establecida en <code>false</code> .
    testString: 'assert.strictEqual(Enzyme.mount(React.createElement(MyComponent)).state("visibility"), false, "The state of <code>MyComponent</code> should initialize with a <code>visibility</code> property set to <code>false</code>.");'
  - text: Al hacer clic en el elemento del botón se debe cambiar la propiedad de <code>visibility</code> en estado entre <code>true</code> y <code>false</code> .
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const first = () => { mockedComponent.setState({ visibility: false }); return waitForIt(() => mockedComponent.state("visibility")); }; const second = () => { mockedComponent.find("button").simulate("click"); return waitForIt(() => mockedComponent.state("visibility")); }; const third = () => { mockedComponent.find("button").simulate("click"); return waitForIt(() => mockedComponent.state("visibility")); }; const firstValue = await first(); const secondValue = await second(); const thirdValue = await third(); assert(!firstValue && secondValue && !thirdValue, "Clicking the button element should toggle the <code>visibility</code> property in state between <code>true</code> and <code>false</code>."); }; '

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
      visibility: false
    };
    // change code below this line

    // change code above this line
  }
  // change code below this line

  // change code above this line
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
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
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    this.toggleVisibility = this.toggleVisibility.bind(this);
   }
  toggleVisibility() {
    this.setState({
      visibility: !this.state.visibility
    });
  }
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick = {this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick = {this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
};
```

</section>
