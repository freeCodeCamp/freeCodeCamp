---
title: Render Conditionally from Props
---
## Render Conditionally from Props
This is a bit tricky challenge but easy though.

## Solution
Change `handleClick()` with proper increment statement.

```react.js
handleClick() {
  this.setState({
    counter: this.state.counter + 1
  });
}
```
In `render()` method use `Math.random()` as mentioned in the challenge description and write a ternary expression to pass `props` in the **Results** component.
```react.js
 let expression = Math.random() > .5;
    
{(expression == 1)? <Results fiftyFifty="You win!"/> : <Results fiftyFifty="You lose!"/> }

```

Then render the `fiftyFifty` props in the Results component.
```react.js
  <h1>
  {
    this.props.fiftyFifty
  }
  </h1>
```
