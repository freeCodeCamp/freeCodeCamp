---
id: 587d78a5367417b2b2512ad7
title: Utiliza un degradado lineal CSS para crear un elemento rayado
challengeType: 0
videoUrl: 'https://scrimba.com/c/c6bmQh2'
forumTopicId: 301072
dashedName: use-a-css-linear-gradient-to-create-a-striped-element
---

# --description--

La función `repeating-linear-gradient()` es muy similar a `linear-gradient()` con la principal diferencia de que repite el patrón de degradado especificado. `repeating-linear-gradient()` acepta una variedad de valores, pero para simplificar, trabajarás con un valor de ángulo y valores de parada de color en este desafío.

El valor del ángulo es la dirección del gradiente. Las paradas de color son como valores de ancho que marcan donde tiene lugar una transición, y se dan con un porcentaje o un número de píxeles.

En el ejemplo demostrado en el editor de código, el degradado comienza con el color `yellow` a 0 píxeles que se funde en el segundo color `blue` a 40 píxeles de distancia desde el principio. Puesto que la siguiente parada de color también es de 40 píxeles, el degradado cambia inmediatamente al tercer color `green`, el cual se funde en el cuarto valor de color `red` ya que está a 80 píxeles del principio del degradado.

Para este ejemplo, ayuda a pensar en las paradas de color como pares donde cada dos colores se mezclan juntos.

```css
0px [yellow -- blend -- blue] 40px [green -- blend -- red] 80px
```

Si cada dos valores de parada de color son del mismo color, la mezcla no es visible porque está entre el mismo color, seguido de una dura transición hacia el siguiente color, así que terminas con rayas.

# --instructions--

Haz rayas cambiando el `repeating-linear-gradient()` para usar un ángulo gradiente de `45deg`, luego ajusta las dos primeras paradas de color en `yellow`, y finalmente las dos segundas paradas de color en `black`.

# --hints--

El ángulo del `repeating-linear-gradient()` debe ser 45deg.

```js
assert(code.match(/background:\s*?repeating-linear-gradient\(\s*?45deg/gi));
```

El ángulo del `repeating-linear-gradient()` ya no debe ser 90deg

```js
assert(!code.match(/90deg/gi));
```

La parada de color en 0 píxeles debe ser `yellow`.

```js
assert(code.match(/yellow\s+?0(px)?/gi));
```

La primera parada de color en 40 píxeles debe ser `yellow`.

```js
assert(code.match(/yellow\s+?40px/gi));
```

La segunda parada de color en 40 píxeles debe ser `black`.

```js
assert(code.match(/yellow\s+?40px,\s*?black\s+?40px/gi));
```

La última parada de color en 80 píxeles debe ser `black`.

```js
assert(code.match(/black\s+?80px/gi));
```

# --seed--

## --seed-contents--

```html
<style>

  div{
    border-radius: 20px;
    width: 70%;
    height: 400px;
    margin:  50 auto;
    background: repeating-linear-gradient(
      90deg,
      yellow 0px,
      blue 40px,
      green 40px,
      red 80px
    );
  }

</style>

<div></div>
```

# --solutions--

```html
<style>
  div{
    border-radius: 20px;
    width: 70%;
    height: 400px;
    margin:  50 auto;
    background: repeating-linear-gradient(
      45deg,
      yellow 0px,
      yellow 40px,
      black 40px,
      black 80px
    );
  }
</style>
<div></div>
```
