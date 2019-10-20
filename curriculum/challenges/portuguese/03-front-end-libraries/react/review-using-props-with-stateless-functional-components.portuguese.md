---
id: 5a24c314108439a4d403616f
title: Review Using Props with Stateless Functional Components
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Rever usando adereços com componentes funcionais sem estado
---

## Description
<section id="description"> Exceto pelo último desafio, você passou a adotar componentes funcionais sem estado. Esses componentes agem como funções puras. Eles aceitam adereços como entrada e retornam a mesma visão toda vez que passam os mesmos adereços. Você pode estar se perguntando qual é o estado e o próximo desafio irá abordá-lo com mais detalhes. Antes disso, aqui está uma revisão da terminologia para componentes. Um <em>componente funcional sem estado</em> é qualquer função que você escreve que aceita props e retorna JSX. Um <em>componente sem estado</em> , por outro lado, é uma classe que estende o <code>React.Component</code> , mas não usa o estado interno (coberto no próximo desafio). Finalmente, um <em>componente com estado</em> é qualquer componente que mantenha seu próprio estado interno. Você pode ver componentes stateful referidos simplesmente como componentes ou componentes React. Um padrão comum é tentar minimizar o estado de estado e criar componentes funcionais sem estado sempre que possível. Isso ajuda a conter seu gerenciamento de estado em uma área específica de seu aplicativo. Por sua vez, isso melhora o desenvolvimento e a manutenção do seu aplicativo, facilitando o acompanhamento de como as alterações no estado afetam seu comportamento. </section>

## Instructions
<section id="instructions"> O editor de código tem um componente <code>CampSite</code> que processa um componente <code>Camper</code> como um filho. Defina o componente <code>Camper</code> e atribua a ele props padrão de <code>{ name: &#39;CamperBot&#39; }</code> . Dentro do componente <code>Camper</code> , renderize qualquer código que você queira, mas tenha certeza de ter um elemento <code>p</code> que inclua apenas o valor do <code>name</code> que é passado como um <code>prop</code> . Finalmente, defina <code>propTypes</code> no componente <code>Camper</code> para exigir que o <code>name</code> seja fornecido como um prop e verifique se ele é do tipo <code>string</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O componente <code>CampSite</code> deve renderizar.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(CampSite)); return mockedComponent.find("CampSite").length === 1; })(), "The <code>CampSite</code> component should render.");'
  - text: O componente <code>Camper</code> deve renderizar.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(CampSite)); return mockedComponent.find("Camper").length === 1; })(), "The <code>Camper</code> component should render.");'
  - text: O componente <code>Camper</code> deve incluir props padrão que atribuem a string <code>CamperBot</code> ao <code>name</code> da chave.
    testString: 'getUserInput => assert((function() { const noWhiteSpace = getUserInput("index").replace(/\s/g, ""); const verify1 = "Camper.defaultProps={name:\"CamperBot\"}"; const verify2 = "Camper.defaultProps={name:"CamperBot"}"; return (noWhiteSpace.includes(verify1) || noWhiteSpace.includes(verify2)); })(), "The <code>Camper</code> component should include default props which assign the string <code>CamperBot</code> to the key <code>name</code>.");'
  - text: O componente <code>Camper</code> deve incluir tipos prop que requerem que o <code>name</code> prop seja do tipo <code>string</code> .
    testString: 'getUserInput => assert((function() { const mockedComponent = Enzyme.mount(React.createElement(CampSite)); const noWhiteSpace = getUserInput("index").replace(/\s/g, ""); const verifyDefaultProps = "Camper.propTypes={name:PropTypes.string.isRequired}"; return noWhiteSpace.includes(verifyDefaultProps); })(), "The <code>Camper</code> component should include prop types which require the <code>name</code> prop to be of type <code>string</code>.");'
  - text: O componente <code>Camper</code> deve conter um elemento <code>p</code> com apenas o texto do <code>name</code> prop.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(CampSite)); return mockedComponent.find("p").text() === mockedComponent.find("Camper").props().name; })(), "The <code>Camper</code> component should contain a <code>p</code> element with only the text from the <code>name</code> prop.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper/>
      </div>
    );
  }
};
// change code below this line

```

</div>

### Before Test
<div id='jsx-setup'>

```jsx
var PropTypes = {
   string: { isRequired: true }
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
