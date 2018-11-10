---
title: React - Components
localeTitle: React - Componentes
---
## React - Componentes

Componentes são reutilizáveis ​​em react.js. Você pode injetar valor em adereços como dado abaixo:

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

`name="Faisal Arkan"` vai dar valor em `{props.name}` da `function Welcome(props)` e retornando o componente que deu valor pelo `name="Faisal Arkan"` , Depois disso o reagente irá renderizar o elemento em html.

### Outras formas de declarar componentes

Há muitas maneiras de declarar componentes ao usar o React.js, mas há dois tipos de componentes, componentes **_sem_** **_estado_** e componentes **_com estado_** .

### Com estado

#### Componentes do tipo de classe

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

### Componentes sem estado

#### Componentes funcionais (função de seta do ES6)

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
