---
title: State
localeTitle: State
---
# State

State (состояние) - это место, откуда поступают данные.

Мы всегда должны стараться максимально упростить наше состояние и свести к минимуму количество компонентов состояния. Если у нас есть, например, десять компонентов, которым нужны данные из состояния, мы должны создать один компонент контейнера, который будет сохранять состояние для них всех.

Состояние в основном похоже на глобальный объект, доступный везде в компоненте.

Пример компонента Stateful Class:

```javascript
import React from 'react'; 
 
 class App extends React.Component { 
  constructor(props) { 
    super(props); 
 
    // We declare the state as shown below 
 
    this.state = { 
      x: "This is x from state", 
      y: "This is y from state" 
    } 
  } 
  render() { 
    return ( 
      <div> 
        <h1>{this.state.x}</h1> 
        <h2>{this.state.y}</h2> 
      </div> 
    ); 
  } 
 } 
 export default App; 
```

Другой пример:

```javascript
import React from 'react'; 
 
 class App extends React.Component { 
  constructor(props) { 
    super(props); 
 
    // We declare the state as shown below 
    this.state = { 
      x: "This is x from state", 
      y: "This is y from state" 
    } 
  } 
 
  render() { 
    let x1 = this.state.x; 
    let y1 = this.state.y; 
 
    return ( 
      <div> 
        <h1>{x1}</h1> 
        <h2>{y1}</h2> 
      </div> 
    ); 
  } 
 } 
 export default App; 
```

## Обновление State

Вы можете изменить данные, хранящиеся в состоянии вашего приложения, используя метод `setState` на вашем компоненте.

```js
this.setState({ value: 1 }); 
```

Имейте в виду, что `setState` является асинхронным, поэтому вы должны быть осторожны при использовании текущего состояния для установки нового состояния. Хорошим примером этого может быть, если вы хотите увеличить значение в своем состоянии.

#### Неправильно

```js
this.setState({ value: this.state.value + 1 }); 
```

Это может привести к непредвиденному поведению в вашем приложении, если код выше вызывается несколько раз в том же цикле обновлений. Чтобы этого избежать, вы можете передать функцию обратного вызова `setState` для `setState` вместо объекта.

#### Правильно

```js
this.setState(prevState => ({ value: prevState.value + 1 })); 
```

##### Правильнее
```
this.setState(({ value }) => ({ value: value + 1 })); 
```

Если требуется только ограниченное количество полей в объекте состояния, для очистки кода может использоваться уничтожение объекта.

### Больше информации

* [React - State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)
* [React - Lifting State Up](https://reactjs.org/docs/lifting-state-up.html)
* [React Native - State Up](https://facebook.github.io/react-native/docs/state.html)
