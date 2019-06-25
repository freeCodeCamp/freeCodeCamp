---
title: Add Inline Styles in React
---
## Add Inline Styles in React
You can declare a component style passing the object directly as a prop 'style'. Just remember that each property of the style object is camelcased. So properties like 'font-size' is declared 'fontSize' to be a valid javascript object property.

### Spoiler
```jsx
const styles = {
  color: 'purple',
  fontSize: 40,
  border: "2px solid purple",
};

class Colorful extends React.Component {
  render() {
    // change code below this line
    return (
      <div style={styles}>Style Me!</div>
    );
    // change code above this line
  }
};
```

### Resources
[DOM Elements Style](https://reactjs.org/docs/dom-elements.html#style)
