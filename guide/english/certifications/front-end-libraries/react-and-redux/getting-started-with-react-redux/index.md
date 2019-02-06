---
title: Getting Started with React Redux
---
## Getting Started with React Redux

## Hint 1:

For this solution you need recall how to add a constructor to your component and include the state: 

 ```JSX
constructor(props){
    super(props);
    this.state = {
        input: "",
        messages: []
    }
}
```

## Solution:

```JSX
class DisplayMessages extends React.Component {
  // change code below this line
  constructor(props){
    super(props);
    this.state = {
        input: "",
        messages: []
    }
  }
  // change code above this line
  render() {
    return <div />
  }
};
```