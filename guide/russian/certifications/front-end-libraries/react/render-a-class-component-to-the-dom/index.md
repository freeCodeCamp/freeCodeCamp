---
title: Render a Class Component to the DOM
localeTitle: Отобразить компонент класса в DOM
---
## Отобразить компонент класса в DOM

Ваш код должен выглядеть примерно так:

```javascript
class TypesOfVehicles extends React.Component { 
    constructor(props) { 
        super(props); 
    } 
    render() { 
        return ( 
          <div> 
          <h1>Types of Vehicles:</h1> 
          <Car /> 
          <Motorcycle /> 
          </div> 
        ); 
    } 
 } 
 ReactDOM.render(<TypesOfVehicles />,'node-id') 
```

Синтаксис ReactDOM.render может быть немного сложным, вам нужно использовать треугольные скобки при передаче в Class Component. Также два подкомпонента объявлены за кулисами, что может сбивать с толку, если вы привыкли ко всем переменным, определенным в редакторе кода и видимым перед вами.

### намек

*   используйте document.getElementById ('id'), чтобы получить целевой узел

### Соответствующая ссылка

*   [Рендеринг элементов](https://reactjs.org/docs/rendering-elements.html)