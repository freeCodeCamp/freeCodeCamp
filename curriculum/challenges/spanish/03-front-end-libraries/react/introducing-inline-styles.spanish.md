---
id: 5a24c314108439a4d4036181
title: Introducing Inline Styles
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Introducción a los estilos en línea
---

## Description
<section id="description"> Hay otros conceptos complejos que agregan capacidades poderosas a su código React. Pero puede que se esté preguntando sobre el problema más simple de cómo diseñar los elementos JSX que crea en React. Probablemente sepa que no será exactamente lo mismo que trabajar con HTML debido a <a target="_blank" href="/learn/front-end-libraries/react/define-an-html-class-in-jsx">la forma en que aplica las clases a los elementos JSX</a> . Si importa estilos de una hoja de estilo, no es muy diferente en absoluto. Aplicas una clase a tu elemento JSX usando el atributo <code>className</code> y aplicas estilos a la clase en tu hoja de estilo. Otra opción es aplicar estilos en <strong><em>línea</em></strong> , que son muy comunes en el desarrollo de ReactJS. Usted aplica estilos en línea a elementos JSX similares a cómo lo hace en HTML, pero con algunas diferencias JSX. Aquí hay un ejemplo de un estilo en línea en HTML: <code>&lt;div style=&quot;color: yellow; font-size: 16px&quot;&gt;Mellow Yellow&lt;/div&gt;</code> elementos JSX usan el atributo de <code>style</code> , pero debido a la forma en que se transpila JSX, puede &#39;t establecer el valor a una <code>string</code> . En su lugar, lo establece igual a un <code>object</code> JavaScript. Aquí hay un ejemplo: <code>&lt;div style={{color: &quot;yellow&quot;, fontSize: 16}}&gt;Mellow Yellow&lt;/div&gt;</code> ¿Observa cómo la propiedad &quot;fontSize&quot; está en <a target="_blank" href="https://es.wikipedia.org/wiki/CamelCase">camelCase</a>? Esto se debe a que React no aceptará claves de kebab en el objeto de estilo. React aplicará el nombre de propiedad correcto para nosotros en el HTML. </section>

## Instructions
<section id="instructions"> Agregue un atributo de <code>style</code> al <code>div</code> en el editor de código para darle al texto un color rojo y un tamaño de fuente de 72px. Tenga en cuenta que, opcionalmente, puede configurar el tamaño de fuente como un número, omitiendo las unidades &quot;px&quot;, o escribirlo como &quot;72px&quot;. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El componente debe representar un elemento <code>div</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(Colorful)); return mockedComponent.children().type() === "div"; })(), "The component should render a <code>div</code> element.");'
  - text: El elemento <code>div</code> debe tener un color <code>red</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(Colorful)); return mockedComponent.children().props().style.color === "red"; })(), "The <code>div</code> element should have a color of <code>red</code>.");'
  - text: El elemento <code>div</code> debe tener un tamaño de fuente de <code>72px</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(Colorful)); return (mockedComponent.children().props().style.fontSize === 72 || mockedComponent.children().props().style.fontSize === "72" || mockedComponent.children().props().style.fontSize === "72px"); })(), "The <code>div</code> element should have a font size of <code>72px</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class Colorful extends React.Component {
  render() {
    return (
      <div>Big Red</div>
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
