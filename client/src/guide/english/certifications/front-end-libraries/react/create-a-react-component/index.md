---
title: Create a React Component
---
## Create a React Component

## Hint 1:
- You're going to be seeing these React Class Components all the time, so now would be a great time to get comfortable with them. Remember in this exercise you don't have to define the component, you just need to make a function return a little html in between the marked lines.
- Remember the previous section and return a "div" element which contains an "h1" with the text Hello React!.
- "div" element has a child so remember to close all tags.

## Solution 
```javascript
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // change code below this line
    return (
      <div>
       <h1>Hello React!</h1>
      </div>
    );
    // change code above this line
  }
};
```

Note that you don't need to put quotes around the text, because when you are working with JSX it is treated as HTML. Also check to make sure your spelling, case, and punctuation are correct! If all this code looks strange, go check out some of the great material on Javascript ES6 here on freeCodeCamp.
