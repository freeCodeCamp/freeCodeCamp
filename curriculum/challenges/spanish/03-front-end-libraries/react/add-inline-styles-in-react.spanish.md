---
id: 5a24c314108439a4d4036182
title: Add Inline Styles in React
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Añadir estilos en línea en React
---

## Description
<section id="description"> Es posible que haya notado en el último desafío que existían otras diferencias de sintaxis con respecto a los estilos HTML en línea además del atributo de <code>style</code> establecido en un objeto de JavaScript. Primero, los nombres de ciertas propiedades de estilo CSS usan camel case. Por ejemplo, el último desafío establece el tamaño de la fuente con <code>fontSize</code> en lugar de <code>font-size</code>. Las palabras con guión, como <code>font-size</code> son sintaxis no válida para las propiedades de los objetos de JavaScript, por lo que React usa camel case como regla general, todas las propiedades de estilo con guión se escriben utilizando el camel case en JSX. Se supone que todas las propiedades con unidades de longitud como valor (como <code>height</code> , <code>width</code> y <code>fontSize</code> ) están en <code>px</code> a menos que se especifique lo contrario. Si desea puede usar <code>em</code>, por ejemplo, envuelva el valor y las unidades entre comillas, como <code>{fontSize: &quot;4em&quot;}</code> . Aparte de las propiedades con valores en <code>px</code>, todos los demás valores de propiedad deben incluirse entre comillas. </section>

## Instructions
<section id="instructions"> Si tiene un gran conjunto de estilos, puede asignar un <code>object</code> estilo a una constante para mantener su código organizado. Descomente la constante de <code>styles</code> y declare un <code>object</code> con tres propiedades de estilo y sus valores. Dale al <code>div</code> un color de <code>&quot;purple&quot;</code> , un tamaño de fuente de <code>40</code> , y un borde de <code>&quot;2px solid purple&quot;</code> . A continuación, establezca el atributo de <code>style</code> igual a la constante de <code>styles</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: La variable de <code>styles</code> debe ser un <code>object</code> con tres propiedades.
    testString: 'assert(Object.keys(styles).length === 3, "La variable de <code>styles</code> debe ser un <code>object</code> con tres propiedades.");'
  - text: La variable de <code>styles</code> debe tener una propiedad de <code>color</code> establecida en un valor de <code>purple</code>.
    testString: 'assert(styles.color === "purple", "La variable de <code>styles</code> debe tener una propiedad de <code>color</code> establecida en un valor de <code>purple</code>.");'
  - text: La variable de <code>styles</code> debe tener una propiedad <code>fontSize</code> establecida en un valor de <code>40</code>.
    testString: 'assert(styles.fontSize === 40, "La variable de <code>styles</code> debe tener una propiedad <code>fontSize</code> establecida en un valor de <code>40</code>.");'
  - text: La variable de <code>styles</code> debe tener una propiedad de <code>border</code> establecida en un valor de <code>2px solid purple</code>.
    testString: 'assert(styles.border === "2px solid purple", "La variable de <code>styles</code> debe tener una propiedad de <code>border</code> establecida en un valor de <code>2px solid purple</code>.");'
  - text: El componente debe representar un elemento <code>div</code>.
    testString: 'assert((function() { const mockedComponent = Enzyme.shallow(React.createElement(Colorful)); return mockedComponent.type() === "div"; })(), "El componente debe representar un elemento <code>div</code>.");'
  - text: El elemento <code>div</code> debe tener sus estilos definidos por el objeto de <code>styles</code>.
    testString: 'assert((function() { const mockedComponent = Enzyme.shallow(React.createElement(Colorful)); return (mockedComponent.props().style.color === "purple" && mockedComponent.props().style.fontSize === 40 && mockedComponent.props().style.border === "2px solid purple"); })(), "El elemento <code>div</code> debe tener sus estilos definidos por el objeto de <code>styles</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
// const styles =
// change code above this line
class Colorful extends React.Component {
  render() {
    // change code below this line
    return (
      <div style={{color: "yellow", fontSize: 24}}>Style Me!</div>
    );
    // change code above this line
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
const styles = {
  color: "purple",
  fontSize: 40,
  border: "2px solid purple"
};
// change code above this line
class Colorful extends React.Component {
  render() {
    // change code below this line
    return (
      <div style={styles}>Style Me!</div>
  // change code above this line
    );
  }
};

```
</section>
