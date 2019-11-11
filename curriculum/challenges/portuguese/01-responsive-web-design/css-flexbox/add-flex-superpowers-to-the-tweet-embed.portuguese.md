---
id: 587d78ab367417b2b2512af1
title: Add Flex Superpowers to the Tweet Embed
challengeType: 0
videoUrl: ''
localeTitle: Adicione Superpotências Flex ao Tweet Incorporado
---

## Description
<section id="description"> À direita está o tweet incorporado que será usado como exemplo prático. Alguns dos elementos ficariam melhores com um layout diferente. O último desafio demonstrou a <code>display: flex</code> . Aqui você a adicionará a vários componentes no tweet incorporado para começar a ajustar seu posicionamento. </section>

## Instructions
<section id="instructions"> Adicione a propriedade CSS <code>display: flex</code> para todos os itens a seguir - observe que os seletores já estão configurados no CSS:
<code>header</code>, <code>.profile-name</code> do cabeçalho, <code>.follow-btn</code> do cabeçalho, <code>h3</code> e <code>h4</code> do cabeçalho, <code>footer</code>, e <code>.stats</code> do rodapé. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu <code>header</code> deve ter uma propriedade de <code>display</code> definida como flexível.
    testString: 'assert($("header").css("display") == "flex", "Your <code>header</code> should have a <code>display</code> property set to flex.");'
  - text: Seu <code>footer</code> deve ter uma propriedade de <code>display</code> configurada para flexionar.
    testString: 'assert($("footer").css("display") == "flex", "Your <code>footer</code> should have a <code>display</code> property set to flex.");'
  - text: Seu <code>h3</code> deve ter uma propriedade de <code>display</code> configurada para flexionar.
    testString: 'assert($("h3").css("display") == "flex", "Your <code>h3</code> should have a <code>display</code> property set to flex.");'
  - text: Seu <code>h4</code> deve ter uma propriedade de <code>display</code> configurada para flexionar.
    testString: 'assert($("h4").css("display") == "flex", "Your <code>h4</code> should have a <code>display</code> property set to flex.");'
  - text: Seu <code>.profile-name</code> deve ter uma propriedade de <code>display</code> configurada como flex.
    testString: 'assert($(".profile-name").css("display") == "flex", "Your <code>.profile-name</code> should have a <code>display</code> property set to flex.");'
  - text: Seu <code>.follow-btn</code> deve ter uma propriedade de <code>display</code> configurada para flexionar.
    testString: 'assert($(".follow-btn").css("display") == "flex", "Your <code>.follow-btn</code> should have a <code>display</code> property set to flex.");'
  - text: Seus <code>.stats</code> devem ter uma propriedade de <code>display</code> configurada para flexionar.
    testString: 'assert($(".stats").css("display") == "flex", "Your <code>.stats</code> should have a <code>display</code> property set to flex.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  body {
    font-family: Arial, sans-serif;
  }
  header {

  }
  header .profile-thumbnail {
    width: 50px;
    height: 50px;
    border-radius: 4px;
  }
  header .profile-name {

    margin-left: 10px;
  }
  header .follow-btn {

    margin: 0 0 0 auto;
  }
  header .follow-btn button {
    border: 0;
    border-radius: 3px;
    padding: 5px;
  }
  header h3, header h4 {

    margin: 0;
  }
  #inner p {
    margin-bottom: 10px;
    font-size: 20px;
  }
  #inner hr {
    margin: 20px 0;
    border-style: solid;
    opacity: 0.1;
  }
  footer {

  }
  footer .stats {

    font-size: 15px;
  }
  footer .stats strong {
    font-size: 18px;
  }
  footer .stats .likes {
    margin-left: 10px;
  }
  footer .cta {
    margin-left: auto;
  }
  footer .cta button {
    border: 0;
    background: transparent;
  }
</style>
<header>
  <img src="https://freecodecamp.s3.amazonaws.com/quincy-twitter-photo.jpg" alt="Quincy Larson's profile picture" class="profile-thumbnail">
  <div class="profile-name">
    <h3>Quincy Larson</h3>
    <h4>@ossia</h4>
  </div>
  <div class="follow-btn">
    <button>Follow</button>
  </div>
</header>
<div id="inner">
  <p>I meet so many people who are in search of that one trick that will help them work smart. Even if you work smart, you still have to work hard.</p>
  <span class="date">1:32 PM - 12 Jan 2018</span>
  <hr>
</div>
<footer>
  <div class="stats">
    <div class="Retweets">
      <strong>107</strong> Retweets
    </div>
    <div class="likes">
      <strong>431</strong> Likes
    </div>
  </div>
  <div class="cta">
    <button class="share-btn">Share</button>
    <button class="retweet-btn">Retweet</button>
    <button class="like-btn">Like</button>
  </div>
</footer>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
