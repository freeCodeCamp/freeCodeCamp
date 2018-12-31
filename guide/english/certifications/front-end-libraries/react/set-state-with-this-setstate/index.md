---
title: Set State with this.setState
---
## Set State with this.setState

#### Hint 1:
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

## Solution
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
### Code Explanation:

 when users click the button the "handleClick()" method will be called and 
inside this method the data of the constuctor\`s state will be updated by "setState()" method.
then h1 tag will be changed with the new data of the constructor\`s state.


