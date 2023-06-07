---
id: bad87fee1348bd9aedf08812
title: Füge Bilder auf deiner Website ein
challengeType: 0
forumTopicId: 16640
dashedName: add-images-to-your-website
---

# --description--

Du kannst Bilder zu deiner Webseite hinzufügen, indem du das `img`-Element benutzt und mit dem `src`-Attribut auf die URL eines bestimmten Bildes verweist.

Ein Beispiel könnte sein:

```html
<img src="https://www.freecatphotoapp.com/your-image.jpg">
```

Beachte, dass `img`-Elemente selbstschließend sind.

Alle `img`-Elemente sollten **unbedingt** ein `alt`-Attribut haben. Der Text in einem `alt`-Attribut wird für Screenreader verwendet, um die Barrierefreiheit zu verbessern und wird angezeigt, wenn das Bild nicht geladen wird.

**Hinweis:** Wenn das Bild rein dekorativ ist, ist die Verwendung eines leeren `alt`-Attributs eine bewährte Methode.

Idealerweise sollte das `alt`-Attribut keine Sonderzeichen enthalten, wenn es nicht erforderlich ist.

Lass uns ein `alt`-Attribut zu unserem `img` hinzufügen Beispiel oben:

```html
<img src="https://www.freecatphotoapp.com/your-image.jpg" alt="freeCodeCamp logo">
```

# --instructions--

Lass uns versuchen, ein Bild zu unserer Website hinzuzufügen:

Füge innerhalb des bestehenden `main`-Elements ein `img`-Element vor den bestehenden `p`-Elementen ein.

Setze nun das Attribut `src` so, dass es auf die Url `https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg` zeigt

Vergiss nicht, deinem `img`-Element ein `alt`-Attribut mit geeignetem Text zu geben.

# --hints--

Deine Seite sollte ein Bildelement besitzen.

```js
assert($('img').length);
```

Dein Bild sollte ein `src`-Attribut haben, das auf das Kätzchen-Bild zeigt.

```js
assert(/^https:\/\/cdn\.freecodecamp\.org\/curriculum\/cat-photo-app\/relaxing-cat\.jpg$/i.test($('img').attr('src')));
```

Das `alt`-Attribut deines Bildelements sollte nicht leer sein.

```js
assert(
  $('img').attr('alt') &&
    $('img').attr('alt').length &&
    /<(?:img|IMG)\S*alt=(['"])(?!\1|>)\S+\1\S*\/?>/.test(
      __helpers.removeWhiteSpace(code)
    )
);
```

# --seed--

## --seed-contents--

```html
<h2>CatPhotoApp</h2>
<main>


  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```

# --solutions--

```html
<h2>CatPhotoApp</h2>
<main>
  <a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>
  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```
