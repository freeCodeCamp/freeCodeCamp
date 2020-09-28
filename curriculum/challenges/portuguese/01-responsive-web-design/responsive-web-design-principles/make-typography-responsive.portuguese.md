---
id: 587d78b1367417b2b2512b0c
title: Make Typography Responsive
challengeType: 0
videoUrl: ''
localeTitle: Faça tipografia responsiva
---

## Description
<section id="description"> Em vez de usar <code>em</code> ou <code>px</code> para dimensionar texto, você pode usar unidades de viewport para tipografia responsiva. As unidades de viewport, como porcentagens, são unidades relativas, mas são baseadas em itens diferentes. As unidades de viewport são relativas às dimensões da janela de visualização (largura ou altura) de um dispositivo e as porcentagens são relativas ao tamanho do elemento de contêiner pai. As quatro unidades de viewport diferentes são: <ul><li> <code>vw: 10vw</code> seria 10% da largura da janela de visualização. </li><li> <code>vh: 3vh</code> seria 3% da altura da viewport. </li><li> <code>vmin: 70vmin</code> seria 70% da dimensão menor da viewport (altura vs. largura). </li><li> <code>vmax: 100vmax</code> seria 100% da dimensão maior da viewport (altura vs. largura). </li></ul></section>

## Instructions
<section id="instructions"> Defina a <code>width</code> da tag <code>h2</code> para 80% da largura da viewport e a <code>width</code> do parágrafo como 75% da dimensão menor da viewport. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Sua tag <code>h2</code> deve ter uma <code>width</code> de 80vw.
    testString: 'assert(code.match(/h2\s*?{\s*?width:\s*?80vw;\s*?}/g), "Your <code>h2</code> tag should have a <code>width</code> of 80vw.");'
  - text: Sua tag <code>p</code> deve ter uma <code>width</code> de 75vmin.
    testString: 'assert(code.match(/p\s*?{\s*?width:\s*?75vmin;\s*?}/g), "Your <code>p</code> tag should have a <code>width</code> of 75vmin.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>

</style>

<h2>Importantus Ipsum</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempus massa. Aenean erat nisl, gravida vel vestibulum cursus, interdum sit amet lectus. Sed sit amet quam nibh. Suspendisse quis tincidunt nulla. In hac habitasse platea dictumst. Ut sit amet pretium nisl. Vivamus vel mi sem. Aenean sit amet consectetur sem. Suspendisse pretium, purus et gravida consequat, nunc ligula ultricies diam, at aliquet velit libero a dui.</p>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
