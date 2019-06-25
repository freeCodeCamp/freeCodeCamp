---
title: Render State in the User Interface
---
## Render State in the User Interface
In the challenge, you will need to render a state value in `<h1>` tag, pretty simple.

## Hint
Just make a `<h1>` tag and render `this.state.name` between tag.


## Solution

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    return (
      <div>
        { /* change code below this line */ }
        <h1>{this.state.name}</h1>
        { /* change code above this line */ }
      </div>
    );
  }
};
```
