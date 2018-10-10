---
id: 5a24bbe0dba28a8d3cbd4c5d
title: Create a Complex JSX Element
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Crie um elemento JSX complexo
---

## Description
<section id="description"> O último desafio foi um exemplo simples de JSX, mas o JSX também pode representar HTML mais complexo. Uma coisa importante a saber sobre o JSX aninhado é que ele deve retornar um único elemento. Esse elemento pai único envolveria todos os outros níveis de elementos aninhados. Por exemplo, vários elementos JSX escritos como irmãos sem elemento wrapper pai não serão transpilados. Veja um exemplo: <b>JSX válido:</b> <blockquote> &lt;div&gt; <br> &lt;p&gt; Parágrafo um &lt;/ p&gt; <br> &lt;p&gt; Parágrafo dois &lt;/ p&gt; <br> &lt;p&gt; Parágrafo 3 &lt;/ p&gt; <br> &lt;/ div&gt; </blockquote> <b>JSX inválido:</b> <blockquote> &lt;p&gt; Parágrafo um &lt;/ p&gt; <br> &lt;p&gt; Parágrafo dois &lt;/ p&gt; <br> &lt;p&gt; Parágrafo 3 &lt;/ p&gt; <br></blockquote></section>

## Instructions
<section id="instructions"> Defina uma nova constante <code>JSX</code> que renderize uma <code>div</code> que contenha os seguintes elementos em ordem: Uma <code>h1</code> , uma <code>p</code> e uma lista não ordenada que contém três itens <code>li</code> . Você pode incluir qualquer texto que desejar em cada elemento. <strong>Nota:</strong> Ao renderizar vários elementos como este, você pode agrupá-los entre parênteses, mas isso não é estritamente necessário. Observe também que esse desafio usa uma tag <code>div</code> para envolver todos os elementos filhos em um único elemento pai. Se você remover o <code>div</code> , o JSX não será mais transpelado. Lembre-se disso, pois isso também será aplicado quando você retornar elementos JSX nos componentes do React. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: A constante <code>JSX</code> deve retornar um elemento <code>div</code> .
    testString: 'assert(JSX.type === "div", "The constant <code>JSX</code> should return a <code>div</code> element.");'
  - text: O <code>div</code> deve conter uma tag <code>p</code> como o segundo elemento.
    testString: 'assert(JSX.props.children[1].type === "p", "The <code>div</code> should contain a <code>p</code> tag as the second element.");'
  - text: O <code>div</code> deve conter uma tag <code>ul</code> como o terceiro elemento.
    testString: 'assert(JSX.props.children[2].type === "ul", "The <code>div</code> should contain a <code>ul</code> tag as the third element.");'
  - text: O <code>div</code> deve conter uma tag <code>h1</code> como o primeiro elemento.
    testString: 'assert(JSX.props.children[0].type === "h1", "The <code>div</code> should contain an <code>h1</code> tag as the first element.");'
  - text: O <code>ul</code> deve conter três elementos <code>li</code> .
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
