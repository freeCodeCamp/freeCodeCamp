---
id: 587d78ab367417b2b2512af1
title: Add Flex Superpowers to the Tweet Embed
challengeType: 0
videoUrl: ''
localeTitle: Añadir los superpoderes de Flex al visualizador del Tweet
---

## Descripción
<section id="description"> A la derecha se encuentra un listado de tweets insertados que se utilizará como ejemplo práctico. Algunos de los elementos se verían mejor con un diseño diferente. En el último desafío se utilizó la propiedad <code>display: flex</code> . Aquí lo añadirá a algunas partes en el listado de tweets para comenzar a ajustar su posicionamiento. </section>

## Instrucciones
<section id="instructions"> Agregue la propiedad css <code>display: flex</code> a los siguientes elementos. Tenga en cuenta que los selectores css ya están configurados: <code>header</code>, <code>.profile-name</code> y <code>.follow-btn</code> del encabezado, <code>.follow-btn</code> del encabezado, el <code>h3</code> y el <code>h4</code> del encabezado, el <code>footer</code> , y los <code>.stats</code> en la parte inferior de <code>.stats</code> . </section>

## Pruebas
<section id='tests'>

```yml
tests:
  - text: Tu <code>header</code> debe tener la propiedad <code>display</code> configurada para flexionar.
    testString: 'assert($("header").css("display") == "flex", "Tu <code>header</code> debería tener la propiedad <code>display</code> establecida como flex.");'
  - text: Tu <code>footer</code> debe tener la propiedad <code>display</code> configurada para flexionar.
    testString: 'assert($("footer").css("display") == "flex", "Tu <code>footer</code> debería tener la propiedad <code>display</code> establecidad como flex.");'
  - text: Tu <code>h3</code> debe tener la propiedad <code>display</code> configurada para flexionar.
    testString: 'assert($("h3").css("display") == "flex", "Tu <code>h3</code> debería tener la propiedad <code>display</code> establecida como flex.");'
  - text: Tu <code>h4</code> debe tener la propiedad <code>display</code> configurada para flexionar.
    testString: 'assert($("h4").css("display") == "flex", "Tu <code>h4</code> debería tener la propiedad <code>display</code> establecida como flex.");'
  - text: Tu <code>.profile-name</code> debe tener la propiedad <code>display</code> configurada para flexionar.
    testString: 'assert($(".profile-name").css("display") == "flex", "Tu <code>.profile-name</code> debería tener la propiedad <code>display</code> establecida como flex.");'
  - text: Tu <code>.follow-btn</code> debe tener la propiedad <code>display</code> configurada para flexionar.
    testString: 'assert($(".follow-btn").css("display") == "flex", "Tu <code>.follow-btn</code> debería tener la propiedad <code>display</code> establecida como flex.");'
  - text: Tus <code>.stats</code> deben tener la propiedad <code>display</code> configurada para flexionar.
    testString: 'assert($(".stats").css("display") == "flex", "Tus <code>.stats</code> deberían tener la propiedad <code>display</code> establecida como flex.");'

```

</section>

## Semilla del Desafío
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
    <button>Seguir</button>
  </div>
</header>
<div id="inner">
  <p>Conozco muchas personas que está en búsqueda del truco que los ayudará a trabajar inteligentemente. Incluso si trabajas inteligentemente, aún tienes que trabajar duro.</p>
  <span class="date">1:32 PM - 12 Jan 2018</span>
  <hr>
</div>
<footer>
  <div class="stats">
    <div class="Retweets">
      <strong>107</strong> Retweets
    </div>
    <div class="likes">
      <strong>431</strong> Me gusta
    </div>
  </div>
  <div class="cta">
    <button class="share-btn">Compartir</button>
    <button class="retweet-btn">Retweet</button>
    <button class="like-btn">Me gusta</button>
  </div>
</footer>

```

</div>



</section>

## Solución
<section id='solution'>

```js
// solución requerida
```
</section>
