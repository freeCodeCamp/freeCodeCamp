---
id: 587d78b1367417b2b2512b0a
title: Verwende ein Retina-Bild für Displays mit höherer Auflösung
challengeType: 0
videoUrl: 'https://scrimba.com/p/pzrPu4/cVZ4Rfp'
forumTopicId: 301142
dashedName: use-a-retina-image-for-higher-resolution-displays
---

# --description--

Mit der Zunahme der im Internet angeschlossenen Geräte variieren ihre Größen und Spezifikationen und die Displays, die sie verwenden, könnten extern und intern unterschiedlich sein. Die Pixeldichte ist ein Aspekt, der bei einem Gerät anders sein kann als bei anderen. Diese Dichte wird als Pixel pro Zoll (PPI) oder Dots per Inch (DPI) bezeichnet. Das bekannteste dieser Displays ist das sogenannte "Retina Display", das in den neuesten Apple MacBook Pro Notebooks und seit kurzem auch in den iMac Computern zu finden ist. Aufgrund des Unterschieds in der Pixeldichte zwischen einem "Retina"-Display und einem "Non-Retina"-Display können einige Bilder, die nicht mit Blick auf ein hochauflösendes Display erstellt wurden, "pixelig" aussehen, wenn sie auf einem hochauflösenden Display dargestellt werden.

Der einfachste Weg, damit deine Bilder auf hochauflösenden Bildschirmen wie dem "Retina-Display" des MacBook Pros richtig angezeigt werden, besteht darin, die Werte für `width` und `height` auf die Hälfte der Originaldatei zu beschränken. Hier ist ein Beispiel für ein Bild, das nur die Hälfte der ursprünglichen Höhe und Breite verwendet:

```html
<style>
  img { height: 250px; width: 250px; }
</style>
<img src="coolPic500x500" alt="A most excellent picture">
```

# --instructions--

Setze die `width` und `height` des `img`-Tags auf die Hälfte ihrer ursprünglichen Werte. In diesem Fall sind sowohl die ursprüngliche `height` als auch die ursprüngliche `width` gleich `200px`.

# --hints--

Dein `img`-Tag sollte eine `width` von 100 Pixeln besitzen.

```js
assert(document.querySelector('img').width === 100);
```

Dein `img`-Tag sollte eine `height` von 100 Pixeln besitzen.

```js
assert(document.querySelector('img').height === 100);
```

# --seed--

## --seed-contents--

```html
<style>

</style>

<img src="https://s3.amazonaws.com/freecodecamp/FCCStickers-CamperBot200x200.jpg" alt="freeCodeCamp sticker that says 'Because CamperBot Cares'">
```

# --solutions--

```html
<style>
  img { 
    height: 100px; 
    width: 100px; 
  }
</style>

<img src="https://s3.amazonaws.com/freecodecamp/FCCStickers-CamperBot200x200.jpg" alt="freeCodeCamp sticker that says 'Because CamperBot Cares'">
```
