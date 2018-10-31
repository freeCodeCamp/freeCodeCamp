---
title: Use State to Toggle an Element
---
## Use State to Toggle an Element

- You can toggle an element by checking and changing its state.

## Hint 1:

- Remember to bind ```this``` to the method constructor.

```javascript
    this.toggleVisibility = this.toggleVisibility.bind(this);
```

## Hint 2:

- Remember, you can use a JavaScript function to check for the state of an element.

## Solution:

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    // change code below this line
    this.toggleVisibility = this.toggleVisibility.bind(this);
    // change code above this line
  }
  // change code below this line
  toggleVisibility() {
    if (this.state.visibility == true) {
    this.setState({
      visibility: false
    });} else {
      this.setState({
        visibility: true
      })
    }
  }
  // change code above this line
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
};
```

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
