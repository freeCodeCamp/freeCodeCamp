---
id: 5a24c314108439a4d403618b
title: Give Sibling Elements a Unique Key Attribute
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Dê aos Irmãos Elementos um Atributo de Chave Única
---

## Description
<section id="description"> O último desafio mostrou como o método <code>map</code> é usado para renderizar dinamicamente um número de elementos com base na entrada do usuário. No entanto, houve uma peça importante que faltava nesse exemplo. Quando você cria uma matriz de elementos, cada um precisa de um atributo- <code>key</code> definido como um valor exclusivo. O React usa essas chaves para acompanhar quais itens são adicionados, alterados ou removidos. Isso ajuda a tornar o processo de re-renderização mais eficiente quando a lista é modificada de alguma forma. Observe que as chaves precisam ser únicas entre os elementos irmãos, elas não precisam ser globalmente exclusivas em seu aplicativo. </section>

## Instructions
<section id="instructions"> O editor de código tem um array com algumas estruturas front-end e um componente funcional sem estado chamado <code>Frameworks()</code> . <code>Frameworks()</code> precisa mapear a matriz para uma lista não ordenada, como no último desafio. Termine de escrever o retorno de chamada do <code>map</code> para retornar um elemento <code>li</code> para cada estrutura na matriz <code>frontEndFrameworks</code> . Desta vez, certifique-se de atribuir a cada <code>li</code> um atributo- <code>key</code> , definido como um valor único. Normalmente, você quer tornar a chave algo que identifique exclusivamente o elemento que está sendo renderizado. Como último recurso, o índice de matriz pode ser usado, mas normalmente você deve tentar usar uma identificação exclusiva. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O componente <code>Frameworks</code> deve existir e renderizar para a página.
    testString: 'assert(Enzyme.mount(React.createElement(Frameworks)).find("Frameworks").length === 1, "The <code>Frameworks</code> component should exist and render to the page.");'
  - text: <code>Frameworks</code> devem renderizar um elemento <code>h1</code> .
    testString: 'assert(Enzyme.mount(React.createElement(Frameworks)).find("h1").length === 1, "<code>Frameworks</code> should render an <code>h1</code> element.");'
  - text: <code>Frameworks</code> devem renderizar um elemento <code>ul</code> .
    testString: 'assert(Enzyme.mount(React.createElement(Frameworks)).find("ul").length === 1, "<code>Frameworks</code> should render a <code>ul</code> element.");'
  - text: A tag <code>ul</code> deve renderizar 6 elementos <code>li</code> filhos.
    testString: 'assert(Enzyme.mount(React.createElement(Frameworks)).find("ul").children().length === 6 && Enzyme.mount(React.createElement(Frameworks)).find("ul").childAt(0).name() === "li" && Enzyme.mount(React.createElement(Frameworks)).find("li").length === 6, "The <code>ul</code> tag should render 6 child <code>li</code> elements.");'
  - text: Cada elemento de item de lista deve ter um atributo de <code>key</code> exclusivo.
    testString: 'assert((() => { const ul = Enzyme.mount(React.createElement(Frameworks)).find("ul"); const keys = new Set([ ul.childAt(0).key(), ul.childAt(1).key(), ul.childAt(2).key(), ul.childAt(3).key(), ul.childAt(4).key(), ul.childAt(5).key(), ]); return keys.size === 6; })(), "Each list item element should have a unique <code>key</code> attribute.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const frontEndFrameworks = [
  'React',
  'Angular',
  'Ember',
  'Knockout',
  'Backbone',
  'Vue'
];

function Frameworks() {
  const renderFrameworks = null; // change code here
  return (
    <div>
      <h1>Popular Front End JavaScript Frameworks</h1>
      <ul>
        {renderFrameworks}
      </ul>
    </div>
  );
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
