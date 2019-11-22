---
id: 587d774e367417b2b2512a9f
title: Jump Straight to the Content Using the main Element
challengeType: 0
videoUrl: ''
localeTitle: Ir directamente al contenido usando el elemento principal
---

## Description
<section id="description"> HTML5 introdujo una serie de nuevos elementos que brindan a los desarrolladores más opciones al tiempo que incorporan funciones de accesibilidad. Estas etiquetas incluyen <code>main</code> , <code>header</code> , <code>footer</code> , <code>nav</code> , <code>article</code> y <code>section</code> , entre otras. Por defecto, un navegador presenta estos elementos de manera similar al humilde <code>div</code> . Sin embargo, usarlos cuando sea apropiado le da un significado adicional a su marca. El nombre de la etiqueta solo puede indicar el tipo de información que contiene, lo que agrega un significado semántico a ese contenido. Las tecnologías de asistencia pueden acceder a esta información para proporcionar un mejor resumen de la página u opciones de navegación para sus usuarios. El elemento <code>main</code> se utiliza para envolver (usted lo adivinó) el contenido principal, y solo debe haber uno por página. Está destinado a rodear la información relacionada con el tema central de su página. No está diseñado para incluir elementos que se repiten en todas las páginas, como enlaces de navegación o banners. La etiqueta <code>main</code> también tiene un punto de referencia incorporado que la tecnología de asistencia puede usar para navegar rápidamente al contenido principal. Si alguna vez ha visto un enlace &quot;Ir al contenido principal&quot; en la parte superior de una página, el uso de una etiqueta principal otorga automáticamente esa funcionalidad a los dispositivos de asistencia. </section>

## Instructions
<section id="instructions"> Camper Cat tiene algunas grandes ideas para su página de armas ninja. Ayúdelo a establecer su margen de beneficio mediante la adición de apertura y cierre de etiquetas <code>main</code> entre la <code>header</code> y <code>footer</code> (como se vio en otros desafíos). Mantener las etiquetas <code>main</code> vacías por ahora. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su código debe tener una etiqueta <code>main</code> .
    testString: 'assert($("main").length == 1, "Your code should have one <code>main</code> tag.");'
  - text: Las etiquetas <code>main</code> deben estar entre la etiqueta de <code>header</code> cierre y la etiqueta de <code>footer</code> apertura.
    testString: 'assert(code.match(/<\/header>\s*?<main>\s*?<\/main>/gi), "The <code>main</code> tags should be between the closing <code>header</code> tag and the opening <code>footer</code> tag.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<header>
  <h1>Las Armas del Ninja</h1>
</header>



<footer></footer>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solución requerida
```

</section>
