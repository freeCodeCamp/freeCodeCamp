---
id: 587d78b1367417b2b2512b0a
title: Usa una imagen retina para pantallas de alta resolución
challengeType: 0
videoUrl: 'https://scrimba.com/p/pzrPu4/cVZ4Rfp'
forumTopicId: 301142
dashedName: use-a-retina-image-for-higher-resolution-displays
---

# --description--

Con el aumento de los dispositivos conectados a Internet, sus tamaños y especificaciones varían, y las pantallas que utilizan podrían ser diferentes tanto externa como internamente. La densidad de píxeles es un aspecto que puede ser diferente de un dispositivo a otro, esta densidad se conoce como Pixel Por Pulgada, en inglés "pixels per inch" (PPI) o Puntos por Pulgada, en inglés "dots per inch" (DPI). La pantalla más famosa que aprovecha esto es la conocida como "Pantalla Retina" en los últimos portátiles Apple MacBook Pro, y recientemente en los ordenadores iMac. Debido a la diferencia en la densidad de píxeles entre las pantallas de "Retina" y "No Retina", algunas imágenes que no han sido hechas con una pantalla de alta resolución en mente podrían verse "pixeladas" cuando se muestran en una pantalla de alta resolución.

La forma más sencilla de hacer que tus imágenes aparezcan correctamente en pantallas de alta resolución, tales como la "pantalla retina" de las MacBook Pros es definir sus valores de ancho `width` y de altura `height` como sólo la mitad de lo que es el archivo original. Aquí hay un ejemplo de una imagen que solo utiliza la mitad de la altura y ancho originales:

```html
<style>
  img { height: 250px; width: 250px; }
</style>
<img src="coolPic500x500" alt="A most excellent picture">
```

# --instructions--

Establece el `width` y `height` de la etiqueta `img` a la mitad de sus valores originales. En este caso, tanto el `height` original como el `width` original son de `200px`.

# --hints--

Tu etiqueta `img` debe tener un `width` de 100 píxeles.

```js
assert(document.querySelector('img').width === 100);
```

Tu etiqueta `img` debe tener un `height` de 100 píxeles.

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
