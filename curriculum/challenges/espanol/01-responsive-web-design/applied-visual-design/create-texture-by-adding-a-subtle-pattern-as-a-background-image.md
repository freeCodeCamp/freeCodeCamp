---
id: 587d78a5367417b2b2512ad8
title: Crea textura agregando un patrón sutil como imagen de fondo
challengeType: 0
videoUrl: 'https://scrimba.com/c/cQdwJC8'
forumTopicId: 301052
dashedName: create-texture-by-adding-a-subtle-pattern-as-a-background-image
---

# --description--

Una forma de agregar textura e interés a un fondo y hacer que se destaque más es agregar un patrón sutil. La clave está en el balance, dado que no querrás que el fondo destaque demasiado y quite atención al primer plano. La propiedad `background` acepta la función `url()` para enlazar una imagen de la textura o patrón elegido. El enlace es cubierto entre comillas dentro del paréntesis.

# --instructions--

Usando el enlace `https://cdn-media-1.freecodecamp.org/imgr/MJAkxbh.png`, asigna el fondo `background` de toda la página con el selector `body`.

# --hints--

Tu elemento `body` debe tener una propiedad `background` asignado con `url()` que tenga el enlace dado.

```js
assert(
  code.match(
    /background(-image)?:\s*?url\(\s*("|'|)https:\/\/cdn-media-1\.freecodecamp\.org\/imgr\/MJAkxbh\.png\2\s*\)/gi
  )
);
```

# --seed--

## --seed-contents--

```html
<style>
  body {

  }
</style>
```

# --solutions--

```html
<style>
  body {
    background: url("https://cdn-media-1.freecodecamp.org/imgr/MJAkxbh.png");
  }
</style>
```
