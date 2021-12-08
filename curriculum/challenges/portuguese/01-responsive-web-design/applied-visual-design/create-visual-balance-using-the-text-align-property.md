---
id: 587d7791367417b2b2512ab3
title: Criar equilíbrio visual usando a propriedade text-align
challengeType: 0
videoUrl: 'https://scrimba.com/c/c3b4EAp'
forumTopicId: 301053
dashedName: create-visual-balance-using-the-text-align-property
---

# --description--

Esta seção do currículo se concentra no Design Visual Aplicado. O primeiro grupo de desafios baseia-se no layout de cartão fornecido para mostrar uma série de princípios básicos.

O texto costuma ser uma grande parte do conteúdo na web. O CSS possui várias opções de como alinhá-lo com a propriedade `text-align`.

`text-align: justify;` espaça o texto para que cada linha tenha a mesma largura.

`text-align: center;` centraliza o texto

`text-align: right;` alinha o texto à direita

E `text-align: left;` (o padrão) alinha o texto à esquerda.

# --instructions--

Alinhe o texto da tag `h4`, que diz "Google", ao centro. Em seguida, justifique (justify) a tag de parágrafo que contém informações sobre como o Google foi fundado.

# --hints--

Você deve usar a propriedade text-align com o valor de `center` na tag `h4`.

```js
assert($('h4').css('text-align') == 'center');
```

Você deve usar a propriedade text-align com o valor de `justify` na tag `p`.

```js
assert($('p').css('text-align') == 'justify');
```

# --seed--

## --seed-contents--

```html
<style>
  h4 {

  }
  p {

  }
  .links {
    margin-right: 20px;

  }
  .fullCard {
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
  .cardContent {
    padding: 10px;
  }
</style>
<div class="fullCard">
  <div class="cardContent">
    <div class="cardText">
      <h4>Google</h4>
      <p>Google was founded by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University.</p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
</div>
```

# --solutions--

```html
<style>
  h4 {
    text-align: center;
  }
  p {
    text-align: justify;
  }
  .links {
    margin-right: 20px;

  }
  .fullCard {
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
  .cardContent {
    padding: 10px;
  }
</style>
<div class="fullCard">
  <div class="cardContent">
    <div class="cardText">
      <h4>Google</h4>
      <p>Google was founded by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University.</p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
</div>
```
