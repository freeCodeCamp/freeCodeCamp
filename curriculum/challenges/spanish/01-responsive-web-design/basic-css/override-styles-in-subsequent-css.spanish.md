---
id: bad87fee1348bd9aedf04756
title: Override Styles in Subsequent CSS
challengeType: 0
videoUrl: ''
localeTitle: Anular estilos en CSS subsiguiente
---

## Descripción
<section id="description"> Nuestra clase de &quot;texto rosa&quot; anuló la declaración CSS de nuestro elemento de <code>body</code> . Acabamos de demostrar que nuestras clases anularán el CSS del elemento <code>body</code> . Entonces, la siguiente pregunta lógica es: ¿qué podemos hacer para anular nuestra clase de <code>pink-text</code> ? </section>

## Instrucciones
<section id="instructions"> Cree una clase CSS adicional llamada <code>blue-text</code> que le dé a un elemento el color azul. Asegúrate de que esté debajo de tu declaración de clase de <code>pink-text</code> . Aplique la clase de <code>blue-text</code> a su elemento <code>h1</code> además de su clase de <code>pink-text</code> , y veamos cuál gana. La aplicación de múltiples atributos de clase a un elemento HTML se realiza con un espacio entre ellos como este: <code>class=&quot;class1 class2&quot;</code> Nota: No importa en qué orden se enumeran las clases en el elemento HTML. Sin embargo, lo que es importante es el orden de las declaraciones de <code>class</code> en la sección <code>&lt;style&gt;</code> . La segunda declaración siempre tendrá prioridad sobre la primera. Debido a que <code>.blue-text</code> se declara segundo, anula los atributos de <code>.pink-text</code> </section>

## Pruebas
<section id='tests'>

```yml
tests:
  - text: Su elemento <code>h1</code> debe tener la clase <code>pink-text</code> .
    testString: 'assert($("h1").hasClass("pink-text"), "Your <code>h1</code> element should have the class <code>pink-text</code>.");'
  - text: Su elemento <code>h1</code> debe tener la clase <code>blue-text</code> .
    testString: 'assert($("h1").hasClass("blue-text"), "Your <code>h1</code> element should have the class <code>blue-text</code>.");'
  - text: Tanto <code>blue-text</code> <code>pink-text</code> deben pertenecer al mismo elemento <code>h1</code> .
    testString: 'assert($(".pink-text").hasClass("blue-text"), "Both <code>blue-text</code> and <code>pink-text</code> should belong to the same <code>h1</code> element.");'
  - text: Su elemento <code>h1</code> debe ser azul.
    testString: 'assert($("h1").css("color") === "rgb(0, 0, 255)", "Your <code>h1</code> element should be blue.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  .pink-text {
    color: pink;
  }
</style>
<h1 class="pink-text">Hello World!</h1>

```

</div>



</section>

## Solución
<section id='solution'>

```js
// solution required
```
</section>
