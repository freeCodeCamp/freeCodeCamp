---
id: 5dfb5ecbeacea3f48c6300b1
title: Schritt 21
challengeType: 0
dashedName: step-21
---

# --description--

Verwende (`li`)-Listen-Elemente, um Elemente in einer Liste zu erstellen. Hier ist ein Beispiel für Listen-Elemente in einer unsortierten Liste:

```html
<ul>
  <li>milk</li>
  <li>cheese</li>
</ul>
```

Bette innerhalb des `ul`-Elements drei Listen-Elemente ein, um drei Dinge anzuzeigen, die Katzen lieben:

`cat nip` `laser pointers` `lasagna`

# --hints--

Du solltest drei `li`-Elemente haben. Jedes `li`-Element sollte ein eigenes öffnendes und schließendes Tag besitzen.

```js
assert($('li').length === 3 && code.match(/<\/li\>/g).length === 3);
```

Du solltest drei `li`-Elemente mit dem Text `cat nip`, `laser pointers` und `lasagna` in beliebiger Reihenfolge haben. Du hast entweder etwas Text weggelassen oder einen Tippfehler gemacht.

```js
assert.deepStrictEqual(
  [...document.querySelectorAll('li')]
    .map((item) => item.innerText.toLowerCase())
    .sort((a, b) => a.localeCompare(b)),
  ['cat nip', 'lasagna', 'laser pointers']
);
```

Die drei `li`-Elemente sollten sich zwischen dem öffnenden und schließenden Tag des `ul`-Elements befinden.

```js
assert(
  [...document.querySelectorAll('li')].filter(
    (item) => item.parentNode.nodeName === 'UL'
  ).length === 3
);
```

# --seed--

## --seed-contents--

```html
<html>
  <body>
    <main>
      <h1>CatPhotoApp</h1>
      <section>
        <h2>Cat Photos</h2>
        <!-- TODO: Add link to cat photos -->
        <p>See more <a target="_blank" href="https://freecatphotoapp.com">cat photos</a> in our gallery.</p>
        <a href="https://freecatphotoapp.com"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>
      </section>
      <section>
        <h2>Cat Lists</h2>
        <h3>Things cats love:</h3>
--fcc-editable-region--
        <ul>

        </ul>
--fcc-editable-region--
      </section>
    </main>
  </body>
</html>
```

