---
title: Background Position Property
localeTitle: Propiedad de posición de fondo
---
## Propiedad de posición de fondo

La propiedad de fondo establece la posición desde donde debe comenzar la imagen de fondo. En otras palabras, esta propiedad tomará un valor x y un valor y y comenzará la imagen desde el punto `(x, y)` .

**Ejemplo:**

```css
/* setting background-image of HTML doc */ 
 body { 
  background-image: url('https://cdn-media-1.freecodecamp.org/imgr/6Z2VStD.png'); 
  background-repeat: no-repeat; 
  background-position: right top; 
 } 
```

De forma predeterminada, la propiedad de posición de fondo se establece en `0% 0%` .

**Valores de propiedad:**

`background-position: x-value y-value` donde,

_valor x_ : `left | center | right | x% | x px` , y

_valor de y_ : `top | center | bottom | y% | y px` .

Otros valores de propiedad permitidos son `initial` y `inherit` .

`initial` : establece esta propiedad a su valor predeterminado.

`inherit` : `inherit` el valor del elemento padre.

**Nota:** cuando solo se asigna un valor a la propiedad de fondo, el otro está, de forma predeterminada, establecido en el `center` .

**Otros recursos:**

Docs MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/background-position