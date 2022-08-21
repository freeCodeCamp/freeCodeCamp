---
id: bad87fee1348bd9aedf08820
title: Ein Bild in einen Link umwandeln
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cRdBnUr'
forumTopicId: 18327
dashedName: turn-an-image-into-a-link
---

# --description--

Du kannst Elemente zu Links werden lassen, indem du sie innerhalb eines `a`-Elements einbettest.

Bette dein Bild in ein `a`-Element ein. Hier ist ein Beispiel:

```html
<a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="Three kittens running towards the camera."></a>
```

Denke daran, `#` als `a`-Eigenschaft des Elements `href` zu verwenden, um es in einen toten Link zu verwandeln.

# --instructions--

Platziere das vorhandene Bildelement in einem `a` (*anchor*) Element.

Wenn du dies getan hast, fahre mit dem Mauszeiger über dein Bild. Der normale Mauszeiger sollte sich zum Mauszeiger für das Anklicken von Links ändern. Das Foto ist jetzt ein Link.

# --hints--

Das vorhandene `img` Element sollte innerhalb eines `a` Elements eingebettet sein.

```js
assert($('a').children('img').length > 0);
```

Dein `a`-Element sollte ein toter Link mit einem `href`-Attribut sein, das auf `#` gesetzt ist.

```js
assert(new RegExp('#').test($('a').children('img').parent().attr('href')));
```

Jedes deiner `a`-Elemente sollte einen schließenden Tag besitzen.

```js
assert(
  code.match(/<\/a>/g) &&
    code.match(/<a/g) &&
    code.match(/<\/a>/g).length === code.match(/<a/g).length
);
```

# --seed--

## --seed-contents--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```

# --solutions--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```
