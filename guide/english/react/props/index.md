---
title: Props
---
### What are the props?
Props (short for properties) are the data passed into the component. They are immutable (read-only).


### Example: 

```javascript
class Example extends Component {
  render() {
    return <Person name="Sam" />;
  }
}

const person = (props) => {
  return (
    <div>
      <h1>Welcome {props.name}</h1>
      <h2>Enjoy your stay</h2>
    </div>
  );
}

// Which rendering the Example class would output
// Welcome Sam Enjoy your stay
```
