---
title: Use React to Render Nested Components
---
## Use React to Render Nested Components

You have learned in earlier lessons, that there are two ways to create a React component:

1. Stateless functional component - using a JavaScript function.

2. Define a React component using the ES6 syntax.

In this quiz, we have defined two stateless functional components, i.e. using JavaScript functions. Recall, once a component has been created, it can be rendered in the same way as an HTML tag, by using the component name inside HTML opening and closing brackets. For example, to nest a component called Dog inside a parent component called Animals, you'd simply return the Dog component from the Animals component like this:

```javascript
return (
  <Dog />
)
```
Try this with the TypesOfFruit and Fruits components.
