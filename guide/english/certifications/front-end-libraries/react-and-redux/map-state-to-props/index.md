---
title: Map State to Props
---
## Map State to Props

### Solution

````javascript
const state = [];

const mapStateToProps = state => {
  return {
    messages: state
  };
};
````
