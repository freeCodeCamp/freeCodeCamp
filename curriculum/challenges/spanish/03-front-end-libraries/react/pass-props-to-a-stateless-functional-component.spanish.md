---
id: 5a24c314108439a4d4036169
title: Pass Props to a Stateless Functional Component
localeTitle: Pase los apoyos a un componente funcional sin estado
challengeType: 6
isRequired: false
---

## Description
<section id='description'> 
Los desafíos anteriores cubrieron mucho la creación y composición de elementos JSX, componentes funcionales y componentes de clase de estilo ES6 en React. Con esta base, es hora de ver otra característica muy común en React: <b>props</b> . En React, puede pasar accesorios o propiedades a componentes secundarios. Supongamos que tiene un componente de la <code>App</code> que representa un componente secundario llamado <code>Welcome</code> que es un componente funcional sin estado. Puedes pasar <code>user</code> propiedad de <code>Welcome</code> un <code>user</code> escribiendo: 
<blockquote>&lt;App&gt;<br>&nbsp;&nbsp;&lt;Welcome user='Mark' /&gt;<br>&lt;/App&gt;</blockquote> 
Utiliza <strong>los atributos HTML personalizados</strong> que React proporciona soporte para pasar el <code>user</code> la propiedad al componente <code>Welcome</code> . Ya que <code>Welcome</code> es un componente funcional sin estado, tiene acceso a este valor así: 
<blockquote>const Welcome = (props) => &lt;h1&gt;Hello, {props.user}!&lt;/h1&gt;</blockquote> 
Es estándar llamar a este valor <code>props</code> y cuando se trata de componentes funcionales sin estado, básicamente lo considera como un argumento de una función que devuelve JSX. Puede acceder al valor del argumento en el cuerpo de la función. Con los componentes de clase, verás que esto es un poco diferente. 
</section>

## Instructions
<section id='instructions'> 
Hay componentes de <code>Calendar</code> y <code>CurrentDate</code> en el editor de código. Al representar <code>CurrentDate</code> desde el componente <code>Calendar</code> , pase una propiedad de <code>date</code> asignada a la fecha actual desde el objeto <code>Date</code> de JavaScript. Luego acceda a este <code>prop</code> en el componente <code>CurrentDate</code> , mostrando su valor dentro de las etiquetas <code>p</code> . Tenga en cuenta que para que <code>prop</code> valores <code>prop</code> sean evaluados como JavaScript, deben estar encerrados entre paréntesis, por ejemplo <code>date={Date()}</code> . 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El componente <code>Calendar</code> debe devolver un único elemento <code>div</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(Calendar)); return mockedComponent.children().type() === "div"; })(), "The <code>Calendar</code> component should return a single <code>div</code> element.");'
  - text: El segundo elemento secundario del componente <code>Calendar</code> debe ser el componente <code>CurrentDate</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(Calendar)); return mockedComponent.children().childAt(1).name() === "CurrentDate"; })(), "The second child of the <code>Calendar</code> component should be the <code>CurrentDate</code> component.");'
  - text: El componente <code>CurrentDate</code> debe tener una prop llamada <code>date</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(Calendar)); return mockedComponent.children().childAt(1).props().date })(), "The <code>CurrentDate</code> component should have a prop called <code>date</code>.");'
  - text: La <code>date</code> prop. Del <code>CurrentDate</code> debe contener una cadena de texto.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(Calendar)); const prop = mockedComponent.children().childAt(1).props().date; return( typeof prop === "string" && prop.length > 0 ); })(), "The <code>date</code> prop of the <code>CurrentDate</code> should contain a string of text.");'
  - text: El componente <code>CurrentDate</code> debe representar el valor de la <code>date</code> prop en la etiqueta <code>p</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(Calendar)); return mockedComponent.find("p").html().includes(Date().substr(3)); })(), "The <code>CurrentDate</code> component should render the value from the <code>date</code> prop in the <code>p</code> tag.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx

const CurrentDate = (props) => {
  return (
    <div>
      { /* change code below this line */ }
      <p>The current date is: </p>
      { /* change code above this line */ }
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        { /* change code below this line */ }
        <CurrentDate />
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
const CurrentDate = (props) => {
  return (
    <div>
      { /* change code below this line */ }
      <p>The current date is: {props.date}</p>
      { /* change code above this line */ }
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        { /* change code below this line */ }
        <CurrentDate date={Date()} />
        { /* change code above this line */ }
      </div>
    );
  }
};
```

</section>
