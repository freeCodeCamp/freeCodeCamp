---
id: 5a24c314108439a4d4036163
title: Create a React Component
localeTitle: Crear un componente React
challengeType: 6
isRequired: false
---

## Description
<section id='description'> 
La otra forma de definir un componente React es con la sintaxis de <code>class</code> ES6. En el siguiente ejemplo, <code>Kitten</code> extiende <code>React.Component</code> : 
<blockquote>class Kitten extends React.Component {<br>&nbsp;&nbsp;constructor(props) {<br>&nbsp;&nbsp;&nbsp;&nbsp;super(props);<br>&nbsp;&nbsp;}<br><br>&nbsp;&nbsp;render() {<br>&nbsp;&nbsp;&nbsp;&nbsp;return (<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Hi&lt;/h1&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;);<br>&nbsp;&nbsp;}<br>}</blockquote> 
Esto crea un <code>Kitten</code> clase ES6 que extiende la clase <code>React.Component</code> . Por lo tanto, la clase <code>Kitten</code> ahora tiene acceso a muchas características útiles de React, como los enlaces locales de estado y ciclo de vida. No se preocupe si aún no está familiarizado con estos términos, se cubrirán con mayor detalle en los desafíos posteriores. 
También note que la clase <code>Kitten</code> tiene un <code>constructor</code> definido dentro de él que llama a <code>super()</code> . Utiliza <code>super()</code> para llamar al constructor de la clase padre, en este caso <code>React.Component</code> . El constructor es un método especial utilizado durante la inicialización de objetos que se crean con la palabra clave de <code>class</code> . Es una práctica recomendada llamar al <code>constructor</code> un componente con <code>super</code> y pasarle <code>props</code> a ambos. Esto asegura que el componente se inicialice correctamente. Por ahora, sepa que es estándar que se incluya este código. Pronto verás otros usos para el constructor, así como <code>props</code> . 
</section>

## Instructions
<section id='instructions'> 
<code>MyComponent</code> se define en el editor de código usando la sintaxis de clase. Termine de escribir el método de <code>render</code> para que devuelva un elemento <code>div</code> que contenga un <code>h1</code> con el texto <code>Hello React!</code> . 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El componente React debe devolver un elemento <code>div</code> .
    testString: 'assert(Enzyme.shallow(React.createElement(MyComponent)).type() === "div", "The React component should return a <code>div</code> element.");'
  - text: El <code>div</code> devuelto debe representar un encabezado <code>h1</code> dentro de él.
    testString: 'assert(/<div><h1>.*<\/h1><\/div>/.test(Enzyme.shallow(React.createElement(MyComponent)).html()), "The returned <code>div</code> should render an <code>h1</code> header within it.");'
  - text: El encabezado <code>h1</code> debe contener la cadena <code>Hello React!</code> .
    testString: 'assert(Enzyme.shallow(React.createElement(MyComponent)).html() === "<div><h1>Hello React!</h1></div>", "The <code>h1</code> header should contain the string <code>Hello React!</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // change code below this line



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
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // change code below this line
    return (
      <div>
        <h1>Hello React!</h1>
      </div>
    );
    // change code above this line
  }
};
```

</section>
