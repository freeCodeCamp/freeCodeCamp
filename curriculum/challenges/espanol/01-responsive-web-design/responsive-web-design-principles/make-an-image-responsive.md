---
id: 587d78b1367417b2b2512b09
title: Haz una imagen adaptable
challengeType: 0
forumTopicId: 301140
dashedName: make-an-image-responsive
---

# --description--

Hacer imágenes adaptables con CSS es realmente simple. Sólo tienes que agregar estas propiedades a una imagen:

```css
img {
  max-width: 100%;
  height: auto;
}
```

El ancho máximo `max-width` de `100%` se asegurará de que la imagen nunca es más ancha que el contenedor en el que se encuentra. y la altura `height` de `auto` hará que la imagen mantenga su relación de aspecto original.

# --instructions--

Agrega las reglas de estilo a la clase `responsive-img` para hacerla adaptable. Nunca debería ser más ancha que su contenedor (en este caso, es la ventana de vista previa) y debería mantener su relación de aspecto original. Después de haber agregado tu código, redimensiona la vista previa para ver cómo se comportan tus imágenes.

# --hints--

Tu clase `responsive-img` debe tener un `max-width` establecido en `100%`.

```js
assert(getComputedStyle($('.responsive-img')[0]).maxWidth === '100%');
```

Tu clase `responsive-img` debe tener un `height` establecido en `auto`.

```js
assert(code.match(/height:\s*?auto;/g));
```

# --seed--

## --seed-contents--

```html
<style>
.responsive-img {


}

img {
  width: 600px;
}
</style>

<img class="responsive-img" src="https://s3.amazonaws.com/freecodecamp/FCCStickerPack.jpg" alt="freeCodeCamp stickers set">
<img src="https://s3.amazonaws.com/freecodecamp/FCCStickerPack.jpg" alt="freeCodeCamp stickers set">
```

# --solutions--

```html
<style>
.responsive-img {
  max-width: 100%;
  height: auto;
}

img {
  width: 600px;
}
</style>

<img class="responsive-img" src="https://s3.amazonaws.com/freecodecamp/FCCStickerPack.jpg" alt="freeCodeCamp stickers set">
<img src="https://s3.amazonaws.com/freecodecamp/FCCStickerPack.jpg" alt="freeCodeCamp stickers set">
```
