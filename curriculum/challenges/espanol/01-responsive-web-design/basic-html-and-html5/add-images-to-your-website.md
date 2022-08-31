---
id: bad87fee1348bd9aedf08812
title: Agrega imágenes a tu sitio web
challengeType: 0
forumTopicId: 16640
dashedName: add-images-to-your-website
---

# --description--

Puedes agregar imágenes a tu sitio web utilizando el elemento `img`, y apuntar a la URL de una imagen específica usando el atributo `src`.

Un ejemplo de esto sería:

```html
<img src="https://www.freecatphotoapp.com/your-image.jpg">
```

Ten en cuenta que los elementos `img` se cierran automáticamente.

Todos los elementos `img` **deben** tener un atributo `alt`. El texto dentro de un atributo `alt` es utilizado por los lectores de pantalla para mejorar la accesibilidad y se muestra si la imagen falla en cargar.

**Note:** Si la imagen es puramente decorativa, usar un atributo `alt` vacío es una buena práctica.

Idealmente, el atributo `alt` no debe contener caracteres especiales a menos que sea necesario.

Agreguemos un atributo `alt` a nuestro ejemplo `img` anterior:

```html
<img src="https://www.freecatphotoapp.com/your-image.jpg" alt="freeCodeCamp logo">
```

# --instructions--

Intentemos agregar una imagen a nuestro sitio web:

Dentro del elemento `main`, inserta un elemento `img` antes de los elementos `p` existentes.

Ahora establece el atributo `src` para que apunte a la url `https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg`

Finalmente, no olvides darle a tu elemento `img` un atributo `alt` con texto descriptivo.

# --hints--

Tu página debe tener un elemento imagen.

```js
assert($('img').length);
```

Tu imagen debe tener un atributo `src` que apunte a la imagen del gatito.

```js
assert(/^https:\/\/cdn\.freecodecamp\.org\/curriculum\/cat-photo-app\/relaxing-cat\.jpg$/i.test($('img').attr('src')));
```

El atributo `alt` de tu elemento imagen no debe estar vacío.

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
