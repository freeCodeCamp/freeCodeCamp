---
id: 587d78a6367417b2b2512add
title: Create a Graphic Using CSS
challengeType: 0
videoUrl: ''
localeTitle: Crear un gráfico utilizando CSS
---

## Description
<section id="description"> Al manipular diferentes selectores y propiedades, puedes hacer formas interesantes. Uno de los más fáciles de probar es una forma de luna creciente. Para este desafío, necesitas trabajar con la propiedad <code>box-shadow</code> que establece la sombra de un elemento, junto con la propiedad <code>border-radius</code> que controla la redondez de las esquinas del elemento. Creará un objeto redondo y transparente con una sombra nítida que está ligeramente desplazada hacia el lado: la sombra realmente será la forma de la luna que ve. Para crear un objeto redondo, la propiedad <code>border-radius</code> debe establecerse en un valor del 50%. Puede recordar de un desafío anterior que la propiedad <code>box-shadow</code> toma valores para <code>offset-x</code> , <code>offset-y</code> , <code>blur-radius</code> , <code>spread-radius</code> y un valor de color en ese orden. Los valores de <code>spread-radius</code> <code>blur-radius</code> <code>spread-radius</code> son opcionales. </section>

## Instructions
<section id="instructions"> Manipule el elemento cuadrado en el editor para crear la forma de la luna. Primero, cambie el <code>background-color</code> a transparente, luego establezca la propiedad de <code>border-radius</code> en 50% para hacer la forma circular. Finalmente, cambie la propiedad <code>box-shadow</code> para establecer <code>offset-x</code> en 25px, <code>offset-y</code> en 10px, <code>blur-radius</code> en 0, <code>spread-radius</code> en 0 y color en azul. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El valor de la propiedad de <code>background-color</code> debe establecerse en <code>transparent</code> .
    testString: 'assert(code.match(/background-color:\s*?transparent;/gi), "The value of the <code>background-color</code> property should be set to <code>transparent</code>.");'
  - text: El valor de la propiedad <code>border-radius</code> debe establecer en <code>50%</code> .
    testString: 'assert(code.match(/border-radius:\s*?50%;/gi), "The value of the <code>border-radius</code> property should be set to <code>50%</code>.");'
  - text: 'El valor de la propiedad <code>box-shadow</code> debe establecer en 25px para <code>offset-x</code> , 10px para <code>offset-y</code> , 0 para <code>blur-radius</code> , 0 para <code>spread-radius</code> y finalmente azul para el color.'
    testString: 'assert(code.match(/box-shadow:\s*?25px\s+?10px\s+?0(px)?\s+?0(px)?\s+?blue\s*?;/gi), "The value of the <code>box-shadow</code> property should be set to 25px for <code>offset-x</code>, 10px for <code>offset-y</code>, 0 for <code>blur-radius</code>, 0 for <code>spread-radius</code>, and finally blue for the color.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
.center
{
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

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
