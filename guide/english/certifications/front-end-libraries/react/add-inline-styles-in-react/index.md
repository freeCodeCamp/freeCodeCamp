---
title: Add Inline Styles in React
---
## Add Inline Styles in React
You can declare a component style passing the object directly as a prop 'style'. Just remember that each property of the style object is camelcased. So properties like 'font-size' is declared 'fontSize' to be a valid javascript object property.

### Spoiler
```jsx
class Colorful extends React.Component {
  render() {
    // change code below this line
    return (
      <div style={{color: "yellow", fontSize: 24}}>Style Me!</div>
    );
    // change code above this line
  }
};
```

### Resources
[DOM Elements Style](https://reactjs.org/docs/dom-elements.html#style)
