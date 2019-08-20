---
title: React - Components
localeTitle: React - Componentes
---
## React - Componentes

Componentes são como funções JavaScript. Eles aceitam inputs (conhecido como `props`) e retornam elementos React descrevendo o que deve aparecer na tela. Veja o exemplo abaixo:

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

No exemplo acima, vemos que um valor é passado para a propriedade `name="Faisal Arkan"` o valor de `name` estará disponível em `{props.name}` dentro da função `Welcome`, depois disso é renderizado o elemento em html.

### Outras formas de declarar componentes

Há muitas maneiras de declarar componentes em React, mas há dois tipos de componentes, componentes **_sem_** **_estado_** e componentes **_com estado_** .

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

#### Componentes funcionais (Arrow function do ES6)

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
