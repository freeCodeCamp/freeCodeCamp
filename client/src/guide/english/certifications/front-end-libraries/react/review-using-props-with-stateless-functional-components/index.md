---
title: Review Using Props with Stateless Functional Components
---
## Review Using Props with Stateless Functional Components

### Hints
  - A functional(a.k.a. stateless) component is just a plain javascript function which takes props as an argument and returns a react element.
  - Use `Component.defaultProps` to set default props.
  - Use `Component.propTypes` to set props types.

### Solution
```javascript
const Camper = props => (<p>{props.name}</p>);

Camper.defaultProps = {
  name: 'CamperBot'
};

Camper.propTypes = {
  name: PropTypes.string.isRequired
};
```

### Relevant link
  - [Typechecking With PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)
