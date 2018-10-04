---
title: Pass an Array as Props
---
## Pass an Array as Props

To pass an array as a prop, first an array must be declared as a prop inside the concerned components:

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
        <List tasks={["Walk ", "Cook ", "Bake"]} />
        <h2>Tomorrow</h2>
        <List tasks={["Study ","Code ","Eat"]}/>
      </div>
    );
  }
};
```

Then, the props must be passed inside the List componene

```javascript
const List= (props) => {
  return <p>{props.tasks.join(", ")}</p>
};

// ... same as above
```

The ```javascript .join(", ") ``` is used to separate diffetent elements of the array and display then with a comma and a space in between.

We are using the modularity of React in this example to display the tasks passed by two different components to a common componenet which renders the final HTML.
