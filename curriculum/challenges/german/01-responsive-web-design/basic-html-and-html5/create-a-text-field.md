---
id: bad87fee1348bd9aedf08829
title: Ein Textfeld erstellen
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/c2EVnf6'
forumTopicId: 16823
dashedName: create-a-text-field
---

# --description--

Lass uns nun ein Webformular erstellen.

`input` Elemente sind ein bequemer Weg, um Eingaben von deinem Benutzer zu erhalten.

Du kannst eine Texteingabe wie folgt erstellen:

```html
<input type="text">
```

Beachte, dass `input`-Elemente selbstschließend sind.

# --instructions--

Erstelle ein `input`-Element vom Typ (type) `text` unterhalb deiner Listen.

# --hints--

Deine App sollte ein `input`-Element vom Typ `text` haben.

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
  <form>
    <input type="text">
  </form>
</main>
```
