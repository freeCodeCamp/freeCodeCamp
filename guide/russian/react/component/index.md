---
title: React - Components
localeTitle: React - Компоненты
---
## React - Компоненты

Компоненты могут повторно использоваться в react.js. Вы можете ввести значение в props, как указано ниже:

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

Значение `name="Faisal Arkan"` будет присвоено `{props.name}` из функции `function Welcome(props)` и вернет компоненты,
который даст значение `name="Faisal Arkan"` , после чего react отобразит элемент в html.

### Другие способы объявления компонентов

Существует много способов объявления компонентов при использовании React.js,
но есть два вида компонентов, компоненты ***stateless*** и компоненты ***stateful***.

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

### Stateless

#### Функциональные компоненты (Arrow Function из стандарта ES6)

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
