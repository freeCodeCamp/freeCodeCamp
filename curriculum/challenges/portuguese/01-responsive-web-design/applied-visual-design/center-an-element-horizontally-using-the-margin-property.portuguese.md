---
id: 587d78a3367417b2b2512ad0
title: Center an Element Horizontally Using the margin Property
challengeType: 0
videoUrl: ''
localeTitle: Centralizar um elemento horizontalmente usando a propriedade de margem
---

## Description
<section id="description"> Outra técnica de posicionamento é centralizar um elemento de bloco horizontalmente. Uma maneira de fazer isso é definir sua <code>margin</code> para um valor de auto. Este método também funciona para imagens. As imagens são elementos embutidos por padrão, mas podem ser alteradas para elementos de bloco quando você define a propriedade de <code>display</code> para bloquear. </section>

## Instructions
<section id="instructions"> Centralize o <code>div</code> na página adicionando uma propriedade de <code>margin</code> com um valor de auto. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O <code>div</code> deve ter uma <code>margin</code> definida como auto.
    testString: 'assert(code.match(/margin:\s*?auto;/g), "The <code>div</code> should have a <code>margin</code> set to auto.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  div {
    background-color: blue;
    height: 100px;
    width: 100px;

  }
</style>
<div></div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
