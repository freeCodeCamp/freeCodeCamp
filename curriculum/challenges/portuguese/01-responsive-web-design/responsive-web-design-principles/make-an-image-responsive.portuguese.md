---
id: 587d78b1367417b2b2512b09
title: Make an Image Responsive
challengeType: 0
videoUrl: ''
localeTitle: Faça uma imagem responsiva
---

## Description
<section id="description"> Fazer imagens responsivas com CSS é realmente muito simples. Em vez de aplicar uma largura absoluta a um elemento: <code>img { width: 720px; }</code> Você pode usar: <blockquote> img { <br> max-width: 100%; <br> display: bloco; <br> altura: auto; <br> } </blockquote> A propriedade <code>max-width</code> de 100% dimensiona a imagem para se ajustar à largura do contêiner, mas a imagem não se estende mais do que a largura original. Definir a propriedade de <code>display</code> para bloquear altera a imagem de um elemento in-line (seu padrão) para um elemento de bloco em sua própria linha. A propriedade <code>height</code> do auto mantém a proporção original da imagem. </section>

## Instructions
<section id="instructions"> Adicione regras de estilo para a tag <code>img</code> para torná-lo responsivo ao tamanho de seu contêiner. Ele deve exibir como um elemento de nível de bloco, ele deve caber toda a largura de seu contêiner sem esticar e deve manter sua proporção original. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Sua tag <code>img</code> deve ter uma <code>max-width</code> definida como 100%.
    testString: 'assert(code.match(/max-width:\s*?100%;/g), "Your <code>img</code> tag should have a <code>max-width</code> set to 100%.");'
  - text: Sua tag <code>img</code> deve ter um conjunto de <code>display</code> para bloquear.
    testString: 'assert($("img").css("display") == "block", "Your <code>img</code> tag should have a <code>display</code> set to block.");'
  - text: Sua tag <code>img</code> deve ter uma <code>height</code> definida como automática.
    testString: 'assert(code.match(/height:\s*?auto;/g), "Your <code>img</code> tag should have a <code>height</code> set to auto.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>

</style>

<img src="https://s3.amazonaws.com/freecodecamp/FCCStickerPack.jpg" alt="freeCodeCamp stickers set">

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
