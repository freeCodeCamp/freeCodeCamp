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

There are many ways to declare components when using React.js, but there are two kinds of components, ***stateless*** components and ***stateful*** components.

### Stateful

#### Class Type Components

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

#### Functional Components (Arrow Function from ES6)

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

#### Implicit Return Components

```jsx

const Cat = props =>
  <div>
    <h1>{props.name}</h1>
    <p>{props.color}</p>
  </div>;

```

### Pure Components

This type of component was added in React 16 and can be used to declare stateless non-functional components.
These components work like normal stateful components (class-based component) but with `shouldComponentUpdate()` pre-defined.
They are the fastest components and make the render cycle much cleaner and leaner.

```jsx
class Cat extends React.PureComponent {
  render() {
      return(
        <div>
          <h1>{this.props.name}</h1>
          <p>{props.color}</p>
        </div>
      );
    }
}

```

This component will only render if there is a change in its props; not when the parent re-renders.

### More Information:

[https://reactjs.org/docs/components-and-props.html](Components and Props)
