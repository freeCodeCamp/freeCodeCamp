---
id: 587d781b367417b2b2512abc
title: Die Hintergrundfarbe eines Textes anpassen
challengeType: 0
videoUrl: 'https://scrimba.com/c/cEDqwA6'
forumTopicId: 301032
dashedName: adjust-the-background-color-property-of-text
---

# --description--

Statt den gesamten Hintergrund oder die Farbe des Textes anzupassen, um den Vordergrund gut lesbar zu machen, kannst du mit der `background-color`-Eigenschaft dem entsprechenden Element eine Hintergrundfarbe hinzufügen, um den Text hervorzuheben. Diese Aufgabe verwendet `rgba()`- statt `hex`-Codes oder normalem `rgb()`.

<blockquote>rgba steht für:<br>r = rot<br>g = grün<br>b = blau<br>a = Alpha/Deckkraft</blockquote>

Die RGB-Werte können zwischen 0 und 255 liegen. Der Alphawert kann zwischen 1 und 0 liegen, wobei 1 für voll deckend und 0 für völlig transparent steht. `rgba()` eignet sich für diesen Fall gut, da es dir erlaubt, die Deckkraft anzupassen. Das bedeutet, dass du den Hintergrund nicht komplett überdecken musst.

Für diese Aufgabe verwendest du `background-color: rgba(45, 45, 45, 0.1)`. Es erzeugt eine dunkelgraue Farbe, die aufgrund der geringen Deckkraft von 0.1 fast transparent ist.

# --instructions--

Um den Text mehr hervorzuheben, passe die `background-color` des `h4`-Elements an den angegebenen `rgba()`-Wert an.

Entferne ebenfalls bei dem `h4`-Element die `height`-Eigenschaft und füge ein `padding` von 10px hinzu.

# --hints--

Dein Code sollte dem `h4`-Element die Eigenschaft `background-color` mit den Werten `rgba(45, 45, 45, 0.1)` hinzufügen.

```js
assert(
  /(background-color|background):rgba\(45,45,45,0?\.1\)(;?}|;)/gi.test(
    code.replace(/\s/g, '')
  )
);
```

Dein Code sollte dem `h4`-Element die Eigenschaft `padding` mit einem Wert von 10px hinzufügen.

```js
assert(
  $('h4').css('padding-top') == '10px' &&
    $('h4').css('padding-right') == '10px' &&
    $('h4').css('padding-bottom') == '10px' &&
    $('h4').css('padding-left') == '10px'
);
```

Die `height`-Eigenschaft des `h4`-Elements sollte entfernt werden.

```js
assert(!($('h4').css('height') == '25px'));
```

# --seed--

## --seed-contents--

```html
<style>
  h4 {
    text-align: center;
    height: 25px;


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
    padding: 10px;
    background-color: rgba(45, 45, 45, 0.1);
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
