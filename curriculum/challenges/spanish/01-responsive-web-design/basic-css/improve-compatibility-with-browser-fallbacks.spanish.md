---
id: 5b7d72c338cd7e35b63f3e14
title: Improve Compatibility with Browser Fallbacks
challengeType: 0
videoUrl: ''
localeTitle: Mejora la compatibilidad con los fallbacks del navegador
---

## Descripción
<section id="description"> Cuando trabaje con CSS, es probable que tenga problemas de compatibilidad con el navegador en algún momento. Esta es la razón por la que es importante proporcionar interrupciones en el navegador para evitar posibles problemas. Cuando su navegador analiza el CSS de una página web, ignora cualquier propiedad que no reconozca o admita. Por ejemplo, si usa una variable CSS para asignar un color de fondo en un sitio, Internet Explorer ignorará el color de fondo porque no admite las variables CSS. En ese caso, el navegador utilizará cualquier valor que tenga para esa propiedad. Si no puede encontrar ningún otro valor establecido para esa propiedad, volverá al valor predeterminado, que generalmente no es ideal. Esto significa que si desea proporcionar un respaldo de navegador, es tan fácil como proporcionar otro valor más ampliamente soportado inmediatamente antes de su declaración. De esa manera, un navegador antiguo tendrá algo en lo que basarse, mientras que un navegador más nuevo simplemente interpretará cualquier declaración que se presente más adelante en la cascada. </section>

## Instrucciones
<section id="instructions"> Parece que se está utilizando una variable para establecer el color de fondo de la clase <code>.red-box</code> . Mejoremos la compatibilidad de nuestro navegador agregando otra declaración de <code>background</code> justo antes de la declaración existente y establezcamos su valor en rojo. </section>

## Pruebas
<section id='tests'>

```yml
tests:
  - text: Su regla <code>.red-box</code> debe incluir una reserva con el <code>background</code> establecido en rojo inmediatamente antes de la declaración de <code>background</code> existente.
    testString: 'assert(code.match(/.red-box\s*{[^}]*background:\s*(red|#ff0000|#f00|rgb\(\s*255\s*,\s*0\s*,\s*0\s*\)|rgb\(\s*100%\s*,\s*0%\s*,\s*0%\s*\)|hsl\(\s*0\s*,\s*100%\s*,\s*50%\s*\))\s*;\s*background:\s*var\(\s*--red-color\s*\);/gi), "Your <code>.red-box</code> rule should include a fallback with the <code>background</code> set to red immediately before the existing <code>background</code> declaration.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  :root {
    --red-color: red;
  }
  .red-box {

    background: var(--red-color);
    height: 200px;
    width:200px;
  }
</style>
<div class="red-box"></div>

```

</div>



</section>

## Solución
<section id='solution'>

```js
// solution required
```
</section>
