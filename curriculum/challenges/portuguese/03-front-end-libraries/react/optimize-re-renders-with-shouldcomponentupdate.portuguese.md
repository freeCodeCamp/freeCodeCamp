---
id: 5a24c314108439a4d4036180
title: Optimize Re-Renders with shouldComponentUpdate
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Otimizar Re-Renders com shouldComponentUpdate
---

## Description
<section id="description"> Até agora, se algum componente receber um novo <code>state</code> ou novos <code>props</code> , ele se renderiza novamente e a todos os seus filhos. Isso geralmente está bem. Mas o React fornece um método de ciclo de vida que você pode chamar quando os componentes filhos receberem novos <code>state</code> ou <code>props</code> e declarar especificamente se os componentes devem ser atualizados ou não. O método é <code>shouldComponentUpdate()</code> e leva <code>nextProps</code> e <code>nextState</code> como parâmetros. Esse método é uma maneira útil de otimizar o desempenho. Por exemplo, o comportamento padrão é que seu componente seja renderizado novamente quando receber novos <code>props</code> , mesmo que os <code>props</code> não tenham sido alterados. Você pode usar <code>shouldComponentUpdate()</code> para evitar isso, comparando os <code>props</code> . O método deve retornar um valor <code>boolean</code> que informa ao React se deve ou não atualizar o componente. Você pode comparar os props atuais ( <code>this.props</code> ) com os próximos props ( <code>nextProps</code> ) para determinar se você precisa atualizar ou não e retornar <code>true</code> ou <code>false</code> acordo. </section>

## Instructions
<section id="instructions"> O método <code>shouldComponentUpdate()</code> é adicionado em um componente chamado <code>OnlyEvens</code> . Atualmente, este método retorna <code>true</code> então o <code>OnlyEvens</code> re-renderiza toda vez que recebe novos <code>props</code> . Modifique o método para que <code>OnlyEvens</code> atualizado somente se o <code>value</code> de seus novos suportes for par. Clique no botão <code>Add</code> e observe a ordem dos eventos no console do seu navegador enquanto os outros ganchos do ciclo de vida são acionados. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O componente <code>Controller</code> deve renderizar o componente <code>OnlyEvens</code> como um filho.
    testString: 'assert((() => { const mockedComponent = Enzyme.mount(React.createElement(Controller)); return mockedComponent.find("Controller").length === 1 && mockedComponent.find("OnlyEvens").length === 1; })(), "The <code>Controller</code> component should render the <code>OnlyEvens</code> component as a child.");'
  - text: O método <code>shouldComponentUpdate</code> deve ser definido no componente <code>OnlyEvens</code> .
    testString: 'assert((() => { const child = React.createElement(OnlyEvens).type.prototype.shouldComponentUpdate.toString().replace(/s/g,""); return child !== "undefined"; })(), "The <code>shouldComponentUpdate</code> method should be defined on the <code>OnlyEvens</code> component.");'
  - text: O componente <code>OnlyEvens</code> deve retornar uma tag <code>h1</code> que renderiza o valor <code>this.props.value</code> .
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(Controller)); const first = () => { mockedComponent.setState({ value: 1000 }); return waitForIt(() => mockedComponent.find("h1").html()); }; const second = () => { mockedComponent.setState({ value: 10 }); return waitForIt(() => mockedComponent.find("h1").html()); }; const firstValue = await first(); const secondValue = await second(); assert(firstValue === "<h1>1000</h1>" && secondValue === "<h1>10</h1>", "The <code>OnlyEvens</code> component should return an <code>h1</code> tag which renders the value of <code>this.props.value</code>."); }; '
  - text: <code>OnlyEvens</code> deve renderizar novamente quando <code>nextProps.value</code> for par.
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
