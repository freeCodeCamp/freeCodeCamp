---
id: 5a24c314108439a4d403617d
title: Use the Lifecycle Method componentDidMount
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Utilice el método de ciclo de vida componentDidMount
---

## Description
<section id="description"> La mayoría de los desarrolladores web, en algún momento, necesitan llamar a un punto final de API para recuperar datos. Si está trabajando con React, es importante saber dónde realizar esta acción. La mejor práctica con React es colocar llamadas API o cualquier llamada a su servidor en el método de ciclo de vida <code>componentDidMount()</code> . Este método se llama después de que un componente se monta en el DOM. Cualquier llamada a <code>setState()</code> aquí activará una nueva representación de su componente. Cuando llama a una API con este método y establece su estado con los datos que la API devuelve, se activará automáticamente una actualización una vez que reciba los datos. </section>

## Instructions
<section id="instructions"> Hay una llamada de API simulada en <code>componentDidMount()</code> . Establece el estado después de 2,5 segundos para simular la llamada a un servidor para recuperar datos. Este ejemplo solicita el total actual de usuarios activos para un sitio. En el método de renderización, represente el valor de los <code>activeUsers</code> en el <code>h1</code> . Vea lo que sucede en la vista previa y siéntase libre de cambiar el tiempo de espera para ver los diferentes efectos. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>MyComponent</code> debe generar un elemento <code>div</code> que envuelva una etiqueta <code>h1</code> .
    testString: 'assert((() => { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); return (mockedComponent.find("div").length === 1 && mockedComponent.find("h1").length === 1); })(), "<code>MyComponent</code> should render a <code>div</code> element which wraps an <code>h1</code> tag.");'
  - text: El estado del componente debe actualizarse con una función de tiempo de espera en <code>componentDidMount</code> .
    testString: 'assert((() => { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); return new RegExp("setTimeout(.|\n)+setState(.|\n)+activeUsers").test(String(mockedComponent.instance().componentDidMount)); })(), "Component state should be updated with a timeout function in <code>componentDidMount</code>.");'
  - text: 'El <code>h1</code> etiqueta debe hacer que el <code>activeUsers</code> valor de <code>MyComponent</code> estado &#39;s.'
    testString: 'async () => { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const first = () => { mockedComponent.setState({ activeUsers: 1237 }); return mockedComponent.find("h1").text(); }; const second = () => { mockedComponent.setState({ activeUsers: 1000 }); return mockedComponent.find("h1").text(); }; assert(new RegExp("1237").test(first()) && new RegExp("1000").test(second()), "The <code>h1</code> tag should render the <code>activeUsers</code> value from <code>MyComponent</code>&apos;s state."); }; '

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
      activeUsers: null
    };
  }
  componentDidMount() {
    setTimeout( () => {
      this.setState({
        activeUsers: 1273
      });
    }, 2500);
  }
  render() {
    return (
      <div>
        <h1>Active Users: { /* change code here */ }</h1>
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
