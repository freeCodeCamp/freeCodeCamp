---
title: Props
---
### What are the props?
Props (short for properties) are parameters passed into components in React. React stipulates that props should be immutable (unchanged by the components that use them), and that they should always flow 'downstream' from parent to child. 


---
Simple Example
---

For example, this code renders “Hello, Sara” on the page:
```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);
```
Source: https://reactjs.org/docs/components-and-props.html

Here "element" calls the welcome function with the prop 'name = "Sara"', which creates a header element is then rendered to the screen by ReactDOM.render().
