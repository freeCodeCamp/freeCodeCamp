---
title: Render HTML Elements to the DOM
---
# Render HTML Elements to the DOM

To render an element to the DOm, we use the following syntax
````javascript
ReactDOM.render(<item to be rendered>, <where to be rendered>);
````

## Solution

Following the syntax, we would add this line of code to render the JSX element to the div with the id of challenge-node.
````javascript
ReactDOM.render(JSX,document.getElementById('challenge-node'));
````
