---
title: React - Components
localeTitle: React - Componentes
---
## React - Componentes

Los componentes son reutilizables en react.js. Puedes inyectar valores en props como se indica a continuación:

```jsx
function Welcome(props) { 
  return <h1>Hello, {props.name}</h1>; 
 } 
 
 const element = <Welcome name="Faisal Arkan" />; 
 ReactDOM.render( 
  element, 
  document.getElementById('root') 
 ); 
```

El valor `name="Faisal Arkan"` se asignará en `{props.name}` de la `function Welcome(props)` y devolverá el componente `<h1>Hello, Faisal Arkan</h1>` el cual esta guardado en la constante `element`. Ahora el componente puede renderizarse a través de la llamada a `ReactDOM.render(element, document.getElemenyById('root'));`.
En este caso, `document.getElemenyById('root')` indica el elemento en el cual se va a renderizar el componente.

### Otras formas de declarar componentes.

Hay muchas formas de declarar componentes al usar React.js, pero hay dos tipos de componentes, componentes **_sin_** **_estado_** y componentes con **_estado_** .

### Con estado

#### Componentes de tipo clase

```jsx
class Cat extends React.Component { 
  constructor(props) { 
    super(props); 
 
    this.state = { 
      humor: 'happy' 
    } 
  } 
  render() { 
    return( 
      <div> 
        <h1>{this.props.name}</h1> 
        <p> 
          {this.props.color} 
        </p> 
      </div> 
    ); 
  } 
 } 
```

### Componentes sin estado

#### Componentes funcionales (función de flecha de ES6)

```jsx
const Cat = props => { 
  return ( 
    <div> 
      <h1>{props.name}</h1> 
      <p>{props.color}</p> 
    </div>; 
  ); 
 }; 
```

#### Componentes de retorno implícito

```jsx
const Cat = props => 
  <div> 
    <h1>{props.name}</h1> 
    <p>{props.color}</p> 
  </div>; 

```
