---
title: Use a Ternary Expression for Conditional Rendering
---
## Use a Ternary Expression for Conditional Rendering
This challenge is to use Ternary Expression only instead of using `If/Else` in code,

## Hint
Ternary operator has three parts, but you can combine several ternary expressions together. Here's the basic syntax:
```
condition ? expressionIfTrue : expressionIfFalse
```
## Solution
Here is sample solution of using ternary expression.
First you need declare state in constructor like this

```react.js
constructor(props) {
    super(props);
    // change code below this line
      this.state = {
        input: '',
        userAge: ''
      }
    // change code above this line
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
```
Then the ternary operator 
```react.js
{
    /* change code here */
    (this.state.userAge >= 18) ? buttonTwo : (this.state.userAge== '')? buttonOne: buttonThree

}
```
