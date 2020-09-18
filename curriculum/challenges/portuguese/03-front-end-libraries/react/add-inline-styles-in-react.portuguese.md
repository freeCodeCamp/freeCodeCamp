---
id: 5a24c314108439a4d4036182
title: Add Inline Styles in React
challengeType: 6
videoUrl: ''
localeTitle: Adicionar estilos inline em React
---

## Description
<section id="description"> Você deve ter notado no último desafio que havia várias outras diferenças de sintaxe dos estilos inline em HTML, além do atributo <code>style</code> definido para um objeto JavaScript. Primeiro, os nomes de certas propriedades de estilo CSS usam o caso camel. Por exemplo, o último desafio definiu o tamanho da fonte com <code>fontSize</code> vez de <code>font-size</code> de <code>font-size</code> . Palavras hifenizadas como <code>font-size</code> são uma sintaxe inválida para as propriedades do objeto JavaScript, portanto, o React usa o caso camel. Como regra, todas as propriedades de estilo hifenizadas são escritas usando o caso camel no JSX. Todas as unidades de comprimento de propriedade (como <code>height</code> , <code>width</code> e <code>height</code> <code>fontSize</code> ) são consideradas como <code>px</code> menos que especificado de outra forma. Se você quiser usá- <code>em</code> , por exemplo, você coloca o valor e as unidades entre aspas, como <code>{fontSize: &quot;4em&quot;}</code> . Além dos valores de comprimento que são padrão para <code>px</code> , todos os outros valores de propriedade devem ser agrupados entre aspas. </section>

## Instructions
<section id="instructions"> Se você tiver um grande conjunto de estilos, poderá atribuir um <code>object</code> estilo a uma constante para manter seu código organizado. Descomente os <code>styles</code> constantes e declare um <code>object</code> com três propriedades de estilo e seus valores. Dê ao <code>div</code> uma cor de <code>&quot;purple&quot;</code> , um tamanho de fonte de <code>40</code> e uma borda de <code>&quot;2px solid purple&quot;</code> . Em seguida, defina o atributo <code>style</code> igual à constante de <code>styles</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: A variável de <code>styles</code> deve ser um <code>object</code> com três propriedades.
    testString: 'assert(Object.keys(styles).length === 3, "The <code>styles</code> variable should be an <code>object</code> with three properties.");'
  - text: A variável de <code>styles</code> deve ter uma propriedade <code>color</code> definida como um valor de <code>purple</code> .
    testString: 'assert(styles.color === "purple", "The <code>styles</code> variable should have a <code>color</code> property set to a value of <code>purple</code>.");'
  - text: A variável de <code>styles</code> deve ter uma propriedade <code>fontSize</code> definida como um valor de <code>40</code> .
    testString: 'assert(styles.fontSize === 40, "The <code>styles</code> variable should have a <code>fontSize</code> property set to a value of <code>40</code>.");'
  - text: A variável de <code>styles</code> deve ter uma propriedade de <code>border</code> definida como um valor de <code>2px solid purple</code> .
    testString: 'assert(styles.border === "2px solid purple", "The <code>styles</code> variable should have a <code>border</code> property set to a value of <code>2px solid purple</code>.");'
  - text: O componente deve renderizar um elemento <code>div</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.shallow(React.createElement(Colorful)); return mockedComponent.type() === "div"; })(), "The component should render a <code>div</code> element.");'
  - text: O elemento <code>div</code> deve ter seus estilos definidos pelo objeto <code>styles</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.shallow(React.createElement(Colorful)); return (mockedComponent.props().style.color === "purple" && mockedComponent.props().style.fontSize === 40 && mockedComponent.props().style.border === "2px solid purple"); })(), "The <code>div</code> element should have its styles defined by the <code>styles</code> object.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
// const styles =
// change code above this line
class Colorful extends React.Component {
  render() {
    // change code below this line
    return (
      <div style={{color: "yellow", fontSize: 24}}>Style Me!</div>
    );
    // change code above this line
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
