---
title: Optimize Re-Renders with shouldComponentUpdate
---
## Optimize Re-Renders with shouldComponentUpdate

## Hint:

Check to see if the value of ```nextProps``` is even.

## Solution:

For this solution, you will use an ```if/then``` statement to check whether the value of ```nextProps``` is even. ```nextProps``` differs from ```props``` in that it is a value that has not been rendered in the UI yet so in the ```shouldComponentUpdate()``` method, you are essentially asking permission to update the UI with the ```nextProps``` value.

```jsx
class OnlyEvens extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should I update?');
     // change code below this line
      if (nextProps.value % 2 == 0) {
        return true;
      }
      return false;
     // change code above this line
  }
  componentWillReceiveProps(nextProps) {
    console.log('Receiving new props...');
  }
  componentDidUpdate() {
    console.log('Component re-rendered.');
  }
  render() {
    return <h1>{this.props.value}</h1>
  }
};

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.addValue = this.addValue.bind(this);
  }
  addValue() {
    this.setState({
      value: this.state.value + 1
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.addValue}>Add</button>
        <OnlyEvens value={this.state.value}/>
      </div>
    );
  }
};
```
<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
