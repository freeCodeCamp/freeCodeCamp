---
id: 587d781a367417b2b2512ab9
title: Benutze das em-Tag, um Text kursiv zu setzen
challengeType: 0
videoUrl: 'https://scrimba.com/c/cVJRBtp'
forumTopicId: 301078
dashedName: use-the-em-tag-to-italicize-text
---

# --description--

Um Text hervorzuheben, kannst du das `em`-Tag verwenden. Dies stellt Text kursiv dar, indem der Browser die CSS-Regel `font-style: italic;` auf das Element anwenden.

# --instructions--

Umschließe den Inhalt des Absatz-Tags mit einem `em`-Tag, um ihn zu betonen.

# --hints--

Dein Code sollte dem Markup ein `em`-Tag hinzufügen.

```js
assert($('em').length == 1);
```

Das `em`-Tag sollte den Inhalt des `p`-Tags umfassen, aber nicht das `p`-Tag selbst.

```js
assert($('p').children().length == 1 && $('em').children().length == 2);
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
      <h4>Google</h4>
      <p>Google was founded by Larry Page and Sergey Brin while they were <u>Ph.D. students</u> at <strong>Stanford University</strong>.</p>
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
      <h4>Google</h4>
      <p><em>Google was founded by Larry Page and Sergey Brin while they were <u>Ph.D. students</u> at <strong>Stanford University</strong>.</em></p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a><br><br>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
</div>
```
