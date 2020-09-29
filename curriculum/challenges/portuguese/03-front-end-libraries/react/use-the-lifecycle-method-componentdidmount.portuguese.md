---
id: 5a24c314108439a4d403617d
title: Use the Lifecycle Method componentDidMount
challengeType: 6
videoUrl: ''
localeTitle: Use o componentDidMount do método do ciclo de vida
---

## Description
<section id="description"> A maioria dos desenvolvedores da Web, em algum momento, precisa chamar um ponto de extremidade da API para recuperar dados. Se você está trabalhando com o React, é importante saber onde realizar essa ação. A prática recomendada com o React é colocar chamadas de API ou qualquer chamada para o seu servidor no método de ciclo de vida <code>componentDidMount()</code> . Esse método é chamado depois que um componente é montado no DOM. Qualquer chamada para <code>setState()</code> aqui irá disparar uma nova renderização do seu componente. Quando você chamar uma API nesse método e definir seu estado com os dados retornados pela API, ela acionará automaticamente uma atualização assim que você receber os dados. </section>

## Instructions
<section id="instructions"> Há uma chamada de API falsa em <code>componentDidMount()</code> . Ele define o estado após 2,5 segundos para simular a chamada de um servidor para recuperar dados. Este exemplo solicita o total de usuários ativos atuais para um site. No método render, renderize o valor de <code>activeUsers</code> no <code>h1</code> . Veja o que acontece na pré-visualização e sinta-se à vontade para alterar o tempo limite para ver os diferentes efeitos. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>MyComponent</code> deve renderizar um elemento <code>div</code> que contenha uma tag <code>h1</code> .
    testString: 'assert((() => { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); return (mockedComponent.find("div").length === 1 && mockedComponent.find("h1").length === 1); })(), "<code>MyComponent</code> should render a <code>div</code> element which wraps an <code>h1</code> tag.");'
  - text: O estado do componente deve ser atualizado com uma função de tempo limite em <code>componentDidMount</code> .
    testString: 'assert((() => { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); return new RegExp("setTimeout(.|\n)+setState(.|\n)+activeUsers").test(String(mockedComponent.instance().componentDidMount)); })(), "Component state should be updated with a timeout function in <code>componentDidMount</code>.");'
  - text: 'A <code>h1</code> tag deve tornar o <code>activeUsers</code> valor de <code>MyComponent</code> estado &#39;s.'
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
