---
id: 587d78a5367417b2b2512ad8
title: Creare una trama aggiungendo un motivo delicato come immagine di sfondo
challengeType: 0
videoUrl: 'https://scrimba.com/c/cQdwJC8'
forumTopicId: 301052
dashedName: create-texture-by-adding-a-subtle-pattern-as-a-background-image
---

# --description--

Un modo per dare consistenza e attenzione a uno sfondo e farlo risaltare di più è quello di aggiungere un motivo leggero. La chiave è l'equilibrio, in quanto non si vuole che lo sfondo si distingua troppo, e distragga dal primo piano. La proprietà `background` supporta la funzione `url()` per collegarsi a un'immagine della texture o del motivo scelto. L'indirizzo del link è inserito tra virgolette all'interno delle parentesi.

# --instructions--

Usando l'url `https://cdn-media-1.freecodecamp.org/imgr/MJAkxbh.png`, imposta lo sfondo `background` dell'intera pagina con il selettore `body`.

# --hints--

Il tuo elemento `body` dovrebbe avere una proprietà `background` impostata su un `url()` con il link specificato.

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
