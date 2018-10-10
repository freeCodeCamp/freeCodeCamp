---
id: 5a24c314108439a4d4036180
title: Optimize Re-Renders with shouldComponentUpdate
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Optimizar Re-Renders con shouldComponentUpdate
---

## Description
<section id="description"> Hasta ahora, si algún componente recibe un nuevo <code>state</code> o nuevos <code>props</code> , se vuelve a representar a sí mismo ya todos sus hijos. Esto suele estar bien. Pero React proporciona un método de ciclo de vida al que puede llamar cuando los componentes secundarios reciben un nuevo <code>state</code> o <code>props</code> , y declaran específicamente si los componentes deberían actualizarse o no. El método es <code>shouldComponentUpdate()</code> , y toma <code>nextProps</code> y <code>nextState</code> como parámetros. Este método es una forma útil de optimizar el rendimiento. Por ejemplo, el comportamiento predeterminado es que su componente se vuelve a procesar cuando recibe nuevos <code>props</code> , incluso si los <code>props</code> no han cambiado. Puedes usar <code>shouldComponentUpdate()</code> para evitar esto al comparar los <code>props</code> . El método debe devolver un valor <code>boolean</code> que indique a React si actualizar o no el componente. Puede comparar los props actuales ( <code>this.props</code> ) con los props siguientes ( <code>nextProps</code> ) para determinar si necesita actualizar o no, y devolver <code>true</code> o <code>false</code> consecuencia. </section>

## Instructions
<section id="instructions"> El método <code>shouldComponentUpdate()</code> se agrega en un componente llamado <code>OnlyEvens</code> . Actualmente, este método devuelve <code>true</code> por lo que <code>OnlyEvens</code> vuelve a representar cada vez que recibe nuevos <code>props</code> . Modifique el método para que <code>OnlyEvens</code> solo se actualice si el <code>value</code> de sus nuevos accesorios es par. Haga clic en el botón <code>Add</code> y observe el orden de los eventos en la consola de su navegador a medida que se activan los otros ganchos del ciclo de vida. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El componente <code>Controller</code> debe representar el componente <code>OnlyEvens</code> como un elemento secundario.
    testString: 'assert((() => { const mockedComponent = Enzyme.mount(React.createElement(Controller)); return mockedComponent.find("Controller").length === 1 && mockedComponent.find("OnlyEvens").length === 1; })(), "The <code>Controller</code> component should render the <code>OnlyEvens</code> component as a child.");'
  - text: El método <code>shouldComponentUpdate</code> debe definirse en el componente <code>OnlyEvens</code> .
    testString: 'assert((() => { const child = React.createElement(OnlyEvens).type.prototype.shouldComponentUpdate.toString().replace(/s/g,""); return child !== "undefined"; })(), "The <code>shouldComponentUpdate</code> method should be defined on the <code>OnlyEvens</code> component.");'
  - text: El componente <code>OnlyEvens</code> debe devolver una etiqueta <code>h1</code> que representa el valor de <code>this.props.value</code> .
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(Controller)); const first = () => { mockedComponent.setState({ value: 1000 }); return waitForIt(() => mockedComponent.find("h1").html()); }; const second = () => { mockedComponent.setState({ value: 10 }); return waitForIt(() => mockedComponent.find("h1").html()); }; const firstValue = await first(); const secondValue = await second(); assert(firstValue === "<h1>1000</h1>" && secondValue === "<h1>10</h1>", "The <code>OnlyEvens</code> component should return an <code>h1</code> tag which renders the value of <code>this.props.value</code>."); }; '
  - text: <code>OnlyEvens</code> debería volver a generar solo cuando <code>nextProps.value</code> es par.
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(Controller)); const first = () => { mockedComponent.setState({ value: 8 }); return waitForIt(() => mockedComponent.find("h1").text()); }; const second = () => { mockedComponent.setState({ value: 7 }); return waitForIt(() => mockedComponent.find("h1").text()); }; const third = () => { mockedComponent.setState({ value: 42 }); return waitForIt(() => mockedComponent.find("h1").text()); }; const firstValue = await first(); const secondValue = await second(); const thirdValue = await third(); assert(firstValue === "8" && secondValue === "8" && thirdValue === "42", "<code>OnlyEvens</code> should re-render only when <code>nextProps.value</code> is even."); }; '

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class OnlyEvens extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should I update?');
     // change code below this line
    return true;
     // change code above this line
  }
  componentWillReceiveProps(nextProps) {
    console.log('Receiving new props...');
  }
  componentDidUpdate() {
    console.log('Component re-rendered.');
  }
  render() {
    return <h1>{this.props.value}</h1>
  }
};

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.addValue = this.addValue.bind(this);
  }
  addValue() {
    this.setState({
      value: this.state.value + 1
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.addValue}>Add</button>
        <OnlyEvens value={this.state.value}/>
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
