---
id: 587d78a6367417b2b2512add
title: Crea un gráfico usando CSS
challengeType: 0
videoUrl: 'https://scrimba.com/c/cEDWPs6'
forumTopicId: 301048
dashedName: create-a-graphic-using-css
---

# --description--

Al manipular diferentes selectores y propiedades, puedes hacer figuras interesantes. Una de las figuras más fáciles de intentar es la luna creciente. Para este desafío necesitas trabajar con la propiedad `box-shadow` que aplica la sombra de un elemento, junto con la propiedad `border-radius` que controla la redondez de las esquinas del elemento.

Crearás un objeto redondo y transparente con una sombra nítida que está ligeramente desplazada hacia un lado - la sombra en realidad va a ser la figura de luna que verás.

Para crear un objeto redondo, la propiedad `border-radius` se le debe asignar un valor de 50%.

Puede que recuerdes de un desafío anterior que la propiedad `box-shadow` toma valores para `offset-x`, `offset-y`, `blur-radius`, `spread-radius` y un valor para el `color`, en ese orden. Los valores `blur-radius` y `spread-radius` son opcionales.

# --instructions--

Manipula el elemento cuadrado en el editor para crear la figura de luna. Primero, cambia el `background-color` a `transparent`, luego establece la propiedad `border-radius` en 50% para hacer la forma circular. Finalmente, cambia la propiedad `box-shadow` para establecer el `offset-x` a 25px, el `offset-y` a 10px, `blur-radius` a 0, `spread-radius` a 0, y `color` a `blue`.

# --hints--

El valor de la propiedad `background-color` debe establecerse como `transparent`.

```js
assert(code.match(/background-color:\s*?transparent;/gi));
```

El valor de la propiedad `border-radius` debe establecerse como `50%`.

```js
assert(code.match(/border-radius:\s*?50%;/gi));
```

El valor de la propiedad `box-shadow` debe ser fijado a 25px para `offset-x`, 10px para `offset-y`, 0 para `blur-radius`, 0 para `spread-radius`, y finalmente `blue` para el `color`.

```js
assert(
  code.match(/box-shadow:\s*?25px\s+?10px\s+?0(px)?\s+?0(px)?\s+?blue\s*?;/gi)
);
```

# --seed--

## --seed-contents--

```html
<style>
  .center {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100px;
    height: 100px;
    background-color: blue;
    border-radius: 0px;
    box-shadow: 25px 10px 10px 10px green;
  }

</style>
<div class="center"></div>
```

# --solutions--

```html
<style>
  .center {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100px;
    height: 100px;
    background-color: transparent;
    border-radius: 50%;
    box-shadow: 25px 10px 0 0 blue;
  }
</style>
<div class="center"></div>
```
