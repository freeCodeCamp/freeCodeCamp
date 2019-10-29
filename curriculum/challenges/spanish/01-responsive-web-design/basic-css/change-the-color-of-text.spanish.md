---
id: bad87fee1348bd9aedf08803
title: Change the Color of Text
challengeType: 0
videoUrl: ''
localeTitle: Cambiar el color del texto
---

## Descripción
<section id="description"> Ahora cambiemos el color de algunos de nuestros textos. Podemos hacer esto cambiando el <code>style</code> de su elemento <code>h2</code> . La propiedad que es responsable del color del texto de un elemento es la propiedad de estilo de <code>color</code> . A continuación le indicamos cómo establecería el color del texto de su elemento <code>h2</code> en azul: <code>&lt;h2 style=&quot;color: blue;&quot;&gt;CatPhotoApp&lt;/h2&gt;</code> Tenga en cuenta que es una buena práctica finalizar las declaraciones de <code>style</code> línea con una <code>;</code> . </section>

## Instrucciones
<section id="instructions"> Cambia el estilo de tu elemento <code>h2</code> para que su color de texto sea rojo. </section>

## Pruebas
<section id='tests'>

```yml
tests:
  - text: Tu elemento <code>h2</code> debe ser rojo.
    testString: 'assert($("h2").css("color") === "rgb(255, 0, 0)", "Your <code>h2</code> element should be red.");'
  - text: Su declaración de <code>style</code> debe terminar con un <code>;</code> .
    testString: 'assert(code.match(/<h2\s+style\s*=\s*(\"|")\s*color\s*:\s*(?:rgb\(\s*255\s*,\s*0\s*,\s*0\s*\)|rgb\(\s*100%\s*,\s*0%\s*,\s*0%\s*\)|red|#ff0000|#f00|hsl\(\s*0\s*,\s*100%\s*,\s*50%\s*\))\s*\;(\"|")>\s*CatPhotoApp\s*<\/h2>/)," Your <code>style</code> declaration should end with a <code>;</code> .");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Haga clic aquí para ver más <a href="#">fotos de gatos</a>.</p>
  

  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

   <div>
    <p>Cosas que los gatos aman:</p>
    <ul>
      <li>pellizco de gato</li>
      <li>punteros laser</li>
      <li>lasaña</li>
    </ul>
    <p>3 cosas que odian los gatos:</p>
    <ol>
      <li>tratamiento de pulgas</li>
      <li>trueno</li>
      <li>otros gatos</li>
    </ol>
  </div>

  <form action="/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" checked> Interior</label>
    <label><input type="radio" name="indoor-outdoor"> Exterior</label><br>
    <label><input type="checkbox" name="personality" checked> Amoroso</label>
    <label><input type="checkbox" name="personality"> Perezoso</label>
    <label><input type="checkbox" name="personality"> Energético</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Enviar</button>
  </form>
</main>

```

</div>



</section>

## Solución
<section id='solution'>

```js
// solution required
```
</section>
