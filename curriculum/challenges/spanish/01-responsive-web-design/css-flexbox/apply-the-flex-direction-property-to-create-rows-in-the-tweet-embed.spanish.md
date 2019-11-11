---
id: 587d78ab367417b2b2512af3
title: Apply the flex-direction Property to Create Rows in the Tweet Embed
challengeType: 0
videoUrl: ''
localeTitle: Aplique la propiedad de dirección flexible para crear filas en el Tweet Insertar
---

## Description
<section id="description"> El <code>header</code> y el <code>footer</code> de <code>footer</code> en el ejemplo de inserción de tweets tienen elementos secundarios que podrían organizarse como filas usando la propiedad de <code>flex-direction</code> . Esto le dice a CSS que alinee a los niños horizontalmente. </section>

## Instructions
<section id="instructions"> Agregue la propiedad CSS <code>flex-direction</code> al <code>header</code> y al <code>footer</code> y establezca el valor en fila. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El <code>header</code> debe tener una propiedad de <code>flex-direction</code> establecida en fila.
    testString: 'assert(code.match(/header\s*?{[^}]*?flex-direction:\s*?row;/g), "The <code>header</code> should have a <code>flex-direction</code> property set to row.");'
  - text: El <code>footer</code> debe tener una propiedad de <code>flex-direction</code> configurada en fila.
    testString: 'assert(code.match(/footer\s*?{[^}]*?flex-direction:\s*?row;/g), "The <code>footer</code> should have a <code>flex-direction</code> property set to row.");'

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
    display: flex;

  }
  header .profile-thumbnail {
    width: 50px;
    height: 50px;
    border-radius: 4px;
  }
  header .profile-name {
    display: flex;
    margin-left: 10px;
  }
  header .follow-btn {
    display: flex;
    margin: 0 0 0 auto;
  }
  header .follow-btn button {
    border: 0;
    border-radius: 3px;
    padding: 5px;
  }
  header h3, header h4 {
    display: flex;
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
    display: flex;

  }
  footer .stats {
    display: flex;
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
