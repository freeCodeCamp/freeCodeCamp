---
title: Bind 'this' to a Class Method
localeTitle: Vincule 'this' a um método de classe
---
## Vincule 'this' a um método de classe

Se um método na `class` JavaScript precisar acessar algum `state` interno da instância, como `this.state` , o método precisará estar vinculado à instância da `class` . Uma descrição mais detalhada da ligação 'this' pode ser encontrada [aqui](https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch2.md)

### Sugestão 1

Como muitas coisas na programação, há mais de uma maneira de vincular isso. Para este desafio, vamos nos ater à ligação de construtores.

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

## Spoiler

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