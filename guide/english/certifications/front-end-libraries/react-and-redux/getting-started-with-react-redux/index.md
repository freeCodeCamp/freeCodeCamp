---
title: Getting Started with React Redux
---
## Getting Started with React Redux

### Hint 1
Remember to pass parameter props to constructor

### Hint 2
Remember the super(props) in constructor

### Solution
<details>
  <summary>Spoiler!</summary>

```jsx
class DisplayMessages extends React.Component {
  // change code below this line
  constructor(props){
    super(props);
    this.state={
      input:'',
      messages:[]
    }
  }
  // change code above this line
  render() {
    return <div />
  }
};
```
</details>
