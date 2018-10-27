---
title: Components
---
## Components

Components are the building structure(core) of your React code and applications. As a React developer you are going to work with them on daily basis. You should try to make everything into a component, a button, text or even an icon. From the basic components you can make your more complex components. A good example of a complex component is everybodys belowed Card - it mostly consists of some sort of head with a heading and body with some text. Try to make your components as reusable as you can, because you are going to use e.g. Text component a huge load of times in your application with different font sizes, weights, colors, etc. That's whats great about components! You can change how they look, just by changing few props. You can inject value into props as given below :

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

### More Information:

[https://reactjs.org/docs/components-and-props.html](Components and Props)
