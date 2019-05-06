---
id: 587d774c367417b2b2512a9c
title: Add a Text Alternative to Images for Visually Impaired Accessibility
challengeType: 0
videoUrl: ''
localeTitle: Adicionar uma alternativa de texto a imagens para acessibilidade com deficiência visual
---

## Description
<section id="description"> É provável que você já tenha visto um atributo <code>alt</code> em uma tag <code>img</code> em outros desafios. <code>Alt</code> ou "texto alternativo" descreve o conteúdo de uma imagem e fornece uma alternativa de texto caso a imagem não possa ser carregada ou visualizada por um usuário. Ele também é usado pelos mecanismos de pesquisa para entender o que uma imagem contém para incluí-la nos resultados da pesquisa. Veja um exemplo: <code>&lt;img src=&quot;importantLogo.jpeg&quot; alt=&quot;Company logo&quot;&gt;</code> Pessoas com deficiência visual utilizam leitores de tela para converter o conteúdo da Web em uma interface de áudio. Para imagens, esses leitores fazem uso do atributo <code>alt</code> para ler seu conteúdo e fornecer informações importantes (que não estariam disponíveis caso fossem apresentadas apenas visualmente) para o usuário. Um bom texto <code>alt</code> é curto, mas descritivo, e destina-se a transmitir brevemente o significado da imagem. Você deve sempre incluir um atributo <code>alt</code> em sua imagem. Por especificação HTML5, esse atributo é considerado obrigatório. </section>

## Instructions
<section id="instructions"> O Camper Cat é tanto um ninja codificador quanto um ninja, e está construindo um site para compartilhar seu conhecimento. A foto do perfil que ele quer usar mostra suas habilidades e deve ser apreciada por todos os visitantes do site. Adicione um atributo <code>alt</code> na tag <code>img</code>, que explica que o Camper Cat está praticando karatê. (O atributo <code>src</code> da imagem não tem um link para um arquivo real, então você deve ver o texto <code>alt</code> na tela.) </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Sua tag <code>img</code> deve ter um atributo <code>alt</code> e não deve estar vazia.
    testString: 'assert($("img").attr("alt"), "Your <code>img</code> tag should have an <code>alt</code> attribute, and it should not be empty.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<img src="doingKarateWow.jpeg">

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
