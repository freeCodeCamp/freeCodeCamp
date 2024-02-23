---
id: 587d781b367417b2b2512abd
title: Passe die Größe einer Überschrift an vs. die eines Absatzes
challengeType: 0
videoUrl: 'https://scrimba.com/c/c3bRPTz'
forumTopicId: 301037
dashedName: adjust-the-size-of-a-heading-element-versus-a-paragraph-element
---

# --description--

Die Schriftgröße von Überschriftelementen (`h1` bis `h6`) sollte im Allgemeinen größer sein als die Schriftgröße von Absatz-Tags. Dadurch wird es für den Benutzer einfacher, das Layout visuell nachzuvollziehen und die Wichtigkeit der einzelnen Elemente auf der Seite zu verstehen. Verwende die Eigenschaft `font-size`, um die Größe des Textes in einem Element anzupassen.

# --instructions--

Um die Überschrift deutlich größer als den Absatz zu machen, ändere die `font-size` des Elements `h4` auf 27 Pixel.

# --hints--

Dein Code sollte dem `h4` Element, das auf 27 Pixel gesetzt ist, die Eigenschaft `font-size` geben.

```js
assert($('h4').css('font-size') == '27px');
```

# --seed--

## --seed-contents--

```html
<style>
  h4 {
    text-align: center;
    background-color: rgba(45, 45, 45, 0.1);
    padding: 10px;

  }
  p {
    text-align: justify;
  }
  .links {
    text-align: left;
    color: black;
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
<div class="fullCard">
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
<div class="fullCard">
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

