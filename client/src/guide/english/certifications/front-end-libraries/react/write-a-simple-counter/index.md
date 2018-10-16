---
title: Write a Simple Counter
---
## Write a Simple Counter

#### Hint 1:
```JSX
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    // change code below this line
         // Remember the previous challange. 
         // Bind "this" for each of these three method (increment(),decrement() and reset()).
    // change code above this line
  }
  // change code below this line
         // Define these three method here.
         // Inside these methods, call "setState()" method to update the data of construtor`s state. 
  // change code above this line
  render() {
    return (
      <div>
        <button className='inc' onClick={this.increment}>Increment!</button>
        <button className='dec' onClick={this.decrement}>Decrement!</button>
        <button className='reset' onClick={this.reset}>Reset</button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
};
```

## Solution:
```JSX
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    // change code below this line
      this.increment = this.increment.bind(this); 
      this.decrement = this.decrement.bind(this);
      this.reset = this.reset.bind(this);
    // change code above this line
  }
  // change code below this line
    increment(){this.setState({count: this.state.count + 1})}
    decrement(){this.setState({count: this.state.count - 1})}
    reset(){this.setState({count: 0})}
  // change code above this line
  render() {
    return (
      <div>
        <button className='inc' onClick={this.increment}>Increment!</button>
        <button className='dec' onClick={this.decrement}>Decrement!</button>
        <button className='reset' onClick={this.reset}>Reset</button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
};
```
