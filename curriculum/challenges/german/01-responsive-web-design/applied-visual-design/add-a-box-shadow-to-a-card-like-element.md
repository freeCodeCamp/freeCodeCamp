---
id: 587d781b367417b2b2512abe
title: Einen Schatten zu einem Karten-ähnlichen Element hinzufügen
challengeType: 0
videoUrl: 'https://scrimba.com/c/cvVZdUd'
forumTopicId: 301031
dashedName: add-a-box-shadow-to-a-card-like-element
---

# --description--

Die Eigenschaft `box-shadow` wendet einen oder mehrere Schatten auf ein Element an.

Die `box-shadow` Eigenschaft nimmt Werte in folgender Reihenfolge an:

<ul>
  <li><code>offset-x</code> (wie weit der Schatten in horizontaler Richtung vom Element verschoben werden kann)</li>
  <li><code>offset-y</code> (wie weit der Schatten in vertikaler Richtung vom Element verschoben werden kann)</li>
  <li><code>blur-radius</code></li>
  <li><code>spread-radius</code></li>
  <li><code>color</code></li>
</ul>

Der `blur-radius` und `spread-radius` sind optional.

Mehrere Box-Schatten können erzeugt werden, wenn die Eigenschaften jedes `box-shadow`-Elements mit Kommas getrennt sind.

Hier ist ein Beispiel, um mit CSS mehrere Schatten mit etwas Unschärfe bei größtenteils transparenten schwarzen Farben zu erzeugen:

```css
box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
```

# --instructions--

Das Element hat jetzt die Id `thumbnail`. Benutze jetzt diesen Selektor und die Beispielwerte für CSS von oben, um einen `box-shadow` auf der Karte zu platzieren.

# --hints--

Dein Code sollte eine `box-shadow`-Eigenschaft zur `thumbnail`-Id hinzufügen.

```js
assert(code.match(/#thumbnail\s*?{\s*?box-shadow/g));
```

Du solltest die angegebenen CSS-Werte für den `box-shadow` verwenden.

```js
assert(
  code.match(
    /box-shadow:\s*?0\s+?10px\s+?20px\s+?rgba\(\s*?0\s*?,\s*?0\s*?,\s*?0\s*?,\s*?0?\.19\)\s*?,\s*?0\s+?6px\s+?6px\s+?rgba\(\s*?0\s*?,\s*?0\s*?,\s*?0\s*?,\s*?0?\.23\)/gi
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
