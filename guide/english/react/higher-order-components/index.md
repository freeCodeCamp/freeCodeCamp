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

### Caveats
Higher-order components come with a few caveats that aren’t immediately obvious if you’re new to React.

#### Refs Aren't Passed Through
While the convention for higher-order components is to pass through all props to the wrapped component, this does not work for refs. That’s because `ref` is not really a prop — like `key`, it’s handled specially by React. If you add a ref to an element whose component is the result of a HOC, the ref refers to an instance of the outermost container component, not the wrapped component.

The solution for this problem is to use the React.forwardRef API (introduced with React 16.3)
```jsx
function enhance(WrappedComponent) {
  const wrapper = React.createRef((props,ref) => {
   return(
     <div className="Wrapper">
        <WrappedComponent
          {...props}
          ref={ref}
         />
      </div>
   )
  })
} 
```
HOCs are just a pattern that uses the power of React's compositional nature. **They add features to a component**. There are a lot more things you can do with them!

## Other Resources
* [React docs: Higher-Order Components](https://reactjs.org/docs/higher-order-components.html)
* [React docs: Forwarding Refs](https://reactjs.org/docs/forwarding-refs.html)
