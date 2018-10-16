---
title: Pass a Callback as Props
---
## Pass a Callback as Props

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
### Description
- Add the `GetInput` component to the render method in MyApp, then pass it a prop called `inpu`t assigned to `inputValue` from MyApp's state. Also create a prop called `handleChange` and pass the input handler `handleChange` to it.
- Add `RenderInput` to the render method in MyApp, then create a prop called `input` and pass the `inputValue` from state to it.

### Hints
- `state` is a property of `Myapp` class, so use 'this.state' to get the object value
- To learn more about state and props, read [State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html) and [Components and Props](https://reactjs.org/docs/components-and-props.html).

### Solution
```javascript
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }
  render() {
    return (
       <div>
        { /* change code below this line */ 
        <GetInput input={this.state.inputValue} handleChange={this.handleChange}/>
        }
        { /* change code above this line */ 
        <RenderInput input={this.state.inputValue}/>
        }
       </div>
    );
  }
};
```
