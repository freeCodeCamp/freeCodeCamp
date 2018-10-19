---
title: Write a React Component from Scratch
---
## Write a React Component from Scratch
In this challenge we want to create a `class` react component (React components can be `class` components or `function` components). All of our class components are going to be an extention of `React.Component`. For example we can start to make a component called `FirstComponent` with:
```javascript
class FirstComponent extends React.Component {

};
```
We also need to be sure to define the `constructor` for our new class. It is best practice to call any component's `constructor` with `super` and to pass `props` to both. `super` pulls the `constructor` of our component's parent class (in this case `React.Component`). Now, the code for our component looks like this:
```javascript
class FirstComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  
};
```
Now all that's left to do is define what our component will `render`! We do this by calling the component's `render` method, and returning our JSX code:
```javascript
class FirstComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      // The JSX code you put here is what your component will render
    );
  }
};
```
Once your JSX code is in there, your component is complete! If you want a more granular tutorial of React components Samer Buna [wrote a great article](https://medium.freecodecamp.org/how-to-write-your-first-react-js-component-d728d759cabc).
