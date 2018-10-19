---
id: 587d774c367417b2b2512a9c
title: Add a Text Alternative to Images for Visually Impaired Accessibility
challengeType: 0
videoUrl: ''
guideUrl: 'https://portuguese.freecodecamp.org/guide/certificates/add-alt-text-to-an-image-for-accessibility'
localeTitle: Adicionar um texto alternativo a imagens para acessibilidade a deficientes visuais
---

## Description
<section id="description"> É provável que você tenha visto um atributo <code>alt</code> em uma tag <code>img</code> em outros desafios. O texto <code>alt</code> descreve o conteúdo da imagem e fornece um texto alternativo. Isso ajuda no caso de a imagem não carregar ou não poder ser vista por um usuário. Ele também é usado pelos mecanismos de pesquisa para entender o conteúdo de uma imagem para incluí-la nos resultados da pesquisa. Aqui está um exemplo: <code>&lt;img src=&quot;importantLogo.jpeg&quot; alt=&quot;Logo da Companhia&quot;&gt;</code> As pessoas com deficiência visual dependem de leitores de tela para converter conteúdo da Web em uma interface de áudio. Elas não obterão informações se essas forem apresentadas apenas visualmente. No caso de imagens, os leitores de tela podem acessar o atributo <code>alt</code> e ler seu conteúdo para fornecer informações importantes. Um bom texto <code>alt</code> é curto, mas descritivo, e tem como intenção comunicar brevemente o significado da imagem. Você deve sempre incluir um atributo <code>alt</code> em sua imagem. Pela especificação HTML5, isso agora é considerado obrigatório. </section>

## Instructions
<section id="instructions"> Camper Cat é tanto um ninja programador quanto um ninja normal, e está construindo um site para compartilhar seu conhecimento. A foto do perfil que ele quer usar mostra suas habilidades e deve ser apreciada por todos os visitantes do site. Adicione um atributo <code>alt</code> na tag <code>img</code> , que explica que o Camper Cat está praticando karatê. (O atributo <code>src</code> da imagem não é um link para um arquivo de verdade, então você deve ver o texto <code>alt</code> na tela.) </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Sua tag <code>img</code> deve ter um atributo <code>alt</code> e ele não deve estar vazio.
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
