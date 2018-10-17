---
title: Bind 'this' to a Class Method
---
## Bind 'this' to a Class Method

If a method on JavaScript `class` need to access some internal `state` of the instance, like `this.state`, the method need to be bound to the instance of the `class`. A more detailed description of 'this' binding can be found [here](https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch2.md)

### Hint 1
Like many things in programming, there is more than one way to bind this. For this challenge we are going to stick with constructor binding.

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
