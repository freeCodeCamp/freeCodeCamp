---
id: 5a24c314108439a4d4036181
title: Introducing Inline Styles
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Apresentando Estilos Inline
---

## Description
<section id="description"> Existem outros conceitos complexos que adicionam recursos poderosos ao seu código React. Mas você pode estar se perguntando sobre o problema mais simples de como estilizar os elementos JSX que você cria no React. Você provavelmente sabe que não será exatamente o mesmo que trabalhar com HTML devido <a target="_blank" href="/learn/front-end-libraries/react/define-an-html-class-in-jsx">à maneira como você aplica classes a elementos JSX</a> . Se você importar estilos de uma folha de estilo, não será muito diferente. Você aplica uma classe ao seu elemento JSX usando o atributo <code>className</code> e aplica estilos à classe em sua folha de estilo. Outra opção é aplicar estilos <strong><em>inline</em></strong> , que são muito comuns no desenvolvimento do ReactJS. Você aplica estilos embutidos a elementos JSX semelhantes a como você faz isso em HTML, mas com algumas diferenças de JSX. Aqui está um exemplo de um estilo in-line em HTML: <code>&lt;div style=&quot;color: yellow; font-size: 16px&quot;&gt;Mellow Yellow&lt;/div&gt;</code> Elementos JSX usam o atributo <code>style</code> , mas devido à maneira como o JSX é transpilado, você pode é possível definir o valor para uma <code>string</code> . Em vez disso, você define isso como um <code>object</code> JavaScript. Aqui está um exemplo: <code>&lt;div style={{color: &quot;yellow&quot;, fontSize: 16}}&gt;Mellow Yellow&lt;/div&gt;</code> Observe como camelCase a propriedade &quot;fontSize&quot;? Isso ocorre porque o React não aceitará as chaves do caso do kebab no objeto de estilo. Reagir aplicará o nome da propriedade correta para nós no HTML. </section>

## Instructions
<section id="instructions"> Adicione um atributo <code>style</code> ao <code>div</code> no editor de código para dar ao texto uma cor vermelha e um tamanho de fonte de 72px. Observe que você pode, opcionalmente, definir o tamanho da fonte como um número, omitindo as unidades &quot;px&quot; ou gravá-lo como &quot;72px&quot;. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O componente deve renderizar um elemento <code>div</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(Colorful)); return mockedComponent.children().type() === "div"; })(), "The component should render a <code>div</code> element.");'
  - text: O elemento <code>div</code> deve ter uma cor <code>red</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(Colorful)); return mockedComponent.children().props().style.color === "red"; })(), "The <code>div</code> element should have a color of <code>red</code>.");'
  - text: O elemento <code>div</code> deve ter um tamanho de fonte de <code>72px</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(Colorful)); return (mockedComponent.children().props().style.fontSize === 72 || mockedComponent.children().props().style.fontSize === "72" || mockedComponent.children().props().style.fontSize === "72px"); })(), "The <code>div</code> element should have a font size of <code>72px</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class Colorful extends React.Component {
  render() {
    return (
      <div>Big Red</div>
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
