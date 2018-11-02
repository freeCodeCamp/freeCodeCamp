---
title: Use Advanced JavaScript in React Render Method
---
## Use Advanced JavaScript in React Render Method

### Method
While you are inside the render method and not inside the return method, you can write JavaScript **without** wrapping it inside curly braces.

First, you will have to set the constant 'answer' to a value. Access the 'possibleAnswers' array using the value of 'randomIndex', which is located within the state of your component. Remember, you access state using `this.state`.

### Solution
```js
const answer = possibleAnswers[this.state.randomIndex];
```

Next, insert your const 'answer' into the p-tags. Make sure to wrap it with curly braces `{ }`.
```jsx
<p>
  {answer}          
</p>
```
