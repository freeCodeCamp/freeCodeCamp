---
id: 587d781e367417b2b2512ac9
title: Change an Element's Relative Position
challengeType: 0
videoUrl: ''
localeTitle: Cambiar la posición relativa de un elemento
---

## Description
<section id="description"> CSS trata cada elemento HTML como su propia caja, que generalmente se conoce como el <code>CSS Box Model</code> . Los elementos de nivel de bloque se inician automáticamente en una nueva línea (piense en encabezados, párrafos y divs) mientras que los elementos en línea se ubican dentro del contenido que lo rodea (como imágenes o tramos). El diseño predeterminado de los elementos de esta manera se denomina <code>normal flow</code> de un documento, pero CSS ofrece la propiedad de posición para anularlo. Cuando la posición de un elemento se establece en <code>relative</code> , le permite especificar cómo CSS debe moverlo en <i>relación</i> con su posición actual en el flujo normal de la página. Se empareja con las propiedades de desplazamiento de CSS de <code>left</code> o <code>right</code> , y de <code>top</code> o <code>bottom</code> . Estos dicen cuántos píxeles, porcentajes o ems para mover el elemento <i>lejos</i> de donde normalmente se coloca. El siguiente ejemplo aleja el párrafo 10 píxeles de la parte inferior: <blockquote> pag { <br> posición: relativa; <br> abajo: 10px; <br> } </blockquote> Cambiar la posición de un elemento a relativa no lo elimina del flujo normal; otros elementos a su alrededor todavía se comportan como si ese elemento estuviera en su posición predeterminada. <strong>Nota</strong> <br> El posicionamiento le brinda mucha flexibilidad y poder sobre el diseño visual de una página. Es bueno recordar que no importa la posición de los elementos, el marcado HTML subyacente debe estar organizado y tener sentido cuando se lee de arriba a abajo. Así es como los usuarios con discapacidades visuales (que dependen de dispositivos de asistencia como lectores de pantalla) acceden a su contenido. </section>

## Instructions
<section id="instructions"> Cambie la <code>position</code> del <code>h2</code> a <code>relative</code> , y use un desplazamiento de CSS para alejarlo 15 píxeles de la <code>top</code> de donde se encuentra en el flujo normal. Observe que no hay impacto en las posiciones de los elementos h1 yp circundantes. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El elemento <code>h2</code> debe tener una propiedad de <code>position</code> establecida en <code>relative</code> .
    testString: 'assert($("h2").css("position") == "relative", "The <code>h2</code> element should have a <code>position</code> property set to <code>relative</code>.");'
  - text: Su código debe usar un desplazamiento de CSS para colocar relativamente el <code>h2</code> 15px lejos de la <code>top</code> de donde normalmente se encuentra.
    testString: 'assert($("h2").css("top") == "15px", "Your code should use a CSS offset to relatively position the <code>h2</code> 15px away from the <code>top</code> of where it normally sits.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  h2 {


  }
</style>
<body>
  <h1>On Being Well-Positioned</h1>
  <h2>Move me!</h2>
  <p>I still think the h2 is where it normally sits.</p>
</body>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
