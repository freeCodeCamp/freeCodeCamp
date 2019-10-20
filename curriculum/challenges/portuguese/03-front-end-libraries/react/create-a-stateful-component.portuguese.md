---
id: 5a24c314108439a4d4036170
title: Create a Stateful Component
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Criar um componente com estado
---

## Description
<section id="description"> Um dos tópicos mais importantes no React é o <code>state</code> . O estado consiste em todos os dados que seu aplicativo precisa conhecer, que podem mudar com o tempo. Você quer que seus aplicativos respondam a mudanças de estado e apresentem uma interface atualizada quando necessário. O React oferece uma boa solução para o gerenciamento de estado de aplicativos da Web modernos. Você cria o estado em um componente React declarando uma propriedade de <code>state</code> na classe do componente em seu <code>constructor</code> . Isso inicializa o componente com o <code>state</code> quando ele é criado. A propriedade <code>state</code> deve ser configurada para um <code>object</code> JavaScript. Declarar isso é assim: <blockquote> this.state = { <br> // descreva seu estado aqui <br> } Você tem acesso ao objeto de <code>state</code> durante a vida útil do seu componente. Você pode atualizá-lo, renderizá-lo em sua interface do usuário e passá-lo como props para componentes filhos. O objeto de <code>state</code> pode ser tão complexo ou simples quanto você precisar. Observe que você deve criar um componente de classe estendendo <code>React.Component</code> para criar um <code>state</code> como este. </blockquote></section>

## Instructions
<section id="instructions"> Há um componente no editor de código que está tentando processar uma propriedade de <code>name</code> de seu <code>state</code> . No entanto, não há <code>state</code> definido. Inicialize o componente com <code>state</code> no <code>constructor</code> e atribua seu nome a uma propriedade de <code>name</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>StatefulComponent</code> deve existir e renderizar.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(StatefulComponent)); return mockedComponent.find("StatefulComponent").length === 1; })(), "<code>StatefulComponent</code> should exist and render.");'
  - text: <code>StatefulComponent</code> deve renderizar um <code>div</code> e um elemento <code>h1</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(StatefulComponent)); return mockedComponent.find("div").length === 1 && mockedComponent.find("h1").length === 1; })(), "<code>StatefulComponent</code> should render a <code>div</code> and an <code>h1</code> element.");'
  - text: O estado de <code>StatefulComponent</code> deve ser inicializado com um <code>name</code> propriedade definido como uma string.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(StatefulComponent)); const initialState = mockedComponent.state(); return ( typeof initialState === "object" && typeof initialState.name === "string"); })(), "The state of <code>StatefulComponent</code> should be initialized with a property <code>name</code> set to a string.");'
  - text: O <code>name</code> propriedade no estado de <code>StatefulComponent</code> deve ser renderizado no elemento <code>h1</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(StatefulComponent)); const initialState = mockedComponent.state(); return mockedComponent.find("h1").text() === initialState.name; })(), "The property <code>name</code> in the state of <code>StatefulComponent</code> should render in the <code>h1</code> element.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    // initialize state here

  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
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
