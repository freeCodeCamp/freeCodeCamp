---
title: Create a Stateful Component
---
## Create a Stateful Component

#### Hint 1 :
```JSX
class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    // initialize state here
        // "This" area may be a good place to use "dot" notation.
        // dont forget to describe "name" property inside the state and assign your name to a property of "name". 
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};
```

## Solution 
```JSX
class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    // initialize state here
    
    this.state = {
      name : "Name"
    }

  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};
```
