---
id: bad87fee1348bd9aede08718
title: Utiliza valores RGB para asignar color a los elementos
challengeType: 0
videoUrl: 'https://scrimba.com/c/cRkp2fr'
forumTopicId: 18369
dashedName: use-rgb-values-to-color-elements
---

# --description--

Otra forma de representar colores en CSS es utilizar valores `RGB`.

El valor `RGB` del color negro se ve así:

```css
rgb(0, 0, 0)
```

El valor `RGB` del color blanco se ve así:

```css
rgb(255, 255, 255)
```

En lugar de usar seis dígitos hexadecimales, como hacemos con el código hexadecimal, en `RGB` se especifica el brillo de cada color con un número que va de 0 a 255.

Si haces el cálculo, cada uno de los dos dígitos para un color representa 16 combinaciones, lo que nos da 256 valores posibles. Entonces, `RGB`, que comienza a contar desde cero, tiene el mismo número exacto de valores posibles que el código hexadecimal.

A continuación puedes ver un ejemplo de cómo cambiar el color de fondo de `body` a naranja usando su código RGB.

```css
body {
  background-color: rgb(255, 165, 0);
}
```

# --instructions--

Reemplacemos el código hexadecimal en el color de fondo de nuestro elemento `body` por el valor RGB correspondiente al color negro: `rgb(0, 0, 0)`

# --hints--

Tu elemento `body` debe tener un color de fondo "black" (negro).

```js
assert($('body').css('background-color') === 'rgb(0, 0, 0)');
```

Debes usar `rgb` para asignar a tu elemento `body` un color de fondo de negro.

```js
assert(code.match(/rgb\s*\(\s*0\s*,\s*0\s*,\s*0\s*\)/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    background-color: #F00;
  }
</style>
```

# --solutions--

```html
<style>
  body {
    background-color: rgb(0, 0, 0);
  }
</style>
```
