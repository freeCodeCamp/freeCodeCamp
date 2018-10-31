---
id: 587d7dad367417b2b2512b77
title: Define a Constructor Function
challengeType: 1
videoUrl: ''
localeTitle: Definir uma função de construtor
---

## Description
<section id="description"> <code>Constructors</code> são funções que criam novos objetos. Eles definem propriedades e comportamentos que pertencerão ao novo objeto. Pense neles como um modelo para a criação de novos objetos. Aqui está um exemplo de um <code>constructor</code> : <blockquote> função Bird () { <br> this.name = &quot;Albert&quot;; <br> this.color = &quot;azul&quot;; <br> this.numLegs = 2; <br> } </blockquote> Esse <code>constructor</code> define um objeto <code>Bird</code> com <code>name</code> , <code>color</code> e <code>numLegs</code> definidos como Albert, blue e 2, respectivamente. <code>Constructors</code> seguem algumas convenções: <ul><li> <code>Constructors</code> são definidos com um nome em maiúsculas para distingui-los de outras funções que não são <code>constructors</code> . </li><li> <code>Constructors</code> usam a palavra <code>this</code> chave <code>this</code> para definir propriedades do objeto que eles criarão. Dentro do <code>constructor</code> , <code>this</code> se refere ao novo objeto que ele criará. </li><li> <code>Constructors</code> definem propriedades e comportamentos em vez de retornar um valor como outras funções podem. </li></ul></section>

## Instructions
<section id="instructions"> Crie um <code>constructor</code> , <code>Dog</code> , com <code>name</code> , <code>color</code> e <code>numLegs</code> definidos como uma string, uma string e um número, respectivamente. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Dog</code> deve ter uma propriedade de <code>name</code> definida como uma string.
    testString: 'assert(typeof (new Dog()).name === "string", "<code>Dog</code> should have a <code>name</code> property set to a string.");'
  - text: <code>Dog</code> deve ter uma propriedade de <code>color</code> definida como uma string.
    testString: 'assert(typeof (new Dog()).color === "string", "<code>Dog</code> should have a <code>color</code> property set to a string.");'
  - text: <code>Dog</code> deve ter uma propriedade <code>numLegs</code> definida para um número.
    testString: 'assert(typeof (new Dog()).numLegs === "number", "<code>Dog</code> should have a <code>numLegs</code> property set to a number.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
