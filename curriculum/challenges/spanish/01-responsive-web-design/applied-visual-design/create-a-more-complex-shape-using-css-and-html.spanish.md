---
id: 587d78a6367417b2b2512ade
title: Create a More Complex Shape Using CSS and HTML
challengeType: 0
videoUrl: ''
localeTitle: Crea una forma más compleja usando CSS y HTML
---

## Description
<section id="description"> Una de las formas más populares del mundo es la forma de corazón, y en este desafío creará una utilizando CSS puro. Pero primero, debe comprender los elementos pseudoelementos <code>::before</code> y <code>::after</code> . Estos pseudo-elementos se usan para agregar algo antes o después de un elemento seleccionado. En el siguiente ejemplo, un <code>::before</code> pseudo-elemento se usa para agregar un rectángulo a un elemento con el <code>heart</code> la clase: <blockquote> .heart :: before { <br> contenido: &quot;&quot;; <br> color de fondo: amarillo; <br> radio del borde: 25%; <br> posición: absoluta; <br> altura: 50px; <br> ancho: 70px; <br> arriba: -50px; <br> izquierda: 5px; <br> } </blockquote> Para que <code>::before</code> y <code>::after</code> pseudo-elements funcionen correctamente, deben tener una propiedad de <code>content</code> definida. Esta propiedad se usa generalmente para agregar elementos como una foto o texto al elemento seleccionado. Cuando los pseudo-elementos <code>::before</code> y <code>::after</code> se usan para hacer formas, la propiedad de <code>content</code> sigue siendo necesaria, pero se establece en una cadena vacía. En el ejemplo anterior, el elemento con la clase de <code>heart</code> tiene un pseudoelemento <code>::before</code> del que produce un rectángulo amarillo con <code>height</code> y <code>width</code> de 50 px y 70 px, respectivamente. Este rectángulo tiene esquinas redondeadas debido a su radio de borde del 25% y está posicionado absolutamente a 5px desde la <code>left</code> y 50px por encima de la <code>top</code> del elemento. </section>

## Instructions
<section id="instructions"> Transforma el elemento en la pantalla en un corazón. En el <code>heart::after</code> selector, cambie el <code>background-color</code> a rosa y el <code>border-radius</code> del <code>border-radius</code> a 50%. A continuación, apunte el elemento con el <code>heart</code> la clase (solo el <code>heart</code> ) y complete la propiedad de <code>transform</code> . Utilice la función <code>rotate()</code> con -45 grados. ( <code>rotate()</code> funciona de la misma manera que <code>skewX()</code> y <code>skewY()</code> hacen). Finalmente, en el <code>heart::before</code> selector, establece su propiedad de <code>content</code> en una cadena vacía. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'La propiedad de <code>background-color</code> de fondo del <code>heart::after</code> selector debe ser rosa.'
    testString: 'assert(code.match(/\.heart::after\s*?{\s*?background-color\s*?:\s*?pink\s*?;/gi), "The <code>background-color</code> property of the <code>heart::after</code> selector should be pink.");'
  - text: 'El <code>border-radius</code> del <code>border-radius</code> del <code>heart::after</code> selector debe ser del 50%.'
    testString: 'assert(code.match(/border-radius\s*?:\s*?50%/gi).length == 2, "The <code>border-radius</code> of the <code>heart::after</code> selector should be 50%.");'
  - text: La propiedad de <code>transform</code> para la clase de <code>heart</code> debe usar una función <code>rotate()</code> establecida en -45 grados.
    testString: 'assert(code.match(/transform\s*?:\s*?rotate\(\s*?-45deg\s*?\)/gi), "The <code>transform</code> property for the <code>heart</code> class should use a <code>rotate()</code> function set to -45 degrees.");'
  - text: 'El <code>content</code> del <code>heart::before</code> selector debe ser una cadena vacía.'
    testString: 'assert(code.match(/\.heart::before\s*?{\s*?content\s*?:\s*?("|")\1\s*?;/gi), "The <code>content</code> of the <code>heart::before</code> selector should be an empty string.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
.heart {
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: pink;
  height: 50px;
  width: 50px;
  transform: ;
}
.heart::after {
  background-color: blue;
  content: "";
  border-radius: 25%;
  position: absolute;
  width: 50px;
  height: 50px;
  top: 0px;
  left: 25px;
}
.heart::before {
  content: ;
  background-color: pink;
  border-radius: 50%;
  position: absolute;
  width: 50px;
  height: 50px;
  top: -25px;
  left: 0px;
}
</style>
<div class = "heart"></div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
