---
id: 5a24c314108439a4d403617c
title: Use the Lifecycle Method componentWillMount
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Use o componente Método de ciclo de vidaWillMount
---

## Description
<section id="description"> Os componentes React possuem vários métodos especiais que fornecem oportunidades para executar ações em pontos específicos no ciclo de vida de um componente. Eles são chamados de métodos de ciclo de vida ou ganchos do ciclo de vida e permitem que você capture componentes em determinados pontos no tempo. Isso pode ser feito antes de serem processados, antes de serem atualizados, antes de receberem adereços, antes de desmontarem e assim por diante. Aqui está uma lista de alguns dos principais métodos de ciclo de vida: <code>componentWillMount()</code> <code>componentDidMount()</code> <code>componentWillReceiveProps()</code> <code>shouldComponentUpdate()</code> <code>componentWillUpdate()</code> <code>componentDidUpdate()</code> <code>componentWillUnmount()</code> As próximas lições <code>shouldComponentUpdate()</code> alguns dos casos de uso básicos para esses métodos de ciclo de vida. </section>

## Instructions
<section id="instructions"> O método <code>componentWillMount()</code> é chamado antes do método <code>render()</code> quando um componente está sendo montado no DOM. Registre algo no console dentro de <code>componentWillMount()</code> - você pode querer abrir o console do seu navegador para ver a saída. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>MyComponent</code> deve renderizar um elemento <code>div</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); return mockedComponent.find("div").length === 1; })(), "<code>MyComponent</code> should render a <code>div</code> element.");'
  - text: <code>console.log</code> deve ser chamado em <code>componentWillMount</code> .
    testString: 'assert((function() { const lifecycle = React.createElement(MyComponent).type.prototype.componentWillMount.toString().replace(/ /g,""); return lifecycle.includes("console.log("); })(), "<code>console.log</code> should be called in <code>componentWillMount</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    // change code below this line

    // change code above this line
  }
  render() {
    return <div />
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
