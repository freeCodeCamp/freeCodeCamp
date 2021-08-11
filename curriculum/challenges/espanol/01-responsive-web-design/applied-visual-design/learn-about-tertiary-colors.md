---
id: 587d78a4367417b2b2512ad2
title: Aprende sobre colores terciarios
challengeType: 0
forumTopicId: 301057
dashedName: learn-about-tertiary-colors
---

# --description--

Los monitores y las pantallas crean diferentes colores al combinar cantidades de luz roja, verde y azul. Esto se conoce como modelo aditivo de color RGB en la teoría de moderna de color. Rojo (R), verde (G) y azul (B) «por sus siglas en inglés» son colores primarios. Al combinar dos colores primarios se los colores secundarios cian (G + B), magenta (R + B) y amarillo (R + G). Ya viste estos colores en los desafíos de colores complementarios. Estos colores secundarios son el complemento del color primario no utilizado en su creación y están frente a ese color primario en el círculo cromático. Por ejemplo, el magenta está compuesto de rojo y azul y es el complemento del verde.

Los colores terciarios se forman al combinar dos colores primarios con uno de sus vecinos de color secundario. Por ejemplo, entre el modelo de color RGB, rojo (primario) y amarillo (secundario) forman naranja (terciario). Esto añade seis colores a un círculo cromático simple para un total de doce.

Hay varios métodos para seleccionar colores diferentes que resultan de una combinación armoniosa en diseño. Un ejemplo que puede usar colores terciarios es el esquema de color complementario dividido. Este esquema comienza con un color base, luego lo empareja con los dos colores que están adyacentes a su complemento. Los tres colores proporcionan un fuerte contraste visual en un diseño, pero son más sutiles que utilizar dos colores complementarios.

Aquí hay tres colores creados usando el esquema de dividir-complemento:

<table class='table table-striped'><thead><tr><th>Color</th><th>Código hexadecimal</th></tr></thead><thead></thead><tbody><tr><td>anaranjado</td><td>#FF7F00</td></tr><tr><td>cian</td><td>#00FFFF</td></tr><tr><td>frambuesa</td><td>#FF007F</td></tr></tbody></table>

# --instructions--

Cambia la propiedad `background-color` de las clases `orange`, `cyan` y `raspberry` a sus colores respectivos. Asegúrate de usar los códigos hexadecimales y no los nombres de colores.

# --hints--

El elemento `div` con clase `orange` debe tener un `background-color` naranja.

```js
assert($('.orange').css('background-color') == 'rgb(255, 127, 0)');
```

El elemento `div` con clase `cyan` debe tener un `background-color` cian.

```js
assert($('.cyan').css('background-color') == 'rgb(0, 255, 255)');
```

El elemento `div` con clase `raspberry` debe tener un `background-color` frambuesa.

```js
assert($('.raspberry').css('background-color') == 'rgb(255, 0, 127)');
```

Todos los valores de `background-color` para las clases de color deben ser códigos hexadecimales y no nombres de color.

```js
assert(!/background-color:\s(orange|cyan|raspberry)/.test(code));
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    background-color: #FFFFFF;
  }

  .orange {
    background-color: #000000;
  }

  .cyan {
    background-color: #000000;
  }

  .raspberry {
    background-color: #000000;
  }

  div {
    height: 100px;
    width: 100px;
    margin-bottom: 5px;
  }
</style>

<div class="orange"></div>
<div class="cyan"></div>
<div class="raspberry"></div>
```

# --solutions--

```html
<style>
  body {
    background-color: #FFFFFF;
  }

  .orange {
    background-color: #FF7F00;
  }

  .cyan {
    background-color: #00FFFF;
  }

  .raspberry {
    background-color: #FF007F;
  }

  div {
    height: 100px;
    width: 100px;
    margin-bottom: 5px;
  }
</style>
<div class="orange"></div>
<div class="cyan"></div>
<div class="raspberry"></div>
```
