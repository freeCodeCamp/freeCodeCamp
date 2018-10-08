---
id: 5a24c314108439a4d403618d
title: Render React on the Server with renderToString
localeTitle: Render React en el servidor con renderToString
challengeType: 6
isRequired: false
---

## Description
<section id='description'> 
Hasta ahora, ha estado renderizando componentes React en el cliente. Normalmente, esto es lo que siempre harás. Sin embargo, hay algunos casos de uso en los que tiene sentido renderizar un componente React en el servidor. Dado que React es una biblioteca de vista de JavaScript y puede ejecutar JavaScript en el servidor con Node, esto es posible. De hecho, React proporciona un método <code>renderToString()</code> que puede utilizar para este propósito. 
Hay dos razones clave por las que se puede usar la representación en el servidor en una aplicación del mundo real. Primero, sin hacer esto, sus aplicaciones React consistirán en un archivo HTML relativamente vacío y un gran paquete de JavaScript cuando se cargue inicialmente en el navegador. Es posible que esto no sea ideal para los motores de búsqueda que intentan indexar el contenido de sus páginas para que las personas puedan encontrarlo. Si representa el marcado HTML inicial en el servidor y lo envía al cliente, la carga de la página inicial contiene todo el marcado del que los motores de búsqueda pueden rastrear. En segundo lugar, esto crea una experiencia de carga de página inicial más rápida porque el HTML representado es más pequeño que el código JavaScript de toda la aplicación. React aún podrá reconocer su aplicación y administrarla después de la carga inicial. 
</section>

## Instructions
<section id='instructions'> 
El método <code>renderToString()</code> se proporciona en <code>ReactDOMServer</code> , que está disponible aquí como un objeto global. El método toma un argumento que es un elemento React. Usa esto para renderizar la <code>App</code> a una cadena. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El componente de la <code>App</code> debe representar en una cadena utilizando <code>ReactDOMServer.renderToString</code> .
    testString: 'getUserInput => assert(getUserInput("index").replace(/ /g,"").includes("ReactDOMServer.renderToString(<App/>)") && Enzyme.mount(React.createElement(App)).children().name() === "div", "The <code>App</code> component should render to a string using <code>ReactDOMServer.renderToString</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div/>
  }
};

// change code below this line

```

</div>

### Before Test
<div id='jsx-setup'>

```jsx
var ReactDOMServer = { renderToString(x) { return null; } };
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
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div/>
  }
};

// change code below this line
ReactDOMServer.renderToString(<App/>);
```

</section>
