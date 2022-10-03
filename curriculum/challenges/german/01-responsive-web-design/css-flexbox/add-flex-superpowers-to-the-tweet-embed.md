---
id: 587d78ab367417b2b2512af1
title: Flex-Superkräfte zur Tweet-Einbettung hinzufügen
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/c9W7MhM'
forumTopicId: 301100
dashedName: add-flex-superpowers-to-the-tweet-embed
---

# --description--

Auf der rechten Seite ist der Tweet eingebettet, der als praktisches Beispiel verwendet werden soll. Einige der Elemente würden mit einem anderen Layout besser aussehen. Die letzte Aufgabe zeigte `display: flex`. Hier fügst du sie zu verschiedenen Komponenten im eingebetteten Tweet hinzu, um ihre Positionierung anzupassen.

# --instructions--

Füge die CSS-Eigenschaft `display: flex` zu allen folgenden Elementen hinzu - beachte, dass die Selektoren bereits im CSS definiert sind:

Die Kopfzeile `header`, die Kopfzeile `.profile-name`, die Kopfzeile `.follow-btn`, die Kopfzeile `h3` und `h4`, der `footer` und die Fußzeile `.stats`.

# --hints--

Dein `.follow-btn` sollte auf der Seite gerendert werden. Achte darauf, dass du alle Erweiterungen wie Werbeblocker deaktivierst.

```js
assert($('.follow-btn').length > 0 && $('.follow-btn').css('display') !== 'none');
```

Dein `header` sollte eine Eigenschaft `display` besitzen, die auf `flex` gesetzt ist.

```js
assert($('header').css('display') == 'flex');
```

Dein `footer` sollte die Eigenschaft `display` besitzen, die auf `flex` gesetzt ist.

```js
assert($('footer').css('display') == 'flex');
```

Dein `h3` sollte eine Eigenschaft `display` besitzen, die auf `flex` gesetzt ist.

```js
assert($('h3').css('display') == 'flex');
```

Dein `h4` sollte eine Eigenschaft `display` besitzen, die auf `flex` gesetzt ist.

```js
assert($('h4').css('display') == 'flex');
```

Dein `.profile-name` sollte eine Eigenschaft `display` besitzen, die auf `flex` gesetzt ist.

```js
assert($('.profile-name').css('display') == 'flex');
```

Dein `.follow-btn` sollte eine Eigenschaft `display` haben, die auf `flex` gesetzt ist.

```js
assert($('.follow-btn').css('display') == 'flex');
```

Dein `.stats` sollte eine Eigenschaft `display` besitzen, die auf `flex` gesetzt ist.

```js
assert($('.stats').css('display') == 'flex');
```

# --seed--

## --seed-contents--

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

# --solutions--

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
