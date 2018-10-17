---
title: Bind 'this' to a Class Method
localeTitle: Привязать 'это' к методу класса
---
## Привязать 'это' к методу класса

Если метод `class` JavaScript должен получить доступ к некоторому внутреннему `state` экземпляра, например `this.state` , этот метод должен быть привязан к экземпляру `class` . Более подробное описание «этой» привязки можно найти [здесь](https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch2.md)

### Подсказка 1

Как и в программировании, существует много способов связать это. Для этой задачи мы будем придерживаться привязки конструктора.

```js
class MyClass { 
  constructor() { 
    this.myMethod = this.myMethod.bind(this); 
  } 
 
  myMethod() { 
    // whatever myMethod does 
  } 
 } 
```

## Спойлер

```jsx
class MyComponent extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      itemCount: 0 
    }; 
    // change code below this line 
    this.addItem = this.addItem.bind(this); 
    // change code above this line 
  } 
  addItem() { 
    this.setState({ 
      itemCount: this.state.itemCount + 1 
    }); 
  } 
  render() { 
    return ( 
      <div> 
        { /* change code below this line */ } 
        <button onClick={this.addItem}>Click Me</button> 
        { /* change code above this line */ } 
        <h1>Current Item Count: {this.state.itemCount}</h1> 
      </div> 
    ); 
  } 
 } 

```