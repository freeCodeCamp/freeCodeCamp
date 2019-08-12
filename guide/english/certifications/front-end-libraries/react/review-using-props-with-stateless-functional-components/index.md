---
title: Review Using Props with Stateless Functional Components
---
# Review Using Props with Stateless Functional Components


---
## Hints

### Hint 1
A functional(a.k.a. stateless) component is just a plain javascript function which takes props as an argument and returns a react element.

### Hint 2
Use `Component.defaultProps` to set default props.

### Hint 3
Use `Component.propTypes` to set props types.


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
const Camper = props => <p>{props.name}</p>;

Camper.defaultProps = {
  name: "CamperBot"
};

Camper.propTypes = {
  name: PropTypes.string.isRequired
};
```

#### Relevant Links
  - [Typechecking With PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)
</details>
