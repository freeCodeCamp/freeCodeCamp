---
title: Render Conditionally from Props
---
# Render Conditionally from Props


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

Change `handleClick()` with proper increment statement.

```jsx
handleClick() {
  this.setState({
    counter: this.state.counter + 1
  });
}
```
In `render()` method use `Math.random()` as mentioned in the challenge description and write a ternary expression to pass `props` in the **Results** component.
```jsx
 let expression = Math.random() > .5;
    
{(expression == 1)? <Results fiftyFifty="You win!"/> : <Results fiftyFifty="You lose!"/> }

```

Then render the `fiftyFifty` props in the Results component.
```jsx
  <h1>
  {
    this.props.fiftyFifty
  }
  </h1>
```

</details>