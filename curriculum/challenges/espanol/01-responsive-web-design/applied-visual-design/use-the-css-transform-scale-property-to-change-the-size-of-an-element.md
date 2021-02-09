---
id: 587d78a5367417b2b2512ad9
title: Utiliza la propiedad de escala de transformación CSS para cambiar el tamaño de un elemento
challengeType: 0
videoUrl: 'https://scrimba.com/c/c2MZVSg'
forumTopicId: 301076
dashedName: use-the-css-transform-scale-property-to-change-the-size-of-an-element
---

# --description--

Para cambiar la escala de un elemento, CSS tiene la propiedad `transform`, junto con su función `scale()`. En el ejemplo de código siguiente se duplica el tamaño de todos los elementos de párrafo de la página:

```css
p {
  transform: scale(2);
}
```

# --instructions--

Aumenta el tamaño del elemento con el id de `ball2` a 1.5 veces su tamaño original.

# --hints--

La propiedad `transform` para `#ball2` debe establecerse para escalarla a 1.5 veces su tamaño.

```js
assert(
  code.match(
    /#ball2\s*?{\s*?left:\s*?65%;\s*?transform:\s*?scale\(1\.5\);\s*?}|#ball2\s*?{\s*?transform:\s*?scale\(1\.5\);\s*?left:\s*?65%;\s*?}/gi
  )
);
```

# --seed--

## --seed-contents--

```html
<style>
  .ball {
    width: 40px;
    height: 40px;
    margin: 50 auto;
    position: fixed;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    border-radius: 50%;
  }
  #ball1 {
    left: 20%;
  }
  #ball2 {
    left: 65%;

  }


</style>

<div class="ball" id= "ball1"></div>
<div class="ball" id= "ball2"></div>
```

# --solutions--

```html
<style>
  .ball {
    width: 40px;
    height: 40px;
    margin: 50 auto;
    position: fixed;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    border-radius: 50%;
  }
  #ball1 {
    left: 20%;
  }
  #ball2 {
    left: 65%;
    transform: scale(1.5);
  }
</style>
<div class="ball" id= "ball1"></div>
<div class="ball" id= "ball2"></div>
```
