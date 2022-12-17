---
id: bad87fee1348bd9aedf08805
title: Verwende CSS-Selektoren um Elemente zu stylen
challengeType: 0
videoUrl: 'https://scrimba.com/c/cJKMBT2'
forumTopicId: 18349
dashedName: use-css-selectors-to-style-elements
---

# --description--

In CSS gibt es hunderte CSS-Eigenschaften, die du verwenden kannst, um das Aussehen eines Elements auf deiner Seite zu ändern.

Als du `<h2 style="color: red;">CatPhotoApp</h2>` eingegeben hast, verändertest du das Styling dieses bestimmten `h2`-Elements mit Inline-CSS, was für Cascading Style Sheets (deutsch etwa: gestufte Gestaltungsbögen) steht.

Das ist eine Art, das Aussehen eines Elements zu definieren, aber es gibt einen besseren Weg, um CSS anzuwenden.

Erstelle am Anfang deines Codes einen `style` Block wie diesen:

```html
<style>
</style>
```

Innerhalb dieses Style-Blocks kannst du einen <dfn>CSS-Selektor</dfn> für alle `h2`-Elemente erstellen. Wenn du zum Beispiel möchtest, dass alle `h2`-Elemente rot sind, würdest du eine Stilregel hinzufügen, die wie folgt aussieht:

```html
<style>
  h2 {
    color: red;
  }
</style>
```

Dabei ist es wichtig, die Stilregeln eines Elements mit einer öffnenden und einer schließenden geschweiften Klammer (`{` und `}`) zu umschließen. Du musst auch sicherstellen, dass sich die Stildefinitionen deines Elements zwischen einem öffnenden und einem schließenden Style-Tag befinden. Zu guter Letzt gib acht, dass jede Stilregel mit einem Semikolon endet.

# --instructions--

Lösche das Style-Attribut deines `h2`-Elements und erstelle stattdessen einen `style`-Block. Füge das nötige CSS hinzu, um `h2`-Elemente blau zu färben.

# --hints--

Das `style`-Attribut sollte von deinem `h2`-Element entfernt werden.

```js
assert(!$('h2').attr('style'));
```

Du solltest ein `style`-Element erstellen.

```js
assert($('style') && $('style').length >= 1);
```

Dein `h2`-Element sollte blau sein.

```js
assert($('h2').css('color') === 'rgb(0, 0, 255)');
```

Deine Stylesheet-Deklaration für `h2` sollte gültig sein, inklusive eines Semikolons und einer schließenden geschweiften Klammer.

```js
assert(code.match(/h2\s*\{\s*color\s*:.*;\s*\}/g));
```

Alle deine `style`-Elemente sollten gültig sein und schließende Tags haben.

```js
assert(
  code.match(/<\/style>/g) &&
    code.match(/<\/style>/g).length ===
      (
        code.match(
          /<style((\s)*((type|media|scoped|title|disabled)="[^"]*")?(\s)*)*>/g
        ) || []
      ).length
);
```

# --seed--

## --seed-contents--

```html
<h2 style="color: red;">CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

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
<style>
  h2 {
    color: blue;
  }
</style>
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

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
