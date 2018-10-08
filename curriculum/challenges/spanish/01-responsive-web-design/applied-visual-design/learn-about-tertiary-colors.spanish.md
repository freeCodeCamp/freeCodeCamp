---
id: 587d78a4367417b2b2512ad2
title: Learn about Tertiary Colors
localeTitle: Aprende sobre los colores terciarios
challengeType: 0
videoUrl: ''
---

## Description
<section id='description'> 
Los monitores de computadora y las pantallas de dispositivos crean diferentes colores al combinar cantidades de luz roja, verde y azul. Esto se conoce como el modelo de color aditivo RGB en la teoría moderna del color. Rojo (R), verde (G) y azul (B) se denominan colores primarios. La mezcla de dos colores primarios crea los colores secundarios cian (G + B), magenta (R + B) y amarillo (R + G). Viste estos colores en el desafío de los colores complementarios. Estos colores secundarios resultan ser el complemento del color primario no utilizado en su creación, y son opuestos a ese color primario en la rueda de color. Por ejemplo, el magenta está hecho con rojo y azul, y es el complemento del verde. 
Los colores terciarios son el resultado de combinar un color primario con uno de sus vecinos de color secundario. Por ejemplo, el rojo (primario) y el amarillo (secundario) hacen naranja. Esto agrega seis colores más a una rueda de color simple para un total de doce. 
Existen varios métodos para seleccionar diferentes colores que dan como resultado una combinación armoniosa en el diseño. Un ejemplo que puede usar colores terciarios se denomina esquema de color de división complementaria. Este esquema comienza con un color base, luego lo combina con los dos colores adyacentes a su complemento. Los tres colores proporcionan un fuerte contraste visual en un diseño, pero son más sutiles que el uso de dos colores complementarios. 
Aquí hay tres colores creados usando el esquema de complemento dividido: 
<table class="table table-striped"><thead><tr><th> Color </th><th> Código hexadecimal </th></tr><thead><tbody><tr><td> naranja </td><td> # FF7D00 </td></tr><tr><td> cian </td><td> # 00FFFF </td></tr><tr><td> frambuesa </td><td> # FF007D </td></tr></tbody></table> 
</section>

## Instructions
<section id='instructions'> 
Cambie la propiedad de <code>background-color</code> de las clases de <code>orange</code> , <code>cyan</code> y <code>raspberry</code> a sus respectivos colores. Asegúrese de utilizar los códigos hexadecimales, ya que la naranja y la frambuesa no son nombres de colores reconocidos por el navegador. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El elemento <code>div</code> con <code>orange</code> clase debe tener un <code>background-color</code> de <code>background-color</code> de naranja.
    testString: 'assert($(".orange").css("background-color") == "rgb(255, 125, 0)", "The <code>div</code> element with class <code>orange</code> should have a <code>background-color</code> of orange.");'
  - text: El elemento <code>div</code> con <code>cyan</code> clase debe tener un <code>background-color</code> de <code>background-color</code> de cian.
    testString: 'assert($(".cyan").css("background-color") == "rgb(0, 255, 255)", "The <code>div</code> element with class <code>cyan</code> should have a <code>background-color</code> of cyan.");'
  - text: El elemento <code>div</code> con <code>raspberry</code> clase debe tener un <code>background-color</code> de <code>background-color</code> de frambuesa.
    testString: 'assert($(".raspberry").css("background-color") == "rgb(255, 0, 125)", "The <code>div</code> element with class <code>raspberry</code> should have a <code>background-color</code> of raspberry.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

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

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
