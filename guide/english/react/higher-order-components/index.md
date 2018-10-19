---
title: Higher-Order Components
---

## Higher-Order Components
In React, a **Higher-Order Component** (HOC) is a function that takes a component and return a new component. Programmers use HOCs to achieve **component logic reuse**.

If you've used Redux's `connect`, you've already worked with Higher-Order Components.

The core idea is:
```jsx
const EnhancedComponent = enhance(WrappedComponent);
```

Where:
  * `enhance` is the Higher-Order Component;
  * `WrappedComponent` is the component you want to enhance; and
  * `EnhancedComponent` is the new component created.

This could be the body of the `enhance` HOC:
```jsx
function enhance(WrappedComponent) {
  return class extends React.Component {
    render() {
      const extraProp = 'This is an injected prop!';
      return (
        <div className="Wrapper">
          <WrappedComponent
            {...this.props}
            extraProp={extraProp}
          />
        </div>
      );
    }
  }
} 
```

In this case, `enhance` returns an **anonymous class** that extends `React.Component`. This new component is doing three simple things:

  * Rendering the `WrappedComponent` within a `div` element;
  * Passing its own props to the `WrappedComponent`; and
  * Injecting an extra prop to the `WrappedComponent`.

HOCs are just a pattern that uses the power of React's compositional nature. **They add features to a component**. There are a lot more things you can do with them!

## Other Resources
* [React docs: Higher-Order Components](https://reactjs.org/docs/higher-order-components.html)