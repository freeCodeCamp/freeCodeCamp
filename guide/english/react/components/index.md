---
title: Components
---
## Components

Components are the building blocks of React. They help you divide the functionality of the UI into several pieces which can be reused throughout the application. You can inject value into props as given below:

```jsx

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Faisal Arkan" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);

```

The value ```name="Faisal Arkan"``` will be assigned to ```{props.name}``` from ```function Welcome(props)``` and returns a component ```<h1>Hello, Faisal Arkan</h1>``` which is saved into the const variable ```element```. The component can then be rendered via ```ReactDOM.render(element, document.getElementById('root'));```. ```document.getElementById('root')``` in this case is the target location you would like the ```element``` component to be rendered.

### Other ways to declare components

There are many ways to declare components when using React.js, but there are two kinds of components: ***stateful*** and ***stateless***.

### Stateful Components

A component should be created as a stateful component if:
1. it needs to utilize its own state (also known as *local state*)
2. it requires any of React's lifecycle methods

```jsx

class Cat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      humor: 'happy'
    }
  }
  render() {
    return(
      <div>
        <h1>{this.props.name}</h1>
        <p>
          {this.props.color}
        </p>
      </div>
    );
  }
}

```

### Stateless Components

If a component does not have any of the requirements mentioned for stateful components, then it's usually a good idea to make it a stateless component; these components are shorter and more readable (especially when implicitly returned).

#### Functional Component Using ES6's Arrow Function

```jsx

const Cat = props => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.color}</p>
    </div>;
  );
};

```

#### Implicitly Returned Arrow Function Component

Functionally the same as the previous example, but implicit return allows us to omit both the code block (curly braces) and the return statement.

```jsx

const Cat = props =>
  <div>
    <h1>{props.name}</h1>
    <p>{props.color}</p>
  </div>;

```

### More Information:

[Components and Props](https://reactjs.org/docs/components-and-props.html)
[Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
