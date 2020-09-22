---
id: 5a24bbe0dba28a8d3cbd4c5d
title: Create a Complex JSX Element
challengeType: 6
videoUrl: ''
localeTitle: Crear un elemento JSX complejo
---

## Description
<section id="description"> El último desafío fue un ejemplo simple de JSX, pero JSX también puede representar HTML más complejo. Una cosa importante que se debe saber sobre JSX anidado es que debe devolver un solo elemento. Este elemento primario envolvería todos los otros niveles de elementos anidados. Por ejemplo, varios elementos JSX escritos como hermanos sin elemento de envoltorio principal no se transpilarán. Aquí hay un ejemplo: <b>Valid JSX:</b> <blockquote> &lt;div&gt; <br> &lt;p&gt; Párrafo uno &lt;/p&gt; <br> &lt;p&gt; Párrafo Dos &lt;/p&gt; <br> &lt;p&gt; Párrafo Tres &lt;/p&gt; <br> &lt;/div&gt; </blockquote> <b>JSX no válido:</b> <blockquote> &lt;p&gt; Párrafo uno &lt;/p&gt; <br> &lt;p&gt; Párrafo Dos &lt;/p&gt; <br> &lt;p&gt; Párrafo Tres &lt;/p&gt; <br></blockquote></section>

## Instructions
<section id="instructions"> Defina una nueva constante <code>JSX</code> que muestre un <code>div</code> que contenga los siguientes elementos en orden: un <code>h1</code> , una <code>p</code> , y una lista desordenada que contenga tres elementos <code>li</code> . Puede incluir cualquier texto que desee dentro de cada elemento. <strong>Nota:</strong> Al representar varios elementos como este, puede envolverlos todos entre paréntesis, pero no es estrictamente necesario. También tenga en cuenta que este desafío utiliza una etiqueta <code>div</code> para envolver todos los elementos secundarios dentro de un único elemento principal. Si elimina el <code>div</code> , el JSX ya no se transpilará. Tenga esto en cuenta, ya que también se aplicará cuando devuelva elementos JSX en los componentes React. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: La constante <code>JSX</code> debe devolver un elemento <code>div</code> .
    testString: 'assert(JSX.type === "div", "The constant <code>JSX</code> should return a <code>div</code> element.");'
  - text: El <code>div</code> debe contener una etiqueta <code>p</code> como el segundo elemento.
    testString: 'assert(JSX.props.children[1].type === "p", "The <code>div</code> should contain a <code>p</code> tag as the second element.");'
  - text: El <code>div</code> debe contener una etiqueta <code>ul</code> como el tercer elemento.
    testString: 'assert(JSX.props.children[2].type === "ul", "The <code>div</code> should contain a <code>ul</code> tag as the third element.");'
  - text: El <code>div</code> debe contener una etiqueta <code>h1</code> como el primer elemento.
    testString: 'assert(JSX.props.children[0].type === "h1", "The <code>div</code> should contain an <code>h1</code> tag as the first element.");'
  - text: La <code>ul</code> debe contener tres elementos <code>li</code> .
    testString: 'assert(JSX.props.children[2].props.children.length === 3, "The <code>ul</code> should contain three <code>li</code> elements.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
// write your code here

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
