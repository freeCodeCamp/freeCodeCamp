---
title: Render with an If/Else Condition
---
## Render with an If/Else Condition

### Method
Inside of the render method of the component, write if/else statements that each have its own return method that has different JSX. This gives programmers the ability to render different UI according to various conditions.

First, wrap the current return method inside of an if statement and set the condition to check if the variable 'display' is true. Remember, you access state using `this.state`.

### Solution
```react.js
if (this.state.display === true) {
  return (
    <div>
      <button onClick={this.toggleDisplay}>Toggle Display</button>
      <h1>Displayed!</h1>
    </div>
  );
}
```

Next, create an else statement that returns the same JSX **without** the `h1` element. 
```react.js
else {
  return (
    <div>
      <button onClick={this.toggleDisplay}>Toggle Display</button>
    </div>
  )
}
```
