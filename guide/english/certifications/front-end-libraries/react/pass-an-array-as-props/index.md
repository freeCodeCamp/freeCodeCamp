---
title: Pass an Array as Props
---
## Pass an Array as Props

To pass an array as a prop, first an array must be declared as a "tasks" prop on each of the components to be rendered:

```javascript
const List= (props) => {
  return <p></p>
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        <List tasks={["Walk", "Cook", "Bake"]} />
        <h2>Tomorrow</h2>
        <List tasks={["Study", "Code", "Eat"]}/>
      </div>
    );
  }
};
```

Then, the props must be handled inside the "List" component:

```javascript
const List= (props) => {
  return <p>{props.tasks.join(", ")}</p>
};

// ... same as above
```

The `.join(", ")` method is used to take each element from within the array and join them into a string to be displayed.

We are using the modularity of React in this example to display the tasks passed by two different components to a common component which renders the final HTML.

