---
id: 5a24c314108439a4d403618b
title: Give Sibling Elements a Unique Key Attribute
challengeType: 6
videoUrl: ''
localeTitle: Dar a los elementos hermanos un atributo clave único
---

## Description
<section id="description"> El último desafío mostró cómo se usa el método de <code>map</code> para generar dinámicamente una serie de elementos basados ​​en la entrada del usuario. Sin embargo, faltaba una pieza importante en ese ejemplo. Cuando crea una matriz de elementos, cada uno necesita un atributo de <code>key</code> establecido en un valor único. React utiliza estas teclas para realizar un seguimiento de los elementos que se agregan, cambian o eliminan. Esto ayuda a hacer que el proceso de representación sea más eficiente cuando la lista se modifica de alguna manera. Tenga en cuenta que las claves solo tienen que ser únicas entre elementos hermanos, no tienen que ser únicas a nivel mundial en su aplicación. </section>

## Instructions
<section id="instructions"> El editor de código tiene una matriz con algunos marcos front-end y un componente funcional sin estado llamado <code>Frameworks()</code> . <code>Frameworks()</code> necesita asignar la matriz a una lista desordenada, como en el último desafío. Termine de escribir la devolución de llamada del <code>map</code> para devolver un elemento <code>li</code> para cada marco en la matriz <code>frontEndFrameworks</code> . Esta vez, asegúrese de dar a cada <code>li</code> un atributo <code>key</code> , establecido en un valor único. Normalmente, desea que la clave sea algo que identifique de forma única el elemento que se está representando. Como último recurso, se puede usar el índice de matriz, pero normalmente debe intentar usar una identificación única. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El componente <code>Frameworks</code> debería existir y renderizarse a la página.
    testString: 'assert(Enzyme.mount(React.createElement(Frameworks)).find("Frameworks").length === 1, "The <code>Frameworks</code> component should exist and render to the page.");'
  - text: <code>Frameworks</code> deberían representar un elemento <code>h1</code> .
    testString: 'assert(Enzyme.mount(React.createElement(Frameworks)).find("h1").length === 1, "<code>Frameworks</code> should render an <code>h1</code> element.");'
  - text: <code>Frameworks</code> deberían representar un elemento <code>ul</code> .
    testString: 'assert(Enzyme.mount(React.createElement(Frameworks)).find("ul").length === 1, "<code>Frameworks</code> should render a <code>ul</code> element.");'
  - text: La etiqueta <code>ul</code> debe mostrar 6 elementos <code>li</code> secundarios.
    testString: 'assert(Enzyme.mount(React.createElement(Frameworks)).find("ul").children().length === 6 && Enzyme.mount(React.createElement(Frameworks)).find("ul").childAt(0).name() === "li" && Enzyme.mount(React.createElement(Frameworks)).find("li").length === 6, "The <code>ul</code> tag should render 6 child <code>li</code> elements.");'
  - text: Cada elemento del elemento de la lista debe tener un atributo de <code>key</code> único.
    testString: 'assert((() => { const ul = Enzyme.mount(React.createElement(Frameworks)).find("ul"); const keys = new Set([ ul.childAt(0).key(), ul.childAt(1).key(), ul.childAt(2).key(), ul.childAt(3).key(), ul.childAt(4).key(), ul.childAt(5).key(), ]); return keys.size === 6; })(), "Each list item element should have a unique <code>key</code> attribute.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const frontEndFrameworks = [
  'React',
  'Angular',
  'Ember',
  'Knockout',
  'Backbone',
  'Vue'
];

function Frameworks() {
  const renderFrameworks = null; // change code here
  return (
    <div>
      <h1>Popular Front End JavaScript Frameworks</h1>
      <ul>
        {renderFrameworks}
      </ul>
    </div>
  );
};

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
