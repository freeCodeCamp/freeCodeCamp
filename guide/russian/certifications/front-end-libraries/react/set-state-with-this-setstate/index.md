---
title: Set State with this.setState
localeTitle: Установить состояние с this.setState
---
## Установить состояние с this.setState

#### Подсказка 1:

```JSX
class MyComponent extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      name: 'Initial State' 
    }; 
    this.handleClick = this.handleClick.bind(this); 
  } 
  handleClick() { 
    // change code below this line 
       // Update the state data by using "this.setState()" method. 
       // You can look to the sample inside the description for calling "setState()" method. 
    // change code above this line 
  } 
  render() { 
    return ( 
      <div> 
        <button onClick={this.handleClick}>Click Me</button> 
        <h1>{this.state.name}</h1> 
      </div> 
    ); 
  } 
 }; 
```

## Решение

```JSX
class MyComponent extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      name: 'Initial State' 
    }; 
    this.handleClick = this.handleClick.bind(this); 
  } 
  handleClick() { 
    // change code below this line 
    this.setState({ 
      name: 'React Rocks!' 
    }); 
    // change code above this line 
  } 
  render() { 
    return ( 
      <div> 
        <button onClick={this.handleClick}>Click Me</button> 
        <h1>{this.state.name}</h1> 
      </div> 
    ); 
  } 
 }; 
```

### Код Объяснение:

когда пользователи нажимают кнопку, вызывается метод «handleClick ()» и внутри этого метода данные состояния constuctor будут обновляться методом setState (). то тег h1 будет изменен с новыми данными состояния конструктора.