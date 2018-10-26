---
id: 587d774d367417b2b2512a9e
title: Use Headings to Show Hierarchical Relationships of Content
challengeType: 0
videoUrl: ''
localeTitle: Use títulos para mostrar relações hierárquicas de conteúdo
---

## Description
<section id="description"> Cabeçalhos ( <code>h1</code> a <code>h6</code> elementos) são marcas de trabalho que ajudam a fornecer estrutura e rotulagem ao seu conteúdo. Os leitores de tela podem ser configurados para ler somente os cabeçalhos em uma página para que o usuário obtenha um resumo. Isso significa que é importante que as tags de título em sua marcação tenham um significado semântico e se relacionem entre si, e não sejam selecionadas apenas para seus valores de tamanho. <em>Significado semântico significa</em> que a tag usada ao redor do conteúdo indica o tipo de informação que ela contém. Se você estivesse escrevendo um artigo com uma introdução, um corpo e uma conclusão, não faria muito sentido colocar a conclusão como uma subseção do corpo em seu esboço. Deve ser sua própria seção. Da mesma forma, as tags de título em uma página da Web precisam estar em ordem e indicar os relacionamentos hierárquicos de seu conteúdo. Cabeçalhos com classificação igual (ou superior) iniciam novas seções implícitas, cabeçalhos com subseções de início de classificação mais baixas da anterior. Por exemplo, uma página com um elemento <code>h2</code> seguido por várias subseções rotuladas com tags <code>h4</code> confundiria um usuário leitor de tela. Com seis opções, parece uma boa idéia usar uma tag porque ela fica melhor em um navegador, mas você pode usar CSS para editar o tamanho relativo. Um último ponto, cada página deve ter sempre um (e apenas um) elemento <code>h1</code> , que é o assunto principal do seu conteúdo. Este e os outros cabeçalhos são usados ​​em parte pelos mecanismos de pesquisa para entender o tópico da página. </section>

## Instructions
<section id="instructions"> Camper Cat quer uma página em seu site dedicada a se tornar um ninja. Ajude-o a corrigir os títulos para que sua marcação dê significado semântico ao conteúdo e mostre os relacionamentos pai-filho apropriados de suas seções. Altere todas as tags <code>h5</code> para o nível de cabeçalho adequado para indicar que elas são subseções das <code>h2</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu código deve ter seis tags <code>h3</code> .
    testString: 'assert($("h3").length === 6, "Your code should have six <code>h3</code> tags.");'
  - text: Seu código não deve ter tags <code>h5</code> .
    testString: 'assert($("h5").length === 0, "Your code should not have any <code>h5</code> tags.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h1>How to Become a Ninja</h1>
<main>
  <h2>Learn the Art of Moving Stealthily</h2>
  <h5>How to Hide in Plain Sight</h5>
  <h5>How to Climb a Wall</h5>

  <h2>Learn the Art of Battle</h2>
  <h5>How to Strengthen your Body</h5>
  <h5>How to Fight like a Ninja</h5>

  <h2>Learn the Art of Living with Honor</h2>
  <h5>How to Breathe Properly</h5>
  <h5>How to Simplify your Life</h5>
</main>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
