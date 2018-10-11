---
title: Create a Controlled Input
---
## Create a Controlled Input

Here the idea is to create a controlled input where the text updates from your state, not from the browser.

So to begin with we have a skeleton in which we have a class named `ControlledInput` and a state variable named `input`. Now all you need to do is take that state and when a change in the input box is observed trigger a function that changes the value inside that input box and in the paragraph below it.

So you first step will be making a function that changes the state variable `input`.
```
handleChange(event) {
    this.setState({
      input: event.target.value
    });
}
  
```
Now your next step will involve creating a input box and trigger it when someone types anything. Luckily we have a event called `onChange()` to serve this purpose. <br>
PS - Here is another way to bind `this` into a function 
```
<input onChange = {this.handleChange.bind(this)}/>
```
But this just won't serve your purpose. Although you might feel that its working. So what's happening here is text updates from from the browser not the state. So to correct this we'll add a `value` attribute and set it to `this.state.input` to the input element which will make the input get controlled by state.

```
<input value = {this.state.input} onChange = {this.handleChange.bind(this)}/>
```

It can be a bit hard to digest but to make things further clear try removing the entire `onChange` thing so your code looks like this
```
<input value = {this.state.input}/>
```
Now run the tests again are you able to type anything? <br>
The answer to it will be "NO" since your input box is getting value from the state variable `input` since there is no change in the state `input`(an empty string initially) which will only happen when you trigger the function `handleChange()` which will only happen when you have a event handler like `onChange()` hence the string inside the input box will remain as it is i.e, an empty string.
