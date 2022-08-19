---
id: bad87fee1348bd9aedf08830
title: Platzhaltertext zu einem Textfeld hinzufügen
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cKdJDhg'
forumTopicId: 16647
dashedName: add-placeholder-text-to-a-text-field
---

# --description--

Platzhaltertext ist das, was in deinem `input`-Element angezeigt wird, bevor dein Benutzer etwas eingegeben hat.

Du kannst Platzhaltertext wie folgt erstellen:

```html
<input type="text" placeholder="this is placeholder text">
```

**Hinweis:** Denke daran, dass `input`-Elemente selbstschließend sind.

# --instructions--

Setze den `placeholder`-Wert deines Text-`input` auf "cat photo URL".

# --hints--

Du solltest ein `placeholder`-Attribut zu dem bestehenden Text-`input`-Element hinzufügen.

```js
assert($('input[placeholder]').length > 0);
```

Du solltest den Wert deines `placeholder`-Attributs auf `cat photo URL` setzen.

```js
assert(
  $('input') &&
    $('input').attr('placeholder') &&
    $('input')
      .attr('placeholder')
      .match(/cat\s+photo\s+URL/gi)
);
```

Das fertige `input`-Element sollte kein schließendes Tag besitzen.

```js
assert(!code.match(/<input.*\/?>.*<\/input>/gi));
```

Das fertige `input`-Element sollte eine gültige Syntax enthalten.

```js
assert($('input[type=text]').length > 0);
```

# --seed--

## --seed-contents--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

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
  <input type="text">
</main>
```

# --solutions--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

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
  <input type="text" placeholder="cat photo URL">
</main>
```
