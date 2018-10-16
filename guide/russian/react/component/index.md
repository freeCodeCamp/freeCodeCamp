---
title: React - Components
localeTitle: Реакция - Компоненты
---
## Реакция - Компоненты

Компоненты могут повторно использоваться в реакции.js. Вы можете ввести значение в реквизиты, как указано ниже:

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

`name="Faisal Arkan"` даст значение в `{props.name}` из `function Welcome(props)` и возвращающего компонента, который дал значение по `name="Faisal Arkan"` , после чего реакция отобразит элемент в html.

### Другие способы объявления компонентов

Существует много способов объявления компонентов при использовании React.js, но есть два вида компонентов, компоненты **_без_** учета **_состояния и_** компоненты с **_состоянием_** .

### Stateful

#### Компоненты типа класса

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

### Безстоящие компоненты

#### Функциональные компоненты (функция стрелок от ES6)

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

#### Неявные возвращаемые компоненты

```jsx
const Cat = props => 
  <div> 
    <h1>{props.name}</h1> 
    <p>{props.color}</p> 
  </div>; 

```