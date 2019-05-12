---
title: Change Inline CSS Conditionally Based on Component State
---
## Change Inline CSS Conditionally Based on Component State

## Hint 1:

You are going to be checking the length of ```this.state.input``` so use its ```.length``` property.

```
this.state.input.length
```

## Hint 2:

You are entering code before the return statement so you can use a pure JavaScript ```if/then``` statement.

## Solution:

You will use an ```if/then``` statement to check the value of ```this.state.input.length```. If it is longer than 15, assign ```'3px solid red'``` to ```inputStyle.border```.

```jsx

class GateKeeper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ input: event.target.value })
  }
  render() {
    let inputStyle = {
      border: '1px solid black'
    };
    // change code below this line
    if (this.state.input.length > 15) {
      inputStyle.border = '3px solid red';
    }
    // change code above this line
    return (
      <div>
        <h3>Don't Type Too Much:</h3>
        <input
          type="text"
          style={inputStyle}
          value={this.state.input}
          onChange={this.handleChange} />
      </div>
    );
  }
};
```
<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

## Solution 
Write a conditional statement that is evaluated according to your state, as mentioned in the challenge description, checks the length of the input and assigns a new object to the inputStyle variable.

```react.js
if (this.state.input.length > 15) {
  inputStyle = {
    border: '3px solid red'
  }
}
```
