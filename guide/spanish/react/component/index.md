---
title: React - Components
localeTitle: React - Componentes
---
## React - Componentes

Los componentes son reutilizables en react.js. Puede inyectar valor en los accesorios como se indica a continuación:

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

`name="Faisal Arkan"` le dará valor en `{props.name}` de la `function Welcome(props)` y devolverá el componente que haya dado un valor por `name="Faisal Arkan"` , luego de que reaccione se convertirá el elemento en html.

### Otras formas de declarar componentes.

Hay muchas formas de declarar componentes al usar React.js, pero hay dos tipos de componentes, componentes **_sin_** **_estado_** y componentes con **_estado_** .

### Con estado

#### Clase de componentes de clase

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