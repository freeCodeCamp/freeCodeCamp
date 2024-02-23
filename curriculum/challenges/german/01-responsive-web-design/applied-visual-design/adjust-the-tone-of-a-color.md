---
id: 587d78a4367417b2b2512ad5
title: Die Sättigung und Helligkeit einer Farbe anpassen
challengeType: 0
videoUrl: 'https://scrimba.com/c/cEDJvT7'
forumTopicId: 301038
dashedName: adjust-the-tone-of-a-color
---

# --description--

Die `hsl()`-Option in CSS macht es einfach, den Ton einer Farbe anzupassen. Das Mischen von Weiß mit einem reinen Farbton erzeugt einen helleren Ton dieser Farbe, und das Hinzufügen von Schwarz erzeugt einen dunkleren Ton. Alternativ kann ein Ton durch das Hinzufügen von Grau, oder durch Aufhellen bzw. Abdunkeln erzeugt werden. Wie bereits erwähnt, stehen die Buchstaben "s" und "l" in `hsl()` für "saturation" (dt. Sättigung) und "lightness" (dt. Helligkeit). Der Prozentsatz der Sättigung ändert den Grauanteil und der Prozentsatz der Helligkeit, wie viel Weiß oder Schwarz in der Farbe enthalten ist. Dies ist nützlich, wenn du einen Grundton hast, der dir gefällt, aber verschiedene Variationen davon benötigst.

# --instructions--

Alle Elemente haben eine Standardfarbe `background-color` von `transparent`. Unser `nav`-Element scheint derzeit eine Hintergrundfarbe von `cyan` zu haben, weil das Element dahinter eine `background-color` von `cyan` hat. Füge eine `background-color` zu dem `nav`-Element hinzu, sodass es den gleichen `cyan`-Ton hat, allerdings mit `80%` Sättigung und `25%` Helligkeit, um es alternativ abzutönen.

# --hints--

Das `nav`-Element sollte eine `background-color` des angepassten Cyantons haben, wobei die Eigenschaft `hsl()` verwendet wird.

```js
// Computed style of hsl(180, 80%, 25%) results in rgb(13,115,115)
assert.equal(
  new __helpers.CSSHelp(document).getStyle('nav').getPropVal('background-color', true), 
  'rgb(13,115,115)'
)
```

# --seed--

## --seed-contents--

```html
<style>
  header {
    background-color: hsl(180, 90%, 35%);
    color: #FFFFFF;
  }

  nav {

  }

  h1 {
    text-indent: 10px;
    padding-top: 10px;
  }

  nav ul {
    margin: 0px;
    padding: 5px 0px 5px 30px;
  }

  nav li {
    display: inline;
    margin-right: 20px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
</style>

<header>
  <h1>Cooking with FCC!</h1>
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Classes</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</header>
```

# --solutions--

```html
<style>
  header {
    background-color: hsl(180, 90%, 35%);
    color: #FFFFFF;
  }

  nav {
    background-color: hsl(180, 80%, 25%);
  }

  h1 {
    text-indent: 10px;
    padding-top: 10px;
  }

  nav ul {
    margin: 0px;
    padding: 5px 0px 5px 30px;
  }

  nav li {
    display: inline;
    margin-right: 20px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
</style>
<header>
  <h1>Cooking with FCC!</h1>
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Classes</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</header>
```
