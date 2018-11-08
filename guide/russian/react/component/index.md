---
title: React - Components

localeTitle: React - Компоненты
---
## React - Компоненты


В библиотеке react.js создаваемые компоненты могут быть использованы повторно. Вы можете передавать различные значения в компоненты с помощью свойств - props, как приведено ниже:


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

В данном случае, значение свойства name - `name="Faisal Arkan"` будет сохранено в `{props.name}` из `function Welcome(props)` и возвратит компонент `<h1>Hello, Faisal Arkan</h1>`, который сохраняется в константу `elements`. Далее компонент отрисовывается с помощью вызова функции `ReactDOM.render(element, document.getElementById('root'));`. В данном случае `document.getElementById('root')`, элемент в котором вы хотите разместить и визуализировать созданный компонент.

### Другие способы объявления компонентов

Существует множество способов объявления компонентов при использовании библиотеки React.js, но выделяют два вида компонентов, компоненты **_без_состояния_** (stateless) и  компоненты с **_состоянием_** (statefull) .

### Компоненты с состоянием

#### Компоненты с использованием классов


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

### Компоненты без состояния

#### Функциональные компоненты (стрелочные функции из ES6)

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

#### Неявно возвращаемые компоненты

```jsx
const Cat = props => 
  <div> 
    <h1>{props.name}</h1> 
    <p>{props.color}</p> 
  </div>; 

```
