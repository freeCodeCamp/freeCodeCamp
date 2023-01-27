---
id: bad87fee1348bd9aedf08807
title: Importieren einer Google-Schriftart
challengeType: 0
videoUrl: 'https://scrimba.com/c/cM9MRsJ'
forumTopicId: 18200
dashedName: import-a-google-font
---

# --description--

Zusätzlich zur Angabe von bekannten Schriftarten, die auf den meisten Betriebssystemen gefunden werden, können wir auch nicht-standardisierte und benutzerdefinierte Web Schriftarten für die Verwendung auf unserer Website angeben. Es gibt viele Quellen für Web-Schriftarten im Internet. In diesem Beispiel konzentrieren wir uns auf die Google Schriftarten Bibliothek.

Google Fonts ist eine kostenlose Bibliothek von Web-Schriftarten, die du in deinem CSS-Code verwenden kannst, indem du auf die URL der Schriftart verweist.

Also legen wir los und importieren und wenden eine Google-Schriftart an (Beachte, dass du diese Aufgabe überspringen musst, wenn Google in deinem Land blockiert ist).

Um eine Google Schriftart zu importieren, kannst du die URL der Schriftart aus der Google Schriftarten Bibliothek kopieren und sie dann in dein HTML einfügen. Für diese Aufgabe werden wir die `Lobster`-Schriftart importieren. Kopiere dazu den folgenden Code-Snippet in deinen Code-Editor und füge ihn oben ein (vor dem öffnenden `style` Element):

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
```

Jetzt kannst du die `Lobster` Schriftart in deinem CSS verwenden, indem du `Lobster` als FAMILY_NAME verwendest, wie im folgenden Beispiel:

```css
font-family: FAMILY_NAME, GENERIC_NAME;
```

Der GENERIC_NAME ist optional und ist eine Fallback-Schriftart, falls die andere angegebene Schriftart nicht verfügbar ist. Dies wird in der nächsten Aufgabe behandelt.

Bei Familiennamen wird zwischen Groß- und Kleinschreibung unterschieden und sie müssen in Anführungszeichen gesetzt werden, wenn ein Leerzeichen im Namen enthalten ist. Zum Beispiel brauchst du Anführungszeichen, um die `"Open Sans"` Schriftart zu verwenden, aber nicht, um die `Lobster` Schriftart zu verwenden.

# --instructions--

Importiere die `Lobster` Schriftart auf deine Webseite. Verwende dann einen Elementselektor, um `Lobster` als `font-family` für dein `h2`-Element zu setzen.

# --hints--

Du sollst die `Lobster` Schriftart importieren.

```js
assert($('link[href*="googleapis" i]').length);
```

Dein `h2`-Element sollte die Schriftart `Lobster` verwenden.

```js
assert(
  $('h2')
    .css('font-family')
    .match(/lobster/i)
);
```

Du solltest nur einen `h2`-Elementselektor verwenden, um die Schriftart zu ändern.

```js
assert(
  /\s*[^\.]h2\s*\{\s*font-family\s*:\s*('|"|)Lobster\1\s*(,\s*('|"|)[a-z -]+\3\s*)?(;\s*\}|\})/gi.test(
    code
  )
);
```

Dein `p`-Element sollte weiterhin die Schriftart `monospace` verwenden.

```js
assert(
  $('p')
    .css('font-family')
    .match(/monospace/i)
);
```

# --seed--

## --seed-contents--

```html
<style>
  .red-text {
    color: red;
  }

  p {
    font-size: 16px;
    font-family: monospace;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

  <div>
    <p>Things cats love:</p>
    <ul>
      <li>cat nip</li>
      <li>laser pointers</li>
      <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
      <li>flea treatment</li>
      <li>thunder</li>
      <li>other cats</li>
    </ol>
  </div>

  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>
```

# --solutions--

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  p {
    font-size: 16px;
    font-family: monospace;
  }

  h2 {
    font-family: Lobster;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

  <div>
    <p>Things cats love:</p>
    <ul>
      <li>cat nip</li>
      <li>laser pointers</li>
      <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
      <li>flea treatment</li>
      <li>thunder</li>
      <li>other cats</li>
    </ol>
  </div>

  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>
```
