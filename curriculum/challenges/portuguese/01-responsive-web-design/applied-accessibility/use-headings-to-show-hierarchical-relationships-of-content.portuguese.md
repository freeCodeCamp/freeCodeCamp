---
id: 587d774d367417b2b2512a9e
title: Use Headings to Show Hierarchical Relationships of Content
challengeType: 0
videoUrl: ''
localeTitle: Use Cabeçalhos para Demonstrar as Relações Hierárquicas de Conteúdo
---

## Description
<section id="description">Cabeçalhos (elementos <code>h1</code> a <code>h6</code>) são elementos instrumentais que ajudam a fornecer estrutura e identificação ao seu conteúdo. Leitores de tela podem ser configurados para ler somente os cabeçalhos em uma página para que o usuário obtenha um resumo. Isso significa que é importante que as tags de cabeçalho em sua marcação tenham um significado semântico e se relacionem entre si, e não sejam escolhidas apenas por seus tamanhos. <em>Significado semântico</em> significa que a tag usada ao redor do conteúdo indica o tipo de informação que ela contém. Se você estivesse escrevendo um artigo com uma introdução, um corpo e uma conclusão, não faria muito sentido colocar a conclusão como uma subseção do corpo em seu esboço. Ela deve ser sua própria seção. Da mesma forma, as tags de cabeçalho em uma página da Web precisam estar em ordem e indicar as relações hierárquicas de seu conteúdo. Cabeçalhos com classificação igual (ou superior) iniciam novas seções implícitas, cabeçalhos com classificações inferiores iniciam subseções no cabeçalho anterior. Por exemplo, uma página com um elemento <code>h2</code> seguido por várias subseções identificadas com tags <code>h4</code> confundiria um usuário com leitor de tela. Com seis opções, é tentador usar uma tag porque ela fica melhor em um navegador, mas você pode usar CSS para editar o tamanho relativo. Um último ponto, cada página deve ter sempre um (e apenas um) elemento <code>h1</code>, que é o assunto principal do seu conteúdo. Esse e os outros cabeçalhos são usados em parte pelos mecanismos de pesquisa para entender o tópico da página.</section>

## Instructions
<section id="instructions">Camper Cat quer uma página em seu site dedicada a se tornar um ninja. Ajude-o a corrigir os cabeçalhos para que sua marcação dê significado semântico ao conteúdo e mostre as relações pai-filho adequadas de suas seções. Altere todas as tags <code>h5</code> para o nível de cabeçalho adequado para indicar que elas são subseções dos cabeçalhos <code>h2</code>.</section>

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
<h1>Como Se Tornar um Ninja</h1>
<main>
  <h2>Aprenda a Arte de Se Mover Sorrateiramente</h2>
  <h5>Como Se Esconder à Vista</h5>
  <h5>Como Escalar um Muro</h5>

  <h2>Aprenda a Arte da Batalha</h2>
  <h5>Como Fortalecer seu Corpo</h5>
  <h5>Como Lutar como um Ninja</h5>

  <h2>Aprenda a Arte de Viver com Honra</h2>
  <h5>Como Respirar Adequadamente</h5>
  <h5>Como Simplificar sua Vida</h5>
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
