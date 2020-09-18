---
id: 5a24c314108439a4d4036165
title: Use React to Render Nested Components
challengeType: 6
videoUrl: ''
localeTitle: Use React para renderizar componentes anidados
---

## Description
<section id="description"> El último desafío mostró una forma sencilla de componer dos componentes, pero hay muchas formas diferentes de componer componentes con React. La composición de componentes es una de las características poderosas de React. Cuando trabaja con React, es importante comenzar a pensar en su interfaz de usuario en términos de componentes como el ejemplo de la aplicación en el último desafío. Rompes tu interfaz de usuario en sus bloques de construcción básicos, y esas piezas se convierten en componentes. Esto ayuda a separar el código responsable de la IU del código responsable de manejar la lógica de la aplicación. Puede simplificar enormemente el desarrollo y mantenimiento de proyectos complejos. </section>

## Instructions
<section id="instructions"> Hay dos componentes funcionales definidos en el editor de código, llamados <code>TypesOfFruit</code> y <code>Fruits</code> . Tome el <code>TypesOfFruit</code> componentes y componerlos, o un <em>nido</em> que, dentro de la <code>Fruits</code> componente. Luego tome el componente <code>Fruits</code> y <code>TypesOfFood</code> dentro del componente <code>TypesOfFood</code> . El resultado debe ser un componente hijo, anidado dentro de un componente padre, que está anidado dentro de un componente padre propio. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El componente <code>TypesOfFood</code> debe devolver un único elemento <code>div</code> .
    testString: 'assert(Enzyme.shallow(React.createElement(TypesOfFood)).type() === "div", "The <code>TypesOfFood</code> component should return a single <code>div</code> element.");'
  - text: El componente <code>TypesOfFood</code> debe devolver el componente <code>Fruits</code> .
    testString: 'assert(Enzyme.shallow(React.createElement(TypesOfFood)).props().children[1].type.name === "Fruits", "The <code>TypesOfFood</code> component should return the <code>Fruits</code> component.");'
  - text: El componente <code>Fruits</code> debe devolver el componente <code>TypesOfFruit</code> .
    testString: 'assert(Enzyme.mount(React.createElement(TypesOfFood)).find("h2").html() === "<h2>Fruits:</h2>", "The <code>Fruits</code> component should return the <code>TypesOfFruit</code> component.");'
  - text: El componente <code>TypesOfFruit</code> debe devolver los elementos <code>h2</code> y <code>ul</code> .
    testString: 'assert(Enzyme.mount(React.createElement(TypesOfFood)).find("ul").text() === "ApplesBlueberriesStrawberriesBananas", "The <code>TypesOfFruit</code> component should return the <code>h2</code> and <code>ul</code> elements.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div>
      { /* change code below this line */ }

      { /* change code above this line */ }
    </div>
  );
};

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
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
