---
id: 587d781c367417b2b2512abf
title: Verringere die Deckkraft eines Elements
challengeType: 0
videoUrl: 'https://scrimba.com/c/c7aKqu4'
forumTopicId: 301055
dashedName: decrease-the-opacity-of-an-element
---

# --description--

Die Eigenschaft `opacity` wird in CSS verwendet, um die Deckkraft, oder anders betrachtet, die Durchsichtigkeit für ein Element anzupassen.

<blockquote>Der Wert 1 ist undurchsichtig und nicht transparent.<br> Der Wert 0.5 ist halb durchsichtig. <br> Der Wert 0 ist völlig durchsichtig.</blockquote>

Der angegebene Wert gilt für das gesamte Element, egal, ob es sich um ein Bild mit etwas Transparenz handelt oder um die Vorder- und Hintergrundfarben eines Textblocks.

# --instructions--

Setze die `opacity` der Ankertags auf 0.7 und wähle sie mit der `links`-Klasse aus.

# --hints--

Dein Code sollte die Eigenschaft `opacity` der Ankertags auf 0.7 setzen, indem du die Klasse `links` auswählst.

```js
assert(
  /\.links\s*{([\s\S]*?;)*\s*opacity\s*:\s*0*\.70*\s*(;[\s\S]*?|\s*)}/.test(
    $('style').text()
  )
);
```

# --seed--

## --seed-contents--

```html
<style>
  h4 {
    text-align: center;
    background-color: rgba(45, 45, 45, 0.1);
    padding: 10px;
    font-size: 27px;
  }
  p {
    text-align: justify;
  }
  .links {
    text-align: left;
    color: black;

  }
  #thumbnail {
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  }
  .fullCard {
    width: 245px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
  .cardContent {
    padding: 10px;
  }
  .cardText {
    margin-bottom: 30px;
  }
</style>
<div class="fullCard" id="thumbnail">
  <div class="cardContent">
    <div class="cardText">
      <h4>Alphabet</h4>
      <hr>
      <p><em>Google was founded by Larry Page and Sergey Brin while they were <u>Ph.D. students</u> at <strong>Stanford University</strong>.</em></p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a><br><br>
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
    background-color: rgba(45, 45, 45, 0.1);
    padding: 10px;
    font-size: 27px;
  }
  p {
    text-align: justify;
  }
  .links {
    text-align: left;
    color: black;
    opacity: 0.7;
  }
  #thumbnail {
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  }
  .fullCard {
    width: 245px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
  .cardContent {
    padding: 10px;
  }
  .cardText {
    margin-bottom: 30px;
  }
</style>
<div class="fullCard" id="thumbnail">
  <div class="cardContent">
    <div class="cardText">
      <h4>Alphabet</h4>
      <hr>
      <p><em>Google was founded by Larry Page and Sergey Brin while they were <u>Ph.D. students</u> at <strong>Stanford University</strong>.</em></p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a><br><br>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
</div>
```
