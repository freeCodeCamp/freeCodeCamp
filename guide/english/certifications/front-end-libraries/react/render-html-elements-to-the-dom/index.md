---
title: Render HTML Elements to the DOM
---
# Render HTML Elements to the DOM

---
## Problem Explanation
To render an element to the DOM, we use the following syntax
```
ReactDOM.render(<item to be rendered>, <where to be rendered>);
```
Use the Document method `getElementByID()` to target a specfic node in the DOM
```
document.getElementByID(<target node>)
```
Use the Document method `getElementByID()`  as an argument within the ReactDOM method `render()` to solve this challenge.


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

Following the syntax, we would add this line of code to render the JSX element to the `div` with the id of challenge-node.
```javascript
ReactDOM.render(JSX, document.getElementById("challenge-node"));
```
</details>
