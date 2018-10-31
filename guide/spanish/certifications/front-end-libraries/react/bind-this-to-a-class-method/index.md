---
title: Bind 'this' to a Class Method
localeTitle: Enlazar 'esto' a un método de clase
---
## Enlazar 'esto' a un método de clase

Si un método en la `class` JavaScript necesita acceder a algún `state` interno de la instancia, como `this.state` , el método debe estar vinculado a la instancia de la `class` . Una descripción más detallada de "este" enlace se puede encontrar [aquí](https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch2.md)

### Sugerencia 1

Como muchas cosas en la programación, hay más de una forma de vincular esto. Para este desafío vamos a seguir con el enlace de constructor.

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

## Alerón

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