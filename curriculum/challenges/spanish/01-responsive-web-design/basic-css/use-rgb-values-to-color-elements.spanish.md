---
id: bad87fee1348bd9aede08718
title: Use RGB values to Color Elements
challengeType: 0
videoUrl: ''
localeTitle: Usar valores RGB para elementos de color
---

## Descripción
<section id="description"> Otra forma de representar colores en CSS es mediante el uso de valores <code>RGB</code> . El valor RGB para negro se ve así: <code>rgb(0, 0, 0)</code> El valor RGB para blanco se ve así: <code>rgb(255, 255, 255)</code> En lugar de usar seis dígitos hexadecimales como lo hace con el código hexadecimal, con <code>RGB</code> tú especificas el brillo de cada color con un número entre 0 y 255. Si hace los cálculos, los dos dígitos de un color son 16 veces 16, lo que nos da 256 valores totales. Entonces, <code>RGB</code> , que comienza a contar desde cero, tiene exactamente el mismo número de valores posibles que el código hexadecimal. Aquí hay un ejemplo de cómo cambiarías el fondo del cuerpo a naranja usando su código RGB. 

```css
body {
  background-color: rgb (255, 165, 0); 
}
```
</section>

## Instrucciones
<section id="instructions"> Reemplazemos el código hexadecimal en el color de fondo de nuestro elemento del <code>body</code> con el valor RGB para negro: <code>rgb(0, 0, 0)</code> </section>

## Pruebas
<section id='tests'>

```yml
tests:
  - text: El elemento de tu <code>body</code> debe tener un fondo negro.
    testString: 'assert($("body").css("background-color") === "rgb(0, 0, 0)", "Your <code>body</code> element should have a black background.");'
  - text: Usa <code>rgb</code> para darle a tu <code>body</code> un color negro.
    testString: 'assert(code.match(/rgb\s*\(\s*0\s*,\s*0\s*,\s*0\s*\)/ig), "Use <code>rgb</code> to give your <code>body</code> element a color of black.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  body {
    background-color: #F00;
  }
</style>

```

</div>



</section>

## Solución
<section id='solution'>

```js
// solution required
```
</section>
