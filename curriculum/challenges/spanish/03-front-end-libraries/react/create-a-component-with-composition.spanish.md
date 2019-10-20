---
id: 5a24c314108439a4d4036164
title: Create a Component with Composition
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Crear un componente con composición
---

## Description
<section id="description"> Ahora veremos cómo podemos componer varios componentes de React juntos. Imagina que estás creando una aplicación y has creado tres componentes, una <code>Navbar</code> , un <code>Dashboard</code> y un <code>Footer</code> . Para componer estos componentes juntos, puede crear un componente <i>primario de la</i> <code>App</code> que represente cada uno de estos tres componentes como <i>secundarios</i> . Para representar un componente como un elemento secundario en un componente React, incluya el nombre del componente escrito como una etiqueta HTML personalizada en el JSX. Por ejemplo, en el método de <code>render</code> podrías escribir: <blockquote> regreso ( <br> &lt;App&gt; <br> &lt;Navbar /&gt; <br> &lt;Dashboard /&gt; <br> &lt;Pie de página /&gt; <br> &lt;/App&gt; <br> ) </blockquote> Cuando React encuentra una etiqueta HTML personalizada que hace referencia a otro componente (un nombre de componente envuelto en <code>&lt; /&gt;</code> como en este ejemplo), representa el marcado para ese componente en la ubicación de la etiqueta. Esto debería ilustrar la relación padre / hijo entre el componente de la <code>App</code> y la <code>Navbar</code> , el <code>Dashboard</code> y el <code>Footer</code> . </section>

## Instructions
<section id="instructions"> En el editor de código, hay un componente funcional simple llamado <code>ChildComponent</code> y un componente React llamado <code>ParentComponent</code> . Componga los dos juntos renderizando el <code>ChildComponent</code> dentro del <code>ParentComponent</code> . Asegúrese de cerrar la etiqueta <code>ChildComponent</code> con una barra diagonal. <strong>Nota:</strong> <code>ChildComponent</code> se define con una función de flecha ES6 porque es una práctica muy común cuando se usa React. Sin embargo, debes saber que esto es solo una función. Si no está familiarizado con la sintaxis de la función de flecha, consulte la sección de JavaScript. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El componente React debe devolver un único elemento <code>div</code> .
    testString: 'assert((function() { var shallowRender = Enzyme.shallow(React.createElement(ParentComponent)); return shallowRender.type() === "div"; })(), "The React component should return a single <code>div</code> element.");'
  - text: El componente debe devolver dos elementos anidados.
    testString: 'assert((function() { var shallowRender = Enzyme.shallow(React.createElement(ParentComponent)); return shallowRender.children().length === 2; })(), "The component should return two nested elements.");'
  - text: El componente debe devolver el ChildComponent como su segundo hijo.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ParentComponent)); return mockedComponent.find("ParentComponent").find("ChildComponent").length === 1; })(), "The component should return the ChildComponent as its second child.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        { /* change code below this line */ }


        { /* change code above this line */ }
      </div>
    );
  }
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
