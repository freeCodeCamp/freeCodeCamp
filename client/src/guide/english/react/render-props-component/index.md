---
title: Render Props Component
---

## Render Props Component

Render props is an advanced React pattern, yet so simple!

### Example

This is an example on how you can use render prop for a toggle functionality.

```jsx
import React, { PureComponent } from "react";

class Toggle extends PureComponent {
  state = {
    on: false
  };

  toggle = () => {
    this.setState({
      on: !this.state.on
    });
  };

  render() {
    const { children } = this.props;
    return children({
      on: this.state.on,
      toggle: this.toggle
    });
  }
}

export default Toggle;
```

This Toggle component will return it's children `state.on` and the function toggle. Which can be used in it's child components.

This Toggle can be used as follows:

```jsx
<Toggle>
  {({ on, toggle }) => (
    <Fragment>
      <button onClick={toggle}>Show / Hide</button>
      {on && <h1>I can be toggled on or off!</h1>}
    </Fragment>
  )}
</Toggle>
```

As you can see, the toggle functionality can be used by it's child Button to toggle some content. if on is true the h1-tag will get rendered otherwise not.

## Other Resources

* [React docs: Render props](https://reactjs.org/docs/render-props.html)
