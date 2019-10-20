---
id: 5a24c314108439a4d4036141
title: Getting Started with React Redux
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Começando com o React Redux
---

## Description
<section id="description"> Esta série de desafios apresenta como usar o Redux com o React. Primeiro, aqui está uma revisão de alguns dos principais princípios de cada tecnologia. React é uma biblioteca de visualizações que você fornece com dados e renderiza a exibição de maneira eficiente e previsível. O Redux é uma estrutura de gerenciamento de estado que você pode usar para simplificar o gerenciamento do estado da sua aplicação. Normalmente, em um aplicativo React Redux, você cria um único repositório Redux que gerencia o estado de todo o aplicativo. Seus componentes do React assinam apenas os dados na loja que são relevantes para sua função. Em seguida, você envia ações diretamente dos componentes React, que acionam as atualizações da loja. Embora os componentes do React possam gerenciar seu próprio estado localmente, quando você tem um aplicativo complexo, geralmente é melhor manter o estado do aplicativo em um único local com o Redux. Há exceções quando componentes individuais podem ter um estado local específico somente para eles. Finalmente, como o Redux não foi projetado para funcionar com o React fora da caixa, você precisa usar o pacote <code>react-redux</code> . Ele fornece uma maneira de você passar o <code>state</code> Redux e <code>dispatch</code> para seus componentes React como <code>props</code> . Nos próximos desafios, primeiro, você criará um componente React simples que permitirá a entrada de novas mensagens de texto. Estes são adicionados a uma matriz que é exibida na exibição. Esta deve ser uma boa revisão do que você aprendeu nas lições do React. Em seguida, você criará um armazenamento Redux e ações que gerenciam o estado da matriz de mensagens. Finalmente, você usará <code>react-redux</code> para conectar o repositório do Redux com seu componente, extraindo assim o estado local para o repositório do Redux. </section>

## Instructions
<section id="instructions"> Comece com um componente <code>DisplayMessages</code> . Adicione um construtor a esse componente e inicialize-o com um estado que tenha duas propriedades: <code>input</code> , definida como uma cadeia vazia, e <code>messages</code> , configuradas como uma matriz vazia. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O componente <code>DisplayMessages</code> deve renderizar um elemento <code>div</code> vazio.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(DisplayMessages)); return mockedComponent.find("div").text() === "" })(), "The <code>DisplayMessages</code> component should render an empty <code>div</code> element.");'
  - text: 'O construtor <code>DisplayMessages</code> deve ser chamado corretamente com <code>super</code> , passando em <code>props</code> .'
    testString: 'getUserInput => assert((function() { const noWhiteSpace = getUserInput("index").replace(/\s/g,""); return noWhiteSpace.includes("constructor(props)") && noWhiteSpace.includes("super(props"); })(), "The <code>DisplayMessages</code> constructor should be called properly with <code>super</code>, passing in <code>props</code>.");'
  - text: 'O componente <code>DisplayMessages</code> deve ter um estado inicial igual a <code>{input: &quot;&quot;, messages: []}</code> .'
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(DisplayMessages)); const initialState = mockedComponent.state(); return typeof initialState === "object" && initialState.input === "" && Array.isArray(initialState.messages) && initialState.messages.length === 0; })(), "The <code>DisplayMessages</code> component should have an initial state equal to <code>{input: "", messages: []}</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class DisplayMessages extends React.Component {
  // change code below this line

  // change code above this line
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
