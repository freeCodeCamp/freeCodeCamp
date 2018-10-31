---
id: 587d78a4367417b2b2512ad5
title: Adjust the Tone of a Color
challengeType: 0
videoUrl: ''
localeTitle: Ajustar el tono de un color
---

## Description
<section id="description"> La opción <code>hsl()</code> en CSS también facilita el ajuste del tono de un color. Mezclar el blanco con un tono puro crea un tinte de ese color, y agregar negro creará un tono. Alternativamente, se produce un tono agregando gris o teñiendo y sombreando. Recuerde que la &#39;s&#39; y la &#39;l&#39; de <code>hsl()</code> representan la saturación y la luminosidad, respectivamente. El porcentaje de saturación cambia la cantidad de gris y el porcentaje de luminosidad determina la cantidad de blanco o negro que hay en el color. Esto es útil cuando tienes un tono base que te gusta, pero necesitas diferentes variaciones de él. </section>

## Instructions
<section id="instructions"> La barra de navegación en este sitio actualmente hereda su <code>background-color</code> de <code>background-color</code> del elemento del <code>header</code> . Comenzando con ese color como base, agregue un <code>background-color</code> al elemento de <code>nav</code> para que use el mismo tono cian, pero tiene 80% de saturación y 25% de luminosidad para cambiar su tono y tono. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El elemento de <code>nav</code> debe tener un <code>background-color</code> de <code>background-color</code> del tono cian ajustado utilizando la propiedad <code>hsl()</code> .
    testString: 'assert(code.match(/nav\s*?{\s*?background-color:\s*?hsl\(180,\s*?80%,\s*?25%\)/gi), "The <code>nav</code> element should have a <code>background-color</code> of the adjusted cyan tone using the <code>hsl()</code> property.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  header {
    background-color: hsl(180, 90%, 35%);
    color: #FFFFFF;
  }

  nav {

  }

  h1 {
    text-indent: 10px;
    padding-top: 10px;
  }

  nav ul {
    margin: 0px;
    padding: 5px 0px 5px 30px;
  }

  nav li {
    display: inline;
    margin-right: 20px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
</style>

<header>
  <h1>Cooking with FCC!</h1>
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Classes</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</header>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
