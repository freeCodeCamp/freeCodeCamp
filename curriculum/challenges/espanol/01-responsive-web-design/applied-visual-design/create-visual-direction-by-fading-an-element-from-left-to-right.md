---
id: 587d78a7367417b2b2512ae2
title: Crear dirección visual desvaneciendo un elemento de izquierda a derecha
challengeType: 0
videoUrl: 'https://scrimba.com/c/cGJqqAE'
forumTopicId: 301054
dashedName: create-visual-direction-by-fading-an-element-from-left-to-right
---

# --description--

Para este desafío, cambiarás la opacidad (`opacity`) de un elemento animado para que se desvanezca gradualmente a medida que llega al lado derecho de la pantalla.

En la animación mostrada, el elemento redondo con el fondo degradado se mueve hacia la derecha con la marca del 50% de la animación según la regla `@keyframes`.

# --instructions--

Apunta al elemento con el id de `ball` y agrega la propiedad `opacity` establecida en 0.1 en `50%`, de modo que el elemento se desvanezca a medida que se mueve hacia la derecha.

# --hints--

La regla `keyframes` para desvanecimiento debe establecer la propiedad `opacity` en 0.1 al 50%.

```js
assert(
  code.match(
    /@keyframes fade\s*?{\s*?50%\s*?{\s*?(?:left:\s*?60%;\s*?opacity:\s*?0?\.1;|opacity:\s*?0?\.1;\s*?left:\s*?60%;)/gi
  )
);
```

# --seed--

## --seed-contents--

```html
<style>

  #ball {
    width: 70px;
    height: 70px;
    margin: 50px auto;
    position: fixed;
    left: 20%;
    border-radius: 50%;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    animation-name: fade;
    animation-duration: 3s;
  }

  @keyframes fade {
    50% {
      left: 60%;

    }
  }

</style>

<div id="ball"></div>
```

# --solutions--

```html
<style>
  #ball {
    width: 70px;
    height: 70px;
    margin: 50px auto;
    position: fixed;
    left: 20%;
    border-radius: 50%;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    animation-name: fade;
    animation-duration: 3s;
  }

  @keyframes fade {
    50% {
      left: 60%;
      opacity: 0.1;
    }
  }
</style>
<div id="ball"></div>
```
