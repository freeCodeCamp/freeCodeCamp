---
id: 5a24c314108439a4d4036161
title: Learn About Self-Closing JSX Tags
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Aprenda acerca de las etiquetas JSX de cierre automático
---

## Description
<section id="description"> Hasta ahora, ha visto cómo JSX se diferencia de HTML en una forma clave con el uso de <code>className</code> vs. <code>class</code> para definir las clases de HTML. Otra forma importante en que JSX difiere de HTML es en la idea de la etiqueta de cierre automático. En HTML, casi todas las etiquetas tienen una etiqueta de apertura y de cierre: <code>&lt;div&gt;&lt;/div&gt;</code> ; La etiqueta de cierre siempre tiene una barra diagonal hacia delante antes del nombre de la etiqueta que está cerrando. Sin embargo, hay instancias especiales en HTML llamadas &quot;etiquetas de cierre automático&quot;, o etiquetas que no requieren una etiqueta de apertura y de cierre antes de que pueda comenzar otra etiqueta. Por ejemplo, la etiqueta de salto de línea puede escribirse como <code>&lt;br&gt;</code> o como <code>&lt;br /&gt;</code> , pero nunca debe escribirse como <code>&lt;br&gt;&lt;/br&gt;</code> , ya que no contiene ningún contenido. En JSX, las reglas son un poco diferentes. Cualquier elemento JSX puede escribirse con una etiqueta de cierre automático, y cada elemento debe estar cerrado. La etiqueta de salto de línea, por ejemplo, siempre debe escribirse como <code>&lt;br /&gt;</code> para que sea un JSX válido que pueda ser transpilado. Un <code>&lt;div&gt;</code> , por otro lado, puede escribirse como <code>&lt;div /&gt;</code> o <code>&lt;div&gt;&lt;/div&gt;</code> . La diferencia es que en la primera versión de sintaxis no hay forma de incluir nada en <code>&lt;div /&gt;</code> . Verá en los desafíos posteriores que esta sintaxis es útil al procesar componentes React. </section>

## Instructions
<section id="instructions"> Arregle los errores en el editor de código para que sea JSX válido y se transfiera correctamente. Asegúrese de no cambiar ninguno de los contenidos, solo necesita cerrar las etiquetas donde se necesiten. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: La constante <code>JSX</code> debe devolver un elemento <code>div</code> .
    testString: 'assert.strictEqual(JSX.type, "div", "The constant <code>JSX</code> should return a <code>div</code> element.");'
  - text: El <code>div</code> debe contener una etiqueta <code>br</code> .
    testString: 'assert(Enzyme.shallow(JSX).find("br").length === 1, "The <code>div</code> should contain a <code>br</code> tag.");'
  - text: El <code>div</code> debe contener una etiqueta <code>hr</code> .
    testString: 'assert(Enzyme.shallow(JSX).find("hr").length === 1, "The <code>div</code> should contain an <code>hr</code> tag.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const JSX = (
  <div>
    {/* remove comment and change code below this line
    <h2>Welcome to React!</h2> <br >
    <p>Be sure to close all tags!</p>
    <hr >
    remove comment and change code above this line */}
  </div>
);

```

</div>


### After Test
<div id='jsx-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
