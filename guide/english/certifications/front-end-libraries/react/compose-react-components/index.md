---
title: Compose React Components
---
## Compose React Components

### Hint 

Use nested components as in the previous challemge to render components.

### Solution

The following is the solution to the chakkenge, where it render Citrus and NonCitrus in a component which is then rendered in another:
```jsx
class Fruits extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        <NonCitrus />
        <Citrus />
      </div>
    );
  }
};

class TypesOfFood extends React.Component {
  constructor(props) {
     super(props);
  }
  render() {
    return (
      <div>
        <Fruits />
        <Vegetables />
      </div>
    );
  }
};
```

### Relevant Links:
  - [Components and Props](https://reactjs.org/docs/components-and-props.html)
  - [Nested Components](http://www.reactjstutorial.net/nested-components.html)
