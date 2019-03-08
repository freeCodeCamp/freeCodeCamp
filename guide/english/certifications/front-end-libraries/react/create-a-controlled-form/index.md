---
title: Create a Controlled Form
---
## Create a Controlled Form

Creating a controlled form is the same process as creating a controlled input, except you need to handle a submit event.

First, create a controlled input that stores its value in state, so that there is a single source of truth. 
(This is what you did in the previous challenge.) Create an input element, set its value attribute to the input variable located in state. Remember, state can be accessed by `this.state`. Next, set the input element's `onChange` attribute to call the function 'handleChange'.

### Solution
```react.js
<input value={this.state.input} onChange={this.handleChange}/>
```

Next, create the handleSubmit method for your component. First, because your form is submitting you will have to prevent the page from refreshing. Second, call the `setState()` method, passing in an object of the different key-value pairs that you want to change. In this case, you want to set 'submit' to the value of the variable 'input' and set 'input' to an empty string. 
```react.js
handleSubmit(event) {
  event.preventDefault();
  this.setState({
    input: '',
    submit: this.state.input
  });
}
```

Now that your data is being handled in state, we can use this data. Create an `h1` element. Inside of your `h1` element put your 'submit' variable. Remember, 'submit' is located within state so you'll need to use `this.state`. Additionally, placing the variable within JSX requires curly braces `{ }` because it is JavaScript. 
```jsx
<h1>{this.state.submit}</h1>
```
